/* eslint-disable */
import {
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
import { SpecificIdentifier, _decode_SpecificIdentifier, _encode_SpecificIdentifier } from "../Attribute-ASN1Module/SpecificIdentifier.ta.mjs";
/* START_OF_SYMBOL_DEFINITION SpecificProblems */
/**
 * @summary SpecificProblems
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SpecificProblems  ::=  SET OF SpecificIdentifier
 * ```
 */
export
type SpecificProblems = SpecificIdentifier[]; // SetOfType
/* END_OF_SYMBOL_DEFINITION SpecificProblems */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SpecificProblems */
let _cached_decoder_for_SpecificProblems: $.ASN1Decoder<SpecificProblems> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SpecificProblems */

/* START_OF_SYMBOL_DEFINITION _decode_SpecificProblems */
/**
 * @summary Decodes an ASN.1 element into a(n) SpecificProblems
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SpecificProblems} The decoded data structure.
 */
export
function _decode_SpecificProblems (el: _Element) {
    if (!_cached_decoder_for_SpecificProblems) { _cached_decoder_for_SpecificProblems = $._decodeSetOf<SpecificIdentifier>(() => _decode_SpecificIdentifier); }
    return _cached_decoder_for_SpecificProblems(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SpecificProblems */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SpecificProblems */
let _cached_encoder_for_SpecificProblems: $.ASN1Encoder<SpecificProblems> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SpecificProblems */

/* START_OF_SYMBOL_DEFINITION _encode_SpecificProblems */
/**
 * @summary Encodes a(n) SpecificProblems into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SpecificProblems, encoded as an ASN.1 Element.
 */
export
function _encode_SpecificProblems (value: SpecificProblems, elGetter: $.ASN1Encoder<SpecificProblems>) {
    if (!_cached_encoder_for_SpecificProblems) { _cached_encoder_for_SpecificProblems = $._encodeSetOf<SpecificIdentifier>(() => _encode_SpecificIdentifier, $.BER); }
    return _cached_encoder_for_SpecificProblems(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SpecificProblems */

/* eslint-enable */
