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
    MessageDeliveryErrors,
    _decode_MessageDeliveryErrors,
    _encode_MessageDeliveryErrors,
} from '../MhsAcctAsn1Module/MessageDeliveryErrors.ta.mjs';
/**
 * @summary ReportDeliveryErrors
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ReportDeliveryErrors  ::=  MessageDeliveryErrors
 * ```
 */
export type ReportDeliveryErrors = MessageDeliveryErrors; // DefinedType

let _cached_decoder_for_ReportDeliveryErrors: $.ASN1Decoder<ReportDeliveryErrors> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ReportDeliveryErrors
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ReportDeliveryErrors} The decoded data structure.
 */
export function _decode_ReportDeliveryErrors(el: _Element) {
    if (!_cached_decoder_for_ReportDeliveryErrors) {
        _cached_decoder_for_ReportDeliveryErrors = _decode_MessageDeliveryErrors;
    }
    return _cached_decoder_for_ReportDeliveryErrors(el);
}

let _cached_encoder_for_ReportDeliveryErrors: $.ASN1Encoder<ReportDeliveryErrors> | null = null;

/**
 * @summary Encodes a(n) ReportDeliveryErrors into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReportDeliveryErrors, encoded as an ASN.1 Element.
 */
export function _encode_ReportDeliveryErrors(
    value: ReportDeliveryErrors,
    elGetter: $.ASN1Encoder<ReportDeliveryErrors>
) {
    if (!_cached_encoder_for_ReportDeliveryErrors) {
        _cached_encoder_for_ReportDeliveryErrors = _encode_MessageDeliveryErrors;
    }
    return _cached_encoder_for_ReportDeliveryErrors(value, elGetter);
}


/* eslint-enable */
