/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { dSA } from "../SelectedObjectClasses/dSA.oa.mjs";
// export { dSA } from "../SelectedObjectClasses/dSA.oa.mjs";
import { dSAQuality } from "../LdapSchema2ldifCosine/dSAQuality.oa.mjs";
// export { dSAQuality } from "../LdapSchema2ldifCosine/dSAQuality.oa.mjs";
import { id_oc_pilotDSA } from "../LdapSchema2ldifCosine/id-oc-pilotDSA.va.mjs";
// export { id_oc_pilotDSA } from "../LdapSchema2ldifCosine/id-oc-pilotDSA.va.mjs";


/**
 * @summary pilotDSA
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * pilotDSA OBJECT-CLASS ::= {
 *   SUBCLASS OF               { dSA }
 *   MAY CONTAIN               { dSAQuality }
 *   LDAP-NAME                 {"pilotDSA"}
 *   ID                        id-oc-pilotDSA }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const pilotDSA: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ dSA, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ dSAQuality, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "pilotDSA" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_pilotDSA /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
