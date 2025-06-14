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
    DataUnits,
    _decode_DataUnits,
    _encode_DataUnits,
} from '../TestCategories-ASN1Module/DataUnits.ta.mjs';
/* START_OF_SYMBOL_DEFINITION DataIntegrityTestInfo */
/**
 * @summary DataIntegrityTestInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DataIntegrityTestInfo  ::=  SEQUENCE OF DataUnits
 * ```
 */
export type DataIntegrityTestInfo = DataUnits[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION DataIntegrityTestInfo */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DataIntegrityTestInfo */
let _cached_decoder_for_DataIntegrityTestInfo: $.ASN1Decoder<DataIntegrityTestInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DataIntegrityTestInfo */

/* START_OF_SYMBOL_DEFINITION _decode_DataIntegrityTestInfo */
/**
 * @summary Decodes an ASN.1 element into a(n) DataIntegrityTestInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DataIntegrityTestInfo} The decoded data structure.
 */
export function _decode_DataIntegrityTestInfo(el: _Element) {
    if (!_cached_decoder_for_DataIntegrityTestInfo) {
        _cached_decoder_for_DataIntegrityTestInfo = $._decodeSequenceOf<DataUnits>(
            () => _decode_DataUnits
        );
    }
    return _cached_decoder_for_DataIntegrityTestInfo(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_DataIntegrityTestInfo */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DataIntegrityTestInfo */
let _cached_encoder_for_DataIntegrityTestInfo: $.ASN1Encoder<DataIntegrityTestInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DataIntegrityTestInfo */

/* START_OF_SYMBOL_DEFINITION _encode_DataIntegrityTestInfo */
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
) {
    if (!_cached_encoder_for_DataIntegrityTestInfo) {
        _cached_encoder_for_DataIntegrityTestInfo = $._encodeSequenceOf<DataUnits>(
            () => _encode_DataUnits,
            $.BER
        );
    }
    return _cached_encoder_for_DataIntegrityTestInfo(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_DataIntegrityTestInfo */

/* eslint-enable */
