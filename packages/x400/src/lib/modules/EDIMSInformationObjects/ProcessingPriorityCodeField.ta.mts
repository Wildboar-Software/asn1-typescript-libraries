/* eslint-disable */
import {
    TeletexString,
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

/**
 * @summary ProcessingPriorityCodeField
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ProcessingPriorityCodeField  ::=
 *   TeletexString(SIZE (1..ub-processing-priority-code))
 * ```
 */
export type ProcessingPriorityCodeField = TeletexString; // TeletexString

let _cached_decoder_for_ProcessingPriorityCodeField: $.ASN1Decoder<ProcessingPriorityCodeField> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ProcessingPriorityCodeField
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ProcessingPriorityCodeField} The decoded data structure.
 */
export function _decode_ProcessingPriorityCodeField(el: _Element) {
    if (!_cached_decoder_for_ProcessingPriorityCodeField) {
        _cached_decoder_for_ProcessingPriorityCodeField =
            $._decodeTeletexString;
    }
    return _cached_decoder_for_ProcessingPriorityCodeField(el);
}

let _cached_encoder_for_ProcessingPriorityCodeField: $.ASN1Encoder<ProcessingPriorityCodeField> | null = null;

/**
 * @summary Encodes a(n) ProcessingPriorityCodeField into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ProcessingPriorityCodeField, encoded as an ASN.1 Element.
 */
export function _encode_ProcessingPriorityCodeField(
    value: ProcessingPriorityCodeField,
    elGetter: $.ASN1Encoder<ProcessingPriorityCodeField>
) {
    if (!_cached_encoder_for_ProcessingPriorityCodeField) {
        _cached_encoder_for_ProcessingPriorityCodeField =
            $._encodeTeletexString;
    }
    return _cached_encoder_for_ProcessingPriorityCodeField(value, elGetter);
}


/* eslint-enable */
