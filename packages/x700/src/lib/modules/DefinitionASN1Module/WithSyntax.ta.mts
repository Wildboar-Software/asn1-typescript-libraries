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
    DefinedType,
    _decode_DefinedType,
    _encode_DefinedType,
} from '../DefinitionASN1Module/DefinedType.ta.mjs';

/**
 * @summary WithSyntax
 * @description
 *
 * GDMO `WITH INFORMATION SYNTAX` / `WITH REPLY SYNTAX`. `present` is
 * the ASN.1 type of the action/notification argument or reply; `absent`
 * (`NULL`) means that construct is omitted (no action- or
 * notification-specific information or reply). Syntax of
 * `withInformationSyntax` and `withReplySyntax`. ITU-T Rec. X.750
 * (10/96) [A.3.3](https://www.itu.int/rec/T-REC-X.750-199610-I). GDMO: X.722
 * (01/92)
 * [§8.10.3.4](https://www.itu.int/rec/T-REC-X.722-199201-I)–[§8.10.3.5](https://www.itu.int/rec/T-REC-X.722-199201-I),
 * [§8.11.3.3](https://www.itu.int/rec/T-REC-X.722-199201-I)–[§8.11.3.4](https://www.itu.int/rec/T-REC-X.722-199201-I).
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
export function _decode_WithSyntax(el: _Element): WithSyntax {
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
): _Element {
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
