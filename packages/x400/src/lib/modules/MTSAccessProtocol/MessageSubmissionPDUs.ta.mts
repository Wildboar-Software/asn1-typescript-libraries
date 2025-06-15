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
 * @summary MessageSubmissionPDUs
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MessageSubmissionPDUs  ::=  ROS-SingleAS{{MTSInvokeIds}, submission}
 * ```
 */
export type MessageSubmissionPDUs = ROS_SingleAS; // DefinedType

let _cached_decoder_for_MessageSubmissionPDUs: $.ASN1Decoder<MessageSubmissionPDUs> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MessageSubmissionPDUs
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MessageSubmissionPDUs} The decoded data structure.
 */
export function _decode_MessageSubmissionPDUs(el: _Element) {
    if (!_cached_decoder_for_MessageSubmissionPDUs) {
        _cached_decoder_for_MessageSubmissionPDUs = _decode_ROS_SingleAS;
    }
    return _cached_decoder_for_MessageSubmissionPDUs(el);
}

let _cached_encoder_for_MessageSubmissionPDUs: $.ASN1Encoder<MessageSubmissionPDUs> | null = null;

/**
 * @summary Encodes a(n) MessageSubmissionPDUs into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MessageSubmissionPDUs, encoded as an ASN.1 Element.
 */
export function _encode_MessageSubmissionPDUs(
    value: MessageSubmissionPDUs,
    elGetter: $.ASN1Encoder<MessageSubmissionPDUs>
) {
    if (!_cached_encoder_for_MessageSubmissionPDUs) {
        _cached_encoder_for_MessageSubmissionPDUs = _encode_ROS_SingleAS;
    }
    return _cached_encoder_for_MessageSubmissionPDUs(value, elGetter);
}


/* eslint-enable */
