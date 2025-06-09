import EqualityMatcher from "../../types/EqualityMatcher.js";
import type { ASN1Element } from "asn1-ts";
import { URL } from "url";

export
const uriMatch: EqualityMatcher = (
    assertion: ASN1Element,
    value: ASN1Element,
): boolean => {
    const a: URL = new URL(assertion.utf8String.trim().toLowerCase());
    const v: URL = new URL(value.utf8String.trim().toLowerCase());
    return (
        (a.protocol === v.protocol)
        && (a.username === v.username)
        && (a.password === v.password)
        && (a.hostname === v.hostname)
        && (a.port === v.port)
        && (a.pathname === v.pathname)
        && (a.search === v.search)
        && (a.hash === v.hash)
    );
}

export default uriMatch;
