/* eslint-disable */
import { subjectAltPublicKeyInfo } from "../CertificateExtensions/subjectAltPublicKeyInfo.oa.js";
import { id_asx_subjectAltPublicKeyInfo } from "../ExtensionAttributes/id-asx-subjectAltPublicKeyInfo.va.js";
import { id_ce_a_subjectAltPublicKeyInfo } from "../ExtensionAttributes/id-ce-a-subjectAltPublicKeyInfo.va.js";
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.js";
import {
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/AttributeUsage.ta.js";
export { subjectAltPublicKeyInfo } from "../CertificateExtensions/subjectAltPublicKeyInfo.oa.js";
export { id_asx_subjectAltPublicKeyInfo } from "../ExtensionAttributes/id-asx-subjectAltPublicKeyInfo.va.js";
export { id_ce_a_subjectAltPublicKeyInfo } from "../ExtensionAttributes/id-ce-a-subjectAltPublicKeyInfo.va.js";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.js";
export {
    AttributeUsage,
    AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */,
    AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */,
    AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */,
    AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */,
    directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_AttributeUsage,
    _encode_AttributeUsage,
    _enum_for_AttributeUsage,
} from "../InformationFramework/AttributeUsage.ta.js";
export { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.js";
export { SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca.js";

/* START_OF_SYMBOL_DEFINITION a_subjectAltPublicKeyInfo */
/**
 * @summary a_subjectAltPublicKeyInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * a-subjectAltPublicKeyInfo ATTRIBUTE ::= {
 *   WITH SYNTAX       subjectAltPublicKeyInfo.&ExtnType
 *   LDAP-SYNTAX       id-asx-subjectAltPublicKeyInfo
 *   LDAP-NAME         {"Subject alternative public key info"}
 *   ID                id-ce-a-subjectAltPublicKeyInfo}
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<typeof subjectAltPublicKeyInfo["&ExtnType"]>}
 * @implements {ATTRIBUTE<typeof subjectAltPublicKeyInfo["&ExtnType"]>}
 */
export const a_subjectAltPublicKeyInfo: ATTRIBUTE<
    typeof subjectAltPublicKeyInfo["&ExtnType"]
> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": subjectAltPublicKeyInfo.decoderFor["&ExtnType"],
    },
    encoderFor: {
        "&Type": subjectAltPublicKeyInfo.encoderFor["&ExtnType"],
    },
    "&ldapSyntax": id_asx_subjectAltPublicKeyInfo /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_ce_a_subjectAltPublicKeyInfo /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION a_subjectAltPublicKeyInfo */

/* eslint-enable */
