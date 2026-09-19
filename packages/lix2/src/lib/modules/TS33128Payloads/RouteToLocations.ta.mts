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
import { RouteToLocation, _decode_RouteToLocation, _encode_RouteToLocation } from "../TS33128Payloads/RouteToLocation.ta.mjs";
// export { RouteToLocation, _decode_RouteToLocation, _encode_RouteToLocation } from "../TS33128Payloads/RouteToLocation.ta.mjs";


/**
 * @summary RouteToLocations
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RouteToLocations  ::=  SET OF RouteToLocation
 * ```
 */
export
type RouteToLocations = RouteToLocation[]; // SetOfType

let _cached_decoder_for_RouteToLocations: $.ASN1Decoder<RouteToLocations> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RouteToLocations
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RouteToLocations (el: _Element): RouteToLocations {
    if (!_cached_decoder_for_RouteToLocations) { _cached_decoder_for_RouteToLocations = $._decodeSetOf<RouteToLocation>(() => _decode_RouteToLocation); }
    return _cached_decoder_for_RouteToLocations(el);
}

let _cached_encoder_for_RouteToLocations: $.ASN1Encoder<RouteToLocations> | null = null;

/**
 * @summary Encodes a(n) RouteToLocations into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RouteToLocations, encoded as an ASN.1 Element.
 */
export
function _encode_RouteToLocations (value: RouteToLocations, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RouteToLocations) { _cached_encoder_for_RouteToLocations = $._encodeSetOf<RouteToLocation>(() => _encode_RouteToLocation, $.BER); }
    return _cached_encoder_for_RouteToLocations(value, elGetter);
}


/* eslint-enable */
