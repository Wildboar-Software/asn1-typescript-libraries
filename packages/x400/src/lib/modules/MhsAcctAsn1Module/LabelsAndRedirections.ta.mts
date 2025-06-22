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
import * as $ from '@wildboar/asn1/functional';
import {
    LabelAndRedirection,
    _decode_LabelAndRedirection,
    _encode_LabelAndRedirection,
} from '../MTSAbstractService88/LabelAndRedirection.ta.mjs';
/**
 * @summary LabelsAndRedirections
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * LabelsAndRedirections  ::=
 *   SET SIZE (1..ub-labels-and-redirections) OF LabelAndRedirection
 * ```
 */
export type LabelsAndRedirections = LabelAndRedirection[]; // SetOfType

let _cached_decoder_for_LabelsAndRedirections: $.ASN1Decoder<LabelsAndRedirections> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LabelsAndRedirections
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {LabelsAndRedirections} The decoded data structure.
 */
export function _decode_LabelsAndRedirections(el: _Element) {
    if (!_cached_decoder_for_LabelsAndRedirections) {
        _cached_decoder_for_LabelsAndRedirections = $._decodeSetOf<LabelAndRedirection>(
            () => _decode_LabelAndRedirection
        );
    }
    return _cached_decoder_for_LabelsAndRedirections(el);
}

let _cached_encoder_for_LabelsAndRedirections: $.ASN1Encoder<LabelsAndRedirections> | null = null;

/**
 * @summary Encodes a(n) LabelsAndRedirections into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LabelsAndRedirections, encoded as an ASN.1 Element.
 */
export function _encode_LabelsAndRedirections(
    value: LabelsAndRedirections,
    elGetter: $.ASN1Encoder<LabelsAndRedirections>
) {
    if (!_cached_encoder_for_LabelsAndRedirections) {
        _cached_encoder_for_LabelsAndRedirections = $._encodeSetOf<LabelAndRedirection>(
            () => _encode_LabelAndRedirection,
            $.BER
        );
    }
    return _cached_encoder_for_LabelsAndRedirections(value, elGetter);
}


/* eslint-enable */
