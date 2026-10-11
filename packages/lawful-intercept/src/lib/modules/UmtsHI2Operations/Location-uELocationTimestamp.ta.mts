/* eslint-disable */
import {
    NULL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { TimeStamp, _decode_TimeStamp, _encode_TimeStamp } from "../HI2Operations/TimeStamp.ta.mjs";
// export { TimeStamp, _decode_TimeStamp, _encode_TimeStamp } from "../HI2Operations/TimeStamp.ta.mjs";


/**
 * @summary Location_uELocationTimestamp
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Location-uELocationTimestamp ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type Location_uELocationTimestamp =
    { timestamp: TimeStamp } /* CHOICE_ALT_ROOT */
    | { timestampUnknown: NULL } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_Location_uELocationTimestamp: $.ASN1Decoder<Location_uELocationTimestamp> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Location_uELocationTimestamp
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Location_uELocationTimestamp (el: _Element): Location_uELocationTimestamp {
    if (!_cached_decoder_for_Location_uELocationTimestamp) { _cached_decoder_for_Location_uELocationTimestamp = $._decode_extensible_choice<Location_uELocationTimestamp>({
    "CONTEXT 0": [ "timestamp", $._decode_explicit<TimeStamp>(() => _decode_TimeStamp) ],
    "CONTEXT 1": [ "timestampUnknown", $._decode_implicit<NULL>(() => $._decodeNull) ]
}); }
    return _cached_decoder_for_Location_uELocationTimestamp(el);
}

let _cached_encoder_for_Location_uELocationTimestamp: $.ASN1Encoder<Location_uELocationTimestamp> | null = null;

/**
 * @summary Encodes a(n) Location_uELocationTimestamp into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Location_uELocationTimestamp, encoded as an ASN.1 Element.
 */
export
function _encode_Location_uELocationTimestamp (value: Location_uELocationTimestamp, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Location_uELocationTimestamp) { _cached_encoder_for_Location_uELocationTimestamp = $._encode_choice<Location_uELocationTimestamp>({
    "timestamp": $._encode_explicit(_TagClass.context, 0, () => _encode_TimeStamp, $.BER),
    "timestampUnknown": $._encode_implicit(_TagClass.context, 1, () => $._encodeNull, $.BER),
}, $.BER); }
    return _cached_encoder_for_Location_uELocationTimestamp(value, elGetter);
}


/* eslint-enable */
