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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';
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
/* START_OF_SYMBOL_DEFINITION DerivedOrWithSyntaxChoice */
/**
 * @summary DerivedOrWithSyntaxChoice
 * @description
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
/* END_OF_SYMBOL_DEFINITION DerivedOrWithSyntaxChoice */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DerivedOrWithSyntaxChoice */
let _cached_decoder_for_DerivedOrWithSyntaxChoice: $.ASN1Decoder<DerivedOrWithSyntaxChoice> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DerivedOrWithSyntaxChoice */

/* START_OF_SYMBOL_DEFINITION _decode_DerivedOrWithSyntaxChoice */
/**
 * @summary Decodes an ASN.1 element into a(n) DerivedOrWithSyntaxChoice
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DerivedOrWithSyntaxChoice} The decoded data structure.
 */
export function _decode_DerivedOrWithSyntaxChoice(el: _Element) {
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
/* END_OF_SYMBOL_DEFINITION _decode_DerivedOrWithSyntaxChoice */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DerivedOrWithSyntaxChoice */
let _cached_encoder_for_DerivedOrWithSyntaxChoice: $.ASN1Encoder<DerivedOrWithSyntaxChoice> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DerivedOrWithSyntaxChoice */

/* START_OF_SYMBOL_DEFINITION _encode_DerivedOrWithSyntaxChoice */
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
) {
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

/* END_OF_SYMBOL_DEFINITION _encode_DerivedOrWithSyntaxChoice */

/* eslint-enable */
