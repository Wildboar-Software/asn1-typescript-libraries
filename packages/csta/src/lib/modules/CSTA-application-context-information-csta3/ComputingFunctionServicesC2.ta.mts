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
 * @summary ComputingFunctionServicesC2
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ComputingFunctionServicesC2  ::=  BIT STRING
 *     {routeRequest                   (0),
 *      reRouteRequest             (1),
 *      routeSelectRequest             (2),
 *      routeUsedRequest               (3),
 *      routeEndRequest                (4)     }
 * ```
 */
export
type ComputingFunctionServicesC2 = BIT_STRING;

/**
 * @summary ComputingFunctionServicesC2_routeRequest
 * @constant
 */
export
const ComputingFunctionServicesC2_routeRequest: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary routeRequest
 * @constant
 */
export
const routeRequest: number = ComputingFunctionServicesC2_routeRequest; /* SHORT_NAMED_BIT */

/**
 * @summary ComputingFunctionServicesC2_reRouteRequest
 * @constant
 */
export
const ComputingFunctionServicesC2_reRouteRequest: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary reRouteRequest
 * @constant
 */
export
const reRouteRequest: number = ComputingFunctionServicesC2_reRouteRequest; /* SHORT_NAMED_BIT */

/**
 * @summary ComputingFunctionServicesC2_routeSelectRequest
 * @constant
 */
export
const ComputingFunctionServicesC2_routeSelectRequest: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary routeSelectRequest
 * @constant
 */
export
const routeSelectRequest: number = ComputingFunctionServicesC2_routeSelectRequest; /* SHORT_NAMED_BIT */

/**
 * @summary ComputingFunctionServicesC2_routeUsedRequest
 * @constant
 */
export
const ComputingFunctionServicesC2_routeUsedRequest: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary routeUsedRequest
 * @constant
 */
export
const routeUsedRequest: number = ComputingFunctionServicesC2_routeUsedRequest; /* SHORT_NAMED_BIT */

/**
 * @summary ComputingFunctionServicesC2_routeEndRequest
 * @constant
 */
export
const ComputingFunctionServicesC2_routeEndRequest: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary routeEndRequest
 * @constant
 */
export
const routeEndRequest: number = ComputingFunctionServicesC2_routeEndRequest; /* SHORT_NAMED_BIT */

let _cached_decoder_for_ComputingFunctionServicesC2: $.ASN1Decoder<ComputingFunctionServicesC2> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ComputingFunctionServicesC2
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ComputingFunctionServicesC2 (el: _Element): ComputingFunctionServicesC2 {
    if (!_cached_decoder_for_ComputingFunctionServicesC2) { _cached_decoder_for_ComputingFunctionServicesC2 = $._decodeBitString; }
    return _cached_decoder_for_ComputingFunctionServicesC2(el);
}

let _cached_encoder_for_ComputingFunctionServicesC2: $.ASN1Encoder<ComputingFunctionServicesC2> | null = null;

/**
 * @summary Encodes a(n) ComputingFunctionServicesC2 into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ComputingFunctionServicesC2, encoded as an ASN.1 Element.
 */
export
function _encode_ComputingFunctionServicesC2 (value: ComputingFunctionServicesC2, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ComputingFunctionServicesC2) { _cached_encoder_for_ComputingFunctionServicesC2 = $._encodeBitString; }
    return _cached_encoder_for_ComputingFunctionServicesC2(value, elGetter);
}


/* eslint-enable */
