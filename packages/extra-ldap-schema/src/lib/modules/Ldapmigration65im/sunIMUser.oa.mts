/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_sunIMUser } from "../Ldapmigration65im/id-oc-sunIMUser.va.mjs";
import { sunIMConferenceRoster } from "./sunIMConferenceRoster.oa.mjs";
import { sunIMNewsRoster } from "./sunIMNewsRoster.oa.mjs";
import { sunIMPrivateSettings } from "./sunIMPrivateSettings.oa.mjs";
import { sunIMProperties } from "./sunIMProperties.oa.mjs";
import { sunIMRoster } from "./sunIMRoster.oa.mjs";
import { sunIMUserConferenceRoster } from "./sunIMUserConferenceRoster.oa.mjs";
import { sunIMUserNewsRoster } from "./sunIMUserNewsRoster.oa.mjs";
import { sunIMUserPrivateSettings } from "./sunIMUserPrivateSettings.oa.mjs";
import { sunIMUserProperties } from "./sunIMUserProperties.oa.mjs";
import { sunIMUserRoster } from "./sunIMUserRoster.oa.mjs";

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
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [sunIMUserPrivateSettings, sunIMUserProperties, sunIMUserRoster, sunIMUserConferenceRoster, sunIMUserNewsRoster, sunIMPrivateSettings, sunIMProperties, sunIMRoster, sunIMConferenceRoster, sunIMNewsRoster] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["sunIMUser"],
    "&ldapDesc": "Instant Message Service User" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_sunIMUser /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
