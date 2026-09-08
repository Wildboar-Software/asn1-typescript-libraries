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
import { SupportedAlgorithm, _decode_SupportedAlgorithm, _encode_SupportedAlgorithm } from "../AuthenticationFramework/SupportedAlgorithm.ta.mjs";
// export { SupportedAlgorithm, _decode_SupportedAlgorithm, _encode_SupportedAlgorithm } from "../AuthenticationFramework/SupportedAlgorithm.ta.mjs";
import { x509SupportedAlgorithm } from "../AuthenticationFramework/x509SupportedAlgorithm.oa.mjs";
// export { x509SupportedAlgorithm } from "../AuthenticationFramework/x509SupportedAlgorithm.oa.mjs";
import { id_at_supportedAlgorithms } from "../AuthenticationFramework/id-at-supportedAlgorithms.va.mjs";
// export { id_at_supportedAlgorithms } from "../AuthenticationFramework/id-at-supportedAlgorithms.va.mjs";


/**
 * @summary supportedAlgorithms
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * supportedAlgorithms ATTRIBUTE ::= {
 *   WITH SYNTAX              SupportedAlgorithm
 *   EQUALITY MATCHING RULE   algorithmIdentifierMatch
 *   LDAP-SYNTAX              x509SupportedAlgorithm.&id
 *   LDAP-NAME                {"supportedAlgorithms"}
 *   LDAP-DESC                "X.509 support algorithms"
 *   ID                       id-at-supportedAlgorithms }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<SupportedAlgorithm>}
 * @implements {ATTRIBUTE<SupportedAlgorithm>}
 */
export
const supportedAlgorithms: ATTRIBUTE<SupportedAlgorithm> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_SupportedAlgorithm,
    },
    encoderFor: {
        "&Type": _encode_SupportedAlgorithm,
    },
    "&equality-match": algorithmIdentifierMatch /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": x509SupportedAlgorithm["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "supportedAlgorithms" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "X.509 support algorithms" /* OBJECT_FIELD_SETTING */,
    "&id": id_at_supportedAlgorithms /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
