/* eslint-disable */
import {
    OBJECT_IDENTIFIER,
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
    IntegerDataType,
    _decode_IntegerDataType,
    _encode_IntegerDataType,
} from '../TestCategories-ASN1Module/IntegerDataType.ta.mjs';
/**
 * @summary DataType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DataType  ::=  CHOICE {
 *   integerDataType           IntegerDataType,
 *   objectIdentifierDataType  OBJECT IDENTIFIER
 * }
 * ```
 */
export type DataType =
    | { integerDataType: IntegerDataType } /* CHOICE_ALT_ROOT */
    | { objectIdentifierDataType: OBJECT_IDENTIFIER } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_DataType: $.ASN1Decoder<DataType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DataType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DataType} The decoded data structure.
 */
export function _decode_DataType(el: _Element): DataType {
    if (!_cached_decoder_for_DataType) {
        _cached_decoder_for_DataType = $._decode_inextensible_choice<DataType>({
            'UNIVERSAL 2': ['integerDataType', _decode_IntegerDataType],
            'UNIVERSAL 6': [
                'objectIdentifierDataType',
                $._decodeObjectIdentifier,
            ],
        });
    }
    return _cached_decoder_for_DataType(el);
}

let _cached_encoder_for_DataType: $.ASN1Encoder<DataType> | null = null;

/**
 * @summary Encodes a(n) DataType into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DataType, encoded as an ASN.1 Element.
 */
export function _encode_DataType(
    value: DataType,
    elGetter: $.ASN1Encoder<DataType>
): _Element {
    if (!_cached_encoder_for_DataType) {
        _cached_encoder_for_DataType = $._encode_choice<DataType>(
            {
                integerDataType: _encode_IntegerDataType,
                objectIdentifierDataType: $._encodeObjectIdentifier,
            },
            $.BER
        );
    }
    return _cached_encoder_for_DataType(value, elGetter);
}


/* eslint-enable */
