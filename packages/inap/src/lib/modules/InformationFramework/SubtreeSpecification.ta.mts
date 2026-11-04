import {
    ASN1Element,
    type OBJECT_IDENTIFIER,
} from "@wildboar/asn1";
import { Buffer } from "node:buffer";
import * as $ from "@wildboar/asn1/functional";
import {
    rdnSequenceToJSON,
    rdnSequenceToKey,
    rdnSequenceToString,
    type RDNSequenceJSON,
} from "@wildboar/dn";
import {
    SubtreeSpecification as X500SubtreeSpecification,
    _decode_SubtreeSpecification as decodeX500SubtreeSpecification,
    _encode_SubtreeSpecification as encodeX500SubtreeSpecification,
    type BaseDistance,
    type ChopSpecification_specificExclusions_Item,
    type LocalName,
    type Refinement,
} from "@wildboar/x500/InformationFramework";

/**
 * Reversible JSON for one `specificExclusions` alternative.
 * Local names use {@link RDNSequenceJSON}.
 */
export type SpecificExclusionJSON =
    | { chopBefore: RDNSequenceJSON }
    | { chopAfter: RDNSequenceJSON }
    | { unrecognized: string };

/**
 * Reversible JSON for a {@link Refinement}. Object-class identifiers
 * are dotted numeric OIDs. `and` / `or` keep their element order.
 */
export type RefinementJSON =
    | { item: string }
    | { and: RefinementJSON[] }
    | { or: RefinementJSON[] }
    | { not: RefinementJSON }
    | { unrecognized: string };

/**
 * Reversible JSON for a {@link SubtreeSpecification}.
 * Default `base` (`{}`) and `minimum` (`0`) are omitted.
 * Unrecognized extensions are omitted.
 */
export type SubtreeSpecificationJSON = {
    base?: RDNSequenceJSON;
    specificExclusions?: SpecificExclusionJSON[];
    minimum?: number;
    maximum?: number;
    specificationFilter?: RefinementJSON;
};

type SpecFields = {
    base?: LocalName;
    specificExclusions?: ChopSpecification_specificExclusions_Item[];
    minimum?: BaseDistance;
    maximum?: BaseDistance;
    specificationFilter?: Refinement;
    _unrecognizedExtensionsList?: ASN1Element[];
};

type ChopKind = "before" | "after";

type Chop = {
    kind: ChopKind;
    name: LocalName;
};

type View = {
    base: LocalName;
    min: number;
    max: number | undefined;
    chops: readonly Chop[];
    unrecognizedChops: readonly string[];
    filter: Refinement | undefined;
    extensions: readonly ASN1Element[];
    opaque: boolean;
    empty: boolean;
};

type AbsorbedChops =
    | { empty: true }
    | {
        empty: false;
        min: number;
        max: number | undefined;
        extra: Chop[];
    };

const MAX_REFINEMENT_OIDS: number = 16;
const MAX_REFINEMENT_DEPTH: number = 32;

function asDistance (value: BaseDistance | undefined, fallback: number): number {
    if (value === undefined) {
        return fallback;
    }
    const n: number = typeof value === "bigint" ? Number(value) : value;
    if (!Number.isSafeInteger(n) || n < 0) {
        throw new RangeError("BaseDistance is out of range");
    }
    return n;
}

function distanceText (value: BaseDistance): string {
    return typeof value === "bigint" ? value.toString() : String(value);
}

function elementBytes (el: ASN1Element): string {
    return Buffer.from(el.toBytes()).toString("hex");
}

function isNamePrefix (prefix: LocalName, name: LocalName): boolean {
    if (prefix.length > name.length) {
        return false;
    }
    if (prefix.length === 0) {
        return true;
    }
    return rdnSequenceToKey(prefix) === rdnSequenceToKey(name.slice(0, prefix.length));
}

function sameName (a: LocalName, b: LocalName): boolean {
    return a.length === b.length && rdnSequenceToKey(a) === rdnSequenceToKey(b);
}

function chopSortKey (chop: Chop): string {
    return chop.kind + ":" + rdnSequenceToKey(chop.name);
}

function sameChop (a: Chop, b: Chop): boolean {
    return chopSortKey(a) === chopSortKey(b);
}

/**
 * `outer` excludes every entry `inner` excludes.
 * Equal chops count, so a chop dominates itself.
 */
function chopDominates (outer: Chop, inner: Chop): boolean {
    if (!isNamePrefix(outer.name, inner.name)) {
        return false;
    }
    if (outer.kind === "before") {
        return true;
    }
    if (inner.kind === "before") {
        return outer.name.length < inner.name.length;
    }
    return true;
}

function chopHits (chop: Chop, max: number | undefined): boolean {
    if (max === undefined) {
        return true;
    }
    if (chop.kind === "before") {
        return max >= chop.name.length;
    }
    return max > chop.name.length;
}

