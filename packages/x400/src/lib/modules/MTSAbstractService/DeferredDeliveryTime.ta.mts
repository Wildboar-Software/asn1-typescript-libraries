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
    type Time,
    _decode_Time,
    _encode_Time,
} from '../MTSAbstractService/Time.ta.mjs';
/**
 * @summary DeferredDeliveryTime
 * @description
 *
 * Earliest time the MTS may deliver; type `Time` (ITU-T X.411 (1999), §8.2.1.1.1.14 /
 * Annex A). Cancellation may be rejected if transfer has already begun.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DeferredDeliveryTime  ::=  Time
 * ```
 */
export type DeferredDeliveryTime = Time; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) DeferredDeliveryTime
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DeferredDeliveryTime} The decoded data structure.
 */
export const _decode_DeferredDeliveryTime: $.ASN1Decoder<DeferredDeliveryTime> = _decode_Time;

/**
 * @summary Encodes a(n) DeferredDeliveryTime into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DeferredDeliveryTime, encoded as an ASN.1 Element.
 */
export const _encode_DeferredDeliveryTime: $.ASN1Encoder<DeferredDeliveryTime> = _encode_Time;


/* eslint-enable */
