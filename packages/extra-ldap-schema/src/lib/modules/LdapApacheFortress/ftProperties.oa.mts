/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
import { ftProps } from "../LdapApacheFortress/ftProps.oa.mjs";
// export { ftProps } from "../LdapApacheFortress/ftProps.oa.mjs";
import { id_oc_ftProperties } from "../LdapApacheFortress/id-oc-ftProperties.va.mjs";
// export { id_oc_ftProperties } from "../LdapApacheFortress/id-oc-ftProperties.va.mjs";


/**
 * @summary ftProperties
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ftProperties OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MAY CONTAIN               { ftProps }
 *   LDAP-NAME                 {"ftProperties"}
 *   LDAP-DESC                 "Fortress Properties AUX Object Class"
 *   ID                        id-oc-ftProperties }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const ftProperties: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ ftProps, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "ftProperties" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Fortress Properties AUX Object Class" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_ftProperties /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
