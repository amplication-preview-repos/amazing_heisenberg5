import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DownloadServiceBase } from "./base/download.service.base";

@Injectable()
export class DownloadService extends DownloadServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
