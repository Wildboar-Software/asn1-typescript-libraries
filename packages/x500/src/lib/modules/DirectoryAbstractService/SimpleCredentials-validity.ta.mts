/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    BIT_STRING,
    OPTIONAL,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    SimpleCredentials_validity_time1,
    _decode_SimpleCredentials_validity_time1,
    _encode_SimpleCredentials_validity_time1,
} from "../DirectoryAbstractService/SimpleCredentials-validity-time1.ta.mjs";
import {
    SimpleCredentials_validity_time2,
    _decode_SimpleCredentials_validity_time2,
    _encode_SimpleCredentials_validity_time2,
} from "../DirectoryAbstractService/SimpleCredentials-validity-time2.ta.mjs";
/**
 * @summary SimpleCredentials_validity
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SimpleCredentials-validity ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class SimpleCredentials_validity {
    constructor(
        /**
         * @summary `time1`.
         * @public
         * @readonly
         */
        readonly time1?: OPTIONAL<SimpleCredentials_validity_time1>,
        /**
         * @summary `time2`.
         * @public
         * @readonly
         */
        readonly time2?: OPTIONAL<SimpleCredentials_validity_time2>,
        /**
         * @summary `random1`.
         * @public
         * @readonly
         */
        readonly random1?: OPTIONAL<BIT_STRING>,
        /**
         * @summary `random2`.
         * @public
         * @readonly
         */
        readonly random2?: OPTIONAL<BIT_STRING>
    ) {}

    /**
     * @summary Restructures an object into a SimpleCredentials_validity
     * @description
     *
     * This takes an `object` and converts it to a `SimpleCredentials_validity`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SimpleCredentials_validity`.
     * @returns {SimpleCredentials_validity}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof SimpleCredentials_validity]: SimpleCredentials_validity[_K];
            }
        >
    ): SimpleCredentials_validity {
        return new SimpleCredentials_validity(
            _o.time1,
            _o.time2,
            _o.random1,
            _o.random2
        );
    }
}

/**
 * @summary The Leading Root Component Types of SimpleCredentials_validity
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_SimpleCredentials_validity: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "time1",
        true,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        "time2",
        true,
        $.hasTag(_TagClass.context, 1)
    ),
    new $.ComponentSpec(
        "random1",
        true,
        $.hasTag(_TagClass.context, 2)
    ),
    new $.ComponentSpec(
        "random2",
        true,
        $.hasTag(_TagClass.context, 3)
    ),
];

/**
 * @summary The Trailing Root Component Types of SimpleCredentials_validity
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_SimpleCredentials_validity: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of SimpleCredentials_validity
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_SimpleCredentials_validity: $.ComponentSpec[] = [];

let _cached_decoder_for_SimpleCredentials_validity: $.ASN1Decoder<SimpleCredentials_validity> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SimpleCredentials_validity
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SimpleCredentials_validity} The decoded data structure.
 */
export function _decode_SimpleCredentials_validity(el: _Element) {
    if (!_cached_decoder_for_SimpleCredentials_validity) {
        _cached_decoder_for_SimpleCredentials_validity = function (
            el: _Element
        ): SimpleCredentials_validity {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let time1: OPTIONAL<SimpleCredentials_validity_time1>;
            let time2: OPTIONAL<SimpleCredentials_validity_time2>;
            let random1: OPTIONAL<BIT_STRING>;
            let random2: OPTIONAL<BIT_STRING>;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            const callbacks: $.DecodingMap = {
                time1: (_el: _Element): void => {
                    time1 = $._decode_explicit<SimpleCredentials_validity_time1>(
                        () => _decode_SimpleCredentials_validity_time1
                    )(_el);
                },
                time2: (_el: _Element): void => {
                    time2 = $._decode_explicit<SimpleCredentials_validity_time2>(
                        () => _decode_SimpleCredentials_validity_time2
                    )(_el);
                },
                random1: (_el: _Element): void => {
                    random1 = $._decode_explicit<BIT_STRING>(
                        () => $._decodeBitString
                    )(_el);
                },
                random2: (_el: _Element): void => {
                    random2 = $._decode_explicit<BIT_STRING>(
                        () => $._decodeBitString
                    )(_el);
                },
            };
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_SimpleCredentials_validity,
                _extension_additions_list_spec_for_SimpleCredentials_validity,
                _root_component_type_list_2_spec_for_SimpleCredentials_validity,
                undefined
            );
            return new SimpleCredentials_validity(
                /* SET_CONSTRUCTOR_CALL */ time1,
                time2,
                random1,
                random2
            );
        };
    }
    return _cached_decoder_for_SimpleCredentials_validity(el);
}

let _cached_encoder_for_SimpleCredentials_validity: $.ASN1Encoder<SimpleCredentials_validity> | null = null;

/**
 * @summary Encodes a(n) SimpleCredentials_validity into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SimpleCredentials_validity, encoded as an ASN.1 Element.
 */
export function _encode_SimpleCredentials_validity(
    value: SimpleCredentials_validity,
    elGetter: $.ASN1Encoder<SimpleCredentials_validity>
) {
    if (!_cached_encoder_for_SimpleCredentials_validity) {
        _cached_encoder_for_SimpleCredentials_validity = function (
            value: SimpleCredentials_validity        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.time1 === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  0,
                                  () =>
                                      _encode_SimpleCredentials_validity_time1,
                                  $.BER
                              )(value.time1, $.BER),
                        /* IF_ABSENT  */ value.time2 === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  1,
                                  () =>
                                      _encode_SimpleCredentials_validity_time2,
                                  $.BER
                              )(value.time2, $.BER),
                        /* IF_ABSENT  */ value.random1 === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  2,
                                  () => $._encodeBitString,
                                  $.BER
                              )(value.random1, $.BER),
                        /* IF_ABSENT  */ value.random2 === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  3,
                                  () => $._encodeBitString,
                                  $.BER
                              )(value.random2, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_SimpleCredentials_validity(value, elGetter);
}


/* eslint-enable */
