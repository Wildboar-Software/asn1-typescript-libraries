import {
    adjacencyOf,
    boundToDate,
    boundToInteger,
    boundToIntegerBytes,
    compareIntervals,
    containsInterval,
    containsPoint,
    dateToBound,
    euclideanMod,
    integerBytesToBound,
    intersectionOf,
    isEmptyInterval,
    overlapsInterval,
    sameIntegerBytes,
    unionOf,
} from "./rangeAlgebra.mjs";

describe("rangeAlgebra closed intervals", () => {
    const a = { start: 1n, end: 5n };
    const b = { start: 4n, end: 8n };
    const c = { start: 6n, end: 9n };
    const inverted = { start: 9n, end: 1n };

    it("containsPoint is inclusive of both bounds", () => {
        expect(containsPoint(a, 1n, false)).toBe(true);
        expect(containsPoint(a, 5n, false)).toBe(true);
        expect(containsPoint(a, 0n, false)).toBe(false);
        expect(containsPoint(a, 6n, false)).toBe(false);
    });

    it("intersection is the overlapping closed interval", () => {
        expect(intersectionOf(a, b, false)).toEqual({ start: 4n, end: 5n });
        expect(intersectionOf(a, c, false)).toBeUndefined();
        expect(intersectionOf(a, { start: 5n, end: 6n }, false)).toEqual({
            start: 5n,
            end: 5n,
        });
    });

    it("union fills a gap", () => {
        expect(unionOf(a, c)).toEqual({ start: 1n, end: 9n });
    });

    it("inverted bounds are empty and contain nothing", () => {
        expect(isEmptyInterval(inverted, false)).toBe(true);
        expect(containsPoint(inverted, 5n, false)).toBe(false);
        expect(containsInterval(a, inverted, false)).toBe(false);
        expect(intersectionOf(a, inverted, false)).toBeUndefined();
    });

    it("unbounded sides do not constrain that end", () => {
        const openStart = { start: undefined, end: 5n };
        const openEnd = { start: 3n, end: undefined };
        expect(containsPoint(openStart, -100n, false)).toBe(true);
        expect(containsPoint(openEnd, 999n, false)).toBe(true);
        expect(unionOf(openStart, openEnd)).toEqual({
            start: undefined,
            end: undefined,
        });
        expect(intersectionOf(openStart, openEnd, false)).toEqual({
            start: 3n,
            end: 5n,
        });
    });
});

describe("rangeAlgebra exclusive end", () => {
    const a = { start: 1n, end: 5n };

    it("containsPoint excludes the end", () => {
        expect(containsPoint(a, 1n, true)).toBe(true);
        expect(containsPoint(a, 4n, true)).toBe(true);
        expect(containsPoint(a, 5n, true)).toBe(false);
    });

    it("start === end is empty", () => {
        expect(isEmptyInterval({ start: 5n, end: 5n }, true)).toBe(true);
        expect(intersectionOf(a, { start: 5n, end: 9n }, true)).toBeUndefined();
    });

    it("adjacency is exclusive-end equals next start", () => {
        expect(adjacencyOf(a, { start: 5n, end: 9n }, true)).toBe(1);
        expect(adjacencyOf({ start: 5n, end: 9n }, a, true)).toBe(-1);
        expect(adjacencyOf(a, { start: 4n, end: 9n }, true)).toBe(0);
    });
});

describe("rangeAlgebra inclusive adjacency / compare", () => {
    it("is adjacent when end + 1 === other start", () => {
        const a = { start: 1n, end: 5n };
        const b = { start: 6n, end: 9n };
        expect(adjacencyOf(a, b, false)).toBe(1);
        expect(overlapsInterval(a, b, false)).toBe(false);
    });

    it("orders by start then end, unbounded start first", () => {
        expect(compareIntervals(
            { start: undefined, end: 1n },
            { start: 0n, end: 1n },
        ) < 0).toBe(true);
        expect(compareIntervals(
            { start: 1n, end: undefined },
            { start: 1n, end: 2n },
        ) > 0).toBe(true);
    });
});

describe("rangeAlgebra integer / date conversions", () => {
    it("round-trips INTEGER bytes including negatives", () => {
        for (const n of [0n, 1n, 127n, 128n, 255n, -1n, -128n, 65535n]) {
            const bytes = boundToIntegerBytes(n);
            expect(integerBytesToBound(bytes)).toBe(n);
        }
    });

    it("sameIntegerBytes compares numerically, not encodings", () => {
        expect(sameIntegerBytes(
            boundToIntegerBytes(1n),
            boundToIntegerBytes(1n),
        )).toBe(true);
        expect(sameIntegerBytes(undefined, undefined)).toBe(true);
        expect(sameIntegerBytes(boundToIntegerBytes(1n), undefined)).toBe(false);
    });

    it("boundToInteger uses number for safe integers", () => {
        expect(boundToInteger(5n)).toBe(5);
        expect(typeof boundToInteger(5n)).toBe("number");
    });

    it("dateToBound round-trips milliseconds", () => {
        const date = new Date("2020-01-01T00:00:00.000Z");
        expect(boundToDate(dateToBound(date))?.getTime()).toBe(date.getTime());
    });

    it("euclideanMod is non-negative", () => {
        expect(euclideanMod(-1n, 5n)).toBe(4n);
        expect(euclideanMod(7n, 5n)).toBe(2n);
    });
});
