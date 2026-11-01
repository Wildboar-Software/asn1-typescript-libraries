/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
// export { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { id_oc_securityObject } from "../LdapSchema2ldifMicrosoft/id-oc-securityObject.va.mjs";
// export { id_oc_securityObject } from "../LdapSchema2ldifMicrosoft/id-oc-securityObject.va.mjs";


/**
 * @summary securityObject
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * securityObject OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      abstract
 *   MUST CONTAIN              { commonName }
 *   LDAP-NAME                 {"securityObject"}
 *   ID                        id-oc-securityObject }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const securityObject: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": abstract /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ commonName, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "securityObject" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_securityObject /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
