import { type OBJECT_IDENTIFIER, ObjectIdentifier } from "@wildboar/asn1";
import { Buffer } from "node:buffer";

const id_at = ObjectIdentifier.fromParts([2, 5, 4]);

// Needed for parsing later.
export const id_at_countryName: OBJECT_IDENTIFIER = ObjectIdentifier.fromParts([6], id_at);
export const id_at_organizationName: OBJECT_IDENTIFIER = ObjectIdentifier.fromParts([10], id_at);
export const id_at_organizationalUnitName: OBJECT_IDENTIFIER = ObjectIdentifier.fromParts([11], id_at);
export const id_at_dnQualifier: OBJECT_IDENTIFIER = ObjectIdentifier.fromParts([46], id_at);
export const id_at_stateOrProvinceName: OBJECT_IDENTIFIER = ObjectIdentifier.fromParts([8], id_at);
export const id_at_commonName: OBJECT_IDENTIFIER = ObjectIdentifier.fromParts([3], id_at);
export const id_at_serialNumber: OBJECT_IDENTIFIER = ObjectIdentifier.fromParts([5], id_at);
export const id_at_localityName: OBJECT_IDENTIFIER = ObjectIdentifier.fromParts([7], id_at);
export const id_at_title: OBJECT_IDENTIFIER = ObjectIdentifier.fromParts([12], id_at);
export const id_at_surname: OBJECT_IDENTIFIER = ObjectIdentifier.fromParts([4], id_at);
export const id_at_givenName: OBJECT_IDENTIFIER = ObjectIdentifier.fromParts([42], id_at);
export const id_at_initials: OBJECT_IDENTIFIER = ObjectIdentifier.fromParts([43], id_at);
export const id_at_pseudonym: OBJECT_IDENTIFIER = ObjectIdentifier.fromParts([65], id_at);
export const id_at_generationQualifier: OBJECT_IDENTIFIER = ObjectIdentifier.fromParts([44], id_at);
export const id_at_countryCode3c: OBJECT_IDENTIFIER = ObjectIdentifier.fromParts([98], id_at);
export const id_at_countryCode3n: OBJECT_IDENTIFIER = ObjectIdentifier.fromParts([99], id_at);
export const id_at_streetAddress: OBJECT_IDENTIFIER = ObjectIdentifier.fromParts([9], id_at);
export const id_at_postalCode: OBJECT_IDENTIFIER = ObjectIdentifier.fromParts([17], id_at);
export const id_at_telephoneNumber: OBJECT_IDENTIFIER = ObjectIdentifier.fromParts([20], id_at);
export const id_at_postOfficeBox: OBJECT_IDENTIFIER = ObjectIdentifier.fromParts([18], id_at);
export const id_at_houseIdentifier: OBJECT_IDENTIFIER = ObjectIdentifier.fromParts([51], id_at);
export const id_at_dmdName: OBJECT_IDENTIFIER = ObjectIdentifier.fromParts([54], id_at);
export const id_at_urnC: OBJECT_IDENTIFIER = ObjectIdentifier.fromParts([89], id_at);
export const id_at_organizationIdentifier: OBJECT_IDENTIFIER = ObjectIdentifier.fromParts([97], id_at);
export const id_at_dnsName: OBJECT_IDENTIFIER = ObjectIdentifier.fromParts([100], id_at);
export const id_at_intEmail: OBJECT_IDENTIFIER = ObjectIdentifier.fromParts([104], id_at);
export const id_at_jid: OBJECT_IDENTIFIER = ObjectIdentifier.fromParts([105], id_at);
export const id_at_objectIdentifier: OBJECT_IDENTIFIER = ObjectIdentifier.fromParts([106], id_at);
export const id_at_postalAddress: OBJECT_IDENTIFIER = ObjectIdentifier.fromParts([16], id_at);
export const id_at_registeredAddress: OBJECT_IDENTIFIER = ObjectIdentifier.fromParts([26], id_at);

const id_pilotAttributeType = ObjectIdentifier.fromParts([0, 9, 2342, 19200300, 100, 1]);

