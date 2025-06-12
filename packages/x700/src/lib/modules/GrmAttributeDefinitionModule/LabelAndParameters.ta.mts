/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
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
export {
    TemplateLabel,
    _decode_TemplateLabel,
    _encode_TemplateLabel,
} from '../DefinitionASN1Module/TemplateLabel.ta.mjs';
import {
    TemplateList,
    _decode_TemplateList,
    _encode_TemplateList,
} from '../DefinitionASN1Module/TemplateList.ta.mjs';
export {
    TemplateList,
    _decode_TemplateList,
    _encode_TemplateList,
} from '../DefinitionASN1Module/TemplateList.ta.mjs';

/* START_OF_SYMBOL_DEFINITION LabelAndParameters */
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
 * @class
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
/* END_OF_SYMBOL_DEFINITION LabelAndParameters */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_LabelAndParameters */
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
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'parameters',
        true,
        $.hasTag(_TagClass.universal, 17),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_LabelAndParameters */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_LabelAndParameters */
/**
 * @summary The Trailing Root Component Types of LabelAndParameters
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_LabelAndParameters: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_LabelAndParameters */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_LabelAndParameters */
/**
 * @summary The Extension Addition Component Types of LabelAndParameters
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_LabelAndParameters: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_LabelAndParameters */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_LabelAndParameters */
let _cached_decoder_for_LabelAndParameters: $.ASN1Decoder<LabelAndParameters> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_LabelAndParameters */

/* START_OF_SYMBOL_DEFINITION _decode_LabelAndParameters */
/**
 * @summary Decodes an ASN.1 element into a(n) LabelAndParameters
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {LabelAndParameters} The decoded data structure.
 */
export function _decode_LabelAndParameters(el: _Element) {
    if (!_cached_decoder_for_LabelAndParameters) {
        _cached_decoder_for_LabelAndParameters = function (
            el: _Element
        ): LabelAndParameters {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let label!: TemplateLabel;
            let parameters: OPTIONAL<TemplateList>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                label: (_el: _Element): void => {
                    label = _decode_TemplateLabel(_el);
                },
                parameters: (_el: _Element): void => {
                    parameters = _decode_TemplateList(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_LabelAndParameters,
                _extension_additions_list_spec_for_LabelAndParameters,
                _root_component_type_list_2_spec_for_LabelAndParameters,
                undefined
            );
            return new LabelAndParameters /* SEQUENCE_CONSTRUCTOR_CALL */(
                label,
                parameters
            );
        };
    }
    return _cached_decoder_for_LabelAndParameters(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_LabelAndParameters */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_LabelAndParameters */
let _cached_encoder_for_LabelAndParameters: $.ASN1Encoder<LabelAndParameters> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_LabelAndParameters */

/* START_OF_SYMBOL_DEFINITION _encode_LabelAndParameters */
/**
 * @summary Encodes a(n) LabelAndParameters into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LabelAndParameters, encoded as an ASN.1 Element.
 */
export function _encode_LabelAndParameters(
    value: LabelAndParameters,
    elGetter: $.ASN1Encoder<LabelAndParameters>
) {
    if (!_cached_encoder_for_LabelAndParameters) {
        _cached_encoder_for_LabelAndParameters = function (
            value: LabelAndParameters,
            elGetter: $.ASN1Encoder<LabelAndParameters>
        ): _Element {
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

/* END_OF_SYMBOL_DEFINITION _encode_LabelAndParameters */

/* eslint-enable */
