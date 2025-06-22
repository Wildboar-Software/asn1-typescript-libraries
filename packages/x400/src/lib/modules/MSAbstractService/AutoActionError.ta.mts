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
} from 'asn1-ts';
import * as $ from '@wildboar/asn1/functional';
import {
    Code,
    _decode_Code,
    _encode_Code,
} from "@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/Code.ta.mjs";

/**
 * @summary AutoActionError
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AutoActionError ::= SET {
 *   error-code
 *     [0]  AUTO-ACTION-ERROR.&errorCode({AutoActionErrorTable}),
 *   error-parameter
 *     [1]  AUTO-ACTION-ERROR.&ParameterType
 *            ({AutoActionErrorTable}{@error-code}) OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class AutoActionError {
    constructor(
        /**
         * @summary `error_code`.
         * @public
         * @readonly
         */
        readonly error_code: Code,
        /**
         * @summary `error_parameter`.
         * @public
         * @readonly
         */
        readonly error_parameter: OPTIONAL<_Element>
    ) {}

    /**
     * @summary Restructures an object into a AutoActionError
     * @description
     *
     * This takes an `object` and converts it to a `AutoActionError`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AutoActionError`.
     * @returns {AutoActionError}
     */
    public static _from_object(
        _o: { [_K in keyof AutoActionError]: AutoActionError[_K] }
    ): AutoActionError {
        return new AutoActionError(_o.error_code, _o.error_parameter);
    }
}

/**
 * @summary The Leading Root Component Types of AutoActionError
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_AutoActionError: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'error-code',
        false,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        'error-parameter',
        true,
        $.hasTag(_TagClass.context, 1)
    ),
];

/**
 * @summary The Trailing Root Component Types of AutoActionError
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AutoActionError: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of AutoActionError
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AutoActionError: $.ComponentSpec[] = [];

let _cached_decoder_for_AutoActionError: $.ASN1Decoder<AutoActionError> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AutoActionError
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AutoActionError} The decoded data structure.
 */
export function _decode_AutoActionError(el: _Element) {
    if (!_cached_decoder_for_AutoActionError) {
        _cached_decoder_for_AutoActionError = function (
            el: _Element
        ): AutoActionError {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let error_code!: Code;
            let error_parameter: OPTIONAL<_Element>;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                'error-code': (_el: _Element): void => {
                    error_code = $._decode_explicit<Code>(() => _decode_Code)(
                        _el
                    );
                },
                'error-parameter': (_el: _Element): void => {
                    error_parameter = $._decode_explicit<_Element>(
                        () => $._decodeAny
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_AutoActionError,
                _extension_additions_list_spec_for_AutoActionError,
                _root_component_type_list_2_spec_for_AutoActionError,
                undefined
            );
            return new AutoActionError /* SET_CONSTRUCTOR_CALL */(
                error_code,
                error_parameter
            );
        };
    }
    return _cached_decoder_for_AutoActionError(el);
}

let _cached_encoder_for_AutoActionError: $.ASN1Encoder<AutoActionError> | null = null;

/**
 * @summary Encodes a(n) AutoActionError into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AutoActionError, encoded as an ASN.1 Element.
 */
export function _encode_AutoActionError(
    value: AutoActionError,
    elGetter: $.ASN1Encoder<AutoActionError>
) {
    if (!_cached_encoder_for_AutoActionError) {
        _cached_encoder_for_AutoActionError = function (
            value: AutoActionError        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_explicit(
                            _TagClass.context,
                            0,
                            () => _encode_Code,
                            $.BER
                        )(value.error_code, $.BER),
                        /* IF_ABSENT  */ value.error_parameter === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  1,
                                  () => $._encodeAny,
                                  $.BER
                              )(value.error_parameter, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_AutoActionError(value, elGetter);
}


/* eslint-enable */
