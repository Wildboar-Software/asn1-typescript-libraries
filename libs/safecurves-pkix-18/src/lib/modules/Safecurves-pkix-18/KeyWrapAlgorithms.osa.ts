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
import * as $ from "asn1-ts/dist/node/functional";
import { KEY_WRAP } from "../AlgorithmInformation-2009/KEY-WRAP.oca";
export { KEY_WRAP } from "../AlgorithmInformation-2009/KEY-WRAP.oca";
import { kwa_aes128_wrap } from "../CMSAesRsaesOaep-2009/kwa-aes128-wrap.oa";
export { kwa_aes128_wrap } from "../CMSAesRsaesOaep-2009/kwa-aes128-wrap.oa";
import { kwa_aes256_wrap } from "../CMSAesRsaesOaep-2009/kwa-aes256-wrap.oa";
export { kwa_aes256_wrap } from "../CMSAesRsaesOaep-2009/kwa-aes256-wrap.oa";


/* START_OF_SYMBOL_DEFINITION KeyWrapAlgorithms */
/**
 * @summary KeyWrapAlgorithms
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * KeyWrapAlgorithms KEY-WRAP ::= {
 *     kwa-aes128-wrap | kwa-aes256-wrap,
 *     ...
 * }
 * ```
 * 
 * @constant
 * @type {KEY_WRAP[]}
 * 
 */
export
const KeyWrapAlgorithms: (KEY_WRAP)[] = [ kwa_aes128_wrap, kwa_aes256_wrap, ];
/* END_OF_SYMBOL_DEFINITION KeyWrapAlgorithms */

/* eslint-enable */
