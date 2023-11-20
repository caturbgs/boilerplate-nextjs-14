'use server';

export async function uploadFile(formData: FormData, type: 'image' | 'json' | 'agds' | 'pdf' | 'video') {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL_API}/api/file/upload?type=${type}`, {
    method: 'POST',
    body: formData,
    cache: 'no-store',
  });
  const resp = await res.json();

  if (!res.ok) {
    throw new Error(resp.message ?? 'Failed to upload file');
  }

  return resp;
}

export async function uploadFileBuild(formData: FormData, type: string, version: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL_API}/api/file/upload/build?type=${type}&version=${version}`,
    {
      method: 'POST',
      body: formData,
      cache: 'no-store',
    }
  );
  const resp = await res.json();

  if (!res.ok) {
    throw new Error(resp.message ?? 'Failed to upload file build');
  }

  return resp;
}
