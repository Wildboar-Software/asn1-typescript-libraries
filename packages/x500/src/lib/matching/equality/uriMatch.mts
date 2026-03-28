import EqualityMatcher from "../../types/EqualityMatcher.mjs";
import type { ASN1Element } from "@wildboar/asn1";
import { URL, domainToASCII } from "node:url";
import { normalize } from "node:path/posix";
import { urlSchemeDefaultPort } from "./urlSchemeDefaultPort.mjs";

export
const uriMatch: EqualityMatcher = (
    assertion: ASN1Element,
    value: ASN1Element,
): boolean => {
    const a: URL = new URL(assertion.utf8String.trim().toLowerCase());
    const v: URL = new URL(value.utf8String.trim().toLowerCase());
    const protocol = a.protocol.toLowerCase();
    if (protocol !== v.protocol.toLowerCase()) {
        return false;
    }
    const hosta = domainToASCII(a.hostname).toLowerCase();
    const hostv = domainToASCII(v.hostname).toLowerCase();
    const porta = a.port || urlSchemeDefaultPort.get(protocol);
    const portv = v.port || urlSchemeDefaultPort.get(protocol);
    return (
        (a.protocol.toLowerCase() === v.protocol.toLowerCase())
        && (a.username === v.username)
        && (a.password === v.password)
        && (hosta === hostv)
        && (porta === portv)
        && (normalize(a.pathname) === normalize(v.pathname))
        && (a.search === v.search)
        && (a.hash === v.hash)
    );
}

export default uriMatch;
