/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
import { ansiOrgNumericCode } from "../LdapSchema2ldifNadf/ansiOrgNumericCode.oa.mjs";
// export { ansiOrgNumericCode } from "../LdapSchema2ldifNadf/ansiOrgNumericCode.oa.mjs";
import { id_oc_ansiOrgObject } from "../LdapSchema2ldifNadf/id-oc-ansiOrgObject.va.mjs";
// export { id_oc_ansiOrgObject } from "../LdapSchema2ldifNadf/id-oc-ansiOrgObject.va.mjs";


/**
 * @summary ansiOrgObject
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ansiOrgObject OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MUST CONTAIN              { ansiOrgNumericCode }
 *   LDAP-NAME                 {"ansiOrgObject"}
 *   ID                        id-oc-ansiOrgObject }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const ansiOrgObject: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ ansiOrgNumericCode, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "ansiOrgObject" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_ansiOrgObject /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
