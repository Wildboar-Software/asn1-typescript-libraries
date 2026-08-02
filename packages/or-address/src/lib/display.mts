import { make_string_safe } from "./utils.mjs";
import {
    ORAddress,
    teletex_common_name,
    CountryName,
    PersonalName,
    TerminalType,
    TerminalType_g3_facsimile,
    TerminalType_g4_facsimile,
    TerminalType_ia5_terminal,
    TerminalType_teletex,
    TerminalType_telex,
    TerminalType_videotex,
    AdministrationDomainName,
    PrivateDomainName,
    _decode_BuiltInDomainDefinedAttributes,
    _encode_BuiltInDomainDefinedAttributes,
    _decode_BuiltInStandardAttributes,
    _encode_BuiltInStandardAttributes,
    _decode_ExtensionAttributes,
    _encode_ExtensionAttributes,
    teletex_personal_name,
    _decode_TeletexPersonalName,
    universal_personal_name,
    _decode_UniversalPersonalName,
    teletex_organization_name,
    universal_organization_name,
    teletex_organizational_unit_names,
    universal_organizational_unit_names,
    common_name,
    universal_common_name,
    extended_network_address,
    terminal_type,
    teletex_domain_defined_attributes,
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
    PhysicalDeliveryCountryName,
} from "./modules/PkiPmiExternalDataTypes/index.mjs";
import { isAscii } from "node:buffer";
import { teletexToString } from "@wildboar/teletex";
import { x121_dcc_country_code_to_iso_3166 } from "./country.mjs";
import { escape_oraddress_attribute_value } from "./utils.mjs";

const DELIMITER = ';'.charCodeAt(0);

export function print_teletex(ts: Buffer, delim: number): string {
    if (isAscii(ts)) { // Avoid allocation if no diacritics are used.
        return make_string_safe(ts.toString("ascii"), delim);
    } else {
        const s = teletexToString(ts);
        return make_string_safe(s, delim);
    }
}

export function term_type_to_str(tt: number): string {
    switch (tt) {
        case (TerminalType_g3_facsimile): return "g3fax";
        case (TerminalType_g4_facsimile): return "g4fax";
        case (TerminalType_ia5_terminal): return "ia5";
        case (TerminalType_teletex): return "ttx";
        case (TerminalType_telex): return "tlx";
        case (TerminalType_videotex): return "vtx";
        default: return "?";
    }
}

export function term_type_from_str(tt: string): TerminalType | undefined {
    switch (tt) {
        case "g3fax": return TerminalType_g3_facsimile;
        case "g4fax": return TerminalType_g4_facsimile;
        case "ia5": return TerminalType_ia5_terminal;
        case "ttx": return TerminalType_teletex;
        case "tlx": return TerminalType_telex;
        case "vtx": return TerminalType_videotex;
        default: return undefined;
    }
}

export function displayAdmininistrationDomainName(adm: AdministrationDomainName, delim: number): string {
    if ("numeric" in adm) {
        return "A=" + make_string_safe(adm.numeric, delim);
    } else {
        return "A=" + make_string_safe(adm.printable, delim);
    }
}

export function displayCountryNameValue(country: CountryName | PhysicalDeliveryCountryName): string {
    if ("x121_dcc_code" in country) {
        const dcc = Number.parseInt(country.x121_dcc_code, 10);
        const iso: string | undefined = x121_dcc_country_code_to_iso_3166(dcc);
        return iso ?? country.x121_dcc_code;
    // TODO: Refactor the semi-colon to be a static constant?
    } else if (!/[A-Z]{2}/.test(country.iso_3166_alpha2_code)) {
        return country.iso_3166_alpha2_code;
    } else {
        return "C=?";
    }
}

export function displayCountryName(country: CountryName | PhysicalDeliveryCountryName): string {
    return `C=${displayCountryNameValue(country)}`;
}

export function displayDomainNameValue(dn: AdministrationDomainName | PrivateDomainName): string {
    if ("numeric" in dn) {
        return dn.numeric;
    } else if (!dn.printable.includes(';')) {
        return dn.printable;
    } else { // PrintableString is not allowed to contain a semicolon.
        return "?";
    }
}

