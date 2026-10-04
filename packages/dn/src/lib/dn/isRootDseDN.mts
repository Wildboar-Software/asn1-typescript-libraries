import type { DistinguishedName as DN } from "../DistinguishedName.ta.mjs";
import { RDNSequenceOfLength } from "../brands.mjs";

/**
 * @summary Test whether a DN is a root DSE DN.
 * @description
 *
 * A root DSE DN is a DN with no RDNs.
 *
 * @param dn The DN to test.
 * @returns Whether the DN is a root DSE DN.
 * @function
 */
export function isRootDseDN(dn: DN): dn is RDNSequenceOfLength<0> {
    return dn.length === 0;
}

export default isRootDseDN;
