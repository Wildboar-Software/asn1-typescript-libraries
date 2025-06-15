/* eslint-disable */
import { ASN1Element as _Element, INTEGER, OBJECT_IDENTIFIER } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/**
 * @summary Code
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Code  ::=  CHOICE {
 *   local   INTEGER,
 *   global  OBJECT IDENTIFIER,
 *   ... }
 * ```
 */
export type Code =
    | { local: INTEGER } /* CHOICE_ALT_ROOT */
    | { global: OBJECT_IDENTIFIER } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_Code: $.ASN1Decoder<Code> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Code
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Code} The decoded data structure.
 */
export function _decode_Code(el: _Element) {
    if (!_cached_decoder_for_Code) {
        _cached_decoder_for_Code = $._decode_extensible_choice<Code>({
            "UNIVERSAL 2": ["local", $._decodeInteger],
            "UNIVERSAL 6": ["global", $._decodeObjectIdentifier],
        });
    }
    return _cached_decoder_for_Code(el);
}

let _cached_encoder_for_Code: $.ASN1Encoder<Code> | null = null;

/**
 * @summary Encodes a(n) Code into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Code, encoded as an ASN.1 Element.
 */
export function _encode_Code(value: Code, elGetter: $.ASN1Encoder<Code>) {
    if (!_cached_encoder_for_Code) {
        _cached_encoder_for_Code = $._encode_choice<Code>(
            {
                local: $._encodeInteger,
                global: $._encodeObjectIdentifier,
            },
            $.DER
        );
    }
    return _cached_encoder_for_Code(value, elGetter);
}


/* eslint-enable */
