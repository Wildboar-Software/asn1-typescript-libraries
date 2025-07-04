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
    ObjectInstance,
    _decode_ObjectInstance,
    _encode_ObjectInstance,
} from '@wildboar/cmip';

/**
 * @summary SplitXCInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SplitXCInfo  ::=  SEQUENCE OF ObjectInstance
 * ```
 */
export type SplitXCInfo = ObjectInstance[]; // SequenceOfType


let _cached_decoder_for_SplitXCInfo: $.ASN1Decoder<SplitXCInfo> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) SplitXCInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SplitXCInfo} The decoded data structure.
 */
export function _decode_SplitXCInfo(el: _Element): SplitXCInfo {
    if (!_cached_decoder_for_SplitXCInfo) {
        _cached_decoder_for_SplitXCInfo = $._decodeSequenceOf<ObjectInstance>(
            () => _decode_ObjectInstance
        );
    }
    return _cached_decoder_for_SplitXCInfo(el);
}


let _cached_encoder_for_SplitXCInfo: $.ASN1Encoder<SplitXCInfo> | null = null;


/**
 * @summary Encodes a(n) SplitXCInfo into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SplitXCInfo, encoded as an ASN.1 Element.
 */
export function _encode_SplitXCInfo(
    value: SplitXCInfo,
    elGetter: $.ASN1Encoder<SplitXCInfo>
): _Element {
    if (!_cached_encoder_for_SplitXCInfo) {
        _cached_encoder_for_SplitXCInfo = $._encodeSequenceOf<ObjectInstance>(
            () => _encode_ObjectInstance,
            $.BER
        );
    }
    return _cached_encoder_for_SplitXCInfo(value, elGetter);
}


/* eslint-enable */
