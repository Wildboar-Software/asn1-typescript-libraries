/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
// export { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { gosaSetting } from "../LdapGosaCoreGosaSamba3/gosaSetting.oa.mjs";
// export { gosaSetting } from "../LdapGosaCoreGosaSamba3/gosaSetting.oa.mjs";
import { id_oc_gosaConfig } from "../LdapGosaCoreGosaSamba3/id-oc-gosaConfig.va.mjs";
// export { id_oc_gosaConfig } from "../LdapGosaCoreGosaSamba3/id-oc-gosaConfig.va.mjs";


/**
 * @summary gosaConfig
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * gosaConfig OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { commonName }
 *   MAY CONTAIN               { gosaSetting }
 *   LDAP-NAME                 {"gosaConfig"}
 *   LDAP-DESC                 "Settings for gosa. Replaces parts of the gosa.conf. (v2.7)"
 *   ID                        id-oc-gosaConfig }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const gosaConfig: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ commonName, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ gosaSetting, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "gosaConfig" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Settings for gosa. Replaces parts of the gosa.conf. (v2.7)" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_gosaConfig /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