function canonicalize (chops: readonly Chop[], max: number | undefined): Chop[] {
    const kept: Chop[] = [];
    for (const chop of chops) {
        if (!chopHits(chop, max)) {
            continue;
        }
        if (kept.some((existing) => chopDominates(existing, chop))) {
            continue;
        }
        for (let i: number = kept.length - 1; i >= 0; i--) {
            const existing: Chop | undefined = kept[i];
            if (existing && !sameChop(existing, chop) && chopDominates(chop, existing)) {
                kept.splice(i, 1);
            }
        }
        kept.push(chop);
    }
    kept.sort((a, b) => {
        const ak: string = chopSortKey(a);
        const bk: string = chopSortKey(b);
        if (ak < bk) {
            return -1;
        }
        if (ak > bk) {
            return 1;
        }
        return 0;
    });
    return kept;
}

function sameChopSet (a: readonly Chop[], b: readonly Chop[]): boolean {
    if (a.length !== b.length) {
        return false;
    }
    for (let i: number = 0; i < a.length; i++) {
        const left: Chop | undefined = a[i];
        const right: Chop | undefined = b[i];
        if (!left || !right || !sameChop(left, right)) {
            return false;
        }
    }
    return true;
}

function sameStringList (a: readonly string[], b: readonly string[]): boolean {
    if (a.length !== b.length) {
        return false;
    }
    for (let i: number = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
            return false;
        }
    }
    return true;
}

function sameExtensions (a: readonly ASN1Element[], b: readonly ASN1Element[]): boolean {
    if (a.length !== b.length) {
        return false;
    }
    for (let i: number = 0; i < a.length; i++) {
        const left: ASN1Element | undefined = a[i];
        const right: ASN1Element | undefined = b[i];
        if (!left || !right || elementBytes(left) !== elementBytes(right)) {
            return false;
        }
    }
    return true;
}

function isPlainRefinement (
    r: Refinement,
): r is Exclude<Refinement, ASN1Element> {
    return typeof r === "object" && r !== null && !(r instanceof ASN1Element);
}

function isItemRef (r: Refinement): r is { item: OBJECT_IDENTIFIER } {
    return isPlainRefinement(r)
        && "item" in r
        && !("and" in r)
        && !("or" in r)
        && !("not" in r)
        && typeof r.item?.toString === "function";
}

function isAndRef (r: Refinement): r is { and: Refinement[] } {
    return isPlainRefinement(r) && "and" in r && Array.isArray(r.and);
}

function isOrRef (r: Refinement): r is { or: Refinement[] } {
    return isPlainRefinement(r) && "or" in r && Array.isArray(r.or);
}

function isNotRef (r: Refinement): r is { not: Refinement } {
    return isPlainRefinement(r) && "not" in r;
}

function isRecognizedRefinement (r: Refinement, depth: number = 0): boolean {
    if (depth > MAX_REFINEMENT_DEPTH) {
        return false;
    }
    if (isItemRef(r)) {
        return true;
    }
    if (isAndRef(r)) {
        return r.and.every((child) => isRecognizedRefinement(child, depth + 1));
    }
    if (isOrRef(r)) {
        return r.or.every((child) => isRecognizedRefinement(child, depth + 1));
    }
    if (isNotRef(r)) {
        return isRecognizedRefinement(r.not, depth + 1);
    }
    return false;
}

function collectOids (r: Refinement, into: string[], depth: number = 0): string[] | undefined {
    if (depth > MAX_REFINEMENT_DEPTH || !isRecognizedRefinement(r)) {
        return undefined;
    }
    if (isItemRef(r)) {
        const id: string = r.item.toString();
        if (!into.includes(id)) {
            into.push(id);
        }
        return into;
    }
    const children: Refinement[] = isAndRef(r)
        ? r.and
        : isOrRef(r)
            ? r.or
            : isNotRef(r)
                ? [r.not]
                : [];
    for (const child of children) {
        if (collectOids(child, into, depth + 1) === undefined) {
            return undefined;
        }
    }
    return into;
}

function maskToSet (ids: readonly string[], mask: number): Set<string> {
    const present: Set<string> = new Set();
    for (let bit: number = 0; bit < ids.length; bit++) {
        if ((mask & (1 << bit)) !== 0) {
            const id: string | undefined = ids[bit];
            if (id !== undefined) {
                present.add(id);
            }
        }
    }
    return present;
}

function evalRef (
    r: Refinement,
    present: ReadonlySet<string>,
    depth: number,
): boolean | undefined {
    if (depth > MAX_REFINEMENT_DEPTH) {
        return undefined;
    }
    if (isItemRef(r)) {
        return present.has(r.item.toString());
    }
    if (isAndRef(r)) {
        for (const child of r.and) {
            const value: boolean | undefined = evalRef(child, present, depth + 1);
            if (value === undefined) {
                return undefined;
            }
            if (!value) {
                return false;
            }
        }
        return true;
    }
    if (isOrRef(r)) {
        let any: boolean = false;
        for (const child of r.or) {
            const value: boolean | undefined = evalRef(child, present, depth + 1);
            if (value === undefined) {
                return undefined;
            }
            if (value) {
                any = true;
            }
        }
        return any;
    }
    if (isNotRef(r)) {
        const value: boolean | undefined = evalRef(r.not, present, depth + 1);
        if (value === undefined) {
            return undefined;
        }
        return !value;
    }
    return undefined;
}

