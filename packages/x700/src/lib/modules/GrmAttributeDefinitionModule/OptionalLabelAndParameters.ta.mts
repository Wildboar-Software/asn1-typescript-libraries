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
 * @summary OptionalLabelAndParameters
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OptionalLabelAndParameters ::= SEQUENCE {
 *   label       TemplateLabel OPTIONAL,
 *   parameters  TemplateList OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class OptionalLabelAndParameters {
    constructor(
        /**
         * @summary `label`.
         * @public
         * @readonly
         */
        readonly label: OPTIONAL<TemplateLabel>,
        /**
         * @summary `parameters`.
         * @public
         * @readonly
         */
        readonly parameters: OPTIONAL<TemplateList>
    ) {}

    /**
     * @summary Restructures an object into a OptionalLabelAndParameters
     * @description
     *
     * This takes an `object` and converts it to a `OptionalLabelAndParameters`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `OptionalLabelAndParameters`.
     * @returns {OptionalLabelAndParameters}
     */
    public static _from_object(
        _o: {
            [_K in keyof OptionalLabelAndParameters]: OptionalLabelAndParameters[_K];
        }
    ): OptionalLabelAndParameters {
        return new OptionalLabelAndParameters(_o.label, _o.parameters);
    }
}

/**
 * @summary The Leading Root Component Types of OptionalLabelAndParameters
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_OptionalLabelAndParameters: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'label',
        true,
        $.hasTag(_TagClass.universal, 16)
    ),
    new $.ComponentSpec(
        'parameters',
        true,
        $.hasTag(_TagClass.universal, 17)
    ),
];

/**
 * @summary The Trailing Root Component Types of OptionalLabelAndParameters
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_OptionalLabelAndParameters: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of OptionalLabelAndParameters
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_OptionalLabelAndParameters: $.ComponentSpec[] = [];

let _cached_decoder_for_OptionalLabelAndParameters: $.ASN1Decoder<OptionalLabelAndParameters> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) OptionalLabelAndParameters
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OptionalLabelAndParameters} The decoded data structure.
 */
export function _decode_OptionalLabelAndParameters(el: _Element) {
    if (!_cached_decoder_for_OptionalLabelAndParameters) {
        _cached_decoder_for_OptionalLabelAndParameters = function (
            el: _Element
        ): OptionalLabelAndParameters {
            let label: OPTIONAL<TemplateLabel>;
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
                _root_component_type_list_1_spec_for_OptionalLabelAndParameters,
                _extension_additions_list_spec_for_OptionalLabelAndParameters,
                _root_component_type_list_2_spec_for_OptionalLabelAndParameters,
                undefined
            );
            return new OptionalLabelAndParameters (
                label,
                parameters
            );
        };
    }
    return _cached_decoder_for_OptionalLabelAndParameters(el);
}

let _cached_encoder_for_OptionalLabelAndParameters: $.ASN1Encoder<OptionalLabelAndParameters> | null = null;

/**
 * @summary Encodes a(n) OptionalLabelAndParameters into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OptionalLabelAndParameters, encoded as an ASN.1 Element.
 */
export function _encode_OptionalLabelAndParameters(
    value: OptionalLabelAndParameters,
    elGetter: $.ASN1Encoder<OptionalLabelAndParameters>
) {
    if (!_cached_encoder_for_OptionalLabelAndParameters) {
        _cached_encoder_for_OptionalLabelAndParameters = function (
            value: OptionalLabelAndParameters        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.label === undefined
                            ? undefined
                            : _encode_TemplateLabel(value.label, $.BER),
                        /* IF_ABSENT  */ value.parameters === undefined
                            ? undefined
                            : _encode_TemplateList(value.parameters, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_OptionalLabelAndParameters(value, elGetter);
}


/* eslint-enable */
