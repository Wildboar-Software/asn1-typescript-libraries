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
    PortSignalRateAndMappingList_Item,
    _decode_PortSignalRateAndMappingList_Item,
    _encode_PortSignalRateAndMappingList_Item,
} from '../M3100ASN1TypeModule2/PortSignalRateAndMappingList-Item.ta.mjs';

/**
 * @summary PortSignalRateAndMappingList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PortSignalRateAndMappingList  ::=
 *   SET OF
 *     SEQUENCE {portId       NameType,
 *               signalRate   SignalRate,
 *               mappingList  MappingList OPTIONAL}
 * ```
 */
export type PortSignalRateAndMappingList = PortSignalRateAndMappingList_Item[]; // SetOfType


let _cached_decoder_for_PortSignalRateAndMappingList: $.ASN1Decoder<PortSignalRateAndMappingList> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) PortSignalRateAndMappingList
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PortSignalRateAndMappingList} The decoded data structure.
 */
export function _decode_PortSignalRateAndMappingList(el: _Element) {
    if (!_cached_decoder_for_PortSignalRateAndMappingList) {
        _cached_decoder_for_PortSignalRateAndMappingList = $._decodeSetOf<PortSignalRateAndMappingList_Item>(
            () => _decode_PortSignalRateAndMappingList_Item
        );
    }
    return _cached_decoder_for_PortSignalRateAndMappingList(el);
}


let _cached_encoder_for_PortSignalRateAndMappingList: $.ASN1Encoder<PortSignalRateAndMappingList> | null = null;


/**
 * @summary Encodes a(n) PortSignalRateAndMappingList into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PortSignalRateAndMappingList, encoded as an ASN.1 Element.
 */
export function _encode_PortSignalRateAndMappingList(
    value: PortSignalRateAndMappingList,
    elGetter: $.ASN1Encoder<PortSignalRateAndMappingList>
) {
    if (!_cached_encoder_for_PortSignalRateAndMappingList) {
        _cached_encoder_for_PortSignalRateAndMappingList = $._encodeSetOf<PortSignalRateAndMappingList_Item>(
            () => _encode_PortSignalRateAndMappingList_Item,
            $.BER
        );
    }
    return _cached_encoder_for_PortSignalRateAndMappingList(value, elGetter);
}


/* eslint-enable */
