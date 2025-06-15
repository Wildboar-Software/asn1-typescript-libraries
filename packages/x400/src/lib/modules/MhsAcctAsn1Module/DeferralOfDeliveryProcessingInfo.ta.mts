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
    DeferredDeliveryTime,
    _decode_DeferredDeliveryTime,
    _encode_DeferredDeliveryTime,
} from '../MTSAbstractService/DeferredDeliveryTime.ta.mjs';
/**
 * @summary DeferralOfDeliveryProcessingInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DeferralOfDeliveryProcessingInfo  ::=  DeferredDeliveryTime
 * ```
 */
export type DeferralOfDeliveryProcessingInfo = DeferredDeliveryTime; // DefinedType

let _cached_decoder_for_DeferralOfDeliveryProcessingInfo: $.ASN1Decoder<DeferralOfDeliveryProcessingInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DeferralOfDeliveryProcessingInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DeferralOfDeliveryProcessingInfo} The decoded data structure.
 */
export function _decode_DeferralOfDeliveryProcessingInfo(el: _Element) {
    if (!_cached_decoder_for_DeferralOfDeliveryProcessingInfo) {
        _cached_decoder_for_DeferralOfDeliveryProcessingInfo = _decode_DeferredDeliveryTime;
    }
    return _cached_decoder_for_DeferralOfDeliveryProcessingInfo(el);
}

let _cached_encoder_for_DeferralOfDeliveryProcessingInfo: $.ASN1Encoder<DeferralOfDeliveryProcessingInfo> | null = null;

/**
 * @summary Encodes a(n) DeferralOfDeliveryProcessingInfo into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DeferralOfDeliveryProcessingInfo, encoded as an ASN.1 Element.
 */
export function _encode_DeferralOfDeliveryProcessingInfo(
    value: DeferralOfDeliveryProcessingInfo,
    elGetter: $.ASN1Encoder<DeferralOfDeliveryProcessingInfo>
) {
    if (!_cached_encoder_for_DeferralOfDeliveryProcessingInfo) {
        _cached_encoder_for_DeferralOfDeliveryProcessingInfo = _encode_DeferredDeliveryTime;
    }
    return _cached_encoder_for_DeferralOfDeliveryProcessingInfo(
        value,
        elGetter
    );
}


/* eslint-enable */
