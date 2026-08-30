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
    ASN1SizeError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { TBCD_STRING, _decode_TBCD_STRING, _encode_TBCD_STRING } from "../MAP-CommonDataTypes/TBCD-STRING.ta.mjs";


/**
 * @summary IMEI
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IMEI  ::=  TBCD-STRING (SIZE (8))
 * ```
 */
export
type IMEI = TBCD_STRING; // DefinedType

let _cached_decoder_for_IMEI: $.ASN1Decoder<IMEI> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IMEI
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IMEI (el: _Element): IMEI {
    if (!_cached_decoder_for_IMEI) { _cached_decoder_for_IMEI = _decode_TBCD_STRING; }
    return _cached_decoder_for_IMEI(el);
}

let _cached_encoder_for_IMEI: $.ASN1Encoder<IMEI> | null = null;

/**
 * @summary Encodes a(n) IMEI into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IMEI, encoded as an ASN.1 Element.
 */
export
function _encode_IMEI (value: IMEI, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IMEI) { _cached_encoder_for_IMEI = _encode_TBCD_STRING; }
    return _cached_encoder_for_IMEI(value, elGetter);
}


/* eslint-enable */
