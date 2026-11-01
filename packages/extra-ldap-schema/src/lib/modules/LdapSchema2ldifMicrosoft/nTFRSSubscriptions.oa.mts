/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_nTFRSSubscriptions } from "../LdapSchema2ldifMicrosoft/id-oc-nTFRSSubscriptions.va.mjs";
import { fRSWorkingPath } from "../MSUser/fRSWorkingPath.oa.mjs";
import { fRSExtensions } from "../MSUser/fRSExtensions.oa.mjs";
import { fRSVersion } from "../MSUser/fRSVersion.oa.mjs";
// export { id_oc_nTFRSSubscriptions } from "../LdapSchema2ldifMicrosoft/id-oc-nTFRSSubscriptions.va.mjs";


/**
 * @summary nTFRSSubscriptions
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * nTFRSSubscriptions OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MAY CONTAIN               { fRSWorkingPath
 *                               | fRSExtensions
 *                               | fRSVersion }
 *   LDAP-NAME                 {"nTFRSSubscriptions"}
 *   ID                        id-oc-nTFRSSubscriptions }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const nTFRSSubscriptions: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ fRSWorkingPath, fRSExtensions, fRSVersion, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "nTFRSSubscriptions" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_nTFRSSubscriptions /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
