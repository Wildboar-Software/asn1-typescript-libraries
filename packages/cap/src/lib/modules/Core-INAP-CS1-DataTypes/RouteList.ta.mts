/* eslint-disable */
import {
    OCTET_STRING,
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
 * @summary RouteList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RouteList      ::=  SEQUENCE SIZE(1..3) OF OCTET STRING (SIZE (minRouteListLength ..      maxRouteListLength))
 * ```
 */
export
type RouteList = OCTET_STRING[]; // SequenceOfType

let _cached_decoder_for_RouteList: $.ASN1Decoder<RouteList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RouteList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RouteList (el: _Element): RouteList {
    if (!_cached_decoder_for_RouteList) { _cached_decoder_for_RouteList = $._decodeSequenceOf<OCTET_STRING>(() => $._decodeOctetString); }
    return _cached_decoder_for_RouteList(el);
}

let _cached_encoder_for_RouteList: $.ASN1Encoder<RouteList> | null = null;

/**
 * @summary Encodes a(n) RouteList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RouteList, encoded as an ASN.1 Element.
 */
export
function _encode_RouteList (value: RouteList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RouteList) { _cached_encoder_for_RouteList = $._encodeSequenceOf<OCTET_STRING>(() => $._encodeOctetString, $.BER); }
    return _cached_encoder_for_RouteList(value, elGetter);
}


/* eslint-enable */