function filterKey (r: Refinement | undefined): string {
    if (r === undefined) {
        return "";
    }
    if (r instanceof ASN1Element) {
        return "ext:" + elementBytes(r);
    }
    if (isItemRef(r)) {
        return "item:" + r.item.toString();
    }
    if (isAndRef(r)) {
        return "and:{" + r.and.map((child) => filterKey(child)).sort().join(",") + "}";
    }
    if (isOrRef(r)) {
        return "or:{" + r.or.map((child) => filterKey(child)).sort().join(",") + "}";
    }
    if (isNotRef(r)) {
        return "not:" + filterKey(r.not);
    }
    return "ext:unknown";
}

function isTautology (r: Refinement): boolean {
    const ids: string[] | undefined = collectOids(r, []);
    if (ids === undefined || ids.length > MAX_REFINEMENT_OIDS) {
        return false;
    }
    const total: number = 1 << ids.length;
    for (let mask: number = 0; mask < total; mask++) {
        if (evalRef(r, maskToSet(ids, mask), 0) !== true) {
            return false;
        }
    }
    return true;
}

function isUnsatisfiable (r: Refinement): boolean {
    const ids: string[] | undefined = collectOids(r, []);
    if (ids === undefined || ids.length > MAX_REFINEMENT_OIDS) {
        return false;
    }
    const total: number = 1 << ids.length;
    for (let mask: number = 0; mask < total; mask++) {
        if (evalRef(r, maskToSet(ids, mask), 0) === true) {
            return false;
        }
    }
    return true;
}

/**
 * `stronger` implies `weaker` when every object-class set accepted by
 * `stronger` is accepted by `weaker`. An absent filter accepts every set.
 */
function implies (
    stronger: Refinement | undefined,
    weaker: Refinement | undefined,
): boolean {
    if (weaker === undefined) {
        return true;
    }
    if (
        !isRecognizedRefinement(weaker)
        || (stronger !== undefined && !isRecognizedRefinement(stronger))
    ) {
        return stronger !== undefined && filterKey(stronger) === filterKey(weaker);
    }
    if (stronger === undefined) {
        return isTautology(weaker);
    }
    const ids: string[] | undefined = collectOids(stronger, []);
    const all: string[] | undefined = ids === undefined
        ? undefined
        : collectOids(weaker, ids);
    if (all === undefined || all.length > MAX_REFINEMENT_OIDS) {
        return filterKey(stronger) === filterKey(weaker);
    }
    const total: number = 1 << all.length;
    for (let mask: number = 0; mask < total; mask++) {
        const present: Set<string> = maskToSet(all, mask);
        const strong: boolean | undefined = evalRef(stronger, present, 0);
        if (strong === undefined) {
            return false;
        }
        if (!strong) {
            continue;
        }
        if (evalRef(weaker, present, 0) !== true) {
            return false;
        }
    }
    return true;
}

function filtersEquivalent (
    a: Refinement | undefined,
    b: Refinement | undefined,
): boolean {
    return implies(a, b) && implies(b, a);
}

function andFilters (
    a: Refinement | undefined,
    b: Refinement | undefined,
): Refinement | undefined {
    if (a === undefined) {
        return b;
    }
    if (b === undefined) {
        return a;
    }
    if (implies(a, b)) {
        return a;
    }
    if (implies(b, a)) {
        return b;
    }
    return { and: [a, b] };
}

function orFilters (
    a: Refinement | undefined,
    b: Refinement | undefined,
): Refinement | undefined {
    if (a === undefined || b === undefined) {
        return undefined;
    }
    if (implies(a, b)) {
        return b;
    }
    if (implies(b, a)) {
        return a;
    }
    return { or: [a, b] };
}

function parseChops (
    items: ChopSpecification_specificExclusions_Item[] | undefined,
): { chops: Chop[]; unrecognized: string[] } {
    const chops: Chop[] = [];
    const unrecognized: string[] = [];
    for (const item of items ?? []) {
        if (item instanceof ASN1Element) {
            unrecognized.push(elementBytes(item));
            continue;
        }
        if ("chopBefore" in item) {
            chops.push({ kind: "before", name: item.chopBefore.slice() });
            continue;
        }
        if ("chopAfter" in item) {
            chops.push({ kind: "after", name: item.chopAfter.slice() });
            continue;
        }
        unrecognized.push(elementBytes(item));
    }
    unrecognized.sort();
    return { chops, unrecognized };
}

