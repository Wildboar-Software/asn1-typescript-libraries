/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    INTEGER,
    OPTIONAL,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary DayTime
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DayTime ::= SEQUENCE {
 *   hour    [0]  INTEGER(0..23),
 *   minute  [1]  INTEGER(0..59) DEFAULT 0,
 *   second  [2]  INTEGER(0..59) DEFAULT 0,
 *   ... }
 * ```
 *
 */
export class DayTime {
    constructor(
        /**
         * @summary `hour`.
         * @public
         * @readonly
         */
        readonly hour: INTEGER,
        /**
         * @summary `minute`.
         * @public
         * @readonly
         */
        readonly minute: OPTIONAL<INTEGER>,
        /**
         * @summary `second`.
         * @public
         * @readonly
         */
        readonly second: OPTIONAL<INTEGER>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {
        if (
            !Number.isSafeInteger(this.hour)
            || ((this.minute !== undefined) && !Number.isSafeInteger(this.minute))
            || ((this.second !== undefined) && !Number.isSafeInteger(this.second))
            || (this.hour < 0)
            || (this.hour > 23)
            || ((this.minute ?? 0) < 0)
            || ((this.minute ?? 0) > 59)
            || ((this.second ?? 0) < 0)
            || ((this.second ?? 0) > 59)
        ) {
            console.log("1:", !Number.isSafeInteger(this.hour));
            // console.log("2:", !Number.isSafeInteger(this.minute));
            // console.log("3:", !Number.isSafeInteger(this.second));
            // console.log("4:", (this.hour < 0));
            // console.log("5:", (this.hour > 23));
            // console.log("6:", ((this.minute ?? 0) < 0));
            // console.log("7:", ((this.minute ?? 0) > 59));
            // console.log("8:", ((this.second ?? 0) < 0));
            // console.log("9:", ((this.second ?? 0) > 59));
            throw new Error();
        }
    }

    /**
     * @summary Restructures an object into a DayTime
     * @description
     *
     * This takes an `object` and converts it to a `DayTime`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DayTime`.
     * @returns {DayTime}
     */
    public static _from_object(
        _o: { [_K in keyof DayTime]: DayTime[_K] }
    ): DayTime {
        return new DayTime(
            _o.hour,
            _o.minute,
            _o.second,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary Getter that returns the default value for `minute`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_minute(): INTEGER {
        return 0;
    }
    /**
     * @summary Getter that returns the default value for `second`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_second(): INTEGER {
        return 0;
    }
}

/**
 * @summary The Leading Root Component Types of DayTime
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_DayTime: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "hour",
        false,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        "minute",
        true,
        $.hasTag(_TagClass.context, 1)
    ),
    new $.ComponentSpec(
        "second",
        true,
        $.hasTag(_TagClass.context, 2)
    ),
];

/**
 * @summary The Trailing Root Component Types of DayTime
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_DayTime: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of DayTime
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_DayTime: $.ComponentSpec[] = [];

let _cached_decoder_for_DayTime: $.ASN1Decoder<DayTime> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DayTime
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DayTime} The decoded data structure.
 */
export function _decode_DayTime(el: _Element): DayTime {
    if (!_cached_decoder_for_DayTime) {
        _cached_decoder_for_DayTime = function (el: _Element): DayTime {
            let hour!: INTEGER;
            let minute: OPTIONAL<INTEGER> = DayTime._default_value_for_minute;
            let second: OPTIONAL<INTEGER> = DayTime._default_value_for_second;
            let _unrecognizedExtensionsList: _Element[] = [];
            const callbacks: $.DecodingMap = {
                hour: (_el: _Element): void => {
                    hour = $._decode_explicit<INTEGER>(() => $._decodeInteger)(
                        _el
                    );
                },
                minute: (_el: _Element): void => {
                    minute = $._decode_explicit<INTEGER>(
                        () => $._decodeInteger
                    )(_el);
                },
                second: (_el: _Element): void => {
                    second = $._decode_explicit<INTEGER>(
                        () => $._decodeInteger
                    )(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_DayTime,
                _extension_additions_list_spec_for_DayTime,
                _root_component_type_list_2_spec_for_DayTime,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new DayTime(
                hour,
                minute,
                second,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_DayTime(el);
}

let _cached_encoder_for_DayTime: $.ASN1Encoder<DayTime> | null = null;

/**
 * @summary Encodes a(n) DayTime into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DayTime, encoded as an ASN.1 Element.
 */
export function _encode_DayTime(
    value: DayTime,
    elGetter: $.ASN1Encoder<DayTime>
): _Element {
    if (!_cached_encoder_for_DayTime) {
        _cached_encoder_for_DayTime = function (
            value: DayTime        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encode_explicit(
                                _TagClass.context,
                                0,
                                () => $._encodeInteger,
                                $.DER
                            )(value.hour, $.DER),
                            /* IF_DEFAULT */ value.minute === undefined ||
                            $.deepEq(
                                value.minute,
                                DayTime._default_value_for_minute
                            )
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      1,
                                      () => $._encodeInteger,
                                      $.DER
                                  )(value.minute, $.DER),
                            /* IF_DEFAULT */ value.second === undefined ||
                            $.deepEq(
                                value.second,
                                DayTime._default_value_for_second
                            )
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      2,
                                      () => $._encodeInteger,
                                      $.DER
                                  )(value.second, $.DER),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : []
                    )
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.DER
            );
        };
    }
    return _cached_encoder_for_DayTime(value, elGetter);
}


/* eslint-enable */
