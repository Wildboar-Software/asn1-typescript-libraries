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
    ProcessingDetail,
    _decode_ProcessingDetail,
    _encode_ProcessingDetail,
} from '../MhsAcctAsn1Module/ProcessingDetail.ta.mjs';
/**
 * @summary ProcessingDetails
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ProcessingDetails  ::=  SEQUENCE OF ProcessingDetail
 * ```
 */
export type ProcessingDetails = ProcessingDetail[]; // SequenceOfType

let _cached_decoder_for_ProcessingDetails: $.ASN1Decoder<ProcessingDetails> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ProcessingDetails
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ProcessingDetails} The decoded data structure.
 */
export function _decode_ProcessingDetails(el: _Element) {
    if (!_cached_decoder_for_ProcessingDetails) {
        _cached_decoder_for_ProcessingDetails = $._decodeSequenceOf<ProcessingDetail>(
            () => _decode_ProcessingDetail
        );
    }
    return _cached_decoder_for_ProcessingDetails(el);
}

let _cached_encoder_for_ProcessingDetails: $.ASN1Encoder<ProcessingDetails> | null = null;

/**
 * @summary Encodes a(n) ProcessingDetails into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ProcessingDetails, encoded as an ASN.1 Element.
 */
export function _encode_ProcessingDetails(
    value: ProcessingDetails,
    elGetter: $.ASN1Encoder<ProcessingDetails>
) {
    if (!_cached_encoder_for_ProcessingDetails) {
        _cached_encoder_for_ProcessingDetails = $._encodeSequenceOf<ProcessingDetail>(
            () => _encode_ProcessingDetail,
            $.BER
        );
    }
    return _cached_encoder_for_ProcessingDetails(value, elGetter);
}


/* eslint-enable */
