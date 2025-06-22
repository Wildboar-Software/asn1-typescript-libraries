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
    GlobalTime,
    _decode_GlobalTime,
    _encode_GlobalTime,
} from '../SummarizationASN1Productions/GlobalTime.ta.mjs';
/**
 * @summary FirstScanInitiationTime
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * FirstScanInitiationTime  ::=  GlobalTime
 * ```
 */
export type FirstScanInitiationTime = GlobalTime; // DefinedType

let _cached_decoder_for_FirstScanInitiationTime: $.ASN1Decoder<FirstScanInitiationTime> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FirstScanInitiationTime
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {FirstScanInitiationTime} The decoded data structure.
 */
export function _decode_FirstScanInitiationTime(el: _Element) {
    if (!_cached_decoder_for_FirstScanInitiationTime) {
        _cached_decoder_for_FirstScanInitiationTime = _decode_GlobalTime;
    }
    return _cached_decoder_for_FirstScanInitiationTime(el);
}

let _cached_encoder_for_FirstScanInitiationTime: $.ASN1Encoder<FirstScanInitiationTime> | null = null;

/**
 * @summary Encodes a(n) FirstScanInitiationTime into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FirstScanInitiationTime, encoded as an ASN.1 Element.
 */
export function _encode_FirstScanInitiationTime(
    value: FirstScanInitiationTime,
    elGetter: $.ASN1Encoder<FirstScanInitiationTime>
) {
    if (!_cached_encoder_for_FirstScanInitiationTime) {
        _cached_encoder_for_FirstScanInitiationTime = _encode_GlobalTime;
    }
    return _cached_encoder_for_FirstScanInitiationTime(value, elGetter);
}


/* eslint-enable */
