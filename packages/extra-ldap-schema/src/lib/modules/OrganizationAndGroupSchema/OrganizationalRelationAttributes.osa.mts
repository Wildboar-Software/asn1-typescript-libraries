/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { affiliateDN } from "../OrganizationAndGroupSchema/affiliateDN.oa.mjs";
import { subsidiaryDN } from "../OrganizationAndGroupSchema/subsidiaryDN.oa.mjs";
import { parentOrganizationDN } from "../OrganizationAndGroupSchema/parentOrganizationDN.oa.mjs";
import { shellCorporationDN } from "../OrganizationAndGroupSchema/shellCorporationDN.oa.mjs";
import { frontOrganizationDN } from "../OrganizationAndGroupSchema/frontOrganizationDN.oa.mjs";

/**
 * @summary OrganizationalRelationAttributes
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * OrganizationalRelationAttributes ATTRIBUTE ::= {
 *     affiliateDN
 *     | subsidiaryDN
 *     | parentOrganizationDN
 *     | shellCorporationDN
 *     | frontOrganizationDN
 * }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE[]}
 * 
 */
export
const OrganizationalRelationAttributes: (ATTRIBUTE)[] = [ affiliateDN, subsidiaryDN, parentOrganizationDN, shellCorporationDN, frontOrganizationDN, ];

/* eslint-enable */
