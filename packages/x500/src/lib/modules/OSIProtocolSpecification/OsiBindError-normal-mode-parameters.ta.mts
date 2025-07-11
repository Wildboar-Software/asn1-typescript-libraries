/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
    TRUE_BIT,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    OsiBindError_normal_mode_parameters_protocol_version,
    OsiBindError_normal_mode_parameters_protocol_version_version_1 /* IMPORTED_LONG_NAMED_BIT */,
    _decode_OsiBindError_normal_mode_parameters_protocol_version,
    _encode_OsiBindError_normal_mode_parameters_protocol_version,
} from "../OSIProtocolSpecification/OsiBindError-normal-mode-parameters-protocol-version.ta.mjs";
import {
    OsiBindError_normal_mode_parameters_user_data,
    _decode_OsiBindError_normal_mode_parameters_user_data,
    _encode_OsiBindError_normal_mode_parameters_user_data,
} from "../OSIProtocolSpecification/OsiBindError-normal-mode-parameters-user-data.ta.mjs";
import {
    Presentation_selector,
    _decode_Presentation_selector,
    _encode_Presentation_selector,
} from "../OSIProtocolSpecification/Presentation-selector.ta.mjs";
import {
    Provider_reason,
    _decode_Provider_reason,
    _encode_Provider_reason,
} from "../OSIProtocolSpecification/Provider-reason.ta.mjs";
import {
    Result_list,
    _decode_Result_list,
    _encode_Result_list,
} from "../OSIProtocolSpecification/Result-list.ta.mjs";
/**
 * @summary OsiBindError_normal_mode_parameters
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OsiBindError-normal-mode-parameters ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 */
export class OsiBindError_normal_mode_parameters {
    constructor(
        /**
         * @summary `protocol_version`.
         * @public
         * @readonly
         */
        readonly protocol_version: OPTIONAL<OsiBindError_normal_mode_parameters_protocol_version>,
        /**
         * @summary `responding_presentation_selector`.
         * @public
         * @readonly
         */
        readonly responding_presentation_selector: OPTIONAL<Presentation_selector>,
        /**
         * @summary `presentation_context_definition_result_list`.
         * @public
         * @readonly
         */
        readonly presentation_context_definition_result_list: OPTIONAL<Result_list>,
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
        readonly user_data: OPTIONAL<OsiBindError_normal_mode_parameters_user_data>
    ) {}

