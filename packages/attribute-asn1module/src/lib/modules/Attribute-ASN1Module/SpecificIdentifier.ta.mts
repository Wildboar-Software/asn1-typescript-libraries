/* eslint-disable */
import {
    INTEGER,
    OBJECT_IDENTIFIER,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "asn1-ts";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SpecificIdentifier
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SpecificIdentifier  ::=  CHOICE {oi   OBJECT IDENTIFIER,
 *                                int  INTEGER
 * }
 * ```
 */
export
type SpecificIdentifier =
    { oi: OBJECT_IDENTIFIER } /* CHOICE_ALT_ROOT */
    | { int: INTEGER } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_SpecificIdentifier: $.ASN1Decoder<SpecificIdentifier> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SpecificIdentifier
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SpecificIdentifier} The decoded data structure.
 */
export
function _decode_SpecificIdentifier (el: _Element) {
    if (!_cached_decoder_for_SpecificIdentifier) { _cached_decoder_for_SpecificIdentifier = $._decode_inextensible_choice<SpecificIdentifier>({
    "UNIVERSAL 6": [ "oi", $._decodeObjectIdentifier ],
    "UNIVERSAL 2": [ "int", $._decodeInteger ]
}); }
    return _cached_decoder_for_SpecificIdentifier(el);
}

let _cached_encoder_for_SpecificIdentifier: $.ASN1Encoder<SpecificIdentifier> | null = null;

/**
 * @summary Encodes a(n) SpecificIdentifier into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SpecificIdentifier, encoded as an ASN.1 Element.
 */
export
function _encode_SpecificIdentifier (value: SpecificIdentifier, elGetter: $.ASN1Encoder<SpecificIdentifier>) {
    if (!_cached_encoder_for_SpecificIdentifier) { _cached_encoder_for_SpecificIdentifier = $._encode_choice<SpecificIdentifier>({
    "oi": $._encodeObjectIdentifier,
    "int": $._encodeInteger,
}, $.BER); }
    return _cached_encoder_for_SpecificIdentifier(value, elGetter);
}


/* eslint-enable */
