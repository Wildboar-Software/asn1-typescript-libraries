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
    BufferedObservationId,
    _decode_BufferedObservationId,
    _encode_BufferedObservationId,
} from '../SummarizationASN1Productions/BufferedObservationId.ta.mjs';
/* START_OF_SYMBOL_DEFINITION BufferedObservationIdList */
/**
 * @summary BufferedObservationIdList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BufferedObservationIdList  ::=  SET OF BufferedObservationId
 * ```
 */
export type BufferedObservationIdList = BufferedObservationId[]; // SetOfType
/* END_OF_SYMBOL_DEFINITION BufferedObservationIdList */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_BufferedObservationIdList */
let _cached_decoder_for_BufferedObservationIdList: $.ASN1Decoder<BufferedObservationIdList> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_BufferedObservationIdList */

/* START_OF_SYMBOL_DEFINITION _decode_BufferedObservationIdList */
/**
 * @summary Decodes an ASN.1 element into a(n) BufferedObservationIdList
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BufferedObservationIdList} The decoded data structure.
 */
export function _decode_BufferedObservationIdList(el: _Element) {
    if (!_cached_decoder_for_BufferedObservationIdList) {
        _cached_decoder_for_BufferedObservationIdList = $._decodeSetOf<BufferedObservationId>(
            () => _decode_BufferedObservationId
        );
    }
    return _cached_decoder_for_BufferedObservationIdList(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_BufferedObservationIdList */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_BufferedObservationIdList */
let _cached_encoder_for_BufferedObservationIdList: $.ASN1Encoder<BufferedObservationIdList> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_BufferedObservationIdList */

/* START_OF_SYMBOL_DEFINITION _encode_BufferedObservationIdList */
/**
 * @summary Encodes a(n) BufferedObservationIdList into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BufferedObservationIdList, encoded as an ASN.1 Element.
 */
export function _encode_BufferedObservationIdList(
    value: BufferedObservationIdList,
    elGetter: $.ASN1Encoder<BufferedObservationIdList>
) {
    if (!_cached_encoder_for_BufferedObservationIdList) {
        _cached_encoder_for_BufferedObservationIdList = $._encodeSetOf<BufferedObservationId>(
            () => _encode_BufferedObservationId,
            $.BER
        );
    }
    return _cached_encoder_for_BufferedObservationIdList(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_BufferedObservationIdList */

/* eslint-enable */
