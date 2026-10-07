import type { Name } from "../Name.ta.mjs";
import type { RDNSequenceOfLength } from "../brands.mjs";

/**
 * @summary Test whether a directory name is a root DSE name.
 * @description
 *
 * A root DSE name is a name with no RDNs.
 *
 * @param name The name to test.
 * @returns Whether the name is a root DSE name.
 * @function
 */
export function isRootDseName(name: Name): name is Name & ({ rdnSequence: RDNSequenceOfLength<0> }) {
    if (!("rdnSequence" in name)) {
        return false;
    }
    return name.rdnSequence.length === 0;
}

export default isRootDseName;