export const id_dc: OBJECT_IDENTIFIER = ObjectIdentifier.fromParts([25], id_pilotAttributeType);
export const id_uid: OBJECT_IDENTIFIER = ObjectIdentifier.fromParts([1], id_pilotAttributeType);
export const id_mail: OBJECT_IDENTIFIER = ObjectIdentifier.fromParts([3], id_pilotAttributeType);
export const id_roomNumber: OBJECT_IDENTIFIER = ObjectIdentifier.fromParts([6], id_pilotAttributeType);
export const id_documentIdentifier: OBJECT_IDENTIFIER = ObjectIdentifier.fromParts([11], id_pilotAttributeType);
export const id_homePhone: OBJECT_IDENTIFIER = ObjectIdentifier.fromParts([20], id_pilotAttributeType);
export const id_mobile: OBJECT_IDENTIFIER = ObjectIdentifier.fromParts([41], id_pilotAttributeType);
export const id_pager: OBJECT_IDENTIFIER = ObjectIdentifier.fromParts([42], id_pilotAttributeType);
export const id_uniqueIdentifier: OBJECT_IDENTIFIER = ObjectIdentifier.fromParts([44], id_pilotAttributeType);
export const id_buildingName: OBJECT_IDENTIFIER = ObjectIdentifier.fromParts([48], id_pilotAttributeType);

const pkcs_9 = ObjectIdentifier.fromParts([1, 2, 840, 113549, 1, 9]);

export const id_emailAddress: OBJECT_IDENTIFIER = ObjectIdentifier.fromParts([1], pkcs_9);

/** `{id 2}` from X.520, where `id` is `{joint-iso-itu-t registration-procedures(17) module(1) directory-defs(2)}`. */
export const id_oidC: OBJECT_IDENTIFIER = ObjectIdentifier.fromParts([2, 17, 1, 2, 2]);

/**
 * `{id-at}` from ITU-T X.412 (1999),
 * `{joint-iso-itu-t mhs(6) routing(10) 3}`.
 */
const id_at_mhs_routing = ObjectIdentifier.fromParts([2, 6, 10, 3]);

/** Naming attributes of the X.412 OR-address-subtree name forms. */
export const id_at_mhs_admd_name: OBJECT_IDENTIFIER = ObjectIdentifier.fromParts([9], id_at_mhs_routing);
export const id_at_mhs_common_name: OBJECT_IDENTIFIER = ObjectIdentifier.fromParts([10], id_at_mhs_routing);
export const id_at_mhs_country_name: OBJECT_IDENTIFIER = ObjectIdentifier.fromParts([11], id_at_mhs_routing);
export const id_at_mhs_extended_network_address: OBJECT_IDENTIFIER = ObjectIdentifier.fromParts([13], id_at_mhs_routing);
export const id_at_mhs_generation_qualifier: OBJECT_IDENTIFIER = ObjectIdentifier.fromParts([14], id_at_mhs_routing);
export const id_at_mhs_given_name: OBJECT_IDENTIFIER = ObjectIdentifier.fromParts([15], id_at_mhs_routing);
export const id_at_mhs_initials: OBJECT_IDENTIFIER = ObjectIdentifier.fromParts([16], id_at_mhs_routing);
export const id_at_mhs_network_address: OBJECT_IDENTIFIER = ObjectIdentifier.fromParts([18], id_at_mhs_routing);
export const id_at_mhs_numeric_user_identifier: OBJECT_IDENTIFIER = ObjectIdentifier.fromParts([20], id_at_mhs_routing);
export const id_at_mhs_organization_name: OBJECT_IDENTIFIER = ObjectIdentifier.fromParts([21], id_at_mhs_routing);
export const id_at_mhs_organizational_unit_name: OBJECT_IDENTIFIER = ObjectIdentifier.fromParts([22], id_at_mhs_routing);
export const id_at_mhs_pds_name_attribute: OBJECT_IDENTIFIER = ObjectIdentifier.fromParts([23], id_at_mhs_routing);
export const id_at_mhs_postal_code: OBJECT_IDENTIFIER = ObjectIdentifier.fromParts([24], id_at_mhs_routing);
export const id_at_mhs_prmd_name: OBJECT_IDENTIFIER = ObjectIdentifier.fromParts([25], id_at_mhs_routing);
export const id_at_mhs_surname: OBJECT_IDENTIFIER = ObjectIdentifier.fromParts([27], id_at_mhs_routing);
export const id_at_mhs_terminal_identifier: OBJECT_IDENTIFIER = ObjectIdentifier.fromParts([28], id_at_mhs_routing);
export const id_at_mhs_terminal_type: OBJECT_IDENTIFIER = ObjectIdentifier.fromParts([29], id_at_mhs_routing);

