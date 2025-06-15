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
    SignalRateAndMappingList_Item,
    _decode_SignalRateAndMappingList_Item,
    _encode_SignalRateAndMappingList_Item,
} from '../ASN1DefinedTypesModule/SignalRateAndMappingList-Item.ta.mjs';

/**
 * @summary SignalRateAndMappingList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SignalRateAndMappingList  ::=
 *   SET OF
 *     SEQUENCE {-- only one member in the case of TDM
 *               signalRate   SignalRate,
 *               mappingList  MappingList OPTIONAL,
 *               wavelength   WaveLength OPTIONAL}
 * ```
 */
export type SignalRateAndMappingList = SignalRateAndMappingList_Item[]; // SetOfType


let _cached_decoder_for_SignalRateAndMappingList: $.ASN1Decoder<SignalRateAndMappingList> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) SignalRateAndMappingList
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SignalRateAndMappingList} The decoded data structure.
 */
export function _decode_SignalRateAndMappingList(el: _Element) {
    if (!_cached_decoder_for_SignalRateAndMappingList) {
        _cached_decoder_for_SignalRateAndMappingList = $._decodeSetOf<SignalRateAndMappingList_Item>(
            () => _decode_SignalRateAndMappingList_Item
        );
    }
    return _cached_decoder_for_SignalRateAndMappingList(el);
}


let _cached_encoder_for_SignalRateAndMappingList: $.ASN1Encoder<SignalRateAndMappingList> | null = null;


/**
 * @summary Encodes a(n) SignalRateAndMappingList into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SignalRateAndMappingList, encoded as an ASN.1 Element.
 */
export function _encode_SignalRateAndMappingList(
    value: SignalRateAndMappingList,
    elGetter: $.ASN1Encoder<SignalRateAndMappingList>
) {
    if (!_cached_encoder_for_SignalRateAndMappingList) {
        _cached_encoder_for_SignalRateAndMappingList = $._encodeSetOf<SignalRateAndMappingList_Item>(
            () => _encode_SignalRateAndMappingList_Item,
            $.BER
        );
    }
    return _cached_encoder_for_SignalRateAndMappingList(value, elGetter);
}


/* eslint-enable */
