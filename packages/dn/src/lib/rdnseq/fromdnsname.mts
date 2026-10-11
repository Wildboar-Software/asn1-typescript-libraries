import { ObjectIdentifier } from "@wildboar/asn1";
import { BER, _encodeIA5String } from "@wildboar/asn1/functional";
import { AttributeTypeAndValue } from "../AttributeTypeAndValue.ta.mjs";
import {
    domainComponentOID,
    type DomainComponentATAV,
    type DomainComponentRDNSequence,
} from "../attributeTypes.mjs";

const domainComponentType: ObjectIdentifier = ObjectIdentifier.fromString(domainComponentOID);

/**
 * @summary Convert a DNS name to an `RDNSequence` of `domainComponent`s.
 * @description
 *
 * Converts a DNS name such as `www.example.com` to a distinguished name of
 * the form `dc=www,dc=example,dc=com` (IETF RFC 4519, section 2.4; IETF RFC
 * 2247). The RDNs are in the same order as the labels, so the leftmost label
 * becomes the first RDN. This is the reverse of {@link toDnsName}.
 *
 * `punycodedDnsName` must already be in its ASCII form: internationalized
 * labels must have been converted to A-labels (`xn--...`) by the caller. The
 * labels are otherwise not validated or case-folded, and non-ASCII characters
 * are not rejected.
 *
 * A single trailing dot, which marks a fully-qualified name, is ignored. The
 * empty string, and the root name `.`, convert to an empty `RDNSequence`.
 * This returns `null` if any other label is empty, as in `a..b`, because an
 * empty `domainComponent` is not meaningful.
 *
 * @param punycodedDnsName A DNS name whose labels are all already ASCII
 *  (punycoded where necessary), separated by dots.
 * @returns The `RDNSequence`, or `null` if `punycodedDnsName` has an empty
 *  label.
 * @function
 */
export
function fromDnsName (punycodedDnsName: string): DomainComponentRDNSequence | null {
    const name: string = punycodedDnsName.endsWith(".")
        ? punycodedDnsName.slice(0, -1)
        : punycodedDnsName;
    if (name.length === 0) {
        return [];
    }
    const labels: string[] = name.split(".");
    const rdns: DomainComponentRDNSequence = new Array(labels.length);
    for (let i = 0; i < labels.length; i++) {
        if (labels[i].length === 0) {
            return null;
        }
        rdns[i] = [
            new AttributeTypeAndValue(
                domainComponentType,
                _encodeIA5String(labels[i], BER),
            ) as DomainComponentATAV,
        ];
    }
    return rdns;
}

export default fromDnsName;
