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
 * @summary DimensionParamValues_bound
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DimensionParamValues-bound ::= CHOICE { unbounded NULL, limit INTEGER }
 * ```
 */
export
type DimensionParamValues_bound =
    { unbounded: NULL } /* CHOICE_ALT_ROOT */
    | { limit: INTEGER } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_DimensionParamValues_bound: $.ASN1Decoder<DimensionParamValues_bound> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DimensionParamValues_bound
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DimensionParamValues_bound (el: _Element): DimensionParamValues_bound {
    if (!_cached_decoder_for_DimensionParamValues_bound) { _cached_decoder_for_DimensionParamValues_bound = $._decode_inextensible_choice<DimensionParamValues_bound>({
    "UNIVERSAL 5": [ "unbounded", $._decodeNull ],
    "UNIVERSAL 2": [ "limit", $._decodeInteger ]
}); }
    return _cached_decoder_for_DimensionParamValues_bound(el);
}

let _cached_encoder_for_DimensionParamValues_bound: $.ASN1Encoder<DimensionParamValues_bound> | null = null;

/**
 * @summary Encodes a(n) DimensionParamValues_bound into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DimensionParamValues_bound, encoded as an ASN.1 Element.
 */
export
function _encode_DimensionParamValues_bound (value: DimensionParamValues_bound, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DimensionParamValues_bound) { _cached_encoder_for_DimensionParamValues_bound = $._encode_choice<DimensionParamValues_bound>({
    "unbounded": $._encodeNull,
    "limit": $._encodeInteger,
}, $.BER); }
    return _cached_encoder_for_DimensionParamValues_bound(value, elGetter);
}


/* eslint-enable */
