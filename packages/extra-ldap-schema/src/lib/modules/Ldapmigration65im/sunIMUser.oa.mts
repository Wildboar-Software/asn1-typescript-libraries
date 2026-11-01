/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_sunIMUser } from "../Ldapmigration65im/id-oc-sunIMUser.va.mjs";
import { sunIMUserPrivateSettings } from "../Ldapmigration65im/sunIMUserPrivateSettings.oa.mjs";
import { sunIMUserProperties } from "../Ldapmigration65im/sunIMUserProperties.oa.mjs";
import { sunIMUserRoster } from "../Ldapmigration65im/sunIMUserRoster.oa.mjs";
import { sunIMUserConferenceRoster } from "../Ldapmigration65im/sunIMUserConferenceRoster.oa.mjs";
import { sunIMUserNewsRoster } from "../Ldapmigration65im/sunIMUserNewsRoster.oa.mjs";
import { sunIMPrivateSettings } from "../Ldapmigration65im/sunIMPrivateSettings.oa.mjs";
import { sunIMProperties } from "../Ldapmigration65im/sunIMProperties.oa.mjs";
import { sunIMRoster } from "../Ldapmigration65im/sunIMRoster.oa.mjs";
import { sunIMConferenceRoster } from "../Ldapmigration65im/sunIMConferenceRoster.oa.mjs";
import { sunIMNewsRoster } from "../Ldapmigration65im/sunIMNewsRoster.oa.mjs";


/**
 * @summary sunIMUser
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * sunIMUser OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MAY CONTAIN               { sunIMUserPrivateSettings
 *                               | sunIMUserProperties
 *                               | sunIMUserRoster
 *                               | sunIMUserConferenceRoster
 *                               | sunIMUserNewsRoster
 *                               | sunIMPrivateSettings
 *                               | sunIMProperties
 *                               | sunIMRoster
 *                               | sunIMConferenceRoster
 *                               | sunIMNewsRoster }
 *   LDAP-NAME                 {"sunIMUser"}
 *   LDAP-DESC                 "Instant Message Service User"
 *   ID                        id-oc-sunIMUser }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const sunIMUser: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ sunIMUserPrivateSettings, sunIMUserProperties, sunIMUserRoster, sunIMUserConferenceRoster, sunIMUserNewsRoster, sunIMPrivateSettings, sunIMProperties, sunIMRoster, sunIMConferenceRoster, sunIMNewsRoster, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "sunIMUser" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Instant Message Service User" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_sunIMUser /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

