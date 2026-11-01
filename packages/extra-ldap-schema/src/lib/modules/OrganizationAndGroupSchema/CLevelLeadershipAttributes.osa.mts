/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { chiefExecutiveOfficerDN } from "../OrganizationAndGroupSchema/chiefExecutiveOfficerDN.oa.mjs";
import { chiefFinancialOfficerDN } from "../OrganizationAndGroupSchema/chiefFinancialOfficerDN.oa.mjs";
import { chiefOperationsOfficerDN } from "../OrganizationAndGroupSchema/chiefOperationsOfficerDN.oa.mjs";
import { chiefInformationOfficerDN } from "../OrganizationAndGroupSchema/chiefInformationOfficerDN.oa.mjs";
import { chiefTechnologyOfficerDN } from "../OrganizationAndGroupSchema/chiefTechnologyOfficerDN.oa.mjs";
import { chiefMarketingOfficerDN } from "../OrganizationAndGroupSchema/chiefMarketingOfficerDN.oa.mjs";
import { chiefHumanResourcesOfficerDN } from "../OrganizationAndGroupSchema/chiefHumanResourcesOfficerDN.oa.mjs";
import { chiefInformationSecurityOfficerDN } from "../OrganizationAndGroupSchema/chiefInformationSecurityOfficerDN.oa.mjs";
import { chiefLegalOfficerDN } from "../OrganizationAndGroupSchema/chiefLegalOfficerDN.oa.mjs";
import { chiefDiversityOfficerDN } from "../OrganizationAndGroupSchema/chiefDiversityOfficerDN.oa.mjs";

/**
 * @summary CLevelLeadershipAttributes
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CLevelLeadershipAttributes ATTRIBUTE ::= {
 *     chiefExecutiveOfficerDN
 *     | chiefFinancialOfficerDN
 *     | chiefOperationsOfficerDN
 *     | chiefInformationOfficerDN
 *     | chiefTechnologyOfficerDN
 *     | chiefMarketingOfficerDN
 *     | chiefHumanResourcesOfficerDN
 *     | chiefInformationSecurityOfficerDN
 *     | chiefLegalOfficerDN
 *     | chiefDiversityOfficerDN
 * }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE[]}
 * 
 */
export
const CLevelLeadershipAttributes: (ATTRIBUTE)[] = [ chiefExecutiveOfficerDN, chiefFinancialOfficerDN, chiefOperationsOfficerDN, chiefInformationOfficerDN, chiefTechnologyOfficerDN, chiefMarketingOfficerDN, chiefHumanResourcesOfficerDN, chiefInformationSecurityOfficerDN, chiefLegalOfficerDN, chiefDiversityOfficerDN, ];

/* eslint-enable */
