/* eslint-disable */
import {
    CertificatePair,
    _decode_CertificatePair,
    _encode_CertificatePair,
} from "../AuthenticationFramework/CertificatePair.ta";
import { id_at_crossCertificatePair } from "../AuthenticationFramework/id-at-crossCertificatePair.va";
import { x509CertificatePair } from "../AuthenticationFramework/x509CertificatePair.oa";
import { certificatePairExactMatch } from "../CertificateExtensions/certificatePairExactMatch.oa";
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
import {
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/AttributeUsage.ta";
export {
    CertificatePair,
    _decode_CertificatePair,
    _encode_CertificatePair,
} from "../AuthenticationFramework/CertificatePair.ta";
export { id_at_crossCertificatePair } from "../AuthenticationFramework/id-at-crossCertificatePair.va";
export { x509CertificatePair } from "../AuthenticationFramework/x509CertificatePair.oa";
export { certificatePairExactMatch } from "../CertificateExtensions/certificatePairExactMatch.oa";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
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
} from "../InformationFramework/AttributeUsage.ta";
export { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca";
export { SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca";

/* START_OF_SYMBOL_DEFINITION crossCertificatePair */
/**
 * @summary crossCertificatePair
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * crossCertificatePair ATTRIBUTE ::= {
 *   WITH SYNTAX              CertificatePair
 *   EQUALITY MATCHING RULE   certificatePairExactMatch
 *   LDAP-SYNTAX              x509CertificatePair.&id
 *   LDAP-NAME                {"crossCertificatePair"}
 *   LDAP-DESC                "X.509 cross certificate pair"
 *   ID                       id-at-crossCertificatePair }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<CertificatePair>}
 * @implements {ATTRIBUTE<CertificatePair>}
 */
export const crossCertificatePair: ATTRIBUTE<CertificatePair> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_CertificatePair,
    },
    encoderFor: {
        "&Type": _encode_CertificatePair,
    },
    "&equality-match": certificatePairExactMatch /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": x509CertificatePair["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["crossCertificatePair"],
    "&ldapDesc": "X.509 cross certificate pair" /* OBJECT_FIELD_SETTING */,
    "&id": id_at_crossCertificatePair /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION crossCertificatePair */

/* eslint-enable */
