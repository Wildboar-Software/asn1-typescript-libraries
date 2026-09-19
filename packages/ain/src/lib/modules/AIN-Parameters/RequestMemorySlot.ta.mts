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
 * @summary RequestMemorySlot
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RequestMemorySlot  ::=  BIT STRING{
 *         incoming(0),
 *         outgoing(1)
 *     }
 * ```
 */
export
type RequestMemorySlot = BIT_STRING;

/**
 * @summary RequestMemorySlot_incoming
 * @constant
 */
export
const RequestMemorySlot_incoming: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary incoming
 * @constant
 */
export
const incoming: number = RequestMemorySlot_incoming; /* SHORT_NAMED_BIT */

/**
 * @summary RequestMemorySlot_outgoing
 * @constant
 */
export
const RequestMemorySlot_outgoing: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary outgoing
 * @constant
 */
export
const outgoing: number = RequestMemorySlot_outgoing; /* SHORT_NAMED_BIT */

let _cached_decoder_for_RequestMemorySlot: $.ASN1Decoder<RequestMemorySlot> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RequestMemorySlot
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RequestMemorySlot (el: _Element): RequestMemorySlot {
    if (!_cached_decoder_for_RequestMemorySlot) { _cached_decoder_for_RequestMemorySlot = $._decodeBitString; }
    return _cached_decoder_for_RequestMemorySlot(el);
}

let _cached_encoder_for_RequestMemorySlot: $.ASN1Encoder<RequestMemorySlot> | null = null;

/**
 * @summary Encodes a(n) RequestMemorySlot into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RequestMemorySlot, encoded as an ASN.1 Element.
 */
export
function _encode_RequestMemorySlot (value: RequestMemorySlot, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RequestMemorySlot) { _cached_encoder_for_RequestMemorySlot = $._encodeBitString; }
    return _cached_encoder_for_RequestMemorySlot(value, elGetter);
}


/* eslint-enable */
