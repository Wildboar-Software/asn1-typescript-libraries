/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    INTEGER,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Identifier
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Identifier  ::=  CHOICE {local   INTEGER,
 *                        global  OBJECT IDENTIFIER
 * }
 * ```
 */
export
type Identifier =
    { local: INTEGER } /* CHOICE_ALT_ROOT */
    | { global: OBJECT_IDENTIFIER } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_Identifier: $.ASN1Decoder<Identifier> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Identifier
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Identifier (el: _Element): Identifier {
    if (!_cached_decoder_for_Identifier) { _cached_decoder_for_Identifier = $._decode_inextensible_choice<Identifier>({
    "CONTEXT 0": [ "local", $._decodeInteger ],
    "CONTEXT 1": [ "global", $._decodeObjectIdentifier ]
}); }
    return _cached_decoder_for_Identifier(el);
}

let _cached_encoder_for_Identifier: $.ASN1Encoder<Identifier> | null = null;

/**
 * @summary Encodes a(n) Identifier into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Identifier, encoded as an ASN.1 Element.
 */
export
function _encode_Identifier (value: Identifier, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Identifier) { _cached_encoder_for_Identifier = $._encode_choice<Identifier>({
    "local": $._encode_implicit(_TagClass.context, 0, () => $._encodeInteger, $.BER),
    "global": $._encode_implicit(_TagClass.context, 1, () => $._encodeObjectIdentifier, $.BER),
}, $.BER); }
    return _cached_encoder_for_Identifier(value, elGetter);
}


/* eslint-enable */
