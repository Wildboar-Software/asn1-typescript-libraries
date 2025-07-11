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
    DefinedValue,
    _decode_DefinedValue,
    _encode_DefinedValue,
} from '../DefinitionASN1Module/DefinedValue.ta.mjs';
import {
    TemplateLabel,
    _decode_TemplateLabel,
    _encode_TemplateLabel,
} from '../DefinitionASN1Module/TemplateLabel.ta.mjs';

/**
 * @summary ValueSpecifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ValueSpecifier  ::=  CHOICE {
 *   valueReference  [0]  DefinedValue,
 *   derivationRule  [1]  TemplateLabel
 * }
 * ```
 */
export type ValueSpecifier =
    | { valueReference: DefinedValue } /* CHOICE_ALT_ROOT */
    | { derivationRule: TemplateLabel } /* CHOICE_ALT_ROOT */;


let _cached_decoder_for_ValueSpecifier: $.ASN1Decoder<ValueSpecifier> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) ValueSpecifier
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ValueSpecifier} The decoded data structure.
 */
export function _decode_ValueSpecifier(el: _Element): ValueSpecifier {
    if (!_cached_decoder_for_ValueSpecifier) {
        _cached_decoder_for_ValueSpecifier = $._decode_inextensible_choice<ValueSpecifier>(
            {
                'CONTEXT 0': [
                    'valueReference',
                    $._decode_implicit<DefinedValue>(
                        () => _decode_DefinedValue
                    ),
                ],
                'CONTEXT 1': [
                    'derivationRule',
                    $._decode_implicit<TemplateLabel>(
                        () => _decode_TemplateLabel
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_ValueSpecifier(el);
}


let _cached_encoder_for_ValueSpecifier: $.ASN1Encoder<ValueSpecifier> | null = null;


/**
 * @summary Encodes a(n) ValueSpecifier into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ValueSpecifier, encoded as an ASN.1 Element.
 */
export function _encode_ValueSpecifier(
    value: ValueSpecifier,
    elGetter: $.ASN1Encoder<ValueSpecifier>
): _Element {
    if (!_cached_encoder_for_ValueSpecifier) {
        _cached_encoder_for_ValueSpecifier = $._encode_choice<ValueSpecifier>(
            {
                valueReference: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_DefinedValue,
                    $.BER
                ),
                derivationRule: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_TemplateLabel,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_ValueSpecifier(value, elGetter);
}


/* eslint-enable */
