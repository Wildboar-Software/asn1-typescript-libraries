/* eslint-disable */
import {
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
    TemplateLabel,
    _decode_TemplateLabel,
    _encode_TemplateLabel,
} from '../DefinitionASN1Module/TemplateLabel.ta.mjs';
import {
    DefinedType,
    _decode_DefinedType,
    _encode_DefinedType,
} from '../DefinitionASN1Module/DefinedType.ta.mjs';

/**
 * @summary DerivedOrWithSyntaxChoice
 * @description
 *
 * GDMO attribute `DERIVED FROM` or `WITH ATTRIBUTE SYNTAX`. `derivedFrom`
 * inherits another attribute template; `withSyntaxChoice` names the
 * ASN.1 type used in protocol (present only when `DERIVED FROM` is
 * absent). Syntax of `derivedOrWithSyntaxChoice`. ITU-T Rec. X.750
 * (10/96)
 * [§8.1.2.4](https://www.itu.int/rec/T-REC-X.750-199610-I),
 * [A.3.3](https://www.itu.int/rec/T-REC-X.750-199610-I). GDMO: X.722
 * (01/92)
 * [§8.7.3.1](https://www.itu.int/rec/T-REC-X.722-199201-I)–[§8.7.3.2](https://www.itu.int/rec/T-REC-X.722-199201-I).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DerivedOrWithSyntaxChoice  ::=  CHOICE {
 *   derivedFrom       [0]  TemplateLabel,
 *   withSyntaxChoice  [1]  DefinedType
 * }
 * ```
 */
export type DerivedOrWithSyntaxChoice =
    | { derivedFrom: TemplateLabel } /* CHOICE_ALT_ROOT */
    | { withSyntaxChoice: DefinedType } /* CHOICE_ALT_ROOT */;


let _cached_decoder_for_DerivedOrWithSyntaxChoice: $.ASN1Decoder<DerivedOrWithSyntaxChoice> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) DerivedOrWithSyntaxChoice
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DerivedOrWithSyntaxChoice} The decoded data structure.
 */
export function _decode_DerivedOrWithSyntaxChoice(el: _Element): DerivedOrWithSyntaxChoice {
    if (!_cached_decoder_for_DerivedOrWithSyntaxChoice) {
        _cached_decoder_for_DerivedOrWithSyntaxChoice = $._decode_inextensible_choice<DerivedOrWithSyntaxChoice>(
            {
                'CONTEXT 0': [
                    'derivedFrom',
                    $._decode_implicit<TemplateLabel>(
                        () => _decode_TemplateLabel
                    ),
                ],
                'CONTEXT 1': [
                    'withSyntaxChoice',
                    $._decode_implicit<DefinedType>(() => _decode_DefinedType),
                ],
            }
        );
    }
    return _cached_decoder_for_DerivedOrWithSyntaxChoice(el);
}


let _cached_encoder_for_DerivedOrWithSyntaxChoice: $.ASN1Encoder<DerivedOrWithSyntaxChoice> | null = null;


/**
 * @summary Encodes a(n) DerivedOrWithSyntaxChoice into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DerivedOrWithSyntaxChoice, encoded as an ASN.1 Element.
 */
export function _encode_DerivedOrWithSyntaxChoice(
    value: DerivedOrWithSyntaxChoice,
    elGetter: $.ASN1Encoder<DerivedOrWithSyntaxChoice>
): _Element {
    if (!_cached_encoder_for_DerivedOrWithSyntaxChoice) {
        _cached_encoder_for_DerivedOrWithSyntaxChoice = $._encode_choice<DerivedOrWithSyntaxChoice>(
            {
                derivedFrom: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_TemplateLabel,
                    $.BER
                ),
                withSyntaxChoice: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_DefinedType,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_DerivedOrWithSyntaxChoice(value, elGetter);
}


/* eslint-enable */
