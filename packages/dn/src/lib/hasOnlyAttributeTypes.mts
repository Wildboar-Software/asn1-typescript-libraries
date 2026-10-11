import type { RelativeDistinguishedName } from "./RelativeDistinguishedName.ta.mjs";
import type { RDNSequence } from "./RDNSequence.ta.mjs";

/**
 * @summary Test whether every attribute type in a name is in a given set.
 * @description
 *
 * Only the attribute _types_ are examined, by the dotted-decimal notation of
 * their object identifiers. An empty name has no attribute types that are
 * outside of `allowed`, so it passes.
 *
 * @param name A single RDN, or an RDN sequence (a distinguished name). The
 *  order of the RDNs in an RDN sequence is irrelevant.
 * @param allowed The permitted object identifiers, in dotted-decimal notation.
 * @returns Whether every attribute type in `name` is in `allowed`.
 * @function
 */
export
function hasOnlyAttributeTypes (
    name: RelativeDistinguishedName | RDNSequence,
    allowed: ReadonlySet<string>,
): boolean {
    for (const element of name) {
        // An RDN is an array of ATAVs: an RDNSequence is an array of RDNs.
        const atavs = Array.isArray(element) ? element : [ element ];
        for (const atav of atavs) {
            if (!allowed.has(atav.type_.toString())) {
                return false;
            }
        }
    }
    return true;
}

export default hasOnlyAttributeTypes;
