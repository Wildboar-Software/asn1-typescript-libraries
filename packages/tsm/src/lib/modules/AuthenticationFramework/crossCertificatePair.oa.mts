/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { type MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.mjs";
import { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
import { type SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca.mjs";
import { CertificatePair, _decode_CertificatePair, _encode_CertificatePair } from "../AuthenticationFramework/CertificatePair.ta.mjs";
// export { CertificatePair, _decode_CertificatePair, _encode_CertificatePair } from "../AuthenticationFramework/CertificatePair.ta.mjs";
import { x509CertificatePair } from "../AuthenticationFramework/x509CertificatePair.oa.mjs";
// export { x509CertificatePair } from "../AuthenticationFramework/x509CertificatePair.oa.mjs";
import { id_at_crossCertificatePair } from "../AuthenticationFramework/id-at-crossCertificatePair.va.mjs";
// export { id_at_crossCertificatePair } from "../AuthenticationFramework/id-at-crossCertificatePair.va.mjs";


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
export
const crossCertificatePair: ATTRIBUTE<CertificatePair> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_CertificatePair,
    },
    encoderFor: {
        "&Type": _encode_CertificatePair,
    },
    "&equality-match": certificatePairExactMatch /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": x509CertificatePair["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "crossCertificatePair" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "X.509 cross certificate pair" /* OBJECT_FIELD_SETTING */,
    "&id": id_at_crossCertificatePair /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
