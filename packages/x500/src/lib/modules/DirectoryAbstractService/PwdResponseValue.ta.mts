/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    PwdResponseValue_error,
    _decode_PwdResponseValue_error,
    _encode_PwdResponseValue_error,
    _enum_for_PwdResponseValue_error,
} from "../DirectoryAbstractService/PwdResponseValue-error.ta.mjs";
import {
    PwdResponseValue_warning,
    _decode_PwdResponseValue_warning,
    _encode_PwdResponseValue_warning,
} from "../DirectoryAbstractService/PwdResponseValue-warning.ta.mjs";
/**
 * @summary PwdResponseValue
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PwdResponseValue ::= SEQUENCE {
 *   warning CHOICE {
 *     timeLeft        [0]  INTEGER (0..MAX),
 *     graceRemaining  [1]  INTEGER (0..MAX),
 *     ... } OPTIONAL,
 *   error   ENUMERATED {
 *     passwordExpired  (0),
 *     changeAfterReset (1),
 *     ... } OPTIONAL}
 * ```
 *
 * @class
 */
export class PwdResponseValue {
    constructor(
        /**
         * @summary `warning`.
         * @public
         * @readonly
         */
        readonly warning?: OPTIONAL<PwdResponseValue_warning>,
        /**
         * @summary `error`.
         * @public
         * @readonly
         */
        readonly error?: OPTIONAL<PwdResponseValue_error>
    ) {}

    /**
     * @summary Restructures an object into a PwdResponseValue
     * @description
     *
     * This takes an `object` and converts it to a `PwdResponseValue`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PwdResponseValue`.
     * @returns {PwdResponseValue}
     */
    public static _from_object(
        _o: { [_K in keyof PwdResponseValue]: PwdResponseValue[_K] }
    ): PwdResponseValue {
        return new PwdResponseValue(_o.warning, _o.error);
    }

    /**
     * @summary The enum used as the type of the component `error`
     * @public
     * @static
     */

    public static _enum_for_error = _enum_for_PwdResponseValue_error;
}

/**
 * @summary The Leading Root Component Types of PwdResponseValue
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_PwdResponseValue: $.ComponentSpec[] = [
    new $.ComponentSpec("warning", true, $.not($.hasTag(_TagClass.universal, 10))),
    new $.ComponentSpec(
        "error",
        true,
        $.hasTag(_TagClass.universal, 10)
    ),
];

/**
 * @summary The Trailing Root Component Types of PwdResponseValue
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_PwdResponseValue: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of PwdResponseValue
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_PwdResponseValue: $.ComponentSpec[] = [];

let _cached_decoder_for_PwdResponseValue: $.ASN1Decoder<PwdResponseValue> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PwdResponseValue
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PwdResponseValue} The decoded data structure.
 */
export function _decode_PwdResponseValue(el: _Element) {
    if (!_cached_decoder_for_PwdResponseValue) {
        _cached_decoder_for_PwdResponseValue = function (
            el: _Element
        ): PwdResponseValue {
            let warning: OPTIONAL<PwdResponseValue_warning>;
            let error: OPTIONAL<PwdResponseValue_error>;
            const callbacks: $.DecodingMap = {
                warning: (_el: _Element): void => {
                    warning = _decode_PwdResponseValue_warning(_el);
                },
                error: (_el: _Element): void => {
                    error = _decode_PwdResponseValue_error(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_PwdResponseValue,
                _extension_additions_list_spec_for_PwdResponseValue,
                _root_component_type_list_2_spec_for_PwdResponseValue,
                undefined
            );
            return new PwdResponseValue(
                warning,
                error
            );
        };
    }
    return _cached_decoder_for_PwdResponseValue(el);
}

let _cached_encoder_for_PwdResponseValue: $.ASN1Encoder<PwdResponseValue> | null = null;

/**
 * @summary Encodes a(n) PwdResponseValue into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PwdResponseValue, encoded as an ASN.1 Element.
 */
export function _encode_PwdResponseValue(
    value: PwdResponseValue,
    elGetter: $.ASN1Encoder<PwdResponseValue>
) {
    if (!_cached_encoder_for_PwdResponseValue) {
        _cached_encoder_for_PwdResponseValue = function (
            value: PwdResponseValue        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.warning === undefined
                            ? undefined
                            : _encode_PwdResponseValue_warning(
                                  value.warning,
                                  $.BER
                              ),
                        /* IF_ABSENT  */ value.error === undefined
                            ? undefined
                            : _encode_PwdResponseValue_error(
                                  value.error,
                                  $.BER
                              ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_PwdResponseValue(value, elGetter);
}


/* eslint-enable */
