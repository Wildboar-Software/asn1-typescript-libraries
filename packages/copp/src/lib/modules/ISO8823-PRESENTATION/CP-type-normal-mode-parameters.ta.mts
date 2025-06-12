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
    Protocol_version,
    Protocol_version_version_1 /* IMPORTED_LONG_NAMED_BIT */,
    version_1 /* IMPORTED_SHORT_NAMED_BIT */,
    _decode_Protocol_version,
    _encode_Protocol_version,
} from '../ISO8823-PRESENTATION/Protocol-version.ta.mjs';
export {
    Protocol_version,
    Protocol_version_version_1 /* IMPORTED_LONG_NAMED_BIT */,
    version_1 /* IMPORTED_SHORT_NAMED_BIT */,
    _decode_Protocol_version,
    _encode_Protocol_version,
} from '../ISO8823-PRESENTATION/Protocol-version.ta.mjs';
import {
    Calling_presentation_selector,
    _decode_Calling_presentation_selector,
    _encode_Calling_presentation_selector,
} from '../ISO8823-PRESENTATION/Calling-presentation-selector.ta.mjs';
export {
    Calling_presentation_selector,
    _decode_Calling_presentation_selector,
    _encode_Calling_presentation_selector,
} from '../ISO8823-PRESENTATION/Calling-presentation-selector.ta.mjs';
import {
    Called_presentation_selector,
    _decode_Called_presentation_selector,
    _encode_Called_presentation_selector,
} from '../ISO8823-PRESENTATION/Called-presentation-selector.ta.mjs';
export {
    Called_presentation_selector,
    _decode_Called_presentation_selector,
    _encode_Called_presentation_selector,
} from '../ISO8823-PRESENTATION/Called-presentation-selector.ta.mjs';
import {
    Presentation_context_definition_list,
    _decode_Presentation_context_definition_list,
    _encode_Presentation_context_definition_list,
} from '../ISO8823-PRESENTATION/Presentation-context-definition-list.ta.mjs';
export {
    Presentation_context_definition_list,
    _decode_Presentation_context_definition_list,
    _encode_Presentation_context_definition_list,
} from '../ISO8823-PRESENTATION/Presentation-context-definition-list.ta.mjs';
import {
    Default_context_name,
    _decode_Default_context_name,
    _encode_Default_context_name,
} from '../ISO8823-PRESENTATION/Default-context-name.ta.mjs';
export {
    Default_context_name,
    _decode_Default_context_name,
    _encode_Default_context_name,
} from '../ISO8823-PRESENTATION/Default-context-name.ta.mjs';
import {
    Presentation_requirements,
    Presentation_requirements_context_management /* IMPORTED_LONG_NAMED_BIT */,
    context_management /* IMPORTED_SHORT_NAMED_BIT */,
    Presentation_requirements_restoration /* IMPORTED_LONG_NAMED_BIT */,
    restoration /* IMPORTED_SHORT_NAMED_BIT */,
    _decode_Presentation_requirements,
    _encode_Presentation_requirements,
} from '../ISO8823-PRESENTATION/Presentation-requirements.ta.mjs';
export {
    Presentation_requirements,
    Presentation_requirements_context_management /* IMPORTED_LONG_NAMED_BIT */,
    context_management /* IMPORTED_SHORT_NAMED_BIT */,
    Presentation_requirements_restoration /* IMPORTED_LONG_NAMED_BIT */,
    restoration /* IMPORTED_SHORT_NAMED_BIT */,
    _decode_Presentation_requirements,
    _encode_Presentation_requirements,
} from '../ISO8823-PRESENTATION/Presentation-requirements.ta.mjs';
import {
    User_session_requirements,
    User_session_requirements_half_duplex /* IMPORTED_LONG_NAMED_BIT */,
    half_duplex /* IMPORTED_SHORT_NAMED_BIT */,
    User_session_requirements_duplex /* IMPORTED_LONG_NAMED_BIT */,
    duplex /* IMPORTED_SHORT_NAMED_BIT */,
    User_session_requirements_expedited_data /* IMPORTED_LONG_NAMED_BIT */,
    expedited_data /* IMPORTED_SHORT_NAMED_BIT */,
    User_session_requirements_minor_synchronize /* IMPORTED_LONG_NAMED_BIT */,
    minor_synchronize /* IMPORTED_SHORT_NAMED_BIT */,
    User_session_requirements_major_synchronize /* IMPORTED_LONG_NAMED_BIT */,
    major_synchronize /* IMPORTED_SHORT_NAMED_BIT */,
    User_session_requirements_resynchronize /* IMPORTED_LONG_NAMED_BIT */,
    resynchronize /* IMPORTED_SHORT_NAMED_BIT */,
    User_session_requirements_activity_management /* IMPORTED_LONG_NAMED_BIT */,
    activity_management /* IMPORTED_SHORT_NAMED_BIT */,
    User_session_requirements_negotiated_release /* IMPORTED_LONG_NAMED_BIT */,
    negotiated_release /* IMPORTED_SHORT_NAMED_BIT */,
    User_session_requirements_capability_data /* IMPORTED_LONG_NAMED_BIT */,
    capability_data /* IMPORTED_SHORT_NAMED_BIT */,
    User_session_requirements_exceptions /* IMPORTED_LONG_NAMED_BIT */,
    exceptions /* IMPORTED_SHORT_NAMED_BIT */,
    User_session_requirements_typed_data /* IMPORTED_LONG_NAMED_BIT */,
    typed_data /* IMPORTED_SHORT_NAMED_BIT */,
    User_session_requirements_symmetric_synchronize /* IMPORTED_LONG_NAMED_BIT */,
    symmetric_synchronize /* IMPORTED_SHORT_NAMED_BIT */,
    User_session_requirements_data_separation /* IMPORTED_LONG_NAMED_BIT */,
    data_separation /* IMPORTED_SHORT_NAMED_BIT */,
    _decode_User_session_requirements,
    _encode_User_session_requirements,
} from '../ISO8823-PRESENTATION/User-session-requirements.ta.mjs';
export {
    User_session_requirements,
    User_session_requirements_half_duplex /* IMPORTED_LONG_NAMED_BIT */,
    half_duplex /* IMPORTED_SHORT_NAMED_BIT */,
    User_session_requirements_duplex /* IMPORTED_LONG_NAMED_BIT */,
    duplex /* IMPORTED_SHORT_NAMED_BIT */,
    User_session_requirements_expedited_data /* IMPORTED_LONG_NAMED_BIT */,
    expedited_data /* IMPORTED_SHORT_NAMED_BIT */,
    User_session_requirements_minor_synchronize /* IMPORTED_LONG_NAMED_BIT */,
    minor_synchronize /* IMPORTED_SHORT_NAMED_BIT */,
    User_session_requirements_major_synchronize /* IMPORTED_LONG_NAMED_BIT */,
    major_synchronize /* IMPORTED_SHORT_NAMED_BIT */,
    User_session_requirements_resynchronize /* IMPORTED_LONG_NAMED_BIT */,
    resynchronize /* IMPORTED_SHORT_NAMED_BIT */,
    User_session_requirements_activity_management /* IMPORTED_LONG_NAMED_BIT */,
    activity_management /* IMPORTED_SHORT_NAMED_BIT */,
    User_session_requirements_negotiated_release /* IMPORTED_LONG_NAMED_BIT */,
    negotiated_release /* IMPORTED_SHORT_NAMED_BIT */,
    User_session_requirements_capability_data /* IMPORTED_LONG_NAMED_BIT */,
    capability_data /* IMPORTED_SHORT_NAMED_BIT */,
    User_session_requirements_exceptions /* IMPORTED_LONG_NAMED_BIT */,
    exceptions /* IMPORTED_SHORT_NAMED_BIT */,
    User_session_requirements_typed_data /* IMPORTED_LONG_NAMED_BIT */,
    typed_data /* IMPORTED_SHORT_NAMED_BIT */,
    User_session_requirements_symmetric_synchronize /* IMPORTED_LONG_NAMED_BIT */,
    symmetric_synchronize /* IMPORTED_SHORT_NAMED_BIT */,
    User_session_requirements_data_separation /* IMPORTED_LONG_NAMED_BIT */,
    data_separation /* IMPORTED_SHORT_NAMED_BIT */,
    _decode_User_session_requirements,
    _encode_User_session_requirements,
} from '../ISO8823-PRESENTATION/User-session-requirements.ta.mjs';
import {
    Protocol_options,
    Protocol_options_nominated_context /* IMPORTED_LONG_NAMED_BIT */,
    nominated_context /* IMPORTED_SHORT_NAMED_BIT */,
    Protocol_options_short_encoding /* IMPORTED_LONG_NAMED_BIT */,
    short_encoding /* IMPORTED_SHORT_NAMED_BIT */,
    Protocol_options_packed_encoding_rules /* IMPORTED_LONG_NAMED_BIT */,
    packed_encoding_rules /* IMPORTED_SHORT_NAMED_BIT */,
    _decode_Protocol_options,
    _encode_Protocol_options,
} from '../ISO8823-PRESENTATION/Protocol-options.ta.mjs';
export {
    Protocol_options,
    Protocol_options_nominated_context /* IMPORTED_LONG_NAMED_BIT */,
    nominated_context /* IMPORTED_SHORT_NAMED_BIT */,
    Protocol_options_short_encoding /* IMPORTED_LONG_NAMED_BIT */,
    short_encoding /* IMPORTED_SHORT_NAMED_BIT */,
    Protocol_options_packed_encoding_rules /* IMPORTED_LONG_NAMED_BIT */,
    packed_encoding_rules /* IMPORTED_SHORT_NAMED_BIT */,
    _decode_Protocol_options,
    _encode_Protocol_options,
} from '../ISO8823-PRESENTATION/Protocol-options.ta.mjs';
import {
    Presentation_context_identifier,
    _decode_Presentation_context_identifier,
    _encode_Presentation_context_identifier,
} from '../ISO8823-PRESENTATION/Presentation-context-identifier.ta.mjs';
export {
    Presentation_context_identifier,
    _decode_Presentation_context_identifier,
    _encode_Presentation_context_identifier,
} from '../ISO8823-PRESENTATION/Presentation-context-identifier.ta.mjs';
import {
    CP_type_normal_mode_parameters_extensions,
    _decode_CP_type_normal_mode_parameters_extensions,
    _encode_CP_type_normal_mode_parameters_extensions,
} from '../ISO8823-PRESENTATION/CP-type-normal-mode-parameters-extensions.ta.mjs';
export {
    CP_type_normal_mode_parameters_extensions,
    _decode_CP_type_normal_mode_parameters_extensions,
    _encode_CP_type_normal_mode_parameters_extensions,
} from '../ISO8823-PRESENTATION/CP-type-normal-mode-parameters-extensions.ta.mjs';
import {
    User_data,
    _decode_User_data,
    _encode_User_data,
} from '../ISO8823-PRESENTATION/User-data.ta.mjs';
export {
    User_data,
    _decode_User_data,
    _encode_User_data,
} from '../ISO8823-PRESENTATION/User-data.ta.mjs';

