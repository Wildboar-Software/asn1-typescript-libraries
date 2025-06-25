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
    Waiting,
    _decode_Waiting,
    _encode_Waiting,
} from '../MTSAbstractService/Waiting.ta.mjs';
/**
 * @summary SubmissionControlResult
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SubmissionControlResult  ::=  Waiting
 * ```
 */
export type SubmissionControlResult = Waiting; // DefinedType

let _cached_decoder_for_SubmissionControlResult: $.ASN1Decoder<SubmissionControlResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SubmissionControlResult
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SubmissionControlResult} The decoded data structure.
 */
export function _decode_SubmissionControlResult(el: _Element): SubmissionControlResult {
    if (!_cached_decoder_for_SubmissionControlResult) {
        _cached_decoder_for_SubmissionControlResult = _decode_Waiting;
    }
    return _cached_decoder_for_SubmissionControlResult(el);
}

let _cached_encoder_for_SubmissionControlResult: $.ASN1Encoder<SubmissionControlResult> | null = null;

/**
 * @summary Encodes a(n) SubmissionControlResult into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SubmissionControlResult, encoded as an ASN.1 Element.
 */
export function _encode_SubmissionControlResult(
    value: SubmissionControlResult,
    elGetter: $.ASN1Encoder<SubmissionControlResult>
): _Element {
    if (!_cached_encoder_for_SubmissionControlResult) {
        _cached_encoder_for_SubmissionControlResult = _encode_Waiting;
    }
    return _cached_encoder_for_SubmissionControlResult(value, elGetter);
}


/* eslint-enable */
