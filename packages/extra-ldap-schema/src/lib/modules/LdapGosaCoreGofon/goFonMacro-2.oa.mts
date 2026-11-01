/* eslint-disable */

import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";

import { top } from "../InformationFramework/top.oa.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { id_oc_goFonMacro_2 } from "../LdapGosaCoreGofon/id-oc-goFonMacro-2.va.mjs";

import { goFonMacroVisible } from "../LdapGosaCoreGofon/goFonMacroVisible.oa.mjs";
import { displayName } from "../InetOrgPerson/displayName.oa.mjs";
import { goFonMacroContent } from "../LdapGosaCoreGofon/goFonMacroContent.oa.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";
import { goFonMacroParameter } from "../LdapGosaCoreGofon/goFonMacroParameter.oa.mjs";
/**
 * @summary goFonMacro_2
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * goFonMacro-2 OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { commonName }
 *   MAY CONTAIN               { goFonMacroVisible
 *                               | displayName
 *                               | goFonMacroContent
 *                               | description
 *                               | goFonMacroParameter }
 *   LDAP-NAME                 {"goFonMacro"}
 *   LDAP-DESC                 "Macro definitions for asterisk machines (v2.7)"
 *   ID                        id-oc-goFonMacro-2 }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const goFonMacro_2: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ commonName, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ goFonMacroVisible, displayName, goFonMacroContent, description, goFonMacroParameter, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "goFonMacro" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Macro definitions for asterisk machines (v2.7)" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_goFonMacro_2 /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
