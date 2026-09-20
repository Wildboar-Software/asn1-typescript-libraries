/* eslint-disable */
import {
    INTEGER,
    NULL,
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
 * @summary DimensionParamValues_window
 * @description
 *
 * Selected `d-window` (update-window-size). `unbounded` or integer
 * `limit`. Constrains TEXT/REPEAT-TEXT/ATTRIBUTE/ERASE lower bound;
 * does not itself cap TEXT upper bound. ISO/IEC 9040:1997 §18.2.3,
 * §19.1.1.3.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DimensionParamValues-window ::= CHOICE { unbounded NULL, limit INTEGER }
 * ```
 */
export
type DimensionParamValues_window =
    { unbounded: NULL } /* CHOICE_ALT_ROOT */
    | { limit: INTEGER } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_DimensionParamValues_window: $.ASN1Decoder<DimensionParamValues_window> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DimensionParamValues_window
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DimensionParamValues_window (el: _Element): DimensionParamValues_window {
    if (!_cached_decoder_for_DimensionParamValues_window) { _cached_decoder_for_DimensionParamValues_window = $._decode_inextensible_choice<DimensionParamValues_window>({
    "UNIVERSAL 5": [ "unbounded", $._decodeNull ],
    "UNIVERSAL 2": [ "limit", $._decodeInteger ]
}); }
    return _cached_decoder_for_DimensionParamValues_window(el);
}

let _cached_encoder_for_DimensionParamValues_window: $.ASN1Encoder<DimensionParamValues_window> | null = null;

/**
 * @summary Encodes a(n) DimensionParamValues_window into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DimensionParamValues_window, encoded as an ASN.1 Element.
 */
export
function _encode_DimensionParamValues_window (value: DimensionParamValues_window, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DimensionParamValues_window) { _cached_encoder_for_DimensionParamValues_window = $._encode_choice<DimensionParamValues_window>({
    "unbounded": $._encodeNull,
    "limit": $._encodeInteger,
}, $.BER); }
    return _cached_encoder_for_DimensionParamValues_window(value, elGetter);
}


/* eslint-enable */