function inspect (spec: SpecFields): View {
    const base: LocalName = spec.base ? spec.base.slice() : [];
    const min: number = asDistance(spec.minimum, 0);
    let max: number | undefined = spec.maximum === undefined
        ? undefined
        : asDistance(spec.maximum, 0);
    const extensions: readonly ASN1Element[] = spec._unrecognizedExtensionsList ?? [];
    const parsed: { chops: Chop[]; unrecognized: string[] } = parseChops(spec.specificExclusions);
    const filter: Refinement | undefined = spec.specificationFilter;
    const filterOpaque: boolean = filter !== undefined && !isRecognizedRefinement(filter);
    const opaque: boolean = extensions.length > 0
        || parsed.unrecognized.length > 0
        || filterOpaque;
    if (opaque) {
        return {
            base,
            min,
            max,
            chops: canonicalize(parsed.chops, max),
            unrecognizedChops: parsed.unrecognized,
            filter,
            extensions,
            opaque: true,
            empty: false,
        };
    }
    let chops: Chop[] = parsed.chops;
    let empty: boolean = max !== undefined && min > max;
    if (chops.some((chop) => chop.kind === "before" && chop.name.length === 0)) {
        empty = true;
    }
    if (chops.some((chop) => chop.kind === "after" && chop.name.length === 0)) {
        if (min >= 1) {
            empty = true;
        } else {
            max = 0;
        }
        chops = chops.filter((chop) => !(chop.kind === "after" && chop.name.length === 0));
    }
    if (!empty && filter !== undefined && isUnsatisfiable(filter)) {
        empty = true;
    }
    if (!empty) {
        chops = canonicalize(chops, max);
    }
    return {
        base,
        min,
        max,
        chops: empty ? [] : chops,
        unrecognizedChops: [],
        filter,
        extensions,
        opaque: false,
        empty,
    };
}

function chopCoversBranch (
    chops: readonly Chop[],
    relative: LocalName,
    includeSelf: boolean,
): boolean {
    for (const chop of chops) {
        if (chop.kind === "before" && isNamePrefix(chop.name, relative)) {
            return true;
        }
        if (
            chop.kind === "after"
            && isNamePrefix(chop.name, relative)
            && chop.name.length < relative.length
        ) {
            return true;
        }
        if (!includeSelf && chop.kind === "after" && sameName(chop.name, relative)) {
            return true;
        }
    }
    return false;
}

function innerCoversChop (inner: View, containerBase: LocalName, chop: Chop): boolean {
    const absolute: LocalName = containerBase.concat(chop.name);
    const includeSelf: boolean = chop.kind === "before";
    if (isNamePrefix(absolute, inner.base)) {
        if (includeSelf || absolute.length < inner.base.length) {
            return false;
        }
        return inner.max === 0;
    }
    if (!(isNamePrefix(inner.base, absolute) && absolute.length > inner.base.length)) {
        return true;
    }
    const relative: LocalName = absolute.slice(inner.base.length);
    const depth: number = relative.length;
    if (includeSelf) {
        if (inner.max !== undefined && inner.max < depth) {
            return true;
        }
        return chopCoversBranch(inner.chops, relative, inner.min <= depth);
    }
    if (inner.max !== undefined && inner.max <= depth) {
        return true;
    }
    return chopCoversBranch(inner.chops, relative, false);
}

function namingContains (container: View, inner: View): boolean {
    if (!isNamePrefix(container.base, inner.base)) {
        return false;
    }
    const shift: number = inner.base.length - container.base.length;
    const innerLo: number = shift + inner.min;
    const innerHi: number | undefined = inner.max === undefined
        ? undefined
        : shift + inner.max;
    if (innerLo < container.min) {
        return false;
    }
    if (
        container.max !== undefined
        && (innerHi === undefined || innerHi > container.max)
    ) {
        return false;
    }
    for (const chop of container.chops) {
        if (!innerCoversChop(inner, container.base, chop)) {
            return false;
        }
    }
    return true;
}

function containsName (view: View, name: LocalName): boolean {
    if (view.opaque || view.empty) {
        return false;
    }
    if (!isNamePrefix(view.base, name)) {
        return false;
    }
    const distance: number = name.length - view.base.length;
    if (distance < view.min) {
        return false;
    }
    if (view.max !== undefined && distance > view.max) {
        return false;
    }
    const suffix: LocalName = name.slice(view.base.length);
    for (const chop of view.chops) {
        if (chop.kind === "before" && isNamePrefix(chop.name, suffix)) {
            return false;
        }
        if (
            chop.kind === "after"
            && isNamePrefix(chop.name, suffix)
            && suffix.length > chop.name.length
        ) {
            return false;
        }
    }
    return true;
}

function containsView (container: View, inner: View): boolean {
    if (container.opaque || inner.opaque) {
        return false;
    }
    if (inner.empty) {
        return true;
    }
    if (container.empty) {
        return false;
    }
    if (!namingContains(container, inner)) {
        return false;
    }
    return implies(inner.filter, container.filter);
}

