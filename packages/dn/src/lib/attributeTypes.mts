import type {
    AttributeTypeAndValueOf,
    RDNSequenceOf,
    RelativeDistinguishedNameOf,
} from "./brands.mjs";

/**
 * @file
 *
 * String constants for the dotted-decimal notation of common naming
 * attribute types, and the branded ATAV, RDN, and DN types derived from them.
 *
 * ### Extending
 *
 * Nothing here is special: every type is built from
 * {@link AttributeTypeAndValueOf}, {@link RelativeDistinguishedNameOf}, and
 * {@link RDNSequenceOf}, which accept any object identifier as a string
 * literal type. To add an attribute type that is not listed, define the
 * constant and the aliases in your own code:
 *
 * ```ts
 * import {
 *     type AttributeTypeAndValueOf,
 *     type RelativeDistinguishedNameOf,
 *     isAttributeTypeAndValueOf,
 * } from "@wildboar/dn";
 *
 * export const businessCategoryOID = "2.5.4.15";
 * export type BusinessCategoryATAV = AttributeTypeAndValueOf<typeof businessCategoryOID>;
 * export type BusinessCategoryRDN = RelativeDistinguishedNameOf<typeof businessCategoryOID>;
 *
 * if (isAttributeTypeAndValueOf(atav, businessCategoryOID)) {
 *     // atav is a BusinessCategoryATAV here.
 * }
 * ```
 */

/** The `commonName` attribute type (ITU-T X.520). */
export const commonNameOID = "2.5.4.3";
/** The `surname` attribute type (ITU-T X.520). */
export const surnameOID = "2.5.4.4";
/** The `serialNumber` attribute type (ITU-T X.520). */
export const serialNumberOID = "2.5.4.5";
/** The `countryName` attribute type (ITU-T X.520). */
export const countryNameOID = "2.5.4.6";
/** The `localityName` attribute type (ITU-T X.520). */
export const localityNameOID = "2.5.4.7";
/** The `stateOrProvinceName` attribute type (ITU-T X.520). */
export const stateOrProvinceNameOID = "2.5.4.8";
/** The `streetAddress` attribute type (ITU-T X.520). */
export const streetAddressOID = "2.5.4.9";
/** The `organizationName` attribute type (ITU-T X.520). */
export const organizationNameOID = "2.5.4.10";
/** The `organizationalUnitName` attribute type (ITU-T X.520). */
export const organizationalUnitNameOID = "2.5.4.11";
/** The `title` attribute type (ITU-T X.520). */
export const titleOID = "2.5.4.12";
/** The `givenName` attribute type (ITU-T X.520). */
export const givenNameOID = "2.5.4.42";
/** The `pseudonym` attribute type (ITU-T X.520). */
export const pseudonymOID = "2.5.4.65";
/** The `urnC` attribute type (ITU-T X.520). */
export const urnCOID = "2.5.4.89";
/** The `uid` attribute type (IETF RFC 4519). */
export const uidOID = "0.9.2342.19200300.100.1.1";
/** The `domainComponent` attribute type (IETF RFC 4519). */
export const domainComponentOID = "0.9.2342.19200300.100.1.25";
/** The `oidC1` attribute type, the first arc of an OID (ITU-T X.520). */
export const oidC1OID = "2.17.1.2.0";
/** The `oidC2` attribute type, the second arc of an OID (ITU-T X.520). */
export const oidC2OID = "2.17.1.2.1";
/** The `oidC` attribute type, an arc of an OID (ITU-T X.520). */
export const oidCOID = "2.17.1.2.2";

/** An ATAV whose attribute type is `commonName`. */
export type CommonNameATAV = AttributeTypeAndValueOf<typeof commonNameOID>;
/** An ATAV whose attribute type is `countryName`. */
export type CountryNameATAV = AttributeTypeAndValueOf<typeof countryNameOID>;
/** An ATAV whose attribute type is `localityName`. */
export type LocalityNameATAV = AttributeTypeAndValueOf<typeof localityNameOID>;
/** An ATAV whose attribute type is `stateOrProvinceName`. */
export type StateOrProvinceNameATAV =
    AttributeTypeAndValueOf<typeof stateOrProvinceNameOID>;
