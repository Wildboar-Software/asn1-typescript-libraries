/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    INTEGER,
    OPTIONAL,
    type TIME_OF_DAY,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary DayTime
 * @description
 *
 * `hour` 0..23; `minute`/`second` DEFAULT 0 (0..59).
 *
 * Ordering, `translate`, `with`, `Min`, and `Max` are inspired by
 * the VS Code `Position` API. Unlike a text position, this value is
 * a clock time on a single civil day (0..86399 seconds).
 *
 * @author Cursor Grok 4.6
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
         * @description
         *
         * 0..23.
         *
         * @public
         * @readonly
         */
        readonly hour: INTEGER,
        /**
         * @summary `minute`.
         * @description
         *
         * DEFAULT 0; 0..59.
         *
         * @public
         * @readonly
         */
        readonly minute?: OPTIONAL<INTEGER>,
        /**
         * @summary `second`.
         * @description
         *
         * DEFAULT 0; 0..59.
         *
         * @public
         * @readonly
         */
        readonly second?: OPTIONAL<INTEGER>,
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

    /**
     * @summary Compare this `DayTime` to another for ordering.
     * @description
     *
     * Missing `minute` and `second` use DEFAULT 0.
     *
     * Suitable as `Array.prototype.sort`'s comparefn. For an ascending
     * sort, pass `this` as argument `a` and `other` as argument `b`:
     * `(a, b) => a.compare(b)`. Negative means `this` (`a`) is earlier
     * and sorts first; `0` means equal; positive means `this` is later
     * and sorts after `other` (`b`).
     *
     * @param {DayTime} other The comparefn `b` argument.
     * @returns {number} Negative, `0`, or positive.
     * @function
     * @author Cursor Grok 4.6
     */
    public compare (other: DayTime): number {
        const hourDiff = Number(this.hour) - Number(other.hour);
        if (hourDiff !== 0) {
            return hourDiff;
        }
        const minuteDiff = (
            Number(this.minute ?? DayTime._default_value_for_minute)
            - Number(other.minute ?? DayTime._default_value_for_minute)
        );
        if (minuteDiff !== 0) {
            return minuteDiff;
        }
        return (
            Number(this.second ?? DayTime._default_value_for_second)
            - Number(other.second ?? DayTime._default_value_for_second)
        );
    }

    /**
     * @summary Whether two `DayTime` values denote the same second.
     * @description
     *
     * Missing `minute` and `second` use DEFAULT 0, so `{hour 9}` equals
     * `{hour 9, minute 0, second 0}`.
     *
     * @param {DayTime} other The other time of day.
     * @returns {boolean} `true` iff hour, minute, and second match.
     * @function
     * @author Cursor Grok 4.6
     */
    public isEqualTo (other: DayTime): boolean {
        return (this.compare(other) === 0);
    }

    /**
     * @summary Whether this time is strictly earlier than `other`.
     * @description
     *
     * Inspired by VS Code `Position.isBefore`.
     *
     * @param {DayTime} other The other time of day.
     * @returns {boolean} `true` iff `this.compare(other) < 0`.
     * @function
     * @author Cursor Grok 4.6
     */
    public isBefore (other: DayTime): boolean {
        return (this.compare(other) < 0);
    }

    /**
     * @summary Whether this time is earlier than or equal to `other`.
     * @description
     *
     * Inspired by VS Code `Position.isBeforeOrEqual`.
     *
     * @param {DayTime} other The other time of day.
     * @returns {boolean} `true` iff `this.compare(other) <= 0`.
     * @function
     * @author Cursor Grok 4.6
     */
    public isBeforeOrEqual (other: DayTime): boolean {
        return (this.compare(other) <= 0);
    }

    /**
     * @summary Whether this time is strictly later than `other`.
     * @description
     *
     * Inspired by VS Code `Position.isAfter`.
     *
     * @param {DayTime} other The other time of day.
     * @returns {boolean} `true` iff `this.compare(other) > 0`.
     * @function
     * @author Cursor Grok 4.6
     */
    public isAfter (other: DayTime): boolean {
        return (this.compare(other) > 0);
    }

    /**
     * @summary Whether this time is later than or equal to `other`.
     * @description
     *
     * Inspired by VS Code `Position.isAfterOrEqual`.
     *
     * @param {DayTime} other The other time of day.
     * @returns {boolean} `true` iff `this.compare(other) >= 0`.
     * @function
     * @author Cursor Grok 4.6
     */
    public isAfterOrEqual (other: DayTime): boolean {
        return (this.compare(other) >= 0);
    }

    /**
     * @summary Seconds since 00:00:00, applying minute/second DEFAULTs.
     * @returns {number} 0 (`00:00:00`) through 86399 (`23:59:59`).
     * @function
     * @author Cursor Grok 4.6
     */
    public toSeconds (): number {
        return (
            (Number(this.hour) * 3600)
            + (Number(this.minute ?? DayTime._default_value_for_minute) * 60)
            + Number(this.second ?? DayTime._default_value_for_second)
        );
    }

    /**
     * @summary Build a `DayTime` from seconds since 00:00:00.
     * @param {number} seconds Integer in 0..86399.
     * @returns {DayTime} The corresponding time of day.
     * @function
     * @author Cursor Grok 4.6
     */
    public static fromSeconds (seconds: number): DayTime {
        if (!Number.isSafeInteger(seconds) || (seconds < 0) || (seconds > 86399)) {
            throw new Error();
        }
        return new DayTime(
            Math.trunc(seconds / 3600),
            Math.trunc((seconds % 3600) / 60),
            seconds % 60,
        );
    }

    /**
     * @summary Encode as ASN.1 `TIME-OF-DAY` (`Date` in `@wildboar/asn1`).
     * @description
     *
     * Hours, minutes, and seconds are stored in the `Date`'s UTC
     * fields so they match `ASN1Element.timeOfDay` encoding. The
     * calendar date is 1970-01-01; milliseconds are 0.
     *
     * @returns {TIME_OF_DAY} A `Date` whose UTC clock is this time.
     * @function
     * @author Cursor Grok 4.6
     */
    public toTimeOfDay (): TIME_OF_DAY {
        return new Date(Date.UTC(
            1970,
            0,
            1,
            Number(this.hour),
            Number(this.minute ?? DayTime._default_value_for_minute),
            Number(this.second ?? DayTime._default_value_for_second),
        ));
    }

    /**
     * @summary Build a `DayTime` from ASN.1 `TIME-OF-DAY`.
     * @description
     *
     * Reads UTC hours, minutes, and seconds. Milliseconds and the
     * calendar date are ignored.
     *
     * @param {TIME_OF_DAY} timeOfDay A `Date` from `@wildboar/asn1`.
     * @returns {DayTime} Hour, minute, and second of that `Date`.
     * @function
     * @author Cursor Grok 4.6
     */
    public static fromTimeOfDay (timeOfDay: TIME_OF_DAY): DayTime {
        if (
            !(timeOfDay instanceof Date)
            || Number.isNaN(timeOfDay.getTime())
        ) {
            throw new Error();
        }
        return new DayTime(
            timeOfDay.getUTCHours(),
            timeOfDay.getUTCMinutes(),
            timeOfDay.getUTCSeconds(),
        );
    }

    /**
     * @summary Shift this time by hour/minute/second deltas.
     * @description
     *
     * Inspired by VS Code `Position.translate`. The result must still
     * be a valid `DayTime` (0..86399 seconds); it does not wrap
     * past midnight.
     *
     * @param {number | object} hourDeltaOrChange Hour delta, or a
     * change object with optional `hourDelta` / `minuteDelta` /
     * `secondDelta`.
     * @param {number} [minuteDelta] Minute delta when using numbers.
     * @param {number} [secondDelta] Second delta when using numbers.
     * @returns {DayTime} A new time; `this` if all deltas are 0.
     * @function
     * @author Cursor Grok 4.6
     */
    public translate (
        hourDeltaOrChange: number | {
            hourDelta?: number;
            minuteDelta?: number;
            secondDelta?: number;
        } = 0,
        minuteDelta: number = 0,
        secondDelta: number = 0,
    ): DayTime {
        let hourDelta = 0;
        let minDelta = 0;
        let secDelta = 0;
        if (typeof hourDeltaOrChange === "number") {
            hourDelta = hourDeltaOrChange;
            minDelta = minuteDelta;
            secDelta = secondDelta;
        } else {
            hourDelta = hourDeltaOrChange.hourDelta ?? 0;
            minDelta = hourDeltaOrChange.minuteDelta ?? 0;
            secDelta = hourDeltaOrChange.secondDelta ?? 0;
        }
        if ((hourDelta === 0) && (minDelta === 0) && (secDelta === 0)) {
            return this;
        }
        return DayTime.fromSeconds(
            this.toSeconds()
            + (hourDelta * 3600)
            + (minDelta * 60)
            + secDelta,
        );
    }

    /**
     * @summary Copy this time, replacing selected components.
     * @description
     *
     * Inspired by VS Code `Position.with`. Omitted fields keep their
     * current values (including absent DEFAULT minute/second).
     *
     * @param {INTEGER | object} [hourOrChange] New hour, or a change
     * object with optional `hour` / `minute` / `second`.
     * @param {INTEGER} [minute] New minute when using positional args.
     * @param {INTEGER} [second] New second when using positional args.
     * @returns {DayTime} A new time, or `this` if nothing changed.
     * @function
     * @author Cursor Grok 4.6
     */
    public with (
        hourOrChange?: INTEGER | {
            hour?: INTEGER;
            minute?: INTEGER;
            second?: INTEGER;
        },
        minute?: INTEGER,
        second?: INTEGER,
    ): DayTime {
        let hour: INTEGER = this.hour;
        let nextMinute: OPTIONAL<INTEGER> = this.minute;
        let nextSecond: OPTIONAL<INTEGER> = this.second;
        if ((typeof hourOrChange === "object") && (hourOrChange !== null)) {
            hour = ("hour" in hourOrChange && hourOrChange.hour !== undefined)
                ? hourOrChange.hour
                : this.hour;
            nextMinute = (hourOrChange.minute !== undefined)
                ? hourOrChange.minute
                : this.minute;
            nextSecond = (hourOrChange.second !== undefined)
                ? hourOrChange.second
                : this.second;
        } else {
            const nextHour = hourOrChange as OPTIONAL<INTEGER>;
            hour = (nextHour !== undefined) ? nextHour : this.hour;
            nextMinute = (minute !== undefined) ? minute : this.minute;
            nextSecond = (second !== undefined) ? second : this.second;
        }
        if (
            (hour === this.hour)
            && (nextMinute === this.minute)
            && (nextSecond === this.second)
        ) {
            return this;
        }
        return new DayTime(
            hour,
            nextMinute,
            nextSecond,
            this._unrecognizedExtensionsList,
        );
    }

    /**
     * @summary Earliest of one or more `DayTime` values.
     * @description
     *
     * Inspired by VS Code `Position.Min`.
     *
     * @param {...DayTime} times At least one time of day.
     * @returns {DayTime} The earliest argument.
     * @function
     * @author Cursor Grok 4.6
     */
    public static Min (...times: DayTime[]): DayTime {
        if (times.length === 0) {
            throw new Error();
        }
        let min = times[0];
        for (let i = 1; i < times.length; i++) {
            if (times[i].isBefore(min)) {
                min = times[i];
            }
        }
        return min;
    }

    /**
     * @summary Latest of one or more `DayTime` values.
     * @description
     *
     * Inspired by VS Code `Position.Max`.
     *
     * @param {...DayTime} times At least one time of day.
     * @returns {DayTime} The latest argument.
     * @function
     * @author Cursor Grok 4.6
     */
    public static Max (...times: DayTime[]): DayTime {
        if (times.length === 0) {
            throw new Error();
        }
        let max = times[0];
        for (let i = 1; i < times.length; i++) {
            if (times[i].isAfter(max)) {
                max = times[i];
            }
        }
        return max;
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
