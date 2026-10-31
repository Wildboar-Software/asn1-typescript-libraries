/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { id_oc_sunPresenceUser } from "../Ldapmigration65im/id-oc-sunPresenceUser.va.mjs";


/**
 * @summary sunPresenceUser
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * sunPresenceUser OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MAY CONTAIN               { sunPresenceUserPrivacy
 *                               | sunPresenceEntityDefaultAccess
 *                               | sunPresenceEntityAccessDenied
 *                               | sunPresenceEntityAccessPermitted
 *                               | sunPresenceEntityDevices
 *                               | sunPresencePrivacy
 *                               | sunPresenceDefaultAccess
 *                               | sunPresenceAccessDenied
 *                               | sunPresenceAccessPermitted
 *                               | sunPresenceDevices }
 *   LDAP-NAME                 {"sunPresenceUser"}
 *   LDAP-DESC                 "Presence Service User"
 *   ID                        id-oc-sunPresenceUser }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const sunPresenceUser: OBJECT_CLASS = undefined;

/* eslint-enable */
