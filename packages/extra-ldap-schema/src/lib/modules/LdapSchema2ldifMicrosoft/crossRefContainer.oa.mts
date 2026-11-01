/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
import { uPNSuffixes } from "../MSUser/uPNSuffixes.oa.mjs";
// export { uPNSuffixes } from "../MSUser/uPNSuffixes.oa.mjs";
import { id_oc_crossRefContainer } from "../LdapSchema2ldifMicrosoft/id-oc-crossRefContainer.va.mjs";
// export { id_oc_crossRefContainer } from "../LdapSchema2ldifMicrosoft/id-oc-crossRefContainer.va.mjs";


/**
 * @summary crossRefContainer
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * crossRefContainer OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MAY CONTAIN               { uPNSuffixes }
 *   LDAP-NAME                 {"crossRefContainer"}
 *   ID                        id-oc-crossRefContainer }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const crossRefContainer: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ uPNSuffixes, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "crossRefContainer" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_crossRefContainer /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
