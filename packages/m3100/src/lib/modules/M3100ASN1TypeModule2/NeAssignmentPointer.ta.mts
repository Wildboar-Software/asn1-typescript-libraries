/* eslint-disable */
import {
    NULL,
    GraphicString,
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
 * @summary NeAssignmentPointer
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NeAssignmentPointer  ::=  CHOICE {
 *   notAvailable   NULL,
 *   relatedObject  ObjectInstance,
 *   string         GraphicString
 * }
 * ```
 */
export type NeAssignmentPointer =
    | { notAvailable: NULL } /* CHOICE_ALT_ROOT */
    | { relatedObject: ObjectInstance } /* CHOICE_ALT_ROOT */
    | { string_: GraphicString } /* CHOICE_ALT_ROOT */;


let _cached_decoder_for_NeAssignmentPointer: $.ASN1Decoder<NeAssignmentPointer> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) NeAssignmentPointer
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {NeAssignmentPointer} The decoded data structure.
 */
export function _decode_NeAssignmentPointer(el: _Element): NeAssignmentPointer {
    if (!_cached_decoder_for_NeAssignmentPointer) {
        _cached_decoder_for_NeAssignmentPointer = $._decode_inextensible_choice<NeAssignmentPointer>(
            {
                'UNIVERSAL 5': ['notAvailable', $._decodeNull],
                'CONTEXT 2': ['relatedObject', _decode_ObjectInstance],
                'CONTEXT 3': ['relatedObject', _decode_ObjectInstance],
                'CONTEXT 4': ['relatedObject', _decode_ObjectInstance],
                'UNIVERSAL 25': ['string_', $._decodeGraphicString],
            }
        );
    }
    return _cached_decoder_for_NeAssignmentPointer(el);
}


let _cached_encoder_for_NeAssignmentPointer: $.ASN1Encoder<NeAssignmentPointer> | null = null;


/**
 * @summary Encodes a(n) NeAssignmentPointer into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NeAssignmentPointer, encoded as an ASN.1 Element.
 */
export function _encode_NeAssignmentPointer(
    value: NeAssignmentPointer,
    elGetter: $.ASN1Encoder<NeAssignmentPointer>
): _Element {
    if (!_cached_encoder_for_NeAssignmentPointer) {
        _cached_encoder_for_NeAssignmentPointer = $._encode_choice<NeAssignmentPointer>(
            {
                notAvailable: $._encodeNull,
                relatedObject: _encode_ObjectInstance,
                string_: $._encodeGraphicString,
            },
            $.BER
        );
    }
    return _cached_encoder_for_NeAssignmentPointer(value, elGetter);
}


/* eslint-enable */
