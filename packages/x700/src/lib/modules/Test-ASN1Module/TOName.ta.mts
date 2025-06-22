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
import * as $ from '@wildboar/asn1/functional';
import {
    ObjectInstance,
    _decode_ObjectInstance,
    _encode_ObjectInstance,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/ObjectInstance.ta.mjs';
/**
 * @summary TOName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TOName  ::=  CHOICE {
 *   conductorProvidedName  NULL,
 *   performerProvidedName  ObjectInstance
 * }
 * ```
 */
export type TOName =
    | { conductorProvidedName: NULL } /* CHOICE_ALT_ROOT */
    | { performerProvidedName: ObjectInstance } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_TOName: $.ASN1Decoder<TOName> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TOName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TOName} The decoded data structure.
 */
export function _decode_TOName(el: _Element) {
    if (!_cached_decoder_for_TOName) {
        _cached_decoder_for_TOName = $._decode_inextensible_choice<TOName>({
            'UNIVERSAL 5': ['conductorProvidedName', $._decodeNull],
            'CONTEXT 2': ['performerProvidedName', _decode_ObjectInstance],
            'CONTEXT 3': ['performerProvidedName', _decode_ObjectInstance],
            'CONTEXT 4': ['performerProvidedName', _decode_ObjectInstance],
        });
    }
    return _cached_decoder_for_TOName(el);
}

let _cached_encoder_for_TOName: $.ASN1Encoder<TOName> | null = null;

/**
 * @summary Encodes a(n) TOName into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TOName, encoded as an ASN.1 Element.
 */
export function _encode_TOName(value: TOName, elGetter: $.ASN1Encoder<TOName>) {
    if (!_cached_encoder_for_TOName) {
        _cached_encoder_for_TOName = $._encode_choice<TOName>(
            {
                conductorProvidedName: $._encodeNull,
                performerProvidedName: _encode_ObjectInstance,
            },
            $.BER
        );
    }
    return _cached_encoder_for_TOName(value, elGetter);
}


/* eslint-enable */
