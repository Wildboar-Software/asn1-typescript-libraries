/* eslint-disable */
import { type ATTRIBUTE} from "../InformationFramework/ATTRIBUTE.oca.mjs";
// export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { minAgeToJoin } from "../OrganizationAndGroupSchema/minAgeToJoin.oa.mjs";
// export { minAgeToJoin } from "../OrganizationAndGroupSchema/minAgeToJoin.oa.mjs";
import { maxAgeToJoin } from "../OrganizationAndGroupSchema/maxAgeToJoin.oa.mjs";
// export { maxAgeToJoin } from "../OrganizationAndGroupSchema/maxAgeToJoin.oa.mjs";
import { allowsMen } from "../OrganizationAndGroupSchema/allowsMen.oa.mjs";
// export { allowsMen } from "../OrganizationAndGroupSchema/allowsMen.oa.mjs";
import { allowsWomen } from "../OrganizationAndGroupSchema/allowsWomen.oa.mjs";
// export { allowsWomen } from "../OrganizationAndGroupSchema/allowsWomen.oa.mjs";
import { allowsHeterosexuals } from "../OrganizationAndGroupSchema/allowsHeterosexuals.oa.mjs";
// export { allowsHeterosexuals } from "../OrganizationAndGroupSchema/allowsHeterosexuals.oa.mjs";
import { allowsAltSexuals } from "../OrganizationAndGroupSchema/allowsAltSexuals.oa.mjs";
// export { allowsAltSexuals } from "../OrganizationAndGroupSchema/allowsAltSexuals.oa.mjs";
import { allowsForeigners } from "../OrganizationAndGroupSchema/allowsForeigners.oa.mjs";
// export { allowsForeigners } from "../OrganizationAndGroupSchema/allowsForeigners.oa.mjs";
import { requiresReligion } from "../OrganizationAndGroupSchema/requiresReligion.oa.mjs";
// export { requiresReligion } from "../OrganizationAndGroupSchema/requiresReligion.oa.mjs";
import { forbidsReligion } from "../OrganizationAndGroupSchema/forbidsReligion.oa.mjs";
// export { forbidsReligion } from "../OrganizationAndGroupSchema/forbidsReligion.oa.mjs";
import { RacialRequirements } from "../OrganizationAndGroupSchema/RacialRequirements.osa.mjs";
// export { RacialRequirements } from "../OrganizationAndGroupSchema/RacialRequirements.osa.mjs";
import { RacialExclusions } from "../OrganizationAndGroupSchema/RacialExclusions.osa.mjs";
// export { RacialExclusions } from "../OrganizationAndGroupSchema/RacialExclusions.osa.mjs";
import { drugTestRequired } from "../OrganizationAndGroupSchema/drugTestRequired.oa.mjs";
// export { drugTestRequired } from "../OrganizationAndGroupSchema/drugTestRequired.oa.mjs";
import { forbidsMembershipWithDN } from "../OrganizationAndGroupSchema/forbidsMembershipWithDN.oa.mjs";
// export { forbidsMembershipWithDN } from "../OrganizationAndGroupSchema/forbidsMembershipWithDN.oa.mjs";
import { eligibilityFilter } from "../OrganizationAndGroupSchema/eligibilityFilter.oa.mjs";
// export { eligibilityFilter } from "../OrganizationAndGroupSchema/eligibilityFilter.oa.mjs";
import { eligibilityNoSubtypesFilter } from "../OrganizationAndGroupSchema/eligibilityNoSubtypesFilter.oa.mjs";
// export { eligibilityNoSubtypesFilter } from "../OrganizationAndGroupSchema/eligibilityNoSubtypesFilter.oa.mjs";
import { ideologicalRequirementsDescription } from "../OrganizationAndGroupSchema/ideologicalRequirementsDescription.oa.mjs";
// export { ideologicalRequirementsDescription } from "../OrganizationAndGroupSchema/ideologicalRequirementsDescription.oa.mjs";
import { healthRequirementsDescription } from "../OrganizationAndGroupSchema/healthRequirementsDescription.oa.mjs";
// export { healthRequirementsDescription } from "../OrganizationAndGroupSchema/healthRequirementsDescription.oa.mjs";


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
