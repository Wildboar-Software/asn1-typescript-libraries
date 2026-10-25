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
    type Time,
    _decode_Time,
    _encode_Time,
} from '../MTSAbstractService/Time.ta.mjs';
/**
 * @summary LatestDeliveryTime
 * @description
 *
 * After this time the MTS shall not deliver (ITU-T X.411 (1999), Annex A, extension 5).
 * Recommended criticality `for-delivery`.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * LatestDeliveryTime  ::=  Time
 * ```
 */
export type LatestDeliveryTime = Time; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) LatestDeliveryTime
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {LatestDeliveryTime} The decoded data structure.
 */
export const _decode_LatestDeliveryTime: $.ASN1Decoder<LatestDeliveryTime> = _decode_Time;

/**
 * @summary Encodes a(n) LatestDeliveryTime into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LatestDeliveryTime, encoded as an ASN.1 Element.
 */
export const _encode_LatestDeliveryTime: $.ASN1Encoder<LatestDeliveryTime> = _encode_Time;


/* eslint-enable */
