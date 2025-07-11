/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
    TRUE_BIT,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    Context_list,
    _decode_Context_list,
    _encode_Context_list,
} from "../OSIProtocolSpecification/Context-list.ta.mjs";
import {
    OsiBind_normal_mode_parameters_protocol_version,
    OsiBind_normal_mode_parameters_protocol_version_version_1 /* IMPORTED_LONG_NAMED_BIT */,
    _decode_OsiBind_normal_mode_parameters_protocol_version,
    _encode_OsiBind_normal_mode_parameters_protocol_version,
} from "../OSIProtocolSpecification/OsiBind-normal-mode-parameters-protocol-version.ta.mjs";
import {
    OsiBind_normal_mode_parameters_user_data,
    _decode_OsiBind_normal_mode_parameters_user_data,
    _encode_OsiBind_normal_mode_parameters_user_data,
} from "../OSIProtocolSpecification/OsiBind-normal-mode-parameters-user-data.ta.mjs";
import {
    Presentation_selector,
    _decode_Presentation_selector,
    _encode_Presentation_selector,
} from "../OSIProtocolSpecification/Presentation-selector.ta.mjs";
/**
 * @summary OsiBind_normal_mode_parameters
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OsiBind-normal-mode-parameters ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 */
export class OsiBind_normal_mode_parameters {
    constructor(
        /**
         * @summary `protocol_version`.
         * @public
         * @readonly
         */
        readonly protocol_version: OPTIONAL<OsiBind_normal_mode_parameters_protocol_version>,
        /**
         * @summary `calling_presentation_selector`.
         * @public
         * @readonly
         */
        readonly calling_presentation_selector: OPTIONAL<Presentation_selector>,
        /**
         * @summary `called_presentation_selector`.
         * @public
         * @readonly
         */
        readonly called_presentation_selector: OPTIONAL<Presentation_selector>,
        /**
         * @summary `presentation_context_definition_list`.
         * @public
         * @readonly
         */
        readonly presentation_context_definition_list: Context_list,
        /**
         * @summary `user_data`.
         * @public
         * @readonly
         */
        readonly user_data: OsiBind_normal_mode_parameters_user_data
    ) {}

    /**
     * @summary Restructures an object into a OsiBind_normal_mode_parameters
     * @description
     *
     * This takes an `object` and converts it to a `OsiBind_normal_mode_parameters`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `OsiBind_normal_mode_parameters`.
     * @returns {OsiBind_normal_mode_parameters}
     */
    public static _from_object(
        _o: {
            [_K in keyof OsiBind_normal_mode_parameters]: OsiBind_normal_mode_parameters[_K];
        }
    ): OsiBind_normal_mode_parameters {
        return new OsiBind_normal_mode_parameters(
            _o.protocol_version,
            _o.calling_presentation_selector,
            _o.called_presentation_selector,
            _o.presentation_context_definition_list,
            _o.user_data
        );
    }

