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
    AttributeId,
    _decode_AttributeId,
    _encode_AttributeId,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/AttributeId.ta.mjs';
/* START_OF_SYMBOL_DEFINITION NumericAttributeIdList */
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
/* END_OF_SYMBOL_DEFINITION NumericAttributeIdList */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_NumericAttributeIdList */
let _cached_decoder_for_NumericAttributeIdList: $.ASN1Decoder<NumericAttributeIdList> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_NumericAttributeIdList */

/* START_OF_SYMBOL_DEFINITION _decode_NumericAttributeIdList */
/**
 * @summary Decodes an ASN.1 element into a(n) NumericAttributeIdList
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {NumericAttributeIdList} The decoded data structure.
 */
export function _decode_NumericAttributeIdList(el: _Element) {
    if (!_cached_decoder_for_NumericAttributeIdList) {
        _cached_decoder_for_NumericAttributeIdList = $._decodeSetOf<AttributeId>(
            () => _decode_AttributeId
        );
    }
    return _cached_decoder_for_NumericAttributeIdList(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_NumericAttributeIdList */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_NumericAttributeIdList */
let _cached_encoder_for_NumericAttributeIdList: $.ASN1Encoder<NumericAttributeIdList> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_NumericAttributeIdList */

/* START_OF_SYMBOL_DEFINITION _encode_NumericAttributeIdList */
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
) {
    if (!_cached_encoder_for_NumericAttributeIdList) {
        _cached_encoder_for_NumericAttributeIdList = $._encodeSetOf<AttributeId>(
            () => _encode_AttributeId,
            $.BER
        );
    }
    return _cached_encoder_for_NumericAttributeIdList(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_NumericAttributeIdList */

/* eslint-enable */
