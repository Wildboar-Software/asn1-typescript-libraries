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
    MTSIdentifier,
    _decode_MTSIdentifier,
    _encode_MTSIdentifier,
} from '../MTSAbstractService/MTSIdentifier.ta.mjs';
/**
 * @summary ProbeSubmissionIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ProbeSubmissionIdentifier  ::=  MTSIdentifier
 * ```
 */
export type ProbeSubmissionIdentifier = MTSIdentifier; // DefinedType

let _cached_decoder_for_ProbeSubmissionIdentifier: $.ASN1Decoder<ProbeSubmissionIdentifier> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ProbeSubmissionIdentifier
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ProbeSubmissionIdentifier} The decoded data structure.
 */
export function _decode_ProbeSubmissionIdentifier(el: _Element): ProbeSubmissionIdentifier {
    if (!_cached_decoder_for_ProbeSubmissionIdentifier) {
        _cached_decoder_for_ProbeSubmissionIdentifier = _decode_MTSIdentifier;
    }
    return _cached_decoder_for_ProbeSubmissionIdentifier(el);
}

let _cached_encoder_for_ProbeSubmissionIdentifier: $.ASN1Encoder<ProbeSubmissionIdentifier> | null = null;

/**
 * @summary Encodes a(n) ProbeSubmissionIdentifier into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ProbeSubmissionIdentifier, encoded as an ASN.1 Element.
 */
export function _encode_ProbeSubmissionIdentifier(
    value: ProbeSubmissionIdentifier,
    elGetter: $.ASN1Encoder<ProbeSubmissionIdentifier>
): _Element {
    if (!_cached_encoder_for_ProbeSubmissionIdentifier) {
        _cached_encoder_for_ProbeSubmissionIdentifier = _encode_MTSIdentifier;
    }
    return _cached_encoder_for_ProbeSubmissionIdentifier(value, elGetter);
}


/* eslint-enable */
