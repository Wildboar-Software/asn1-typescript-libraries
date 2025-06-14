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
    MTSIdentifier,
    _decode_MTSIdentifier,
    _encode_MTSIdentifier,
} from '../MTSAbstractService/MTSIdentifier.ta.mjs';
/* START_OF_SYMBOL_DEFINITION ProbeSubmissionIdentifier */
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
/* END_OF_SYMBOL_DEFINITION ProbeSubmissionIdentifier */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ProbeSubmissionIdentifier */
let _cached_decoder_for_ProbeSubmissionIdentifier: $.ASN1Decoder<ProbeSubmissionIdentifier> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ProbeSubmissionIdentifier */

/* START_OF_SYMBOL_DEFINITION _decode_ProbeSubmissionIdentifier */
/**
 * @summary Decodes an ASN.1 element into a(n) ProbeSubmissionIdentifier
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ProbeSubmissionIdentifier} The decoded data structure.
 */
export function _decode_ProbeSubmissionIdentifier(el: _Element) {
    if (!_cached_decoder_for_ProbeSubmissionIdentifier) {
        _cached_decoder_for_ProbeSubmissionIdentifier = _decode_MTSIdentifier;
    }
    return _cached_decoder_for_ProbeSubmissionIdentifier(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ProbeSubmissionIdentifier */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ProbeSubmissionIdentifier */
let _cached_encoder_for_ProbeSubmissionIdentifier: $.ASN1Encoder<ProbeSubmissionIdentifier> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ProbeSubmissionIdentifier */

/* START_OF_SYMBOL_DEFINITION _encode_ProbeSubmissionIdentifier */
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
) {
    if (!_cached_encoder_for_ProbeSubmissionIdentifier) {
        _cached_encoder_for_ProbeSubmissionIdentifier = _encode_MTSIdentifier;
    }
    return _cached_encoder_for_ProbeSubmissionIdentifier(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ProbeSubmissionIdentifier */

/* eslint-enable */