    /**
     * @summary Getter that returns the default value for `protocol_version`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_protocol_version(): OsiBind_normal_mode_parameters_protocol_version {
        return (() => {
            const _ret = new Uint8ClampedArray(1);
            _ret[
                OsiBind_normal_mode_parameters_protocol_version_version_1
            ] = TRUE_BIT;
            return _ret;
        })();
    }
}

/**
 * @summary The Leading Root Component Types of OsiBind_normal_mode_parameters
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_OsiBind_normal_mode_parameters: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "protocol-version",
        true,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        "calling-presentation-selector",
        true,
        $.hasTag(_TagClass.context, 1)
    ),
    new $.ComponentSpec(
        "called-presentation-selector",
        true,
        $.hasTag(_TagClass.context, 2)
    ),
    new $.ComponentSpec(
        "presentation-context-definition-list",
        false,
        $.hasTag(_TagClass.context, 4)
    ),
    new $.ComponentSpec("user-data", false, $.hasAnyTag),
];

/**
 * @summary The Trailing Root Component Types of OsiBind_normal_mode_parameters
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_OsiBind_normal_mode_parameters: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of OsiBind_normal_mode_parameters
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_OsiBind_normal_mode_parameters: $.ComponentSpec[] = [];

let _cached_decoder_for_OsiBind_normal_mode_parameters: $.ASN1Decoder<OsiBind_normal_mode_parameters> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) OsiBind_normal_mode_parameters
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OsiBind_normal_mode_parameters} The decoded data structure.
 */
export function _decode_OsiBind_normal_mode_parameters(el: _Element): OsiBind_normal_mode_parameters {
    if (!_cached_decoder_for_OsiBind_normal_mode_parameters) {
        _cached_decoder_for_OsiBind_normal_mode_parameters = function (
            el: _Element
        ): OsiBind_normal_mode_parameters {
            let protocol_version: OPTIONAL<OsiBind_normal_mode_parameters_protocol_version> =
                OsiBind_normal_mode_parameters._default_value_for_protocol_version;
            let calling_presentation_selector: OPTIONAL<Presentation_selector>;
            let called_presentation_selector: OPTIONAL<Presentation_selector>;
            let presentation_context_definition_list!: Context_list;
            let user_data!: OsiBind_normal_mode_parameters_user_data;
            const callbacks: $.DecodingMap = {
                "protocol-version": (_el: _Element): void => {
                    protocol_version = $._decode_implicit<OsiBind_normal_mode_parameters_protocol_version>(
                        () =>
                            _decode_OsiBind_normal_mode_parameters_protocol_version
                    )(_el);
                },
                "calling-presentation-selector": (_el: _Element): void => {
                    calling_presentation_selector = $._decode_implicit<Presentation_selector>(
                        () => _decode_Presentation_selector
                    )(_el);
                },
                "called-presentation-selector": (_el: _Element): void => {
                    called_presentation_selector = $._decode_implicit<Presentation_selector>(
                        () => _decode_Presentation_selector
                    )(_el);
                },
                "presentation-context-definition-list": (
                    _el: _Element
                ): void => {
                    presentation_context_definition_list = $._decode_implicit<Context_list>(
                        () => _decode_Context_list
                    )(_el);
                },
                "user-data": (_el: _Element): void => {
                    user_data = _decode_OsiBind_normal_mode_parameters_user_data(
                        _el
                    );
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_OsiBind_normal_mode_parameters,
                _extension_additions_list_spec_for_OsiBind_normal_mode_parameters,
                _root_component_type_list_2_spec_for_OsiBind_normal_mode_parameters,
                undefined
            );
            return new OsiBind_normal_mode_parameters(
                protocol_version,
                calling_presentation_selector,
                called_presentation_selector,
                presentation_context_definition_list,
                user_data
            );
        };
    }
    return _cached_decoder_for_OsiBind_normal_mode_parameters(el);
}

let _cached_encoder_for_OsiBind_normal_mode_parameters: $.ASN1Encoder<OsiBind_normal_mode_parameters> | null = null;

/**
 * @summary Encodes a(n) OsiBind_normal_mode_parameters into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OsiBind_normal_mode_parameters, encoded as an ASN.1 Element.
 */
export function _encode_OsiBind_normal_mode_parameters(
    value: OsiBind_normal_mode_parameters,
    elGetter: $.ASN1Encoder<OsiBind_normal_mode_parameters>
): _Element {
    if (!_cached_encoder_for_OsiBind_normal_mode_parameters) {
        _cached_encoder_for_OsiBind_normal_mode_parameters = function (
            value: OsiBind_normal_mode_parameters        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_DEFAULT */ value.protocol_version === undefined ||
                        $.deepEq(
                            value.protocol_version,
                            OsiBind_normal_mode_parameters._default_value_for_protocol_version
                        )
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  0,
                                  () =>
                                      _encode_OsiBind_normal_mode_parameters_protocol_version,
                                  $.DER
                              )(value.protocol_version, $.DER),
                        /* IF_ABSENT  */ value.calling_presentation_selector ===
                        undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  1,
                                  () => _encode_Presentation_selector,
                                  $.DER
                              )(value.calling_presentation_selector, $.DER),
                        /* IF_ABSENT  */ value.called_presentation_selector ===
                        undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  2,
                                  () => _encode_Presentation_selector,
                                  $.DER
                              )(value.called_presentation_selector, $.DER),
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            4,
                            () => _encode_Context_list,
                            $.DER
                        )(value.presentation_context_definition_list, $.DER),
                        /* REQUIRED   */ _encode_OsiBind_normal_mode_parameters_user_data(
                            value.user_data,
                            $.DER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.DER
            );
        };
    }
    return _cached_encoder_for_OsiBind_normal_mode_parameters(value, elGetter);
}


/* eslint-enable */
