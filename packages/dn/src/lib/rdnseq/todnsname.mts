import { ASN1TagClass, ASN1UniversalType } from "@wildboar/asn1";
import type { RDNSequence } from "../RDNSequence.ta.mjs";
import { domainComponentOID } from "../attributeTypes.mjs";
import { isAttributeTypeAndValueOf } from "../atav/brand.mjs";

/**
 * @summary Convert an `RDNSequence` of `domainComponent`s to a DNS name.
 * @description
 *
 * Converts a distinguished name of the form `dc=www,dc=example,dc=com`
 * (IETF RFC 4519, section 2.4; IETF RFC 2247) to the DNS name
 * `www.example.com`. The labels are joined in the order supplied: the first
 * RDN becomes the first (leftmost) label, whatever the DIT order of `rdns`
 * is. Pass the RDNs in DIT ascending order, as in LDAP, to get a DNS name
 * in its usual order. For an `RDNSequence` in DIT descending order, as in
 * X.500, use {@link toDITAscending} first, or the labels will be reversed.
 *
 * The labels are not validated, case-folded, or converted to A-labels.
 *
 * This returns `null` if:
 *
 * - `rdns` is empty;
 * - any RDN does not have exactly one attribute type and value;
 * - the attribute type of any RDN is not `domainComponent`; or
 * - the value of any `domainComponent` is not a universal `IA5String`.
 *
 * @param rdns The RDNs, in any order. A branded `RDNSequence` is accepted.
 * @returns The DNS name, or `null` if `rdns` does not meet the constraints
 *  above.
 * @throws {ASN1Error} If the content of an `IA5String` value cannot be
 *  decoded.
 * @function
 */
export
function toDnsName (rdns: RDNSequence): string | null {
    if (rdns.length === 0) {
        return null;
    }
    const labels: string[] = new Array(rdns.length);
    for (let i = 0; i < rdns.length; i++) {
        const rdn = rdns[i];
        if (rdn.length !== 1) {
            return null;
        }
        const atav = rdn[0];
        if (!isAttributeTypeAndValueOf(atav, domainComponentOID)) {
            return null;
        }
        const value = atav.value;
        if (
            value.tagClass !== ASN1TagClass.universal
            || value.tagNumber !== ASN1UniversalType.ia5String
        ) {
            return null;
        }
        labels[i] = value.ia5String;
    }
    return labels.join(".");
}

export default toDnsName;
