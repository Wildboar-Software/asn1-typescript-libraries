/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    DayTime,
    _decode_DayTime,
    _encode_DayTime,
} from "../SelectedAttributeTypes/DayTime.ta.mjs";

/**
 * @summary DayTimeBand
 * @description
 *
 * Rec. ITU-T X.520 (10/2019) | ISO/IEC 9594-6:2020, clause 10.2
 * (`temporalContext`): a period of time during a **single** civil day,
 * as a member of `Period.timesOfDay`.
 * [X.520 (2019)](https://www.itu.int/rec/T-REC-X.520-201910-I/en).
 * After X.520 (2019) Amd.1 (10/2024) NOTE 1, the ASN.1 lives in
 * X.501 `UsefulDefinitions`; matching rules stay in X.520 10.2.
 * [Amd.1](https://www.itu.int/rec/T-REC-X.520-201910-I-Amd1/en).
 *
 * `startDayTime` DEFAULT `{hour 0}` (00:00:00). `endDayTime` DEFAULT
 * `{hour 23, minute 59, second 59}`. `DayTime.hour` is `0..23`.
 *
 * `timesOfDay` is `SET SIZE (1..MAX) OF DayTimeBand`. A night that
 * crosses midnight is **two** bands on each allowed day: one ending
 * at 23:59:59 and one starting at 00:00:00. Morning hours do not
 * belong to the previous calendar day unless that day is also
 * selected (`days` / `weeks` / `months` / `years`).
 *
 * 10.2 does not constrain `startDayTime <= endDayTime` and does not
 * define wrap when start is after end. This implementation does
 * **not** treat `start > end` as overnight: membership is the closed
 * interval from start to end on that day's clock, so an inverted
 * band matches no instant.
 *
 * Containment, `intersection`, `union`, and `with` are inspired by
 * the VS Code `Range` API. Unlike VS Code `Range`, inverted bounds
 * are **not** swapped: `startDayTime` after `endDayTime` is empty.
 *
 * @author Cursor Grok 4.6
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DayTimeBand ::= SEQUENCE {
 *   startDayTime  [0]  DayTime DEFAULT {hour 0},
 *   endDayTime    [1]  DayTime DEFAULT {hour 23, minute 59, second 59},
 *   ... }
 * ```
 *
 */
