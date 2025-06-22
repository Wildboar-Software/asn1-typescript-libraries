/* eslint-disable */
import {
    GraphicString,
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


/**
 * @summary AdditionalTroubleInfoList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AdditionalTroubleInfoList  ::=  SET OF GraphicString
 * ```
 */
export type AdditionalTroubleInfoList = GraphicString[]; // SetOfType


let _cached_decoder_for_AdditionalTroubleInfoList: $.ASN1Decoder<AdditionalTroubleInfoList> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) AdditionalTroubleInfoList
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AdditionalTroubleInfoList} The decoded data structure.
 */
export function _decode_AdditionalTroubleInfoList(el: _Element) {
    if (!_cached_decoder_for_AdditionalTroubleInfoList) {
        _cached_decoder_for_AdditionalTroubleInfoList = $._decodeSetOf<GraphicString>(
            () => $._decodeGraphicString
        );
    }
    return _cached_decoder_for_AdditionalTroubleInfoList(el);
}


let _cached_encoder_for_AdditionalTroubleInfoList: $.ASN1Encoder<AdditionalTroubleInfoList> | null = null;


/**
 * @summary Encodes a(n) AdditionalTroubleInfoList into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AdditionalTroubleInfoList, encoded as an ASN.1 Element.
 */
export function _encode_AdditionalTroubleInfoList(
    value: AdditionalTroubleInfoList,
    elGetter: $.ASN1Encoder<AdditionalTroubleInfoList>
) {
    if (!_cached_encoder_for_AdditionalTroubleInfoList) {
        _cached_encoder_for_AdditionalTroubleInfoList = $._encodeSetOf<GraphicString>(
            () => $._encodeGraphicString,
            $.BER
        );
    }
    return _cached_encoder_for_AdditionalTroubleInfoList(value, elGetter);
}


/* eslint-enable */