function commonPrefix (a: LocalName, b: LocalName): LocalName {
    const n: number = Math.min(a.length, b.length);
    let i: number = 0;
    for (; i < n; i++) {
        const left: LocalName[number] | undefined = a[i];
        const right: LocalName[number] | undefined = b[i];
        if (!left || !right || rdnSequenceToKey([left]) !== rdnSequenceToKey([right])) {
            break;
        }
    }
    return a.slice(0, i);
}

function upperBound (
    deeperMax: number | undefined,
    shallowerMax: number | undefined,
    shift: number,
): number | undefined {
    const fromShallower: number | undefined = shallowerMax === undefined
        ? undefined
        : shallowerMax - shift;
    if (deeperMax === undefined) {
        return fromShallower;
    }
    if (fromShallower === undefined) {
        return deeperMax;
    }
    return Math.min(deeperMax, fromShallower);
}

function absorbChops (
    base: LocalName,
    min: number,
    max: number | undefined,
    sources: readonly { absBase: LocalName; chops: readonly Chop[] }[],
): AbsorbedChops {
    const extra: Chop[] = [];
    let curMin: number = min;
    let curMax: number | undefined = max;
    for (const source of sources) {
        for (const chop of source.chops) {
            const absolute: LocalName = source.absBase.concat(chop.name);
            if (isNamePrefix(absolute, base)) {
                if (chop.kind === "before" || absolute.length < base.length) {
                    return { empty: true };
                }
                if (curMin >= 1) {
                    return { empty: true };
                }
                curMax = 0;
                continue;
            }
            if (isNamePrefix(base, absolute) && absolute.length > base.length) {
                const relative: LocalName = absolute.slice(base.length);
                const depth: number = relative.length;
                if (chop.kind === "before") {
                    if (curMax !== undefined && curMax < depth) {
                        continue;
                    }
                    extra.push({ kind: "before", name: relative });
                } else if (curMax === undefined || curMax > depth) {
                    extra.push({ kind: "after", name: relative });
                }
            }
        }
    }
    if (curMax !== undefined && curMin > curMax) {
        return { empty: true };
    }
    return { empty: false, min: curMin, max: curMax, extra };
}

function chopsToItems (
    chops: readonly Chop[],
): ChopSpecification_specificExclusions_Item[] | undefined {
    if (chops.length === 0) {
        return undefined;
    }
    return chops.map((chop) => (
        chop.kind === "before"
            ? { chopBefore: chop.name.slice() }
            : { chopAfter: chop.name.slice() }
    ));
}

function specificationFrom (
    base: LocalName,
    min: number,
    max: number | undefined,
    chops: readonly Chop[],
    filter: Refinement | undefined,
): SubtreeSpecification | undefined {
    let nextMin: number = min;
    let nextMax: number | undefined = max;
    let next: readonly Chop[] = chops;
    if (next.some((chop) => chop.kind === "before" && chop.name.length === 0)) {
        return undefined;
    }
    if (next.some((chop) => chop.kind === "after" && chop.name.length === 0)) {
        if (nextMin >= 1) {
            return undefined;
        }
        nextMax = 0;
        next = next.filter((chop) => !(chop.kind === "after" && chop.name.length === 0));
    }
    if (nextMax !== undefined && nextMin > nextMax) {
        return undefined;
    }
    next = canonicalize(next, nextMax);
    if (filter !== undefined && isUnsatisfiable(filter)) {
        return undefined;
    }
    return new SubtreeSpecification(
        base.length > 0 ? base.slice() : undefined,
        chopsToItems(next),
        nextMin === 0 ? undefined : nextMin,
        nextMax,
        filter,
    );
}

function copyExclusions (
    items: ChopSpecification_specificExclusions_Item[] | undefined,
): ChopSpecification_specificExclusions_Item[] | undefined {
    if (items === undefined) {
        return undefined;
    }
    return items.map((item) => {
        if (item instanceof ASN1Element) {
            return item;
        }
        if ("chopBefore" in item) {
            return { chopBefore: item.chopBefore.slice() };
        }
        if ("chopAfter" in item) {
            return { chopAfter: item.chopAfter.slice() };
        }
        return item;
    });
}

function exclusionToString (item: ChopSpecification_specificExclusions_Item): string {
    if (!(item instanceof ASN1Element) && "chopBefore" in item) {
        return "chopBefore:" + JSON.stringify(rdnSequenceToString(item.chopBefore));
    }
    if (!(item instanceof ASN1Element) && "chopAfter" in item) {
        return "chopAfter:" + JSON.stringify(rdnSequenceToString(item.chopAfter));
    }
    if (item instanceof ASN1Element) {
        return "unrecognized:" + elementBytes(item);
    }
    return "unrecognized";
}

