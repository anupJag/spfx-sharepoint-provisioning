export interface IProvisioningDetails {
    SiteTemplate: string;
    SiteName: string;
    SiteURL: string;
    SiteFeatures: IProvisioningFeature[];
}

export interface IProvisioningFeature {
    FeatureName: string;
    FeatureID: string;
}

export interface IProvisioningTimeZone {
    SP_Key: string;
    SP_Value: string;
}