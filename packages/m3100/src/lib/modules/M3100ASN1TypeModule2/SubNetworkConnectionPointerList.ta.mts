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
    RelatedObjectInstance,
    _decode_RelatedObjectInstance,
    _encode_RelatedObjectInstance,
} from '../ASN1DefinedTypesModule/RelatedObjectInstance.ta.mjs';


/**
 * @summary SubNetworkConnectionPointerList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SubNetworkConnectionPointerList  ::=  SEQUENCE OF RelatedObjectInstance
 * ```
 */
export type SubNetworkConnectionPointerList = RelatedObjectInstance[]; // SequenceOfType


let _cached_decoder_for_SubNetworkConnectionPointerList: $.ASN1Decoder<SubNetworkConnectionPointerList> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) SubNetworkConnectionPointerList
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SubNetworkConnectionPointerList} The decoded data structure.
 */
export function _decode_SubNetworkConnectionPointerList(el: _Element) {
    if (!_cached_decoder_for_SubNetworkConnectionPointerList) {
        _cached_decoder_for_SubNetworkConnectionPointerList = $._decodeSequenceOf<RelatedObjectInstance>(
            () => _decode_RelatedObjectInstance
        );
    }
    return _cached_decoder_for_SubNetworkConnectionPointerList(el);
}


let _cached_encoder_for_SubNetworkConnectionPointerList: $.ASN1Encoder<SubNetworkConnectionPointerList> | null = null;


/**
 * @summary Encodes a(n) SubNetworkConnectionPointerList into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SubNetworkConnectionPointerList, encoded as an ASN.1 Element.
 */
export function _encode_SubNetworkConnectionPointerList(
    value: SubNetworkConnectionPointerList,
    elGetter: $.ASN1Encoder<SubNetworkConnectionPointerList>
) {
    if (!_cached_encoder_for_SubNetworkConnectionPointerList) {
        _cached_encoder_for_SubNetworkConnectionPointerList = $._encodeSequenceOf<RelatedObjectInstance>(
            () => _encode_RelatedObjectInstance,
            $.BER
        );
    }
    return _cached_encoder_for_SubNetworkConnectionPointerList(value, elGetter);
}


/* eslint-enable */
