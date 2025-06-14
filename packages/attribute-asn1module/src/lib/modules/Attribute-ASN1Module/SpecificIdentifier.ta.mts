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
import * as $ from "asn1-ts/dist/functional.mjs";



/* START_OF_SYMBOL_DEFINITION SpecificIdentifier */
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
/* END_OF_SYMBOL_DEFINITION SpecificIdentifier */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SpecificIdentifier */
let _cached_decoder_for_SpecificIdentifier: $.ASN1Decoder<SpecificIdentifier> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SpecificIdentifier */

/* START_OF_SYMBOL_DEFINITION _decode_SpecificIdentifier */
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
/* END_OF_SYMBOL_DEFINITION _decode_SpecificIdentifier */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SpecificIdentifier */
let _cached_encoder_for_SpecificIdentifier: $.ASN1Encoder<SpecificIdentifier> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SpecificIdentifier */

/* START_OF_SYMBOL_DEFINITION _encode_SpecificIdentifier */
/**
 * @summary Encodes a(n) SpecificIdentifier into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
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

/* END_OF_SYMBOL_DEFINITION _encode_SpecificIdentifier */

/* eslint-enable */
