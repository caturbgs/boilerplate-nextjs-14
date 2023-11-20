import type { FileWithPath } from 'react-dropzone';

export interface FileWithPreview extends FileWithPath {
  preview: string;
}

export interface StoredFile {
  id: string;
  name: string;
  url: string;
}
