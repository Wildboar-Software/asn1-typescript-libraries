import {
    ASN1TagClass,
    ASN1UniversalType,
    type ASN1Element,
    ObjectIdentifier,
} from "@wildboar/asn1";
import type { RDNSequenceDescending } from "../brands.mjs";
import { oidC1OID, oidC2OID, oidCOID } from "../attributeTypes.mjs";

/**
 * Get the arc from the value of an `oidC1`, `oidC2`, or `oidC` attribute.
 *
 * @returns The arc, or `null` if the value is not a universal `INTEGER` or
 *  is negative.
 * @internal
 */
function getArc (value: ASN1Element): number | bigint | null {
    if (
        value.tagClass !== ASN1TagClass.universal
        || value.tagNumber !== ASN1UniversalType.integer
    ) {
        return null;
    }
    const arc: number | bigint = value.integer;
    return (arc < 0) ? null : arc;
}

/**
 * @summary Convert an `RDNSequence` of `oidC1`, `oidC2`, and `oidC` values to
 * an object identifier.
 * @description
 *
 * The representation of an object identifier as a distinguished name, which
 * this function reverses, is that specified in older versions of
 * [ITU-T Recommendation X.660](https://www.itu.int/rec/T-REC-X.660).
 *
 * The first RDN of `rdns` is that of the highest entry, which is immediately
 * subordinate to the root. It may have up to three attribute types and
 * values, in any order, and no more than one of each:
 *
 * - `oidC1`, which is the first arc of the object identifier;
 * - `oidC2`, which is the second arc, and which may not be present without
 *   `oidC1`; and
 * - `oidC`, which is the next arc after those of `oidC1` and `oidC2`, if they
 *   are present.
 *
 * If the first RDN has only `oidC1`, the second RDN may have only `oidC2`.
 *
 * Every other RDN has exactly one attribute type and value, and its type is
 * `oidC`. The `oidC` arcs are appended to the object identifier from the
 * highest RDN down to the last one. For example, `{oidC1=2, oidC2=5, oidC=4},
 * {oidC=3}`, `{oidC1=2}, {oidC2=5}, {oidC=4}, {oidC=3}`, and `{oidC=2},
 * {oidC=5}, {oidC=4}, {oidC=3}` all convert to `2.5.4.3`.
 *
 * The attribute values of all three types have an `INTEGER` syntax, and
 * the arcs may be larger than `Number.MAX_SAFE_INTEGER`.
 *
 * This returns `null` if:
 *
 * - `rdns` is empty;
 * - the first RDN is empty, has an attribute type other than `oidC1`,
 *   `oidC2`, or `oidC`, or has more than one of any of them;
 * - `oidC2` is present without `oidC1` in the first RDN;
 * - any other RDN does not have exactly one attribute type and value, whose
 *   type is `oidC` (or `oidC2` for the second RDN, if the first RDN has only
 *   `oidC1`);
 * - any value is not a universal `INTEGER`, or is negative; or
 * - the arcs do not make a valid object identifier: there are fewer than two,
 *   the first is greater than 2, or the second is greater than 39 when the
 *   first is less than 2.
 *
 * @param rdns The RDNs, in DIT descending order, as in X.500. Use
 *  `toDITDescending()` or `asDITDescending()` if the order is otherwise.
 * @returns The object identifier, or `null` if `rdns` does not meet the
 *  constraints above.
 * @throws {ASN1Error} If the content of an `INTEGER` value cannot be decoded.
 * @function
 */
export
function dnToOID (rdns: RDNSequenceDescending): ObjectIdentifier | null {
    if (rdns.length === 0) {
        return null;
    }
    const highest = rdns[0];
    if (highest.length === 0 || highest.length > 3) {
        return null;
    }
    let oidC1: number | bigint | null = null;
    let oidC2: number | bigint | null = null;
    let oidC: number | bigint | null = null;
    for (const atav of highest) {
        const arc = getArc(atav.value);
        if (arc === null) {
            return null;
        }
        switch (atav.type_.toString()) {
            case oidC1OID: {
                if (oidC1 !== null) {
                    return null;
                }
                oidC1 = arc;
                break;
            }
            case oidC2OID: {
                if (oidC2 !== null) {
                    return null;
                }
                oidC2 = arc;
                break;
            }
            case oidCOID: {
                if (oidC !== null) {
                    return null;
                }
                oidC = arc;
                break;
            }
            default: return null;
        }
    }
    if (oidC2 !== null && oidC1 === null) {
        return null;
    }
    const arcs: (number | bigint)[] = [];
    if (oidC1 !== null) {
        arcs.push(oidC1);
    }
    if (oidC2 !== null) {
        arcs.push(oidC2);
    }
    if (oidC !== null) {
        arcs.push(oidC);
    }
    let start: number = 1;
    // `oidC2` may be the lone ATAV of the second RDN, but only if the first RDN
    // is a lone `oidC1`. Otherwise, the arcs would be out of order.
    if (
        rdns.length > 1
        && highest.length === 1
        && oidC1 !== null
        && rdns[1].length === 1
        && rdns[1][0].type_.toString() === oidC2OID
    ) {
        const arc = getArc(rdns[1][0].value);
        if (arc === null) {
            return null;
        }
        arcs.push(arc);
        start = 2;
    }
    for (let i = start; i < rdns.length; i++) {
        const rdn = rdns[i];
        if (rdn.length !== 1) {
            return null;
        }
        const atav = rdn[0];
        if (atav.type_.toString() !== oidCOID) {
            return null;
        }
        const arc = getArc(atav.value);
        if (arc === null) {
            return null;
        }
        arcs.push(arc);
    }
    if (arcs.length < 2 || arcs[0] > 2 || (arcs[0] < 2 && arcs[1] > 39)) {
        return null;
    }
    // The `INTEGER` decoder returns a `bigint` only if a `number` cannot be exact.
    return arcs.some((arc) => typeof arc === "bigint")
        ? ObjectIdentifier.fromStringWithBigArcs(arcs.join("."))
        : ObjectIdentifier.fromParts(arcs as number[]);
}

export default dnToOID;
