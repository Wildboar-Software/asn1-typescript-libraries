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
 * @summary ScanInitiationTime
 * @description
 *
 * Date and time at which the reported scan was
 * initiated (`{summarizationAttribute 22}`). Required
 * in scan and statistical reports when
 * `timeStampReportMode` is present and non-zero.
 * ITU-T Rec. X.738 (11/93)
 * [§8.2.2.1.1](https://www.itu.int/rec/T-REC-X.738-199311-I),
 * §8.2.2.2.1, A.4, A.9.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ScanInitiationTime  ::=  GlobalTime
 * ```
 */
export type ScanInitiationTime = GlobalTime; // DefinedType

let _cached_decoder_for_ScanInitiationTime: $.ASN1Decoder<ScanInitiationTime> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ScanInitiationTime
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ScanInitiationTime} The decoded data structure.
 */
export function _decode_ScanInitiationTime(el: _Element): ScanInitiationTime {
    if (!_cached_decoder_for_ScanInitiationTime) {
        _cached_decoder_for_ScanInitiationTime = _decode_GlobalTime;
    }
    return _cached_decoder_for_ScanInitiationTime(el);
}

let _cached_encoder_for_ScanInitiationTime: $.ASN1Encoder<ScanInitiationTime> | null = null;

/**
 * @summary Encodes a(n) ScanInitiationTime into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ScanInitiationTime, encoded as an ASN.1 Element.
 */
export function _encode_ScanInitiationTime(
    value: ScanInitiationTime,
    elGetter: $.ASN1Encoder<ScanInitiationTime>
): _Element {
    if (!_cached_encoder_for_ScanInitiationTime) {
        _cached_encoder_for_ScanInitiationTime = _encode_GlobalTime;
    }
    return _cached_encoder_for_ScanInitiationTime(value, elGetter);
}


/* eslint-enable */
