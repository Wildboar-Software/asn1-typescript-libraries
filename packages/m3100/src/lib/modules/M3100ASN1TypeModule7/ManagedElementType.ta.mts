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
    ManagedElementType_Item,
    _decode_ManagedElementType_Item,
    _encode_ManagedElementType_Item,
} from '../M3100ASN1TypeModule7/ManagedElementType-Item.ta.mjs';

/**
 * @summary ManagedElementType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ManagedElementType  ::=
 *   SET OF CHOICE {meTypeString  GraphicString,
 *                  meTypeOID     OBJECT IDENTIFIER}
 * ```
 */
export type ManagedElementType = ManagedElementType_Item[]; // SetOfType


let _cached_decoder_for_ManagedElementType: $.ASN1Decoder<ManagedElementType> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) ManagedElementType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ManagedElementType} The decoded data structure.
 */
export function _decode_ManagedElementType(el: _Element): ManagedElementType {
    if (!_cached_decoder_for_ManagedElementType) {
        _cached_decoder_for_ManagedElementType = $._decodeSetOf<ManagedElementType_Item>(
            () => _decode_ManagedElementType_Item
        );
    }
    return _cached_decoder_for_ManagedElementType(el);
}


let _cached_encoder_for_ManagedElementType: $.ASN1Encoder<ManagedElementType> | null = null;


/**
 * @summary Encodes a(n) ManagedElementType into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ManagedElementType, encoded as an ASN.1 Element.
 */
export function _encode_ManagedElementType(
    value: ManagedElementType,
    elGetter: $.ASN1Encoder<ManagedElementType>
): _Element {
    if (!_cached_encoder_for_ManagedElementType) {
        _cached_encoder_for_ManagedElementType = $._encodeSetOf<ManagedElementType_Item>(
            () => _encode_ManagedElementType_Item,
            $.BER
        );
    }
    return _cached_encoder_for_ManagedElementType(value, elGetter);
}


/* eslint-enable */
