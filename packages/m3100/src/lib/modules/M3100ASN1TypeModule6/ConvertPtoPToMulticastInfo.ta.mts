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
    ObjectInstance,
    _decode_ObjectInstance,
    _encode_ObjectInstance,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/ObjectInstance.ta.mjs';
/* START_OF_SYMBOL_DEFINITION ConvertPtoPToMulticastInfo */
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
/* END_OF_SYMBOL_DEFINITION ConvertPtoPToMulticastInfo */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ConvertPtoPToMulticastInfo */
let _cached_decoder_for_ConvertPtoPToMulticastInfo: $.ASN1Decoder<ConvertPtoPToMulticastInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ConvertPtoPToMulticastInfo */

/* START_OF_SYMBOL_DEFINITION _decode_ConvertPtoPToMulticastInfo */
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
/* END_OF_SYMBOL_DEFINITION _decode_ConvertPtoPToMulticastInfo */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ConvertPtoPToMulticastInfo */
let _cached_encoder_for_ConvertPtoPToMulticastInfo: $.ASN1Encoder<ConvertPtoPToMulticastInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ConvertPtoPToMulticastInfo */

/* START_OF_SYMBOL_DEFINITION _encode_ConvertPtoPToMulticastInfo */
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

/* END_OF_SYMBOL_DEFINITION _encode_ConvertPtoPToMulticastInfo */

/* eslint-enable */
