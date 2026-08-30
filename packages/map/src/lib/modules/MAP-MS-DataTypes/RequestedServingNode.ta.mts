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
 * @summary RequestedServingNode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RequestedServingNode  ::=  BIT STRING {
 *     mmeAndSgsn  (0)} (SIZE (1..8))
 * ```
 */
export
type RequestedServingNode = BIT_STRING;

/**
 * @summary RequestedServingNode_mmeAndSgsn
 * @constant
 */
export
const RequestedServingNode_mmeAndSgsn: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary mmeAndSgsn
 * @constant
 */
export
const mmeAndSgsn: number = RequestedServingNode_mmeAndSgsn; /* SHORT_NAMED_BIT */

let _cached_decoder_for_RequestedServingNode: $.ASN1Decoder<RequestedServingNode> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RequestedServingNode
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RequestedServingNode (el: _Element): RequestedServingNode {
    if (!_cached_decoder_for_RequestedServingNode) { _cached_decoder_for_RequestedServingNode = $._decodeBitString; }
    return _cached_decoder_for_RequestedServingNode(el);
}

let _cached_encoder_for_RequestedServingNode: $.ASN1Encoder<RequestedServingNode> | null = null;

/**
 * @summary Encodes a(n) RequestedServingNode into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RequestedServingNode, encoded as an ASN.1 Element.
 */
export
function _encode_RequestedServingNode (value: RequestedServingNode, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RequestedServingNode) { _cached_encoder_for_RequestedServingNode = $._encodeBitString; }
    return _cached_encoder_for_RequestedServingNode(value, elGetter);
}


/* eslint-enable */
