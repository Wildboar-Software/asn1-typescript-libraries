/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary FramedRoute
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FramedRoute  ::=  CHOICE
 * {
 *         -- Additional Framed Route prefix information associated with the target service
 * 
 *     framedRoute     [0] OCTET STRING,
 *         -- This could contain an IPv4 as well as IPv6 FramedRoute information
 *         -- including additional information such Gateway address and
 *         -- one or more metrics in texual format.
 *         -- This parameter shall be populated with the RADIUS value.
 *     ...
 * }
 * ```
 */
export
type FramedRoute =
    { framedRoute: OCTET_STRING } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_FramedRoute: $.ASN1Decoder<FramedRoute> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FramedRoute
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FramedRoute (el: _Element): FramedRoute {
    if (!_cached_decoder_for_FramedRoute) { _cached_decoder_for_FramedRoute = $._decode_extensible_choice<FramedRoute>({
    "CONTEXT 0": [ "framedRoute", $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString) ]
}); }
    return _cached_decoder_for_FramedRoute(el);
}

let _cached_encoder_for_FramedRoute: $.ASN1Encoder<FramedRoute> | null = null;

/**
 * @summary Encodes a(n) FramedRoute into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FramedRoute, encoded as an ASN.1 Element.
 */
export
function _encode_FramedRoute (value: FramedRoute, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FramedRoute) { _cached_encoder_for_FramedRoute = $._encode_choice<FramedRoute>({
    "framedRoute": $._encode_implicit(_TagClass.context, 0, () => $._encodeOctetString, $.BER),
}, $.BER); }
    return _cached_encoder_for_FramedRoute(value, elGetter);
}


/* eslint-enable */