export
function distinguishedTypeToFriendlyString(attributeType: OBJECT_IDENTIFIER, ldapStrict: boolean = false): string | null {
    const attr_type_bytes = attributeType.toBytesUnsafe();

    // Every short name below ends in a single-byte arc (< 128), so a matching
    // content length means the final octet is that arc.
    // TODO: Use ObjectIdentifier.isPrefixOf() when released
    if (attr_type_bytes.length === 3) {
        if (Buffer.compare(attr_type_bytes.subarray(0, 2), id_at.toBytesUnsafe()) !== 0) {
            return null;
        }
        switch (attr_type_bytes[2]) {
            case 6: return "c";
            case 9: return "street";
            case 10: return "o";
            case 11: return "ou";
            case 46: return "dnQualifier";
            case 8: return "st";
            case 3: return "cn";
            case 5: return "serialNumber";
            case 7: return "l";
            case 12: return "title";
            case 17: return "postalCode";
            case 18: return "postOfficeBox";
            case 20: return "telephoneNumber";
            case 4: return "sn";
            case 42: return "gn";
            case 43: return "initials";
            case 65: return "pseudonym";
            case 44: return "generationQualifier";
            case 51: return "houseIdentifier";
            case 54: return "dmdName";
            case 105: return "jid";
            case 26: return "registeredAddress";
            case 16: return "postalAddress";
            // These are not registered in the IANA registry for LDAP, so a
            // strict LDAP encoding treats them as unrecognized.
            case 89:  return ldapStrict ? null : "urnC";
            case 97:  return ldapStrict ? null : "organizationIdentifier";
            case 98:  return ldapStrict ? null : "c3";
            case 99:  return ldapStrict ? null : "n3";
            case 100: return ldapStrict ? null : "dnsName";
            case 104: return ldapStrict ? null : "intEmail";
            case 106: return ldapStrict ? null : "objectIdentifier";
            default:
                return null;
        }
    }

    // COSINE / pilot attribute types: 0.9.2342.19200300.100.1.<arc>
    if (attr_type_bytes.length === 10) {
        const prefix = id_pilotAttributeType.toBytesUnsafe();
        if (Buffer.compare(attr_type_bytes.subarray(0, prefix.length), prefix) !== 0) {
            return null;
        }
        switch (attr_type_bytes[prefix.length]) {
            case 25: return "dc";
            case 1: return "uid";
            case 3: return "mail";
            case 6: return "roomNumber";
            case 11: return "documentIdentifier";
            case 20: return "homePhone";
            case 41: return "mobile";
            case 42: return "pager";
            case 44: return "uniqueIdentifier";
            case 48: return "buildingName";
            default:
                return null;
        }
    }

    // ITU-T X.412 (1999) OR-address-subtree name-form attributes: 2.6.10.3.<arc>
    if (!ldapStrict && attr_type_bytes.length === 4) {
        const prefix = id_at_mhs_routing.toBytesUnsafe();
        if (Buffer.compare(attr_type_bytes.subarray(0, prefix.length), prefix) === 0) {
            switch (attr_type_bytes[prefix.length]) {
                case 9: return "mHSADMDName";
                case 10: return "mHSCommonNameAttribute";
                case 11: return "mHSCountryName";
                case 13: return "mHSExtendedNetworkAddressAttribute";
                case 14: return "mHSGenerationQualifierAttribute";
                case 15: return "mHSGivenNameAttribute";
                case 16: return "mHSInitialsAttribute";
                case 18: return "mHSNetworkAddressAttribute";
                case 20: return "mHSNumericUserIdentifierAttribute";
                case 21: return "mHSOrganizationName";
                case 22: return "mHSOrganizationalUnitName";
                case 23: return "mHSPDSNameAttribute";
                case 24: return "mHSPostalCodeAttribute";
                case 25: return "mHSPRMDName";
                case 27: return "mHSSurnameAttribute";
                case 28: return "mHSTerminalIdentifierAttribute";
                case 29: return "mHSTerminalTypeAttribute";
                default:
                    return null;
            }
        }
    }

    if (
        (attr_type_bytes.length === 9)
        && (Buffer.compare(attr_type_bytes, id_emailAddress.toBytesUnsafe()) === 0)
    ) {
        return "emailAddress";
    }

    if (
        !ldapStrict
        && (attr_type_bytes.length === 4)
        && (Buffer.compare(attr_type_bytes, id_oidC.toBytesUnsafe()) === 0)
    ) {
        return "oidC";
    }

    return null;
}

export default distinguishedTypeToFriendlyString;
