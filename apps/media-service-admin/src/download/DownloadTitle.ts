import { Download as TDownload } from "../api/download/Download";

export const DOWNLOAD_TITLE_FIELD = "id";

export const DownloadTitle = (record: TDownload): string => {
  return record.id?.toString() || String(record.id);
};
