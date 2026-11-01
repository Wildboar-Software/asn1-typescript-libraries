/* eslint-disable */

import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";

import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_sunIMNews } from "../Ldapmigration65im/id-oc-sunIMNews.va.mjs";

import { sunIMNewsAffiliations } from "../Ldapmigration65im/sunIMNewsAffiliations.oa.mjs";
import { sunIMNewsConfiguration } from "../Ldapmigration65im/sunIMNewsConfiguration.oa.mjs";
import { sunIMNewsMetaData } from "../Ldapmigration65im/sunIMNewsMetaData.oa.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { uid } from "../SelectedAttributeTypes/uid.oa.mjs";
/**
 * @summary sunIMNews
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * sunIMNews OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MAY CONTAIN               { sunIMNewsAffiliations
 *                               | sunIMNewsConfiguration
 *                               | sunIMNewsMetaData
 *                               | commonName
 *                               | uid }
 *   LDAP-NAME                 {"sunIMNews"}
 *   LDAP-DESC                 "Pubsub Channel Object"
 *   ID                        id-oc-sunIMNews }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const sunIMNews: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ sunIMNewsAffiliations, sunIMNewsConfiguration, sunIMNewsMetaData, commonName, uid, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "sunIMNews" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Pubsub Channel Object" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_sunIMNews /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
