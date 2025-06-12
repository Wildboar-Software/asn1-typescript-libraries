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
    CreateSpecification_createModifier,
    CreateSpecification_createModifier_withReferenceObject /* IMPORTED_LONG_NAMED_BIT */,
    withReferenceObject /* IMPORTED_SHORT_NAMED_BIT */,
    CreateSpecification_createModifier_withAutomaticInstanceNaming /* IMPORTED_LONG_NAMED_BIT */,
    withAutomaticInstanceNaming /* IMPORTED_SHORT_NAMED_BIT */,
    _decode_CreateSpecification_createModifier,
    _encode_CreateSpecification_createModifier,
} from '../DefinitionASN1Module/CreateSpecification-createModifier.ta.js';
export {
    CreateSpecification_createModifier,
    CreateSpecification_createModifier_withReferenceObject /* IMPORTED_LONG_NAMED_BIT */,
    withReferenceObject /* IMPORTED_SHORT_NAMED_BIT */,
    CreateSpecification_createModifier_withAutomaticInstanceNaming /* IMPORTED_LONG_NAMED_BIT */,
    withAutomaticInstanceNaming /* IMPORTED_SHORT_NAMED_BIT */,
    _decode_CreateSpecification_createModifier,
    _encode_CreateSpecification_createModifier,
} from '../DefinitionASN1Module/CreateSpecification-createModifier.ta.js';
import {
    TemplateList,
    _decode_TemplateList,
    _encode_TemplateList,
} from '../DefinitionASN1Module/TemplateList.ta.js';
export {
    TemplateList,
    _decode_TemplateList,
    _encode_TemplateList,
} from '../DefinitionASN1Module/TemplateList.ta.js';

/* START_OF_SYMBOL_DEFINITION CreateSpecification */
/**
 * @summary CreateSpecification
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CreateSpecification ::= SEQUENCE {
 *   createModifier
 *     BIT STRING {withReferenceObject(0), withAutomaticInstanceNaming(1)}
 *       OPTIONAL,
 *   parameter       TemplateList OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class CreateSpecification {
    constructor(
        /**
         * @summary `createModifier`.
         * @public
         * @readonly
         */
        readonly createModifier: OPTIONAL<CreateSpecification_createModifier>,
        /**
         * @summary `parameter`.
         * @public
         * @readonly
         */
        readonly parameter: OPTIONAL<TemplateList>
    ) {}

    /**
     * @summary Restructures an object into a CreateSpecification
     * @description
     *
     * This takes an `object` and converts it to a `CreateSpecification`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CreateSpecification`.
     * @returns {CreateSpecification}
     */
    public static _from_object(
        _o: { [_K in keyof CreateSpecification]: CreateSpecification[_K] }
    ): CreateSpecification {
        return new CreateSpecification(_o.createModifier, _o.parameter);
    }
}
/* END_OF_SYMBOL_DEFINITION CreateSpecification */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_CreateSpecification */
/**
 * @summary The Leading Root Component Types of CreateSpecification
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CreateSpecification: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'createModifier',
        true,
        $.hasTag(_TagClass.universal, 3),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'parameter',
        true,
        $.hasTag(_TagClass.universal, 17),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_CreateSpecification */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_CreateSpecification */
/**
 * @summary The Trailing Root Component Types of CreateSpecification
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CreateSpecification: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_CreateSpecification */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_CreateSpecification */
/**
 * @summary The Extension Addition Component Types of CreateSpecification
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CreateSpecification: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_CreateSpecification */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CreateSpecification */
let _cached_decoder_for_CreateSpecification: $.ASN1Decoder<CreateSpecification> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CreateSpecification */

/* START_OF_SYMBOL_DEFINITION _decode_CreateSpecification */
/**
 * @summary Decodes an ASN.1 element into a(n) CreateSpecification
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CreateSpecification} The decoded data structure.
 */
export function _decode_CreateSpecification(el: _Element) {
    if (!_cached_decoder_for_CreateSpecification) {
        _cached_decoder_for_CreateSpecification = function (
            el: _Element
        ): CreateSpecification {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let createModifier: OPTIONAL<CreateSpecification_createModifier>;
            let parameter: OPTIONAL<TemplateList>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                createModifier: (_el: _Element): void => {
                    createModifier = _decode_CreateSpecification_createModifier(
                        _el
                    );
                },
                parameter: (_el: _Element): void => {
                    parameter = _decode_TemplateList(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_CreateSpecification,
                _extension_additions_list_spec_for_CreateSpecification,
                _root_component_type_list_2_spec_for_CreateSpecification,
                undefined
            );
            return new CreateSpecification /* SEQUENCE_CONSTRUCTOR_CALL */(
                createModifier,
                parameter
            );
        };
    }
    return _cached_decoder_for_CreateSpecification(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CreateSpecification */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CreateSpecification */
let _cached_encoder_for_CreateSpecification: $.ASN1Encoder<CreateSpecification> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CreateSpecification */

/* START_OF_SYMBOL_DEFINITION _encode_CreateSpecification */
/**
 * @summary Encodes a(n) CreateSpecification into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CreateSpecification, encoded as an ASN.1 Element.
 */
export function _encode_CreateSpecification(
    value: CreateSpecification,
    elGetter: $.ASN1Encoder<CreateSpecification>
) {
    if (!_cached_encoder_for_CreateSpecification) {
        _cached_encoder_for_CreateSpecification = function (
            value: CreateSpecification,
            elGetter: $.ASN1Encoder<CreateSpecification>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.createModifier === undefined
                            ? undefined
                            : _encode_CreateSpecification_createModifier(
                                  value.createModifier,
                                  $.BER
                              ),
                        /* IF_ABSENT  */ value.parameter === undefined
                            ? undefined
                            : _encode_TemplateList(value.parameter, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_CreateSpecification(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_CreateSpecification */

/* eslint-enable */
