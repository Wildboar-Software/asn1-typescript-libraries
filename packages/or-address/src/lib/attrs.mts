/**
 * Flatten an `ORAddress` into the printable / teletex / universal attributes
 * used for RFC 1685 / RFC 2156 display (ITU-T X.402 (1999), §18.2–§18.4).
 *
 * When both printable and teletex/universal encodings exist, display code
 * prefers PrintableString, then Teletex, then Universal — matching the
 * downgrade guidance in X.402 §18.2 NOTE 2 / X.419 Annex B.
 */
import type { ORAddressAttributes } from "./types.mjs";
import {
    ORAddress,
    _decode_BuiltInDomainDefinedAttributes,
    _encode_BuiltInDomainDefinedAttributes,
    _decode_BuiltInStandardAttributes,
    _encode_BuiltInStandardAttributes,
    _decode_ExtensionAttributes,
    _encode_ExtensionAttributes,
    _decode_TeletexPersonalName,
    universal_personal_name,
    _decode_UniversalPersonalName,
    universal_organization_name,
    universal_organizational_unit_names,
    common_name,
    universal_common_name,
    extended_network_address,
    terminal_type,
    universal_domain_defined_attributes,
    pds_name,
    physical_delivery_country_name,
    postal_code,
    physical_delivery_office_name,
    universal_physical_delivery_office_name,
    physical_delivery_office_number,
    universal_physical_delivery_office_number,
    extension_OR_address_components,
    universal_extension_OR_address_components,
    physical_delivery_personal_name,
    universal_physical_delivery_personal_name,
    physical_delivery_organization_name,
    universal_physical_delivery_organization_name,
    extension_physical_delivery_address_components,
    universal_extension_physical_delivery_address_components,
    unformatted_postal_address,
    universal_unformatted_postal_address,
    street_address,
    universal_street_address,
    post_office_box_address,
    universal_post_office_box_address,
    poste_restante_address,
    universal_poste_restante_address,
    unique_postal_name,
    universal_unique_postal_name,
    local_postal_attributes,
    universal_local_postal_attributes,
    teletex_organizational_unit_names,
    teletex_common_name,
    teletex_domain_defined_attributes,
    teletex_organization_name,
    teletex_personal_name,
} from "./modules/PkiPmiExternalDataTypes/index.mjs";
import teletexToString from "@wildboar/teletex";

