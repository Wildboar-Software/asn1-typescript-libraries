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
    type EventTypeId,
    _decode_EventTypeId,
    _encode_EventTypeId,
} from '@wildboar/cmip';
/**
 * @summary DeliveryPortOperations
 * @description
 *
 * Defined in ITU-T X.411 (1999) (accounting objects).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DeliveryPortOperations  ::=
 *   EventTypeId(delivery-control | message-delivery | report-delivery)
 * ```
 */
export type DeliveryPortOperations = EventTypeId; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) DeliveryPortOperations
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DeliveryPortOperations} The decoded data structure.
 */
export const _decode_DeliveryPortOperations: $.ASN1Decoder<DeliveryPortOperations> = _decode_EventTypeId;

/**
 * @summary Encodes a(n) DeliveryPortOperations into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DeliveryPortOperations, encoded as an ASN.1 Element.
 */
export const _encode_DeliveryPortOperations: $.ASN1Encoder<DeliveryPortOperations> = _encode_EventTypeId;


/* eslint-enable */
