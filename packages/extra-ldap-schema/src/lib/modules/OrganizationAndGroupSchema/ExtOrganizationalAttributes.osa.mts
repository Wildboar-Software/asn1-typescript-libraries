/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { ExtOrganizationOrGroupAttributes } from "../OrganizationAndGroupSchema/ExtOrganizationOrGroupAttributes.osa.mjs";
import { LeadershipAttributes } from "../OrganizationAndGroupSchema/LeadershipAttributes.osa.mjs";
import { CLevelLeadershipAttributes } from "../OrganizationAndGroupSchema/CLevelLeadershipAttributes.osa.mjs";
import { OrganizationalRelationAttributes } from "../OrganizationAndGroupSchema/OrganizationalRelationAttributes.osa.mjs";
import { owner } from "../SelectedAttributeTypes/owner.oa.mjs";
import { organizationIdentifier } from "../SelectedAttributeTypes/organizationIdentifier.oa.mjs";
import { taxIdentifier } from "../OrganizationAndGroupSchema/taxIdentifier.oa.mjs";
import { directorDN } from "../OrganizationAndGroupSchema/directorDN.oa.mjs";

/**
 * @summary ExtOrganizationalAttributes
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ExtOrganizationalAttributes ATTRIBUTE ::= {
 *     ExtOrganizationOrGroupAttributes
 *     | OrganizationIdentifierTypes
 *     | BillingPostalAttributeSet
 *     | HeadquartersPostalAttributeSet
 *     | MailingPostalAttributeSet
 *     | PrincipalPostalAttributeSet
 *     | OrganizationalPhoneAttributeSet
 *     | OrganizationalFaxAttributeSet
 *     | OrganizationalEmailAttributeSet
 *     | OrganizationalUrls
 *     | LeadershipAttributes
 *     | TaxpayerAttributes
 *     | CLevelLeadershipAttributes
 *     | OrganizationalRelationAttributes
 *     | owner
 *     | organizationIdentifier
 *     | taxIdentifier
 *     | stakeholderDN
 *     | beneficiaryDN
 *     | directorDN
 * }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE[]}
 * 
 */
export
const ExtOrganizationalAttributes: (ATTRIBUTE)[] = [ ...ExtOrganizationOrGroupAttributes, ...OrganizationIdentifierTypes, ...BillingPostalAttributeSet, ...HeadquartersPostalAttributeSet, ...MailingPostalAttributeSet, ...PrincipalPostalAttributeSet, ...OrganizationalPhoneAttributeSet, ...OrganizationalFaxAttributeSet, ...OrganizationalEmailAttributeSet, ...OrganizationalUrls, ...LeadershipAttributes, ...TaxpayerAttributes, ...CLevelLeadershipAttributes, ...OrganizationalRelationAttributes, owner, organizationIdentifier, taxIdentifier, stakeholderDN, beneficiaryDN, directorDN, ];

/* eslint-enable */