export function orAddressToAttributes(orAddress: ORAddress): ORAddressAttributes {
    const ret: ORAddressAttributes = {
        organization_name: [],
        personal_name: [],
        organizational_unit_names: [],
        common_names: [],
        pds_names: [],
        pd_countries: [],
        postal_codes: [],
        pd_office_names: [],
        pd_office_numbers: [],
        pd_organization_names: [],
        extension_or_address_components: [],
        pd_personal_names: [],
        extension_pd_address_components: [],
        unformatted_postal_addresses: [],
        street_addresses: [],
        po_boxes: [],
        poste_restantes: [],
        unique_postal_names: [],
        local_postal_attributes: [],
        isdn_addresses: [],
        psap_addresses: [],
        terminal_types: [],
        domain_defined_attributes: [],
    };
    const bisa = orAddress.built_in_standard_attributes;
    if (bisa.country_name) {
        if ("iso_3166_alpha2_code" in bisa.country_name) {
            ret.country = bisa.country_name.iso_3166_alpha2_code;
        } else {
            ret.country = bisa.country_name.x121_dcc_code;
        }
    }
    if (bisa.administration_domain_name) {
        if ("printable" in bisa.administration_domain_name) {
            ret.administration_domain_name = bisa.administration_domain_name.printable;
        } else {
            ret.administration_domain_name = bisa.administration_domain_name.numeric;
        }
    }
    ret.network_address = bisa.network_address;
    ret.terminal_identifier = bisa.terminal_identifier;
    if (bisa.private_domain_name) {
        if ("numeric" in bisa.private_domain_name) {
            ret.private_domain_name = bisa.private_domain_name.numeric;
        } else {
            ret.private_domain_name = bisa.private_domain_name.printable;
        }
    }
    if (bisa.organization_name) {
        ret.organization_name.push(bisa.organization_name);
    }
    ret.numeric_user_identifier = bisa.numeric_user_identifier;
    if (bisa.personal_name) {
        ret.personal_name.push(bisa.personal_name.toJSON());
    }
    if (bisa.organizational_unit_names) {
        ret.organizational_unit_names.push(bisa.organizational_unit_names);
    }
    if (orAddress.built_in_domain_defined_attributes) {
        ret.domain_defined_attributes.push(
            ...orAddress
                .built_in_domain_defined_attributes
                .map(dda => dda.toJSON()),
        );
    }
    const exts = orAddress.extension_attributes ?? [];
    for (const ext of exts) {
        const value = ext.extension_attribute_value;
        switch (ext.extension_attribute_type) {
            case (common_name["&id"]): {
                const decoded = common_name.decoderFor["&Type"]!(value);
                ret.common_names.push(decoded);
                break;
            }
            case (teletex_common_name["&id"]): {
                const decoded = teletex_common_name.decoderFor["&Type"]!(value);
                ret.common_names.push(teletexToString(decoded));
                break;
            }
            case (universal_common_name["&id"]): {
                const decoded = universal_common_name.decoderFor["&Type"]!(value);
                ret.common_names.push(decoded.toString());
                break;
            }
            case (teletex_organization_name["&id"]): {
                const decoded = teletex_organization_name.decoderFor["&Type"]!(value);
                ret.organization_name.push(teletexToString(decoded));
                break;
            }
            case (universal_organization_name["&id"]): {
                const decoded = universal_organization_name.decoderFor["&Type"]!(value);
                ret.organization_name.push(decoded.toString());
                break;
            }
            case (teletex_personal_name["&id"]): {
                const decoded = teletex_personal_name.decoderFor["&Type"]!(value);
                ret.personal_name.push(decoded.toJSON());
                break;
            }
            case (universal_personal_name["&id"]): {
                const decoded = universal_personal_name.decoderFor["&Type"]!(value);
                ret.personal_name.push(decoded.toJSON());
                break;
            }
            case (teletex_organizational_unit_names["&id"]): {
                const decoded = teletex_organizational_unit_names.decoderFor["&Type"]!(value);
                const strings = decoded.map(s => teletexToString(s));
                ret.organizational_unit_names.push(strings);
                break;
            }
            case (universal_organizational_unit_names["&id"]): {
                const decoded = universal_organizational_unit_names.decoderFor["&Type"]!(value);
                const strings = decoded.map(s => s.toString());
                ret.organizational_unit_names.push(strings);
                break;
            }
            case (teletex_domain_defined_attributes["&id"]): {
                const decoded = teletex_domain_defined_attributes.decoderFor["&Type"]!(value);
                const jsons = decoded.map((dda) => dda.toJSON());
                ret.domain_defined_attributes.push(...jsons);
                break;
            }
            case (universal_domain_defined_attributes["&id"]): {
                const decoded = universal_domain_defined_attributes.decoderFor["&Type"]!(value);
                const jsons = decoded.map((dda) => dda.toJSON());
                ret.domain_defined_attributes.push(...jsons);
                break;
            }
            case (pds_name["&id"]): {
                const decoded = pds_name.decoderFor["&Type"]!(value);
                ret.pds_names.push(decoded);
                break;
            }
            case (physical_delivery_country_name["&id"]): {
                const decoded = physical_delivery_country_name.decoderFor["&Type"]!(value);
                if ("iso_3166_alpha2_code" in decoded) {
                    ret.pd_countries.push(decoded.iso_3166_alpha2_code);
                } else {
                    ret.pd_countries.push(decoded.x121_dcc_code);
                }
                break;
            }
            case (postal_code["&id"]): {
                const decoded = postal_code.decoderFor["&Type"]!(value);
                if ("numeric_code" in decoded) {
                    ret.postal_codes.push(decoded.numeric_code);
                } else {
                    ret.postal_codes.push(decoded.printable_code);
                }
                break;
            }
            case (physical_delivery_office_name["&id"]): {
                const decoded = physical_delivery_office_name.decoderFor["&Type"]!(value);
                ret.pd_office_names.push(decoded.toString());
                break;
            }
            case (universal_physical_delivery_office_name["&id"]): {
                const decoded = universal_physical_delivery_office_name.decoderFor["&Type"]!(value);
                ret.pd_office_names.push(decoded.toString());
                break;
            }
            case (physical_delivery_office_number["&id"]): {
                const decoded = physical_delivery_office_number.decoderFor["&Type"]!(value);
                ret.pd_office_numbers.push(decoded.toString());
                break;
            }
            case (universal_physical_delivery_office_number["&id"]): {
                const decoded = universal_physical_delivery_office_number.decoderFor["&Type"]!(value);
                ret.pd_office_numbers.push(decoded.toString());
                break;
            }
            case (extension_OR_address_components["&id"]): {
                const decoded = extension_OR_address_components.decoderFor["&Type"]!(value);
                ret.extension_or_address_components.push(decoded.toString());
                break;
            }
            case (universal_extension_OR_address_components["&id"]): {
                const decoded = universal_extension_OR_address_components.decoderFor["&Type"]!(value);
                ret.extension_or_address_components.push(decoded.toString());
                break;
            }
            case (physical_delivery_personal_name["&id"]): {
                const decoded = physical_delivery_personal_name.decoderFor["&Type"]!(value);
                ret.pd_personal_names.push(decoded.toString());
                break;
            }
            case (universal_physical_delivery_personal_name["&id"]): {
                const decoded = universal_physical_delivery_personal_name.decoderFor["&Type"]!(value);
                ret.pd_personal_names.push(decoded.toString());
                break;
            }
            case (physical_delivery_organization_name["&id"]): {
                const decoded = physical_delivery_organization_name.decoderFor["&Type"]!(value);
                ret.pd_organization_names.push(decoded.toString());
                break;
            }
            case (universal_physical_delivery_organization_name["&id"]): {
                const decoded = universal_physical_delivery_organization_name.decoderFor["&Type"]!(value);
                ret.pd_organization_names.push(decoded.toString());
                break;
            }
            case (extension_physical_delivery_address_components["&id"]): {
                const decoded = extension_physical_delivery_address_components.decoderFor["&Type"]!(value);
                ret.extension_pd_address_components.push(decoded.toString());
                break;
            }
            case (universal_extension_physical_delivery_address_components["&id"]): {
                const decoded = universal_extension_physical_delivery_address_components.decoderFor["&Type"]!(value);
                ret.extension_pd_address_components.push(decoded.toString());
                break;
            }
            case (unformatted_postal_address["&id"]): {
                const decoded = unformatted_postal_address.decoderFor["&Type"]!(value);
                ret.unformatted_postal_addresses.push(decoded.toLines());
                break;
            }
            case (universal_unformatted_postal_address["&id"]): {
                const decoded = universal_unformatted_postal_address.decoderFor["&Type"]!(value);
                ret.unformatted_postal_addresses.push(decoded.toString().split(/\r?\n/));
                break;
            }
            case (street_address["&id"]): {
                const decoded = street_address.decoderFor["&Type"]!(value);
                ret.street_addresses.push(decoded.toString());
                break;
            }
            case (universal_street_address["&id"]): {
                const decoded = universal_street_address.decoderFor["&Type"]!(value);
                ret.street_addresses.push(decoded.toString());
                break;
            }
            case (post_office_box_address["&id"]): {
                const decoded = post_office_box_address.decoderFor["&Type"]!(value);
                ret.po_boxes.push(decoded.toString());
                break;
            }
            case (universal_post_office_box_address["&id"]): {
                const decoded = universal_post_office_box_address.decoderFor["&Type"]!(value);
                ret.po_boxes.push(decoded.toString());
                break;
            }
            case (poste_restante_address["&id"]): {
                const decoded = poste_restante_address.decoderFor["&Type"]!(value);
                ret.poste_restantes.push(decoded.toString());
                break;
            }
            case (universal_poste_restante_address["&id"]): {
                const decoded = universal_poste_restante_address.decoderFor["&Type"]!(value);
                ret.poste_restantes.push(decoded.toString());
                break;
            }
            case (unique_postal_name["&id"]): {
                const decoded = unique_postal_name.decoderFor["&Type"]!(value);
                ret.unique_postal_names.push(decoded.toString());
                break;
            }
            case (universal_unique_postal_name["&id"]): {
                const decoded = universal_unique_postal_name.decoderFor["&Type"]!(value);
                ret.unique_postal_names.push(decoded.toString());
                break;
            }
            case (local_postal_attributes["&id"]): {
                const decoded = local_postal_attributes.decoderFor["&Type"]!(value);
                ret.local_postal_attributes.push(decoded.toString());
                break;
            }
            case (universal_local_postal_attributes["&id"]): {
                const decoded = universal_local_postal_attributes.decoderFor["&Type"]!(value);
                ret.local_postal_attributes.push(decoded.toString());
                break;
            }
            case (extended_network_address["&id"]): {
                const decoded = extended_network_address.decoderFor["&Type"]!(value);
                if ("e163_4_address" in decoded) {
                    ret.isdn_addresses.push(decoded.e163_4_address.toJSON());
                } else {
                    ret.psap_addresses.push(decoded.psap_address.toJSON());
                }
                break;
            }
            case (terminal_type["&id"]): {
                const decoded = terminal_type.decoderFor["&Type"]!(value);
                if (!Number.isSafeInteger(decoded) || decoded < 0) {
                    throw new Error("Terminal type is not a safe integer");
                }
                ret.terminal_types.push(Number(decoded));
                break;
            }
            default: {
                // TODO: Handle unknown extension attribute types somehow?
                continue;
            }
        }
    }

    return ret;
}
