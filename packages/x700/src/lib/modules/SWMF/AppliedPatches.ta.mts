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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
import { Patch, _decode_Patch, _encode_Patch } from '../SWMF/Patch.ta.mjs';
/**
 * @summary AppliedPatches
 * @description
 *
 * Syntax of the `appliedPatches` attribute: patches that have been
 * applied and still exist in the softwareUnit. Read-only;
 * automatically updated when a patch is applied or reverted. ITU-T
 * Rec. X.744 (10/96)
 * [§8.2.1](https://www.itu.int/rec/T-REC-X.744-199610-I),
 * A.3.1.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AppliedPatches  ::=  SEQUENCE OF Patch
 * ```
 */
export type AppliedPatches = Patch[]; // SequenceOfType

let _cached_decoder_for_AppliedPatches: $.ASN1Decoder<AppliedPatches> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AppliedPatches
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AppliedPatches} The decoded data structure.
 */
export function _decode_AppliedPatches(el: _Element): AppliedPatches {
    if (!_cached_decoder_for_AppliedPatches) {
        _cached_decoder_for_AppliedPatches = $._decodeSequenceOf<Patch>(
            () => _decode_Patch
        );
    }
    return _cached_decoder_for_AppliedPatches(el);
}

let _cached_encoder_for_AppliedPatches: $.ASN1Encoder<AppliedPatches> | null = null;

/**
 * @summary Encodes a(n) AppliedPatches into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AppliedPatches, encoded as an ASN.1 Element.
 */
export function _encode_AppliedPatches(
    value: AppliedPatches,
    elGetter: $.ASN1Encoder<AppliedPatches>
): _Element {
    if (!_cached_encoder_for_AppliedPatches) {
        _cached_encoder_for_AppliedPatches = $._encodeSequenceOf<Patch>(
            () => _encode_Patch,
            $.BER
        );
    }
    return _cached_encoder_for_AppliedPatches(value, elGetter);
}


/* eslint-enable */
