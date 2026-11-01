/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
// export { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { id_oc_apple_computer_list } from "../LdapSchema2ldifApple/id-oc-apple-computer-list.va.mjs";
import { apple_mcxflags } from "../LdapSchema2ldifApple/apple-mcxflags.oa.mjs";
import { apple_mcxsettings } from "../LdapSchema2ldifApple/apple-mcxsettings.oa.mjs";
import { apple_computer_list_groups } from "../LdapSchema2ldifApple/apple-computer-list-groups.oa.mjs";
import { apple_computers } from "../LdapSchema2ldifApple/apple-computers.oa.mjs";
import { apple_generateduid } from "../LdapSchema2ldifApple/apple-generateduid.oa.mjs";
import { apple_keyword } from "../LdapSchema2ldifApple/apple-keyword.oa.mjs";
// export { id_oc_apple_computer_list } from "../LdapSchema2ldifApple/id-oc-apple-computer-list.va.mjs";


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
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ commonName, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ apple_mcxflags, apple_mcxsettings, apple_computer_list_groups, apple_computers, apple_generateduid, apple_keyword, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "apple-computer-list" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "computer list" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_apple_computer_list /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
