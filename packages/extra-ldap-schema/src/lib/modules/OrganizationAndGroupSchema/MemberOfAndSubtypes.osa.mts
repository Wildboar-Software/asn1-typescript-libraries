/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { memberOf } from "../OrganizationAndGroupSchema/memberOf.oa.mjs";
import { publicMemberOf } from "../OrganizationAndGroupSchema/publicMemberOf.oa.mjs";
import { privateMemberOf } from "../OrganizationAndGroupSchema/privateMemberOf.oa.mjs";

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
