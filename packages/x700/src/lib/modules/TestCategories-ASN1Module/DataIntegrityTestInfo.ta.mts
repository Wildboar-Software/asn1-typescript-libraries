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
    DataUnits,
    _decode_DataUnits,
    _encode_DataUnits,
} from '../TestCategories-ASN1Module/DataUnits.ta.mjs';
/**
 * @summary DataIntegrityTestInfo
 * @description
 *
 * Initiation info for a data integrity test: whether two
 * entities (MORT and AO) can exchange data without corruption, and
 * the time taken. SEQUENCE OF `DataUnits` to send; if omitted from
 * the request, units are object-specific. Intrusive. The AO
 * reflects received data back to the MORT (CO or CL). ACTION-INFO
 * (A.5.9). ITU-T Rec. X.737 (11/95)
 * [§7.3.1](https://www.itu.int/rec/T-REC-X.737-199511-I),
 * §7.3.2, §7.3.6. Cor.1: `SEQUENCE OF DataUnits`
 * [https://www.itu.int/rec/T-REC-X.737-199806-I].
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DataIntegrityTestInfo  ::=  SEQUENCE OF DataUnits
 * ```
 */
export type DataIntegrityTestInfo = DataUnits[]; // SequenceOfType

let _cached_decoder_for_DataIntegrityTestInfo: $.ASN1Decoder<DataIntegrityTestInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DataIntegrityTestInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DataIntegrityTestInfo} The decoded data structure.
 */
export function _decode_DataIntegrityTestInfo(el: _Element): DataIntegrityTestInfo {
    if (!_cached_decoder_for_DataIntegrityTestInfo) {
        _cached_decoder_for_DataIntegrityTestInfo = $._decodeSequenceOf<DataUnits>(
            () => _decode_DataUnits
        );
    }
    return _cached_decoder_for_DataIntegrityTestInfo(el);
}

let _cached_encoder_for_DataIntegrityTestInfo: $.ASN1Encoder<DataIntegrityTestInfo> | null = null;

/**
 * @summary Encodes a(n) DataIntegrityTestInfo into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DataIntegrityTestInfo, encoded as an ASN.1 Element.
 */
export function _encode_DataIntegrityTestInfo(
    value: DataIntegrityTestInfo,
    elGetter: $.ASN1Encoder<DataIntegrityTestInfo>
): _Element {
    if (!_cached_encoder_for_DataIntegrityTestInfo) {
        _cached_encoder_for_DataIntegrityTestInfo = $._encodeSequenceOf<DataUnits>(
            () => _encode_DataUnits,
            $.BER
        );
    }
    return _cached_encoder_for_DataIntegrityTestInfo(value, elGetter);
}


/* eslint-enable */
