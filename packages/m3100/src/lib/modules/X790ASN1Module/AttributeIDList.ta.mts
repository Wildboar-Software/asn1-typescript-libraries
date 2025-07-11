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
 * @summary AttributeIDList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AttributeIDList  ::=  SET OF AttributeId
 * ```
 */
export type AttributeIDList = AttributeId[]; // SetOfType


let _cached_decoder_for_AttributeIDList: $.ASN1Decoder<AttributeIDList> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) AttributeIDList
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AttributeIDList} The decoded data structure.
 */
export function _decode_AttributeIDList(el: _Element): AttributeIDList {
    if (!_cached_decoder_for_AttributeIDList) {
        _cached_decoder_for_AttributeIDList = $._decodeSetOf<AttributeId>(
            () => _decode_AttributeId
        );
    }
    return _cached_decoder_for_AttributeIDList(el);
}


let _cached_encoder_for_AttributeIDList: $.ASN1Encoder<AttributeIDList> | null = null;


/**
 * @summary Encodes a(n) AttributeIDList into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttributeIDList, encoded as an ASN.1 Element.
 */
export function _encode_AttributeIDList(
    value: AttributeIDList,
    elGetter: $.ASN1Encoder<AttributeIDList>
): _Element {
    if (!_cached_encoder_for_AttributeIDList) {
        _cached_encoder_for_AttributeIDList = $._encodeSetOf<AttributeId>(
            () => _encode_AttributeId,
            $.BER
        );
    }
    return _cached_encoder_for_AttributeIDList(value, elGetter);
}


/* eslint-enable */
