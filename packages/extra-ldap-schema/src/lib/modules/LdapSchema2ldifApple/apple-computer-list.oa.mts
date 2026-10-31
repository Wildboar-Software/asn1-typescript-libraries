/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_apple_computer_list } from "../LdapSchema2ldifApple/id-oc-apple-computer-list.va.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { apple_computer_list_groups } from "./apple-computer-list-groups.oa.mjs";
import { apple_computers } from "./apple-computers.oa.mjs";
import { apple_generateduid } from "./apple-generateduid.oa.mjs";
import { apple_keyword } from "./apple-keyword.oa.mjs";
import { apple_mcxflags } from "./apple-mcxflags.oa.mjs";
import { apple_mcxsettings } from "./apple-mcxsettings.oa.mjs";

/**
 * @summary apple_computer_list
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * apple-computer-list OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { commonName }
 *   MAY CONTAIN               { apple-mcxflags
 *                               | apple-mcxsettings
 *                               | apple-computer-list-groups
 *                               | apple-computers
 *                               | apple-generateduid
 *                               | apple-keyword }
 *   LDAP-NAME                 {"apple-computer-list"}
 *   LDAP-DESC                 "computer list"
 *   ID                        id-oc-apple-computer-list }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const apple_computer_list: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [commonName] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [apple_mcxflags, apple_mcxsettings, apple_computer_list_groups, apple_computers, apple_generateduid, apple_keyword] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["apple-computer-list"],
    "&ldapDesc": "computer list" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_apple_computer_list /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
