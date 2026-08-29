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
    BufferedObservationId,
    _decode_BufferedObservationId,
    _encode_BufferedObservationId,
} from '../SummarizationASN1Productions/BufferedObservationId.ta.mjs';
/**
 * @summary BufferedObservationIdList
 * @description
 *
 * Per-object selection for a buffered scanner
 * (`{summarizationAttribute 5}`): observed instance plus
 * optional scan-attribute, numeric-array, and
 * report-time identifier lists. ITU-T Rec. X.738 (11/93)
 * [§8.1.9.2](https://www.itu.int/rec/T-REC-X.738-199311-I),
 * A.4.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BufferedObservationIdList  ::=  SET OF BufferedObservationId
 * ```
 */
export type BufferedObservationIdList = BufferedObservationId[]; // SetOfType

let _cached_decoder_for_BufferedObservationIdList: $.ASN1Decoder<BufferedObservationIdList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) BufferedObservationIdList
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BufferedObservationIdList} The decoded data structure.
 */
export function _decode_BufferedObservationIdList(el: _Element): BufferedObservationIdList {
    if (!_cached_decoder_for_BufferedObservationIdList) {
        _cached_decoder_for_BufferedObservationIdList = $._decodeSetOf<BufferedObservationId>(
            () => _decode_BufferedObservationId
        );
    }
    return _cached_decoder_for_BufferedObservationIdList(el);
}

let _cached_encoder_for_BufferedObservationIdList: $.ASN1Encoder<BufferedObservationIdList> | null = null;

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
): _Element {
    if (!_cached_encoder_for_BufferedObservationIdList) {
        _cached_encoder_for_BufferedObservationIdList = $._encodeSetOf<BufferedObservationId>(
            () => _encode_BufferedObservationId,
            $.BER
        );
    }
    return _cached_encoder_for_BufferedObservationIdList(value, elGetter);
}


/* eslint-enable */
