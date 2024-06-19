import { DownloadWhereInput } from "./DownloadWhereInput";
import { DownloadOrderByInput } from "./DownloadOrderByInput";

export type DownloadFindManyArgs = {
  where?: DownloadWhereInput;
  orderBy?: Array<DownloadOrderByInput>;
  skip?: number;
  take?: number;
};
