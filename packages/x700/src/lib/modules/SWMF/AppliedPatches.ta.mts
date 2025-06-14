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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';
import { Patch, _decode_Patch, _encode_Patch } from '../SWMF/Patch.ta.mjs';
/* START_OF_SYMBOL_DEFINITION AppliedPatches */
/**
 * @summary AppliedPatches
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AppliedPatches  ::=  SEQUENCE OF Patch
 * ```
 */
export type AppliedPatches = Patch[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION AppliedPatches */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AppliedPatches */
let _cached_decoder_for_AppliedPatches: $.ASN1Decoder<AppliedPatches> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AppliedPatches */

/* START_OF_SYMBOL_DEFINITION _decode_AppliedPatches */
/**
 * @summary Decodes an ASN.1 element into a(n) AppliedPatches
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AppliedPatches} The decoded data structure.
 */
export function _decode_AppliedPatches(el: _Element) {
    if (!_cached_decoder_for_AppliedPatches) {
        _cached_decoder_for_AppliedPatches = $._decodeSequenceOf<Patch>(
            () => _decode_Patch
        );
    }
    return _cached_decoder_for_AppliedPatches(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AppliedPatches */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AppliedPatches */
let _cached_encoder_for_AppliedPatches: $.ASN1Encoder<AppliedPatches> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AppliedPatches */

/* START_OF_SYMBOL_DEFINITION _encode_AppliedPatches */
/**
 * @summary Encodes a(n) AppliedPatches into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AppliedPatches, encoded as an ASN.1 Element.
 */
export function _encode_AppliedPatches(
    value: AppliedPatches,
    elGetter: $.ASN1Encoder<AppliedPatches>
) {
    if (!_cached_encoder_for_AppliedPatches) {
        _cached_encoder_for_AppliedPatches = $._encodeSequenceOf<Patch>(
            () => _encode_Patch,
            $.BER
        );
    }
    return _cached_encoder_for_AppliedPatches(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AppliedPatches */

/* eslint-enable */
