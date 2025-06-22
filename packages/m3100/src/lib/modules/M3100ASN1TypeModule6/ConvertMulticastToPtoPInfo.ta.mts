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
    ObjectInstance,
    _decode_ObjectInstance,
    _encode_ObjectInstance,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/ObjectInstance.ta.mjs';

/**
 * @summary ConvertMulticastToPtoPInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ConvertMulticastToPtoPInfo  ::=  SEQUENCE OF ObjectInstance
 * ```
 */
export type ConvertMulticastToPtoPInfo = ObjectInstance[]; // SequenceOfType


let _cached_decoder_for_ConvertMulticastToPtoPInfo: $.ASN1Decoder<ConvertMulticastToPtoPInfo> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) ConvertMulticastToPtoPInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ConvertMulticastToPtoPInfo} The decoded data structure.
 */
export function _decode_ConvertMulticastToPtoPInfo(el: _Element) {
    if (!_cached_decoder_for_ConvertMulticastToPtoPInfo) {
        _cached_decoder_for_ConvertMulticastToPtoPInfo = $._decodeSequenceOf<ObjectInstance>(
            () => _decode_ObjectInstance
        );
    }
    return _cached_decoder_for_ConvertMulticastToPtoPInfo(el);
}


let _cached_encoder_for_ConvertMulticastToPtoPInfo: $.ASN1Encoder<ConvertMulticastToPtoPInfo> | null = null;


/**
 * @summary Encodes a(n) ConvertMulticastToPtoPInfo into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ConvertMulticastToPtoPInfo, encoded as an ASN.1 Element.
 */
export function _encode_ConvertMulticastToPtoPInfo(
    value: ConvertMulticastToPtoPInfo,
    elGetter: $.ASN1Encoder<ConvertMulticastToPtoPInfo>
) {
    if (!_cached_encoder_for_ConvertMulticastToPtoPInfo) {
        _cached_encoder_for_ConvertMulticastToPtoPInfo = $._encodeSequenceOf<ObjectInstance>(
            () => _encode_ObjectInstance,
            $.BER
        );
    }
    return _cached_encoder_for_ConvertMulticastToPtoPInfo(value, elGetter);
}


/* eslint-enable */
