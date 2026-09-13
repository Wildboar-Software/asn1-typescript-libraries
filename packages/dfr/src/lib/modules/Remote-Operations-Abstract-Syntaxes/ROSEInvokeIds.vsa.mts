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
import { InvokeId, _decode_InvokeId, _encode_InvokeId } from "../Remote-Operations-Generic-ROS-PDUs/InvokeId.ta.mjs";
// export { InvokeId, _decode_InvokeId, _encode_InvokeId } from "../Remote-Operations-Generic-ROS-PDUs/InvokeId.ta.mjs";


/**
 * @summary ROSEInvokeIds
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ROSEInvokeIds InvokeId ::= {ALL EXCEPT noInvokeId}
 * ```
 * 
 * @type {InvokeId}
 */
export
type ROSEInvokeIds = InvokeId; // VALUE_SET_TYPE

let _cached_decoder_for_ROSEInvokeIds: $.ASN1Decoder<ROSEInvokeIds> | null = null;

export
function _decode_ROSEInvokeIds (el: _Element) {    if (!_cached_decoder_for_ROSEInvokeIds) { _cached_decoder_for_ROSEInvokeIds = _decode_InvokeId; }    return _cached_decoder_for_ROSEInvokeIds(el);}

let _cached_encoder_for_ROSEInvokeIds: $.ASN1Encoder<ROSEInvokeIds> | null = null;

export
function _encode_ROSEInvokeIds (value: ROSEInvokeIds, elGetter: $.ASN1Encoder<ROSEInvokeIds>) {    if (!_cached_encoder_for_ROSEInvokeIds) { _cached_encoder_for_ROSEInvokeIds = _encode_InvokeId; }    return _cached_encoder_for_ROSEInvokeIds(value, elGetter);}

/* eslint-enable */