/* START_OF_SYMBOL_DEFINITION CP_type_normal_mode_parameters */
/**
 * @summary CP_type_normal_mode_parameters
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CP-type-normal-mode-parameters ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class CP_type_normal_mode_parameters {
    constructor(
        /**
         * @summary `protocol_version`.
         * @public
         * @readonly
         */
        readonly protocol_version: OPTIONAL<Protocol_version>,
        /**
         * @summary `calling_presentation_selector`.
         * @public
         * @readonly
         */
        readonly calling_presentation_selector: OPTIONAL<Calling_presentation_selector>,
        /**
         * @summary `called_presentation_selector`.
         * @public
         * @readonly
         */
        readonly called_presentation_selector: OPTIONAL<Called_presentation_selector>,
        /**
         * @summary `presentation_context_definition_list`.
         * @public
         * @readonly
         */
        readonly presentation_context_definition_list: OPTIONAL<Presentation_context_definition_list>,
        /**
         * @summary `default_context_name`.
         * @public
         * @readonly
         */
        readonly default_context_name: OPTIONAL<Default_context_name>,
        /**
         * @summary `presentation_requirements`.
         * @public
         * @readonly
         */
        readonly presentation_requirements: OPTIONAL<Presentation_requirements>,
        /**
         * @summary `user_session_requirements`.
         * @public
         * @readonly
         */
        readonly user_session_requirements: OPTIONAL<User_session_requirements>,
        /**
         * @summary `protocol_options`.
         * @public
         * @readonly
         */
        readonly protocol_options: OPTIONAL<Protocol_options>,
        /**
         * @summary `initiators_nominated_context`.
         * @public
         * @readonly
         */
        readonly initiators_nominated_context: OPTIONAL<Presentation_context_identifier>,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<CP_type_normal_mode_parameters_extensions>,
        /**
         * @summary `user_data`.
         * @public
         * @readonly
         */
        readonly user_data: OPTIONAL<User_data>
    ) {}

    /**
     * @summary Restructures an object into a CP_type_normal_mode_parameters
     * @description
     *
     * This takes an `object` and converts it to a `CP_type_normal_mode_parameters`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CP_type_normal_mode_parameters`.
     * @returns {CP_type_normal_mode_parameters}
     */
    public static _from_object(
        _o: {
            [_K in keyof CP_type_normal_mode_parameters]: CP_type_normal_mode_parameters[_K];
        }
    ): CP_type_normal_mode_parameters {
        return new CP_type_normal_mode_parameters(
            _o.protocol_version,
            _o.calling_presentation_selector,
            _o.called_presentation_selector,
            _o.presentation_context_definition_list,
            _o.default_context_name,
            _o.presentation_requirements,
            _o.user_session_requirements,
            _o.protocol_options,
            _o.initiators_nominated_context,
            _o.extensions,
            _o.user_data
        );
    }

    /**
     * @summary Getter that returns the default value for `protocol_version`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_protocol_version() {
        return (() => {
            const _ret = new Uint8ClampedArray(Math.max(0));
            _ret[Protocol_version_version_1] = TRUE_BIT;
            return _ret;
        })();
    }
    /**
     * @summary Getter that returns the default value for `protocol_options`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_protocol_options() {
        return new Uint8ClampedArray([]);
    }
}
/* END_OF_SYMBOL_DEFINITION CP_type_normal_mode_parameters */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_CP_type_normal_mode_parameters */
/**
 * @summary The Leading Root Component Types of CP_type_normal_mode_parameters
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CP_type_normal_mode_parameters: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'protocol-version',
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'calling-presentation-selector',
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'called-presentation-selector',
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'presentation-context-definition-list',
        true,
        $.hasTag(_TagClass.context, 4),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'default-context-name',
        true,
        $.hasTag(_TagClass.context, 6),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'presentation-requirements',
        true,
        $.hasTag(_TagClass.context, 8),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'user-session-requirements',
        true,
        $.hasTag(_TagClass.context, 9),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'protocol-options',
        true,
        $.hasTag(_TagClass.context, 11),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'initiators-nominated-context',
        true,
        $.hasTag(_TagClass.context, 12),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'extensions',
        true,
        $.hasTag(_TagClass.context, 14),
        undefined,
        undefined
    ),
    new $.ComponentSpec('user-data', true, $.hasAnyTag, undefined, undefined),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_CP_type_normal_mode_parameters */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_CP_type_normal_mode_parameters */
