/* eslint-disable */
import { type ATTRIBUTE} from "../InformationFramework/ATTRIBUTE.oca.mjs";
// export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { vettingProcedureDescription } from "../OrganizationAndGroupSchema/vettingProcedureDescription.oa.mjs";
// export { vettingProcedureDescription } from "../OrganizationAndGroupSchema/vettingProcedureDescription.oa.mjs";
import { onboardingProcedureDescription } from "../OrganizationAndGroupSchema/onboardingProcedureDescription.oa.mjs";
// export { onboardingProcedureDescription } from "../OrganizationAndGroupSchema/onboardingProcedureDescription.oa.mjs";
import { offboardingProcedureDescription } from "../OrganizationAndGroupSchema/offboardingProcedureDescription.oa.mjs";
// export { offboardingProcedureDescription } from "../OrganizationAndGroupSchema/offboardingProcedureDescription.oa.mjs";
import { renewalProcedureDescription } from "../OrganizationAndGroupSchema/renewalProcedureDescription.oa.mjs";
// export { renewalProcedureDescription } from "../OrganizationAndGroupSchema/renewalProcedureDescription.oa.mjs";
import { vettingRequirements } from "../OrganizationAndGroupSchema/vettingRequirements.oa.mjs";
// export { vettingRequirements } from "../OrganizationAndGroupSchema/vettingRequirements.oa.mjs";


/**
 * @summary MembershipLifecycleProcedureDescriptions
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MembershipLifecycleProcedureDescriptions ATTRIBUTE ::= {
 *     vettingProcedureDescription
 *     | onboardingProcedureDescription
 *     | offboardingProcedureDescription
 *     | renewalProcedureDescription
 *     | vettingRequirements
 * }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE[]}
 * 
 */
export
const MembershipLifecycleProcedureDescriptions: (ATTRIBUTE)[] = [ vettingProcedureDescription, onboardingProcedureDescription, offboardingProcedureDescription, renewalProcedureDescription, vettingRequirements, ];

/* eslint-enable */
