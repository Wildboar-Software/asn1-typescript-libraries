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
} from '@wildboar/cmip/src/lib/modules/CMIP-1/ObjectInstance.ta.mjs';

/**
 * @summary RelatedObject
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RelatedObject  ::=  CHOICE {noObject  NULL,
 *                           object    ObjectInstance,
 *                           ...
 * }
 * ```
 */
export type RelatedObject =
    | { noObject: NULL } /* CHOICE_ALT_ROOT */
    | { object: ObjectInstance } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;


let _cached_decoder_for_RelatedObject: $.ASN1Decoder<RelatedObject> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) RelatedObject
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RelatedObject} The decoded data structure.
 */
export function _decode_RelatedObject(el: _Element) {
    if (!_cached_decoder_for_RelatedObject) {
        _cached_decoder_for_RelatedObject = $._decode_extensible_choice<RelatedObject>(
            {
                'UNIVERSAL 5': ['noObject', $._decodeNull],
                'CONTEXT 2': ['object', _decode_ObjectInstance],
                'CONTEXT 3': ['object', _decode_ObjectInstance],
                'CONTEXT 4': ['object', _decode_ObjectInstance],
            }
        );
    }
    return _cached_decoder_for_RelatedObject(el);
}


let _cached_encoder_for_RelatedObject: $.ASN1Encoder<RelatedObject> | null = null;


/**
 * @summary Encodes a(n) RelatedObject into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RelatedObject, encoded as an ASN.1 Element.
 */
export function _encode_RelatedObject(
    value: RelatedObject,
    elGetter: $.ASN1Encoder<RelatedObject>
) {
    if (!_cached_encoder_for_RelatedObject) {
        _cached_encoder_for_RelatedObject = $._encode_choice<RelatedObject>(
            {
                noObject: $._encodeNull,
                object: _encode_ObjectInstance,
            },
            $.BER
        );
    }
    return _cached_encoder_for_RelatedObject(value, elGetter);
}


/* eslint-enable */
