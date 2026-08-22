import {
    escapeRFC2156StdPrintable,
    escape_oraddress_attribute_value,
    isPrintableString,
    make_string_safe,
} from "./utils.mjs";
import {
    ORAddress,
    BuiltInStandardAttributes,
    teletex_common_name,
    CountryName,
    PersonalName,
    TeletexPersonalName,
    UniversalPersonalName,
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

const DELIMITER = ';'.charCodeAt(0);

export function print_teletex(ts: Buffer, delim: number): string {
    if (isAscii(ts)) { // Avoid allocation if no diacritics are used.
        return make_string_safe(ts.toString("ascii"), delim);
    } else {
        const s = teletexToString(ts);
        return make_string_safe(s, delim);
    }
}

/**
 * @summary Convert a terminal type number to a string.
 * @description
 * 
 * Converts a terminal type number to a string.
 * @param tt The terminal type number to convert.
 * @returns The terminal type string.
 */
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

/**
 * @summary Convert a terminal type string to a number.
 * @description
 * 
 * Converts a terminal type string to a number.
 * @param tt The terminal type string to convert.
 * @returns The terminal type number.
 */
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

/**
 * @summary Convert an O/R address into IETF RFC 1685 `LABEL=value` components.
 * @description
 *
 * Produces the semicolon-delimited display form described in
 * [IETF RFC 1685](https://www.rfc-editor.org/info/rfc1685) section F.3.
 * Printable syntax is preferred over teletex and universal encodings.
 * Join the returned strings with `;` to form the address string.
 *
 * @param address The O/R address to display.
 * @returns RFC 1685 attribute components, without a wrapping delimiter.
 */
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

const ASCII_SPACE = 0x20;
const ASCII_TILDE = 0x7E;
const ASCII_LEFT_BRACE = 0x7B;
const ASCII_RIGHT_BRACE = 0x7D;

/**
 * A printable, teletex, and/or universal encoding of one MIXER P/T attribute.
 */
interface RFC2156PTValue {
    printable?: string;
    teletex?: Uint8Array;
    universal?: string;
}

/**
 * @summary Whether a T.61 octet can be written as itself in a `teletex-string`.
 * @description
 *
 * Non-control ASCII (U+0020 through U+007E) is emitted directly, except `{`
 * and `}` which would start or end a `t61-encoded` run.
 *
 * @param b The T.61 octet.
 * @returns `true` if the octet should be written as an ASCII character.
 */
function isDirectTeletexAsciiByte(b: number): boolean {
    return (
        (b >= ASCII_SPACE)
        && (b <= ASCII_TILDE)
        && (b !== ASCII_LEFT_BRACE)
        && (b !== ASCII_RIGHT_BRACE)
    );
}

/**
 * @summary Encode T.61 octets as an IETF RFC 2156 `teletex-string`.
 * @description
 *
 * Non-control ASCII octets other than `{` and `}` are written as themselves.
 * Every other octet is a three-digit decimal code point. Adjacent unprintable
 * octets share one `{...}` pair, so bytes 12 then 45 become `{012345}`.
 *
 * @param bytes The TeletexString octets.
 * @returns The MIXER `teletex-string`.
 */
export function encodeTeletexString(bytes: Uint8Array): string {
    let out = "";
    let inBraces = false;
    for (const b of bytes) {
        if (isDirectTeletexAsciiByte(b)) {
            if (inBraces) {
                out += "}";
                inBraces = false;
            }
            out += String.fromCharCode(b);
            continue;
        }
        if (!inBraces) {
            out += "{";
            inBraces = true;
        }
        out += b
            .toString(10)
            .padStart(3, "0")
            ;
    }
    if (inBraces) {
        out += "}";
    }
    return out;
}

/**
 * @summary Interpret T.61 octets as PrintableString when every octet allows it.
 *
 * @param bytes The TeletexString octets.
 * @returns The printable string, or `undefined` if any octet is outside PrintableString.
 */
function teletexBytesToPrintableString(bytes: Uint8Array): string | undefined {
    const out = String.fromCharCode(...bytes);
    if (!isPrintableString(out)) {
        return undefined;
    }
    return out;
}

/**
 * @summary Format a MIXER `teletex-and-or-ps` value.
 * @description
 *
 * If only printable is present, or teletex encodes the same PrintableString,
 * the printable form is used. Teletex-only values that are not PrintableString
 * are emitted as `"*" teletex-string`. Differing printable and teletex forms
 * are joined with `*`.
 *
 * @param printable The PrintableString form, if any.
 * @param teletex The TeletexString octets, if any.
 * @returns The quoted MIXER value, or `undefined` if both inputs are absent.
 */
export function formatTeletexAndOrPs(
    printable: string | undefined,
    teletex: Uint8Array | undefined,
): string | undefined {
    if (
        (typeof printable === "undefined")
        && (typeof teletex === "undefined")
    ) {
        return undefined;
    }
    if (typeof teletex === "undefined") {
        return escapeRFC2156StdPrintable(printable!);
    }
    const teletexAsPrintable = teletexBytesToPrintableString(teletex);
    if (teletexAsPrintable && (printable === teletexAsPrintable)) {
        // If the teletex and printable strings are the same, there's
        // no point in double-displaying them. Just return one.
        return escapeRFC2156StdPrintable(teletexAsPrintable);
    }
    const encodedTeletex = escapeRFC2156StdPrintable(
        encodeTeletexString(teletex),
        { escapeStar: false },
    );
    if (typeof printable === "undefined") {
        if (typeof teletexAsPrintable !== "undefined") {
            return escapeRFC2156StdPrintable(teletexAsPrintable);
        }
        return `*${encodedTeletex}`;
    }
    return `${escapeRFC2156StdPrintable(printable)}*${encodedTeletex}`;
}

/**
 * @summary Format a P/T value, falling back to UniversalString.
 *
 * @param printable The PrintableString form, if any.
 * @param teletex The TeletexString octets, if any.
 * @param universal The UniversalString / BMPString form, if any.
 * @returns The quoted MIXER value, or `undefined` if no form is present.
 */
function formatPTOrUniversal(
    printable: string | undefined,
    teletex: Uint8Array | undefined,
    universal: string | undefined,
): string | undefined {
    if (
        (typeof printable !== "undefined")
        || (typeof teletex !== "undefined")
    ) {
        return formatTeletexAndOrPs(printable, teletex);
    }
    if (typeof universal === "undefined") {
        return undefined;
    }
    return escapeRFC2156StdPrintable(universal);
}

/**
 * @summary Format a P/T slot already collected from an O/R address.
 *
 * @param value The printable, teletex, and/or universal forms.
 * @returns The quoted MIXER value, or `undefined` if the slot is empty.
 */
function formatRFC2156PTValue(value: RFC2156PTValue): string | undefined {
    return formatPTOrUniversal(
        value.printable,
        value.teletex,
        value.universal,
    );
}

/**
 * @summary Append `KEY=value` when the value is present.
 *
 * @param components The component list being built.
 * @param key The MIXER keyword to generate.
 * @param value The already-quoted value, if any.
 */
function pushRFC2156Pair(
    components: string[],
    key: string,
    value: string | undefined,
): void {
    if (typeof value === "undefined") {
        return;
    }
    components.push(`${key}=${value}`);
}

/**
 * @summary Whether `c` is an ASCII letter (`encoded-pn` `initial`).
 *
 * @param c A single character.
 * @returns `true` if `c` is `A`–`Z` or `a`–`z`.
 */
function isAsciiLetter(c: string): boolean {
    const code = c.charCodeAt(0);
    return (
        ((code >= 0x41) && (code <= 0x5A))
        || ((code >= 0x61) && (code <= 0x7A))
    );
}

/**
 * @summary Encode a personal name as IETF RFC 2156 `encoded-pn`, if allowed.
 * @description
 *
 * Returns `null` when a generation qualifier is present, initials are not all
 * letters, the given name is shorter than two characters or contains `.`, or
 * the surname would be ambiguous under §4.1.2.
 *
 * @param surname The surname.
 * @param given_name The given name, if any.
 * @param initials The initials, if any.
 * @param generation_qualifier The generation qualifier, if any.
 * @returns The `encoded-pn` string, or `null` if that encoding cannot be used.
 */
export function personalNameToRFC2156EncodedPn(
    surname: string,
    given_name?: string,
    initials?: string,
    generation_qualifier?: string,
): string | null {
    if (typeof generation_qualifier !== "undefined") {
        return null;
    }
    if (!isPrintableString(surname)) {
        return null;
    }
    if (
        (typeof given_name !== "undefined")
        && (
            (given_name.length < 2)
            || given_name.includes(".")
            || !isPrintableString(given_name)
        )
    ) {
        return null;
    }
    if (typeof initials !== "undefined") {
        if (
            (initials.length === 0)
            || !isPrintableString(initials)
        ) {
            return null;
        }
        for (const c of initials) {
            if (!isAsciiLetter(c)) {
                return null;
            }
        }
    }
    const surnameOnly = (
        (typeof given_name === "undefined")
        && (typeof initials === "undefined")
    );
    if (surnameOnly) {
        if (surname.includes(".")) {
            return null;
        }
    } else if (surname.slice(0, 2).includes(".")) {
        return null;
    }
    let out = "";
    if (typeof given_name !== "undefined") {
        out += `${given_name}.`;
    }
    if (typeof initials !== "undefined") {
        for (const c of initials) {
            out += `${c}.`;
        }
    }
    out += surname;
    return out;
}

/**
 * @summary Format G/I/S/GQ MIXER pairs for a personal name.
 *
 * @param given The quoted given-name value, if any.
 * @param initials The quoted initials value, if any.
 * @param surname The quoted surname value, if any.
 * @param generationQualifier The quoted generation-qualifier value, if any.
 * @returns `G=`, `I=`, `S=`, and `GQ=` components that are present.
 */
function formatRFC2156PersonalNameAttributePairs(
    given?: string,
    initials?: string,
    surname?: string,
    generationQualifier?: string,
): string[] {
    const components: string[] = [];
    pushRFC2156Pair(components, "G", given);
    pushRFC2156Pair(components, "I", initials);
    pushRFC2156Pair(components, "S", surname);
    pushRFC2156Pair(components, "GQ", generationQualifier);
    return components;
}

/**
 * @summary Display personal-name fields as IETF RFC 2156 text.
 * @description
 *
 * Uses `encoded-pn` (`Marshall.M.T.Rose`) when §4.1.2 allows it. Otherwise
 * returns slash-separated `G=` / `I=` / `S=` / `GQ=` pairs.
 *
 * @param surname The surname.
 * @param given_name The given name, if any.
 * @param initials The initials, if any.
 * @param generation_qualifier The generation qualifier, if any.
 * @returns The RFC 2156 personal-name string.
 */
export function personalNameFieldsToRFC2156String(
    surname: string,
    given_name?: string,
    initials?: string,
    generation_qualifier?: string,
): string {
    const encoded = personalNameToRFC2156EncodedPn(
        surname,
        given_name,
        initials,
        generation_qualifier,
    );
    if (encoded !== null) {
        return encoded;
    }
    return formatRFC2156PersonalNameAttributePairs(
        (typeof given_name === "undefined")
            ? undefined
            : escapeRFC2156StdPrintable(given_name),
        (typeof initials === "undefined")
            ? undefined
            : escapeRFC2156StdPrintable(initials),
        escapeRFC2156StdPrintable(surname),
        (typeof generation_qualifier === "undefined")
            ? undefined
            : escapeRFC2156StdPrintable(generation_qualifier),
    ).join("/");
}

/**
 * @summary Display a `TeletexPersonalName` as IETF RFC 2156 text.
 *
 * @param name The teletex personal name.
 * @returns `encoded-pn` when every component is PrintableString and §4.1.2
 * allows it; otherwise `G=` / `I=` / `S=` / `GQ=` with `teletex-and-or-ps`
 * values.
 */
export function teletexPersonalNameToRFC2156String(name: TeletexPersonalName): string {
    const surnamePrintable = teletexBytesToPrintableString(name.surname);
    const givenPrintable = (typeof name.given_name === "undefined")
        ? undefined
        : teletexBytesToPrintableString(name.given_name)
        ;
    const initialsPrintable = (typeof name.initials === "undefined")
        ? undefined
        : teletexBytesToPrintableString(name.initials)
        ;
    const gqPrintable = (typeof name.generation_qualifier === "undefined")
        ? undefined
        : teletexBytesToPrintableString(name.generation_qualifier)
        ;
    const allPrintable = (
        (typeof surnamePrintable !== "undefined")
        && (
            (typeof name.given_name === "undefined")
            || (typeof givenPrintable !== "undefined")
        )
        && (
            (typeof name.initials === "undefined")
            || (typeof initialsPrintable !== "undefined")
        )
        && (
            (typeof name.generation_qualifier === "undefined")
            || (typeof gqPrintable !== "undefined")
        )
    );
    if (allPrintable) {
        return personalNameFieldsToRFC2156String(
            surnamePrintable,
            givenPrintable,
            initialsPrintable,
            gqPrintable,
        );
    }
    return formatRFC2156PersonalNameAttributePairs(
        formatTeletexAndOrPs(undefined, name.given_name),
        formatTeletexAndOrPs(undefined, name.initials),
        formatTeletexAndOrPs(undefined, name.surname),
        formatTeletexAndOrPs(undefined, name.generation_qualifier),
    ).join("/");
}

/**
 * @summary Display a `UniversalPersonalName` as IETF RFC 2156 text.
 *
 * @param name The universal personal name.
 * @returns `encoded-pn` when every component is PrintableString and §4.1.2
 * allows it; otherwise `G=` / `I=` / `S=` / `GQ=` with Unicode values.
 */
export function universalPersonalNameToRFC2156String(name: UniversalPersonalName): string {
    return personalNameFieldsToRFC2156String(
        name.surname.toString(),
        name.given_name?.toString(),
        name.initials?.toString(),
        name.generation_qualifier?.toString(),
    );
}

/**
 * @summary Wrap MIXER attribute pairs as `std-or-address`.
 * @description
 *
 * Produces `/G=Andy/S=Wharol/` with a leading and trailing `/`. An empty
 * component list becomes `/`.
 *
 * @param components `KEY=value` pairs in generation order.
 * @returns The RFC 2156 address string.
 */
export function formatRFC2156Address(components: string[]): string {
    if (components.length === 0) {
        return "/";
    }
    return `/${components.join("/")}/`;
}

/**
 * @summary Country value for IETF RFC 2156 generation.
 *
 * @param country A country name or physical-delivery country name.
 * @returns An ISO 3166 alpha-2 code when one can be derived, otherwise the
 * X.121 DCC digits.
 */
function displayRFC2156CountryNameValue(
    country: CountryName | PhysicalDeliveryCountryName,
): string {
    if ("x121_dcc_code" in country) {
        const dcc = Number.parseInt(country.x121_dcc_code, 10);
        const iso: string | undefined = x121_dcc_country_code_to_iso_3166(dcc);
        return iso ?? country.x121_dcc_code;
    }
    return country.iso_3166_alpha2_code;
}

/**
 * @summary Domain name value for IETF RFC 2156 generation.
 *
 * @param dn An ADMD or PRMD.
 * @returns The numeric or printable name, `$`-quoted as needed.
 */
function displayRFC2156DomainNameValue(
    dn: AdministrationDomainName | PrivateDomainName,
): string {
    const raw = ("numeric" in dn)
        ? dn.numeric
        : dn.printable
        ;
    return escapeRFC2156StdPrintable(raw);
}

/**
 * @summary Assign the first printable, teletex, and universal forms seen.
 *
 * @param slot The slot to fill.
 * @param printable A PrintableString, if this source has one.
 * @param teletex Teletex octets, if this source has them.
 * @param universal A UniversalString, if this source has one.
 */
function assignRFC2156PTValue(
    slot: RFC2156PTValue,
    printable?: string,
    teletex?: Uint8Array,
    universal?: string,
): void {
    if (
        (typeof printable !== "undefined")
        && (typeof slot.printable === "undefined")
    ) {
        slot.printable = printable;
    }
    if (
        (typeof teletex !== "undefined")
        && (typeof slot.teletex === "undefined")
    ) {
        slot.teletex = teletex;
    }
    if (
        (typeof universal !== "undefined")
        && (typeof slot.universal === "undefined")
    ) {
        slot.universal = universal;
    }
}

/**
 * @summary Format an unformatted postal address as MIXER `upa-string`.
 *
 * @param printableLines Printable address lines, if any.
 * @param teletex The teletex form, if any.
 * @param universal The universal form, if any.
 * @returns The quoted `PD-ADDRESS` value, or `undefined` if none is present.
 */
function formatRFC2156UpaString(
    printableLines: string[] | undefined,
    teletex: Uint8Array | undefined,
    universal: string | undefined,
): string | undefined {
    if (
        printableLines
        && (printableLines.length > 0)
    ) {
        const printable = printableLines
            .map((line) => escapeRFC2156StdPrintable(line))
            .join("|")
            ;
        if (typeof teletex === "undefined") {
            return printable;
        }
        const teletexAsPrintable = teletexBytesToPrintableString(teletex);
        if (
            (typeof teletexAsPrintable !== "undefined")
            && (
                (teletexAsPrintable === printableLines.join("|"))
                || (teletexAsPrintable === printableLines.join("\r\n"))
                || (teletexAsPrintable === printableLines.join("\n"))
            )
        ) {
            return printable;
        }
        const encodedTeletex = escapeRFC2156StdPrintable(
            encodeTeletexString(teletex),
            { escapeStar: false },
        );
        return `${printable}*${encodedTeletex}`;
    }
    if (typeof teletex !== "undefined") {
        return formatTeletexAndOrPs(undefined, teletex);
    }
    if (typeof universal === "undefined") {
        return undefined;
    }
    const normalized = universal
        .replaceAll("\r\n", "|")
        .replaceAll("\n", "|")
        ;
    return escapeRFC2156StdPrintable(normalized);
}

/**
 * @summary Format organizational unit names as reversed MIXER `OU=` pairs.
 *
 * @param printable Printable OUs in X.400 SEQUENCE order (most significant first).
 * @param teletex Teletex OUs in SEQUENCE order, if any.
 * @param universal Universal OUs in SEQUENCE order, if any.
 * @returns `OU=` components, least significant first.
 */
function formatRFC2156OrganizationalUnits(
    printable: string[] | undefined,
    teletex: Uint8Array[] | undefined,
    universal: string[] | undefined,
): string[] {
    const length = Math.max(
        printable?.length ?? 0,
        teletex?.length ?? 0,
        universal?.length ?? 0,
    );
    const out: string[] = [];
    for (let i = length - 1; i >= 0; i--) {
        const value = formatPTOrUniversal(
            printable?.[i],
            teletex?.[i],
            universal?.[i],
        );
        if (typeof value === "undefined") {
            continue;
        }
        out.push(`OU=${value}`);
    }
    return out;
}

/**
 * @summary Convert an O/R address into IETF RFC 2156 `KEY=value` components.
 * @description
 *
 * Generates MIXER `std-or-address` pairs using the primary keywords from
 * RFC 2156 §4.1.1 (`ADMD`, `PRMD`, `NET-NUM`, `PD-ADDRESS`, `DD.type`, …).
 * Personal names are emitted as `G` / `I` / `S` / `GQ`. Organizational units
 * and domain-defined attributes are reversed so the rightmost value is the
 * most significant. Join with {@link formatRFC2156Address} to wrap in `/`.
 *
 * @param address The O/R address to display.
 * @returns RFC 2156 attribute components, without a wrapping delimiter.
 */
export function displayRFC2156ORAddressComponents(address: ORAddress): string[] {
    const bisa: BuiltInStandardAttributes | undefined = address
        .built_in_standard_attributes
        ;
    const given: RFC2156PTValue = {};
    const initials: RFC2156PTValue = {};
    const surname: RFC2156PTValue = {};
    const generationQualifier: RFC2156PTValue = {};
    const org: RFC2156PTValue = {};
    const cn: RFC2156PTValue = {};
    const ouPrintable: string[] | undefined = bisa?.organizational_unit_names;
    let ouTeletex: Uint8Array[] | undefined;
    let ouUniversal: string[] | undefined;
    let netNum: string | undefined;
    let netSub: string | undefined;
    let psap: string | undefined;
    let termtype: string | undefined;
    let pd_sn: string | undefined;
    let pd_c: string | undefined;
    let pd_pc: string | undefined;
    const pd_pn: RFC2156PTValue = {};
    const pd_ea: RFC2156PTValue = {};
    const pd_ed: RFC2156PTValue = {};
    const pd_ofn: RFC2156PTValue = {};
    const pd_of: RFC2156PTValue = {};
    const pd_o: RFC2156PTValue = {};
    const pd_s: RFC2156PTValue = {};
    const pd_u: RFC2156PTValue = {};
    const pd_l: RFC2156PTValue = {};
    const pd_r: RFC2156PTValue = {};
    const pd_b: RFC2156PTValue = {};
    let pd_a_lines: string[] | undefined;
    let pd_a_teletex: Uint8Array | undefined;
    let pd_a_universal: string | undefined;

    if (bisa?.personal_name) {
        const pn = bisa.personal_name;
        assignRFC2156PTValue(surname, pn.surname);
        assignRFC2156PTValue(given, pn.given_name);
        assignRFC2156PTValue(initials, pn.initials);
        assignRFC2156PTValue(generationQualifier, pn.generation_qualifier);
    }
    if (typeof bisa?.organization_name !== "undefined") {
        assignRFC2156PTValue(org, bisa.organization_name);
    }

    const printableDdas = address.built_in_domain_defined_attributes ?? [];
    const printableDdaTypes = new Set(printableDdas.map((dda) => dda.type_));
    const teletexDdas: { type: Uint8Array, value: Uint8Array }[] = [];
    const universalDdas: { type: string, value: string }[] = [];

    const extensions = address.extension_attributes ?? [];
    for (const ext of extensions) {
        const ext_type = ext.extension_attribute_type;
        const ext_value = ext.extension_attribute_value;
        try {
            switch (ext_type) {
                case teletex_personal_name["&id"]: {
                    const tpn = teletex_personal_name.decoderFor["&Type"]!(ext_value);
                    assignRFC2156PTValue(surname, undefined, tpn.surname);
                    assignRFC2156PTValue(given, undefined, tpn.given_name);
                    assignRFC2156PTValue(initials, undefined, tpn.initials);
                    assignRFC2156PTValue(
                        generationQualifier,
                        undefined,
                        tpn.generation_qualifier,
                    );
                    break;
                }
                case universal_personal_name["&id"]: {
                    const upn = universal_personal_name.decoderFor["&Type"]!(ext_value);
                    assignRFC2156PTValue(
                        surname,
                        undefined,
                        undefined,
                        upn.surname.toString(),
                    );
                    assignRFC2156PTValue(
                        given,
                        undefined,
                        undefined,
                        upn.given_name?.toString(),
                    );
                    assignRFC2156PTValue(
                        initials,
                        undefined,
                        undefined,
                        upn.initials?.toString(),
                    );
                    assignRFC2156PTValue(
                        generationQualifier,
                        undefined,
                        undefined,
                        upn.generation_qualifier?.toString(),
                    );
                    break;
                }
                case teletex_organization_name["&id"]: {
                    const ton = teletex_organization_name.decoderFor["&Type"]!(ext_value);
                    assignRFC2156PTValue(org, undefined, ton);
                    break;
                }
                case universal_organization_name["&id"]: {
                    const uon = universal_organization_name.decoderFor["&Type"]!(ext_value);
                    assignRFC2156PTValue(org, undefined, undefined, uon.toString());
                    break;
                }
                case teletex_organizational_unit_names["&id"]: {
                    const toun = teletex_organizational_unit_names.decoderFor["&Type"]!(ext_value);
                    ouTeletex ??= toun;
                    break;
                }
                case universal_organizational_unit_names["&id"]: {
                    const uoun = universal_organizational_unit_names.decoderFor["&Type"]!(ext_value);
                    ouUniversal ??= uoun.map((u) => u.toString());
                    break;
                }
                case common_name["&id"]: {
                    const decoded = common_name.decoderFor["&Type"]!(ext_value);
                    assignRFC2156PTValue(cn, decoded);
                    break;
                }
                case teletex_common_name["&id"]: {
                    const tcn = teletex_common_name.decoderFor["&Type"]!(ext_value);
                    assignRFC2156PTValue(cn, undefined, tcn);
                    break;
                }
                case universal_common_name["&id"]: {
                    const ucn = universal_common_name.decoderFor["&Type"]!(ext_value);
                    assignRFC2156PTValue(cn, undefined, undefined, ucn.toString());
                    break;
                }
                case extended_network_address["&id"]: {
                    const ena = extended_network_address.decoderFor["&Type"]!(ext_value);
                    if ("e163_4_address" in ena) {
                        netNum ??= ena.e163_4_address.number_;
                        if (typeof ena.e163_4_address.sub_address !== "undefined") {
                            netSub ??= ena.e163_4_address.sub_address;
                        }
                    } else if ("psap_address" in ena) {
                        psap ??= ena.psap_address.toString();
                    }
                    break;
                }
                case terminal_type["&id"]: {
                    const tt = terminal_type.decoderFor["&Type"]!(ext_value);
                    termtype ??= term_type_to_str(Number(tt));
                    break;
                }
                case teletex_domain_defined_attributes["&id"]: {
                    const attributes = teletex_domain_defined_attributes.decoderFor["&Type"]!(ext_value);
                    for (const attr of attributes) {
                        teletexDdas.push({ type: attr.type_, value: attr.value });
                    }
                    break;
                }
                case universal_domain_defined_attributes["&id"]: {
                    const attributes = universal_domain_defined_attributes.decoderFor["&Type"]!(ext_value);
                    for (const attr of attributes) {
                        universalDdas.push({
                            type: attr.type_.toString(),
                            value: attr.value.toString(),
                        });
                    }
                    break;
                }
                case pds_name["&id"]: {
                    const decoded = pds_name.decoderFor["&Type"]!(ext_value);
                    pd_sn ??= decoded;
                    break;
                }
                case physical_delivery_country_name["&id"]: {
                    const decoded = physical_delivery_country_name.decoderFor["&Type"]!(ext_value);
                    pd_c ??= displayRFC2156CountryNameValue(decoded);
                    break;
                }
                case postal_code["&id"]: {
                    const decoded = postal_code.decoderFor["&Type"]!(ext_value);
                    if ("numeric_code" in decoded) {
                        pd_pc ??= decoded.numeric_code;
                    } else {
                        pd_pc ??= decoded.printable_code;
                    }
                    break;
                }
                case physical_delivery_office_name["&id"]: {
                    const decoded = physical_delivery_office_name.decoderFor["&Type"]!(ext_value);
                    assignRFC2156PTValue(
                        pd_of,
                        decoded.printable_string,
                        decoded.teletex_string,
                    );
                    break;
                }
                case universal_physical_delivery_office_name["&id"]: {
                    const decoded = universal_physical_delivery_office_name.decoderFor["&Type"]!(ext_value);
                    assignRFC2156PTValue(pd_of, undefined, undefined, decoded.toString());
                    break;
                }
                case physical_delivery_office_number["&id"]: {
                    const decoded = physical_delivery_office_number.decoderFor["&Type"]!(ext_value);
                    assignRFC2156PTValue(
                        pd_ofn,
                        decoded.printable_string,
                        decoded.teletex_string,
                    );
                    break;
                }
                case universal_physical_delivery_office_number["&id"]: {
                    const decoded = universal_physical_delivery_office_number.decoderFor["&Type"]!(ext_value);
                    assignRFC2156PTValue(pd_ofn, undefined, undefined, decoded.toString());
                    break;
                }
                case extension_OR_address_components["&id"]: {
                    const decoded = extension_OR_address_components.decoderFor["&Type"]!(ext_value);
                    assignRFC2156PTValue(
                        pd_ea,
                        decoded.printable_string,
                        decoded.teletex_string,
                    );
                    break;
                }
                case universal_extension_OR_address_components["&id"]: {
                    const decoded = universal_extension_OR_address_components.decoderFor["&Type"]!(ext_value);
                    assignRFC2156PTValue(pd_ea, undefined, undefined, decoded.toString());
                    break;
                }
                case physical_delivery_personal_name["&id"]: {
                    const decoded = physical_delivery_personal_name.decoderFor["&Type"]!(ext_value);
                    assignRFC2156PTValue(
                        pd_pn,
                        decoded.printable_string,
                        decoded.teletex_string,
                    );
                    break;
                }
                case universal_physical_delivery_personal_name["&id"]: {
                    const decoded = universal_physical_delivery_personal_name.decoderFor["&Type"]!(ext_value);
                    assignRFC2156PTValue(pd_pn, undefined, undefined, decoded.toString());
                    break;
                }
                case physical_delivery_organization_name["&id"]: {
                    const decoded = physical_delivery_organization_name.decoderFor["&Type"]!(ext_value);
                    assignRFC2156PTValue(
                        pd_o,
                        decoded.printable_string,
                        decoded.teletex_string,
                    );
                    break;
                }
                case universal_physical_delivery_organization_name["&id"]: {
                    const decoded = universal_physical_delivery_organization_name.decoderFor["&Type"]!(ext_value);
                    assignRFC2156PTValue(pd_o, undefined, undefined, decoded.toString());
                    break;
                }
                case extension_physical_delivery_address_components["&id"]: {
                    const decoded = extension_physical_delivery_address_components.decoderFor["&Type"]!(ext_value);
                    assignRFC2156PTValue(
                        pd_ed,
                        decoded.printable_string,
                        decoded.teletex_string,
                    );
                    break;
                }
                case universal_extension_physical_delivery_address_components["&id"]: {
                    const decoded = universal_extension_physical_delivery_address_components.decoderFor["&Type"]!(ext_value);
                    assignRFC2156PTValue(pd_ed, undefined, undefined, decoded.toString());
                    break;
                }
                case unformatted_postal_address["&id"]: {
                    const decoded = unformatted_postal_address.decoderFor["&Type"]!(ext_value);
                    pd_a_lines ??= decoded.printable_address;
                    pd_a_teletex ??= decoded.teletex_string;
                    break;
                }
                case universal_unformatted_postal_address["&id"]: {
                    const decoded = universal_unformatted_postal_address.decoderFor["&Type"]!(ext_value);
                    pd_a_universal ??= decoded.toString();
                    break;
                }
                case street_address["&id"]: {
                    const decoded = street_address.decoderFor["&Type"]!(ext_value);
                    assignRFC2156PTValue(
                        pd_s,
                        decoded.printable_string,
                        decoded.teletex_string,
                    );
                    break;
                }
                case universal_street_address["&id"]: {
                    const decoded = universal_street_address.decoderFor["&Type"]!(ext_value);
                    assignRFC2156PTValue(pd_s, undefined, undefined, decoded.toString());
                    break;
                }
                case post_office_box_address["&id"]: {
                    const decoded = post_office_box_address.decoderFor["&Type"]!(ext_value);
                    assignRFC2156PTValue(
                        pd_b,
                        decoded.printable_string,
                        decoded.teletex_string,
                    );
                    break;
                }
                case universal_post_office_box_address["&id"]: {
                    const decoded = universal_post_office_box_address.decoderFor["&Type"]!(ext_value);
                    assignRFC2156PTValue(pd_b, undefined, undefined, decoded.toString());
                    break;
                }
                case poste_restante_address["&id"]: {
                    const decoded = poste_restante_address.decoderFor["&Type"]!(ext_value);
                    assignRFC2156PTValue(
                        pd_r,
                        decoded.printable_string,
                        decoded.teletex_string,
                    );
                    break;
                }
                case universal_poste_restante_address["&id"]: {
                    const decoded = universal_poste_restante_address.decoderFor["&Type"]!(ext_value);
                    assignRFC2156PTValue(pd_r, undefined, undefined, decoded.toString());
                    break;
                }
                case unique_postal_name["&id"]: {
                    const decoded = unique_postal_name.decoderFor["&Type"]!(ext_value);
                    assignRFC2156PTValue(
                        pd_u,
                        decoded.printable_string,
                        decoded.teletex_string,
                    );
                    break;
                }
                case universal_unique_postal_name["&id"]: {
                    const decoded = universal_unique_postal_name.decoderFor["&Type"]!(ext_value);
                    assignRFC2156PTValue(pd_u, undefined, undefined, decoded.toString());
                    break;
                }
                case local_postal_attributes["&id"]: {
                    const decoded = local_postal_attributes.decoderFor["&Type"]!(ext_value);
                    assignRFC2156PTValue(
                        pd_l,
                        decoded.printable_string,
                        decoded.teletex_string,
                    );
                    break;
                }
                case universal_local_postal_attributes["&id"]: {
                    const decoded = universal_local_postal_attributes.decoderFor["&Type"]!(ext_value);
                    assignRFC2156PTValue(pd_l, undefined, undefined, decoded.toString());
                    break;
                }
                default:
                    break;
            }
        } catch {
            continue;
        }
    }

    const components: string[] = [];
    pushRFC2156Pair(components, "CN", formatRFC2156PTValue(cn));
    components.push(
        ...formatRFC2156PersonalNameAttributePairs(
            formatRFC2156PTValue(given),
            formatRFC2156PTValue(initials),
            formatRFC2156PTValue(surname),
            formatRFC2156PTValue(generationQualifier),
        ),
    );
    pushRFC2156Pair(
        components,
        "NET-NUM",
        (typeof netNum === "undefined")
            ? undefined
            : escapeRFC2156StdPrintable(netNum),
    );
    pushRFC2156Pair(
        components,
        "NET-SUB",
        (typeof netSub === "undefined")
            ? undefined
            : escapeRFC2156StdPrintable(netSub),
    );
    pushRFC2156Pair(
        components,
        "NET-PSAP",
        (typeof psap === "undefined")
            ? undefined
            : escapeRFC2156StdPrintable(psap),
    );
    if (bisa?.numeric_user_identifier) {
        pushRFC2156Pair(
            components,
            "UA-ID",
            escapeRFC2156StdPrintable(bisa.numeric_user_identifier),
        );
    }
    if (bisa?.terminal_identifier) {
        pushRFC2156Pair(
            components,
            "T-ID",
            escapeRFC2156StdPrintable(bisa.terminal_identifier),
        );
    }
    pushRFC2156Pair(components, "T-TY", termtype);
    if (bisa?.network_address) {
        pushRFC2156Pair(
            components,
            "X121",
            escapeRFC2156StdPrintable(bisa.network_address),
        );
    }
    pushRFC2156Pair(components, "O", formatRFC2156PTValue(org));
    components.push(
        ...formatRFC2156OrganizationalUnits(
            ouPrintable,
            ouTeletex,
            ouUniversal,
        ),
    );
    if (bisa?.private_domain_name) {
        pushRFC2156Pair(
            components,
            "PRMD",
            displayRFC2156DomainNameValue(bisa.private_domain_name),
        );
    }
    if (bisa?.administration_domain_name) {
        pushRFC2156Pair(
            components,
            "ADMD",
            displayRFC2156DomainNameValue(bisa.administration_domain_name),
        );
    }
    if (bisa?.country_name) {
        pushRFC2156Pair(
            components,
            "C",
            displayRFC2156CountryNameValue(bisa.country_name),
        );
    }
    pushRFC2156Pair(components, "PD-PN", formatRFC2156PTValue(pd_pn));
    pushRFC2156Pair(components, "PD-O", formatRFC2156PTValue(pd_o));
    pushRFC2156Pair(
        components,
        "PD-ADDRESS",
        formatRFC2156UpaString(pd_a_lines, pd_a_teletex, pd_a_universal),
    );
    pushRFC2156Pair(components, "PD-STREET", formatRFC2156PTValue(pd_s));
    pushRFC2156Pair(components, "PD-BOX", formatRFC2156PTValue(pd_b));
    pushRFC2156Pair(components, "PD-OFFICE-NUM", formatRFC2156PTValue(pd_ofn));
    pushRFC2156Pair(components, "PD-OFFICE", formatRFC2156PTValue(pd_of));
    pushRFC2156Pair(
        components,
        "PD-C",
        (typeof pd_c === "undefined")
            ? undefined
            : escapeRFC2156StdPrintable(pd_c),
    );
    pushRFC2156Pair(
        components,
        "PD-CODE",
        (typeof pd_pc === "undefined")
            ? undefined
            : escapeRFC2156StdPrintable(pd_pc),
    );
    pushRFC2156Pair(components, "PD-RESTANTE", formatRFC2156PTValue(pd_r));
    pushRFC2156Pair(components, "PD-UNIQUE", formatRFC2156PTValue(pd_u));
    pushRFC2156Pair(components, "PD-LOCAL", formatRFC2156PTValue(pd_l));
    pushRFC2156Pair(components, "PD-EXT-ADDRESS", formatRFC2156PTValue(pd_ea));
    pushRFC2156Pair(components, "PD-EXT-DELIVERY", formatRFC2156PTValue(pd_ed));
    pushRFC2156Pair(
        components,
        "PD-SERVICE",
        (typeof pd_sn === "undefined")
            ? undefined
            : escapeRFC2156StdPrintable(pd_sn),
    );
    for (let i = printableDdas.length - 1; i >= 0; i--) {
        const dda = printableDdas[i];
        const type = escapeRFC2156StdPrintable(dda.type_);
        const value = formatTeletexAndOrPs(dda.value, undefined);
        if (typeof value === "undefined") {
            continue;
        }
        components.push(`DD.${type}=${value}`);
    }
    for (let i = teletexDdas.length - 1; i >= 0; i--) {
        const dda = teletexDdas[i];
        const typeAsPrintable = teletexBytesToPrintableString(dda.type);
        if (
            (typeof typeAsPrintable !== "undefined")
            && printableDdaTypes.has(typeAsPrintable)
        ) {
            continue;
        }
        const type = formatTeletexAndOrPs(undefined, dda.type);
        const value = formatTeletexAndOrPs(undefined, dda.value);
        if (
            (typeof type === "undefined")
            || (typeof value === "undefined")
        ) {
            continue;
        }
        components.push(`DD.${type}=${value}`);
    }
    for (let i = universalDdas.length - 1; i >= 0; i--) {
        const dda = universalDdas[i];
        if (printableDdaTypes.has(dda.type)) {
            continue;
        }
        const type = escapeRFC2156StdPrintable(dda.type);
        const value = escapeRFC2156StdPrintable(dda.value);
        components.push(`DD.${type}=${value}`);
    }
    return components;
}