export function displayORAddressComponents(address: ORAddress): string[] {
    const components: string[] = [];
    /* The the README.md. We give preference to the printable syntax, per
    the recommendation of IETF RFC 1685, Section 7.3.1. */
    let personal_name: PersonalName | undefined = address
        .built_in_standard_attributes
        ?.personal_name;
    let org_name: string | undefined = address.built_in_standard_attributes?.organization_name;
    let ou_names: string[] | undefined = address.built_in_standard_attributes?.organizational_unit_names;
    let printable_common_name: string | undefined = undefined;
    let unprintable_common_name: string | undefined = undefined;
    let isdn: string | undefined = undefined;
    let psap: string | undefined = undefined;
    let termtype: string | undefined = undefined;

    let pd_sn: string | undefined;
    let pd_c: string | undefined;
    let pd_pc: string | undefined;

    let non_univ_pd_pn: string | undefined;
    let non_univ_pd_ea: string | undefined;
    let non_univ_pd_ed: string | undefined;
    let non_univ_pd_ofn: string | undefined;
    let non_univ_pd_of: string | undefined;
    let non_univ_pd_o: string | undefined;
    let non_univ_pd_s: string | undefined;
    let non_univ_pd_a: string[] | undefined;
    let non_univ_pd_u: string | undefined;
    let non_univ_pd_l: string | undefined;
    let non_univ_pd_r: string | undefined;
    let non_univ_pd_b: string | undefined;

    let univ_pd_pn: string | undefined;
    let univ_pd_ea: string | undefined;
    let univ_pd_ed: string | undefined;
    let univ_pd_ofn: string | undefined;
    let univ_pd_of: string | undefined;
    let univ_pd_o: string | undefined;
    let univ_pd_s: string | undefined;
    let univ_pd_a: string[] | undefined;
    let univ_pd_u: string | undefined;
    let univ_pd_l: string | undefined;
    let univ_pd_r: string | undefined;
    let univ_pd_b: string | undefined;

    const non_univ_dda: Map<string, string> = new Map(
        address.built_in_domain_defined_attributes
            ?.map((dda) => [dda.type_, dda.value]),
    );
    const univ_dda: Map<string, string> = new Map();

    const extensions = address.extension_attributes ?? [];
    for (const ext of extensions) {
        const ext_type = ext.extension_attribute_type;
        const ext_value = ext.extension_attribute_value;
        try {
            switch (ext_type) {
                case teletex_personal_name["&id"]:
                    const tpn = teletex_personal_name.decoderFor["&Type"]!(ext_value);
                    // This is a hack. We're relying on the fact that
                    // PersonalName does not validate the strings to be PrintableString.
                    personal_name ??= new PersonalName(
                        teletexToString(tpn.surname),
                        tpn.given_name && teletexToString(tpn.given_name),
                        tpn.initials && teletexToString(tpn.initials),
                        tpn.generation_qualifier && teletexToString(tpn.generation_qualifier),
                    );
                    break;
                case universal_personal_name["&id"]:
                    const upn = universal_personal_name.decoderFor["&Type"]!(ext_value);
                    // This is a hack. We're relying on the fact that
                    // PersonalName does not validate the strings to be PrintableString.
                    personal_name ??= new PersonalName(
                        upn.surname.toString(),
                        upn.given_name?.toString(),
                        upn.initials?.toString(),
                        upn.generation_qualifier?.toString(),
                    );
                    break;
                case teletex_organization_name["&id"]:
                    const ton = teletex_organization_name.decoderFor["&Type"]!(ext_value);
                    org_name ??= teletexToString(ton);
                    break;
                case universal_organization_name["&id"]:
                    const uon = universal_organization_name.decoderFor["&Type"]!(ext_value);
                    org_name ??= uon.toString();
                    break;
                case teletex_organizational_unit_names["&id"]:
                    const toun = teletex_organizational_unit_names.decoderFor["&Type"]!(ext_value);
                    ou_names ??= toun.map((toun) => teletexToString(toun));
                    break;
                case universal_organizational_unit_names["&id"]:
                    const uoun = universal_organizational_unit_names.decoderFor["&Type"]!(ext_value);
                    ou_names ??= uoun.map((uoun) => uoun.toString());
                    break;
                case common_name["&id"]:
                    const cn = common_name.decoderFor["&Type"]!(ext_value);
                    printable_common_name ??= cn;
                    break;
                case teletex_common_name["&id"]:
                    const tcn = teletex_common_name.decoderFor["&Type"]!(ext_value);
                    unprintable_common_name ??= teletexToString(tcn);
                    break;
                case universal_common_name["&id"]:
                    const ucn = universal_common_name.decoderFor["&Type"]!(ext_value);
                    unprintable_common_name ??= ucn.toString();
                    break;
                case extended_network_address["&id"]:
                    const ena = extended_network_address.decoderFor["&Type"]!(ext_value);
                    if ("e163_4_address" in ena) {
                        isdn ??= ena.e163_4_address.toString();
                    } else if ("psap_address" in ena) {
                        psap ??= ena.psap_address.toString();
                    }
                    break;
                case terminal_type["&id"]:
                    const tt = terminal_type.decoderFor["&Type"]!(ext_value);
                    termtype ??= term_type_to_str(Number(tt));
                    break;

                case teletex_domain_defined_attributes["&id"]: {
                    const attributes = teletex_domain_defined_attributes.decoderFor["&Type"]!(ext_value);
                    for (const attr of attributes) {
                        const key = teletexToString(attr.type_);
                        const value = teletexToString(attr.value);
                        univ_dda.set(key, value);
                    }
                    break;
                }
                case universal_domain_defined_attributes["&id"]: {
                    const attributes = universal_domain_defined_attributes.decoderFor["&Type"]!(ext_value);
                    for (const attr of attributes) {
                        const key = attr.type_.toString();
                        const value = attr.value.toString();
                        univ_dda.set(key, value);
                    }
                    break;
                }
                case pds_name["&id"]: {
                    const decoded = pds_name.decoderFor["&Type"]!(ext_value);
                    pd_sn ??= decoded.replaceAll(";", ";;");
                    break;
                }
                case physical_delivery_country_name["&id"]: {
                    const decoded = physical_delivery_country_name.decoderFor["&Type"]!(ext_value);
                    pd_c ??= displayCountryNameValue(decoded);
                    break;
                }
                case postal_code["&id"]: {
                    const decoded = postal_code.decoderFor["&Type"]!(ext_value);
                    if ("numeric_code" in decoded) {
                        pd_pc ??= decoded.numeric_code;
                    } else if (!decoded.printable_code.includes(';')) {
                        pd_pc ??= decoded.printable_code;
                    }
                    break;
                }
                case physical_delivery_office_name["&id"]: {
                    const decoded = physical_delivery_office_name.decoderFor["&Type"]!(ext_value);
                    non_univ_pd_of ??= decoded.toString();
                    break;
                }
                case universal_physical_delivery_office_name["&id"]: {
                    const decoded = universal_physical_delivery_office_name.decoderFor["&Type"]!(ext_value);
                    univ_pd_of ??= decoded.toString();
                    break;
                }
                case physical_delivery_office_number["&id"]: {
                    const decoded = physical_delivery_office_number.decoderFor["&Type"]!(ext_value);
                    non_univ_pd_ofn ??= decoded.toString();
                    break;
                }
                case universal_physical_delivery_office_number["&id"]: {
                    const decoded = universal_physical_delivery_office_number.decoderFor["&Type"]!(ext_value);
                    univ_pd_ofn ??= decoded.toString();
                    break;
                }
                case extension_OR_address_components["&id"]: {
                    const decoded = extension_OR_address_components.decoderFor["&Type"]!(ext_value);
                    non_univ_pd_ea ??= decoded.toString();
                    break;
                }
                case universal_extension_OR_address_components["&id"]: {
                    const decoded = universal_extension_OR_address_components.decoderFor["&Type"]!(ext_value);
                    univ_pd_ea ??= decoded.toString();
                    break;
                }
                case physical_delivery_personal_name["&id"]: {
                    const decoded = physical_delivery_personal_name.decoderFor["&Type"]!(ext_value);
                    non_univ_pd_pn ??= decoded.toString();
                    break;
                }
                case universal_physical_delivery_personal_name["&id"]: {
                    const decoded = universal_physical_delivery_personal_name.decoderFor["&Type"]!(ext_value);
                    univ_pd_pn ??= decoded.toString();
                    break;
                }
                case physical_delivery_organization_name["&id"]: {
                    const decoded = physical_delivery_organization_name.decoderFor["&Type"]!(ext_value);
                    non_univ_pd_o ??= decoded.toString();
                    break;
                }
                case universal_physical_delivery_organization_name["&id"]: {
                    const decoded = universal_physical_delivery_organization_name.decoderFor["&Type"]!(ext_value);
                    univ_pd_o ??= decoded.toString();
                    break;
                }
                case extension_physical_delivery_address_components["&id"]: {
                    const decoded = extension_physical_delivery_address_components.decoderFor["&Type"]!(ext_value);
                    non_univ_pd_ed ??= decoded.toString();
                    break;
                }
                case universal_extension_physical_delivery_address_components["&id"]: {
                    const decoded = universal_extension_physical_delivery_address_components.decoderFor["&Type"]!(ext_value);
                    univ_pd_ed ??= decoded.toString();
                    break;
                }
                case unformatted_postal_address["&id"]: {
                    const decoded = unformatted_postal_address.decoderFor["&Type"]!(ext_value);
                    non_univ_pd_a ??= decoded.toLines();
                    break;
                }
                case universal_unformatted_postal_address["&id"]: {
                    const decoded = universal_unformatted_postal_address.decoderFor["&Type"]!(ext_value);
                    univ_pd_a ??= decoded.toString().split(/\r?\n/);
                    break;
                }
                case street_address["&id"]: {
                    const decoded = street_address.decoderFor["&Type"]!(ext_value);
                    non_univ_pd_s ??= decoded.toString();
                    break;
                }
                case universal_street_address["&id"]: {
                    const decoded = universal_street_address.decoderFor["&Type"]!(ext_value);
                    univ_pd_s ??= decoded.toString();
                    break;
                }
                case post_office_box_address["&id"]: {
                    const decoded = post_office_box_address.decoderFor["&Type"]!(ext_value);
                    non_univ_pd_b ??= decoded.toString();
                    break;
                }
                case universal_post_office_box_address["&id"]: {
                    const decoded = universal_post_office_box_address.decoderFor["&Type"]!(ext_value);
                    univ_pd_b ??= decoded.toString();
                    break;
                }
                case poste_restante_address["&id"]: {
                    const decoded = poste_restante_address.decoderFor["&Type"]!(ext_value);
                    non_univ_pd_r ??= decoded.toString();
                    break;
                }
                case universal_poste_restante_address["&id"]: {
                    const decoded = universal_poste_restante_address.decoderFor["&Type"]!(ext_value);
                    univ_pd_r ??= decoded.toString();
                    break;
                }
                case unique_postal_name["&id"]: {
                    const decoded = unique_postal_name.decoderFor["&Type"]!(ext_value);
                    non_univ_pd_u ??= decoded.toString();
                    break;
                }
                case universal_unique_postal_name["&id"]: {
                    const decoded = universal_unique_postal_name.decoderFor["&Type"]!(ext_value);
                    univ_pd_u ??= decoded.toString();
                    break;
                }
                case local_postal_attributes["&id"]: {
                    const decoded = local_postal_attributes.decoderFor["&Type"]!(ext_value);
                    non_univ_pd_l ??= decoded.toString();
                    break;
                }
                case universal_local_postal_attributes["&id"]: {
                    const decoded = universal_local_postal_attributes.decoderFor["&Type"]!(ext_value);
                    univ_pd_l ??= decoded.toString();
                    break;
                }
                default:
                    break;
            }
        } catch (error) {
            continue;
        }
    }
    const cn = printable_common_name ?? unprintable_common_name;
    if (cn) {
        components.push("CN=" + escape_oraddress_attribute_value(cn, DELIMITER));
    }
    if (personal_name) {
        components.push(personal_name.toString());
    }
    if (isdn) {
        components.push("ISDN=" + isdn); // This shouldn't contain semicolons.
    }
    if (psap) {
        components.push("PSAP=" + escape_oraddress_attribute_value(psap, DELIMITER));
    }
    if (address.built_in_standard_attributes?.numeric_user_identifier) {
        const nid = address.built_in_standard_attributes.numeric_user_identifier;
        components.push("N-ID=" + nid);
    }
    if (address.built_in_standard_attributes?.terminal_identifier) {
        const tid = address.built_in_standard_attributes.terminal_identifier;
        if (!tid.includes(';')) {
            components.push("T-ID=" + tid);
        } else { // PrintableString is not allowed to contain a semicolon.
            components.push("T-ID=?");
        }
    }
    if (termtype) {
        components.push("T-TY=" + termtype);
    }
    if (address.built_in_standard_attributes?.network_address) {
        const na = address.built_in_standard_attributes.network_address;
        components.push("X.121=" + na);
    }
    if (org_name) {
        if (!org_name.includes(';')) {
            components.push("O=" + org_name);
        } else {
            components.push("O=?");
        }
    }
    if (ou_names) {
        for (const [i, ou] of ou_names.entries()) {
            if (ou.includes(';')) {
                components.push(`OU${i + 1}=?`);
                continue;
            }
            components.push(`OU${i + 1}=${escape_oraddress_attribute_value(ou, DELIMITER)}`);
        }
    }
    if (address.built_in_standard_attributes?.private_domain_name) {
        const domain = address.built_in_standard_attributes.private_domain_name;
        components.push("P=" + displayDomainNameValue(domain));
    }
    if (address.built_in_standard_attributes?.administration_domain_name) {
        const domain = address.built_in_standard_attributes.administration_domain_name;
        components.push("A=" + displayDomainNameValue(domain));
    }
    if (address.built_in_standard_attributes?.country_name) {
        const c = address.built_in_standard_attributes.country_name;
        components.push(displayCountryName(c));
    }
    const pd_pn = non_univ_pd_pn ?? univ_pd_pn;
    const pd_ea = non_univ_pd_ea ?? univ_pd_ea;
    const pd_ed = non_univ_pd_ed ?? univ_pd_ed;
    const pd_ofn = non_univ_pd_ofn ?? univ_pd_ofn;
    const pd_of = non_univ_pd_of ?? univ_pd_of;
    const pd_o = non_univ_pd_o ?? univ_pd_o;
    const pd_s = non_univ_pd_s ?? univ_pd_s;
    const pd_a = non_univ_pd_a ?? univ_pd_a;
    const pd_u = non_univ_pd_u ?? univ_pd_u;
    const pd_l = non_univ_pd_l ?? univ_pd_l;
    const pd_r = non_univ_pd_r ?? univ_pd_r;
    const pd_b = non_univ_pd_b ?? univ_pd_b;

    if (pd_pn) {
        components.push("PD-PN=" + escape_oraddress_attribute_value(pd_pn, DELIMITER));
    }
    if (pd_o) {
        components.push("PD-O=" + escape_oraddress_attribute_value(pd_o, DELIMITER));
    }
    if (pd_a) {
        for (const [i, line] of pd_a.entries()) {
            components.push(`PD-A${i + 1}=${escape_oraddress_attribute_value(line, DELIMITER)}`);
        }
    }
    if (pd_s) {
        components.push("PD-S=" + escape_oraddress_attribute_value(pd_s, DELIMITER));
    }
    if (pd_b) {
        components.push("PD-B=" + escape_oraddress_attribute_value(pd_b, DELIMITER));
    }
    if (pd_ofn) {
        components.push("PD-OFN=" + escape_oraddress_attribute_value(pd_ofn, DELIMITER));
    }
    if (pd_of) {
        components.push("PD-OF=" + escape_oraddress_attribute_value(pd_of, DELIMITER));
    }
    if (pd_c) {
        components.push("PD-C=" + pd_c);
    }
    if (pd_pc) {
        components.push("PD-PC=" + pd_pc);
    }
    if (pd_r) {
        components.push("PD-R=" + escape_oraddress_attribute_value(pd_r, DELIMITER));
    }
    if (pd_u) {
        components.push("PD-U=" + escape_oraddress_attribute_value(pd_u, DELIMITER));
    }
    if (pd_l) {
        components.push("PD-L=" + escape_oraddress_attribute_value(pd_l, DELIMITER));
    }
    if (pd_ea) {
        components.push("PD-EA=" + escape_oraddress_attribute_value(pd_ea, DELIMITER));
    }
    if (pd_ed) {
        components.push("PD-ED=" + escape_oraddress_attribute_value(pd_ed, DELIMITER));
    }
    if (pd_sn) {
        components.push("PD-SN=" + pd_sn);
    }
    for (const [unescaped_key, value] of non_univ_dda.entries()) {
        const key = unescaped_key.replaceAll("=", "==");
        components.push(`DDA:${key}=${escape_oraddress_attribute_value(value, DELIMITER)}`);
    }
    for (const [unescaped_key, value] of univ_dda.entries()) {
        if (non_univ_dda.has(unescaped_key)) {
            continue;
        }
        const key = unescaped_key.replaceAll("=", "==");
        components.push(`DDA:${key}=${escape_oraddress_attribute_value(value, DELIMITER)}`);
    }
    return components;
}

// TODO: impl Display for TeletexPersonalName
// TODO: impl Display for UniversalPersonalName
// TODO: impl Display for BuiltInDomainDefinedAttribute
// TODO: impl Display for TeletexDomainDefinedAttribute
// TODO: impl Display for UniversalDomainDefinedAttribute\
