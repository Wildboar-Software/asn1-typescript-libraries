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
    ObservationScan,
    _decode_ObservationScan,
    _encode_ObservationScan,
} from '../SummarizationASN1Productions/ObservationScan.ta.mjs';
/**
 * @summary ObservationScanList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ObservationScanList  ::=  SET OF ObservationScan
 * ```
 */
export type ObservationScanList = ObservationScan[]; // SetOfType

let _cached_decoder_for_ObservationScanList: $.ASN1Decoder<ObservationScanList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ObservationScanList
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ObservationScanList} The decoded data structure.
 */
export function _decode_ObservationScanList(el: _Element): ObservationScanList {
    if (!_cached_decoder_for_ObservationScanList) {
        _cached_decoder_for_ObservationScanList = $._decodeSetOf<ObservationScan>(
            () => _decode_ObservationScan
        );
    }
    return _cached_decoder_for_ObservationScanList(el);
}

let _cached_encoder_for_ObservationScanList: $.ASN1Encoder<ObservationScanList> | null = null;

/**
 * @summary Encodes a(n) ObservationScanList into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ObservationScanList, encoded as an ASN.1 Element.
 */
export function _encode_ObservationScanList(
    value: ObservationScanList,
    elGetter: $.ASN1Encoder<ObservationScanList>
): _Element {
    if (!_cached_encoder_for_ObservationScanList) {
        _cached_encoder_for_ObservationScanList = $._encodeSetOf<ObservationScan>(
            () => _encode_ObservationScan,
            $.BER
        );
    }
    return _cached_encoder_for_ObservationScanList(value, elGetter);
}


/* eslint-enable */
