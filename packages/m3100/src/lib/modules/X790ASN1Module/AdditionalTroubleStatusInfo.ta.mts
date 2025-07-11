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
 * @summary AdditionalTroubleStatusInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AdditionalTroubleStatusInfo  ::=  SET OF GraphicString(SIZE (0..256))
 * ```
 */
export type AdditionalTroubleStatusInfo = GraphicString[]; // SetOfType


let _cached_decoder_for_AdditionalTroubleStatusInfo: $.ASN1Decoder<AdditionalTroubleStatusInfo> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) AdditionalTroubleStatusInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AdditionalTroubleStatusInfo} The decoded data structure.
 */
export function _decode_AdditionalTroubleStatusInfo(el: _Element): AdditionalTroubleStatusInfo {
    if (!_cached_decoder_for_AdditionalTroubleStatusInfo) {
        _cached_decoder_for_AdditionalTroubleStatusInfo = $._decodeSetOf<GraphicString>(
            () => $._decodeGraphicString
        );
    }
    return _cached_decoder_for_AdditionalTroubleStatusInfo(el);
}


let _cached_encoder_for_AdditionalTroubleStatusInfo: $.ASN1Encoder<AdditionalTroubleStatusInfo> | null = null;


/**
 * @summary Encodes a(n) AdditionalTroubleStatusInfo into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AdditionalTroubleStatusInfo, encoded as an ASN.1 Element.
 */
export function _encode_AdditionalTroubleStatusInfo(
    value: AdditionalTroubleStatusInfo,
    elGetter: $.ASN1Encoder<AdditionalTroubleStatusInfo>
): _Element {
    if (!_cached_encoder_for_AdditionalTroubleStatusInfo) {
        _cached_encoder_for_AdditionalTroubleStatusInfo = $._encodeSetOf<GraphicString>(
            () => $._encodeGraphicString,
            $.BER
        );
    }
    return _cached_encoder_for_AdditionalTroubleStatusInfo(value, elGetter);
}


/* eslint-enable */
