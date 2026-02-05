import { IService, ILocation } from "@/models/Service";

interface ContentVariables {
    service: string;
    city: string;
    state: string;
}

export function replaceVariables(template: string, variables: ContentVariables): string {
    let content = template;
    content = content.replace(/{service}/g, variables.service);
    content = content.replace(/{city}/g, variables.city);
    content = content.replace(/{state}/g, variables.state);
    return content;
}

export function generateMetadataFromService(service: IService, location?: ILocation) {
    const variables = {
        service: service.title,
        city: location ? location.name : 'Global',
        state: location ? location.state : '',
    };

    return {
        title: replaceVariables(service.seoTitleTemplate, variables),
        description: replaceVariables(service.seoDescriptionTemplate, variables),
    };
}

export function generateContentFromService(service: IService, location?: ILocation) {
    const variables = {
        service: service.title,
        city: location ? location.name : 'International',
        state: location ? location.state : '',
    };

    return replaceVariables(service.contentTemplate, variables);
}
