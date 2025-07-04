/* eslint-disable */
import {
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
} from '@wildboar/cmip';
/**
 * @summary Patch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Patch  ::=  CHOICE {
 *   patchId       GraphicString, -- system specific identifier
 *   patchPointer  ObjectInstance
 * }
 * ```
 */
export type Patch =
    | { patchId: GraphicString } /* CHOICE_ALT_ROOT */
    | { patchPointer: ObjectInstance } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_Patch: $.ASN1Decoder<Patch> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Patch
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Patch} The decoded data structure.
 */
export function _decode_Patch(el: _Element): Patch {
    if (!_cached_decoder_for_Patch) {
        _cached_decoder_for_Patch = $._decode_inextensible_choice<Patch>({
            'UNIVERSAL 25': ['patchId', $._decodeGraphicString],
            'CONTEXT 2': ['patchPointer', _decode_ObjectInstance],
            'CONTEXT 3': ['patchPointer', _decode_ObjectInstance],
            'CONTEXT 4': ['patchPointer', _decode_ObjectInstance],
        });
    }
    return _cached_decoder_for_Patch(el);
}

let _cached_encoder_for_Patch: $.ASN1Encoder<Patch> | null = null;

/**
 * @summary Encodes a(n) Patch into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Patch, encoded as an ASN.1 Element.
 */
export function _encode_Patch(value: Patch, elGetter: $.ASN1Encoder<Patch>): _Element {
    if (!_cached_encoder_for_Patch) {
        _cached_encoder_for_Patch = $._encode_choice<Patch>(
            {
                patchId: $._encodeGraphicString,
                patchPointer: _encode_ObjectInstance,
            },
            $.BER
        );
    }
    return _cached_encoder_for_Patch(value, elGetter);
}


/* eslint-enable */
