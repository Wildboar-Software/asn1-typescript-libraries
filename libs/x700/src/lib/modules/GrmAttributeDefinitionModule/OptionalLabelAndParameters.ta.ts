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
import * as $ from 'asn1-ts/dist/node/functional';
import {
    TemplateLabel,
    _decode_TemplateLabel,
    _encode_TemplateLabel,
} from '../DefinitionASN1Module/TemplateLabel.ta';
export {
    TemplateLabel,
    _decode_TemplateLabel,
    _encode_TemplateLabel,
} from '../DefinitionASN1Module/TemplateLabel.ta';
import {
    TemplateList,
    _decode_TemplateList,
    _encode_TemplateList,
} from '../DefinitionASN1Module/TemplateList.ta';
export {
    TemplateList,
    _decode_TemplateList,
    _encode_TemplateList,
} from '../DefinitionASN1Module/TemplateList.ta';

/* START_OF_SYMBOL_DEFINITION OptionalLabelAndParameters */
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
/* END_OF_SYMBOL_DEFINITION OptionalLabelAndParameters */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_OptionalLabelAndParameters */
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
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_OptionalLabelAndParameters */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_OptionalLabelAndParameters */
/**
 * @summary The Trailing Root Component Types of OptionalLabelAndParameters
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_OptionalLabelAndParameters: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_OptionalLabelAndParameters */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_OptionalLabelAndParameters */
/**
 * @summary The Extension Addition Component Types of OptionalLabelAndParameters
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_OptionalLabelAndParameters: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_OptionalLabelAndParameters */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_OptionalLabelAndParameters */
let _cached_decoder_for_OptionalLabelAndParameters: $.ASN1Decoder<OptionalLabelAndParameters> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_OptionalLabelAndParameters */

/* START_OF_SYMBOL_DEFINITION _decode_OptionalLabelAndParameters */
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
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let label: OPTIONAL<TemplateLabel>;
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
                _root_component_type_list_1_spec_for_OptionalLabelAndParameters,
                _extension_additions_list_spec_for_OptionalLabelAndParameters,
                _root_component_type_list_2_spec_for_OptionalLabelAndParameters,
                undefined
            );
            return new OptionalLabelAndParameters /* SEQUENCE_CONSTRUCTOR_CALL */(
                label,
                parameters
            );
        };
    }
    return _cached_decoder_for_OptionalLabelAndParameters(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_OptionalLabelAndParameters */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_OptionalLabelAndParameters */
let _cached_encoder_for_OptionalLabelAndParameters: $.ASN1Encoder<OptionalLabelAndParameters> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_OptionalLabelAndParameters */

/* START_OF_SYMBOL_DEFINITION _encode_OptionalLabelAndParameters */
/**
 * @summary Encodes a(n) OptionalLabelAndParameters into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OptionalLabelAndParameters, encoded as an ASN.1 Element.
 */
export function _encode_OptionalLabelAndParameters(
    value: OptionalLabelAndParameters,
    elGetter: $.ASN1Encoder<OptionalLabelAndParameters>
) {
    if (!_cached_encoder_for_OptionalLabelAndParameters) {
        _cached_encoder_for_OptionalLabelAndParameters = function (
            value: OptionalLabelAndParameters,
            elGetter: $.ASN1Encoder<OptionalLabelAndParameters>
        ): _Element {
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

/* END_OF_SYMBOL_DEFINITION _encode_OptionalLabelAndParameters */

/* eslint-enable */