function exclusionToJSON (item: ChopSpecification_specificExclusions_Item): SpecificExclusionJSON {
    if (!(item instanceof ASN1Element) && "chopBefore" in item) {
        return { chopBefore: rdnSequenceToJSON(item.chopBefore) };
    }
    if (!(item instanceof ASN1Element) && "chopAfter" in item) {
        return { chopAfter: rdnSequenceToJSON(item.chopAfter) };
    }
    if (item instanceof ASN1Element) {
        return { unrecognized: elementBytes(item) };
    }
    return { unrecognized: "" };
}

function refinementToString (r: Refinement): string {
    if (isItemRef(r)) {
        return "item:" + r.item.toString();
    }
    if (isAndRef(r)) {
        return "and:{ " + r.and.map((child) => refinementToString(child)).join(", ") + " }";
    }
    if (isOrRef(r)) {
        return "or:{ " + r.or.map((child) => refinementToString(child)).join(", ") + " }";
    }
    if (isNotRef(r)) {
        return "not:" + refinementToString(r.not);
    }
    if (r instanceof ASN1Element) {
        return "unrecognized:" + elementBytes(r);
    }
    return "unrecognized";
}

function refinementToJSON (r: Refinement): RefinementJSON {
    if (isItemRef(r)) {
        return { item: r.item.toString() };
    }
    if (isAndRef(r)) {
        return { and: r.and.map((child) => refinementToJSON(child)) };
    }
    if (isOrRef(r)) {
        return { or: r.or.map((child) => refinementToJSON(child)) };
    }
    if (isNotRef(r)) {
        return { not: refinementToJSON(r.not) };
    }
    if (r instanceof ASN1Element) {
        return { unrecognized: elementBytes(r) };
    }
    return { unrecognized: "" };
}

/**
 * @summary SubtreeSpecification
 * @description
 *
 * Selects a subtree of the DIT relative to one administrative point.
 * `base` defaults to `{}` (the administrative point). `minimum`
 * defaults to `0`. An absent `maximum` does not bound the depth.
 * `chopBefore` drops the named entry and its subordinates.
 * `chopAfter` keeps the named entry and drops its subordinates.
 * `specificationFilter` restricts entries by object class.
 *
 * `contains`, `isEqualTo`, `intersection`, and `union` follow the
 * VS Code `Range` API (`Range.contains`, `Range.isEqual`,
 * `Range.intersection`, `Range.union`): they derive a new value and
 * do not modify either operand. A local name plays the role of a
 * `Position`. Both specifications are relative to the same
 * administrative point.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SubtreeSpecification ::= SEQUENCE {
 *   base                 [0]  LocalName DEFAULT {},
 *   COMPONENTS OF             ChopSpecification,
 *   specificationFilter  [4]  Refinement OPTIONAL,
 *   ... }
 * ```
 */
export class SubtreeSpecification extends X500SubtreeSpecification {
    constructor (
        base?: LocalName,
        specificExclusions?: ChopSpecification_specificExclusions_Item[],
        minimum?: BaseDistance,
        maximum?: BaseDistance,
        specificationFilter?: Refinement,
        _unrecognizedExtensionsList: ASN1Element[] = [],
    ) {
        super(
            base,
            specificExclusions,
            minimum,
            maximum,
            specificationFilter,
            _unrecognizedExtensionsList,
        );
    }

    /**
     * @summary Restructures an object into a SubtreeSpecification
     * @public
     * @static
     */
    public static override _from_object (
        obj: { [K in keyof X500SubtreeSpecification]: X500SubtreeSpecification[K] },
    ): SubtreeSpecification {
        return new SubtreeSpecification(
            obj.base,
            obj.specificExclusions,
            obj.minimum,
            obj.maximum,
            obj.specificationFilter,
            obj._unrecognizedExtensionsList,
        );
    }

    /**
     * @summary Whether this specification selects the same entries as `other`.
     * @description
     *
     * Inspired by the VS Code `Range` API (`Range.isEqual`), under the
     * name `isEqualTo`. Two values are equal when they select the same
     * entries relative to the same administrative point.
     *
     * Local names are compared with `rdnSequenceToKey` from
     * `@wildboar/dn`. `base` defaults to `{}` and `minimum` defaults
     * to `0`. `specificExclusions` is a set: order does not matter,
     * and a chop already covered by a wider chop is ignored. Filters
     * match when they accept the same object-class sets. A
     * specification that selects nothing equals any other empty
     * specification.
     *
     * Unrecognized extensions, chop alternatives, or refinement
     * alternatives are compared by their BER encoding.
     *
     * @param other The other subtree specification.
     * @returns `true` when both select the same entries.
     * @public
     */
    public isEqualTo (other: SubtreeSpecification): boolean {
        if (other === this) {
            return true;
        }
        const a: View = inspect(this);
        const b: View = inspect(other);
        if (!sameExtensions(a.extensions, b.extensions)) {
            return false;
        }
        if (a.opaque || b.opaque) {
            return a.opaque
                && b.opaque
                && sameName(a.base, b.base)
                && a.min === b.min
                && a.max === b.max
                && sameChopSet(a.chops, b.chops)
                && sameStringList(a.unrecognizedChops, b.unrecognizedChops)
                && filterKey(a.filter) === filterKey(b.filter);
        }
        if (a.empty || b.empty) {
            return a.empty && b.empty;
        }
        return sameName(a.base, b.base)
            && a.min === b.min
            && a.max === b.max
            && sameChopSet(a.chops, b.chops)
            && filtersEquivalent(a.filter, b.filter);
    }

