-- Run this once in the Supabase SQL Editor.
-- Single-row table holding all portfolio content as a JSON blob.

create table if not exists public.site_content (
  id integer primary key default 1,
  data jsonb not null,
  updated_at timestamp with time zone default now(),
  constraint single_row check (id = 1)
);

-- Public can read; only authenticated owner can write.
alter table public.site_content enable row level security;

drop policy if exists "site_content read" on public.site_content;
create policy "site_content read"
  on public.site_content for select
  using (true);

drop policy if exists "site_content write" on public.site_content;
create policy "site_content write"
  on public.site_content for all
  using (auth.role() = 'authenticated')
  with check (auth.role() = 'authenticated');

-- Storage bucket for uploaded images (profile pic, project shots, etc).
insert into storage.buckets (id, name, public)
values ('portfolio', 'portfolio', true)
on conflict (id) do nothing;

-- Public can read images; only authenticated can upload/update/delete.
drop policy if exists "portfolio read" on storage.objects;
create policy "portfolio read"
  on storage.objects for select
  using (bucket_id = 'portfolio');

drop policy if exists "portfolio write" on storage.objects;
create policy "portfolio write"
  on storage.objects for insert
  with check (bucket_id = 'portfolio' and auth.role() = 'authenticated');

drop policy if exists "portfolio update" on storage.objects;
create policy "portfolio update"
  on storage.objects for update
  using (bucket_id = 'portfolio' and auth.role() = 'authenticated');

drop policy if exists "portfolio delete" on storage.objects;
create policy "portfolio delete"
  on storage.objects for delete
  using (bucket_id = 'portfolio' and auth.role() = 'authenticated');
