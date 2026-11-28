import type { ASN1Element } from "@wildboar/asn1";
import {
    createEqualityMatcher,
    MATCH_FLAG_CONSTANT_TIME,
    MATCH_FLAG_VALUE_NORMALIZED,
    type Matcher,
} from "@wildboar/x500";
import { ctStringsEqual } from "../constantTime.mjs";
import {
    type AddressCapabilities,
    type Capability,
    _decode_AddressCapabilities,
} from "@wildboar/x400/MHSDirectoryObjectsAndAttributes";
import { capabilityToCanonicalKey } from "./capabilityMatch.mjs";
import {
    compareORAddressInfo,
    normalizeMSString,
    normalizeORAddressInfo,
    type ORAddressInfo,
    orAddressToInfo,
} from "./orAddressUtilities.mjs";

interface PreparedAddressCapabilities {
    description: string | undefined;
    address: ORAddressInfo;
    rawCapabilities?: readonly Capability[];
    readonly capabilities: Set<string>;
}

function decodeRawAddressCapabilities (
    ac: AddressCapabilities,
    normalize: boolean,
): PreparedAddressCapabilities | null {
    if (ac.address.isEmptyOrAddress()) {
        return null;
    }
    const address = orAddressToInfo(ac.address, normalize);
    if (!address) {
        return null;
    }
    const description = ac.description !== undefined
        ? (normalize ? normalizeMSString(ac.description, true) : ac.description)
        : undefined;
    const capabilities = new Set<string>();
    for (const cap of ac.capabilities) {
        capabilities.add(capabilityToCanonicalKey(cap, normalize));
    }
    return {
        description,
        address,
        rawCapabilities: normalize ? undefined : ac.capabilities,
        capabilities,
    };
}

function decodeAddressCapabilitiesAssertion (el: ASN1Element): PreparedAddressCapabilities {
    const decoded = _decode_AddressCapabilities(el);
    const prepared = decodeRawAddressCapabilities(decoded, false);
    if (!prepared) {
        throw new Error("addressCapabilitiesMatch: malformed or empty ORAddress in assertion");
    }
    return prepared;
}

function normalizeAddressCapabilitiesAssertion (
    raw: PreparedAddressCapabilities,
): PreparedAddressCapabilities {
    const address = normalizeORAddressInfo(raw.address);
    if (!address) {
        throw new Error("addressCapabilitiesMatch: malformed ORAddress in assertion");
    }
    raw.address = address;
    if (raw.description !== undefined) {
        raw.description = normalizeMSString(raw.description, true);
    }
    if (raw.rawCapabilities) {
        raw.capabilities.clear();
        for (const cap of raw.rawCapabilities) {
            raw.capabilities.add(capabilityToCanonicalKey(cap, true));
        }
        raw.rawCapabilities = undefined;
    }
    return raw;
}

function matchAddressCapabilitiesFast (
    assertion: PreparedAddressCapabilities,
    v: PreparedAddressCapabilities,
    flags: number,
): boolean {
    if (assertion.capabilities.size !== v.capabilities.size) {
        return false;
    }
    if (assertion.description !== v.description) {
        return false;
    }
    if (!compareORAddressInfo(assertion.address, v.address, "exact", flags)) {
        return false;
    }
    for (const key of assertion.capabilities) {
        if (!v.capabilities.has(key)) {
            return false;
        }
    }
    return true;
}

function matchAddressCapabilitiesConstantTime (
    assertion: PreparedAddressCapabilities,
    v: PreparedAddressCapabilities,
    flags: number,
): boolean {
    const descPresenceMatches =
        (assertion.description === undefined) === (v.description === undefined);
    const descContentMatches = assertion.description !== undefined
        ? ctStringsEqual(assertion.description, v.description ?? "")
        : true;
    const addrMatches = compareORAddressInfo(assertion.address, v.address, "exact", flags);
    const sizesMatch = assertion.capabilities.size === v.capabilities.size;
    let allCapsMatch = true;
    for (const aKey of assertion.capabilities) {
        if (v.capabilities.size === 0) {
            ctStringsEqual(aKey, "");
            allCapsMatch = false;
            continue;
        }
        let found = false;
        for (const vKey of v.capabilities) {
            if (ctStringsEqual(aKey, vKey)) {
                found = true;
            }
        }
        if (!found) {
            allCapsMatch = false;
        }
    }
    return descPresenceMatches && descContentMatches && addrMatches && sizesMatch && allCapsMatch;
}

/**
 * ITU-T Rec. X.402 (06/1999), Annex A.3.4 `addressCapabilitiesMatch`.
 */
export
const addressCapabilitiesMatch: Matcher = createEqualityMatcher(
    decodeAddressCapabilitiesAssertion,
    (assertion: PreparedAddressCapabilities, value: ASN1Element, _getEqualityMatcher, flags = 0): boolean | undefined => {
        const vDecoded = _decode_AddressCapabilities(value);
        const v = decodeRawAddressCapabilities(
            vDecoded,
            !(flags & MATCH_FLAG_VALUE_NORMALIZED),
        );
        if (!v) {
            return undefined;
        }
        return (flags & MATCH_FLAG_CONSTANT_TIME)
            ? matchAddressCapabilitiesConstantTime(assertion, v, flags)
            : matchAddressCapabilitiesFast(assertion, v, flags);
    },
    undefined,
    false,
    normalizeAddressCapabilitiesAssertion,
);

export default addressCapabilitiesMatch;