/**
 * @summary The Trailing Root Component Types of CP_type_normal_mode_parameters
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CP_type_normal_mode_parameters: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_CP_type_normal_mode_parameters */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_CP_type_normal_mode_parameters */
/**
 * @summary The Extension Addition Component Types of CP_type_normal_mode_parameters
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CP_type_normal_mode_parameters: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_CP_type_normal_mode_parameters */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CP_type_normal_mode_parameters */
let _cached_decoder_for_CP_type_normal_mode_parameters: $.ASN1Decoder<CP_type_normal_mode_parameters> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CP_type_normal_mode_parameters */

/* START_OF_SYMBOL_DEFINITION _decode_CP_type_normal_mode_parameters */
/**
 * @summary Decodes an ASN.1 element into a(n) CP_type_normal_mode_parameters
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CP_type_normal_mode_parameters} The decoded data structure.
 */
export function _decode_CP_type_normal_mode_parameters(el: _Element) {
    if (!_cached_decoder_for_CP_type_normal_mode_parameters) {
        _cached_decoder_for_CP_type_normal_mode_parameters = function (
            el: _Element
        ): CP_type_normal_mode_parameters {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let protocol_version: OPTIONAL<Protocol_version> =
                CP_type_normal_mode_parameters._default_value_for_protocol_version;
            let calling_presentation_selector: OPTIONAL<Calling_presentation_selector>;
            let called_presentation_selector: OPTIONAL<Called_presentation_selector>;
            let presentation_context_definition_list: OPTIONAL<Presentation_context_definition_list>;
            let default_context_name: OPTIONAL<Default_context_name>;
            let presentation_requirements: OPTIONAL<Presentation_requirements>;
            let user_session_requirements: OPTIONAL<User_session_requirements>;
            let protocol_options: OPTIONAL<Protocol_options> =
                CP_type_normal_mode_parameters._default_value_for_protocol_options;
            let initiators_nominated_context: OPTIONAL<Presentation_context_identifier>;
            let extensions: OPTIONAL<CP_type_normal_mode_parameters_extensions>;
            let user_data: OPTIONAL<User_data>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                'protocol-version': (_el: _Element): void => {
                    protocol_version = $._decode_implicit<Protocol_version>(
                        () => _decode_Protocol_version
                    )(_el);
                },
                'calling-presentation-selector': (_el: _Element): void => {
                    calling_presentation_selector = $._decode_implicit<Calling_presentation_selector>(
                        () => _decode_Calling_presentation_selector
                    )(_el);
                },
                'called-presentation-selector': (_el: _Element): void => {
                    called_presentation_selector = $._decode_implicit<Called_presentation_selector>(
                        () => _decode_Called_presentation_selector
                    )(_el);
                },
                'presentation-context-definition-list': (
                    _el: _Element
                ): void => {
                    presentation_context_definition_list = $._decode_implicit<Presentation_context_definition_list>(
                        () => _decode_Presentation_context_definition_list
                    )(_el);
                },
                'default-context-name': (_el: _Element): void => {
                    default_context_name = $._decode_implicit<Default_context_name>(
                        () => _decode_Default_context_name
                    )(_el);
                },
                'presentation-requirements': (_el: _Element): void => {
                    presentation_requirements = $._decode_implicit<Presentation_requirements>(
                        () => _decode_Presentation_requirements
                    )(_el);
                },
                'user-session-requirements': (_el: _Element): void => {
                    user_session_requirements = $._decode_implicit<User_session_requirements>(
                        () => _decode_User_session_requirements
                    )(_el);
                },
                'protocol-options': (_el: _Element): void => {
                    protocol_options = $._decode_explicit<Protocol_options>(
                        () => _decode_Protocol_options
                    )(_el);
                },
                'initiators-nominated-context': (_el: _Element): void => {
                    initiators_nominated_context = $._decode_explicit<Presentation_context_identifier>(
                        () => _decode_Presentation_context_identifier
                    )(_el);
                },
                extensions: (_el: _Element): void => {
                    extensions = $._decode_explicit<CP_type_normal_mode_parameters_extensions>(
                        () => _decode_CP_type_normal_mode_parameters_extensions
                    )(_el);
                },
                'user-data': (_el: _Element): void => {
                    user_data = _decode_User_data(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_CP_type_normal_mode_parameters,
                _extension_additions_list_spec_for_CP_type_normal_mode_parameters,
                _root_component_type_list_2_spec_for_CP_type_normal_mode_parameters,
                undefined
            );
            return new CP_type_normal_mode_parameters /* SEQUENCE_CONSTRUCTOR_CALL */(
                protocol_version,
                calling_presentation_selector,
                called_presentation_selector,
                presentation_context_definition_list,
                default_context_name,
                presentation_requirements,
                user_session_requirements,
                protocol_options,
                initiators_nominated_context,
                extensions,
                user_data
            );
        };
    }
    return _cached_decoder_for_CP_type_normal_mode_parameters(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CP_type_normal_mode_parameters */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CP_type_normal_mode_parameters */
let _cached_encoder_for_CP_type_normal_mode_parameters: $.ASN1Encoder<CP_type_normal_mode_parameters> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CP_type_normal_mode_parameters */

/* START_OF_SYMBOL_DEFINITION _encode_CP_type_normal_mode_parameters */
/**
 * @summary Encodes a(n) CP_type_normal_mode_parameters into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CP_type_normal_mode_parameters, encoded as an ASN.1 Element.
 */
export function _encode_CP_type_normal_mode_parameters(
    value: CP_type_normal_mode_parameters,
    elGetter: $.ASN1Encoder<CP_type_normal_mode_parameters>
) {
    if (!_cached_encoder_for_CP_type_normal_mode_parameters) {
        _cached_encoder_for_CP_type_normal_mode_parameters = function (
            value: CP_type_normal_mode_parameters,
            elGetter: $.ASN1Encoder<CP_type_normal_mode_parameters>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_DEFAULT */ value.protocol_version === undefined ||
                        $.deepEq(
                            value.protocol_version,
                            CP_type_normal_mode_parameters._default_value_for_protocol_version
                        )
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  0,
                                  () => _encode_Protocol_version,
                                  $.BER
                              )(value.protocol_version, $.BER),
                        /* IF_ABSENT  */ value.calling_presentation_selector ===
                        undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  1,
                                  () => _encode_Calling_presentation_selector,
                                  $.BER
                              )(value.calling_presentation_selector, $.BER),
                        /* IF_ABSENT  */ value.called_presentation_selector ===
                        undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  2,
                                  () => _encode_Called_presentation_selector,
                                  $.BER
                              )(value.called_presentation_selector, $.BER),
                        /* IF_ABSENT  */ value.presentation_context_definition_list ===
                        undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  4,
                                  () =>
                                      _encode_Presentation_context_definition_list,
                                  $.BER
                              )(
                                  value.presentation_context_definition_list,
                                  $.BER
                              ),
                        /* IF_ABSENT  */ value.default_context_name ===
                        undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  6,
                                  () => _encode_Default_context_name,
                                  $.BER
                              )(value.default_context_name, $.BER),
                        /* IF_ABSENT  */ value.presentation_requirements ===
                        undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  8,
                                  () => _encode_Presentation_requirements,
                                  $.BER
                              )(value.presentation_requirements, $.BER),
                        /* IF_ABSENT  */ value.user_session_requirements ===
                        undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  9,
                                  () => _encode_User_session_requirements,
                                  $.BER
                              )(value.user_session_requirements, $.BER),
                        /* IF_DEFAULT */ value.protocol_options === undefined ||
                        $.deepEq(
                            value.protocol_options,
                            CP_type_normal_mode_parameters._default_value_for_protocol_options
                        )
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  11,
                                  () => _encode_Protocol_options,
                                  $.BER
                              )(value.protocol_options, $.BER),
                        /* IF_ABSENT  */ value.initiators_nominated_context ===
                        undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  12,
                                  () => _encode_Presentation_context_identifier,
                                  $.BER
                              )(value.initiators_nominated_context, $.BER),
                        /* IF_ABSENT  */ value.extensions === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  14,
                                  () =>
                                      _encode_CP_type_normal_mode_parameters_extensions,
                                  $.BER
                              )(value.extensions, $.BER),
                        /* IF_ABSENT  */ value.user_data === undefined
                            ? undefined
                            : _encode_User_data(value.user_data, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_CP_type_normal_mode_parameters(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_CP_type_normal_mode_parameters */

/* eslint-enable */
