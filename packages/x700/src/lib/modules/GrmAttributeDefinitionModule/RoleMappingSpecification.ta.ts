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
    Identifier,
    _decode_Identifier,
    _encode_Identifier,
} from '../DefinitionASN1Module/Identifier.ta.js';
export {
    Identifier,
    _decode_Identifier,
    _encode_Identifier,
} from '../DefinitionASN1Module/Identifier.ta.js';
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
import {
    Representation,
    _decode_Representation,
    _encode_Representation,
} from '../GrmAttributeDefinitionModule/Representation.ta.js';
export {
    Representation,
    _decode_Representation,
    _encode_Representation,
} from '../GrmAttributeDefinitionModule/Representation.ta.js';

/* START_OF_SYMBOL_DEFINITION RoleMappingSpecification */
/**
 * @summary RoleMappingSpecification
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RoleMappingSpecification ::= SEQUENCE {
 *   role            Identifier,
 *   relatedClasses  TemplateList,
 *   representedBy   [0] EXPLICIT Representation OPTIONAL,
 *   qualifies       [1]  TemplateList OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class RoleMappingSpecification {
    constructor(
        /**
         * @summary `role`.
         * @public
         * @readonly
         */
        readonly role: Identifier,
        /**
         * @summary `relatedClasses`.
         * @public
         * @readonly
         */
        readonly relatedClasses: TemplateList,
        /**
         * @summary `representedBy`.
         * @public
         * @readonly
         */
        readonly representedBy: OPTIONAL<Representation>,
        /**
         * @summary `qualifies`.
         * @public
         * @readonly
         */
        readonly qualifies: OPTIONAL<TemplateList>
    ) {}

    /**
     * @summary Restructures an object into a RoleMappingSpecification
     * @description
     *
     * This takes an `object` and converts it to a `RoleMappingSpecification`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RoleMappingSpecification`.
     * @returns {RoleMappingSpecification}
     */
    public static _from_object(
        _o: {
            [_K in keyof RoleMappingSpecification]: RoleMappingSpecification[_K];
        }
    ): RoleMappingSpecification {
        return new RoleMappingSpecification(
            _o.role,
            _o.relatedClasses,
            _o.representedBy,
            _o.qualifies
        );
    }
}
/* END_OF_SYMBOL_DEFINITION RoleMappingSpecification */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_RoleMappingSpecification */
/**
 * @summary The Leading Root Component Types of RoleMappingSpecification
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_RoleMappingSpecification: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'role',
        false,
        $.hasTag(_TagClass.universal, 19),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'relatedClasses',
        false,
        $.hasTag(_TagClass.universal, 17),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'representedBy',
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'qualifies',
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_RoleMappingSpecification */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_RoleMappingSpecification */
/**
 * @summary The Trailing Root Component Types of RoleMappingSpecification
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_RoleMappingSpecification: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_RoleMappingSpecification */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_RoleMappingSpecification */
/**
 * @summary The Extension Addition Component Types of RoleMappingSpecification
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_RoleMappingSpecification: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_RoleMappingSpecification */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_RoleMappingSpecification */
let _cached_decoder_for_RoleMappingSpecification: $.ASN1Decoder<RoleMappingSpecification> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_RoleMappingSpecification */

/* START_OF_SYMBOL_DEFINITION _decode_RoleMappingSpecification */
/**
 * @summary Decodes an ASN.1 element into a(n) RoleMappingSpecification
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RoleMappingSpecification} The decoded data structure.
 */
export function _decode_RoleMappingSpecification(el: _Element) {
    if (!_cached_decoder_for_RoleMappingSpecification) {
        _cached_decoder_for_RoleMappingSpecification = function (
            el: _Element
        ): RoleMappingSpecification {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let role!: Identifier;
            let relatedClasses!: TemplateList;
            let representedBy: OPTIONAL<Representation>;
            let qualifies: OPTIONAL<TemplateList>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                role: (_el: _Element): void => {
                    role = _decode_Identifier(_el);
                },
                relatedClasses: (_el: _Element): void => {
                    relatedClasses = _decode_TemplateList(_el);
                },
                representedBy: (_el: _Element): void => {
                    representedBy = $._decode_explicit<Representation>(
                        () => _decode_Representation
                    )(_el);
                },
                qualifies: (_el: _Element): void => {
                    qualifies = $._decode_implicit<TemplateList>(
                        () => _decode_TemplateList
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_RoleMappingSpecification,
                _extension_additions_list_spec_for_RoleMappingSpecification,
                _root_component_type_list_2_spec_for_RoleMappingSpecification,
                undefined
            );
            return new RoleMappingSpecification /* SEQUENCE_CONSTRUCTOR_CALL */(
                role,
                relatedClasses,
                representedBy,
                qualifies
            );
        };
    }
    return _cached_decoder_for_RoleMappingSpecification(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_RoleMappingSpecification */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_RoleMappingSpecification */
let _cached_encoder_for_RoleMappingSpecification: $.ASN1Encoder<RoleMappingSpecification> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_RoleMappingSpecification */

/* START_OF_SYMBOL_DEFINITION _encode_RoleMappingSpecification */
/**
 * @summary Encodes a(n) RoleMappingSpecification into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RoleMappingSpecification, encoded as an ASN.1 Element.
 */
export function _encode_RoleMappingSpecification(
    value: RoleMappingSpecification,
    elGetter: $.ASN1Encoder<RoleMappingSpecification>
) {
    if (!_cached_encoder_for_RoleMappingSpecification) {
        _cached_encoder_for_RoleMappingSpecification = function (
            value: RoleMappingSpecification,
            elGetter: $.ASN1Encoder<RoleMappingSpecification>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_Identifier(value.role, $.BER),
                        /* REQUIRED   */ _encode_TemplateList(
                            value.relatedClasses,
                            $.BER
                        ),
                        /* IF_ABSENT  */ value.representedBy === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  0,
                                  () => _encode_Representation,
                                  $.BER
                              )(value.representedBy, $.BER),
                        /* IF_ABSENT  */ value.qualifies === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  1,
                                  () => _encode_TemplateList,
                                  $.BER
                              )(value.qualifies, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_RoleMappingSpecification(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_RoleMappingSpecification */

/* eslint-enable */
