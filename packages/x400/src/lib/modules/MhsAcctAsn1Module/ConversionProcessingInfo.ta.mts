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
    EMailFromToEIT,
    _decode_EMailFromToEIT,
    _encode_EMailFromToEIT,
} from '../MhsAcctAsn1Module/EMailFromToEIT.ta.mjs';
/**
 * @summary ConversionProcessingInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ConversionProcessingInfo  ::=  SET OF EMailFromToEIT
 * ```
 */
export type ConversionProcessingInfo = EMailFromToEIT[]; // SetOfType

let _cached_decoder_for_ConversionProcessingInfo: $.ASN1Decoder<ConversionProcessingInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ConversionProcessingInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ConversionProcessingInfo} The decoded data structure.
 */
export function _decode_ConversionProcessingInfo(el: _Element) {
    if (!_cached_decoder_for_ConversionProcessingInfo) {
        _cached_decoder_for_ConversionProcessingInfo = $._decodeSetOf<EMailFromToEIT>(
            () => _decode_EMailFromToEIT
        );
    }
    return _cached_decoder_for_ConversionProcessingInfo(el);
}

let _cached_encoder_for_ConversionProcessingInfo: $.ASN1Encoder<ConversionProcessingInfo> | null = null;

/**
 * @summary Encodes a(n) ConversionProcessingInfo into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ConversionProcessingInfo, encoded as an ASN.1 Element.
 */
export function _encode_ConversionProcessingInfo(
    value: ConversionProcessingInfo,
    elGetter: $.ASN1Encoder<ConversionProcessingInfo>
) {
    if (!_cached_encoder_for_ConversionProcessingInfo) {
        _cached_encoder_for_ConversionProcessingInfo = $._encodeSetOf<EMailFromToEIT>(
            () => _encode_EMailFromToEIT,
            $.BER
        );
    }
    return _cached_encoder_for_ConversionProcessingInfo(value, elGetter);
}


/* eslint-enable */
