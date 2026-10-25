/* eslint-disable */
import {
    type ASN1Element as _Element,
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
    type DeferredDeliveryTime,
    _decode_DeferredDeliveryTime,
    _encode_DeferredDeliveryTime,
} from '../MTSAbstractService/DeferredDeliveryTime.ta.mjs';
/**
 * @summary DeferralOfDeliveryProcessingInfo
 * @description
 *
 * Defined in ITU-T X.411 (1999) (accounting objects).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DeferralOfDeliveryProcessingInfo  ::=  DeferredDeliveryTime
 * ```
 */
export type DeferralOfDeliveryProcessingInfo = DeferredDeliveryTime; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) DeferralOfDeliveryProcessingInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DeferralOfDeliveryProcessingInfo} The decoded data structure.
 */
export const _decode_DeferralOfDeliveryProcessingInfo: $.ASN1Decoder<DeferralOfDeliveryProcessingInfo> = _decode_DeferredDeliveryTime;

/**
 * @summary Encodes a(n) DeferralOfDeliveryProcessingInfo into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DeferralOfDeliveryProcessingInfo, encoded as an ASN.1 Element.
 */
export const _encode_DeferralOfDeliveryProcessingInfo: $.ASN1Encoder<DeferralOfDeliveryProcessingInfo> = _encode_DeferredDeliveryTime;


/* eslint-enable */
