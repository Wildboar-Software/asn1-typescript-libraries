/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { MemberAndSubtypes } from "../OrganizationAndGroupSchema/MemberAndSubtypes.osa.mjs";
import { UniqueMemberAndSubtypes } from "../OrganizationAndGroupSchema/UniqueMemberAndSubtypes.osa.mjs";
import { MemberOfAndSubtypes } from "../OrganizationAndGroupSchema/MemberOfAndSubtypes.osa.mjs";

/**
 * @summary MembershipRelationAttributes
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MembershipRelationAttributes ATTRIBUTE ::= {
 *     MemberAndSubtypes
 *     | UniqueMemberAndSubtypes
 *     | MemberOfAndSubtypes
 * }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE[]}
 * 
 */
export
const MembershipRelationAttributes: (ATTRIBUTE)[] = [ ...MemberAndSubtypes, ...UniqueMemberAndSubtypes, ...MemberOfAndSubtypes, ];

/* eslint-enable */
