/* eslint-disable */
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
// export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { memberOf } from "../OrganizationAndGroupSchema/memberOf.oa.mjs";
// export { memberOf } from "../OrganizationAndGroupSchema/memberOf.oa.mjs";
import { publicMemberOf } from "../OrganizationAndGroupSchema/publicMemberOf.oa.mjs";
// export { publicMemberOf } from "../OrganizationAndGroupSchema/publicMemberOf.oa.mjs";
import { privateMemberOf } from "../OrganizationAndGroupSchema/privateMemberOf.oa.mjs";
// export { privateMemberOf } from "../OrganizationAndGroupSchema/privateMemberOf.oa.mjs";


/**
 * @summary MemberOfAndSubtypes
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MemberOfAndSubtypes ATTRIBUTE ::= {
 *     memberOf
 *     | publicMemberOf
 *     | privateMemberOf
 * }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE[]}
 * 
 */
export
const MemberOfAndSubtypes: (ATTRIBUTE)[] = [ memberOf, publicMemberOf, privateMemberOf, ];

/* eslint-enable */
