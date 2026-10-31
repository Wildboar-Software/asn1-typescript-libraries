/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { id_oc_zimbraTimeZone } from "../LdapZimbra/id-oc-zimbraTimeZone.va.mjs";


/**
 * @summary zimbraTimeZone
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * zimbraTimeZone OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { zimbraTimeZoneStandardDtStart
 *                               | zimbraTimeZoneStandardOffset }
 *   MAY CONTAIN               { zimbraTimeZoneDaylightDtStart
 *                               | zimbraTimeZoneDaylightOffset
 *                               | zimbraTimeZoneDaylightRRule
 *                               | zimbraTimeZoneStandardRRule }
 *   LDAP-NAME                 {"zimbraTimeZone"}
 *   LDAP-DESC                 "Time Zone info"
 *   ID                        id-oc-zimbraTimeZone }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const zimbraTimeZone: OBJECT_CLASS = undefined;

/* eslint-enable */
