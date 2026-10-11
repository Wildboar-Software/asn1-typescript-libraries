import type { RelativeDistinguishedName } from "./RelativeDistinguishedName.ta.mjs";
import type { RDNSequence } from "./RDNSequence.ta.mjs";
import {
    commonNameOID,
    countryNameOID,
    domainComponentOID,
    localityNameOID,
    organizationNameOID,
    organizationalUnitNameOID,
    stateOrProvinceNameOID,
    streetAddressOID,
    uidOID,
} from "./attributeTypes.mjs";
import hasOnlyAttributeTypes from "./hasOnlyAttributeTypes.mjs";

/**
 * The attribute types for which section 3 of
 * [IETF RFC 4514](https://www.rfc-editor.org/rfc/rfc4514) requires that the
 * descriptor (short name) be recognized by implementations.
 *
 * | Descriptor | Attribute type                                      |
 * |------------|-----------------------------------------------------|
 * | `CN`       | `commonName` (2.5.4.3)                              |
 * | `L`        | `localityName` (2.5.4.7)                            |
 * | `ST`       | `stateOrProvinceName` (2.5.4.8)                     |
 * | `O`        | `organizationName` (2.5.4.10)                       |
 * | `OU`       | `organizationalUnitName` (2.5.4.11)                 |
 * | `C`        | `countryName` (2.5.4.6)                             |
 * | `STREET`   | `streetAddress` (2.5.4.9)                           |
 * | `DC`       | `domainComponent` (0.9.2342.19200300.100.1.25)      |
 * | `UID`      | `userId` (0.9.2342.19200300.100.1.1)                |
 */
export
const ietfRfc4514RequiredAttributeTypes: ReadonlySet<string> = new Set([
    commonNameOID,
    localityNameOID,
    stateOrProvinceNameOID,
    organizationNameOID,
    organizationalUnitNameOID,
    countryNameOID,
    streetAddressOID,
    domainComponentOID,
    uidOID,
]);

/**
 * @summary Test whether the only attribute types in a name are those that
 * [IETF RFC 4514](https://www.rfc-editor.org/rfc/rfc4514) requires every
 * implementation to recognize.
 * @description
 *
 * Section 3 of IETF RFC 4514 says that implementations "MUST recognize
 * AttributeType name strings (descriptors)" for `CN`, `L`, `ST`, `O`, `OU`,
 * `C`, `STREET`, `DC`, and `UID`, but only _may_ recognize others. A name that
 * uses only these attribute types can therefore be written as a string
 * with descriptors, and read back by any compliant implementation, without
 * needing to know about any other attribute type. Such a name is "portable".
 *
 * This only examines the attribute _types_, not whether the values can be
 * represented as strings. Any attribute type outside of the above (even
 * a well-known one like `surname`) causes this to return `false`.
 *
 * An empty name is trivially portable.
 *
 * @param name A single RDN, or an RDN sequence (a distinguished name). The
 *  order of the RDNs in an RDN sequence is irrelevant.
 * @returns Whether every attribute type in `name` is one of those required to
 *  be recognized by IETF RFC 4514.
 * @function
 */
export
function isIetfRfc4514Portable (
    name: RelativeDistinguishedName | RDNSequence,
): boolean {
    return hasOnlyAttributeTypes(name, ietfRfc4514RequiredAttributeTypes);
}

export default isIetfRfc4514Portable;
