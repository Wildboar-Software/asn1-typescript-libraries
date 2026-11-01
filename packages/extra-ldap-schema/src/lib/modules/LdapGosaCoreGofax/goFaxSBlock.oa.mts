/* eslint-disable */

import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";

import { top } from "../InformationFramework/top.oa.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { id_oc_goFaxSBlock } from "../LdapGosaCoreGofax/id-oc-goFaxSBlock.va.mjs";

import { goFaxSBlocklist } from "../LdapGosaCoreGofax/goFaxSBlocklist.oa.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";
/**
 * @summary goFaxSBlock
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * goFaxSBlock OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { commonName }
 *   MAY CONTAIN               { goFaxSBlocklist
 *                               | description }
 *   LDAP-NAME                 {"goFaxSBlock"}
 *   LDAP-DESC                 "goFax send blocklist groups (v1.0.4)"
 *   ID                        id-oc-goFaxSBlock }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const goFaxSBlock: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ commonName, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ goFaxSBlocklist, description, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "goFaxSBlock" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "goFax send blocklist groups (v1.0.4)" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_goFaxSBlock /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
