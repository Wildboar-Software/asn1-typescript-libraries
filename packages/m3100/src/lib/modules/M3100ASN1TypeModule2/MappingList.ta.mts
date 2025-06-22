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
import * as $ from '@wildboar/asn1/functional';
import {
    PayloadLevel,
    _decode_PayloadLevel,
    _encode_PayloadLevel,
} from '../M3100ASN1TypeModule2/PayloadLevel.ta.mjs';

/**
 * @summary MappingList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MappingList  ::=  SEQUENCE OF PayloadLevel
 * ```
 */
export type MappingList = PayloadLevel[]; // SequenceOfType


let _cached_decoder_for_MappingList: $.ASN1Decoder<MappingList> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) MappingList
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MappingList} The decoded data structure.
 */
export function _decode_MappingList(el: _Element) {
    if (!_cached_decoder_for_MappingList) {
        _cached_decoder_for_MappingList = $._decodeSequenceOf<PayloadLevel>(
            () => _decode_PayloadLevel
        );
    }
    return _cached_decoder_for_MappingList(el);
}


let _cached_encoder_for_MappingList: $.ASN1Encoder<MappingList> | null = null;


/**
 * @summary Encodes a(n) MappingList into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MappingList, encoded as an ASN.1 Element.
 */
export function _encode_MappingList(
    value: MappingList,
    elGetter: $.ASN1Encoder<MappingList>
) {
    if (!_cached_encoder_for_MappingList) {
        _cached_encoder_for_MappingList = $._encodeSequenceOf<PayloadLevel>(
            () => _encode_PayloadLevel,
            $.BER
        );
    }
    return _cached_encoder_for_MappingList(value, elGetter);
}


/* eslint-enable */
