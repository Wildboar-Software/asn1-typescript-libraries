/* eslint-disable */
import {
    OPTIONAL,
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
    RegisterArgument,
    _decode_RegisterArgument,
    _encode_RegisterArgument,
} from '../MTSAbstractService/RegisterArgument.ta.mjs';
import {
    ExtensionField,
    _decode_ExtensionField,
    _encode_ExtensionField,
} from '../MTSAbstractService/ExtensionField.ta.mjs';
/**
 * @summary RegisterResult_non_empty_result
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RegisterResult-non-empty-result ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 */
export class RegisterResult_non_empty_result {
    constructor(
        /**
         * @summary `registered_information`.
         * @public
         * @readonly
         */
        readonly registered_information: OPTIONAL<RegisterArgument>,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<ExtensionField[]>
    ) {}

    /**
     * @summary Restructures an object into a RegisterResult_non_empty_result
     * @description
     *
     * This takes an `object` and converts it to a `RegisterResult_non_empty_result`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RegisterResult_non_empty_result`.
     * @returns {RegisterResult_non_empty_result}
     */
    public static _from_object(
        _o: {
            [_K in keyof RegisterResult_non_empty_result]: RegisterResult_non_empty_result[_K];
        }
    ): RegisterResult_non_empty_result {
        return new RegisterResult_non_empty_result(
            _o.registered_information,
            _o.extensions
        );
    }

    /**
     * @summary Getter that returns the default value for `extensions`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_extensions(): ExtensionField[] {
        return [];
    }
}

/**
 * @summary The Leading Root Component Types of RegisterResult_non_empty_result
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_RegisterResult_non_empty_result: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'registered-information',
        true,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        'extensions',
        true,
        $.hasTag(_TagClass.context, 1)
    ),
];

/**
 * @summary The Trailing Root Component Types of RegisterResult_non_empty_result
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_RegisterResult_non_empty_result: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of RegisterResult_non_empty_result
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_RegisterResult_non_empty_result: $.ComponentSpec[] = [];

let _cached_decoder_for_RegisterResult_non_empty_result: $.ASN1Decoder<RegisterResult_non_empty_result> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RegisterResult_non_empty_result
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RegisterResult_non_empty_result} The decoded data structure.
 */
export function _decode_RegisterResult_non_empty_result(el: _Element): RegisterResult_non_empty_result {
    if (!_cached_decoder_for_RegisterResult_non_empty_result) {
        _cached_decoder_for_RegisterResult_non_empty_result = function (
            el: _Element
        ): RegisterResult_non_empty_result {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let registered_information: OPTIONAL<RegisterArgument>;
            let extensions: OPTIONAL<ExtensionField[]> =
                RegisterResult_non_empty_result._default_value_for_extensions;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            const callbacks: $.DecodingMap = {
                'registered-information': (_el: _Element): void => {
                    registered_information = $._decode_implicit<RegisterArgument>(
                        () => _decode_RegisterArgument
                    )(_el);
                },
                extensions: (_el: _Element): void => {
                    extensions = $._decode_implicit<ExtensionField[]>(() =>
                        $._decodeSetOf<ExtensionField>(
                            () => _decode_ExtensionField
                        )
                    )(_el);
                },
            };
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_RegisterResult_non_empty_result,
                _extension_additions_list_spec_for_RegisterResult_non_empty_result,
                _root_component_type_list_2_spec_for_RegisterResult_non_empty_result,
                undefined
            );
            return new RegisterResult_non_empty_result /* SET_CONSTRUCTOR_CALL */(
                registered_information,
                extensions
            );
        };
    }
    return _cached_decoder_for_RegisterResult_non_empty_result(el);
}

let _cached_encoder_for_RegisterResult_non_empty_result: $.ASN1Encoder<RegisterResult_non_empty_result> | null = null;

/**
 * @summary Encodes a(n) RegisterResult_non_empty_result into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RegisterResult_non_empty_result, encoded as an ASN.1 Element.
 */
export function _encode_RegisterResult_non_empty_result(
    value: RegisterResult_non_empty_result,
    elGetter: $.ASN1Encoder<RegisterResult_non_empty_result>
): _Element {
    if (!_cached_encoder_for_RegisterResult_non_empty_result) {
        _cached_encoder_for_RegisterResult_non_empty_result = function (
            value: RegisterResult_non_empty_result        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.registered_information ===
                        undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  0,
                                  () => _encode_RegisterArgument,
                                  $.BER
                              )(value.registered_information, $.BER),
                        /* IF_DEFAULT */ value.extensions === undefined ||
                        $.deepEq(
                            value.extensions,
                            RegisterResult_non_empty_result._default_value_for_extensions
                        )
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  1,
                                  () =>
                                      $._encodeSetOf<ExtensionField>(
                                          () => _encode_ExtensionField,
                                          $.BER
                                      ),
                                  $.BER
                              )(value.extensions, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_RegisterResult_non_empty_result(value, elGetter);
}


/* eslint-enable */
