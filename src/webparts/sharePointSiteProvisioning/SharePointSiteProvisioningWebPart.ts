import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
  PropertyPaneLabel
} from '@microsoft/sp-webpart-base';

import * as strings from 'SharePointSiteProvisioningWebPartStrings';
import SharePointSiteProvisioning from './components/SharePointSiteProvisioning';
import { ISharePointSiteProvisioningProps } from './components/ISharePointSiteProvisioningProps';

export interface ISharePointSiteProvisioningWebPartProps {
  description: string;
}

export default class SharePointSiteProvisioningWebPart extends BaseClientSideWebPart<ISharePointSiteProvisioningWebPartProps> {

  public render(): void {
    const element: React.ReactElement<ISharePointSiteProvisioningProps > = React.createElement(
      SharePointSiteProvisioning,
      {
        description: this.properties.description
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneLabel('', {
                  text: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
