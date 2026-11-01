/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { ID, _decode_ID, _encode_ID } from "../VOPerson/ID.ta.mjs";
import { id_oc_voPersonObjectClass } from "../VOPerson/id-oc-voPersonObjectClass.va.mjs";
import { VOPersonAttributes } from "../VOPerson/VOPersonAttributes.osa.mjs";
// export { id_oc_voPersonObjectClass } from "../VOPerson/id-oc-voPersonObjectClass.va.mjs";


/**
 * @summary voPersonObjectClass
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * voPersonObjectClass OBJECT-CLASS ::= {
 *     SUBCLASS OF            {top}
 *     KIND                auxiliary
 *     MAY CONTAIN            {VOPersonAttributes}
 *     LDAP-NAME            {"voPersonObjectClass"}
 *     LDAP-DESC            "REFEDS Virtual Organization Person"
 *     ID                    id-oc-voPersonObjectClass
 * }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const voPersonObjectClass: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ ...VOPersonAttributes, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "voPersonObjectClass" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "REFEDS Virtual Organization Person" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_voPersonObjectClass /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
