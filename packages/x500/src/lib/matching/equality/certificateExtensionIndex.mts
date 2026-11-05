import { DERElement, type OBJECT_IDENTIFIER } from "@wildboar/asn1";
import {
    type Extension,
} from "../../modules/AuthenticationFramework/Extension.ta.mjs";
import {
    type CertificatePoliciesSyntax,
} from "../../modules/CertificateExtensions/CertificatePoliciesSyntax.ta.mjs";
import {
    anyPolicy,
} from "../../modules/CertificateExtensions/anyPolicy.va.mjs";

const ANY_POLICY = anyPolicy;

/**
 * Map of a certificate's extensions by OID string, the same key
 * {@link groupByOID} uses. RFC 5280 forbids duplicate types; a
 * second member with the same OID overwrites the first.
 *
 * @param {Extension[]} extensions `TBSCertificate.extensions`.
 * @returns {Map<string, Extension>} OID string to extension.
 * @function
 * @author Cursor Grok 4.6
 */
export
function certificateExtensionMap (
    extensions: Extension[] | undefined,
): Map<string, Extension> {
    const map: Map<string, Extension> = new Map();
    if (!extensions) {
        return map;
    }
    for (const ext of extensions) {
        map.set(ext.extnId.toString(), ext);
    }
    return map;
}

/**
 * Decode one mapped extension. `cache` holds the decoded value so
 * `subjectAltName` is not re-decoded when `nameConstraints` also
 * reads it.
 *
 * @param {Map<string, Extension>} map From {@link certificateExtensionMap}.
 * @param {OBJECT_IDENTIFIER} oid The extension type.
 * @param {Function} decoder X.690 decoder for that extension.
 * @param {Map<string, unknown>} cache Optional per-certificate decode cache.
 * @returns The decoded value, or `undefined` if the extension is absent.
 * @function
 * @author Cursor Grok 4.6
 */
export
function decodeCertificateExtension <T> (
    map: Map<string, Extension>,
    oid: OBJECT_IDENTIFIER,
    decoder: (el: DERElement) => T,
    cache?: Map<string, unknown>,
): T | undefined {
    const key = oid.toString();
    if (cache?.has(key)) {
        return cache.get(key) as T | undefined;
    }
    const ext = map.get(key);
    let value: T | undefined;
    if (ext) {
        const el: DERElement = new DERElement();
        el.fromBytes(ext.extnValue);
        value = decoder(el);
    }
    cache?.set(key, value);
    return value;
}

/**
 * Map of extensions plus a decode cache so each OID is decoded at
 * most once for one certificate.
 *
 * @param {Extension[]} extensions `TBSCertificate.extensions`.
 * @returns {Function} `(oid, decoder) => decoded | undefined`.
 * @function
 * @author Cursor Grok 4.6
 */
export
function certificateExtensionReader (
    extensions: Extension[] | undefined,
): <T>(oid: OBJECT_IDENTIFIER, decoder: (el: DERElement) => T) => T | undefined {
    const map = certificateExtensionMap(extensions);
    const decoded: Map<string, unknown> = new Map();
    return <T>(oid: OBJECT_IDENTIFIER, decoder: (el: DERElement) => T): T | undefined => (
        decodeCertificateExtension(map, oid, decoder, decoded)
    );
}

/**
 * X.509 clause 13.3.2 `policy`: TRUE if either side contains
 * `anyPolicy`, or if the asserted and stored policy OIDs intersect.
 *
 * Compared with `OBJECT_IDENTIFIER.isEqualTo`, not dotted-decimal
 * strings.
 *
 * @param asserted Presented `CertPolicySet`.
 * @param stored Decoded `certificatePolicies` extension.
 * @returns `true` iff the policy component matches.
 * @function
 * @author Cursor Grok 4.6
 */
export
function certificatePoliciesIntersect (
    asserted: OBJECT_IDENTIFIER[],
    stored: CertificatePoliciesSyntax,
): boolean {
    for (const policy of stored) {
        if (policy.policyIdentifier.isEqualTo(ANY_POLICY)) {
            return true;
        }
    }
    for (const oid of asserted) {
        if (oid.isEqualTo(ANY_POLICY)) {
            return true;
        }
    }
    for (const oid of asserted) {
        for (const policy of stored) {
            if (oid.isEqualTo(policy.policyIdentifier)) {
                return true;
            }
        }
    }
    return false;
}
