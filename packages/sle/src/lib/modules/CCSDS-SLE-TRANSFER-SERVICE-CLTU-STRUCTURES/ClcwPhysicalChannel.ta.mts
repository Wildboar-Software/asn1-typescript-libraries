/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    NULL,
    VisibleString
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ClcwPhysicalChannel
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ClcwPhysicalChannel                     ::=    CHOICE
 * {  configured                       [0]   VisibleString (SIZE (1..32))
 * ,  notConfigured                    [1]   NULL
 * }
 * ```
 */
export
type ClcwPhysicalChannel =
    { configured: VisibleString } /* CHOICE_ALT_ROOT */
    | { notConfigured: NULL } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_ClcwPhysicalChannel: $.ASN1Decoder<ClcwPhysicalChannel> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ClcwPhysicalChannel
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ClcwPhysicalChannel (el: _Element): ClcwPhysicalChannel {
    if (!_cached_decoder_for_ClcwPhysicalChannel) { _cached_decoder_for_ClcwPhysicalChannel = $._decode_inextensible_choice<ClcwPhysicalChannel>({
    "CONTEXT 0": [ "configured", $._decode_implicit<VisibleString>(() => $._decodeVisibleString) ],
    "CONTEXT 1": [ "notConfigured", $._decode_implicit<NULL>(() => $._decodeNull) ]
}); }
    return _cached_decoder_for_ClcwPhysicalChannel(el);
}

let _cached_encoder_for_ClcwPhysicalChannel: $.ASN1Encoder<ClcwPhysicalChannel> | null = null;

/**
 * @summary Encodes a(n) ClcwPhysicalChannel into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ClcwPhysicalChannel, encoded as an ASN.1 Element.
 */
export
function _encode_ClcwPhysicalChannel (value: ClcwPhysicalChannel, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ClcwPhysicalChannel) { _cached_encoder_for_ClcwPhysicalChannel = $._encode_choice<ClcwPhysicalChannel>({
    "configured": $._encode_implicit(_TagClass.context, 0, () => $._encodeVisibleString, $.BER),
    "notConfigured": $._encode_implicit(_TagClass.context, 1, () => $._encodeNull, $.BER),
}, $.BER); }
    return _cached_encoder_for_ClcwPhysicalChannel(value, elGetter);
}


/* eslint-enable */
