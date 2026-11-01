/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
import { lastModifiedTime } from "../LdapSchema2ldifCosine/lastModifiedTime.oa.mjs";
// export { lastModifiedTime } from "../LdapSchema2ldifCosine/lastModifiedTime.oa.mjs";
import { id_oc_nadfObject } from "../LdapSchema2ldifNadf/id-oc-nadfObject.va.mjs";
import { multiMediaInformation } from "../LdapSchema2ldifNadf/multiMediaInformation.oa.mjs";
import { nadfSearchGuide } from "../LdapSchema2ldifNadf/nadfSearchGuide.oa.mjs";
import { supplementaryInformation } from "../LdapSchema2ldifNadf/supplementaryInformation.oa.mjs";
// export { id_oc_nadfObject } from "../LdapSchema2ldifNadf/id-oc-nadfObject.va.mjs";


/**
 * @summary nadfObject
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * nadfObject OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      abstract
 *   MUST CONTAIN              { lastModifiedTime }
 *   MAY CONTAIN               { multiMediaInformation
 *                               | nadfSearchGuide
 *                               | supplementaryInformation }
 *   LDAP-NAME                 {"nadfObject"}
 *   ID                        id-oc-nadfObject }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const nadfObject: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": abstract /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ lastModifiedTime, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ multiMediaInformation, nadfSearchGuide, supplementaryInformation, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "nadfObject" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_nadfObject /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
