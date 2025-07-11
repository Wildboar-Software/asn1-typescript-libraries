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
 * @summary TpsInGtpList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TpsInGtpList  ::=  SEQUENCE OF ObjectInstance
 * ```
 */
export type TpsInGtpList = ObjectInstance[]; // SequenceOfType


let _cached_decoder_for_TpsInGtpList: $.ASN1Decoder<TpsInGtpList> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) TpsInGtpList
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TpsInGtpList} The decoded data structure.
 */
export function _decode_TpsInGtpList(el: _Element): TpsInGtpList {
    if (!_cached_decoder_for_TpsInGtpList) {
        _cached_decoder_for_TpsInGtpList = $._decodeSequenceOf<ObjectInstance>(
            () => _decode_ObjectInstance
        );
    }
    return _cached_decoder_for_TpsInGtpList(el);
}


let _cached_encoder_for_TpsInGtpList: $.ASN1Encoder<TpsInGtpList> | null = null;


/**
 * @summary Encodes a(n) TpsInGtpList into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TpsInGtpList, encoded as an ASN.1 Element.
 */
export function _encode_TpsInGtpList(
    value: TpsInGtpList,
    elGetter: $.ASN1Encoder<TpsInGtpList>
): _Element {
    if (!_cached_encoder_for_TpsInGtpList) {
        _cached_encoder_for_TpsInGtpList = $._encodeSequenceOf<ObjectInstance>(
            () => _encode_ObjectInstance,
            $.BER
        );
    }
    return _cached_encoder_for_TpsInGtpList(value, elGetter);
}


/* eslint-enable */