export class DayTimeBand {
    constructor(
        /**
         * @summary `startDayTime`.
         * @description
         *
         * DEFAULT {hour 0}.
         *
         * @public
         * @readonly
         */
        readonly startDayTime?: OPTIONAL<DayTime>,
        /**
         * @summary `endDayTime`.
         * @description
         *
         * DEFAULT {hour 23, minute 59, second 59}.
         *
         * @public
         * @readonly
         */
        readonly endDayTime?: OPTIONAL<DayTime>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a DayTimeBand
     * @description
     *
     * This takes an `object` and converts it to a `DayTimeBand`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DayTimeBand`.
     * @returns {DayTimeBand}
     */
    public static _from_object(
        _o: { [_K in keyof DayTimeBand]: DayTimeBand[_K] }
    ): DayTimeBand {
        return new DayTimeBand(
            _o.startDayTime,
            _o.endDayTime,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary DEFAULT `startDayTime` (`{hour 0}`).
     * @constant
     * @author Cursor Grok 4.6
     */
    public static readonly START_OF_DAY: DayTime = new DayTime(0);

    /**
     * @summary DEFAULT `endDayTime` (`{hour 23, minute 59, second 59}`).
     * @constant
     * @author Cursor Grok 4.6
     */
    public static readonly END_OF_DAY: DayTime = new DayTime(23, 59, 59);

    /**
     * @summary Getter that returns the default value for `startDayTime`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_startDayTime(): DayTime {
        return DayTimeBand.START_OF_DAY;
    }
    /**
     * @summary Getter that returns the default value for `endDayTime`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_endDayTime(): DayTime {
        return DayTimeBand.END_OF_DAY;
    }

    /**
     * @summary Whether `startDayTime` is 00:00:00.
     * @description
     *
     * Absent `startDayTime` is DEFAULT `{hour 0}` (minute and second
     * DEFAULT 0). Present `{hour 0}` is the same instant.
     *
     * @returns {boolean} `true` if the band starts at midnight.
     * @function
     * @author Cursor Grok 4.6
     */
    public isStartOfDay (): boolean {
        return (this.startDayTime === undefined)
            || this.startDayTime.isEqualTo(DayTimeBand.START_OF_DAY);
    }

    /**
     * @summary Whether `endDayTime` is 23:59:59.
     * @description
     *
     * Absent `endDayTime` is DEFAULT `{hour 23, minute 59, second 59}`.
     * Present `{hour 23}` is 23:00:00, not the end of the day, because
     * `DayTime` minute and second default to 0.
     *
     * @returns {boolean} `true` if the band ends at 23:59:59.
     * @function
     * @author Cursor Grok 4.6
     */
    public isEndOfDay (): boolean {
        return (this.endDayTime === undefined)
            || this.endDayTime.isEqualTo(DayTimeBand.END_OF_DAY);
    }

    /**
     * @summary Compare this band to another for SET ordering.
     * @description
     *
     * Orders by start, then end. Missing ends use the `DayTimeBand`
     * DEFAULTs (`START_OF_DAY` / `END_OF_DAY`).
     *
     * Suitable as `Array.prototype.sort`'s comparefn. For an ascending
     * sort, pass `this` as argument `a` and `other` as argument `b`:
     * `(a, b) => a.compare(b)`. Negative means `this` (`a`) starts
     * (or, if starts match, ends) earlier and sorts first; `0` means
     * equal; positive means `this` sorts after `other` (`b`).
     *
     * @param {DayTimeBand} other The comparefn `b` argument.
     * @returns {number} Negative, `0`, or positive.
     * @function
     * @author Cursor Grok 4.6
     */
    public compare (other: DayTimeBand): number {
        const startDiff = (this.startDayTime ?? DayTimeBand.START_OF_DAY)
            .compare(other.startDayTime ?? DayTimeBand.START_OF_DAY);
        if (startDiff !== 0) {
            return startDiff;
        }
        return (this.endDayTime ?? DayTimeBand.END_OF_DAY)
            .compare(other.endDayTime ?? DayTimeBand.END_OF_DAY);
    }

    /**
     * @summary Whether two bands cover the same start and end.
     * @param {DayTimeBand} other The other band.
     * @returns {boolean} `true` iff start and end match, applying DEFAULTs.
     * @function
     * @author Cursor Grok 4.6
     */
    public isEqualTo (other: DayTimeBand): boolean {
        return (this.compare(other) === 0);
    }

    /**
     * @summary Start of this band as seconds since 00:00:00.
     * @returns {number} 0 when `startDayTime` is absent or midnight.
     * @function
     * @author Cursor Grok 4.6
     */
    public startToSeconds (): number {
        return (this.startDayTime ?? DayTimeBand.START_OF_DAY).toSeconds();
    }

    /**
     * @summary End of this band as seconds since 00:00:00.
     * @returns {number} 86399 when `endDayTime` is absent or 23:59:59.
     * @function
     * @author Cursor Grok 4.6
     */
    public endToSeconds (): number {
        return (this.endDayTime ?? DayTimeBand.END_OF_DAY).toSeconds();
    }

    /**
     * @summary Build a band from start and end second-of-day.
     * @description
     *
     * DEFAULT start (`0`) and end (`86399`) are omitted.
     *
     * @param {number} startSec Inclusive start, 0..86399.
     * @param {number} endSec Inclusive end, 0..86399.
     * @returns {DayTimeBand} The corresponding band.
     * @function
     * @author Cursor Grok 4.6
     */
    private static _fromSeconds (
        startSec: number,
        endSec: number,
    ): DayTimeBand {
        return new DayTimeBand(
            (startSec === 0) ? undefined : DayTime.fromSeconds(startSec),
            (endSec === DayTimeBand.END_OF_DAY.toSeconds())
                ? undefined
                : DayTime.fromSeconds(endSec),
        );
    }

    /**
     * @summary Whether start is after end (matches no instant).
     * @description
     *
     * Inspired by VS Code `Range.isEmpty`, but emptiness here is
     * inverted bounds rather than a zero-width range. A band that
     * covers a single second is not empty.
     *
     * @returns {boolean} `true` iff start seconds exceed end seconds.
     * @function
     * @author Cursor Grok 4.6
     */
    public isEmpty (): boolean {
        return (this.startToSeconds() > this.endToSeconds());
    }

    /**
     * @summary Whether this band contains a time or another band.
     * @description
     *
     * Inspired by VS Code `Range.contains`. Closed interval.
     * An empty (inverted) band contains nothing. An empty `other`
     * band is not contained.
     *
     * @param {DayTime | DayTimeBand} timeOrBand A time or band.
     * @returns {boolean} `true` iff every included second is in this.
     * @function
     * @author Cursor Grok 4.6
     */
    public contains (timeOrBand: DayTime | DayTimeBand): boolean {
        if (timeOrBand instanceof DayTimeBand) {
            if (timeOrBand.isEmpty()) {
                return false;
            }
            return this.contains(
                timeOrBand.startDayTime ?? DayTimeBand.START_OF_DAY,
            ) && this.contains(
                timeOrBand.endDayTime ?? DayTimeBand.END_OF_DAY,
            );
        }
        const t = timeOrBand.toSeconds();
        return (this.startToSeconds() <= t) && (t <= this.endToSeconds());
    }

    /**
     * @summary Whether this band shares any second with `other`.
     * @description
     *
     * Closed intervals: a band ending at `T` overlaps one starting
     * at `T`. Does not wrap past midnight.
     *
     * @param {DayTimeBand} other The other band.
     * @returns {boolean} `true` iff the closed ranges intersect.
     * @function
     * @author Cursor Grok 4.6
     */
    public overlaps (other: DayTimeBand): boolean {
        if (this.isEmpty() || other.isEmpty()) {
            return false;
        }
        return (this.startToSeconds() <= other.endToSeconds())
            && (other.startToSeconds() <= this.endToSeconds());
    }

    /**
     * @summary Overlap of this band and `other`, if any.
     * @description
     *
     * Inspired by VS Code `Range.intersection`. Closed intervals.
     * Returns `undefined` when the bands do not share a second
     * (including when either is empty).
     *
     * @param {DayTimeBand} other The other band.
     * @returns {DayTimeBand | undefined} The overlap, or `undefined`.
     * @function
     * @author Cursor Grok 4.6
     */
    public intersection (other: DayTimeBand): DayTimeBand | undefined {
        if (this.isEmpty() || other.isEmpty()) {
            return undefined;
        }
        const startSec = Math.max(
            this.startToSeconds(),
            other.startToSeconds(),
        );
        const endSec = Math.min(this.endToSeconds(), other.endToSeconds());
        if (startSec > endSec) {
            return undefined;
        }
        return DayTimeBand._fromSeconds(startSec, endSec);
    }

    /**
     * @summary Smallest band covering this band and `other`.
     * @description
     *
     * Inspired by VS Code `Range.union`. Start is the earlier start;
     * end is the later end. If the bands have a gap, that gap is
     * filled. DEFAULT start and end are omitted.
     *
     * @param {DayTimeBand} other The other band.
     * @returns {DayTimeBand} One band spanning both.
     * @function
     * @author Cursor Grok 4.6
     */
    public union (other: DayTimeBand): DayTimeBand {
        return this.merge(other);
    }

    /**
     * @summary Copy this band, replacing start and/or end.
     * @description
     *
     * Inspired by VS Code `Range.with`.
     *
     * @param {DayTime | object} [startOrChange] New start, or a
     * change object with optional `startDayTime` / `endDayTime`.
     * @param {DayTime} [end] New end when using positional args.
     * @returns {DayTimeBand} A new band, or `this` if unchanged.
     * @function
     * @author Cursor Grok 4.6
     */
    public with (
        startOrChange?: DayTime | {
            startDayTime?: DayTime;
            endDayTime?: DayTime;
        },
        end?: DayTime,
    ): DayTimeBand {
        let start = this.startDayTime;
        let nextEnd = this.endDayTime;
        if (
            (startOrChange !== undefined)
            && !(startOrChange instanceof DayTime)
        ) {
            start = (startOrChange.startDayTime !== undefined)
                ? startOrChange.startDayTime
                : this.startDayTime;
            nextEnd = (startOrChange.endDayTime !== undefined)
                ? startOrChange.endDayTime
                : this.endDayTime;
        } else {
            start = (startOrChange !== undefined)
                ? startOrChange
                : this.startDayTime;
            nextEnd = (end !== undefined) ? end : this.endDayTime;
        }
        if ((start === this.startDayTime) && (nextEnd === this.endDayTime)) {
            return this;
        }
        return new DayTimeBand(
            start,
            nextEnd,
            this._unrecognizedExtensionsList,
        );
    }

    /**
     * @summary Whether `other` abuts this band with no gap or overlap.
     * @description
     *
     * Adjacent means one band ends at second `T` and the other
     * starts at `T + 1`. Bands that share a second `overlap`
     * instead.
     *
     * @param {DayTimeBand} other The other band.
     * @returns {number} `-1` if `other` is adjacent to this lower
     * bound; `1` if adjacent to this upper bound; `0` if not
     * adjacent.
     * @function
     * @author Cursor Grok 4.6
     */
    public isAdjacentTo (other: DayTimeBand): -1 | 0 | 1 {
        if (this.isEmpty() || other.isEmpty()) {
            return 0;
        }
        if ((this.endToSeconds() + 1) === other.startToSeconds()) {
            return 1;
        }
        if ((other.endToSeconds() + 1) === this.startToSeconds()) {
            return -1;
        }
        return 0;
    }

    /**
     * @summary Covering interval of this band and `other`.
     * @description
     *
     * Assumes the bands are adjacent or overlapping. Start is the
     * min of the lower bounds; end is the max of the upper bounds.
     * DEFAULT start and end are omitted. If the bands have a gap,
     * that gap is filled.
     *
     * @param {DayTimeBand} other The other band.
     * @returns {DayTimeBand} One band spanning both.
     * @function
     * @author Cursor Grok 4.6
     */
    public merge (other: DayTimeBand): DayTimeBand {
        const startSec = Math.min(
            this.startToSeconds(),
            other.startToSeconds(),
        );
        const endSec = Math.max(this.endToSeconds(), other.endToSeconds());
        return DayTimeBand._fromSeconds(startSec, endSec);
    }

    /**
     * @summary Flatten overlapping and adjacent `DayTimeBand`s.
     * @description
     *
     * Sorts by start then end and merges any pair that `overlaps`
     * or `isAdjacentTo` the previous merged band. Empty (inverted)
     * bands are dropped. The result covers non-adjacent,
     * non-overlapping spans of the day, in start order.
     *
     * @param {readonly DayTimeBand[]} bands SET members, any order.
     * @returns {DayTimeBand[]} Disjoint, non-adjacent bands, sorted.
     * @function
     * @author Cursor Grok 4.6
     */
    public static flatten (bands: readonly DayTimeBand[]): DayTimeBand[] {
        const sorted = bands
            .filter((band): boolean => !band.isEmpty())
            .sort((a, b) => a.compare(b));
        const count = sorted.length;
        if (count === 0) {
            return [];
        }
        if (count === 1) {
            return [ sorted[0] ];
        }
        const out: DayTimeBand[] = [ sorted[0] ];
        for (let i = 1; i < count; i++) {
            const last = out[out.length - 1];
            const next = sorted[i];
            if (last.overlaps(next) || last.isAdjacentTo(next)) {
                out[out.length - 1] = last.merge(next);
            } else {
                out.push(next);
            }
        }
        return out;
    }
}

/**
 * @summary The Leading Root Component Types of DayTimeBand
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_DayTimeBand: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "startDayTime",
        true,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        "endDayTime",
        true,
        $.hasTag(_TagClass.context, 1)
    ),
];

/**
 * @summary The Trailing Root Component Types of DayTimeBand
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_DayTimeBand: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of DayTimeBand
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_DayTimeBand: $.ComponentSpec[] = [];

let _cached_decoder_for_DayTimeBand: $.ASN1Decoder<DayTimeBand> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DayTimeBand
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DayTimeBand} The decoded data structure.
 */
export function _decode_DayTimeBand(el: _Element): DayTimeBand {
    if (!_cached_decoder_for_DayTimeBand) {
        _cached_decoder_for_DayTimeBand = function (el: _Element): DayTimeBand {
            let startDayTime: OPTIONAL<DayTime> =
                DayTimeBand._default_value_for_startDayTime;
            let endDayTime: OPTIONAL<DayTime> =
                DayTimeBand._default_value_for_endDayTime;
            let _unrecognizedExtensionsList: _Element[] = [];
            const callbacks: $.DecodingMap = {
                startDayTime: (_el: _Element): void => {
                    startDayTime = $._decode_explicit<DayTime>(
                        () => _decode_DayTime
                    )(_el);
                },
                endDayTime: (_el: _Element): void => {
                    endDayTime = $._decode_explicit<DayTime>(
                        () => _decode_DayTime
                    )(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_DayTimeBand,
                _extension_additions_list_spec_for_DayTimeBand,
                _root_component_type_list_2_spec_for_DayTimeBand,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new DayTimeBand(
                startDayTime,
                endDayTime,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_DayTimeBand(el);
}

let _cached_encoder_for_DayTimeBand: $.ASN1Encoder<DayTimeBand> | null = null;

/**
 * @summary Encodes a(n) DayTimeBand into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DayTimeBand, encoded as an ASN.1 Element.
 */
export function _encode_DayTimeBand(
    value: DayTimeBand,
    elGetter: $.ASN1Encoder<DayTimeBand>
): _Element {
    if (!_cached_encoder_for_DayTimeBand) {
        _cached_encoder_for_DayTimeBand = function (
            value: DayTimeBand        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_DEFAULT */ value.startDayTime === undefined ||
                            $.deepEq(
                                value.startDayTime,
                                DayTimeBand._default_value_for_startDayTime
                            )
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      0,
                                      () => _encode_DayTime,
                                      $.DER
                                  )(value.startDayTime, $.DER),
                            /* IF_DEFAULT */ value.endDayTime === undefined ||
                            $.deepEq(
                                value.endDayTime,
                                DayTimeBand._default_value_for_endDayTime
                            )
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      1,
                                      () => _encode_DayTime,
                                      $.DER
                                  )(value.endDayTime, $.DER),
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
    return _cached_encoder_for_DayTimeBand(value, elGetter);
}


/* eslint-enable */
