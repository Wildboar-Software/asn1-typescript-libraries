/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
import { pkcs_9_oc_naturalPerson } from "../PKCS-9/pkcs-9-oc-naturalPerson.va.mjs";
import { NaturalPersonAttributeSet } from "../PKCS-9/NaturalPersonAttributeSet.osa.mjs";
// export { pkcs_9_oc_naturalPerson } from "../PKCS-9/pkcs-9-oc-naturalPerson.va.mjs";


/**
 * @summary naturalPerson
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * naturalPerson OBJECT-CLASS ::= {
 *         SUBCLASS OF     { top }
 *         KIND            auxiliary
 *         MAY CONTAIN     { NaturalPersonAttributeSet }
 *         ID              pkcs-9-oc-naturalPerson
 * }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const naturalPerson: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ ...NaturalPersonAttributeSet, ] /* OBJECT_FIELD_SETTING */,
    "&id": pkcs_9_oc_naturalPerson /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
