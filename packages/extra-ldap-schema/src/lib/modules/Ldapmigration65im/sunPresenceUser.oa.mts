/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_sunPresenceUser } from "../Ldapmigration65im/id-oc-sunPresenceUser.va.mjs";
import { sunPresenceUserPrivacy } from "../Ldapmigration65im/sunPresenceUserPrivacy.oa.mjs";
import { sunPresenceEntityDefaultAccess } from "../Ldapmigration65im/sunPresenceEntityDefaultAccess.oa.mjs";
import { sunPresenceEntityAccessDenied } from "../Ldapmigration65im/sunPresenceEntityAccessDenied.oa.mjs";
import { sunPresenceEntityAccessPermitted } from "../Ldapmigration65im/sunPresenceEntityAccessPermitted.oa.mjs";
import { sunPresenceEntityDevices } from "../Ldapmigration65im/sunPresenceEntityDevices.oa.mjs";
import { sunPresencePrivacy } from "../Ldapmigration65im/sunPresencePrivacy.oa.mjs";
import { sunPresenceDefaultAccess } from "../Ldapmigration65im/sunPresenceDefaultAccess.oa.mjs";
import { sunPresenceAccessDenied } from "../Ldapmigration65im/sunPresenceAccessDenied.oa.mjs";
import { sunPresenceAccessPermitted } from "../Ldapmigration65im/sunPresenceAccessPermitted.oa.mjs";
import { sunPresenceDevices } from "../Ldapmigration65im/sunPresenceDevices.oa.mjs";
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
const sunPresenceUser: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ sunPresenceUserPrivacy, sunPresenceEntityDefaultAccess, sunPresenceEntityAccessDenied, sunPresenceEntityAccessPermitted, sunPresenceEntityDevices, sunPresencePrivacy, sunPresenceDefaultAccess, sunPresenceAccessDenied, sunPresenceAccessPermitted, sunPresenceDevices, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "sunPresenceUser" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Presence Service User" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_sunPresenceUser /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
