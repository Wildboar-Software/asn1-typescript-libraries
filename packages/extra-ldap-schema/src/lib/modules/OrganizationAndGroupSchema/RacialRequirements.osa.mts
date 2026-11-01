/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { requiredContinentalRace } from "../OrganizationAndGroupSchema/requiredContinentalRace.oa.mjs";
import { requiredCountryRace } from "../OrganizationAndGroupSchema/requiredCountryRace.oa.mjs";
import { requiredRegionalRace } from "../OrganizationAndGroupSchema/requiredRegionalRace.oa.mjs";

/**
 * @summary RacialRequirements
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RacialRequirements ATTRIBUTE ::= {
 *     requiredContinentalRace
 *     | requiredCountryRace
 *     | requiredRegionalRace
 * }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE[]}
 * 
 */
export
const RacialRequirements: (ATTRIBUTE)[] = [ requiredContinentalRace, requiredCountryRace, requiredRegionalRace, ];

/* eslint-enable */
