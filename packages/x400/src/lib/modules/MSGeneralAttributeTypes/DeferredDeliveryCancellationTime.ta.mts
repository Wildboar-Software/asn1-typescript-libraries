/* eslint-disable */
import {
    UTCTime,
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

/* START_OF_SYMBOL_DEFINITION DeferredDeliveryCancellationTime */
/**
 * @summary DeferredDeliveryCancellationTime
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DeferredDeliveryCancellationTime  ::=  UTCTime
 * ```
 */
export type DeferredDeliveryCancellationTime = UTCTime; // UTCTime
/* END_OF_SYMBOL_DEFINITION DeferredDeliveryCancellationTime */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DeferredDeliveryCancellationTime */
let _cached_decoder_for_DeferredDeliveryCancellationTime: $.ASN1Decoder<DeferredDeliveryCancellationTime> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DeferredDeliveryCancellationTime */

/* START_OF_SYMBOL_DEFINITION _decode_DeferredDeliveryCancellationTime */
/**
 * @summary Decodes an ASN.1 element into a(n) DeferredDeliveryCancellationTime
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DeferredDeliveryCancellationTime} The decoded data structure.
 */
export function _decode_DeferredDeliveryCancellationTime(el: _Element) {
    if (!_cached_decoder_for_DeferredDeliveryCancellationTime) {
        _cached_decoder_for_DeferredDeliveryCancellationTime = $._decodeUTCTime;
    }
    return _cached_decoder_for_DeferredDeliveryCancellationTime(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_DeferredDeliveryCancellationTime */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DeferredDeliveryCancellationTime */
let _cached_encoder_for_DeferredDeliveryCancellationTime: $.ASN1Encoder<DeferredDeliveryCancellationTime> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DeferredDeliveryCancellationTime */

/* START_OF_SYMBOL_DEFINITION _encode_DeferredDeliveryCancellationTime */
/**
 * @summary Encodes a(n) DeferredDeliveryCancellationTime into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DeferredDeliveryCancellationTime, encoded as an ASN.1 Element.
 */
export function _encode_DeferredDeliveryCancellationTime(
    value: DeferredDeliveryCancellationTime,
    elGetter: $.ASN1Encoder<DeferredDeliveryCancellationTime>
) {
    if (!_cached_encoder_for_DeferredDeliveryCancellationTime) {
        _cached_encoder_for_DeferredDeliveryCancellationTime = $._encodeUTCTime;
    }
    return _cached_encoder_for_DeferredDeliveryCancellationTime(
        value,
        elGetter
    );
}

/* END_OF_SYMBOL_DEFINITION _encode_DeferredDeliveryCancellationTime */

/* eslint-enable */
