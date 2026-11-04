/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    type BOOLEAN,
    type GeneralizedTime,
    type OPTIONAL,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    type Interval,
    boundToDate,
    compareIntervals,
    containsInterval,
    containsPoint,
    dateToBound,
    intersectionOf,
    isEmptyInterval,
    overlapsInterval,
    unionOf,
} from "../../utils/rangeAlgebra.mjs";

/**
 * @summary TimeAssertion_between
 * @description
 *
 * `entirely` DEFAULT FALSE ⇒ any overlap; TRUE ⇒ assertion band fully
 * inside stored spec. Missing `endTime` ⇒ open-ended.
 *
 * Range algebra copies what works from the VS Code `Range` API:
 * immutable bounds; `contains`, `isEqualTo` (VS Code: `isEqual`),
 * `intersection`, `union`, and `with` derive new values instead of
 * mutating. `Date` plays the role of VS Code `Position`. Present
 * bounds are inclusive. `entirely` is a matching flag, not a bound:
 * `contains` / `intersection` / `union` use the time interval only
 * and keep this value's `entirely`. Unlike VS Code `Range`, inverted
 * bounds are **not** swapped.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TimeAssertion-between ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 */
export class TimeAssertion_between {
    /**
     * @summary `startTime`.
     * @description
     *
     * Start of assertion band.
     *
     * @public
     * @readonly
     */
    public readonly startTime: GeneralizedTime;
    /**
     * @summary `endTime`.
     * @description
     *
     * Missing ⇒ open-ended.
     *
     * @public
     * @readonly
     */
    public readonly endTime?: OPTIONAL<GeneralizedTime>;
    /**
     * @summary `entirely`.
     * @description
     *
     * DEFAULT FALSE (any overlap) vs TRUE (assertion fully inside
     * stored spec).
     *
     * @public
     * @readonly
     */
    public readonly entirely?: OPTIONAL<BOOLEAN>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    public readonly _unrecognizedExtensionsList: _Element[];

