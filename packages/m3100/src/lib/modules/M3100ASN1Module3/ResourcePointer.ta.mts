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
 * @summary ResourcePointer
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ResourcePointer  ::=  CHOICE {
 *   null             NULL,
 *   objectInstances  SET OF ObjectInstance
 * }
 * ```
 */
export type ResourcePointer =
    | { null_: NULL } /* CHOICE_ALT_ROOT */
    | { objectInstances: ObjectInstance[] } /* CHOICE_ALT_ROOT */;


let _cached_decoder_for_ResourcePointer: $.ASN1Decoder<ResourcePointer> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) ResourcePointer
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ResourcePointer} The decoded data structure.
 */
export function _decode_ResourcePointer(el: _Element): ResourcePointer {
    if (!_cached_decoder_for_ResourcePointer) {
        _cached_decoder_for_ResourcePointer = $._decode_inextensible_choice<ResourcePointer>(
            {
                'UNIVERSAL 5': ['null_', $._decodeNull],
                'UNIVERSAL 17': [
                    'objectInstances',
                    $._decodeSetOf<ObjectInstance>(
                        () => _decode_ObjectInstance
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_ResourcePointer(el);
}


let _cached_encoder_for_ResourcePointer: $.ASN1Encoder<ResourcePointer> | null = null;


/**
 * @summary Encodes a(n) ResourcePointer into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ResourcePointer, encoded as an ASN.1 Element.
 */
export function _encode_ResourcePointer(
    value: ResourcePointer,
    elGetter: $.ASN1Encoder<ResourcePointer>
): _Element {
    if (!_cached_encoder_for_ResourcePointer) {
        _cached_encoder_for_ResourcePointer = $._encode_choice<ResourcePointer>(
            {
                null_: $._encodeNull,
                objectInstances: $._encodeSetOf<ObjectInstance>(
                    () => _encode_ObjectInstance,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_ResourcePointer(value, elGetter);
}


/* eslint-enable */
