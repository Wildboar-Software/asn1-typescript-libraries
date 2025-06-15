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
import {
    ManualHandlingInstruction,
    _decode_ManualHandlingInstruction,
    _encode_ManualHandlingInstruction,
} from '../IPMSHeadingExtensions/ManualHandlingInstruction.ta.mjs';
/**
 * @summary ManualHandlingInstructions
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ManualHandlingInstructions  ::=
 *   SEQUENCE (SIZE (1..ub-manual-handling-instructions)) OF
 *     ManualHandlingInstruction
 * ```
 */
export type ManualHandlingInstructions = ManualHandlingInstruction[]; // SequenceOfType

let _cached_decoder_for_ManualHandlingInstructions: $.ASN1Decoder<ManualHandlingInstructions> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ManualHandlingInstructions
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ManualHandlingInstructions} The decoded data structure.
 */
export function _decode_ManualHandlingInstructions(el: _Element) {
    if (!_cached_decoder_for_ManualHandlingInstructions) {
        _cached_decoder_for_ManualHandlingInstructions = $._decodeSequenceOf<ManualHandlingInstruction>(
            () => _decode_ManualHandlingInstruction
        );
    }
    return _cached_decoder_for_ManualHandlingInstructions(el);
}

let _cached_encoder_for_ManualHandlingInstructions: $.ASN1Encoder<ManualHandlingInstructions> | null = null;

/**
 * @summary Encodes a(n) ManualHandlingInstructions into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ManualHandlingInstructions, encoded as an ASN.1 Element.
 */
export function _encode_ManualHandlingInstructions(
    value: ManualHandlingInstructions,
    elGetter: $.ASN1Encoder<ManualHandlingInstructions>
) {
    if (!_cached_encoder_for_ManualHandlingInstructions) {
        _cached_encoder_for_ManualHandlingInstructions = $._encodeSequenceOf<ManualHandlingInstruction>(
            () => _encode_ManualHandlingInstruction,
            $.BER
        );
    }
    return _cached_encoder_for_ManualHandlingInstructions(value, elGetter);
}


/* eslint-enable */
