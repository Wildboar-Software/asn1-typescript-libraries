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
    ROS_SingleAS,
    _decode_ROS_SingleAS,
    _encode_ROS_SingleAS,
} from '@wildboar/rose/src/lib/modules/Remote-Operations-Useful-Definitions/ROS-SingleAS.ta.mjs';
/**
 * @summary MSMessageSubmissionPDUs
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MSMessageSubmissionPDUs  ::=  ROS-SingleAS{{MSInvokeIds}, ms-submission}
 * ```
 */
export type MSMessageSubmissionPDUs = ROS_SingleAS; // DefinedType

let _cached_decoder_for_MSMessageSubmissionPDUs: $.ASN1Decoder<MSMessageSubmissionPDUs> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MSMessageSubmissionPDUs
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MSMessageSubmissionPDUs} The decoded data structure.
 */
export function _decode_MSMessageSubmissionPDUs(el: _Element) {
    if (!_cached_decoder_for_MSMessageSubmissionPDUs) {
        _cached_decoder_for_MSMessageSubmissionPDUs = _decode_ROS_SingleAS;
    }
    return _cached_decoder_for_MSMessageSubmissionPDUs(el);
}

let _cached_encoder_for_MSMessageSubmissionPDUs: $.ASN1Encoder<MSMessageSubmissionPDUs> | null = null;

/**
 * @summary Encodes a(n) MSMessageSubmissionPDUs into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MSMessageSubmissionPDUs, encoded as an ASN.1 Element.
 */
export function _encode_MSMessageSubmissionPDUs(
    value: MSMessageSubmissionPDUs,
    elGetter: $.ASN1Encoder<MSMessageSubmissionPDUs>
) {
    if (!_cached_encoder_for_MSMessageSubmissionPDUs) {
        _cached_encoder_for_MSMessageSubmissionPDUs = _encode_ROS_SingleAS;
    }
    return _cached_encoder_for_MSMessageSubmissionPDUs(value, elGetter);
}


/* eslint-enable */
