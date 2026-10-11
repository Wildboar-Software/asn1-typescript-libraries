import type { RDNSequence } from "../RDNSequence.ta.mjs";
import relativeDistinguishedNameToASN1String from "../rdn/toasn1.mjs";

/**
 * @summary Convert an RDN sequence (distinguished name) to textual ASN.1 value notation
 * @description
 *
 * Produces ASN.1 value notation for the `SEQUENCE OF
 * RelativeDistinguishedName`: the RDNs, each converted with
 * {@link relativeDistinguishedNameToASN1String}, are separated by `, ` and
 * enclosed in braces. The RDNs are not reversed. An empty sequence (the root
 * DSE's name) is written as `{ }`.
 *
 * @param rdns The RDN sequence to convert.
 * @returns A string of the form `{ { { type ..., value ... } }, ... }`
 * @function
 */
export
function rdnSequenceToASN1String (rdns: RDNSequence): string {
    if (rdns.length === 0) {
        return "{ }";
    }
    return `{ ${rdns.map(relativeDistinguishedNameToASN1String).join(", ")} }`;
}

export default rdnSequenceToASN1String;
