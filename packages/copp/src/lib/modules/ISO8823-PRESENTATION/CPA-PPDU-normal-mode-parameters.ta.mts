/* eslint-disable */
import {
    OPTIONAL,
    TRUE_BIT,
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
    _decode_Protocol_version,
    _encode_Protocol_version,
} from '../ISO8823-PRESENTATION/Protocol-version.ta.mjs';
import {
    Responding_presentation_selector,
    _decode_Responding_presentation_selector,
    _encode_Responding_presentation_selector,
} from '../ISO8823-PRESENTATION/Responding-presentation-selector.ta.mjs';
import {
    Presentation_context_definition_result_list,
    _decode_Presentation_context_definition_result_list,
    _encode_Presentation_context_definition_result_list,
} from '../ISO8823-PRESENTATION/Presentation-context-definition-result-list.ta.mjs';
import {
    Presentation_requirements,
    _decode_Presentation_requirements,
    _encode_Presentation_requirements,
} from '../ISO8823-PRESENTATION/Presentation-requirements.ta.mjs';
import {
    User_session_requirements,
    _decode_User_session_requirements,
    _encode_User_session_requirements,
} from '../ISO8823-PRESENTATION/User-session-requirements.ta.mjs';
import {
    Protocol_options,
    _decode_Protocol_options,
    _encode_Protocol_options,
} from '../ISO8823-PRESENTATION/Protocol-options.ta.mjs';
import {
    Presentation_context_identifier,
    _decode_Presentation_context_identifier,
    _encode_Presentation_context_identifier,
} from '../ISO8823-PRESENTATION/Presentation-context-identifier.ta.mjs';
import {
    User_data,
    _decode_User_data,
    _encode_User_data,
} from '../ISO8823-PRESENTATION/User-data.ta.mjs';
/* START_OF_SYMBOL_DEFINITION CPA_PPDU_normal_mode_parameters */
/**
 * @summary CPA_PPDU_normal_mode_parameters
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CPA-PPDU-normal-mode-parameters ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class CPA_PPDU_normal_mode_parameters {
    constructor(
        /**
         * @summary `protocol_version`.
         * @public
         * @readonly
         */
        readonly protocol_version: OPTIONAL<Protocol_version>,
        /**
         * @summary `responding_presentation_selector`.
         * @public
         * @readonly
         */
        readonly responding_presentation_selector: OPTIONAL<Responding_presentation_selector>,
        /**
         * @summary `presentation_context_definition_result_list`.
         * @public
         * @readonly
         */
        readonly presentation_context_definition_result_list: OPTIONAL<Presentation_context_definition_result_list>,
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
         * @summary `responders_nominated_context`.
         * @public
         * @readonly
         */
        readonly responders_nominated_context: OPTIONAL<Presentation_context_identifier>,
        /**
         * @summary `user_data`.
         * @public
         * @readonly
         */
        readonly user_data: OPTIONAL<User_data>
    ) {}

    /**
     * @summary Restructures an object into a CPA_PPDU_normal_mode_parameters
     * @description
     *
     * This takes an `object` and converts it to a `CPA_PPDU_normal_mode_parameters`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CPA_PPDU_normal_mode_parameters`.
     * @returns {CPA_PPDU_normal_mode_parameters}
     */
    public static _from_object(
        _o: {
            [_K in keyof CPA_PPDU_normal_mode_parameters]: CPA_PPDU_normal_mode_parameters[_K];
        }
    ): CPA_PPDU_normal_mode_parameters {
        return new CPA_PPDU_normal_mode_parameters(
            _o.protocol_version,
            _o.responding_presentation_selector,
            _o.presentation_context_definition_result_list,
            _o.presentation_requirements,
            _o.user_session_requirements,
            _o.protocol_options,
            _o.responders_nominated_context,
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
            const _ret = new Uint8ClampedArray(1);
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
/* END_OF_SYMBOL_DEFINITION CPA_PPDU_normal_mode_parameters */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_CPA_PPDU_normal_mode_parameters */
/**
 * @summary The Leading Root Component Types of CPA_PPDU_normal_mode_parameters
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CPA_PPDU_normal_mode_parameters: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'protocol-version',
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'responding-presentation-selector',
        true,
        $.hasTag(_TagClass.context, 3),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'presentation-context-definition-result-list',
        true,
        $.hasTag(_TagClass.context, 5),
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
        'responders-nominated-context',
        true,
        $.hasTag(_TagClass.context, 13),
        undefined,
        undefined
    ),
    new $.ComponentSpec('user-data', true, $.hasAnyTag, undefined, undefined),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_CPA_PPDU_normal_mode_parameters */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_CPA_PPDU_normal_mode_parameters */
/**
 * @summary The Trailing Root Component Types of CPA_PPDU_normal_mode_parameters
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CPA_PPDU_normal_mode_parameters: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_CPA_PPDU_normal_mode_parameters */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_CPA_PPDU_normal_mode_parameters */
/**
 * @summary The Extension Addition Component Types of CPA_PPDU_normal_mode_parameters
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CPA_PPDU_normal_mode_parameters: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_CPA_PPDU_normal_mode_parameters */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CPA_PPDU_normal_mode_parameters */
let _cached_decoder_for_CPA_PPDU_normal_mode_parameters: $.ASN1Decoder<CPA_PPDU_normal_mode_parameters> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CPA_PPDU_normal_mode_parameters */

/* START_OF_SYMBOL_DEFINITION _decode_CPA_PPDU_normal_mode_parameters */
/**
 * @summary Decodes an ASN.1 element into a(n) CPA_PPDU_normal_mode_parameters
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CPA_PPDU_normal_mode_parameters} The decoded data structure.
 */
export function _decode_CPA_PPDU_normal_mode_parameters(el: _Element) {
    if (!_cached_decoder_for_CPA_PPDU_normal_mode_parameters) {
        _cached_decoder_for_CPA_PPDU_normal_mode_parameters = function (
            el: _Element
        ): CPA_PPDU_normal_mode_parameters {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let protocol_version: OPTIONAL<Protocol_version> =
                CPA_PPDU_normal_mode_parameters._default_value_for_protocol_version;
            let responding_presentation_selector: OPTIONAL<Responding_presentation_selector>;
            let presentation_context_definition_result_list: OPTIONAL<Presentation_context_definition_result_list>;
            let presentation_requirements: OPTIONAL<Presentation_requirements>;
            let user_session_requirements: OPTIONAL<User_session_requirements>;
            let protocol_options: OPTIONAL<Protocol_options> =
                CPA_PPDU_normal_mode_parameters._default_value_for_protocol_options;
            let responders_nominated_context: OPTIONAL<Presentation_context_identifier>;
            let user_data: OPTIONAL<User_data>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                'protocol-version': (_el: _Element): void => {
                    protocol_version = $._decode_implicit<Protocol_version>(
                        () => _decode_Protocol_version
                    )(_el);
                },
                'responding-presentation-selector': (_el: _Element): void => {
                    responding_presentation_selector = $._decode_implicit<Responding_presentation_selector>(
                        () => _decode_Responding_presentation_selector
                    )(_el);
                },
                'presentation-context-definition-result-list': (
                    _el: _Element
                ): void => {
                    presentation_context_definition_result_list = $._decode_implicit<Presentation_context_definition_result_list>(
                        () =>
                            _decode_Presentation_context_definition_result_list
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
                'responders-nominated-context': (_el: _Element): void => {
                    responders_nominated_context = $._decode_explicit<Presentation_context_identifier>(
                        () => _decode_Presentation_context_identifier
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
                _root_component_type_list_1_spec_for_CPA_PPDU_normal_mode_parameters,
                _extension_additions_list_spec_for_CPA_PPDU_normal_mode_parameters,
                _root_component_type_list_2_spec_for_CPA_PPDU_normal_mode_parameters,
                undefined
            );
            return new CPA_PPDU_normal_mode_parameters /* SEQUENCE_CONSTRUCTOR_CALL */(
                protocol_version,
                responding_presentation_selector,
                presentation_context_definition_result_list,
                presentation_requirements,
                user_session_requirements,
                protocol_options,
                responders_nominated_context,
                user_data
            );
        };
    }
    return _cached_decoder_for_CPA_PPDU_normal_mode_parameters(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CPA_PPDU_normal_mode_parameters */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CPA_PPDU_normal_mode_parameters */
let _cached_encoder_for_CPA_PPDU_normal_mode_parameters: $.ASN1Encoder<CPA_PPDU_normal_mode_parameters> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CPA_PPDU_normal_mode_parameters */

/* START_OF_SYMBOL_DEFINITION _encode_CPA_PPDU_normal_mode_parameters */
/**
 * @summary Encodes a(n) CPA_PPDU_normal_mode_parameters into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CPA_PPDU_normal_mode_parameters, encoded as an ASN.1 Element.
 */
export function _encode_CPA_PPDU_normal_mode_parameters(
    value: CPA_PPDU_normal_mode_parameters,
    elGetter: $.ASN1Encoder<CPA_PPDU_normal_mode_parameters>
) {
    if (!_cached_encoder_for_CPA_PPDU_normal_mode_parameters) {
        _cached_encoder_for_CPA_PPDU_normal_mode_parameters = function (
            value: CPA_PPDU_normal_mode_parameters        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_DEFAULT */ value.protocol_version === undefined ||
                        $.deepEq(
                            value.protocol_version,
                            CPA_PPDU_normal_mode_parameters._default_value_for_protocol_version
                        )
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  0,
                                  () => _encode_Protocol_version,
                                  $.BER
                              )(value.protocol_version, $.BER),
                        /* IF_ABSENT  */ value.responding_presentation_selector ===
                        undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  3,
                                  () =>
                                      _encode_Responding_presentation_selector,
                                  $.BER
                              )(value.responding_presentation_selector, $.BER),
                        /* IF_ABSENT  */ value.presentation_context_definition_result_list ===
                        undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  5,
                                  () =>
                                      _encode_Presentation_context_definition_result_list,
                                  $.BER
                              )(
                                  value.presentation_context_definition_result_list,
                                  $.BER
                              ),
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
                            CPA_PPDU_normal_mode_parameters._default_value_for_protocol_options
                        )
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  11,
                                  () => _encode_Protocol_options,
                                  $.BER
                              )(value.protocol_options, $.BER),
                        /* IF_ABSENT  */ value.responders_nominated_context ===
                        undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  13,
                                  () => _encode_Presentation_context_identifier,
                                  $.BER
                              )(value.responders_nominated_context, $.BER),
                        /* IF_ABSENT  */ value.user_data === undefined
                            ? undefined
                            : _encode_User_data(value.user_data, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_CPA_PPDU_normal_mode_parameters(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_CPA_PPDU_normal_mode_parameters */

/* eslint-enable */
