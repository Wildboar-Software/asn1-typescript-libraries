import type { ASN1Element } from "@wildboar/asn1";
import { createEqualityMatcher, type Matcher } from "@wildboar/x500";
import {
    type AddressCapabilities,
    _decode_AddressCapabilities,
} from "@wildboar/x400/MHSDirectoryObjectsAndAttributes";
import { capabilityToCanonicalKey } from "./capabilityMatch.js";
import {
    compareORAddressInfo,
    normalizeMSString,
    type ORAddressInfo,
    orAddressToInfo,
} from "./orAddressUtilities.js";

interface PreparedAddressCapabilities {
    readonly description: string | undefined;
    readonly address: ORAddressInfo;
    readonly capabilities: ReadonlySet<string>;
}

function prepareAddressCapabilities (ac: AddressCapabilities): PreparedAddressCapabilities | null {
    if (ac.address.isEmptyOrAddress()) {
        return null;
    }
    const address = orAddressToInfo(ac.address);
    if (!address) {
        return null;
    }
    const description = ac.description !== undefined
        ? normalizeMSString(ac.description, true)
        : undefined;
    const capabilities = new Set<string>();
    for (const cap of ac.capabilities) {
        capabilities.add(capabilityToCanonicalKey(cap));
    }
    return {
        description,
        address,
        capabilities,
    };
}

function decodeAddressCapabilitiesAssertion (el: ASN1Element): PreparedAddressCapabilities {
    const decoded = _decode_AddressCapabilities(el);
    const prepared = prepareAddressCapabilities(decoded);
    if (!prepared) {
        throw new Error("addressCapabilitiesMatch: malformed or empty ORAddress in assertion");
    }
    return prepared;
}

/**
 * ITU-T Rec. X.402 (06/1999), Annex A.3.4 `addressCapabilitiesMatch`.
 *
 * Returns `true` iff:
 * a) the `description` elements contain equivalent strings (or both are absent);
 * b) the `address` elements match per `oRAddressMatch`; and
 * c) the `capabilities` `SET OF Capability` elements contain equivalent components.
 */
export
const addressCapabilitiesMatch: Matcher = createEqualityMatcher(
    decodeAddressCapabilitiesAssertion,
    (assertion: PreparedAddressCapabilities, value: ASN1Element): boolean | undefined => {
        const vDecoded = _decode_AddressCapabilities(value);
        const v = prepareAddressCapabilities(vDecoded);
        if (!v) {
            return undefined;
        }
        if (assertion.capabilities.size !== v.capabilities.size) {
            return false;
        }
        if (assertion.description !== v.description) {
            return false;
        }
        if (!compareORAddressInfo(assertion.address, v.address, "exact")) {
            return false;
        }
        for (const key of assertion.capabilities) {
            if (!v.capabilities.has(key)) {
                return false;
            }
        }
        return true;
    },
);

export default addressCapabilitiesMatch;
