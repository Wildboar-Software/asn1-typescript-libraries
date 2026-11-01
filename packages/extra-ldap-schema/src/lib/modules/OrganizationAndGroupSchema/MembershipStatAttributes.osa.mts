/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { AdmissionRateStatAttributes } from "../OrganizationAndGroupSchema/AdmissionRateStatAttributes.osa.mjs";
import { applicantsCount } from "../OrganizationAndGroupSchema/applicantsCount.oa.mjs";
import { applicantsCountTTM } from "../OrganizationAndGroupSchema/applicantsCountTTM.oa.mjs";
import { malePopulationPercentage } from "../OrganizationAndGroupSchema/malePopulationPercentage.oa.mjs";
import { meanSalary } from "../OrganizationAndGroupSchema/meanSalary.oa.mjs";
import { medianSalary } from "../OrganizationAndGroupSchema/medianSalary.oa.mjs";
import { highestSalary } from "../OrganizationAndGroupSchema/highestSalary.oa.mjs";
import { lowestSalary } from "../OrganizationAndGroupSchema/lowestSalary.oa.mjs";
import { collegeEducatedMembersPercentage } from "../OrganizationAndGroupSchema/collegeEducatedMembersPercentage.oa.mjs";
import { marriedMembersPercentage } from "../OrganizationAndGroupSchema/marriedMembersPercentage.oa.mjs";
import { meanMemberAge } from "../OrganizationAndGroupSchema/meanMemberAge.oa.mjs";
import { medianMemberAge } from "../OrganizationAndGroupSchema/medianMemberAge.oa.mjs";
import { highestMemberAge } from "../OrganizationAndGroupSchema/highestMemberAge.oa.mjs";
import { lowestMemberAge } from "../OrganizationAndGroupSchema/lowestMemberAge.oa.mjs";

/**
 * @summary MembershipStatAttributes
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MembershipStatAttributes ATTRIBUTE ::= {
 *     AdmissionRateStatAttributes
 *     | applicantsCount
 *     | applicantsCountTTM
 *     | malePopulationPercentage
 *     | meanSalary
 *     | medianSalary
 *     | highestSalary
 *     | lowestSalary
 *     | collegeEducatedMembersPercentage
 *     | marriedMembersPercentage
 *     | meanMemberAge
 *     | medianMemberAge
 *     | highestMemberAge
 *     | lowestMemberAge,
 *     ...
 * }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE[]}
 * 
 */
export
const MembershipStatAttributes: (ATTRIBUTE)[] = [ ...AdmissionRateStatAttributes, applicantsCount, applicantsCountTTM, malePopulationPercentage, meanSalary, medianSalary, highestSalary, lowestSalary, collegeEducatedMembersPercentage, marriedMembersPercentage, meanMemberAge, medianMemberAge, highestMemberAge, lowestMemberAge, ];

/* eslint-enable */
