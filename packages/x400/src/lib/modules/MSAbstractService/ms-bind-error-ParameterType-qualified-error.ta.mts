/* eslint-disable */
import {
    OPTIONAL,
    OBJECT_IDENTIFIER,
    GeneralString,
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
    BindProblem,
    _enum_for_BindProblem,
    _decode_BindProblem,
    _encode_BindProblem,
} from '../MSAbstractService/BindProblem.ta.mjs';
/**
 * @summary ms_bind_error_ParameterType_qualified_error
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ms-bind-error-ParameterType-qualified-error ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 */
export class ms_bind_error_ParameterType_qualified_error {
    constructor(
        /**
         * @summary `bind_problem`.
         * @public
         * @readonly
         */
        readonly bind_problem: BindProblem,
        /**
         * @summary `supplementary_information`.
         * @public
         * @readonly
         */
        readonly supplementary_information: OPTIONAL<GeneralString>,
        /**
         * @summary `bind_extension_errors`.
         * @public
         * @readonly
         */
        readonly bind_extension_errors: OPTIONAL<OBJECT_IDENTIFIER[]>
    ) {}

    /**
     * @summary Restructures an object into a ms_bind_error_ParameterType_qualified_error
     * @description
     *
     * This takes an `object` and converts it to a `ms_bind_error_ParameterType_qualified_error`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ms_bind_error_ParameterType_qualified_error`.
     * @returns {ms_bind_error_ParameterType_qualified_error}
     */
    public static _from_object(
        _o: {
            [_K in keyof ms_bind_error_ParameterType_qualified_error]: ms_bind_error_ParameterType_qualified_error[_K];
        }
    ): ms_bind_error_ParameterType_qualified_error {
        return new ms_bind_error_ParameterType_qualified_error(
            _o.bind_problem,
            _o.supplementary_information,
            _o.bind_extension_errors
        );
    }

    /**
     * @summary The enum used as the type of the component `bind_problem`
     * @public
     * @static
     */

    public static _enum_for_bind_problem = _enum_for_BindProblem;
}

/**
 * @summary The Leading Root Component Types of ms_bind_error_ParameterType_qualified_error
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ms_bind_error_ParameterType_qualified_error: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'bind-problem',
        false,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        'supplementary-information',
        true,
        $.hasTag(_TagClass.context, 1)
    ),
    new $.ComponentSpec(
        'bind-extension-errors',
        true,
        $.hasTag(_TagClass.context, 2)
    ),
];

/**
 * @summary The Trailing Root Component Types of ms_bind_error_ParameterType_qualified_error
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ms_bind_error_ParameterType_qualified_error: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of ms_bind_error_ParameterType_qualified_error
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ms_bind_error_ParameterType_qualified_error: $.ComponentSpec[] = [];

let _cached_decoder_for_ms_bind_error_ParameterType_qualified_error: $.ASN1Decoder<ms_bind_error_ParameterType_qualified_error> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ms_bind_error_ParameterType_qualified_error
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ms_bind_error_ParameterType_qualified_error} The decoded data structure.
 */
export function _decode_ms_bind_error_ParameterType_qualified_error(
    el: _Element
): ms_bind_error_ParameterType_qualified_error {
    if (!_cached_decoder_for_ms_bind_error_ParameterType_qualified_error) {
        _cached_decoder_for_ms_bind_error_ParameterType_qualified_error = function (
            el: _Element
        ): ms_bind_error_ParameterType_qualified_error {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let bind_problem!: BindProblem;
            let supplementary_information: OPTIONAL<GeneralString>;
            let bind_extension_errors: OPTIONAL<OBJECT_IDENTIFIER[]>;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            const callbacks: $.DecodingMap = {
                'bind-problem': (_el: _Element): void => {
                    bind_problem = $._decode_explicit<BindProblem>(
                        () => _decode_BindProblem
                    )(_el);
                },
                'supplementary-information': (_el: _Element): void => {
                    supplementary_information = $._decode_explicit<GeneralString>(
                        () => $._decodeGeneralString
                    )(_el);
                },
                'bind-extension-errors': (_el: _Element): void => {
                    bind_extension_errors = $._decode_explicit<
                        OBJECT_IDENTIFIER[]
                    >(() =>
                        $._decodeSetOf<OBJECT_IDENTIFIER>(
                            () => $._decodeObjectIdentifier
                        )
                    )(_el);
                },
            };
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ms_bind_error_ParameterType_qualified_error,
                _extension_additions_list_spec_for_ms_bind_error_ParameterType_qualified_error,
                _root_component_type_list_2_spec_for_ms_bind_error_ParameterType_qualified_error,
                undefined
            );
            return new ms_bind_error_ParameterType_qualified_error /* SET_CONSTRUCTOR_CALL */(
                bind_problem,
                supplementary_information,
                bind_extension_errors
            );
        };
    }
    return _cached_decoder_for_ms_bind_error_ParameterType_qualified_error(el);
}

let _cached_encoder_for_ms_bind_error_ParameterType_qualified_error: $.ASN1Encoder<ms_bind_error_ParameterType_qualified_error> | null = null;

/**
 * @summary Encodes a(n) ms_bind_error_ParameterType_qualified_error into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ms_bind_error_ParameterType_qualified_error, encoded as an ASN.1 Element.
 */
export function _encode_ms_bind_error_ParameterType_qualified_error(
    value: ms_bind_error_ParameterType_qualified_error,
    elGetter: $.ASN1Encoder<ms_bind_error_ParameterType_qualified_error>
): _Element {
    if (!_cached_encoder_for_ms_bind_error_ParameterType_qualified_error) {
        _cached_encoder_for_ms_bind_error_ParameterType_qualified_error = function (
            value: ms_bind_error_ParameterType_qualified_error        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_explicit(
                            _TagClass.context,
                            0,
                            () => _encode_BindProblem,
                            $.BER
                        )(value.bind_problem, $.BER),
                        /* IF_ABSENT  */ value.supplementary_information ===
                        undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  1,
                                  () => $._encodeGeneralString,
                                  $.BER
                              )(value.supplementary_information, $.BER),
                        /* IF_ABSENT  */ value.bind_extension_errors ===
                        undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  2,
                                  () =>
                                      $._encodeSetOf<OBJECT_IDENTIFIER>(
                                          () => $._encodeObjectIdentifier,
                                          $.BER
                                      ),
                                  $.BER
                              )(value.bind_extension_errors, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_ms_bind_error_ParameterType_qualified_error(
        value,
        elGetter
    );
}


/* eslint-enable */
