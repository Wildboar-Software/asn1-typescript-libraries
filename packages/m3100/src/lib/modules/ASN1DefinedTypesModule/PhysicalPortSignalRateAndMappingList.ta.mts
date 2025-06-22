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
    PhysicalPortSignalRateAndMappingList_diverse,
    _decode_PhysicalPortSignalRateAndMappingList_diverse,
    _encode_PhysicalPortSignalRateAndMappingList_diverse,
} from '../ASN1DefinedTypesModule/PhysicalPortSignalRateAndMappingList-diverse.ta.mjs';
import {
    SignalRateAndMappingList,
    _decode_SignalRateAndMappingList,
    _encode_SignalRateAndMappingList,
} from '../ASN1DefinedTypesModule/SignalRateAndMappingList.ta.mjs';

/**
 * @summary PhysicalPortSignalRateAndMappingList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PhysicalPortSignalRateAndMappingList  ::=  CHOICE {
 *   diverse
 *     SEQUENCE {downstream  SignalRateAndMappingList,
 *               upStream    SignalRateAndMappingList},
 *   uniform  SignalRateAndMappingList
 * }
 * ```
 */
export type PhysicalPortSignalRateAndMappingList =
    | {
          diverse: PhysicalPortSignalRateAndMappingList_diverse;
      } /* CHOICE_ALT_ROOT */
    | { uniform: SignalRateAndMappingList } /* CHOICE_ALT_ROOT */;


let _cached_decoder_for_PhysicalPortSignalRateAndMappingList: $.ASN1Decoder<PhysicalPortSignalRateAndMappingList> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) PhysicalPortSignalRateAndMappingList
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PhysicalPortSignalRateAndMappingList} The decoded data structure.
 */
export function _decode_PhysicalPortSignalRateAndMappingList(el: _Element) {
    if (!_cached_decoder_for_PhysicalPortSignalRateAndMappingList) {
        _cached_decoder_for_PhysicalPortSignalRateAndMappingList = $._decode_inextensible_choice<PhysicalPortSignalRateAndMappingList>(
            {
                'UNIVERSAL 16': [
                    'diverse',
                    _decode_PhysicalPortSignalRateAndMappingList_diverse,
                ],
                'UNIVERSAL 17': ['uniform', _decode_SignalRateAndMappingList],
            }
        );
    }
    return _cached_decoder_for_PhysicalPortSignalRateAndMappingList(el);
}


let _cached_encoder_for_PhysicalPortSignalRateAndMappingList: $.ASN1Encoder<PhysicalPortSignalRateAndMappingList> | null = null;


/**
 * @summary Encodes a(n) PhysicalPortSignalRateAndMappingList into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PhysicalPortSignalRateAndMappingList, encoded as an ASN.1 Element.
 */
export function _encode_PhysicalPortSignalRateAndMappingList(
    value: PhysicalPortSignalRateAndMappingList,
    elGetter: $.ASN1Encoder<PhysicalPortSignalRateAndMappingList>
) {
    if (!_cached_encoder_for_PhysicalPortSignalRateAndMappingList) {
        _cached_encoder_for_PhysicalPortSignalRateAndMappingList = $._encode_choice<PhysicalPortSignalRateAndMappingList>(
            {
                diverse: _encode_PhysicalPortSignalRateAndMappingList_diverse,
                uniform: _encode_SignalRateAndMappingList,
            },
            $.BER
        );
    }
    return _cached_encoder_for_PhysicalPortSignalRateAndMappingList(
        value,
        elGetter
    );
}


/* eslint-enable */
