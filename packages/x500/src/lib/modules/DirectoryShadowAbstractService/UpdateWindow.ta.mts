/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    type Time,
    _decode_Time,
    _encode_Time,
} from "../DirectoryShadowAbstractService/Time.ta.mjs";
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
import { isoInterval } from "../../json.mjs";

/**
 * JSON Encoding Rules encoding of {@link UpdateWindow}.
 */
export type UpdateWindowJSON = {
    start: string;
    stop: string;
};
/**
 * @summary UpdateWindow
 * @description
 *
 * Next expected (or preferred) update window. Allowed on `updateShadow`
 * only if the agreement's `SchedulingParameters.othertimes` is TRUE. On
 * `shadowError`, present only with `unsuitableTiming`. Takes precedence
 * over `PeriodicStrategy` when `othertimes` is also TRUE.
 *
 * Range algebra copies what works from the VS Code `Range` API:
 * immutable bounds; `contains`, `isEqualTo` (VS Code: `isEqual`),
 * `intersection`, and `union` derive new values instead of
 * mutating. `Date` plays the role of VS Code `Position` (`start` /
 * `stop` as `start` / `end`). Both bounds are inclusive. Unlike
 * VS Code `Range`, inverted bounds are **not** swapped.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UpdateWindow ::= SEQUENCE {
 *   start  Time,
 *   stop   Time,
 *   ...}
 * ```
 *
 */
export class UpdateWindow {
    /**
     * @summary `start`.
     * @description
     *
     * Inclusive start of the window (UTC GeneralizedTime with seconds).
     *
     * @public
     * @readonly
     */
    public readonly start: Time;
    /**
     * @summary `stop`.
     * @description
     *
     * End of the window. Spec does not define start == stop or
     * start > stop.
     *
     * @public
     * @readonly
     */
    public readonly stop: Time;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    public readonly _unrecognizedExtensionsList: _Element[];

