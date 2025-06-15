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
    DefinedType,
    _decode_DefinedType,
    _encode_DefinedType,
} from '../DefinitionASN1Module/DefinedType.ta.mjs';

/**
 * @summary WithSyntax
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * WithSyntax  ::=  CHOICE {present  DefinedType,
 *                        absent   NULL
 * }
 * ```
 */
export type WithSyntax =
    | { present: DefinedType } /* CHOICE_ALT_ROOT */
    | { absent: NULL } /* CHOICE_ALT_ROOT */;


let _cached_decoder_for_WithSyntax: $.ASN1Decoder<WithSyntax> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) WithSyntax
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {WithSyntax} The decoded data structure.
 */
export function _decode_WithSyntax(el: _Element) {
    if (!_cached_decoder_for_WithSyntax) {
        _cached_decoder_for_WithSyntax = $._decode_inextensible_choice<WithSyntax>(
            {
                'UNIVERSAL 16': ['present', _decode_DefinedType],
                'UNIVERSAL 5': ['absent', $._decodeNull],
            }
        );
    }
    return _cached_decoder_for_WithSyntax(el);
}


let _cached_encoder_for_WithSyntax: $.ASN1Encoder<WithSyntax> | null = null;


/**
 * @summary Encodes a(n) WithSyntax into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The WithSyntax, encoded as an ASN.1 Element.
 */
export function _encode_WithSyntax(
    value: WithSyntax,
    elGetter: $.ASN1Encoder<WithSyntax>
) {
    if (!_cached_encoder_for_WithSyntax) {
        _cached_encoder_for_WithSyntax = $._encode_choice<WithSyntax>(
            {
                present: _encode_DefinedType,
                absent: $._encodeNull,
            },
            $.BER
        );
    }
    return _cached_encoder_for_WithSyntax(value, elGetter);
}


/* eslint-enable */
