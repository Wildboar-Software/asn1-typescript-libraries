/* eslint-disable */
import { type ATTRIBUTE} from "../InformationFramework/ATTRIBUTE.oca.mjs";
// export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { member } from "../SelectedAttributeTypes/member.oa.mjs";
// export { member } from "../SelectedAttributeTypes/member.oa.mjs";
import { publicMemberDN } from "../OrganizationAndGroupSchema/publicMemberDN.oa.mjs";
// export { publicMemberDN } from "../OrganizationAndGroupSchema/publicMemberDN.oa.mjs";
import { privateMemberDN } from "../OrganizationAndGroupSchema/privateMemberDN.oa.mjs";
// export { privateMemberDN } from "../OrganizationAndGroupSchema/privateMemberDN.oa.mjs";


/**
 * @summary MemberAndSubtypes
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MemberAndSubtypes ATTRIBUTE ::= {
 *     member
 *     | publicMemberDN
 *     | privateMemberDN
 * }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE[]}
 * 
 */
export
const MemberAndSubtypes: (ATTRIBUTE)[] = [ member, publicMemberDN, privateMemberDN, ];

/* eslint-enable */
