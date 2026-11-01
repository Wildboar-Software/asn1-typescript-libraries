/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { leaderDN } from "../OrganizationAndGroupSchema/leaderDN.oa.mjs";
import { presidentDN } from "../OrganizationAndGroupSchema/presidentDN.oa.mjs";
import { vicePresidentDN } from "../OrganizationAndGroupSchema/vicePresidentDN.oa.mjs";
import { treasurerDN } from "../OrganizationAndGroupSchema/treasurerDN.oa.mjs";
import { secretaryDN } from "../OrganizationAndGroupSchema/secretaryDN.oa.mjs";
import { historianDN } from "../OrganizationAndGroupSchema/historianDN.oa.mjs";

/**
 * @summary LeadershipAttributes
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LeadershipAttributes ATTRIBUTE ::= {
 *     leaderDN
 *     | presidentDN
 *     | vicePresidentDN
 *     | treasurerDN
 *     | secretaryDN
 *     | historianDN
 * }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE[]}
 * 
 */
export
const LeadershipAttributes: (ATTRIBUTE)[] = [ leaderDN, presidentDN, vicePresidentDN, treasurerDN, secretaryDN, historianDN, ];

/* eslint-enable */
