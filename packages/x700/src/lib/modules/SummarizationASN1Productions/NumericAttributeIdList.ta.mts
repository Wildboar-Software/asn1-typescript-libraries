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
    AttributeId,
    _decode_AttributeId,
    _encode_AttributeId,
} from '@wildboar/cmip';
/**
 * @summary NumericAttributeIdList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NumericAttributeIdList  ::=  SET OF AttributeId
 * ```
 */
export type NumericAttributeIdList = AttributeId[]; // SetOfType

let _cached_decoder_for_NumericAttributeIdList: $.ASN1Decoder<NumericAttributeIdList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NumericAttributeIdList
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {NumericAttributeIdList} The decoded data structure.
 */
export function _decode_NumericAttributeIdList(el: _Element): NumericAttributeIdList {
    if (!_cached_decoder_for_NumericAttributeIdList) {
        _cached_decoder_for_NumericAttributeIdList = $._decodeSetOf<AttributeId>(
            () => _decode_AttributeId
        );
    }
    return _cached_decoder_for_NumericAttributeIdList(el);
}

let _cached_encoder_for_NumericAttributeIdList: $.ASN1Encoder<NumericAttributeIdList> | null = null;

/**
 * @summary Encodes a(n) NumericAttributeIdList into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NumericAttributeIdList, encoded as an ASN.1 Element.
 */
export function _encode_NumericAttributeIdList(
    value: NumericAttributeIdList,
    elGetter: $.ASN1Encoder<NumericAttributeIdList>
): _Element {
    if (!_cached_encoder_for_NumericAttributeIdList) {
        _cached_encoder_for_NumericAttributeIdList = $._encodeSetOf<AttributeId>(
            () => _encode_AttributeId,
            $.BER
        );
    }
    return _cached_encoder_for_NumericAttributeIdList(value, elGetter);
}


/* eslint-enable */
