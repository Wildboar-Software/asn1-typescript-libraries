/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    NULL
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SelectLogic
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SelectLogic  ::=  CHOICE
 *     {
 *         andAUDITSelect            [0] NULL, -- all filter conditions satisfied
 *         orAUDITSelect            [1] NULL, -- at least one filter condition satisfied
 *         ...
 *     }
 * ```
 */
export
type SelectLogic =
    { andAUDITSelect: NULL } /* CHOICE_ALT_ROOT */
    | { orAUDITSelect: NULL } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_SelectLogic: $.ASN1Decoder<SelectLogic> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SelectLogic
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SelectLogic (el: _Element): SelectLogic {
    if (!_cached_decoder_for_SelectLogic) { _cached_decoder_for_SelectLogic = $._decode_extensible_choice<SelectLogic>({
    "CONTEXT 0": [ "andAUDITSelect", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 1": [ "orAUDITSelect", $._decode_implicit<NULL>(() => $._decodeNull) ]
}); }
    return _cached_decoder_for_SelectLogic(el);
}

let _cached_encoder_for_SelectLogic: $.ASN1Encoder<SelectLogic> | null = null;

/**
 * @summary Encodes a(n) SelectLogic into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SelectLogic, encoded as an ASN.1 Element.
 */
export
function _encode_SelectLogic (value: SelectLogic, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SelectLogic) { _cached_encoder_for_SelectLogic = $._encode_choice<SelectLogic>({
    "andAUDITSelect": $._encode_implicit(_TagClass.context, 0, () => $._encodeNull, $.BER),
    "orAUDITSelect": $._encode_implicit(_TagClass.context, 1, () => $._encodeNull, $.BER),
}, $.BER); }
    return _cached_encoder_for_SelectLogic(value, elGetter);
}


/* eslint-enable */
