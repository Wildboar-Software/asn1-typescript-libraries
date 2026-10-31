/* eslint-disable */
import { type ATTRIBUTE} from "../InformationFramework/ATTRIBUTE.oca.mjs";
// export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { uniqueMember } from "../SelectedAttributeTypes/uniqueMember.oa.mjs";
// export { uniqueMember } from "../SelectedAttributeTypes/uniqueMember.oa.mjs";
import { publicUniqueMember } from "../OrganizationAndGroupSchema/publicUniqueMember.oa.mjs";
// export { publicUniqueMember } from "../OrganizationAndGroupSchema/publicUniqueMember.oa.mjs";
import { privateUniqueMember } from "../OrganizationAndGroupSchema/privateUniqueMember.oa.mjs";
// export { privateUniqueMember } from "../OrganizationAndGroupSchema/privateUniqueMember.oa.mjs";


/**
 * @summary UniqueMemberAndSubtypes
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UniqueMemberAndSubtypes ATTRIBUTE ::= {
 *     uniqueMember
 *     | publicUniqueMember
 *     | privateUniqueMember
 * }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE[]}
 * 
 */
export
const UniqueMemberAndSubtypes: (ATTRIBUTE)[] = [ uniqueMember, publicUniqueMember, privateUniqueMember, ];

/* eslint-enable */
