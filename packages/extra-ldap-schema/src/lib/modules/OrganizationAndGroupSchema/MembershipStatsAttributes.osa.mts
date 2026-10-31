/* eslint-disable */
import { type ATTRIBUTE} from "../InformationFramework/ATTRIBUTE.oca.mjs";
// export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { membersCount } from "../OrganizationAndGroupSchema/membersCount.oa.mjs";
// export { membersCount } from "../OrganizationAndGroupSchema/membersCount.oa.mjs";
import { activeMembersCount } from "../OrganizationAndGroupSchema/activeMembersCount.oa.mjs";
// export { activeMembersCount } from "../OrganizationAndGroupSchema/activeMembersCount.oa.mjs";
import { dormantMembersCount } from "../OrganizationAndGroupSchema/dormantMembersCount.oa.mjs";
// export { dormantMembersCount } from "../OrganizationAndGroupSchema/dormantMembersCount.oa.mjs";
import { formerMembersCount } from "../OrganizationAndGroupSchema/formerMembersCount.oa.mjs";
// export { formerMembersCount } from "../OrganizationAndGroupSchema/formerMembersCount.oa.mjs";


/**
 * @summary MembershipStatsAttributes
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MembershipStatsAttributes ATTRIBUTE ::= {
 *     membersCount
 *     | activeMembersCount
 *     | dormantMembersCount
 *     | formerMembersCount
 * }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE[]}
 * 
 */
export
const MembershipStatsAttributes: (ATTRIBUTE)[] = [ membersCount, activeMembersCount, dormantMembersCount, formerMembersCount, ];

/* eslint-enable */
