/* eslint-disable */

import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";

import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_soniaMapping } from "../Ldapmigration97sonia/id-oc-soniaMapping.va.mjs";

import { soniaMappingKey } from "../Ldapmigration97sonia/soniaMappingKey.oa.mjs";
import { soniaMappingName } from "../Ldapmigration97sonia/soniaMappingName.oa.mjs";
import { soniaMappingDescription } from "../Ldapmigration97sonia/soniaMappingDescription.oa.mjs";
import { soniaMappingTypeKey } from "../Ldapmigration97sonia/soniaMappingTypeKey.oa.mjs";
/**
 * @summary soniaMapping
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * soniaMapping OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MAY CONTAIN               { soniaMappingKey
 *                               | soniaMappingName
 *                               | soniaMappingDescription
 *                               | soniaMappingTypeKey }
 *   LDAP-NAME                 {"soniaMapping"}
 *   ID                        id-oc-soniaMapping }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const soniaMapping: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ soniaMappingKey, soniaMappingName, soniaMappingDescription, soniaMappingTypeKey, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "soniaMapping" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_soniaMapping /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
