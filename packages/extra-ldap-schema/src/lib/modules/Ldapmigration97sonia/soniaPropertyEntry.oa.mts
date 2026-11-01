/* eslint-disable */

import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";

import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_soniaPropertyEntry } from "../Ldapmigration97sonia/id-oc-soniaPropertyEntry.va.mjs";

import { soniaProperty } from "../Ldapmigration97sonia/soniaProperty.oa.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";
/**
 * @summary soniaPropertyEntry
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * soniaPropertyEntry OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MAY CONTAIN               { soniaProperty
 *                               | description }
 *   LDAP-NAME                 {"soniaPropertyEntry"}
 *   ID                        id-oc-soniaPropertyEntry }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const soniaPropertyEntry: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ soniaProperty, description, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "soniaPropertyEntry" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_soniaPropertyEntry /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