    /**
     * @summary Whether a local name or specification is inside this one.
     * @description
     *
     * Inspired by the VS Code `Range` API (`Range.contains`).
     *
     * A `LocalName` is contained when it lies under `base`, within
     * `minimum` and `maximum`, and outside every chop. A local name
     * carries no object classes, so a satisfiable `specificationFilter`
     * does not reject it. An unsatisfiable filter selects nothing, so
     * it contains no name.
     *
     * Another specification is contained when every entry it selects
     * is selected here: its base lies under this base, its distance
     * window falls inside this window, its chops cover every chop of
     * this specification, and its filter implies this filter.
     *
     * @param nameOrSpec A local name or subtree specification, relative
     * to the same administrative point.
     * @returns `true` when `nameOrSpec` is inside this specification.
     * @public
     */
    public contains (nameOrSpec: LocalName | SubtreeSpecification): boolean {
        if (nameOrSpec instanceof SubtreeSpecification) {
            if (this.isEqualTo(nameOrSpec)) {
                return true;
            }
            return containsView(inspect(this), inspect(nameOrSpec));
        }
        return containsName(inspect(this), nameOrSpec);
    }

    /**
     * @summary Entries selected by both specifications.
     * @description
     *
     * Inspired by the VS Code `Range` API (`Range.intersection`).
     * Returns one specification of the overlap, or `undefined` when
     * the overlap is empty or either value has an unrecognized
     * component.
     *
     * The bases must be equal, or one must lie under the other. The
     * result uses the deeper base. Distance bounds are the overlap of
     * the two windows. Chops from both sides are kept. Filters are
     * combined with `and`.
     *
     * @param other The other subtree specification.
     * @returns The overlap, or `undefined`.
     * @public
     */
    public intersection (other: SubtreeSpecification): SubtreeSpecification | undefined {
        const a: View = inspect(this);
        const b: View = inspect(other);
        if (a.opaque || b.opaque || a.empty || b.empty) {
            return undefined;
        }
        let deeper: View = a;
        let shallower: View = b;
        if (isNamePrefix(a.base, b.base)) {
            deeper = b;
            shallower = a;
        } else if (!isNamePrefix(b.base, a.base)) {
            return undefined;
        }
        const shift: number = deeper.base.length - shallower.base.length;
        const min: number = Math.max(deeper.min, shallower.min - shift);
        const max: number | undefined = upperBound(deeper.max, shallower.max, shift);
        if (max !== undefined && min > max) {
            return undefined;
        }
        const absorbed: AbsorbedChops = absorbChops(deeper.base, min, max, [
            { absBase: deeper.base, chops: deeper.chops },
            { absBase: shallower.base, chops: shallower.chops },
        ]);
        if (absorbed.empty) {
            return undefined;
        }
        return specificationFrom(
            deeper.base,
            absorbed.min,
            absorbed.max,
            absorbed.extra,
            andFilters(a.filter, b.filter),
        );
    }

    /**
     * @summary A specification that covers both operands.
     * @description
     *
     * Inspired by the VS Code `Range` API (`Range.union`). The result
     * is a new value. As with `Range.union`, gaps are filled: the
     * result may select entries that belong to neither operand
     * (siblings under the common prefix, distances between the two
     * windows, and entries removed by a chop that only one side
     * applied).
     *
     * When one operand already contains the other, the result copies
     * the larger one. Otherwise the base is the longest common prefix
     * and the distance window is the bounding window. Chops are kept
     * when both operands share the same base and the same chops. If
     * either filter is absent, the cover has no filter; otherwise the
     * filters are combined with `or`.
     *
     * @param other The other subtree specification.
     * @returns A covering specification.
     * @throws {TypeError} Either value has an unrecognized component
     * and the two values are not equal.
     * @public
     */
    public union (other: SubtreeSpecification): SubtreeSpecification {
        const a: View = inspect(this);
        const b: View = inspect(other);
        if (a.opaque || b.opaque) {
            if (this.isEqualTo(other)) {
                return this.copy();
            }
            throw new TypeError(
                "Cannot union subtree specifications that contain unrecognized components",
            );
        }
        if (this.contains(other)) {
            return this.copy();
        }
        if (other.contains(this)) {
            return other.copy();
        }
        const base: LocalName = commonPrefix(a.base, b.base);
        const absMin: number = Math.min(a.base.length + a.min, b.base.length + b.min);
        const absMax: number | undefined = (a.max === undefined || b.max === undefined)
            ? undefined
            : Math.max(a.base.length + a.max, b.base.length + b.max);
        const min: number = absMin - base.length;
        const max: number | undefined = absMax === undefined
            ? undefined
            : absMax - base.length;
        const keepChops: boolean = sameName(a.base, b.base) && sameChopSet(a.chops, b.chops);
        const cover: SubtreeSpecification | undefined = specificationFrom(
            base,
            min,
            max,
            keepChops ? a.chops : [],
            orFilters(a.filter, b.filter),
        );
        if (cover) {
            return cover;
        }
        return new SubtreeSpecification(
            base.length > 0 ? base.slice() : undefined,
            undefined,
            min === 0 ? undefined : min,
            max,
        );
    }

