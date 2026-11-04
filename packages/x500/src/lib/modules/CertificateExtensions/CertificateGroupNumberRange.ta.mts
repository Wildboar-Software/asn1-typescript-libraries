/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    type INTEGER,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    type Interval,
    adjacencyOf,
    boundToInteger,
    compareIntervals,
    containsInterval,
    containsPoint,
    integerToBound,
    intersectionOf,
    isEmptyInterval,
    overlapsInterval,
    unionOf,
} from "../../utils/rangeAlgebra.mjs";
import { integerToJSON, integerToString } from "../../json.mjs";

/**
 * JSON Encoding Rules encoding of {@link CertificateGroupNumberRange}.
 */
export type CertificateGroupNumberRangeJSON = {
    startingNumber: number | string;
    endingNumber: number | string;
};

/**
 * @summary CertificateGroupNumberRange
 * @description
 *
 * Inclusive serial range: startingNumber through endingNumber (both
 * required). Serials are unique per issuer, not sequential. Contrast
 * `NumberRange`, whose endingNumber is exclusive after optional modulus.
 *
 * Range algebra copies what works from the VS Code `Range` API:
 * immutable bounds; `contains`, `isEqualTo` (VS Code: `isEqual`),
 * `intersection`, and `union` derive new values instead of
 * mutating. `INTEGER` plays the role of VS Code `Position`. Both
 * bounds are inclusive. Unlike VS Code `Range`, inverted bounds are
 * **not** swapped. `isAdjacentTo` / `merge` / `flatten` follow
 * `DayTimeBand` for discrete serials.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertificateGroupNumberRange ::= SEQUENCE {
 *   startingNumber  [0]  INTEGER,
 *   endingNumber    [1]  INTEGER,
 *   ... }
 * ```
 *
 */
export class CertificateGroupNumberRange {
    /**
     * @summary `startingNumber`.
     * @description
     *
     * Inclusive lower serial. Serials unique per issuer, not sequential.
     *
     * @public
     * @readonly
     */
    public readonly startingNumber: INTEGER;
    /**
     * @summary `endingNumber`.
     * @description
     *
     * Inclusive upper serial (unlike NumberRange).
     *
     * @public
     * @readonly
     */
    public readonly endingNumber: INTEGER;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    public readonly _unrecognizedExtensionsList: _Element[];

