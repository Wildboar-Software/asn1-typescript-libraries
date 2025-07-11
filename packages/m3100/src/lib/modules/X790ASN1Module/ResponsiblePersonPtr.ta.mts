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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
import {
    ObjectInstance,
    _decode_ObjectInstance,
    _encode_ObjectInstance,
} from '@wildboar/cmip';

/**
 * @summary ResponsiblePersonPtr
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ResponsiblePersonPtr  ::=  CHOICE {
 *   null            NULL,
 *   objectInstance  ObjectInstance,
 *   ...
 * }
 * ```
 */
export type ResponsiblePersonPtr =
    | { null_: NULL } /* CHOICE_ALT_ROOT */
    | { objectInstance: ObjectInstance } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;


let _cached_decoder_for_ResponsiblePersonPtr: $.ASN1Decoder<ResponsiblePersonPtr> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) ResponsiblePersonPtr
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ResponsiblePersonPtr} The decoded data structure.
 */
export function _decode_ResponsiblePersonPtr(el: _Element): ResponsiblePersonPtr {
    if (!_cached_decoder_for_ResponsiblePersonPtr) {
        _cached_decoder_for_ResponsiblePersonPtr = $._decode_extensible_choice<ResponsiblePersonPtr>(
            {
                'UNIVERSAL 5': ['null_', $._decodeNull],
                'CONTEXT 2': ['objectInstance', _decode_ObjectInstance],
                'CONTEXT 3': ['objectInstance', _decode_ObjectInstance],
                'CONTEXT 4': ['objectInstance', _decode_ObjectInstance],
            }
        );
    }
    return _cached_decoder_for_ResponsiblePersonPtr(el);
}


let _cached_encoder_for_ResponsiblePersonPtr: $.ASN1Encoder<ResponsiblePersonPtr> | null = null;


/**
 * @summary Encodes a(n) ResponsiblePersonPtr into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ResponsiblePersonPtr, encoded as an ASN.1 Element.
 */
export function _encode_ResponsiblePersonPtr(
    value: ResponsiblePersonPtr,
    elGetter: $.ASN1Encoder<ResponsiblePersonPtr>
): _Element {
    if (!_cached_encoder_for_ResponsiblePersonPtr) {
        _cached_encoder_for_ResponsiblePersonPtr = $._encode_choice<ResponsiblePersonPtr>(
            {
                null_: $._encodeNull,
                objectInstance: _encode_ObjectInstance,
            },
            $.BER
        );
    }
    return _cached_encoder_for_ResponsiblePersonPtr(value, elGetter);
}


/* eslint-enable */
