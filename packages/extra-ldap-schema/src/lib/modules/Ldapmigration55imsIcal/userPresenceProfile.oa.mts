/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { id_oc_userPresenceProfile } from "../Ldapmigration55imsIcal/id-oc-userPresenceProfile.va.mjs";


/**
 * @summary userPresenceProfile
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * userPresenceProfile OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MAY CONTAIN               { vacationstartdate
 *                               | vacationenddate }
 *   LDAP-NAME                 {"userPresenceProfile"}
 *   LDAP-DESC                 "auxiliary class for vacation start end dates"
 *   ID                        id-oc-userPresenceProfile }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const userPresenceProfile: OBJECT_CLASS = undefined;

/* eslint-enable */
