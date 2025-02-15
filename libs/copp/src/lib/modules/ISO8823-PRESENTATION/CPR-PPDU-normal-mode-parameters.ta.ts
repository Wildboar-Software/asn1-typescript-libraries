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
    Protocol_version,
    Protocol_version_version_1 /* IMPORTED_LONG_NAMED_BIT */,
    version_1 /* IMPORTED_SHORT_NAMED_BIT */,
    _decode_Protocol_version,
    _encode_Protocol_version,
} from '../ISO8823-PRESENTATION/Protocol-version.ta';
export {
    Protocol_version,
    Protocol_version_version_1 /* IMPORTED_LONG_NAMED_BIT */,
    version_1 /* IMPORTED_SHORT_NAMED_BIT */,
    _decode_Protocol_version,
    _encode_Protocol_version,
} from '../ISO8823-PRESENTATION/Protocol-version.ta';
import {
    Responding_presentation_selector,
    _decode_Responding_presentation_selector,
    _encode_Responding_presentation_selector,
} from '../ISO8823-PRESENTATION/Responding-presentation-selector.ta';
export {
    Responding_presentation_selector,
    _decode_Responding_presentation_selector,
    _encode_Responding_presentation_selector,
} from '../ISO8823-PRESENTATION/Responding-presentation-selector.ta';
import {
    Presentation_context_definition_result_list,
    _decode_Presentation_context_definition_result_list,
    _encode_Presentation_context_definition_result_list,
} from '../ISO8823-PRESENTATION/Presentation-context-definition-result-list.ta';
export {
    Presentation_context_definition_result_list,
    _decode_Presentation_context_definition_result_list,
    _encode_Presentation_context_definition_result_list,
} from '../ISO8823-PRESENTATION/Presentation-context-definition-result-list.ta';
import {
    Default_context_result,
    _decode_Default_context_result,
    _encode_Default_context_result,
} from '../ISO8823-PRESENTATION/Default-context-result.ta';
export {
    Default_context_result,
    _decode_Default_context_result,
    _encode_Default_context_result,
} from '../ISO8823-PRESENTATION/Default-context-result.ta';
import {
    Provider_reason,
    Provider_reason_reason_not_specified /* IMPORTED_LONG_NAMED_INTEGER */,
    reason_not_specified /* IMPORTED_SHORT_NAMED_INTEGER */,
    Provider_reason_temporary_congestion /* IMPORTED_LONG_NAMED_INTEGER */,
    temporary_congestion /* IMPORTED_SHORT_NAMED_INTEGER */,
    Provider_reason_local_limit_exceeded /* IMPORTED_LONG_NAMED_INTEGER */,
    local_limit_exceeded /* IMPORTED_SHORT_NAMED_INTEGER */,
    Provider_reason_called_presentation_address_unknown /* IMPORTED_LONG_NAMED_INTEGER */,
    called_presentation_address_unknown /* IMPORTED_SHORT_NAMED_INTEGER */,
    Provider_reason_protocol_version_not_supported /* IMPORTED_LONG_NAMED_INTEGER */,
    protocol_version_not_supported /* IMPORTED_SHORT_NAMED_INTEGER */,
    Provider_reason_default_context_not_supported /* IMPORTED_LONG_NAMED_INTEGER */,
    default_context_not_supported /* IMPORTED_SHORT_NAMED_INTEGER */,
    Provider_reason_user_data_not_readable /* IMPORTED_LONG_NAMED_INTEGER */,
    user_data_not_readable /* IMPORTED_SHORT_NAMED_INTEGER */,
    Provider_reason_no_PSAP_available /* IMPORTED_LONG_NAMED_INTEGER */,
    no_PSAP_available /* IMPORTED_SHORT_NAMED_INTEGER */,
    _decode_Provider_reason,
    _encode_Provider_reason,
} from '../ISO8823-PRESENTATION/Provider-reason.ta';
export {
    Provider_reason,
    Provider_reason_reason_not_specified /* IMPORTED_LONG_NAMED_INTEGER */,
    reason_not_specified /* IMPORTED_SHORT_NAMED_INTEGER */,
    Provider_reason_temporary_congestion /* IMPORTED_LONG_NAMED_INTEGER */,
    temporary_congestion /* IMPORTED_SHORT_NAMED_INTEGER */,
    Provider_reason_local_limit_exceeded /* IMPORTED_LONG_NAMED_INTEGER */,
    local_limit_exceeded /* IMPORTED_SHORT_NAMED_INTEGER */,
    Provider_reason_called_presentation_address_unknown /* IMPORTED_LONG_NAMED_INTEGER */,
    called_presentation_address_unknown /* IMPORTED_SHORT_NAMED_INTEGER */,
    Provider_reason_protocol_version_not_supported /* IMPORTED_LONG_NAMED_INTEGER */,
    protocol_version_not_supported /* IMPORTED_SHORT_NAMED_INTEGER */,
    Provider_reason_default_context_not_supported /* IMPORTED_LONG_NAMED_INTEGER */,
    default_context_not_supported /* IMPORTED_SHORT_NAMED_INTEGER */,
    Provider_reason_user_data_not_readable /* IMPORTED_LONG_NAMED_INTEGER */,
    user_data_not_readable /* IMPORTED_SHORT_NAMED_INTEGER */,
    Provider_reason_no_PSAP_available /* IMPORTED_LONG_NAMED_INTEGER */,
    no_PSAP_available /* IMPORTED_SHORT_NAMED_INTEGER */,
    _decode_Provider_reason,
    _encode_Provider_reason,
} from '../ISO8823-PRESENTATION/Provider-reason.ta';
import {
    User_data,
    _decode_User_data,
    _encode_User_data,
} from '../ISO8823-PRESENTATION/User-data.ta';
export {
    User_data,
    _decode_User_data,
    _encode_User_data,
} from '../ISO8823-PRESENTATION/User-data.ta';

