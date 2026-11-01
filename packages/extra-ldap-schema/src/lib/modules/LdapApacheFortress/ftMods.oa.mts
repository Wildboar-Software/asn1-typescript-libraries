/* eslint-disable */

import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";

import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_ftMods } from "../LdapApacheFortress/id-oc-ftMods.va.mjs";

import { ftModifier } from "../LdapApacheFortress/ftModifier.oa.mjs";
import { ftModCode } from "../LdapApacheFortress/ftModCode.oa.mjs";
import { ftModId } from "../LdapApacheFortress/ftModId.oa.mjs";
/**
 * @summary ftMods
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ftMods OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MAY CONTAIN               { ftModifier
 *                               | ftModCode
 *                               | ftModId }
 *   LDAP-NAME                 {"ftMods"}
 *   LDAP-DESC                 "Fortress Modifiers AUX Object Class"
 *   ID                        id-oc-ftMods }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const ftMods: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ ftModifier, ftModCode, ftModId, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "ftMods" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Fortress Modifiers AUX Object Class" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_ftMods /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
