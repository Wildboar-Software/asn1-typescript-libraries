/* eslint-disable */
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
// export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { contributorDN } from "../OrganizationAndGroupSchema/contributorDN.oa.mjs";
// export { contributorDN } from "../OrganizationAndGroupSchema/contributorDN.oa.mjs";
import { topContributorDN } from "../OrganizationAndGroupSchema/topContributorDN.oa.mjs";
// export { topContributorDN } from "../OrganizationAndGroupSchema/topContributorDN.oa.mjs";


/**
 * @summary ContributionAttributes
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ContributionAttributes ATTRIBUTE ::= {contributorDN | topContributorDN}
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE[]}
 * 
 */
export
const ContributionAttributes: (ATTRIBUTE)[] = [ contributorDN, topContributorDN, ];

/* eslint-enable */
