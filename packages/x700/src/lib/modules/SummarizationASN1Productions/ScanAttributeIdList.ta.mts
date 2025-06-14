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
/* START_OF_SYMBOL_DEFINITION ScanAttributeIdList */
/**
 * @summary ScanAttributeIdList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ScanAttributeIdList  ::=  SET OF AttributeId
 * ```
 */
export type ScanAttributeIdList = AttributeId[]; // SetOfType
/* END_OF_SYMBOL_DEFINITION ScanAttributeIdList */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ScanAttributeIdList */
let _cached_decoder_for_ScanAttributeIdList: $.ASN1Decoder<ScanAttributeIdList> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ScanAttributeIdList */

/* START_OF_SYMBOL_DEFINITION _decode_ScanAttributeIdList */
/**
 * @summary Decodes an ASN.1 element into a(n) ScanAttributeIdList
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ScanAttributeIdList} The decoded data structure.
 */
export function _decode_ScanAttributeIdList(el: _Element) {
    if (!_cached_decoder_for_ScanAttributeIdList) {
        _cached_decoder_for_ScanAttributeIdList = $._decodeSetOf<AttributeId>(
            () => _decode_AttributeId
        );
    }
    return _cached_decoder_for_ScanAttributeIdList(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ScanAttributeIdList */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ScanAttributeIdList */
let _cached_encoder_for_ScanAttributeIdList: $.ASN1Encoder<ScanAttributeIdList> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ScanAttributeIdList */

/* START_OF_SYMBOL_DEFINITION _encode_ScanAttributeIdList */
/**
 * @summary Encodes a(n) ScanAttributeIdList into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ScanAttributeIdList, encoded as an ASN.1 Element.
 */
export function _encode_ScanAttributeIdList(
    value: ScanAttributeIdList,
    elGetter: $.ASN1Encoder<ScanAttributeIdList>
) {
    if (!_cached_encoder_for_ScanAttributeIdList) {
        _cached_encoder_for_ScanAttributeIdList = $._encodeSetOf<AttributeId>(
            () => _encode_AttributeId,
            $.BER
        );
    }
    return _cached_encoder_for_ScanAttributeIdList(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ScanAttributeIdList */

/* eslint-enable */