    constructor(
        startTime: GeneralizedTime,
        endTime?: OPTIONAL<GeneralizedTime>,
        entirely?: OPTIONAL<BOOLEAN>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.startTime = startTime;
        this.endTime = endTime;
        this.entirely = entirely;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a TimeAssertion_between
     * @description
     *
     * This takes an `object` and converts it to a `TimeAssertion_between`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TimeAssertion_between`.
     * @returns {TimeAssertion_between}
     */
    public static _from_object(
        _o: { [_K in keyof TimeAssertion_between]: TimeAssertion_between[_K] }
    ): TimeAssertion_between {
        return new TimeAssertion_between(
            _o.startTime,
            _o.endTime,
            _o.entirely,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary Getter that returns the default value for `entirely`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_entirely(): BOOLEAN {
        return false;
    }

    /**
     * @summary Effective `entirely` (DEFAULT FALSE).
     * @returns {boolean} `true` iff the assertion must be fully covered.
     * @function
     * @author Cursor Grok 4.6
     */
    public entirelyValue (): boolean {
        return (this.entirely
            ?? TimeAssertion_between._default_value_for_entirely);
    }

    /**
     * @summary This assertion band as a 1-D interval.
     * @returns {Interval} Inclusive `startTime` / `endTime` bounds.
     * @function
     * @author Cursor Grok 4.6
     */
    private _interval (): Interval {
        return {
            start: dateToBound(this.startTime),
            end: dateToBound(this.endTime),
        };
    }

    /**
     * @summary Build an assertion band from 1-D interval bounds.
     * @param {Interval} interval Inclusive bounds.
     * @param {BOOLEAN} [entirely] Matching flag to keep.
     * @returns {TimeAssertion_between} The corresponding band.
     * @function
     * @author Cursor Grok 4.6
     */
    private static _fromInterval (
        interval: Interval,
        entirely?: BOOLEAN,
    ): TimeAssertion_between {
        const start = boundToDate(interval.start);
        if (start === undefined) {
            throw new Error("TimeAssertion-between.startTime is required");
        }
        return new TimeAssertion_between(
            start,
            boundToDate(interval.end),
            entirely,
        );
    }

    /**
     * @summary Compare this band to another for ordering.
     * @description
     *
     * Orders by start, then end, then `entirely` (DEFAULT FALSE).
     *
     * @param {TimeAssertion_between} other The comparefn `b` argument.
     * @returns {number} Negative, `0`, or positive.
     * @function
     * @author Cursor Grok 4.6
     */
    public compare (other: TimeAssertion_between): number {
        const timeDiff = compareIntervals(
            this._interval(),
            other._interval(),
        );
        if (timeDiff !== 0) {
            return timeDiff;
        }
        return Number(this.entirelyValue()) - Number(other.entirelyValue());
    }

    /**
     * @summary Whether two bands have the same bounds and `entirely`.
     * @description
     *
     * Copies VS Code `Range.isEqual` (named `isEqualTo` like
     * `DayTimeBand`) for the time interval, and also compares
     * `entirely` after applying DEFAULT FALSE.
     *
     * @param {TimeAssertion_between} other The other band.
     * @returns {boolean} `true` iff bounds and `entirely` match.
     * @function
     * @author Cursor Grok 4.6
     */
    public isEqualTo (other: TimeAssertion_between): boolean {
        return (this.compare(other) === 0);
    }

    /**
     * @summary Whether start is after end (matches no instant).
     * @description
     *
     * Copies VS Code `Range.isEmpty` in spirit. Open-ended bands
     * (missing `endTime`) are not empty.
     *
     * @returns {boolean} `true` iff both bounds are present and inverted.
     * @function
     * @author Cursor Grok 4.6
     */
    public isEmpty (): boolean {
        return isEmptyInterval(this._interval(), false);
    }

    /**
     * @summary Whether this band contains a date or another band.
     * @description
     *
     * Copies VS Code `Range.contains`. Closed interval. `entirely` is
     * not consulted; it is a matching-rule flag for temporal context.
     *
     * @param {Date | TimeAssertion_between} dateOrBetween A date or band.
     * @returns {boolean} `true` iff every included instant is in this.
     * @function
     * @author Cursor Grok 4.6
     */
    public contains (
        dateOrBetween: Date | TimeAssertion_between,
    ): boolean {
        if (dateOrBetween instanceof TimeAssertion_between) {
            return containsInterval(
                this._interval(),
                dateOrBetween._interval(),
                false,
            );
        }
        return containsPoint(
            this._interval(),
            BigInt(dateOrBetween.getTime()),
            false,
        );
    }

    /**
     * @summary Whether this band shares any instant with `other`.
     * @param {TimeAssertion_between} other The other band.
     * @returns {boolean} `true` iff the closed ranges intersect.
     * @function
     * @author Cursor Grok 4.6
     */
    public overlaps (other: TimeAssertion_between): boolean {
        return overlapsInterval(this._interval(), other._interval(), false);
    }

    /**
     * @summary Overlap of this band and `other`, if any.
     * @description
     *
     * Copies VS Code `Range.intersection`. Keeps this band's
     * `entirely`.
     *
     * @param {TimeAssertion_between} other The other band.
     * @returns {TimeAssertion_between | undefined} The overlap, or
     * `undefined`.
     * @function
     * @author Cursor Grok 4.6
     */
    public intersection (
        other: TimeAssertion_between,
    ): TimeAssertion_between | undefined {
        const overlap = intersectionOf(
            this._interval(),
            other._interval(),
            false,
        );
        return overlap
            ? TimeAssertion_between._fromInterval(overlap, this.entirely)
            : undefined;
    }

    /**
     * @summary Smallest band covering this band and `other`.
     * @description
     *
     * Copies VS Code `Range.union`. A gap is filled. Keeps this
     * band's `entirely`.
     *
     * @param {TimeAssertion_between} other The other band.
     * @returns {TimeAssertion_between} One band spanning both.
     * @function
     * @author Cursor Grok 4.6
     */
    public union (other: TimeAssertion_between): TimeAssertion_between {
        return TimeAssertion_between._fromInterval(
            unionOf(this._interval(), other._interval()),
            this.entirely,
        );
    }

    /**
     * @summary Copy this band, replacing selected fields.
     * @description
     *
     * Copies VS Code `Range.with`.
     *
     * @param {Date | object} [startOrChange] New `startTime`, or a
     * change object with optional `startTime` / `endTime` /
     * `entirely`.
     * @param {Date} [end] New `endTime` when using positional args.
     * @returns {TimeAssertion_between} A new band, or `this` if unchanged.
     * @function
     * @author Cursor Grok 4.6
     */
    public with (
        startOrChange?: Date | {
            startTime?: Date;
            endTime?: Date;
            entirely?: BOOLEAN;
        },
        end?: Date,
    ): TimeAssertion_between {
        let start = this.startTime;
        let nextEnd = this.endTime;
        let entirely = this.entirely;
        if (startOrChange instanceof Date) {
            start = startOrChange;
            nextEnd = (end !== undefined) ? end : this.endTime;
        } else if (startOrChange === undefined) {
            nextEnd = (end !== undefined) ? end : this.endTime;
        } else {
            start = (startOrChange.startTime !== undefined)
                ? startOrChange.startTime
                : this.startTime;
            nextEnd = (startOrChange.endTime !== undefined)
                ? startOrChange.endTime
                : this.endTime;
            entirely = (startOrChange.entirely !== undefined)
                ? startOrChange.entirely
                : this.entirely;
        }
        if (
            (start === this.startTime)
            && (nextEnd === this.endTime)
            && (entirely === this.entirely)
        ) {
            return this;
        }
        return new TimeAssertion_between(
            start,
            nextEnd,
            entirely,
            this._unrecognizedExtensionsList,
        );
    }
}

/**
 * @summary The Leading Root Component Types of TimeAssertion_between
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_TimeAssertion_between: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "startTime",
        false,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        "endTime",
        true,
        $.hasTag(_TagClass.context, 1)
    ),
    new $.ComponentSpec(
        "entirely",
        true,
        $.hasTag(_TagClass.universal, 1)
    ),
];

/**
 * @summary The Trailing Root Component Types of TimeAssertion_between
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_TimeAssertion_between: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of TimeAssertion_between
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_TimeAssertion_between: $.ComponentSpec[] = [];

let _cached_decoder_for_TimeAssertion_between: $.ASN1Decoder<TimeAssertion_between> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TimeAssertion_between
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TimeAssertion_between} The decoded data structure.
 */
export function _decode_TimeAssertion_between(el: _Element): TimeAssertion_between {
    if (!_cached_decoder_for_TimeAssertion_between) {
        _cached_decoder_for_TimeAssertion_between = function (
            el: _Element
        ): TimeAssertion_between {
            let startTime!: GeneralizedTime;
            let endTime: OPTIONAL<GeneralizedTime>;
            let entirely: OPTIONAL<BOOLEAN> =
                TimeAssertion_between._default_value_for_entirely;
            let _unrecognizedExtensionsList: _Element[] = [];
            const callbacks: $.DecodingMap = {
                startTime: (_el: _Element): void => {
                    startTime = $._decode_explicit<GeneralizedTime>(
                        () => $._decodeGeneralizedTime
                    )(_el);
                },
                endTime: (_el: _Element): void => {
                    endTime = $._decode_explicit<GeneralizedTime>(
                        () => $._decodeGeneralizedTime
                    )(_el);
                },
                entirely: (_el: _Element): void => {
                    entirely = $._decodeBoolean(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_TimeAssertion_between,
                _extension_additions_list_spec_for_TimeAssertion_between,
                _root_component_type_list_2_spec_for_TimeAssertion_between,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new TimeAssertion_between(
                startTime,
                endTime,
                entirely,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_TimeAssertion_between(el);
}

let _cached_encoder_for_TimeAssertion_between: $.ASN1Encoder<TimeAssertion_between> | null = null;

/**
 * @summary Encodes a(n) TimeAssertion_between into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TimeAssertion_between, encoded as an ASN.1 Element.
 */
export function _encode_TimeAssertion_between(
    value: TimeAssertion_between,
    elGetter: $.ASN1Encoder<TimeAssertion_between>
): _Element {
    if (!_cached_encoder_for_TimeAssertion_between) {
        _cached_encoder_for_TimeAssertion_between = function (
            value: TimeAssertion_between        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encode_explicit(
                                _TagClass.context,
                                0,
                                () => $._encodeGeneralizedTime,
                                $.DER
                            )(value.startTime, $.DER),
                            /* IF_ABSENT  */ value.endTime === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      1,
                                      () => $._encodeGeneralizedTime,
                                      $.DER
                                  )(value.endTime, $.DER),
                            /* IF_DEFAULT */ value.entirely === undefined ||
                            $.deepEq(
                                value.entirely,
                                TimeAssertion_between._default_value_for_entirely
                            )
                                ? undefined
                                : $._encodeBoolean(value.entirely, $.DER),
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
    return _cached_encoder_for_TimeAssertion_between(value, elGetter);
}


/* eslint-enable */
