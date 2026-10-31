/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { objectClass } from "../InformationFramework/objectClass.oa.mjs";
// export { id_oc_oxRadiusServerConfiguration } from "../LdapRadius/id-oc-oxRadiusServerConfiguration.va.mjs";


/**
 * @summary oxRadiusServerConfiguration
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * oxRadiusServerConfiguration OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { objectClass }
 *   MAY CONTAIN               { organizationalUnitName
 *                               | oxRadiusListenInterface
 *                               | oxRadiusAuthenticationPort
 *                               | oxRadiusAccountingPort
 *                               | oxRadiusOpenIdBaseUrl
 *                               | oxRadiusOpenidUsername
 *                               | oxRadiusOpenidPassword
 *                               | oxRadiusAcrValue
 *                               | oxRadiusAuthScope
 *                               | oxRadiusAuthenticationTimeout }
 *   LDAP-NAME                 {"oxRadiusServerConfiguration"}
 *   ID                        id-oc-oxRadiusServerConfiguration }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const oxRadiusServerConfiguration: OBJECT_CLASS = undefined;

/* eslint-enable */
