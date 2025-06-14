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
    MTSIdentifier,
    _decode_MTSIdentifier,
    _encode_MTSIdentifier,
} from '../MTSAbstractService/MTSIdentifier.ta.mjs';
/* START_OF_SYMBOL_DEFINITION MessageDeliveryIdentifier */
/**
 * @summary MessageDeliveryIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MessageDeliveryIdentifier  ::=  MTSIdentifier
 * ```
 */
export type MessageDeliveryIdentifier = MTSIdentifier; // DefinedType
/* END_OF_SYMBOL_DEFINITION MessageDeliveryIdentifier */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_MessageDeliveryIdentifier */
let _cached_decoder_for_MessageDeliveryIdentifier: $.ASN1Decoder<MessageDeliveryIdentifier> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_MessageDeliveryIdentifier */

/* START_OF_SYMBOL_DEFINITION _decode_MessageDeliveryIdentifier */
/**
 * @summary Decodes an ASN.1 element into a(n) MessageDeliveryIdentifier
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MessageDeliveryIdentifier} The decoded data structure.
 */
export function _decode_MessageDeliveryIdentifier(el: _Element) {
    if (!_cached_decoder_for_MessageDeliveryIdentifier) {
        _cached_decoder_for_MessageDeliveryIdentifier = _decode_MTSIdentifier;
    }
    return _cached_decoder_for_MessageDeliveryIdentifier(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_MessageDeliveryIdentifier */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_MessageDeliveryIdentifier */
let _cached_encoder_for_MessageDeliveryIdentifier: $.ASN1Encoder<MessageDeliveryIdentifier> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_MessageDeliveryIdentifier */

/* START_OF_SYMBOL_DEFINITION _encode_MessageDeliveryIdentifier */
/**
 * @summary Encodes a(n) MessageDeliveryIdentifier into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MessageDeliveryIdentifier, encoded as an ASN.1 Element.
 */
export function _encode_MessageDeliveryIdentifier(
    value: MessageDeliveryIdentifier,
    elGetter: $.ASN1Encoder<MessageDeliveryIdentifier>
) {
    if (!_cached_encoder_for_MessageDeliveryIdentifier) {
        _cached_encoder_for_MessageDeliveryIdentifier = _encode_MTSIdentifier;
    }
    return _cached_encoder_for_MessageDeliveryIdentifier(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_MessageDeliveryIdentifier */

/* eslint-enable */
