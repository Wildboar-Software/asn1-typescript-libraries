/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
import { fipsPlaceNumericCode } from "../LdapSchema2ldifNadf/fipsPlaceNumericCode.oa.mjs";
// export { fipsPlaceNumericCode } from "../LdapSchema2ldifNadf/fipsPlaceNumericCode.oa.mjs";
import { stateOrProvinceName } from "../SelectedAttributeTypes/stateOrProvinceName.oa.mjs";
// export { stateOrProvinceName } from "../SelectedAttributeTypes/stateOrProvinceName.oa.mjs";
import { id_oc_fips55Object } from "../LdapSchema2ldifNadf/id-oc-fips55Object.va.mjs";
// export { id_oc_fips55Object } from "../LdapSchema2ldifNadf/id-oc-fips55Object.va.mjs";


/**
 * @summary fips55Object
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * fips55Object OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MUST CONTAIN              { fipsPlaceNumericCode }
 *   MAY CONTAIN               { stateOrProvinceName }
 *   LDAP-NAME                 {"fips55Object"}
 *   ID                        id-oc-fips55Object }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const fips55Object: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ fipsPlaceNumericCode, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ stateOrProvinceName, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "fips55Object" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_fips55Object /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
