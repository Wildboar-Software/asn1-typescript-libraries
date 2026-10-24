/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    NULL,
    type VisibleString,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ClcwPhysicalChannel
 * @description
 * 
 * RF return channel that carries the CLCW used for forward-link RF and bit-lock
 * status. `configured` is a visible string of 1 to 32 characters.
 * `notConfigured` means this service instance does not evaluate the CLCW. Set
 * by service management. CLTU also uses the channel to select the transfer-frame
 * version: TM, AOS, USLP fixed-length, or USLP variable-length.
 * 
 * CCSDS 912.1-B-5, table 3-11 (clcw-physical-channel). CCSDS 912.3-B-3, table
 * 3-11 and annex A2.5.
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
    const _decoded = _cached_decoder_for_ClcwPhysicalChannel(el);
    if ("configured" in _decoded) {
        if (_decoded.configured.length < 1 || _decoded.configured.length > 32) {
            throw new ASN1SizeError("ClcwPhysicalChannel.configured violates SIZE (1..32)");
        }
    }
    return _decoded;
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
