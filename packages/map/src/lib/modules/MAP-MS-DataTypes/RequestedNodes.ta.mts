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



/**
 * @summary RequestedNodes
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RequestedNodes  ::=  BIT STRING {
 *     mme    (0),
 *     sgsn    (1)} (SIZE (1..8))
 * ```
 */
export
type RequestedNodes = BIT_STRING;

/**
 * @summary RequestedNodes_mme
 * @constant
 */
export
const RequestedNodes_mme: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary mme
 * @constant
 */
export
const mme: number = RequestedNodes_mme; /* SHORT_NAMED_BIT */

/**
 * @summary RequestedNodes_sgsn
 * @constant
 */
export
const RequestedNodes_sgsn: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary sgsn
 * @constant
 */
export
const sgsn: number = RequestedNodes_sgsn; /* SHORT_NAMED_BIT */

let _cached_decoder_for_RequestedNodes: $.ASN1Decoder<RequestedNodes> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RequestedNodes
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RequestedNodes (el: _Element): RequestedNodes {
    if (!_cached_decoder_for_RequestedNodes) { _cached_decoder_for_RequestedNodes = $._decodeBitString; }
    return _cached_decoder_for_RequestedNodes(el);
}

let _cached_encoder_for_RequestedNodes: $.ASN1Encoder<RequestedNodes> | null = null;

/**
 * @summary Encodes a(n) RequestedNodes into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RequestedNodes, encoded as an ASN.1 Element.
 */
export
function _encode_RequestedNodes (value: RequestedNodes, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RequestedNodes) { _cached_encoder_for_RequestedNodes = $._encodeBitString; }
    return _cached_encoder_for_RequestedNodes(value, elGetter);
}


/* eslint-enable */
