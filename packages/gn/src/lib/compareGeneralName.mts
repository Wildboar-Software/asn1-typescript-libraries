import {
    type ASN1Element,
    type External,
    type OBJECT_IDENTIFIER,
} from "@wildboar/asn1";
import { DER } from "@wildboar/asn1/functional";
import {
    compareBytes,
    compareName,
    type GetDistinguishedValueMatcher,
} from "@wildboar/dn";
import { _encode_ORAddress } from "@wildboar/or-address";
import { compareElements } from "./compareElements.mjs";
import type { GeneralName } from "./GeneralName.ta.mjs";
import { dnsEqual, rfc822Equal, uriEqual } from "./stringMatch.mjs";

/**
 * @summary Compare two `GeneralName`s, one to one
 * @description
 *
 * Returns `false` as soon as the two values use different CHOICE alternatives.
 * `rfc822Name`, `dNSName`, and `uniformResourceIdentifier` use `toLowerCase`
 * and `slice`. A benchmark found that faster than walking the characters,
 * because these strings are short (see `stringMatch`). `iPAddress` is a byte
 * loop. `directoryName` uses `compareName`.
 *
 * Where this differs from a straight byte or character compare, it follows
 * RFC 5280: the domain of an email address is case-insensitive and the
 * local-part is not; a DNS name is case-insensitive; a URI's scheme and host
 * are case-insensitive and the rest is exact; an EDI party name uses
 * case-ignore directory-string matching.
 *
 * `x400Address` is the exception. `@wildboar/or-address` has no field-by-field
 * equality and does not keep the original encoding, so both addresses are
 * DER-encoded and then compared. X.400 addresses in certificates are rare
 * enough that this is cheaper than reimplementing O/R address equality here.
 *
 * With no `getMatcher`, the result agrees with
 * `generalNameToKey(a) === generalNameToKey(b)`. `getMatcher` is only used
 * for distinguished values inside a `directoryName`, and supplying one can
 * make two names compare equal even when their keys differ.
 *
 * @param a One general name
 * @param b The other general name
 * @param getMatcher Optional equality matcher for attribute types inside a directory name
 * @returns `true` if the names match
 * @function
 */
export function compareGeneralName(
    a: GeneralName,
    b: GeneralName,
    getMatcher?: GetDistinguishedValueMatcher,
): boolean {
    if ("otherName" in a) {
        return ("otherName" in b) && otherNameEqual(a.otherName, b.otherName);
    }
    if ("rfc822Name" in a) {
        return ("rfc822Name" in b) && rfc822Equal(a.rfc822Name, b.rfc822Name);
    }
    if ("dNSName" in a) {
        return ("dNSName" in b) && dnsEqual(a.dNSName, b.dNSName);
    }
    if ("x400Address" in a) {
        if (!("x400Address" in b)) {
            return false;
        }
        // Encodes both values. There is no allocation-free equality for ORAddress.
        const left: ASN1Element = _encode_ORAddress(a.x400Address, DER);
        const right: ASN1Element = _encode_ORAddress(b.x400Address, DER);
        return compareElements(left, right);
    }
    if ("directoryName" in a) {
        return ("directoryName" in b)
            && compareName(a.directoryName, b.directoryName, getMatcher);
    }
    if ("ediPartyName" in a) {
        return ("ediPartyName" in b) && a.ediPartyName.isEqualTo(b.ediPartyName);
    }
    if ("uniformResourceIdentifier" in a) {
        return ("uniformResourceIdentifier" in b)
            && uriEqual(a.uniformResourceIdentifier, b.uniformResourceIdentifier);
    }
    if ("iPAddress" in a) {
        return ("iPAddress" in b) && compareBytes(a.iPAddress, b.iPAddress) === 0;
    }
    if ("registeredID" in a) {
        return ("registeredID" in b) && a.registeredID.isEqualTo(b.registeredID);
    }
    if ("otherName" in b || "rfc822Name" in b || "dNSName" in b
        || "x400Address" in b || "directoryName" in b || "ediPartyName" in b
        || "uniformResourceIdentifier" in b || "iPAddress" in b || "registeredID" in b) {
        return false;
    }
    return compareElements(a as ASN1Element, b as ASN1Element);
}

function otherNameEqual(a: External, b: External): boolean {
    const aRef: OBJECT_IDENTIFIER | undefined = a.directReference;
    const bRef: OBJECT_IDENTIFIER | undefined = b.directReference;
    if (Boolean(aRef) !== Boolean(bRef)) {
        return false;
    }
    if (aRef && bRef && !aRef.isEqualTo(bRef)) {
        return false;
    }
    const aIndirect = a.indirectReference ? a.indirectReference : undefined;
    const bIndirect = b.indirectReference ? b.indirectReference : undefined;
    if (aIndirect !== bIndirect) {
        return false;
    }
    if ((a.dataValueDescriptor ?? "") !== (b.dataValueDescriptor ?? "")) {
        return false;
    }
    return encodingEqual(a.encoding, b.encoding);
}

function asUint8Array(value: Uint8Array | Uint8ClampedArray): Uint8Array {
    return value instanceof Uint8ClampedArray ? Uint8Array.from(value) : value;
}

function encodingEqual(
    a: External["encoding"],
    b: External["encoding"],
): boolean {
    if (a instanceof Uint8ClampedArray || b instanceof Uint8ClampedArray) {
        return a instanceof Uint8ClampedArray
            && b instanceof Uint8ClampedArray
            && compareBytes(asUint8Array(a), asUint8Array(b)) === 0;
    }
    if (a instanceof Uint8Array || b instanceof Uint8Array) {
        return a instanceof Uint8Array
            && b instanceof Uint8Array
            && compareBytes(a, b) === 0;
    }
    return compareElements(a, b);
}

export default compareGeneralName;
