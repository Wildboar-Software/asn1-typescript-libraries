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
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";


/**
 * @summary Reverse
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Reverse{OPERATION:OperationSet} OPERATION ::= {Forward{{OperationSet.&Linked}}}
 * ```
 * 
 * @type {OPERATION}
 */
export
type Reverse = OPERATION; // VALUE_SET_TYPE

let _cached_decoder_for_Reverse: $.ASN1Decoder<Reverse> | null = null;

export
function _decode_Reverse (el: _Element) {    if (!_cached_decoder_for_Reverse) { _cached_decoder_for_Reverse = _decode_OPERATION; }    return _cached_decoder_for_Reverse(el);}

let _cached_encoder_for_Reverse: $.ASN1Encoder<Reverse> | null = null;

export
function _encode_Reverse (value: Reverse, elGetter: $.ASN1Encoder<Reverse>) {    if (!_cached_encoder_for_Reverse) { _cached_encoder_for_Reverse = _encode_OPERATION; }    return _cached_encoder_for_Reverse(value, elGetter);}

/* eslint-enable */
