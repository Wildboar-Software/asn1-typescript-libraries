/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { id_oc_sunIMConference } from "../Ldapmigration65im/id-oc-sunIMConference.va.mjs";


/**
 * @summary sunIMConference
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * sunIMConference OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MAY CONTAIN               { sunIMConferenceAffiliations
 *                               | sunIMConferenceConfiguration
 *                               | commonName
 *                               | uid }
 *   LDAP-NAME                 {"sunIMConference"}
 *   LDAP-DESC                 "Conference Object"
 *   ID                        id-oc-sunIMConference }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const sunIMConference: OBJECT_CLASS = undefined;

/* eslint-enable */
