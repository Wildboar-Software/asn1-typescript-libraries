import type { RelativeDistinguishedName } from "./RelativeDistinguishedName.ta.mjs";
import type { RDNSequence } from "./RDNSequence.ta.mjs";
import {
    commonNameOID,
    countryNameOID,
    domainComponentOID,
    givenNameOID,
    localityNameOID,
    organizationNameOID,
    organizationalUnitNameOID,
    pseudonymOID,
    serialNumberOID,
    stateOrProvinceNameOID,
    surnameOID,
    titleOID,
} from "./attributeTypes.mjs";
import hasOnlyAttributeTypes from "./hasOnlyAttributeTypes.mjs";

/**
 * The attribute types that may be used in the `issuer` field of a qualified
 * certificate, per section 3.1.1 of
 * [IETF RFC 3739](https://www.rfc-editor.org/rfc/rfc3739).
 */
export
const qualifiedCertsIssuerAttributeTypes: ReadonlySet<string> = new Set([
    domainComponentOID,
    countryNameOID,
    stateOrProvinceNameOID,
    organizationNameOID,
    localityNameOID,
    serialNumberOID,
]);

/**
 * The attribute types that may be used in the `subject` field of a qualified
 * certificate, per section 3.1.2 of
 * [IETF RFC 3739](https://www.rfc-editor.org/rfc/rfc3739).
 */
export
const qualifiedCertsSubjectAttributeTypes: ReadonlySet<string> = new Set([
    domainComponentOID,
    countryNameOID,
    commonNameOID,
    surnameOID,
    givenNameOID,
    pseudonymOID,
    serialNumberOID,
    titleOID,
    organizationNameOID,
    organizationalUnitNameOID,
    stateOrProvinceNameOID,
    localityNameOID,
]);

/**
 * @summary Test whether every attribute type in a name is one that is
 * recognized for the `subject` of a qualified certificate.
 * @description
 *
 * [IETF RFC 3739](https://www.rfc-editor.org/rfc/rfc3739), section 3.1.2,
 * says that the distinguished name in the `subject` field of a qualified
 * certificate "SHALL contain an appropriate subset of" these attribute types:
 *
 * - `domainComponent`
 * - `countryName`
 * - `commonName`
 * - `surname`
 * - `givenName`
 * - `pseudonym`
 * - `serialNumber`
 * - `title`
 * - `organizationName`
 * - `organizationalUnitName`
 * - `stateOrProvinceName`
 * - `localityName`
 *
 * The profile also permits other attributes to be present, but only as
 * extras that are not necessary to identify the name; this function reports
 * whether such extras are absent.
 *
 * Only the attribute _types_ are examined. This does **not** check the
 * requirement that a subject have at least one of `commonName`, `givenName`,
 * or `pseudonym`, nor does it check any attribute values.
 *
 * An empty name is trivially compliant.
 *
 * @param name A single RDN, or an RDN sequence (a distinguished name). The
 *  order of the RDNs in an RDN sequence is irrelevant.
 * @returns Whether every attribute type in `name` is recognized for the
 *  subject of a qualified certificate.
 * @function
 */
export
function isQualifiedCertsSubjectCompliant (
    name: RelativeDistinguishedName | RDNSequence,
): boolean {
    return hasOnlyAttributeTypes(name, qualifiedCertsSubjectAttributeTypes);
}

/**
 * @summary Test whether every attribute type in a name is one that is
 * recognized for the `issuer` of a qualified certificate.
 * @description
 *
 * [IETF RFC 3739](https://www.rfc-editor.org/rfc/rfc3739), section 3.1.1,
 * says that the distinguished name of the `issuer` of a qualified certificate
 * "SHALL be specified using an appropriate subset of" these attribute types:
 *
 * - `domainComponent`
 * - `countryName`
 * - `stateOrProvinceName`
 * - `organizationName`
 * - `localityName`
 * - `serialNumber`
 *
 * The profile also permits other attributes to be present, but they should
 * not be necessary to identify the issuer; this function reports whether
 * such extras are absent.
 *
 * Only the attribute _types_ are examined, not the attribute values.
 *
 * An empty name is trivially compliant.
 *
 * @param name A single RDN, or an RDN sequence (a distinguished name). The
 *  order of the RDNs in an RDN sequence is irrelevant.
 * @returns Whether every attribute type in `name` is recognized for the
 *  issuer of a qualified certificate.
 * @function
 */
export
function isQualifiedCertsIssuerCompliant (
    name: RelativeDistinguishedName | RDNSequence,
): boolean {
    return hasOnlyAttributeTypes(name, qualifiedCertsIssuerAttributeTypes);
}
