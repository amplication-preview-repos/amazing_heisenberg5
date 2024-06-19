import { Module } from "@nestjs/common";
import { DownloadModuleBase } from "./base/download.module.base";
import { DownloadService } from "./download.service";
import { DownloadController } from "./download.controller";
import { DownloadResolver } from "./download.resolver";

@Module({
  imports: [DownloadModuleBase],
  controllers: [DownloadController],
  providers: [DownloadService, DownloadResolver],
  exports: [DownloadService],
})
export class DownloadModule {}
