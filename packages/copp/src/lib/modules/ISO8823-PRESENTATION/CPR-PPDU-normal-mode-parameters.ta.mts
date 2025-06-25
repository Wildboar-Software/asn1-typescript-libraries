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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
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
    Default_context_result,
    _decode_Default_context_result,
    _encode_Default_context_result,
} from '../ISO8823-PRESENTATION/Default-context-result.ta.mjs';
import {
    Provider_reason,
    _decode_Provider_reason,
    _encode_Provider_reason,
} from '../ISO8823-PRESENTATION/Provider-reason.ta.mjs';
import {
    User_data,
    _decode_User_data,
    _encode_User_data,
} from '../ISO8823-PRESENTATION/User-data.ta.mjs';

/**
 * @summary CPR_PPDU_normal_mode_parameters
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CPR-PPDU-normal-mode-parameters ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class CPR_PPDU_normal_mode_parameters {
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
         * @summary `default_context_result`.
         * @public
         * @readonly
         */
        readonly default_context_result: OPTIONAL<Default_context_result>,
        /**
         * @summary `provider_reason`.
         * @public
         * @readonly
         */
        readonly provider_reason: OPTIONAL<Provider_reason>,
        /**
         * @summary `user_data`.
         * @public
         * @readonly
         */
        readonly user_data: OPTIONAL<User_data>
    ) {}

    /**
     * @summary Restructures an object into a CPR_PPDU_normal_mode_parameters
     * @description
     *
     * This takes an `object` and converts it to a `CPR_PPDU_normal_mode_parameters`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CPR_PPDU_normal_mode_parameters`.
     * @returns {CPR_PPDU_normal_mode_parameters}
     */
    public static _from_object(
        _o: {
            [_K in keyof CPR_PPDU_normal_mode_parameters]: CPR_PPDU_normal_mode_parameters[_K];
        }
    ): CPR_PPDU_normal_mode_parameters {
        return new CPR_PPDU_normal_mode_parameters(
            _o.protocol_version,
            _o.responding_presentation_selector,
            _o.presentation_context_definition_result_list,
            _o.default_context_result,
            _o.provider_reason,
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
}


/**
 * @summary The Leading Root Component Types of CPR_PPDU_normal_mode_parameters
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CPR_PPDU_normal_mode_parameters: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'protocol-version',
        true,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        'responding-presentation-selector',
        true,
        $.hasTag(_TagClass.context, 3)
    ),
    new $.ComponentSpec(
        'presentation-context-definition-result-list',
        true,
        $.hasTag(_TagClass.context, 5)
    ),
    new $.ComponentSpec(
        'default-context-result',
        true,
        $.hasTag(_TagClass.context, 7)
    ),
    new $.ComponentSpec(
        'provider-reason',
        true,
        $.hasTag(_TagClass.context, 10)
    ),
    new $.ComponentSpec('user-data', true, $.hasAnyTag),
];


/**
 * @summary The Trailing Root Component Types of CPR_PPDU_normal_mode_parameters
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CPR_PPDU_normal_mode_parameters: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of CPR_PPDU_normal_mode_parameters
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CPR_PPDU_normal_mode_parameters: $.ComponentSpec[] = [];


let _cached_decoder_for_CPR_PPDU_normal_mode_parameters: $.ASN1Decoder<CPR_PPDU_normal_mode_parameters> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) CPR_PPDU_normal_mode_parameters
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CPR_PPDU_normal_mode_parameters} The decoded data structure.
 */
export function _decode_CPR_PPDU_normal_mode_parameters(el: _Element): CPR_PPDU_normal_mode_parameters {
    if (!_cached_decoder_for_CPR_PPDU_normal_mode_parameters) {
        _cached_decoder_for_CPR_PPDU_normal_mode_parameters = function (
            el: _Element
        ): CPR_PPDU_normal_mode_parameters {
            let protocol_version: OPTIONAL<Protocol_version> =
                CPR_PPDU_normal_mode_parameters._default_value_for_protocol_version;
            let responding_presentation_selector: OPTIONAL<Responding_presentation_selector>;
            let presentation_context_definition_result_list: OPTIONAL<Presentation_context_definition_result_list>;
            let default_context_result: OPTIONAL<Default_context_result>;
            let provider_reason: OPTIONAL<Provider_reason>;
            let user_data: OPTIONAL<User_data>;
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
                'default-context-result': (_el: _Element): void => {
                    default_context_result = $._decode_implicit<Default_context_result>(
                        () => _decode_Default_context_result
                    )(_el);
                },
                'provider-reason': (_el: _Element): void => {
                    provider_reason = $._decode_implicit<Provider_reason>(
                        () => _decode_Provider_reason
                    )(_el);
                },
                'user-data': (_el: _Element): void => {
                    user_data = _decode_User_data(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_CPR_PPDU_normal_mode_parameters,
                _extension_additions_list_spec_for_CPR_PPDU_normal_mode_parameters,
                _root_component_type_list_2_spec_for_CPR_PPDU_normal_mode_parameters,
                undefined
            );
            return new CPR_PPDU_normal_mode_parameters (
                protocol_version,
                responding_presentation_selector,
                presentation_context_definition_result_list,
                default_context_result,
                provider_reason,
                user_data
            );
        };
    }
    return _cached_decoder_for_CPR_PPDU_normal_mode_parameters(el);
}


let _cached_encoder_for_CPR_PPDU_normal_mode_parameters: $.ASN1Encoder<CPR_PPDU_normal_mode_parameters> | null = null;


/**
 * @summary Encodes a(n) CPR_PPDU_normal_mode_parameters into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CPR_PPDU_normal_mode_parameters, encoded as an ASN.1 Element.
 */
export function _encode_CPR_PPDU_normal_mode_parameters(
    value: CPR_PPDU_normal_mode_parameters,
    elGetter: $.ASN1Encoder<CPR_PPDU_normal_mode_parameters>
): _Element {
    if (!_cached_encoder_for_CPR_PPDU_normal_mode_parameters) {
        _cached_encoder_for_CPR_PPDU_normal_mode_parameters = function (
            value: CPR_PPDU_normal_mode_parameters        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_DEFAULT */ value.protocol_version === undefined ||
                        $.deepEq(
                            value.protocol_version,
                            CPR_PPDU_normal_mode_parameters._default_value_for_protocol_version
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
                        /* IF_ABSENT  */ value.default_context_result ===
                        undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  7,
                                  () => _encode_Default_context_result,
                                  $.BER
                              )(value.default_context_result, $.BER),
                        /* IF_ABSENT  */ value.provider_reason === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  10,
                                  () => _encode_Provider_reason,
                                  $.BER
                              )(value.provider_reason, $.BER),
                        /* IF_ABSENT  */ value.user_data === undefined
                            ? undefined
                            : _encode_User_data(value.user_data, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_CPR_PPDU_normal_mode_parameters(value, elGetter);
}


/* eslint-enable */
