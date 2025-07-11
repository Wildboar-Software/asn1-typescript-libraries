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
import {
    SubmissionControls,
    _decode_SubmissionControls,
    _encode_SubmissionControls,
} from '../MTSAbstractService/SubmissionControls.ta.mjs';
/**
 * @summary SubmissionControlArgument
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SubmissionControlArgument  ::=  SubmissionControls
 * ```
 */
export type SubmissionControlArgument = SubmissionControls; // DefinedType

let _cached_decoder_for_SubmissionControlArgument: $.ASN1Decoder<SubmissionControlArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SubmissionControlArgument
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SubmissionControlArgument} The decoded data structure.
 */
export function _decode_SubmissionControlArgument(el: _Element): SubmissionControlArgument {
    if (!_cached_decoder_for_SubmissionControlArgument) {
        _cached_decoder_for_SubmissionControlArgument = _decode_SubmissionControls;
    }
    return _cached_decoder_for_SubmissionControlArgument(el);
}

let _cached_encoder_for_SubmissionControlArgument: $.ASN1Encoder<SubmissionControlArgument> | null = null;

/**
 * @summary Encodes a(n) SubmissionControlArgument into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SubmissionControlArgument, encoded as an ASN.1 Element.
 */
export function _encode_SubmissionControlArgument(
    value: SubmissionControlArgument,
    elGetter: $.ASN1Encoder<SubmissionControlArgument>
): _Element {
    if (!_cached_encoder_for_SubmissionControlArgument) {
        _cached_encoder_for_SubmissionControlArgument = _encode_SubmissionControls;
    }
    return _cached_encoder_for_SubmissionControlArgument(value, elGetter);
}


/* eslint-enable */