    constructor(
        start: Time,
        stop: Time,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.start = start;
        this.stop = stop;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a UpdateWindow
     * @description
     *
     * This takes an `object` and converts it to a `UpdateWindow`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `UpdateWindow`.
     * @returns {UpdateWindow}
     */
    public static _from_object(
        _o: { [_K in keyof UpdateWindow]: UpdateWindow[_K] }
    ): UpdateWindow {
        return new UpdateWindow(
            _o.start,
            _o.stop,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary This window as a 1-D interval.
     * @returns {Interval} Inclusive `start` / `stop` bounds.
     * @function
     * @author Cursor Grok 4.6
     */
    private _interval (): Interval {
        return {
            start: dateToBound(this.start),
            end: dateToBound(this.stop),
        };
    }

    /**
     * @summary Build a window from 1-D interval bounds.
     * @param {Interval} interval Inclusive bounds.
     * @returns {UpdateWindow} The corresponding window.
     * @function
     * @author Cursor Grok 4.6
     */
    private static _fromInterval (interval: Interval): UpdateWindow {
        const start = boundToDate(interval.start);
        const stop = boundToDate(interval.end);
        if ((start === undefined) || (stop === undefined)) {
            throw new Error("UpdateWindow bounds are required");
        }
        return new UpdateWindow(start, stop);
    }

    /**
     * @summary Compare this window to another for ordering.
     * @param {UpdateWindow} other The comparefn `b` argument.
     * @returns {number} Negative, `0`, or positive.
     * @function
     * @author Cursor Grok 4.6
     */
    public compare (other: UpdateWindow): number {
        return compareIntervals(this._interval(), other._interval());
    }

    /**
     * @summary Whether two windows have the same start and stop.
     * @description
     *
     * Copies VS Code `Range.isEqual` (named `isEqualTo` like
     * `DayTimeBand`). Compared as instants, not object identity.
     *
     * @param {UpdateWindow} other The other window.
     * @returns {boolean} `true` iff both bounds match.
     * @function
     * @author Cursor Grok 4.6
     */
    public isEqualTo (other: UpdateWindow): boolean {
        return (this.compare(other) === 0);
    }

    /**
     * @summary Whether start is after stop (matches no instant).
     * @description
     *
     * Copies VS Code `Range.isEmpty` in spirit. A window covering a
     * single instant is not empty.
     *
     * @returns {boolean} `true` iff `start` is after `stop`.
     * @function
     * @author Cursor Grok 4.6
     */
    public isEmpty (): boolean {
        return isEmptyInterval(this._interval(), false);
    }

    /**
     * @summary Whether this window contains a date or another window.
     * @description
     *
     * Copies VS Code `Range.contains`. Closed interval.
     *
     * @param {Date | UpdateWindow} dateOrWindow A date or window.
     * @returns {boolean} `true` iff every included instant is in this.
     * @function
     * @author Cursor Grok 4.6
     */
    public contains (dateOrWindow: Date | UpdateWindow): boolean {
        if (dateOrWindow instanceof UpdateWindow) {
            return containsInterval(
                this._interval(),
                dateOrWindow._interval(),
                false,
            );
        }
        return containsPoint(
            this._interval(),
            BigInt(dateOrWindow.getTime()),
            false,
        );
    }

    /**
     * @summary Whether this window shares any instant with `other`.
     * @param {UpdateWindow} other The other window.
     * @returns {boolean} `true` iff the closed ranges intersect.
     * @function
     * @author Cursor Grok 4.6
     */
    public overlaps (other: UpdateWindow): boolean {
        return overlapsInterval(this._interval(), other._interval(), false);
    }

    /**
     * @summary Overlap of this window and `other`, if any.
     * @description
     *
     * Copies VS Code `Range.intersection`.
     *
     * @param {UpdateWindow} other The other window.
     * @returns {UpdateWindow | undefined} The overlap, or `undefined`.
     * @function
     * @author Cursor Grok 4.6
     */
    public intersection (other: UpdateWindow): UpdateWindow | undefined {
        const overlap = intersectionOf(
            this._interval(),
            other._interval(),
            false,
        );
        return overlap ? UpdateWindow._fromInterval(overlap) : undefined;
    }

    /**
     * @summary Smallest window covering this window and `other`.
     * @description
     *
     * Copies VS Code `Range.union`. A gap is filled.
     *
     * @param {UpdateWindow} other The other window.
     * @returns {UpdateWindow} One window spanning both.
     * @function
     * @author Cursor Grok 4.6
     */
    public union (other: UpdateWindow): UpdateWindow {
        return UpdateWindow._fromInterval(
            unionOf(this._interval(), other._interval()),
        );
    }

    /**
     * @summary ISO 8601 time interval for this window
     * @description
     *
     * `start/stop`, each an ISO 8601 instant in UTC. Both bounds are
     * inclusive. Unrecognized extensions are omitted.
     *
     * @returns The interval `start/end`
     * @function
     * @public
     */
    public toString(): string {
        return isoInterval(this.start, this.stop);
    }

    /**
     * @summary Convert this `UpdateWindow` to a JSON encoding loosely following ITU-T X.697 (JER)
     * @description
     *
     * `GeneralizedTime` values are ISO 8601 timestamps. Unrecognized
     * extensions are not represented.
     *
     * @returns The JSON Encoding Rules encoding of this value
     * @function
     * @public
     */
    public toJSON(): UpdateWindowJSON {
        return {
            start: this.start.toISOString(),
            stop: this.stop.toISOString(),
        };
    }
}

/**
 * @summary The Leading Root Component Types of UpdateWindow
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_UpdateWindow: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "start",
        false,
        $.hasTag(_TagClass.universal, 24)
    ),
    new $.ComponentSpec(
        "stop",
        false,
        $.hasTag(_TagClass.universal, 24)
    ),
];

/**
 * @summary The Trailing Root Component Types of UpdateWindow
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_UpdateWindow: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of UpdateWindow
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_UpdateWindow: $.ComponentSpec[] = [];

let _cached_decoder_for_UpdateWindow: $.ASN1Decoder<UpdateWindow> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UpdateWindow
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UpdateWindow} The decoded data structure.
 */
export function _decode_UpdateWindow(el: _Element): UpdateWindow {
    if (!_cached_decoder_for_UpdateWindow) {
        _cached_decoder_for_UpdateWindow = function (
            el: _Element
        ): UpdateWindow {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "UpdateWindow contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "start";
            sequence[1].name = "stop";
            let start!: Time;
            let stop!: Time;
            start = _decode_Time(sequence[0]);
            stop = _decode_Time(sequence[1]);
            return new UpdateWindow(start, stop, sequence.slice(2));
        };
    }
    return _cached_decoder_for_UpdateWindow(el);
}

let _cached_encoder_for_UpdateWindow: $.ASN1Encoder<UpdateWindow> | null = null;

/**
 * @summary Encodes a(n) UpdateWindow into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UpdateWindow, encoded as an ASN.1 Element.
 */
export function _encode_UpdateWindow(
    value: UpdateWindow,
    elGetter: $.ASN1Encoder<UpdateWindow>
): _Element {
    if (!_cached_encoder_for_UpdateWindow) {
        _cached_encoder_for_UpdateWindow = function (
            value: UpdateWindow        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_Time(value.start, $.DER),
                            /* REQUIRED   */ _encode_Time(value.stop, $.DER),
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
    return _cached_encoder_for_UpdateWindow(value, elGetter);
}


/* eslint-enable */
