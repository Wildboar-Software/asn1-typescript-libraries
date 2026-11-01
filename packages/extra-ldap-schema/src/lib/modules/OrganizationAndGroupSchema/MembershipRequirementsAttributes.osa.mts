/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { minAgeToJoin } from "../OrganizationAndGroupSchema/minAgeToJoin.oa.mjs";
import { maxAgeToJoin } from "../OrganizationAndGroupSchema/maxAgeToJoin.oa.mjs";
import { allowsMen } from "../OrganizationAndGroupSchema/allowsMen.oa.mjs";
import { allowsWomen } from "../OrganizationAndGroupSchema/allowsWomen.oa.mjs";
import { allowsHeterosexuals } from "../OrganizationAndGroupSchema/allowsHeterosexuals.oa.mjs";
import { allowsAltSexuals } from "../OrganizationAndGroupSchema/allowsAltSexuals.oa.mjs";
import { allowsForeigners } from "../OrganizationAndGroupSchema/allowsForeigners.oa.mjs";
import { requiresReligion } from "../OrganizationAndGroupSchema/requiresReligion.oa.mjs";
import { forbidsReligion } from "../OrganizationAndGroupSchema/forbidsReligion.oa.mjs";
import { RacialRequirements } from "../OrganizationAndGroupSchema/RacialRequirements.osa.mjs";
import { RacialExclusions } from "../OrganizationAndGroupSchema/RacialExclusions.osa.mjs";
import { drugTestRequired } from "../OrganizationAndGroupSchema/drugTestRequired.oa.mjs";
import { forbidsMembershipWithDN } from "../OrganizationAndGroupSchema/forbidsMembershipWithDN.oa.mjs";
import { eligibilityFilter } from "../OrganizationAndGroupSchema/eligibilityFilter.oa.mjs";
import { eligibilityNoSubtypesFilter } from "../OrganizationAndGroupSchema/eligibilityNoSubtypesFilter.oa.mjs";
import { ideologicalRequirementsDescription } from "../OrganizationAndGroupSchema/ideologicalRequirementsDescription.oa.mjs";
import { healthRequirementsDescription } from "../OrganizationAndGroupSchema/healthRequirementsDescription.oa.mjs";

/**
 * @summary MembershipRequirementsAttributes
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MembershipRequirementsAttributes ATTRIBUTE ::= {
 *     minAgeToJoin
 *     | maxAgeToJoin
 *     | allowsMen
 *     | allowsWomen
 *     | allowsHeterosexuals
 *     | allowsAltSexuals
 *     | allowsForeigners
 *     | requiresReligion
 *     | forbidsReligion
 *     | RacialRequirements
 *     | RacialExclusions
 *     | drugTestRequired
 *     | forbidsMembershipWithDN
 *     | eligibilityFilter
 *     | eligibilityNoSubtypesFilter
 *     | ideologicalRequirementsDescription
 *     | healthRequirementsDescription
 *     | requiredVaccinationAgainst
 * }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE[]}
 * 
 */
export
const MembershipRequirementsAttributes: (ATTRIBUTE)[] = [ minAgeToJoin, maxAgeToJoin, allowsMen, allowsWomen, allowsHeterosexuals, allowsAltSexuals, allowsForeigners, requiresReligion, forbidsReligion, ...RacialRequirements, ...RacialExclusions, drugTestRequired, forbidsMembershipWithDN, eligibilityFilter, eligibilityNoSubtypesFilter, ideologicalRequirementsDescription, healthRequirementsDescription, requiredVaccinationAgainst, ];

/* eslint-enable */
