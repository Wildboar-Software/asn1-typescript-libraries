/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_ftConfig } from "../LdapApacheFortress/id-oc-ftConfig.va.mjs";
import { ftGidNumber } from "../LdapApacheFortress/ftGidNumber.oa.mjs";
import { ftUidNumber } from "../LdapApacheFortress/ftUidNumber.oa.mjs";
// export { id_oc_ftConfig } from "../LdapApacheFortress/id-oc-ftConfig.va.mjs";


/**
 * @summary ftConfig
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ftConfig OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MUST CONTAIN              { ftGidNumber
 *                               | ftUidNumber }
 *   LDAP-NAME                 {"ftConfig"}
 *   LDAP-DESC                 "Fortress Config Properties"
 *   ID                        id-oc-ftConfig }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const ftConfig: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ ftGidNumber, ftUidNumber, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "ftConfig" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Fortress Config Properties" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_ftConfig /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
