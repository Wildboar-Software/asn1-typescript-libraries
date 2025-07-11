/* eslint-disable */
import {
    OPTIONAL,
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
    TemplateList,
    _decode_TemplateList,
    _encode_TemplateList,
} from '../DefinitionASN1Module/TemplateList.ta.mjs';
/**
 * @summary LabelAndParameters
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * LabelAndParameters ::= SEQUENCE {
 *   label       TemplateLabel,
 *   parameters  TemplateList OPTIONAL
 * }
 * ```
 *
 */
export class LabelAndParameters {
    constructor(
        /**
         * @summary `label`.
         * @public
         * @readonly
         */
        readonly label: TemplateLabel,
        /**
         * @summary `parameters`.
         * @public
         * @readonly
         */
        readonly parameters: OPTIONAL<TemplateList>
    ) {}

    /**
     * @summary Restructures an object into a LabelAndParameters
     * @description
     *
     * This takes an `object` and converts it to a `LabelAndParameters`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `LabelAndParameters`.
     * @returns {LabelAndParameters}
     */
    public static _from_object(
        _o: { [_K in keyof LabelAndParameters]: LabelAndParameters[_K] }
    ): LabelAndParameters {
        return new LabelAndParameters(_o.label, _o.parameters);
    }
}

/**
 * @summary The Leading Root Component Types of LabelAndParameters
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_LabelAndParameters: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'label',
        false,
        $.hasTag(_TagClass.universal, 16)
    ),
    new $.ComponentSpec(
        'parameters',
        true,
        $.hasTag(_TagClass.universal, 17)
    ),
];

/**
 * @summary The Trailing Root Component Types of LabelAndParameters
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_LabelAndParameters: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of LabelAndParameters
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_LabelAndParameters: $.ComponentSpec[] = [];

let _cached_decoder_for_LabelAndParameters: $.ASN1Decoder<LabelAndParameters> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LabelAndParameters
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {LabelAndParameters} The decoded data structure.
 */
export function _decode_LabelAndParameters(el: _Element): LabelAndParameters {
    if (!_cached_decoder_for_LabelAndParameters) {
        _cached_decoder_for_LabelAndParameters = function (
            el: _Element
        ): LabelAndParameters {
            let label!: TemplateLabel;
            let parameters: OPTIONAL<TemplateList>;
            const callbacks: $.DecodingMap = {
                label: (_el: _Element): void => {
                    label = _decode_TemplateLabel(_el);
                },
                parameters: (_el: _Element): void => {
                    parameters = _decode_TemplateList(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_LabelAndParameters,
                _extension_additions_list_spec_for_LabelAndParameters,
                _root_component_type_list_2_spec_for_LabelAndParameters,
                undefined
            );
            return new LabelAndParameters (
                label,
                parameters
            );
        };
    }
    return _cached_decoder_for_LabelAndParameters(el);
}

let _cached_encoder_for_LabelAndParameters: $.ASN1Encoder<LabelAndParameters> | null = null;

/**
 * @summary Encodes a(n) LabelAndParameters into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LabelAndParameters, encoded as an ASN.1 Element.
 */
export function _encode_LabelAndParameters(
    value: LabelAndParameters,
    elGetter: $.ASN1Encoder<LabelAndParameters>
): _Element {
    if (!_cached_encoder_for_LabelAndParameters) {
        _cached_encoder_for_LabelAndParameters = function (
            value: LabelAndParameters        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_TemplateLabel(
                            value.label,
                            $.BER
                        ),
                        /* IF_ABSENT  */ value.parameters === undefined
                            ? undefined
                            : _encode_TemplateList(value.parameters, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_LabelAndParameters(value, elGetter);
}


/* eslint-enable */
