import { ASN1TagClass, ASN1UniversalType } from "@wildboar/asn1";
import type { RDNSequenceDescending } from "../brands.mjs";
import { urnCOID } from "../attributeTypes.mjs";

/**
 * @summary Convert an `RDNSequence` of `urnC` values to a URN.
 * @description
 *
 * Converts a distinguished name of the form `urnC=isbn,urnC=0451450523` to the
 * Uniform Resource Name (URN)
 * ([IETF RFC 8141](https://www.rfc-editor.org/rfc/rfc8141))
 * `urn:isbn:0451450523`. The `urn` prefix is not represented as an RDN: it is
 * implied. The values of the RDNs, from the highest down, are the
 * colon-delimited components that follow it.
 *
 * The `urnC` attribute type (ITU-T Recommendation X.520) has a
 * `PrintableString` syntax. The components are not validated, case-folded,
 * or checked for being a valid URN namespace identifier or namespace-specific
 * string.
 *
 * This returns `null` if:
 *
 * - `rdns` is empty;
 * - any RDN does not have exactly one attribute type and value;
 * - the attribute type of any RDN is not `urnC`;
 * - the value of any `urnC` is not a universal `PrintableString`; or
 * - the value of any `urnC` contains a colon, which would be mistaken for the
 *   delimiter between components.
 *
 * @param rdns The RDNs, in DIT descending order, as in X.500. Use
 *  `toDITDescending()` or `asDITDescending()` if the order is otherwise.
 * @returns The URN, or `null` if `rdns` does not meet the constraints above.
 * @throws {ASN1Error} If the content of a `PrintableString` value cannot be
 *  decoded.
 * @function
 */
export
function dnToURN (rdns: RDNSequenceDescending): string | null {
    if (rdns.length === 0) {
        return null;
    }
    let urn: string = "urn";
    for (const rdn of rdns) {
        if (rdn.length !== 1) {
            return null;
        }
        const atav = rdn[0];
        if (atav.type_.toString() !== urnCOID) {
            return null;
        }
        const value = atav.value;
        if (
            value.tagClass !== ASN1TagClass.universal
            || value.tagNumber !== ASN1UniversalType.printableString
        ) {
            return null;
        }
        const component: string = value.printableString;
        if (component.includes(":")) {
            return null;
        }
        urn += ":" + component;
    }
    return urn;
}

export default dnToURN;
