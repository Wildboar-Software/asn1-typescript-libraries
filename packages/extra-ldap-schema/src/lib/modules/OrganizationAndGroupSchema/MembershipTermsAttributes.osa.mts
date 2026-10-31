/* eslint-disable */
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
// export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { membershipTerm } from "../OrganizationAndGroupSchema/membershipTerm.oa.mjs";
// export { membershipTerm } from "../OrganizationAndGroupSchema/membershipTerm.oa.mjs";
import { memberNoun } from "../OrganizationAndGroupSchema/memberNoun.oa.mjs";
// export { memberNoun } from "../OrganizationAndGroupSchema/memberNoun.oa.mjs";
import { memberSingularNoun } from "../OrganizationAndGroupSchema/memberSingularNoun.oa.mjs";
// export { memberSingularNoun } from "../OrganizationAndGroupSchema/memberSingularNoun.oa.mjs";
import { memberPluralNoun } from "../OrganizationAndGroupSchema/memberPluralNoun.oa.mjs";
// export { memberPluralNoun } from "../OrganizationAndGroupSchema/memberPluralNoun.oa.mjs";
import { memberSlangNoun } from "../OrganizationAndGroupSchema/memberSlangNoun.oa.mjs";
// export { memberSlangNoun } from "../OrganizationAndGroupSchema/memberSlangNoun.oa.mjs";


/**
 * @summary MembershipTermsAttributes
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MembershipTermsAttributes ATTRIBUTE ::= {
 *     membershipTerm
 *     | memberNoun
 *     | memberSingularNoun
 *     | memberPluralNoun
 *     | memberSlangNoun
 * }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE[]}
 * 
 */
export
const MembershipTermsAttributes: (ATTRIBUTE)[] = [ membershipTerm, memberNoun, memberSingularNoun, memberPluralNoun, memberSlangNoun, ];

/* eslint-enable */
