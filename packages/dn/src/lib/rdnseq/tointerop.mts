import relativeDistinguishedNameToInteropString from "../rdn/tointerop.mjs";
import type { RDNSequence } from "../RDNSequence.ta.mjs";

/**
 * @summary Stringify an RDN sequence as an "interop string."
 * @description
 *
 * Each RDN is converted with {@link relativeDistinguishedNameToInteropString},
 * so every attribute type is a numeric object identifier and every value is
 * `#` followed by its hexadecimal BER encoding. The RDNs are joined with `,`.
 *
 * As with {@link rdnSequenceToString}, the RDNs are not reversed: the first
 * element of `rdns` is the first RDN in the string, whereas
 * [IETF RFC 4514](https://www.rfc-editor.org/rfc/rfc4514) starts with the
 * last.
 *
 * @param rdns The RDN sequence to stringify.
 * @returns A string of the form `rdn,rdn...`
 * @function
 */
export
function rdnSequenceToInteropString (rdns: RDNSequence): string {
    return rdns
        .map(relativeDistinguishedNameToInteropString)
        .join(",");
}

export default rdnSequenceToInteropString;