    constructor(
        startingNumber: INTEGER,
        endingNumber: INTEGER,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.startingNumber = startingNumber;
        this.endingNumber = endingNumber;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a CertificateGroupNumberRange
     * @description
     *
     * This takes an `object` and converts it to a `CertificateGroupNumberRange`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CertificateGroupNumberRange`.
     * @returns {CertificateGroupNumberRange}
     */
    public static _from_object(
        _o:
            {
                [_K in keyof CertificateGroupNumberRange]: CertificateGroupNumberRange[_K];
            }
    ): CertificateGroupNumberRange {
        return new CertificateGroupNumberRange(
            _o.startingNumber,
            _o.endingNumber,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary This serial range as a 1-D interval.
     * @returns {Interval} Inclusive `startingNumber` / `endingNumber`.
     * @function
     * @author Cursor Grok 4.6
     */
    private _interval (): Interval {
        return {
            start: integerToBound(this.startingNumber),
            end: integerToBound(this.endingNumber),
        };
    }

    /**
     * @summary Build a serial range from 1-D interval bounds.
     * @param {Interval} interval Inclusive bounds.
     * @returns {CertificateGroupNumberRange} The corresponding range.
     * @function
     * @author Cursor Grok 4.6
     */
    private static _fromInterval (
        interval: Interval,
    ): CertificateGroupNumberRange {
        const start = boundToInteger(interval.start);
        const end = boundToInteger(interval.end);
        if ((start === undefined) || (end === undefined)) {
            throw new Error("CertificateGroupNumberRange bounds are required");
        }
        return new CertificateGroupNumberRange(start, end);
    }

    /**
     * @summary Compare this range to another for ordering.
     * @param {CertificateGroupNumberRange} other The comparefn `b`.
     * @returns {number} Negative, `0`, or positive.
     * @function
     * @author Cursor Grok 4.6
     */
    public compare (other: CertificateGroupNumberRange): number {
        return compareIntervals(this._interval(), other._interval());
    }

    /**
     * @summary Whether two ranges have the same inclusive bounds.
     * @description
     *
     * Copies VS Code `Range.isEqual` (named `isEqualTo` like
     * `DayTimeBand`). Compared numerically, so `1` equals `1n`.
     *
     * @param {CertificateGroupNumberRange} other The other range.
     * @returns {boolean} `true` iff both bounds match.
     * @function
     * @author Cursor Grok 4.6
     */
    public isEqualTo (other: CertificateGroupNumberRange): boolean {
        return (this.compare(other) === 0);
    }

    /**
     * @summary Whether start is after end (matches no serial).
     * @description
     *
     * Copies VS Code `Range.isEmpty` in spirit. A range covering a
     * single serial is not empty.
     *
     * @returns {boolean} `true` iff `startingNumber` > `endingNumber`.
     * @function
     * @author Cursor Grok 4.6
     */
    public isEmpty (): boolean {
        return isEmptyInterval(this._interval(), false);
    }

    /**
     * @summary Whether this range contains a serial or another range.
     * @description
     *
     * Copies VS Code `Range.contains`. Closed interval.
     *
     * @param {INTEGER | CertificateGroupNumberRange} valueOrRange
     * A serial or range.
     * @returns {boolean} `true` iff every included serial is in this.
     * @function
     * @author Cursor Grok 4.6
     */
    public contains (
        valueOrRange: INTEGER | CertificateGroupNumberRange,
    ): boolean {
        if (valueOrRange instanceof CertificateGroupNumberRange) {
            return containsInterval(
                this._interval(),
                valueOrRange._interval(),
                false,
            );
        }
        return containsPoint(
            this._interval(),
            BigInt(valueOrRange),
            false,
        );
    }

    /**
     * @summary Whether this range shares any serial with `other`.
     * @param {CertificateGroupNumberRange} other The other range.
     * @returns {boolean} `true` iff the closed ranges intersect.
     * @function
     * @author Cursor Grok 4.6
     */
    public overlaps (other: CertificateGroupNumberRange): boolean {
        return overlapsInterval(this._interval(), other._interval(), false);
    }

    /**
     * @summary Overlap of this range and `other`, if any.
     * @description
     *
     * Copies VS Code `Range.intersection`.
     *
     * @param {CertificateGroupNumberRange} other The other range.
     * @returns {CertificateGroupNumberRange | undefined} The overlap,
     * or `undefined`.
     * @function
     * @author Cursor Grok 4.6
     */
    public intersection (
        other: CertificateGroupNumberRange,
    ): CertificateGroupNumberRange | undefined {
        const overlap = intersectionOf(
            this._interval(),
            other._interval(),
            false,
        );
        return overlap
            ? CertificateGroupNumberRange._fromInterval(overlap)
            : undefined;
    }

    /**
     * @summary Smallest range covering this range and `other`.
     * @description
     *
     * Copies VS Code `Range.union`. A gap is filled.
     *
     * @param {CertificateGroupNumberRange} other The other range.
     * @returns {CertificateGroupNumberRange} One range spanning both.
     * @function
     * @author Cursor Grok 4.6
     */
    public union (
        other: CertificateGroupNumberRange,
    ): CertificateGroupNumberRange {
        return this.merge(other);
    }

    /**
     * @summary Whether `other` abuts this range with no gap or overlap.
     * @description
     *
     * Adjacent means one range ends at `T` and the other starts at
     * `T + 1`. Ranges that share a serial `overlap` instead.
     *
     * @param {CertificateGroupNumberRange} other The other range.
     * @returns {number} `-1` if `other` is adjacent below; `1` if
     * adjacent above; `0` if not adjacent.
     * @function
     * @author Cursor Grok 4.6
     */
    public isAdjacentTo (other: CertificateGroupNumberRange): -1 | 0 | 1 {
        return adjacencyOf(this._interval(), other._interval(), false);
    }

    /**
     * @summary Covering interval of this range and `other`.
     * @description
     *
     * Start is the min of the lower bounds; end is the max of the
     * upper bounds. If the ranges have a gap, that gap is filled.
     *
     * @param {CertificateGroupNumberRange} other The other range.
     * @returns {CertificateGroupNumberRange} One range spanning both.
     * @function
     * @author Cursor Grok 4.6
     */
    public merge (
        other: CertificateGroupNumberRange,
    ): CertificateGroupNumberRange {
        return CertificateGroupNumberRange._fromInterval(
            unionOf(this._interval(), other._interval()),
        );
    }

    /**
     * @summary Flatten overlapping and adjacent serial ranges.
     * @description
     *
     * Sorts by start then end and merges any pair that `overlaps` or
     * `isAdjacentTo` the previous merged range. Empty (inverted)
     * ranges are dropped.
     *
     * @param {readonly CertificateGroupNumberRange[]} ranges Any order.
     * @returns {CertificateGroupNumberRange[]} Disjoint, non-adjacent
     * ranges, sorted.
     * @function
     * @author Cursor Grok 4.6
     */
    public static flatten (
        ranges: readonly CertificateGroupNumberRange[],
    ): CertificateGroupNumberRange[] {
        const sorted = ranges
            .filter((range): boolean => !range.isEmpty())
            .sort((a, b) => a.compare(b));
        const count = sorted.length;
        if (count === 0) {
            return [];
        }
        if (count === 1) {
            return [ sorted[0] ];
        }
        const out: CertificateGroupNumberRange[] = [ sorted[0] ];
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

    /**
     * @summary Closed integer interval for this serial range
     * @description
     *
     * `[startingNumber,endingNumber]`. Both bounds are inclusive.
     * Unrecognized extensions are omitted.
     *
     * @returns The interval
     * @function
     * @public
     */
    public toString(): string {
        return `[${integerToString(this.startingNumber)},${integerToString(this.endingNumber)}]`;
    }

    /**
     * @summary Convert this range to a JSON encoding loosely following ITU-T X.697 (JER)
     * @description
     *
     * INTEGER components are JSON numbers, or decimal strings when they
     * are not JSON-safe. Unrecognized extensions are not represented.
     *
     * @returns The JSON Encoding Rules encoding of this value
     * @function
     * @public
     */
    public toJSON(): CertificateGroupNumberRangeJSON {
        return {
            startingNumber: integerToJSON(this.startingNumber),
            endingNumber: integerToJSON(this.endingNumber),
        };
    }
}

/**
 * @summary The Leading Root Component Types of CertificateGroupNumberRange
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CertificateGroupNumberRange: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "startingNumber",
        false,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        "endingNumber",
        false,
        $.hasTag(_TagClass.context, 1)
    ),
];

/**
 * @summary The Trailing Root Component Types of CertificateGroupNumberRange
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CertificateGroupNumberRange: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of CertificateGroupNumberRange
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CertificateGroupNumberRange: $.ComponentSpec[] = [];

let _cached_decoder_for_CertificateGroupNumberRange: $.ASN1Decoder<CertificateGroupNumberRange> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CertificateGroupNumberRange
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertificateGroupNumberRange} The decoded data structure.
 */
export function _decode_CertificateGroupNumberRange(el: _Element): CertificateGroupNumberRange {
    if (!_cached_decoder_for_CertificateGroupNumberRange) {
        _cached_decoder_for_CertificateGroupNumberRange = function (
            el: _Element
        ): CertificateGroupNumberRange {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "CertificateGroupNumberRange contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "startingNumber";
            sequence[1].name = "endingNumber";
            let startingNumber!: INTEGER;
            let endingNumber!: INTEGER;
            startingNumber = $._decode_implicit<INTEGER>(
                () => $._decodeInteger
            )(sequence[0]);
            endingNumber = $._decode_implicit<INTEGER>(() => $._decodeInteger)(
                sequence[1]
            );
            return new CertificateGroupNumberRange(
                startingNumber,
                endingNumber,
                sequence.slice(2)
            );
        };
    }
    return _cached_decoder_for_CertificateGroupNumberRange(el);
}

let _cached_encoder_for_CertificateGroupNumberRange: $.ASN1Encoder<CertificateGroupNumberRange> | null = null;

/**
 * @summary Encodes a(n) CertificateGroupNumberRange into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertificateGroupNumberRange, encoded as an ASN.1 Element.
 */
export function _encode_CertificateGroupNumberRange(
    value: CertificateGroupNumberRange,
    elGetter: $.ASN1Encoder<CertificateGroupNumberRange>
): _Element {
    if (!_cached_encoder_for_CertificateGroupNumberRange) {
        _cached_encoder_for_CertificateGroupNumberRange = function (
            value: CertificateGroupNumberRange        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encode_implicit(
                                _TagClass.context,
                                0,
                                () => $._encodeInteger,
                                $.DER
                            )(value.startingNumber, $.DER),
                            /* REQUIRED   */ $._encode_implicit(
                                _TagClass.context,
                                1,
                                () => $._encodeInteger,
                                $.DER
                            )(value.endingNumber, $.DER),
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
    return _cached_encoder_for_CertificateGroupNumberRange(value, elGetter);
}


/* eslint-enable */
