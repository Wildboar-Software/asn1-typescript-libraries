/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { hasDrugTestingRequirement } from "../OrganizationAndGroupSchema/hasDrugTestingRequirement.oa.mjs";
import { hasNonDisclosureRequirement } from "../OrganizationAndGroupSchema/hasNonDisclosureRequirement.oa.mjs";
import { membershipIsSecret } from "../OrganizationAndGroupSchema/membershipIsSecret.oa.mjs";
import { ownMembershipIsSecret } from "../OrganizationAndGroupSchema/ownMembershipIsSecret.oa.mjs";
import { membershipOath } from "../OrganizationAndGroupSchema/membershipOath.oa.mjs";
import { bylawsUrl } from "../OrganizationAndGroupSchema/bylawsUrl.oa.mjs";
import { bylawsText } from "../OrganizationAndGroupSchema/bylawsText.oa.mjs";

/**
 * @summary OrganizationBylawsAttributes
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * OrganizationBylawsAttributes ATTRIBUTE ::= {
 *     hasDrugTestingRequirement
 *     | hasNonDisclosureRequirement
 *     | membershipIsSecret
 *     | ownMembershipIsSecret
 *     | membershipOath
 *     | bylawsUrl
 *     | bylawsText
 * }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE[]}
 * 
 */
export
const OrganizationBylawsAttributes: (ATTRIBUTE)[] = [ hasDrugTestingRequirement, hasNonDisclosureRequirement, membershipIsSecret, ownMembershipIsSecret, membershipOath, bylawsUrl, bylawsText, ];

/* eslint-enable */
