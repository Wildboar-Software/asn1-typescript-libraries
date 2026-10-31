/* eslint-disable */
import { type ATTRIBUTE} from "../InformationFramework/ATTRIBUTE.oca.mjs";
// export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { MembershipStatsAttributes } from "../OrganizationAndGroupSchema/MembershipStatsAttributes.osa.mjs";
// export { MembershipStatsAttributes } from "../OrganizationAndGroupSchema/MembershipStatsAttributes.osa.mjs";
import { MembershipTermsAttributes } from "../OrganizationAndGroupSchema/MembershipTermsAttributes.osa.mjs";
// export { MembershipTermsAttributes } from "../OrganizationAndGroupSchema/MembershipTermsAttributes.osa.mjs";
import { MembershipLifecycleProcedureDescriptions } from "../OrganizationAndGroupSchema/MembershipLifecycleProcedureDescriptions.osa.mjs";
// export { MembershipLifecycleProcedureDescriptions } from "../OrganizationAndGroupSchema/MembershipLifecycleProcedureDescriptions.osa.mjs";
import { MembershipRequirementsAttributes } from "../OrganizationAndGroupSchema/MembershipRequirementsAttributes.osa.mjs";
// export { MembershipRequirementsAttributes } from "../OrganizationAndGroupSchema/MembershipRequirementsAttributes.osa.mjs";
import { OrganizationBylawsAttributes } from "../OrganizationAndGroupSchema/OrganizationBylawsAttributes.osa.mjs";
// export { OrganizationBylawsAttributes } from "../OrganizationAndGroupSchema/OrganizationBylawsAttributes.osa.mjs";
import { MembershipRelationAttributes } from "../OrganizationAndGroupSchema/MembershipRelationAttributes.osa.mjs";
// export { MembershipRelationAttributes } from "../OrganizationAndGroupSchema/MembershipRelationAttributes.osa.mjs";
import { OrganizationalFinanceAttributes } from "../OrganizationAndGroupSchema/OrganizationalFinanceAttributes.osa.mjs";
// export { OrganizationalFinanceAttributes } from "../OrganizationAndGroupSchema/OrganizationalFinanceAttributes.osa.mjs";
import { ContributionAttributes } from "../OrganizationAndGroupSchema/ContributionAttributes.osa.mjs";
// export { ContributionAttributes } from "../OrganizationAndGroupSchema/ContributionAttributes.osa.mjs";
import { MembershipStatAttributes } from "../OrganizationAndGroupSchema/MembershipStatAttributes.osa.mjs";
// export { MembershipStatAttributes } from "../OrganizationAndGroupSchema/MembershipStatAttributes.osa.mjs";
import { missionStatement } from "../OrganizationAndGroupSchema/missionStatement.oa.mjs";
// export { missionStatement } from "../OrganizationAndGroupSchema/missionStatement.oa.mjs";
import { faviconPNG } from "../OrganizationAndGroupSchema/faviconPNG.oa.mjs";
// export { faviconPNG } from "../OrganizationAndGroupSchema/faviconPNG.oa.mjs";
import { symbolUrl } from "../OrganizationAndGroupSchema/symbolUrl.oa.mjs";
// export { symbolUrl } from "../OrganizationAndGroupSchema/symbolUrl.oa.mjs";
import { symbolDescription } from "../OrganizationAndGroupSchema/symbolDescription.oa.mjs";
// export { symbolDescription } from "../OrganizationAndGroupSchema/symbolDescription.oa.mjs";
import { anthemName } from "../OrganizationAndGroupSchema/anthemName.oa.mjs";
// export { anthemName } from "../OrganizationAndGroupSchema/anthemName.oa.mjs";
import { dnsName } from "../SelectedAttributeTypes/dnsName.oa.mjs";
// export { dnsName } from "../SelectedAttributeTypes/dnsName.oa.mjs";


/**
 * @summary ExtOrganizationOrGroupAttributes
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ExtOrganizationOrGroupAttributes ATTRIBUTE ::= {
 *     MembershipStatsAttributes
 *     | MembershipTermsAttributes
 *     | MembershipLifecycleProcedureDescriptions
 *     | MembershipRequirementsAttributes
 *     | OrganizationBylawsAttributes
 *     | MembershipRelationAttributes
 *     | OrganizationalDescriptionAttributes
 *     | FundingAttributes
 *     | OrganizationalFinanceAttributes
 *     | PositiveComplianceAttributes
 *     | CreationAttributes
 *     | BusinessCategoryTypes
 *     | ThemeColorAttributes
 *     | VerbalContentAttributes
 *     | ContributionAttributes
 *     | MembershipStatAttributes
 *     | missionStatement
 *     | faviconPNG
 *     | symbolUrl
 *     | symbolDescription
 *     | anthemName
 *     | timeToLiveDuration -- Controls client caching of the group membership
 *     | associatedDomain
 *     | dnsName
 *     | category
 *     | rules
 *     | keyword
 *     | url
 * }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE[]}
 * 
 */
export
const ExtOrganizationOrGroupAttributes: (ATTRIBUTE)[] = [ ...MembershipStatsAttributes, ...MembershipTermsAttributes, ...MembershipLifecycleProcedureDescriptions, ...MembershipRequirementsAttributes, ...OrganizationBylawsAttributes, ...MembershipRelationAttributes, ...OrganizationalDescriptionAttributes, ...FundingAttributes, ...OrganizationalFinanceAttributes, ...PositiveComplianceAttributes, ...CreationAttributes, ...BusinessCategoryTypes, ...ThemeColorAttributes, ...VerbalContentAttributes, ...ContributionAttributes, ...MembershipStatAttributes, missionStatement, faviconPNG, symbolUrl, symbolDescription, anthemName, timeToLiveDuration, associatedDomain, dnsName, category, rules, keyword, url, ];

/* eslint-enable */
