/* eslint-disable */
import {
    OPTIONAL,
    INTEGER,
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


/**
 * @summary TimeInterval
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TimeInterval ::= SEQUENCE {
 *   day     [0]  INTEGER(0..31) DEFAULT 0,
 *   hour    [1]  INTEGER(0..23) DEFAULT 0,
 *   minute  [2]  INTEGER(0..59) DEFAULT 0,
 *   second  [3]  INTEGER(0..59) DEFAULT 0,
 *   msec    [4]  INTEGER(0..999) DEFAULT 0,
 *   ...
 * }
 * ```
 *
 * @class
 */
export class TimeInterval {
    constructor(
        /**
         * @summary `day`.
         * @public
         * @readonly
         */
        readonly day: OPTIONAL<INTEGER>,
        /**
         * @summary `hour`.
         * @public
         * @readonly
         */
        readonly hour: OPTIONAL<INTEGER>,
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
         * @summary `msec`.
         * @public
         * @readonly
         */
        readonly msec: OPTIONAL<INTEGER>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a TimeInterval
     * @description
     *
     * This takes an `object` and converts it to a `TimeInterval`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TimeInterval`.
     * @returns {TimeInterval}
     */
    public static _from_object(
        _o: { [_K in keyof TimeInterval]: TimeInterval[_K] }
    ): TimeInterval {
        return new TimeInterval(
            _o.day,
            _o.hour,
            _o.minute,
            _o.second,
            _o.msec,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary Getter that returns the default value for `day`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_day() {
        return 0;
    }
    /**
     * @summary Getter that returns the default value for `hour`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_hour() {
        return 0;
    }
    /**
     * @summary Getter that returns the default value for `minute`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_minute() {
        return 0;
    }
    /**
     * @summary Getter that returns the default value for `second`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_second() {
        return 0;
    }
    /**
     * @summary Getter that returns the default value for `msec`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_msec() {
        return 0;
    }
}


/**
 * @summary The Leading Root Component Types of TimeInterval
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_TimeInterval: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'day',
        true,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        'hour',
        true,
        $.hasTag(_TagClass.context, 1)
    ),
    new $.ComponentSpec(
        'minute',
        true,
        $.hasTag(_TagClass.context, 2)
    ),
    new $.ComponentSpec(
        'second',
        true,
        $.hasTag(_TagClass.context, 3)
    ),
    new $.ComponentSpec(
        'msec',
        true,
        $.hasTag(_TagClass.context, 4)
    ),
];


/**
 * @summary The Trailing Root Component Types of TimeInterval
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_TimeInterval: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of TimeInterval
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_TimeInterval: $.ComponentSpec[] = [];


let _cached_decoder_for_TimeInterval: $.ASN1Decoder<TimeInterval> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) TimeInterval
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TimeInterval} The decoded data structure.
 */
export function _decode_TimeInterval(el: _Element) {
    if (!_cached_decoder_for_TimeInterval) {
        _cached_decoder_for_TimeInterval = function (
            el: _Element
        ): TimeInterval {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let day: OPTIONAL<INTEGER> = TimeInterval._default_value_for_day;
            let hour: OPTIONAL<INTEGER> = TimeInterval._default_value_for_hour;
            let minute: OPTIONAL<INTEGER> =
                TimeInterval._default_value_for_minute;
            let second: OPTIONAL<INTEGER> =
                TimeInterval._default_value_for_second;
            let msec: OPTIONAL<INTEGER> = TimeInterval._default_value_for_msec;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                day: (_el: _Element): void => {
                    day = $._decode_implicit<INTEGER>(() => $._decodeInteger)(
                        _el
                    );
                },
                hour: (_el: _Element): void => {
                    hour = $._decode_implicit<INTEGER>(() => $._decodeInteger)(
                        _el
                    );
                },
                minute: (_el: _Element): void => {
                    minute = $._decode_implicit<INTEGER>(
                        () => $._decodeInteger
                    )(_el);
                },
                second: (_el: _Element): void => {
                    second = $._decode_implicit<INTEGER>(
                        () => $._decodeInteger
                    )(_el);
                },
                msec: (_el: _Element): void => {
                    msec = $._decode_implicit<INTEGER>(() => $._decodeInteger)(
                        _el
                    );
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_TimeInterval,
                _extension_additions_list_spec_for_TimeInterval,
                _root_component_type_list_2_spec_for_TimeInterval,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new TimeInterval /* SEQUENCE_CONSTRUCTOR_CALL */(
                day,
                hour,
                minute,
                second,
                msec,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_TimeInterval(el);
}


let _cached_encoder_for_TimeInterval: $.ASN1Encoder<TimeInterval> | null = null;


/**
 * @summary Encodes a(n) TimeInterval into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TimeInterval, encoded as an ASN.1 Element.
 */
export function _encode_TimeInterval(
    value: TimeInterval,
    elGetter: $.ASN1Encoder<TimeInterval>
) {
    if (!_cached_encoder_for_TimeInterval) {
        _cached_encoder_for_TimeInterval = function (
            value: TimeInterval        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_DEFAULT */ value.day === undefined ||
                            $.deepEq(
                                value.day,
                                TimeInterval._default_value_for_day
                            )
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      0,
                                      () => $._encodeInteger,
                                      $.BER
                                  )(value.day, $.BER),
                            /* IF_DEFAULT */ value.hour === undefined ||
                            $.deepEq(
                                value.hour,
                                TimeInterval._default_value_for_hour
                            )
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      1,
                                      () => $._encodeInteger,
                                      $.BER
                                  )(value.hour, $.BER),
                            /* IF_DEFAULT */ value.minute === undefined ||
                            $.deepEq(
                                value.minute,
                                TimeInterval._default_value_for_minute
                            )
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      2,
                                      () => $._encodeInteger,
                                      $.BER
                                  )(value.minute, $.BER),
                            /* IF_DEFAULT */ value.second === undefined ||
                            $.deepEq(
                                value.second,
                                TimeInterval._default_value_for_second
                            )
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      3,
                                      () => $._encodeInteger,
                                      $.BER
                                  )(value.second, $.BER),
                            /* IF_DEFAULT */ value.msec === undefined ||
                            $.deepEq(
                                value.msec,
                                TimeInterval._default_value_for_msec
                            )
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      4,
                                      () => $._encodeInteger,
                                      $.BER
                                  )(value.msec, $.BER),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : []
                    )
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_TimeInterval(value, elGetter);
}


/* eslint-enable */