    /**
     * @summary LDAP subtree-specification string.
     * @description
     *
     * Prints this value in the subtree specification syntax of
     * [IETF RFC 3672](https://www.rfc-editor.org/rfc/rfc3672).
     * Distinguished names are printed with `rdnSequenceToString` from
     * `@wildboar/dn`, which keeps local-name order: the first RDN is
     * the first element of the `LocalName`, rather than the RFC 4514
     * reversal. Default `base` (`{}`) and `minimum` (`0`) are omitted.
     * Unrecognized extensions are omitted.
     *
     * @returns A string such as `{ base "c=US", minimum 1 }`.
     * @public
     */
    public override toString (): string {
        const parts: string[] = [];
        const base: LocalName = this.base ?? [];
        if (base.length > 0) {
            parts.push("base " + JSON.stringify(rdnSequenceToString(base)));
        }
        const exclusions: ChopSpecification_specificExclusions_Item[] | undefined = this.specificExclusions;
        if (exclusions && exclusions.length > 0) {
            const chops: string = exclusions.map((item) => exclusionToString(item)).join(", ");
            parts.push("specificExclusions { " + chops + " }");
        }
        if (this.minimum !== undefined && asDistance(this.minimum, 0) !== 0) {
            parts.push("minimum " + distanceText(this.minimum));
        }
        if (this.maximum !== undefined) {
            parts.push("maximum " + distanceText(this.maximum));
        }
        if (this.specificationFilter) {
            parts.push("specificationFilter " + refinementToString(this.specificationFilter));
        }
        if (parts.length === 0) {
            return "{ }";
        }
        return "{ " + parts.join(", ") + " }";
    }

    /**
     * @summary JSON for this subtree specification.
     * @description
     *
     * Local names are encoded with `rdnSequenceToJSON` from
     * `@wildboar/dn`, so each distinguished value keeps its BER hex
     * form. Object-class identifiers in `specificationFilter` are
     * dotted numeric OIDs. Default `base` and `minimum` are omitted.
     * Unrecognized extensions are omitted.
     *
     * @returns The components that are present.
     * @public
     */
    public toJSON (): SubtreeSpecificationJSON {
        const json: SubtreeSpecificationJSON = {};
        if (this.base && this.base.length > 0) {
            json.base = rdnSequenceToJSON(this.base);
        }
        if (this.specificExclusions && this.specificExclusions.length > 0) {
            json.specificExclusions = this.specificExclusions.map((item) => exclusionToJSON(item));
        }
        if (this.minimum !== undefined && asDistance(this.minimum, 0) !== 0) {
            json.minimum = asDistance(this.minimum, 0);
        }
        if (this.maximum !== undefined) {
            json.maximum = asDistance(this.maximum, 0);
        }
        if (this.specificationFilter) {
            json.specificationFilter = refinementToJSON(this.specificationFilter);
        }
        return json;
    }

    private copy (): SubtreeSpecification {
        return new SubtreeSpecification(
            this.base?.slice(),
            copyExclusions(this.specificExclusions),
            this.minimum,
            this.maximum,
            this.specificationFilter,
            this._unrecognizedExtensionsList?.slice() ?? [],
        );
    }
}

/**
 * @summary Decodes an ASN.1 element into a SubtreeSpecification
 * @param el The element being decoded.
 * @returns The decoded subtree specification.
 */
export function _decode_SubtreeSpecification (el: ASN1Element): SubtreeSpecification {
    const decoded: X500SubtreeSpecification = decodeX500SubtreeSpecification(el);
    return new SubtreeSpecification(
        decoded.base,
        decoded.specificExclusions,
        decoded.minimum,
        decoded.maximum,
        decoded.specificationFilter,
        decoded._unrecognizedExtensionsList,
    );
}

/**
 * @summary Encodes a SubtreeSpecification into an ASN.1 element.
 * @param value The subtree specification being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns The encoded element.
 */
export function _encode_SubtreeSpecification (
    value: X500SubtreeSpecification,
    elGetter: $.ASN1Encoder<X500SubtreeSpecification>,
): ASN1Element {
    return encodeX500SubtreeSpecification(value, elGetter);
}
