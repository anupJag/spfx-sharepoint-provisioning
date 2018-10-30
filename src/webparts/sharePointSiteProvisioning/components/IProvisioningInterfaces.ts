export interface IProvisioningDetails {
    SiteTemplate: string;
    SiteName: string;
    SiteURL: string;
    SiteFeatures: IProvisioningFeature[];
    SiteTimeZone: string;
    SiteClassification: string;
    SiteSecondaryUsers: string[];
    SiteTheme: string;
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
    static _Simple: string = "https://team.effem.com/sites/spfxdev/SiteAssets/ProvisioningImages/Simple.PNG";
    static _Social: string = "https://team.effem.com/sites/spfxdev/SiteAssets/ProvisioningImages/Social.PNG";
    static _Traditional: string = "https://team.effem.com/sites/spfxdev/SiteAssets/ProvisioningImages/Traditional.PNG";
    
}