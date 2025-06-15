/* eslint-disable */
import {
    NULL,
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
    Name_classAndInstance,
    _decode_Name_classAndInstance,
    _encode_Name_classAndInstance,
} from '../X790ASN1Module/Name-classAndInstance.ta.mjs';

/**
 * @summary Name
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Name  ::=  CHOICE {
 *   null              NULL,
 *   classAndInstance
 *     SEQUENCE {managedObjectClass     ObjectClass,
 *               managedObjectInstance  ObjectInstance,
 *               ...},
 *   ...
 * }
 * ```
 */
export type Name =
    | { null_: NULL } /* CHOICE_ALT_ROOT */
    | { classAndInstance: Name_classAndInstance } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;


let _cached_decoder_for_Name: $.ASN1Decoder<Name> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) Name
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Name} The decoded data structure.
 */
export function _decode_Name(el: _Element) {
    if (!_cached_decoder_for_Name) {
        _cached_decoder_for_Name = $._decode_extensible_choice<Name>({
            'UNIVERSAL 5': ['null_', $._decodeNull],
            'UNIVERSAL 16': ['classAndInstance', _decode_Name_classAndInstance],
        });
    }
    return _cached_decoder_for_Name(el);
}


let _cached_encoder_for_Name: $.ASN1Encoder<Name> | null = null;


/**
 * @summary Encodes a(n) Name into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Name, encoded as an ASN.1 Element.
 */
export function _encode_Name(value: Name, elGetter: $.ASN1Encoder<Name>) {
    if (!_cached_encoder_for_Name) {
        _cached_encoder_for_Name = $._encode_choice<Name>(
            {
                null_: $._encodeNull,
                classAndInstance: _encode_Name_classAndInstance,
            },
            $.BER
        );
    }
    return _cached_encoder_for_Name(value, elGetter);
}


/* eslint-enable */
