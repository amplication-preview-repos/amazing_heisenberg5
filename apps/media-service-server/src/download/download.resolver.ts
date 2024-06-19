import * as graphql from "@nestjs/graphql";
import { DownloadResolverBase } from "./base/download.resolver.base";
import { Download } from "./base/Download";
import { DownloadService } from "./download.service";

@graphql.Resolver(() => Download)
export class DownloadResolver extends DownloadResolverBase {
  constructor(protected readonly service: DownloadService) {
    super(service);
  }
}
