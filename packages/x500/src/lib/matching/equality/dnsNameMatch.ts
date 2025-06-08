import EqualityMatcher from "../../types/EqualityMatcher";
import type { ASN1Element } from "asn1-ts";
import { domainToUnicode } from "url";

function isNotPunycodeOrUnicode (label: string): boolean {
    return (
        !label.startsWith("xn--")
        && Buffer.from(label).every((char: number): boolean => (char <= 127))
    );
}

export
const dnsNameMatch: EqualityMatcher = (
    assertion: ASN1Element,
    value: ASN1Element,
): boolean => {
    const a: string[] = assertion.utf8String.split(".");
    const v: string[] = value.utf8String.split(".");
    return a.every((aLabel, i) => {
        const vLabel: string = v[i];
        if (isNotPunycodeOrUnicode(aLabel) !== isNotPunycodeOrUnicode(vLabel)) {
            return false;
        }
        return (domainToUnicode(aLabel).toLowerCase() === domainToUnicode(vLabel).toLowerCase());
    });
}

export default dnsNameMatch;
