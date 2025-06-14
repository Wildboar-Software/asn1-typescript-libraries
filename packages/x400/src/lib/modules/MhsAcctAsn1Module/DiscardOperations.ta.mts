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
/* START_OF_SYMBOL_DEFINITION DiscardOperations */
/**
 * @summary DiscardOperations
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DiscardOperations  ::=  EventTypeId(affirmation | non-affirmation | non-delivery)
 * ```
 */
export type DiscardOperations = EventTypeId; // DefinedType
/* END_OF_SYMBOL_DEFINITION DiscardOperations */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DiscardOperations */
let _cached_decoder_for_DiscardOperations: $.ASN1Decoder<DiscardOperations> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DiscardOperations */

/* START_OF_SYMBOL_DEFINITION _decode_DiscardOperations */
/**
 * @summary Decodes an ASN.1 element into a(n) DiscardOperations
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DiscardOperations} The decoded data structure.
 */
export function _decode_DiscardOperations(el: _Element) {
    if (!_cached_decoder_for_DiscardOperations) {
        _cached_decoder_for_DiscardOperations = _decode_EventTypeId;
    }
    return _cached_decoder_for_DiscardOperations(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_DiscardOperations */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DiscardOperations */
let _cached_encoder_for_DiscardOperations: $.ASN1Encoder<DiscardOperations> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DiscardOperations */

/* START_OF_SYMBOL_DEFINITION _encode_DiscardOperations */
/**
 * @summary Encodes a(n) DiscardOperations into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DiscardOperations, encoded as an ASN.1 Element.
 */
export function _encode_DiscardOperations(
    value: DiscardOperations,
    elGetter: $.ASN1Encoder<DiscardOperations>
) {
    if (!_cached_encoder_for_DiscardOperations) {
        _cached_encoder_for_DiscardOperations = _encode_EventTypeId;
    }
    return _cached_encoder_for_DiscardOperations(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_DiscardOperations */

/* eslint-enable */
