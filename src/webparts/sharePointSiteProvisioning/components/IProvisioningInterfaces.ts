export interface IProvisioningDetails {
    SiteTemplate: string;
    SiteName: string;
    SiteURL: string;
    SiteFeatures: IProvisioningFeature[];
    SiteTimeZone: string;
    SiteClassification: string;
    SiteSecondaryUsers: string[];
    SiteTheme: string;
    SiteDesign: string;
}

export interface IProvisioningFeature {
    FeatureName: string;
    FeatureID: string;
}

export interface IProvisioningTimeZone {
    SP_Key: string;
    SP_Value: string;
}

export class LayoutSelectorImages {
    // public static  _Simple: string = "https://team.effem.com/sites/spfxdev/SiteAssets/ProvisioningImages/Simple.PNG";
    // public static _Social: string = "https://team.effem.com/sites/spfxdev/SiteAssets/ProvisioningImages/Social.PNG";
    // public static _Traditional: string = "https://team.effem.com/sites/spfxdev/SiteAssets/ProvisioningImages/Traditional.PNG";


    public static  _Simple: string = "https://publiccdn.sharepointonline.com/myadmo365.sharepoint.com/CDN/ProvisioningImages/Simple.PNG";
    public static _Social: string = "https://publiccdn.sharepointonline.com/myadmo365.sharepoint.com/CDN/ProvisioningImages/Social.PNG";
    public static _Traditional: string = "https://publiccdn.sharepointonline.com/myadmo365.sharepoint.com/CDN/ProvisioningImages/Traditional.PNG";
    
}