    /**
     * @summary Restructures an object into a OsiBindError_normal_mode_parameters
     * @description
     *
     * This takes an `object` and converts it to a `OsiBindError_normal_mode_parameters`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `OsiBindError_normal_mode_parameters`.
     * @returns {OsiBindError_normal_mode_parameters}
     */
    public static _from_object(
        _o: {
            [_K in keyof OsiBindError_normal_mode_parameters]: OsiBindError_normal_mode_parameters[_K];
        }
    ): OsiBindError_normal_mode_parameters {
        return new OsiBindError_normal_mode_parameters(
            _o.protocol_version,
            _o.responding_presentation_selector,
            _o.presentation_context_definition_result_list,
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
    public static get _default_value_for_protocol_version(): OsiBindError_normal_mode_parameters_protocol_version {
        return (() => {
            const _ret = new Uint8ClampedArray(1);
            _ret[
                OsiBindError_normal_mode_parameters_protocol_version_version_1
            ] = TRUE_BIT;
            return _ret;
        })();
    }
}

/**
 * @summary The Leading Root Component Types of OsiBindError_normal_mode_parameters
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_OsiBindError_normal_mode_parameters: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "protocol-version",
        true,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        "responding-presentation-selector",
        true,
        $.hasTag(_TagClass.context, 3)
    ),
    new $.ComponentSpec(
        "presentation-context-definition-result-list",
        true,
        $.hasTag(_TagClass.context, 5)
    ),
    new $.ComponentSpec(
        "provider-reason",
        true,
        $.hasTag(_TagClass.context, 10)
    ),
    new $.ComponentSpec("user-data", true, $.hasAnyTag),
];

/**
 * @summary The Trailing Root Component Types of OsiBindError_normal_mode_parameters
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_OsiBindError_normal_mode_parameters: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of OsiBindError_normal_mode_parameters
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_OsiBindError_normal_mode_parameters: $.ComponentSpec[] = [];

let _cached_decoder_for_OsiBindError_normal_mode_parameters: $.ASN1Decoder<OsiBindError_normal_mode_parameters> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) OsiBindError_normal_mode_parameters
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OsiBindError_normal_mode_parameters} The decoded data structure.
 */
export function _decode_OsiBindError_normal_mode_parameters(el: _Element): OsiBindError_normal_mode_parameters {
    if (!_cached_decoder_for_OsiBindError_normal_mode_parameters) {
        _cached_decoder_for_OsiBindError_normal_mode_parameters = function (
            el: _Element
        ): OsiBindError_normal_mode_parameters {
            let protocol_version: OPTIONAL<OsiBindError_normal_mode_parameters_protocol_version> =
                OsiBindError_normal_mode_parameters._default_value_for_protocol_version;
            let responding_presentation_selector: OPTIONAL<Presentation_selector>;
            let presentation_context_definition_result_list: OPTIONAL<Result_list>;
            let provider_reason: OPTIONAL<Provider_reason>;
            let user_data: OPTIONAL<OsiBindError_normal_mode_parameters_user_data>;
            const callbacks: $.DecodingMap = {
                "protocol-version": (_el: _Element): void => {
                    protocol_version = $._decode_implicit<OsiBindError_normal_mode_parameters_protocol_version>(
                        () =>
                            _decode_OsiBindError_normal_mode_parameters_protocol_version
                    )(_el);
                },
                "responding-presentation-selector": (_el: _Element): void => {
                    responding_presentation_selector = $._decode_implicit<Presentation_selector>(
                        () => _decode_Presentation_selector
                    )(_el);
                },
                "presentation-context-definition-result-list": (
                    _el: _Element
                ): void => {
                    presentation_context_definition_result_list = $._decode_implicit<Result_list>(
                        () => _decode_Result_list
                    )(_el);
                },
                "provider-reason": (_el: _Element): void => {
                    provider_reason = $._decode_implicit<Provider_reason>(
                        () => _decode_Provider_reason
                    )(_el);
                },
                "user-data": (_el: _Element): void => {
                    user_data = _decode_OsiBindError_normal_mode_parameters_user_data(
                        _el
                    );
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_OsiBindError_normal_mode_parameters,
                _extension_additions_list_spec_for_OsiBindError_normal_mode_parameters,
                _root_component_type_list_2_spec_for_OsiBindError_normal_mode_parameters,
                undefined
            );
            return new OsiBindError_normal_mode_parameters(
                protocol_version,
                responding_presentation_selector,
                presentation_context_definition_result_list,
                provider_reason,
                user_data
            );
        };
    }
    return _cached_decoder_for_OsiBindError_normal_mode_parameters(el);
}

let _cached_encoder_for_OsiBindError_normal_mode_parameters: $.ASN1Encoder<OsiBindError_normal_mode_parameters> | null = null;

/**
 * @summary Encodes a(n) OsiBindError_normal_mode_parameters into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OsiBindError_normal_mode_parameters, encoded as an ASN.1 Element.
 */
export function _encode_OsiBindError_normal_mode_parameters(
    value: OsiBindError_normal_mode_parameters,
    elGetter: $.ASN1Encoder<OsiBindError_normal_mode_parameters>
): _Element {
    if (!_cached_encoder_for_OsiBindError_normal_mode_parameters) {
        _cached_encoder_for_OsiBindError_normal_mode_parameters = function (
            value: OsiBindError_normal_mode_parameters        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_DEFAULT */ value.protocol_version === undefined ||
                        $.deepEq(
                            value.protocol_version,
                            OsiBindError_normal_mode_parameters._default_value_for_protocol_version
                        )
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  0,
                                  () =>
                                      _encode_OsiBindError_normal_mode_parameters_protocol_version,
                                  $.DER
                              )(value.protocol_version, $.DER),
                        /* IF_ABSENT  */ value.responding_presentation_selector ===
                        undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  3,
                                  () => _encode_Presentation_selector,
                                  $.DER
                              )(value.responding_presentation_selector, $.DER),
                        /* IF_ABSENT  */ value.presentation_context_definition_result_list ===
                        undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  5,
                                  () => _encode_Result_list,
                                  $.DER
                              )(
                                  value.presentation_context_definition_result_list,
                                  $.DER
                              ),
                        /* IF_ABSENT  */ value.provider_reason === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  10,
                                  () => _encode_Provider_reason,
                                  $.DER
                              )(value.provider_reason, $.DER),
                        /* IF_ABSENT  */ value.user_data === undefined
                            ? undefined
                            : _encode_OsiBindError_normal_mode_parameters_user_data(
                                  value.user_data,
                                  $.DER
                              ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.DER
            );
        };
    }
    return _cached_encoder_for_OsiBindError_normal_mode_parameters(
        value,
        elGetter
    );
}


/* eslint-enable */
