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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';
import { brtcContentInformation } from '../AuthenticationContextForBiometrics/brtcContentInformation.oa.js';
export { brtcContentInformation } from '../AuthenticationContextForBiometrics/brtcContentInformation.oa.js';
import type {
    CONTENT_TYPE,
} from "@wildboar/cms/src/lib/modules/CryptographicMessageSyntax-2010/CONTENT-TYPE.oca.js";

/* START_OF_SYMBOL_DEFINITION ContentTypeBRTCertificateContentInfo */
/**
 * @summary ContentTypeBRTCertificateContentInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ContentTypeBRTCertificateContentInfo CONTENT-TYPE ::= { brtcContentInformation }
 * ```
 *
 * @constant
 * @type {CONTENT_TYPE[]}
 *
 */
export const ContentTypeBRTCertificateContentInfo: CONTENT_TYPE[] = [
    brtcContentInformation,
];
/* END_OF_SYMBOL_DEFINITION ContentTypeBRTCertificateContentInfo */

/* eslint-enable */
