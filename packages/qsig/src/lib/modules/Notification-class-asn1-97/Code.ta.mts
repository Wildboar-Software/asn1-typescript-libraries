/* eslint-disable */
import {
    ASN1Element as _Element,
    type INTEGER,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary Code
 * @description
 *
 * Identifier of a notification (ECMA-165 Annex B Table B.2, §11.3.4). `local`
 * is an integer assigned by ITU-T, used with the "discriminator for
 * notification extension", or an integer assigned by ISO, used with the
 * "discriminator for extension to ISO defined ASN.1 encoded notification data
 * structure". `global` is an object identifier. Manufacturer-specific
 * notifications use an object identifier (§9.3) and shall not use the
 * notification-description field except for the extension discriminator.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-165/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Code  ::=  CHOICE {
 *     local INTEGER,
 *     global OBJECT IDENTIFIER
 * }
 * ```
 */
export
type Code =
    { local: INTEGER } /* CHOICE_ALT_ROOT */
    | { global: OBJECT_IDENTIFIER } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_Code: $.ASN1Decoder<Code> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Code
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Code (el: _Element): Code {
    if (!_cached_decoder_for_Code) { _cached_decoder_for_Code = $._decode_inextensible_choice<Code>({
    "UNIVERSAL 2": [ "local", $._decodeInteger ],
    "UNIVERSAL 6": [ "global", $._decodeObjectIdentifier ]
}); }
    return _cached_decoder_for_Code(el);
}

let _cached_encoder_for_Code: $.ASN1Encoder<Code> | null = null;

/**
 * @summary Encodes a(n) Code into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Code, encoded as an ASN.1 Element.
 */
export
function _encode_Code (value: Code, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Code) { _cached_encoder_for_Code = $._encode_choice<Code>({
    "local": $._encodeInteger,
    "global": $._encodeObjectIdentifier,
}, $.BER); }
    return _cached_encoder_for_Code(value, elGetter);
}

/* eslint-enable */
