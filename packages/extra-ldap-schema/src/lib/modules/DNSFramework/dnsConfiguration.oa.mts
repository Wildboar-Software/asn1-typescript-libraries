/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { id_oc_dnsConfiguration } from "../DNSFramework/id-oc-dnsConfiguration.va.mjs";


/**
 * @summary dnsConfiguration
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * dnsConfiguration OBJECT-CLASS ::= {
 *     SUBCLASS OF        {top}
 *     KIND            auxiliary
 *     MAY CONTAIN        {DNSConfigurationAttributes}
 *     LDAP-NAME        {"dnsConfiguration"}
 *     LDAP-DESC        "Something configured with DNS parameters"
 *     ID                id-oc-dnsConfiguration
 * }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const dnsConfiguration: OBJECT_CLASS = undefined;

/* eslint-enable */
