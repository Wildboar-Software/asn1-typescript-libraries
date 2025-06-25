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
    BufferedObservationScan,
    _decode_BufferedObservationScan,
    _encode_BufferedObservationScan,
} from '../SummarizationASN1Productions/BufferedObservationScan.ta.mjs';
/**
 * @summary BufferedObservationList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BufferedObservationList  ::=  SET OF BufferedObservationScan
 * ```
 */
export type BufferedObservationList = BufferedObservationScan[]; // SetOfType

let _cached_decoder_for_BufferedObservationList: $.ASN1Decoder<BufferedObservationList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) BufferedObservationList
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BufferedObservationList} The decoded data structure.
 */
export function _decode_BufferedObservationList(el: _Element): BufferedObservationList {
    if (!_cached_decoder_for_BufferedObservationList) {
        _cached_decoder_for_BufferedObservationList = $._decodeSetOf<BufferedObservationScan>(
            () => _decode_BufferedObservationScan
        );
    }
    return _cached_decoder_for_BufferedObservationList(el);
}

let _cached_encoder_for_BufferedObservationList: $.ASN1Encoder<BufferedObservationList> | null = null;

/**
 * @summary Encodes a(n) BufferedObservationList into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BufferedObservationList, encoded as an ASN.1 Element.
 */
export function _encode_BufferedObservationList(
    value: BufferedObservationList,
    elGetter: $.ASN1Encoder<BufferedObservationList>
): _Element {
    if (!_cached_encoder_for_BufferedObservationList) {
        _cached_encoder_for_BufferedObservationList = $._encodeSetOf<BufferedObservationScan>(
            () => _encode_BufferedObservationScan,
            $.BER
        );
    }
    return _cached_encoder_for_BufferedObservationList(value, elGetter);
}


/* eslint-enable */
