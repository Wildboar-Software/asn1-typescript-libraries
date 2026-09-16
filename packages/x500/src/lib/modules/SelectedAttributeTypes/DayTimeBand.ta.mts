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
 * `startDayTime` DEFAULT {hour 0}; `endDayTime` DEFAULT {hour 23,
 * minute 59, second 59}.
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
     * @summary Whether this band shares any second with `other`.
     * @description
     *
     * Closed intervals: a band ending at `T` overlaps one starting at
     * `T`. Does not wrap past midnight.
     *
     * @param {DayTimeBand} other The other band.
     * @returns {boolean} `true` iff the closed ranges intersect.
     * @function
     * @author Cursor Grok 4.6
     */
    public overlaps (other: DayTimeBand): boolean {
        return (this.startToSeconds() <= other.endToSeconds())
            && (other.startToSeconds() <= this.endToSeconds());
    }

    /**
     * @summary Whether the bands are consecutive with no gap between.
     * @description
     *
     * True when one band ends at second `T` and the other starts at
     * `T + 1`. Bands that share a second `overlap` instead.
     *
     * @param {DayTimeBand} other The other band.
     * @returns {boolean} `true` iff they abut by one second.
     * @function
     * @author Cursor Grok 4.6
     */
    public isAdjacentTo (other: DayTimeBand): boolean {
        return ((this.endToSeconds() + 1) === other.startToSeconds())
            || ((other.endToSeconds() + 1) === this.startToSeconds());
    }

    /**
     * @summary Covering interval of this band and `other`.
     * @description
     *
     * Start is the earlier start; end is the later end. DEFAULT start
     * and end are omitted. Used after `overlaps` / `isAdjacentTo`; if
     * the bands have a gap, that gap is filled.
     *
     * @param {DayTimeBand} other The other band.
     * @returns {DayTimeBand} One band spanning both.
     * @function
     * @author Cursor Grok 4.6
     */
    public merge (other: DayTimeBand): DayTimeBand {
        const startSec = Math.min(this.startToSeconds(), other.startToSeconds());
        const endSec = Math.max(this.endToSeconds(), other.endToSeconds());
        return new DayTimeBand(
            (startSec === 0) ? undefined : DayTime.fromSeconds(startSec),
            (endSec === DayTimeBand.END_OF_DAY.toSeconds())
                ? undefined
                : DayTime.fromSeconds(endSec),
        );
    }

    /**
     * @summary Flatten overlapping and adjacent `DayTimeBand`s.
     * @description
     *
     * Sorts by start then end and merges any pair that `overlaps` or
     * `isAdjacentTo` the previous merged band. After this, at most one
     * band starts at 00:00:00 and at most one ends at 23:59:59, unless
     * they are the same whole-day band.
     *
     * @param {readonly DayTimeBand[]} bands The SET members, in any order.
     * @returns {DayTimeBand[]} Disjoint, non-adjacent bands, sorted.
     * @function
     * @author Cursor Grok 4.6
     */
    public static flatten (bands: readonly DayTimeBand[]): DayTimeBand[] {
        const count = bands.length;
        if (count === 0) {
            return [];
        }
        if (count === 1) {
            return [ bands[0] ];
        }
        const sorted = bands.slice().sort((a, b) => a.compare(b));
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
