/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    type IA5String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AlternativeIdentity
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AlternativeIdentity  ::=  CHOICE {
 *   url  [0]  IA5String(SIZE (1..512)) --  any RFC1738 compliant URL (e.g.; SIP URL)
 * }
 * ```
 */
export
type AlternativeIdentity =
    { url: IA5String } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_AlternativeIdentity: $.ASN1Decoder<AlternativeIdentity> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AlternativeIdentity
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AlternativeIdentity (el: _Element): AlternativeIdentity {
    if (!_cached_decoder_for_AlternativeIdentity) { _cached_decoder_for_AlternativeIdentity = $._decode_inextensible_choice<AlternativeIdentity>({
    "CONTEXT 0": [ "url", $._decode_implicit<IA5String>(() => $._decodeIA5String) ]
}); }
    return _cached_decoder_for_AlternativeIdentity(el);
}

let _cached_encoder_for_AlternativeIdentity: $.ASN1Encoder<AlternativeIdentity> | null = null;

/**
 * @summary Encodes a(n) AlternativeIdentity into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AlternativeIdentity, encoded as an ASN.1 Element.
 */
export
function _encode_AlternativeIdentity (value: AlternativeIdentity, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AlternativeIdentity) { _cached_encoder_for_AlternativeIdentity = $._encode_choice<AlternativeIdentity>({
    "url": $._encode_implicit(_TagClass.context, 0, () => $._encodeIA5String, $.BER),
}, $.BER); }
    return _cached_encoder_for_AlternativeIdentity(value, elGetter);
}


/* eslint-enable */
