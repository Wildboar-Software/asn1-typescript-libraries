import type { ASN1Element, External } from "@wildboar/asn1";
import { DER } from "@wildboar/asn1/functional";
import { nameToKey } from "@wildboar/dn";
import { _encode_ORAddress } from "@wildboar/or-address";
import { elementKey } from "./compareElements.mjs";
import type { GeneralName } from "./GeneralName.ta.mjs";
import { bytesToHex } from "./hex.mjs";
import { dnsKey, rfc822Key, uriKey } from "./stringMatch.mjs";

/**
 * @summary A key for comparing many `GeneralName`s
 * @description
 *
 * For a `Map` or a `Set`. Building the string allocates, and that is
 * expected: this is the many-to-many path. The key is the CHOICE alternative,
 * a colon, and a value normalized the same way {@link compareGeneralName}
 * compares that alternative, so two names compare equal (with no equality
 * matcher) exactly when their keys are equal.
 *
 * `rfc822Name` keeps the local-part as written and lowercases only `A`-`Z` in
 * the domain. `dNSName` lowercases `A`-`Z`. A URI lowercases `A`-`Z` in the
 * scheme and the host. `directoryName` uses `nameToKey`. `ediPartyName` uses
 * `EDIPartyName.toKey()`. `x400Address` is `#` and the hexadecimal DER
 * encoding, which is the one comparison that has to encode.
 *
 * @param gn The general name
 * @returns A string that can be used as a map key
 * @function
 */
export function generalNameToKey(gn: GeneralName): string {
    if ("otherName" in gn) {
        return otherNameKey(gn.otherName);
    }
    if ("rfc822Name" in gn) {
        return `rfc822Name:${rfc822Key(gn.rfc822Name)}`;
    }
    if ("dNSName" in gn) {
        return `dNSName:${dnsKey(gn.dNSName)}`;
    }
    if ("x400Address" in gn) {
        return `x400Address:#${bytesToHex(_encode_ORAddress(gn.x400Address, DER).toBytes())}`;
    }
    if ("directoryName" in gn) {
        return `directoryName:${nameToKey(gn.directoryName)}`;
    }
    if ("ediPartyName" in gn) {
        return `ediPartyName:${gn.ediPartyName.toKey()}`;
    }
    if ("uniformResourceIdentifier" in gn) {
        return `uniformResourceIdentifier:${uriKey(gn.uniformResourceIdentifier)}`;
    }
    if ("iPAddress" in gn) {
        return `iPAddress:${bytesToHex(gn.iPAddress)}`;
    }
    if ("registeredID" in gn) {
        return `registeredID:${gn.registeredID.toString()}`;
    }
    return `_unrecognized:${elementKey(gn as ASN1Element)}`;
}

function otherNameKey(otherName: External): string {
    const typeId: string = otherName.directReference?.toString() ?? "";
    const indirect: string = otherName.indirectReference
        ? String(otherName.indirectReference)
        : "";
    const descriptor: string = otherName.dataValueDescriptor ?? "";
    const encoding: string = encodingKey(otherName.encoding);
    if (indirect.length === 0 && descriptor.length === 0) {
        return `otherName:${typeId}#${encoding}`;
    }
    return `otherName:${typeId};${indirect};${JSON.stringify(descriptor)}#${encoding}`;
}

function encodingKey(encoding: External["encoding"]): string {
    if (encoding instanceof Uint8ClampedArray) {
        return `bits:${bytesToHex(encoding)}`;
    }
    if (encoding instanceof Uint8Array) {
        return `octets:${bytesToHex(encoding)}`;
    }
    return elementKey(encoding);
}

export default generalNameToKey;
