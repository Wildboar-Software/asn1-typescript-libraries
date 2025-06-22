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
 * @summary ConvertPtoPToMulticastInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ConvertPtoPToMulticastInfo  ::=  SEQUENCE OF ObjectInstance
 * ```
 */
export type ConvertPtoPToMulticastInfo = ObjectInstance[]; // SequenceOfType


let _cached_decoder_for_ConvertPtoPToMulticastInfo: $.ASN1Decoder<ConvertPtoPToMulticastInfo> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) ConvertPtoPToMulticastInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ConvertPtoPToMulticastInfo} The decoded data structure.
 */
export function _decode_ConvertPtoPToMulticastInfo(el: _Element) {
    if (!_cached_decoder_for_ConvertPtoPToMulticastInfo) {
        _cached_decoder_for_ConvertPtoPToMulticastInfo = $._decodeSequenceOf<ObjectInstance>(
            () => _decode_ObjectInstance
        );
    }
    return _cached_decoder_for_ConvertPtoPToMulticastInfo(el);
}


let _cached_encoder_for_ConvertPtoPToMulticastInfo: $.ASN1Encoder<ConvertPtoPToMulticastInfo> | null = null;


/**
 * @summary Encodes a(n) ConvertPtoPToMulticastInfo into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ConvertPtoPToMulticastInfo, encoded as an ASN.1 Element.
 */
export function _encode_ConvertPtoPToMulticastInfo(
    value: ConvertPtoPToMulticastInfo,
    elGetter: $.ASN1Encoder<ConvertPtoPToMulticastInfo>
) {
    if (!_cached_encoder_for_ConvertPtoPToMulticastInfo) {
        _cached_encoder_for_ConvertPtoPToMulticastInfo = $._encodeSequenceOf<ObjectInstance>(
            () => _encode_ObjectInstance,
            $.BER
        );
    }
    return _cached_encoder_for_ConvertPtoPToMulticastInfo(value, elGetter);
}


/* eslint-enable */
