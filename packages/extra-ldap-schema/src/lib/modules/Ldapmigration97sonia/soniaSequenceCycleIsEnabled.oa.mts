/* eslint-disable */
import {
    type BOOLEAN
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
import { boolean_ } from "../SelectedAttributeTypes/boolean.oa.mjs";
import { id_at_soniaSequenceCycleIsEnabled } from "../Ldapmigration97sonia/id-at-soniaSequenceCycleIsEnabled.va.mjs";


/**
 * @summary soniaSequenceCycleIsEnabled
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * soniaSequenceCycleIsEnabled ATTRIBUTE ::= {
 *   WITH SYNTAX               BOOLEAN
 *   SINGLE VALUE              TRUE
 *   LDAP-SYNTAX               boolean.&id
 *   LDAP-NAME                 {"soniaSequenceCycleIsEnabled"}
 *   LDAP-DESC                 "continues to generate values after reaching either its maximum or minimum value"
 *   ID                        id-at-soniaSequenceCycleIsEnabled }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<BOOLEAN>}
 * @implements {ATTRIBUTE<BOOLEAN>}
 */
export
const soniaSequenceCycleIsEnabled: ATTRIBUTE<BOOLEAN> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": $._decodeBoolean,
    },
    encoderFor: {
        "&Type": $._encodeBoolean,
    },
    "&single-valued": true /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": boolean_["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "soniaSequenceCycleIsEnabled" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "continues to generate values after reaching either its maximum or minimum value" /* OBJECT_FIELD_SETTING */,
    "&id": id_at_soniaSequenceCycleIsEnabled /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

