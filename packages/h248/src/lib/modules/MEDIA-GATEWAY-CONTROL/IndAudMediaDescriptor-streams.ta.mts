/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { IndAudStreamParms, _decode_IndAudStreamParms, _encode_IndAudStreamParms } from "../MEDIA-GATEWAY-CONTROL/IndAudStreamParms.ta.mjs";
// export { IndAudStreamParms, _decode_IndAudStreamParms, _encode_IndAudStreamParms } from "../MEDIA-GATEWAY-CONTROL/IndAudStreamParms.ta.mjs";
import { IndAudStreamDescriptor, _decode_IndAudStreamDescriptor, _encode_IndAudStreamDescriptor } from "../MEDIA-GATEWAY-CONTROL/IndAudStreamDescriptor.ta.mjs";
// export { IndAudStreamDescriptor, _decode_IndAudStreamDescriptor, _encode_IndAudStreamDescriptor } from "../MEDIA-GATEWAY-CONTROL/IndAudStreamDescriptor.ta.mjs";


/**
 * @summary IndAudMediaDescriptor_streams
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IndAudMediaDescriptor-streams ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type IndAudMediaDescriptor_streams =
    { oneStream: IndAudStreamParms } /* CHOICE_ALT_ROOT */
    | { multiStream: IndAudStreamDescriptor[] } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_IndAudMediaDescriptor_streams: $.ASN1Decoder<IndAudMediaDescriptor_streams> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IndAudMediaDescriptor_streams
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IndAudMediaDescriptor_streams (el: _Element): IndAudMediaDescriptor_streams {
    if (!_cached_decoder_for_IndAudMediaDescriptor_streams) { _cached_decoder_for_IndAudMediaDescriptor_streams = $._decode_inextensible_choice<IndAudMediaDescriptor_streams>({
    "CONTEXT 0": [ "oneStream", $._decode_implicit<IndAudStreamParms>(() => _decode_IndAudStreamParms) ],
    "CONTEXT 1": [ "multiStream", $._decode_implicit<IndAudStreamDescriptor[]>(() => $._decodeSequenceOf<IndAudStreamDescriptor>(() => _decode_IndAudStreamDescriptor)) ]
}); }
    return _cached_decoder_for_IndAudMediaDescriptor_streams(el);
}

let _cached_encoder_for_IndAudMediaDescriptor_streams: $.ASN1Encoder<IndAudMediaDescriptor_streams> | null = null;

/**
 * @summary Encodes a(n) IndAudMediaDescriptor_streams into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IndAudMediaDescriptor_streams, encoded as an ASN.1 Element.
 */
export
function _encode_IndAudMediaDescriptor_streams (value: IndAudMediaDescriptor_streams, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IndAudMediaDescriptor_streams) { _cached_encoder_for_IndAudMediaDescriptor_streams = $._encode_choice<IndAudMediaDescriptor_streams>({
    "oneStream": $._encode_implicit(_TagClass.context, 0, () => _encode_IndAudStreamParms, $.BER),
    "multiStream": $._encode_implicit(_TagClass.context, 1, () => $._encodeSequenceOf<IndAudStreamDescriptor>(() => _encode_IndAudStreamDescriptor, $.BER), $.BER),
}, $.BER); }
    return _cached_encoder_for_IndAudMediaDescriptor_streams(value, elGetter);
}


/* eslint-enable */
