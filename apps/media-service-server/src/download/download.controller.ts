import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DownloadService } from "./download.service";
import { DownloadControllerBase } from "./base/download.controller.base";

@swagger.ApiTags("downloads")
@common.Controller("downloads")
export class DownloadController extends DownloadControllerBase {
  constructor(protected readonly service: DownloadService) {
    super(service);
  }
}
