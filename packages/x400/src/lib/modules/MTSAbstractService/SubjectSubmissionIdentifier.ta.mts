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
    MTSIdentifier,
    _decode_MTSIdentifier,
    _encode_MTSIdentifier,
} from '../MTSAbstractService/MTSIdentifier.ta.mjs';
/**
 * @summary SubjectSubmissionIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SubjectSubmissionIdentifier  ::=  MTSIdentifier
 * ```
 */
export type SubjectSubmissionIdentifier = MTSIdentifier; // DefinedType

let _cached_decoder_for_SubjectSubmissionIdentifier: $.ASN1Decoder<SubjectSubmissionIdentifier> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SubjectSubmissionIdentifier
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SubjectSubmissionIdentifier} The decoded data structure.
 */
export function _decode_SubjectSubmissionIdentifier(el: _Element) {
    if (!_cached_decoder_for_SubjectSubmissionIdentifier) {
        _cached_decoder_for_SubjectSubmissionIdentifier = _decode_MTSIdentifier;
    }
    return _cached_decoder_for_SubjectSubmissionIdentifier(el);
}

let _cached_encoder_for_SubjectSubmissionIdentifier: $.ASN1Encoder<SubjectSubmissionIdentifier> | null = null;

/**
 * @summary Encodes a(n) SubjectSubmissionIdentifier into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SubjectSubmissionIdentifier, encoded as an ASN.1 Element.
 */
export function _encode_SubjectSubmissionIdentifier(
    value: SubjectSubmissionIdentifier,
    elGetter: $.ASN1Encoder<SubjectSubmissionIdentifier>
) {
    if (!_cached_encoder_for_SubjectSubmissionIdentifier) {
        _cached_encoder_for_SubjectSubmissionIdentifier = _encode_MTSIdentifier;
    }
    return _cached_encoder_for_SubjectSubmissionIdentifier(value, elGetter);
}


/* eslint-enable */
