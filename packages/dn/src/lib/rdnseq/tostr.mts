import relativeDistinguishedNameToString from "../rdn/tostr.mjs";
import type { RDNSequence } from "../RDNSequence.ta.mjs";

/**
 * @summary Stringify an RDN sequence according to RFC 4514.
 * @description
 * 
 * This function stringifies an RDN sequence according to
 * [IETF RFC 4514](https://www.rfc-editor.org/rfc/rfc4514), except that the
 * RDNs are not reversed: the first element of `rdns` is the first RDN in the
 * string, whereas IETF RFC 4514 starts with the last. Each RDN is converted
 * with {@link relativeDistinguishedNameToString}, which escapes the
 * distinguished values, and the results are joined with `,`.
 * 
 * @param rdns The RDN sequence to stringify.
 * @returns A string of the form `rdn,rdn...`
 * @function
 */
export
function rdnSequenceToString (rdns: RDNSequence): string {
    if (rdns.length === 0) {
        return "";
    }
    if (rdns.length === 1) {
        return relativeDistinguishedNameToString(rdns[0]);
    }
    return rdns
        .map((rdn) => relativeDistinguishedNameToString(rdn))
        .join(",");
}

export default rdnSequenceToString;