/* START_OF_SYMBOL_DEFINITION CPR_PPDU_normal_mode_parameters */
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
            const _ret = new Uint8ClampedArray(Math.max(0));
            _ret[Protocol_version_version_1] = TRUE_BIT;
            return _ret;
        })();
    }
}
/* END_OF_SYMBOL_DEFINITION CPR_PPDU_normal_mode_parameters */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_CPR_PPDU_normal_mode_parameters */
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
        'default-context-result',
        true,
        $.hasTag(_TagClass.context, 7),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'provider-reason',
        true,
        $.hasTag(_TagClass.context, 10),
        undefined,
        undefined
    ),
    new $.ComponentSpec('user-data', true, $.hasAnyTag, undefined, undefined),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_CPR_PPDU_normal_mode_parameters */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_CPR_PPDU_normal_mode_parameters */
/**
 * @summary The Trailing Root Component Types of CPR_PPDU_normal_mode_parameters
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CPR_PPDU_normal_mode_parameters: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_CPR_PPDU_normal_mode_parameters */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_CPR_PPDU_normal_mode_parameters */
/**
 * @summary The Extension Addition Component Types of CPR_PPDU_normal_mode_parameters
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CPR_PPDU_normal_mode_parameters: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_CPR_PPDU_normal_mode_parameters */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CPR_PPDU_normal_mode_parameters */
let _cached_decoder_for_CPR_PPDU_normal_mode_parameters: $.ASN1Decoder<CPR_PPDU_normal_mode_parameters> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CPR_PPDU_normal_mode_parameters */

/* START_OF_SYMBOL_DEFINITION _decode_CPR_PPDU_normal_mode_parameters */
/**
 * @summary Decodes an ASN.1 element into a(n) CPR_PPDU_normal_mode_parameters
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CPR_PPDU_normal_mode_parameters} The decoded data structure.
 */
export function _decode_CPR_PPDU_normal_mode_parameters(el: _Element) {
    if (!_cached_decoder_for_CPR_PPDU_normal_mode_parameters) {
        _cached_decoder_for_CPR_PPDU_normal_mode_parameters = function (
            el: _Element
        ): CPR_PPDU_normal_mode_parameters {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let protocol_version: OPTIONAL<Protocol_version> =
                CPR_PPDU_normal_mode_parameters._default_value_for_protocol_version;
            let responding_presentation_selector: OPTIONAL<Responding_presentation_selector>;
            let presentation_context_definition_result_list: OPTIONAL<Presentation_context_definition_result_list>;
            let default_context_result: OPTIONAL<Default_context_result>;
            let provider_reason: OPTIONAL<Provider_reason>;
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
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_CPR_PPDU_normal_mode_parameters,
                _extension_additions_list_spec_for_CPR_PPDU_normal_mode_parameters,
                _root_component_type_list_2_spec_for_CPR_PPDU_normal_mode_parameters,
                undefined
            );
            return new CPR_PPDU_normal_mode_parameters /* SEQUENCE_CONSTRUCTOR_CALL */(
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
/* END_OF_SYMBOL_DEFINITION _decode_CPR_PPDU_normal_mode_parameters */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CPR_PPDU_normal_mode_parameters */
let _cached_encoder_for_CPR_PPDU_normal_mode_parameters: $.ASN1Encoder<CPR_PPDU_normal_mode_parameters> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CPR_PPDU_normal_mode_parameters */

/* START_OF_SYMBOL_DEFINITION _encode_CPR_PPDU_normal_mode_parameters */
/**
 * @summary Encodes a(n) CPR_PPDU_normal_mode_parameters into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CPR_PPDU_normal_mode_parameters, encoded as an ASN.1 Element.
 */
export function _encode_CPR_PPDU_normal_mode_parameters(
    value: CPR_PPDU_normal_mode_parameters,
    elGetter: $.ASN1Encoder<CPR_PPDU_normal_mode_parameters>
) {
    if (!_cached_encoder_for_CPR_PPDU_normal_mode_parameters) {
        _cached_encoder_for_CPR_PPDU_normal_mode_parameters = function (
            value: CPR_PPDU_normal_mode_parameters,
            elGetter: $.ASN1Encoder<CPR_PPDU_normal_mode_parameters>
        ): _Element {
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

/* END_OF_SYMBOL_DEFINITION _encode_CPR_PPDU_normal_mode_parameters */

/* eslint-enable */