/** An ATAV whose attribute type is `organizationName`. */
export type OrganizationNameATAV =
    AttributeTypeAndValueOf<typeof organizationNameOID>;
/** An ATAV whose attribute type is `organizationalUnitName`. */
export type OrganizationalUnitNameATAV =
    AttributeTypeAndValueOf<typeof organizationalUnitNameOID>;
/** An ATAV whose attribute type is `urnC`. */
export type UrnCATAV = AttributeTypeAndValueOf<typeof urnCOID>;
/** An ATAV whose attribute type is `uid`. */
export type UIDATAV = AttributeTypeAndValueOf<typeof uidOID>;
/** An ATAV whose attribute type is `domainComponent`. */
export type DomainComponentATAV =
    AttributeTypeAndValueOf<typeof domainComponentOID>;
/** An ATAV whose attribute type is `oidC1`. */
export type OidC1ATAV = AttributeTypeAndValueOf<typeof oidC1OID>;
/** An ATAV whose attribute type is `oidC2`. */
export type OidC2ATAV = AttributeTypeAndValueOf<typeof oidC2OID>;
/** An ATAV whose attribute type is `oidC`. */
export type OidCATAV = AttributeTypeAndValueOf<typeof oidCOID>;

/** An RDN of one ATAV, whose attribute type is `commonName`. */
export type CommonNameRDN = RelativeDistinguishedNameOf<typeof commonNameOID>;
/** An RDN of one ATAV, whose attribute type is `countryName`. */
export type CountryNameRDN =
    RelativeDistinguishedNameOf<typeof countryNameOID>;
/** An RDN of one ATAV, whose attribute type is `localityName`. */
export type LocalityNameRDN =
    RelativeDistinguishedNameOf<typeof localityNameOID>;
/** An RDN of one ATAV, whose attribute type is `stateOrProvinceName`. */
export type StateOrProvinceNameRDN =
    RelativeDistinguishedNameOf<typeof stateOrProvinceNameOID>;
/** An RDN of one ATAV, whose attribute type is `organizationName`. */
export type OrganizationNameRDN =
    RelativeDistinguishedNameOf<typeof organizationNameOID>;
/** An RDN of one ATAV, whose attribute type is `organizationalUnitName`. */
export type OrganizationalUnitNameRDN =
    RelativeDistinguishedNameOf<typeof organizationalUnitNameOID>;
/** An RDN of one ATAV, whose attribute type is `urnC`. */
export type UrnCRDN = RelativeDistinguishedNameOf<typeof urnCOID>;
/** An RDN of one ATAV, whose attribute type is `uid`. */
export type UIDRDN = RelativeDistinguishedNameOf<typeof uidOID>;
/** An RDN of one ATAV, whose attribute type is `domainComponent`. */
export type DomainComponentRDN =
    RelativeDistinguishedNameOf<typeof domainComponentOID>;
/** An RDN of one ATAV, whose attribute type is `oidC1`. */
export type OidC1RDN = RelativeDistinguishedNameOf<typeof oidC1OID>;
/** An RDN of one ATAV, whose attribute type is `oidC2`. */
export type OidC2RDN = RelativeDistinguishedNameOf<typeof oidC2OID>;
/** An RDN of one ATAV, whose attribute type is `oidC`. */
export type OidCRDN = RelativeDistinguishedNameOf<typeof oidCOID>;

/**
 * A DN made only of `domainComponent` RDNs, which can be converted to a
 * DNS name.
 */
export type DomainComponentRDNSequence =
    RDNSequenceOf<typeof domainComponentOID>;

/**
 * A DN made only of `urnC` RDNs, which can be converted to a URN.
 */
export type UrnCRDNSequence = RDNSequenceOf<typeof urnCOID>;

/**
 * A DN made only of `oidC1`, `oidC2`, and `oidC` RDNs, which can be
 * converted to an object identifier.
 */
export type ObjectIdentifierComponentRDNSequence =
    RDNSequenceOf<typeof oidC1OID | typeof oidC2OID | typeof oidCOID>;
