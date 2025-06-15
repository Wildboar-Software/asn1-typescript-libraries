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
    ProbeSubmissionEnvelope,
    _decode_ProbeSubmissionEnvelope,
    _encode_ProbeSubmissionEnvelope,
} from '../MTSAbstractService/ProbeSubmissionEnvelope.ta.mjs';
/**
 * @summary ProbeSubmissionArgument
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ProbeSubmissionArgument  ::=  ProbeSubmissionEnvelope
 * ```
 */
export type ProbeSubmissionArgument = ProbeSubmissionEnvelope; // DefinedType

let _cached_decoder_for_ProbeSubmissionArgument: $.ASN1Decoder<ProbeSubmissionArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ProbeSubmissionArgument
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ProbeSubmissionArgument} The decoded data structure.
 */
export function _decode_ProbeSubmissionArgument(el: _Element) {
    if (!_cached_decoder_for_ProbeSubmissionArgument) {
        _cached_decoder_for_ProbeSubmissionArgument = _decode_ProbeSubmissionEnvelope;
    }
    return _cached_decoder_for_ProbeSubmissionArgument(el);
}

let _cached_encoder_for_ProbeSubmissionArgument: $.ASN1Encoder<ProbeSubmissionArgument> | null = null;

/**
 * @summary Encodes a(n) ProbeSubmissionArgument into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ProbeSubmissionArgument, encoded as an ASN.1 Element.
 */
export function _encode_ProbeSubmissionArgument(
    value: ProbeSubmissionArgument,
    elGetter: $.ASN1Encoder<ProbeSubmissionArgument>
) {
    if (!_cached_encoder_for_ProbeSubmissionArgument) {
        _cached_encoder_for_ProbeSubmissionArgument = _encode_ProbeSubmissionEnvelope;
    }
    return _cached_encoder_for_ProbeSubmissionArgument(value, elGetter);
}


/* eslint-enable */
