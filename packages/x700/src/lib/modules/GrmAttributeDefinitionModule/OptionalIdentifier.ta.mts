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
    Identifier,
    _decode_Identifier,
    _encode_Identifier,
} from '../DefinitionASN1Module/Identifier.ta.mjs';
/**
 * @summary OptionalIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OptionalIdentifier  ::=  CHOICE {present  Identifier,
 *                                absent   NULL
 * }
 * ```
 */
export type OptionalIdentifier =
    | { present: Identifier } /* CHOICE_ALT_ROOT */
    | { absent: NULL } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_OptionalIdentifier: $.ASN1Decoder<OptionalIdentifier> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) OptionalIdentifier
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OptionalIdentifier} The decoded data structure.
 */
export function _decode_OptionalIdentifier(el: _Element): OptionalIdentifier {
    if (!_cached_decoder_for_OptionalIdentifier) {
        _cached_decoder_for_OptionalIdentifier = $._decode_inextensible_choice<OptionalIdentifier>(
            {
                'UNIVERSAL 19': ['present', _decode_Identifier],
                'UNIVERSAL 5': ['absent', $._decodeNull],
            }
        );
    }
    return _cached_decoder_for_OptionalIdentifier(el);
}

let _cached_encoder_for_OptionalIdentifier: $.ASN1Encoder<OptionalIdentifier> | null = null;

/**
 * @summary Encodes a(n) OptionalIdentifier into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OptionalIdentifier, encoded as an ASN.1 Element.
 */
export function _encode_OptionalIdentifier(
    value: OptionalIdentifier,
    elGetter: $.ASN1Encoder<OptionalIdentifier>
): _Element {
    if (!_cached_encoder_for_OptionalIdentifier) {
        _cached_encoder_for_OptionalIdentifier = $._encode_choice<OptionalIdentifier>(
            {
                present: _encode_Identifier,
                absent: $._encodeNull,
            },
            $.BER
        );
    }
    return _cached_encoder_for_OptionalIdentifier(value, elGetter);
}


/* eslint-enable */
