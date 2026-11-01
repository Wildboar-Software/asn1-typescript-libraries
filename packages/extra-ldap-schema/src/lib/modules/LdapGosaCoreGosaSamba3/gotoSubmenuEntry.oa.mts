/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
// export { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { id_oc_gotoSubmenuEntry } from "../LdapGosaCoreGosaSamba3/id-oc-gotoSubmenuEntry.va.mjs";
import { gosaApplicationIcon } from "../LdapGosaCoreGosaSamba3/gosaApplicationIcon.oa.mjs";
import { gosaApplicationPriority } from "../LdapGosaCoreGosaSamba3/gosaApplicationPriority.oa.mjs";
// export { id_oc_gotoSubmenuEntry } from "../LdapGosaCoreGosaSamba3/id-oc-gotoSubmenuEntry.va.mjs";


/**
 * @summary gotoSubmenuEntry
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * gotoSubmenuEntry OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { commonName }
 *   MAY CONTAIN               { gosaApplicationIcon
 *                               | gosaApplicationPriority }
 *   LDAP-NAME                 {"gotoSubmenuEntry"}
 *   LDAP-DESC                 "GOto - contains environment settings (v2.7)"
 *   ID                        id-oc-gotoSubmenuEntry }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const gotoSubmenuEntry: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ commonName, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ gosaApplicationIcon, gosaApplicationPriority, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "gotoSubmenuEntry" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "GOto - contains environment settings (v2.7)" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_gotoSubmenuEntry /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
