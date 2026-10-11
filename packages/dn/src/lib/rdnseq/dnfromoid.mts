import { ObjectIdentifier } from "@wildboar/asn1";
import { BER, _encodeInteger } from "@wildboar/asn1/functional";
import { AttributeTypeAndValue } from "../AttributeTypeAndValue.ta.mjs";
import type { RDNSequence } from "../RDNSequence.ta.mjs";
import type { RelativeDistinguishedName } from "../RelativeDistinguishedName.ta.mjs";
import type { RDNSequenceDescending } from "../brands.mjs";
import { oidC1OID, oidC2OID, oidCOID } from "../attributeTypes.mjs";
import { asDITDescending } from "./order.mjs";

const oidC1Type: ObjectIdentifier = ObjectIdentifier.fromString(oidC1OID);
const oidC2Type: ObjectIdentifier = ObjectIdentifier.fromString(oidC2OID);
const oidCType: ObjectIdentifier = ObjectIdentifier.fromString(oidCOID);

function atav (type_: ObjectIdentifier, arc: number | bigint): AttributeTypeAndValue {
    return new AttributeTypeAndValue(type_, _encodeInteger(arc, BER));
}

/**
 * How {@link dnFromOID} represents the first two arcs of an object identifier:
 *
 * - `"none"`: as `oidC` values, like every other arc;
 * - `"together"`: as `oidC1` and `oidC2` in the first RDN; or
 * - `"separate"`: as `oidC1` in the first RDN and `oidC2` in the second.
 */
export type OidC1AndOidC2Mode = "none" | "together" | "separate";

/**
 * @summary Convert an object identifier to an `RDNSequence` of `oidC1`,
 * `oidC2`, and `oidC` values.
 * @description
 *
 * The representation of an object identifier as a distinguished name is that
 * specified in older versions of
 * [ITU-T Recommendation X.660](https://www.itu.int/rec/T-REC-X.660).
 *
 * This is the reverse of {@link dnToOID}. The returned RDNs are in DIT
 * descending order: the first RDN is that of the highest entry, which is
 * immediately subordinate to the root.
 *
 * If `useOidC1AndOidC2` is `"none"`, there is one RDN per arc, each having only
 * an `oidC` attribute. For example, `2.5.4.3` becomes `{oidC=2}, {oidC=5},
 * {oidC=4}, {oidC=3}`.
 *
 * If `useOidC1AndOidC2` is `"together"`, the first RDN has an `oidC1` attribute for
 * the first arc, an `oidC2` attribute for the second arc, and an `oidC`
 * attribute for the third arc, and each remaining arc has an RDN having only
 * an `oidC` attribute. For example, `2.5.4.3` becomes `{oidC1=2, oidC2=5,
 * oidC=4}, {oidC=3}`, and `2.5` becomes `{oidC1=2, oidC2=5}`.
 *
 * If `useOidC1AndOidC2` is `"separate"`, the first RDN has only an `oidC1`
 * attribute for the first arc, the second RDN has only an `oidC2` attribute for
 * the second arc, and each remaining arc has an RDN having only an `oidC`
 * attribute. For example, `2.5.4.3` becomes `{oidC1=2}, {oidC2=5}, {oidC=4},
 * {oidC=3}`, and `2.5` becomes `{oidC1=2}, {oidC2=5}`.
 *
 * @param oid The object identifier to convert.
 * @param useOidC1AndOidC2 Whether and how to use `oidC1` and `oidC2` for the
 *  first two arcs: `"none"` for neither, `"together"` for both in the first
 *  RDN, or `"separate"` for `oidC1` in the first RDN and `oidC2` in the second.
 *  The default is `"none"`.
 * @returns The RDNs, in DIT descending order.
 * @function
 */
export
function dnFromOID (
    oid: ObjectIdentifier,
    useOidC1AndOidC2: OidC1AndOidC2Mode = "none",
): RDNSequenceDescending {
    const arcs: (number | bigint)[] = oid.nodesBigAndSmall;
    const rdns: RDNSequence = [];
    let next: number = 0;
    if (useOidC1AndOidC2 === "separate") {
        rdns.push([ atav(oidC1Type, arcs[0]) ]);
        rdns.push([ atav(oidC2Type, arcs[1]) ]);
        next = 2;
    } else if (useOidC1AndOidC2 === "together") {
        const highest: RelativeDistinguishedName = [
            atav(oidC1Type, arcs[0]),
            atav(oidC2Type, arcs[1]),
        ];
        if (arcs.length > 2) {
            highest.push(atav(oidCType, arcs[2]));
        }
        rdns.push(highest);
        next = 3;
    }
    for (let i = next; i < arcs.length; i++) {
        rdns.push([ atav(oidCType, arcs[i]) ]);
    }
    return asDITDescending(rdns);
}

export default dnFromOID;
