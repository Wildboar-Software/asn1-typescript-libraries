/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { dc } from "../SelectedAttributeTypes/dc.oa.mjs";
// export { dc } from "../SelectedAttributeTypes/dc.oa.mjs";


/**
 * @summary dcObject
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * dcObject OBJECT-CLASS ::= {
 *     SUBCLASS OF     {top}
 *     KIND            auxiliary
 *     MUST CONTAIN    {dc}
 *     LDAP-NAME       {"Domain Component Object"}
 *     LDAP-DESC       "A DNS Domain Component Object"
 *     ID              { 1 3 6 1 4 1 1466 344 }
 * }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const dcObject: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ dc, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "Domain Component Object" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "A DNS Domain Component Object" /* OBJECT_FIELD_SETTING */,
    "&id": _OID.fromParts([1, 3, 6, 1, 4, 1, 1466, 344,]) /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
