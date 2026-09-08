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



/**
 * @summary BidirectionalServicesC2
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BidirectionalServicesC2  ::=  BIT STRING
 *     {escapeService                  (0),
 *      systemStatus                   (1)     }
 * ```
 */
export
type BidirectionalServicesC2 = BIT_STRING;

/**
 * @summary BidirectionalServicesC2_escapeService
 * @constant
 */
export
const BidirectionalServicesC2_escapeService: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary escapeService
 * @constant
 */
export
const escapeService: number = BidirectionalServicesC2_escapeService; /* SHORT_NAMED_BIT */

/**
 * @summary BidirectionalServicesC2_systemStatus
 * @constant
 */
export
const BidirectionalServicesC2_systemStatus: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary systemStatus
 * @constant
 */
export
const systemStatus: number = BidirectionalServicesC2_systemStatus; /* SHORT_NAMED_BIT */

let _cached_decoder_for_BidirectionalServicesC2: $.ASN1Decoder<BidirectionalServicesC2> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) BidirectionalServicesC2
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_BidirectionalServicesC2 (el: _Element): BidirectionalServicesC2 {
    if (!_cached_decoder_for_BidirectionalServicesC2) { _cached_decoder_for_BidirectionalServicesC2 = $._decodeBitString; }
    return _cached_decoder_for_BidirectionalServicesC2(el);
}

let _cached_encoder_for_BidirectionalServicesC2: $.ASN1Encoder<BidirectionalServicesC2> | null = null;

/**
 * @summary Encodes a(n) BidirectionalServicesC2 into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BidirectionalServicesC2, encoded as an ASN.1 Element.
 */
export
function _encode_BidirectionalServicesC2 (value: BidirectionalServicesC2, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_BidirectionalServicesC2) { _cached_encoder_for_BidirectionalServicesC2 = $._encodeBitString; }
    return _cached_encoder_for_BidirectionalServicesC2(value, elGetter);
}


/* eslint-enable */
