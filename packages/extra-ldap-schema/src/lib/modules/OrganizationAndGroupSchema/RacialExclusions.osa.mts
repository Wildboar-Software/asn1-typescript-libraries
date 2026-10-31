/* eslint-disable */
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
// export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { forbiddenContinentalRace } from "../OrganizationAndGroupSchema/forbiddenContinentalRace.oa.mjs";
// export { forbiddenContinentalRace } from "../OrganizationAndGroupSchema/forbiddenContinentalRace.oa.mjs";
import { forbiddenCountryRace } from "../OrganizationAndGroupSchema/forbiddenCountryRace.oa.mjs";
// export { forbiddenCountryRace } from "../OrganizationAndGroupSchema/forbiddenCountryRace.oa.mjs";
import { forbiddenRegionalRace } from "../OrganizationAndGroupSchema/forbiddenRegionalRace.oa.mjs";
// export { forbiddenRegionalRace } from "../OrganizationAndGroupSchema/forbiddenRegionalRace.oa.mjs";


/**
 * @summary RacialExclusions
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RacialExclusions ATTRIBUTE ::= {
 *     forbiddenContinentalRace
 *     | forbiddenCountryRace
 *     | forbiddenRegionalRace
 * }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE[]}
 * 
 */
export
const RacialExclusions: (ATTRIBUTE)[] = [ forbiddenContinentalRace, forbiddenCountryRace, forbiddenRegionalRace, ];

/* eslint-enable */
