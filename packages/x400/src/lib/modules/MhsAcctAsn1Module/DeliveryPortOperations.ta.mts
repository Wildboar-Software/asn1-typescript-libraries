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
    EventTypeId,
    _decode_EventTypeId,
    _encode_EventTypeId,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/EventTypeId.ta.mjs';
/* START_OF_SYMBOL_DEFINITION DeliveryPortOperations */
/**
 * @summary DeliveryPortOperations
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DeliveryPortOperations  ::=
 *   EventTypeId(delivery-control | message-delivery | report-delivery)
 * ```
 */
export type DeliveryPortOperations = EventTypeId; // DefinedType
/* END_OF_SYMBOL_DEFINITION DeliveryPortOperations */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DeliveryPortOperations */
let _cached_decoder_for_DeliveryPortOperations: $.ASN1Decoder<DeliveryPortOperations> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DeliveryPortOperations */

/* START_OF_SYMBOL_DEFINITION _decode_DeliveryPortOperations */
/**
 * @summary Decodes an ASN.1 element into a(n) DeliveryPortOperations
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DeliveryPortOperations} The decoded data structure.
 */
export function _decode_DeliveryPortOperations(el: _Element) {
    if (!_cached_decoder_for_DeliveryPortOperations) {
        _cached_decoder_for_DeliveryPortOperations = _decode_EventTypeId;
    }
    return _cached_decoder_for_DeliveryPortOperations(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_DeliveryPortOperations */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DeliveryPortOperations */
let _cached_encoder_for_DeliveryPortOperations: $.ASN1Encoder<DeliveryPortOperations> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DeliveryPortOperations */

/* START_OF_SYMBOL_DEFINITION _encode_DeliveryPortOperations */
/**
 * @summary Encodes a(n) DeliveryPortOperations into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DeliveryPortOperations, encoded as an ASN.1 Element.
 */
export function _encode_DeliveryPortOperations(
    value: DeliveryPortOperations,
    elGetter: $.ASN1Encoder<DeliveryPortOperations>
) {
    if (!_cached_encoder_for_DeliveryPortOperations) {
        _cached_encoder_for_DeliveryPortOperations = _encode_EventTypeId;
    }
    return _cached_encoder_for_DeliveryPortOperations(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_DeliveryPortOperations */

/* eslint-enable */
