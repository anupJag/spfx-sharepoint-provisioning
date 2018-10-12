declare interface ISharePointSiteProvisioningWebPartStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  DescriptionFieldLabel: string;
  
  //Welcome Label
  WelcomeTitle : string;
  WelcomeSubTitle : string;

}

declare module 'SharePointSiteProvisioningWebPartStrings' {
  const strings: ISharePointSiteProvisioningWebPartStrings;
  export = strings;
}
