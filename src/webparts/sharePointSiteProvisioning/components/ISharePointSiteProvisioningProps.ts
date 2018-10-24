import { SPHttpClient } from "@microsoft/sp-http";

export interface ISharePointSiteProvisioningProps {
  description: string;
  webURL: string;
  spHttpClient : SPHttpClient;
}