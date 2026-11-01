/* eslint-disable */

import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";

import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_sunIMConference } from "../Ldapmigration65im/id-oc-sunIMConference.va.mjs";

import { sunIMConferenceAffiliations } from "../Ldapmigration65im/sunIMConferenceAffiliations.oa.mjs";
import { sunIMConferenceConfiguration } from "../Ldapmigration65im/sunIMConferenceConfiguration.oa.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { uid } from "../SelectedAttributeTypes/uid.oa.mjs";
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
const sunIMConference: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ sunIMConferenceAffiliations, sunIMConferenceConfiguration, commonName, uid, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "sunIMConference" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Conference Object" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_sunIMConference /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
