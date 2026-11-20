import {
    ASN1ConstructionError,
    ASN1TagClass,
    ASN1UniversalType,
    type ASN1Element,
    type INTEGER,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import teletexToString from "@wildboar/teletex";
import {
    type BuiltInStandardAttributes,
    type DomainDefinedAttributeJSON,
    ORAddress,
    type PersonalName,
    type PersonalNameJSON,
    UniversalOrBMPString,
    _decode_UniversalOrBMPString,
    common_name,
    extended_network_address,
    extension_OR_address_components,
    extension_physical_delivery_address_components,
    local_postal_attributes,
    pds_name,
    physical_delivery_country_name,
    physical_delivery_office_name,
    physical_delivery_office_number,
    physical_delivery_organization_name,
    physical_delivery_personal_name,
    post_office_box_address,
    postal_code,
    poste_restante_address,
    street_address,
    teletex_common_name,
    teletex_domain_defined_attributes,
    teletex_organization_name,
    teletex_organizational_unit_names,
    teletex_personal_name,
    terminal_type,
    unformatted_postal_address,
    unique_postal_name,
    universal_common_name,
    universal_domain_defined_attributes,
    universal_extension_OR_address_components,
    universal_extension_physical_delivery_address_components,
    universal_local_postal_attributes,
    universal_organization_name,
    universal_organizational_unit_names,
    universal_personal_name,
    universal_physical_delivery_office_name,
    universal_physical_delivery_office_number,
    universal_physical_delivery_organization_name,
    universal_physical_delivery_personal_name,
    universal_post_office_box_address,
    universal_poste_restante_address,
    universal_street_address,
    universal_unformatted_postal_address,
    universal_unique_postal_name,
    x121_dcc_country_code_to_iso_3166,
} from "@wildboar/or-address";
import { PresentationAddress } from "@wildboar/x500/SelectedAttributeTypes";
import { presentationAddressMatchTyped } from "@wildboar/x500/matching/equality";
import type { MSString } from "@wildboar/x400/MSMatchingRules";
import { _decode_ExtendedNetworkAddress } from "@wildboar/x400/MTSAbstractService";

const DIGITS_AND_SPACES_ONLY = /^[0-9 ]+$/;

/**
 * T.61 non-spacing underline (`0xCC` -> `U+0332`) and non-whitespace C0/C1
 * control characters are insignificant in X.402 §18.4(h) and X.413 §12.2.
 * `\u0085` (NEL) and `\t\n\v\f\r` are mapped to SPACE first via `\s+`.
 */
const INSIGNIFICANT_CONTROLS_AND_UNDERLINE =
    /[\u0000-\u0008\u000E-\u001F\u007F-\u0084\u0086-\u009F\u0332]+/g;

/**
 * Normalize a string per ITU-T Rec. X.413 §12.2 / X.402 §18.4:
 * - Strip insignificant non-spacing underline and control characters
 * - Normalize to Unicode NFC so decomposed T.61 sequences match BMP/Universal
 * - Collapse whitespace runs and trim leading/trailing spaces, preserving a
 *   single `" "` when a non-empty input contained only spaces
 * - Fold to upper-case
 */
export
function normalizeMSString (raw: string, caseFold: boolean = true): string {
    const cleaned = raw
        .replace(/[\t\n\v\f\r\u0085]+/g, " ")
        .replace(INSIGNIFICANT_CONTROLS_AND_UNDERLINE, "")
        .normalize("NFC");
    if (cleaned.length === 0) {
        return "";
    }
    const trimmed = cleaned.replace(/\s+/g, " ").trim();
    const spaceNormalized = trimmed.length === 0 ? " " : trimmed;
    return caseFold ? spaceNormalized.toUpperCase() : spaceNormalized;
}

function removeAsciiSpaces (s: string): string {
    return s.replace(/ +/g, "");
}

/**
 * X.402 §18.4(b) & X.413 §12.4.1(b) Note 1: for `administration-domain-name`,
 * `private-domain-name`, and `postal-code`, the same numeric value may be
 * encoded as either a `NumericString` or a `PrintableString`. Preserve single
 * `" "` (reserved in X.402 §18.3.1 for any ADMD) and `""` distinctly.
 */
function normalizeNumericOrPrintable (raw: string): string {
    const ms = normalizeMSString(raw);
    if (ms === " ") {
        return " ";
    }
    if (DIGITS_AND_SPACES_ONLY.test(ms)) {
        return removeAsciiSpaces(ms);
    }
    return ms;
}

function normalizeNumericOnly (raw: string): string {
    if (raw.length === 0) {
        return "";
    }
    const stripped = raw.trim().replace(/\s+/g, "");
    return stripped.length === 0 ? " " : stripped;
}

function normalizeCountryChoice (
    cn: { x121_dcc_code: string } | { iso_3166_alpha2_code: string },
): string | null {
    if ("x121_dcc_code" in cn) {
        const digits = removeAsciiSpaces(cn.x121_dcc_code.trim());
        if (digits.length === 0) {
            return null;
        }
        const dcc = Number.parseInt(digits, 10);
        return x121_dcc_country_code_to_iso_3166(dcc) ?? normalizeMSString(digits);
    }
    if ("iso_3166_alpha2_code" in cn) {
        const code = normalizeMSString(cn.iso_3166_alpha2_code);
        return code.length === 0 ? null : code;
    }
    return null;
}

export
function univOrBmpToString (uorb: UniversalOrBMPString): string {
    return uorb.toString();
}

function addStringCandidates (
    existing: Set<string> | undefined,
    items: readonly string[],
): Set<string> {
    const set = existing ?? new Set<string>();
    for (const item of items) {
        set.add(item);
    }
    return set;
}

function appendCandidates<T> (existing: T[] | undefined, items: readonly T[]): T[] {
    if (!existing) {
        return items.slice();
    }
    return existing.concat(items);
}

export
interface PersonalNameInfo {
    surname: string;
    givenName?: string;
    generationQualifier?: string;
    initials?: string;
}

export
interface ORAddressInfo {
    countryName?: string;
    administrationDomainName?: string;
    networkAddress?: string;
    terminalIdentifier?: string;
    privateDomainName?: string;
    organizationName?: Set<string>;
    numericUserIdentifier?: string;
    personalName?: PersonalNameInfo[];
    organizationalUnitNames?: string[][];
    // Domain-defined attributes (up to 3 repertoire maps: Printable, Teletex, Universal)
    builtInDomainDefinedAttributes?: Map<string, string>[];

    // From extension-attributes only
    commonName?: Set<string>;
    pdsName?: string;
    extensionORAddressComponents?: Set<string>;
    postalCode?: string;
    physicalDeliveryCountryName?: string;
    physicalDeliveryOfficeName?: Set<string>;
    physicalDeliveryOfficeNumber?: Set<string>;
    physicalDeliveryPersonalName?: Set<string>;
    physicalDeliveryOrganizationName?: Set<string>;
    physicalDeliveryAddressComponents?: Set<string>;
    unformattedPostalAddress?: Set<string>;
    streetAddress?: Set<string>;
    postOfficeBoxAddress?: Set<string>;
    posteRestanteAddress?: Set<string>;
    uniquePostalName?: Set<string>;
    localPostalAttributes?: Set<string>;
    extendedNetworkAddress?: [ string, (string | undefined)? ] | PresentationAddress;
    terminalType?: INTEGER;
}

function personalNameFromJSON (json: PersonalNameJSON): PersonalNameInfo | null {
    if (json.surname.length === 0) {
        return null;
    }
    const info: PersonalNameInfo = {
        surname: normalizeMSString(json.surname),
    };
    if (json["given-name"] !== undefined) {
        if (json["given-name"].length === 0) {
            return null;
        }
        info.givenName = normalizeMSString(json["given-name"]);
    }
    if (json.initials !== undefined) {
        if (json.initials.length === 0) {
            return null;
        }
        info.initials = normalizeMSString(json.initials);
    }
    if (json["generation-qualifier"] !== undefined) {
        if (json["generation-qualifier"].length === 0) {
            return null;
        }
        info.generationQualifier = normalizeMSString(json["generation-qualifier"]);
    }
    return info;
}

function buildDomainDefinedMap (
    ddas: readonly DomainDefinedAttributeJSON[],
): Map<string, string> | null {
    if (ddas.length === 0) {
        return null;
    }
    const dict = new Map<string, string>();
    for (const { type, value } of ddas) {
        if (type.length === 0 || value.length === 0) {
            return null;
        }
        const key = normalizeMSString(type);
        const val = normalizeMSString(value);
        const existing = dict.get(key);
        if (existing !== undefined && existing !== val) {
            return null; // Conflicting duplicate type within same repertoire list
        }
        dict.set(key, val);
    }
    return dict;
}

type PDSMultiField =
    | "physicalDeliveryOfficeName"
    | "physicalDeliveryOfficeNumber"
    | "extensionORAddressComponents"
    | "physicalDeliveryPersonalName"
    | "physicalDeliveryOrganizationName"
    | "physicalDeliveryAddressComponents"
    | "streetAddress"
    | "postOfficeBoxAddress"
    | "posteRestanteAddress"
    | "uniquePostalName"
    | "localPostalAttributes";

function makePDSHandler (
    field: PDSMultiField,
    decode: (el: ASN1Element) => { toJSON(): { printable_string?: string; teletex_string?: string } },
) {
    return (info: ORAddressInfo, value: ASN1Element): ORAddressInfo | null => {
        const { printable_string, teletex_string } = decode(value).toJSON();
        const out: string[] = [];
        if (printable_string !== undefined) {
            if (printable_string.length === 0) {
                return null;
            }
            out.push(normalizeMSString(printable_string));
        }
        if (teletex_string !== undefined) {
            if (teletex_string.length === 0) {
                return null;
            }
            out.push(normalizeMSString(teletex_string));
        }
        if (out.length === 0) {
            return null;
        }
        info[field] = addStringCandidates(info[field], out);
        return info;
    };
}

function makeUniversalPDSHandler (
    field: PDSMultiField,
    decode: (el: ASN1Element) => UniversalOrBMPString,
) {
    return (info: ORAddressInfo, value: ASN1Element): ORAddressInfo | null => {
        const raw = decode(value).toString();
        if (raw.length === 0) {
            return null;
        }
        info[field] = addStringCandidates(info[field], [ normalizeMSString(raw) ]);
        return info;
    };
}

function process_common_name_ext (info: ORAddressInfo, value: ASN1Element): ORAddressInfo | null {
    const raw = common_name.decoderFor["&Type"]!(value);
    if (raw.length === 0) {
        return null;
    }
    info.commonName = addStringCandidates(info.commonName, [ normalizeMSString(raw) ]);
    return info;
}

function process_teletex_common_name_ext (info: ORAddressInfo, value: ASN1Element): ORAddressInfo | null {
    const raw = teletex_common_name.decoderFor["&Type"]!(value);
    if (raw.length === 0) {
        return null;
    }
    info.commonName = addStringCandidates(info.commonName, [ normalizeMSString(teletexToString(raw)) ]);
    return info;
}

function process_universal_common_name_ext (info: ORAddressInfo, value: ASN1Element): ORAddressInfo | null {
    const raw = universal_common_name.decoderFor["&Type"]!(value).toString();
    if (raw.length === 0) {
        return null;
    }
    info.commonName = addStringCandidates(info.commonName, [ normalizeMSString(raw) ]);
    return info;
}

function process_teletex_organization_name_ext (info: ORAddressInfo, value: ASN1Element): ORAddressInfo | null {
    const raw = teletex_organization_name.decoderFor["&Type"]!(value);
    if (raw.length === 0) {
        return null;
    }
    info.organizationName = addStringCandidates(info.organizationName, [ normalizeMSString(teletexToString(raw)) ]);
    return info;
}

function process_universal_organization_name_ext (info: ORAddressInfo, value: ASN1Element): ORAddressInfo | null {
    const raw = universal_organization_name.decoderFor["&Type"]!(value).toString();
    if (raw.length === 0) {
        return null;
    }
    info.organizationName = addStringCandidates(info.organizationName, [ normalizeMSString(raw) ]);
    return info;
}

function process_teletex_personal_name_ext (info: ORAddressInfo, value: ASN1Element): ORAddressInfo | null {
    const parsed = personalNameFromJSON(teletex_personal_name.decoderFor["&Type"]!(value).toJSON());
    if (!parsed) {
        return null;
    }
    info.personalName = appendCandidates(info.personalName, [ parsed ]);
    return info;
}

function process_universal_personal_name_ext (info: ORAddressInfo, value: ASN1Element): ORAddressInfo | null {
    const parsed = personalNameFromJSON(universal_personal_name.decoderFor["&Type"]!(value).toJSON());
    if (!parsed) {
        return null;
    }
    info.personalName = appendCandidates(info.personalName, [ parsed ]);
    return info;
}

function process_teletex_organizational_unit_names_ext (info: ORAddressInfo, value: ASN1Element): ORAddressInfo | null {
    const ouns = teletex_organizational_unit_names.decoderFor["&Type"]!(value);
    if (ouns.length === 0) {
        return null;
    }
    const normalized: string[] = [];
    for (const ou of ouns) {
        if (ou.length === 0) {
            return null;
        }
        normalized.push(normalizeMSString(teletexToString(ou)));
    }
    info.organizationalUnitNames = appendCandidates(info.organizationalUnitNames, [ normalized ]);
    return info;
}

function process_universal_organizational_unit_names_ext (info: ORAddressInfo, value: ASN1Element): ORAddressInfo | null {
    const ouns = universal_organizational_unit_names.decoderFor["&Type"]!(value);
    if (ouns.length === 0) {
        return null;
    }
    const normalized: string[] = [];
    for (const ou of ouns) {
        const raw = ou.toString();
        if (raw.length === 0) {
            return null;
        }
        normalized.push(normalizeMSString(raw));
    }
    info.organizationalUnitNames = appendCandidates(info.organizationalUnitNames, [ normalized ]);
    return info;
}

function process_teletex_domain_defined_attributes_ext (info: ORAddressInfo, value: ASN1Element): ORAddressInfo | null {
    const attrs = teletex_domain_defined_attributes.decoderFor["&Type"]!(value);
    const dict = buildDomainDefinedMap(attrs.map((dda) => dda.toJSON()));
    if (!dict) {
        return null;
    }
    info.builtInDomainDefinedAttributes = appendCandidates(info.builtInDomainDefinedAttributes, [ dict ]);
    return info;
}

function process_universal_domain_defined_attributes_ext (info: ORAddressInfo, value: ASN1Element): ORAddressInfo | null {
    const attrs = universal_domain_defined_attributes.decoderFor["&Type"]!(value);
    const dict = buildDomainDefinedMap(attrs.map((dda) => dda.toJSON()));
    if (!dict) {
        return null;
    }
    info.builtInDomainDefinedAttributes = appendCandidates(info.builtInDomainDefinedAttributes, [ dict ]);
    return info;
}

function process_pds_name_ext (info: ORAddressInfo, value: ASN1Element): ORAddressInfo | null {
    const raw = pds_name.decoderFor["&Type"]!(value);
    if (raw.length === 0) {
        return null;
    }
    info.pdsName = normalizeMSString(raw);
    return info;
}

function process_physical_delivery_country_name_ext (info: ORAddressInfo, value: ASN1Element): ORAddressInfo | null {
    const pdcn = physical_delivery_country_name.decoderFor["&Type"]!(value);
    const normalized = normalizeCountryChoice(pdcn);
    if (!normalized) {
        return null;
    }
    info.physicalDeliveryCountryName = normalized;
    return info;
}

function process_postal_code_ext (info: ORAddressInfo, value: ASN1Element): ORAddressInfo | null {
    const pc = postal_code.decoderFor["&Type"]!(value);
    const raw = ("numeric_code" in pc) ? pc.numeric_code : pc.printable_code;
    if (raw.length === 0) {
        return null;
    }
    info.postalCode = normalizeNumericOrPrintable(raw);
    return info;
}

function process_unformatted_postal_address_ext (info: ORAddressInfo, value: ASN1Element): ORAddressInfo | null {
    const json = unformatted_postal_address.decoderFor["&Type"]!(value).toJSON();
    const candidates: string[] = [];
    const lines = json["printable-address"];
    if (lines !== undefined) {
        if (lines.length === 0 || lines.some((line) => line.length === 0)) {
            return null;
        }
        candidates.push(normalizeMSString(lines.join("\r\n")));
    }
    const ttex = json["teletex-string"];
    if (ttex !== undefined) {
        if (ttex.length === 0) {
            return null;
        }
        candidates.push(normalizeMSString(ttex));
    }
    if (candidates.length === 0) {
        return null;
    }
    info.unformattedPostalAddress = addStringCandidates(info.unformattedPostalAddress, candidates);
    return info;
}

function process_universal_unformatted_postal_address_ext (info: ORAddressInfo, value: ASN1Element): ORAddressInfo | null {
    const raw = universal_unformatted_postal_address.decoderFor["&Type"]!(value).toString();
    if (raw.length === 0) {
        return null;
    }
    info.unformattedPostalAddress = addStringCandidates(info.unformattedPostalAddress, [ normalizeMSString(raw) ]);
    return info;
}

function process_extended_network_address_ext (info: ORAddressInfo, value: ASN1Element): ORAddressInfo | null {
    // Use MTSAbstractService's ExtendedNetworkAddress decoder so `psap_address`
    // is an instance of `@wildboar/x500`'s `PresentationAddress`.
    const param = _decode_ExtendedNetworkAddress(value);
    if ("e163_4_address" in param) {
        if (param.e163_4_address.number_.length === 0) {
            return null;
        }
        const numberPart = normalizeNumericOnly(param.e163_4_address.number_);
        let subaddressPart: string | undefined;
        if (param.e163_4_address.sub_address !== undefined) {
            if (param.e163_4_address.sub_address.length === 0) {
                return null;
            }
            subaddressPart = normalizeNumericOnly(param.e163_4_address.sub_address);
        }
        info.extendedNetworkAddress = [ numberPart, subaddressPart ];
    } else if ("psap_address" in param) {
        info.extendedNetworkAddress = param.psap_address;
    } else {
        return null;
    }
    return info;
}

function process_terminal_type_ext (info: ORAddressInfo, value: ASN1Element): ORAddressInfo | null {
    info.terminalType = terminal_type.decoderFor["&Type"]!(value);
    return info;
}

const handlers: Map<number, (info: ORAddressInfo, value: ASN1Element) => (ORAddressInfo | null)> = new Map([
    [ Number(common_name["&id"]!), process_common_name_ext ],
    [ Number(teletex_common_name["&id"]!), process_teletex_common_name_ext ],
    [ Number(universal_common_name["&id"]!), process_universal_common_name_ext ],
    [ Number(teletex_organization_name["&id"]!), process_teletex_organization_name_ext ],
    [ Number(universal_organization_name["&id"]!), process_universal_organization_name_ext ],
    [ Number(teletex_personal_name["&id"]!), process_teletex_personal_name_ext ],
    [ Number(universal_personal_name["&id"]!), process_universal_personal_name_ext ],
    [ Number(teletex_organizational_unit_names["&id"]!), process_teletex_organizational_unit_names_ext ],
    [ Number(universal_organizational_unit_names["&id"]!), process_universal_organizational_unit_names_ext ],
    [ Number(teletex_domain_defined_attributes["&id"]!), process_teletex_domain_defined_attributes_ext ],
    [ Number(universal_domain_defined_attributes["&id"]!), process_universal_domain_defined_attributes_ext ],
    [ Number(pds_name["&id"]!), process_pds_name_ext ],
    [ Number(physical_delivery_country_name["&id"]!), process_physical_delivery_country_name_ext ],
    [ Number(postal_code["&id"]!), process_postal_code_ext ],
    [ Number(physical_delivery_office_name["&id"]!), makePDSHandler("physicalDeliveryOfficeName", physical_delivery_office_name.decoderFor["&Type"]!) ],
    [ Number(universal_physical_delivery_office_name["&id"]!), makeUniversalPDSHandler("physicalDeliveryOfficeName", universal_physical_delivery_office_name.decoderFor["&Type"]!) ],
    [ Number(physical_delivery_office_number["&id"]!), makePDSHandler("physicalDeliveryOfficeNumber", physical_delivery_office_number.decoderFor["&Type"]!) ],
    [ Number(universal_physical_delivery_office_number["&id"]!), makeUniversalPDSHandler("physicalDeliveryOfficeNumber", universal_physical_delivery_office_number.decoderFor["&Type"]!) ],
    [ Number(extension_OR_address_components["&id"]!), makePDSHandler("extensionORAddressComponents", extension_OR_address_components.decoderFor["&Type"]!) ],
    [ Number(universal_extension_OR_address_components["&id"]!), makeUniversalPDSHandler("extensionORAddressComponents", universal_extension_OR_address_components.decoderFor["&Type"]!) ],
    [ Number(physical_delivery_personal_name["&id"]!), makePDSHandler("physicalDeliveryPersonalName", physical_delivery_personal_name.decoderFor["&Type"]!) ],
    [ Number(universal_physical_delivery_personal_name["&id"]!), makeUniversalPDSHandler("physicalDeliveryPersonalName", universal_physical_delivery_personal_name.decoderFor["&Type"]!) ],
    [ Number(physical_delivery_organization_name["&id"]!), makePDSHandler("physicalDeliveryOrganizationName", physical_delivery_organization_name.decoderFor["&Type"]!) ],
    [ Number(universal_physical_delivery_organization_name["&id"]!), makeUniversalPDSHandler("physicalDeliveryOrganizationName", universal_physical_delivery_organization_name.decoderFor["&Type"]!) ],
    [ Number(extension_physical_delivery_address_components["&id"]!), makePDSHandler("physicalDeliveryAddressComponents", extension_physical_delivery_address_components.decoderFor["&Type"]!) ],
    [ Number(universal_extension_physical_delivery_address_components["&id"]!), makeUniversalPDSHandler("physicalDeliveryAddressComponents", universal_extension_physical_delivery_address_components.decoderFor["&Type"]!) ],
    [ Number(unformatted_postal_address["&id"]!), process_unformatted_postal_address_ext ],
    [ Number(universal_unformatted_postal_address["&id"]!), process_universal_unformatted_postal_address_ext ],
    [ Number(street_address["&id"]!), makePDSHandler("streetAddress", street_address.decoderFor["&Type"]!) ],
    [ Number(universal_street_address["&id"]!), makeUniversalPDSHandler("streetAddress", universal_street_address.decoderFor["&Type"]!) ],
    [ Number(post_office_box_address["&id"]!), makePDSHandler("postOfficeBoxAddress", post_office_box_address.decoderFor["&Type"]!) ],
    [ Number(universal_post_office_box_address["&id"]!), makeUniversalPDSHandler("postOfficeBoxAddress", universal_post_office_box_address.decoderFor["&Type"]!) ],
    [ Number(poste_restante_address["&id"]!), makePDSHandler("posteRestanteAddress", poste_restante_address.decoderFor["&Type"]!) ],
    [ Number(universal_poste_restante_address["&id"]!), makeUniversalPDSHandler("posteRestanteAddress", universal_poste_restante_address.decoderFor["&Type"]!) ],
    [ Number(unique_postal_name["&id"]!), makePDSHandler("uniquePostalName", unique_postal_name.decoderFor["&Type"]!) ],
    [ Number(universal_unique_postal_name["&id"]!), makeUniversalPDSHandler("uniquePostalName", universal_unique_postal_name.decoderFor["&Type"]!) ],
    [ Number(local_postal_attributes["&id"]!), makePDSHandler("localPostalAttributes", local_postal_attributes.decoderFor["&Type"]!) ],
    [ Number(universal_local_postal_attributes["&id"]!), makeUniversalPDSHandler("localPostalAttributes", universal_local_postal_attributes.decoderFor["&Type"]!) ],
    [ Number(extended_network_address["&id"]!), process_extended_network_address_ext ],
    [ Number(terminal_type["&id"]!), process_terminal_type_ext ],
]);

export
function comparePersonalName (a: PersonalName, b: PersonalName): boolean {
    if (normalizeMSString(a.surname) !== normalizeMSString(b.surname)) {
        return false;
    }
    if ((a.given_name === undefined) !== (b.given_name === undefined)) {
        return false;
    }
    if (a.given_name !== undefined && normalizeMSString(a.given_name) !== normalizeMSString(b.given_name!)) {
        return false;
    }
    if ((a.initials === undefined) !== (b.initials === undefined)) {
        return false;
    }
    if (a.initials !== undefined && normalizeMSString(a.initials) !== normalizeMSString(b.initials!)) {
        return false;
    }
    if ((a.generation_qualifier === undefined) !== (b.generation_qualifier === undefined)) {
        return false;
    }
    if (
        a.generation_qualifier !== undefined
        && normalizeMSString(a.generation_qualifier) !== normalizeMSString(b.generation_qualifier!)
    ) {
        return false;
    }
    return true;
}

export
function compareBuiltInStandardAttributes (
    a: BuiltInStandardAttributes,
    b: BuiltInStandardAttributes,
): boolean {
    return orAddressesMatch(new ORAddress(a), new ORAddress(b))
        || (a.isEmpty() && b.isEmpty());
}

export
function orAddressToInfo (addr: ORAddress): ORAddressInfo | null {
    let ret: ORAddressInfo = {};
    const bisa = addr.built_in_standard_attributes;
    if (bisa.country_name) {
        const c = bisa.getISO3166Country();
        const country = c !== undefined
            ? normalizeMSString(c)
            : normalizeCountryChoice(bisa.country_name);
        if (!country) {
            return null;
        }
        ret.countryName = country;
    }
    const admd = bisa.getADMDString();
    if (admd !== undefined) {
        ret.administrationDomainName = normalizeNumericOrPrintable(admd);
    }
    if (bisa.network_address !== undefined) {
        if (bisa.network_address.length === 0) {
            return null;
        }
        ret.networkAddress = normalizeNumericOnly(bisa.network_address);
    }
    if (bisa.terminal_identifier !== undefined) {
        if (bisa.terminal_identifier.length === 0) {
            return null;
        }
        ret.terminalIdentifier = normalizeMSString(bisa.terminal_identifier);
    }
    const prmd = bisa.getPRMDString();
    if (prmd !== undefined) {
        if (prmd.length === 0) {
            return null;
        }
        ret.privateDomainName = normalizeNumericOrPrintable(prmd);
    }
    if (bisa.organization_name !== undefined) {
        if (bisa.organization_name.length === 0) {
            return null;
        }
        ret.organizationName = new Set([ normalizeMSString(bisa.organization_name) ]);
    }
    if (bisa.numeric_user_identifier !== undefined) {
        if (bisa.numeric_user_identifier.length === 0) {
            return null;
        }
        ret.numericUserIdentifier = normalizeNumericOnly(bisa.numeric_user_identifier);
    }
    if (bisa.personal_name) {
        const json: PersonalNameJSON = bisa.personal_name.toJSON();
        const parsed = personalNameFromJSON(json);
        if (!parsed) {
            return null;
        }
        ret.personalName = [ parsed ];
    }
    if (bisa.organizational_unit_names !== undefined) {
        if (bisa.organizational_unit_names.length === 0) {
            return null;
        }
        const normalizedOUs: string[] = [];
        for (const ou of bisa.organizational_unit_names) {
            if (ou.length === 0) {
                return null;
            }
            normalizedOUs.push(normalizeMSString(ou));
        }
        ret.organizationalUnitNames = [ normalizedOUs ];
    }

    if (addr.built_in_domain_defined_attributes !== undefined) {
        const dict = buildDomainDefinedMap(
            addr.built_in_domain_defined_attributes.map((dda) => dda.toJSON()),
        );
        if (!dict) {
            return null;
        }
        ret.builtInDomainDefinedAttributes = [ dict ];
    }

    const seenExtensionTypes = new Set<bigint>();
    for (const ext of addr.extension_attributes ?? []) {
        const typeKey = BigInt(ext.extension_attribute_type);
        if (seenExtensionTypes.has(typeKey)) {
            return null; // Duplicate extension-attribute-type in SET OF ExtensionAttribute
        }
        seenExtensionTypes.add(typeKey);
        const handler = handlers.get(Number(ext.extension_attribute_type));
        if (!handler) {
            return null; // Extension not understood.
        }
        const handlerResult = handler(ret, ext.extension_attribute_value);
        if (!handlerResult) {
            return null;
        }
        ret = handlerResult;
    }

    return ret;
}

const SCALAR_STRING_KEYS = [
    "countryName",
    "administrationDomainName",
    "networkAddress",
    "terminalIdentifier",
    "privateDomainName",
    "numericUserIdentifier",
    "pdsName",
    "physicalDeliveryCountryName",
    "postalCode",
] as const;

const MULTI_STRING_KEYS = [
    "commonName",
    "organizationName",
    "physicalDeliveryOfficeName",
    "physicalDeliveryOfficeNumber",
    "extensionORAddressComponents",
    "physicalDeliveryPersonalName",
    "physicalDeliveryOrganizationName",
    "physicalDeliveryAddressComponents",
    "unformattedPostalAddress",
    "streetAddress",
    "postOfficeBoxAddress",
    "posteRestanteAddress",
    "uniquePostalName",
    "localPostalAttributes",
] as const;

export type ORAddressCompareMode = "exact" | "elements" | "substrings";

function matchStringsByMode (
    asserted: string,
    stored: string,
    mode: ORAddressCompareMode,
): boolean {
    if (mode === "substrings") {
        if (asserted.length === 0) {
            return stored.length === 0;
        }
        return stored.indexOf(asserted) >= 0;
    }
    return asserted === stored;
}

function matchPersonalNameField (
    asserted: string | undefined,
    stored: string | undefined,
    mode: ORAddressCompareMode,
): boolean {
    const a = asserted ?? "";
    const b = stored ?? "";
    if (mode !== "exact" && a === "") {
        return true;
    }
    return matchStringsByMode(a, b, mode);
}

function personalNameMatches (
    apn: PersonalNameInfo,
    bpn: PersonalNameInfo,
    mode: ORAddressCompareMode,
): boolean {
    return (
        matchStringsByMode(apn.surname, bpn.surname, mode)
        && matchPersonalNameField(apn.givenName, bpn.givenName, mode)
        && matchPersonalNameField(apn.initials, bpn.initials, mode)
        && matchPersonalNameField(apn.generationQualifier, bpn.generationQualifier, mode)
    );
}

function orderedOUsMatch (
    aOUs: readonly string[],
    bOUs: readonly string[],
    mode: ORAddressCompareMode,
): boolean {
    if (mode === "exact") {
        if (aOUs.length !== bOUs.length) {
            return false;
        }
        for (let i = 0; i < aOUs.length; i++) {
            if (aOUs[i] !== bOUs[i]) {
                return false;
            }
        }
        return true;
    }
    if (aOUs.length > bOUs.length) {
        return false;
    }
    let bi = 0;
    for (let ai = 0; ai < aOUs.length; ai++) {
        while (bi < bOUs.length && !matchStringsByMode(aOUs[ai], bOUs[bi], mode)) {
            bi++;
        }
        if (bi >= bOUs.length) {
            return false;
        }
        bi++;
    }
    return true;
}

const MAX_REPERTOIRE_FORMS = 3;

function stringCandidateSetsMatch (
    aForms: ReadonlySet<string>,
    bForms: ReadonlySet<string>,
    mode: ORAddressCompareMode,
): boolean {
    if (mode !== "substrings") {
        let ai = 0;
        for (const af of aForms) {
            if (++ai > MAX_REPERTOIRE_FORMS) {
                break;
            }
            if (bForms.has(af)) {
                return true;
            }
        }
        return false;
    }
    let ai = 0;
    for (const af of aForms) {
        if (++ai > MAX_REPERTOIRE_FORMS) {
            break;
        }
        let bi = 0;
        for (const bf of bForms) {
            if (++bi > MAX_REPERTOIRE_FORMS) {
                break;
            }
            if (matchStringsByMode(af, bf, mode)) {
                return true;
            }
        }
    }
    return false;
}

function candidateArraysMatch<T> (
    aForms: readonly T[],
    bForms: readonly T[],
    match: (a: T, b: T) => boolean,
): boolean {
    const aLimit = Math.min(aForms.length, MAX_REPERTOIRE_FORMS);
    const bLimit = Math.min(bForms.length, MAX_REPERTOIRE_FORMS);
    for (let ai = 0; ai < aLimit; ai++) {
        for (let bi = 0; bi < bLimit; bi++) {
            if (match(aForms[ai], bForms[bi])) {
                return true;
            }
        }
    }
    return false;
}

function ddaMapsMatch (
    aMap: ReadonlyMap<string, string>,
    bMap: ReadonlyMap<string, string>,
    mode: ORAddressCompareMode,
): boolean {
    if (mode === "exact" && aMap.size !== bMap.size) {
        return false;
    }
    for (const [ k, av ] of aMap) {
        const bv = bMap.get(k);
        if (bv === undefined || !matchStringsByMode(av, bv, mode)) {
            return false;
        }
    }
    return true;
}

export
function compareORAddressInfo (
    aInfo: ORAddressInfo,
    bInfo: ORAddressInfo,
    mode: ORAddressCompareMode,
): boolean {
    const exact = mode === "exact";

    for (const key of SCALAR_STRING_KEYS) {
        const av = aInfo[key];
        const bv = bInfo[key];
        if (exact) {
            if (av !== bv) {
                return false;
            }
        } else if (av !== undefined) {
            if (bv === undefined || !matchStringsByMode(av, bv, mode)) {
                return false;
            }
        }
    }

    for (const key of MULTI_STRING_KEYS) {
        const aForms = aInfo[key];
        const bForms = bInfo[key];
        if (exact && (!!aForms !== !!bForms)) {
            return false;
        }
        if (aForms) {
            if (!bForms || !stringCandidateSetsMatch(aForms, bForms, mode)) {
                return false;
            }
        }
    }

    if (exact && (!!aInfo.personalName !== !!bInfo.personalName)) {
        return false;
    }
    if (aInfo.personalName) {
        if (
            !bInfo.personalName
            || !candidateArraysMatch(aInfo.personalName, bInfo.personalName, (apn, bpn) => personalNameMatches(apn, bpn, mode))
        ) {
            return false;
        }
    }

    if (exact && (!!aInfo.organizationalUnitNames !== !!bInfo.organizationalUnitNames)) {
        return false;
    }
    if (aInfo.organizationalUnitNames) {
        if (
            !bInfo.organizationalUnitNames
            || !candidateArraysMatch(aInfo.organizationalUnitNames, bInfo.organizationalUnitNames, (aOUs, bOUs) => orderedOUsMatch(aOUs, bOUs, mode))
        ) {
            return false;
        }
    }

    if (exact && (!!aInfo.builtInDomainDefinedAttributes !== !!bInfo.builtInDomainDefinedAttributes)) {
        return false;
    }
    if (aInfo.builtInDomainDefinedAttributes) {
        if (
            !bInfo.builtInDomainDefinedAttributes
            || !candidateArraysMatch(aInfo.builtInDomainDefinedAttributes, bInfo.builtInDomainDefinedAttributes, (aMap, bMap) => ddaMapsMatch(aMap, bMap, mode))
        ) {
            return false;
        }
    }

    if (exact && ((aInfo.terminalType === undefined) !== (bInfo.terminalType === undefined))) {
        return false;
    }
    if (aInfo.terminalType !== undefined) {
        // Loose equality so a number matches the same bigint.
        if (bInfo.terminalType === undefined || aInfo.terminalType != bInfo.terminalType) {
            return false;
        }
    }

    const aExt = aInfo.extendedNetworkAddress;
    const bExt = bInfo.extendedNetworkAddress;
    if (exact && (!!aExt !== !!bExt)) {
        return false;
    }
    if (aExt) {
        if (!bExt) {
            return false;
        }
        const aIsPsap = aExt instanceof PresentationAddress;
        const bIsPsap = bExt instanceof PresentationAddress;
        if (aIsPsap || bIsPsap) {
            if (!aIsPsap || !bIsPsap) {
                return false;
            }
            return presentationAddressMatchTyped(aExt, bExt);
        }
        if (!matchStringsByMode(aExt[0], bExt[0], mode)) {
            return false;
        }
        if (exact) {
            if (aExt[1] !== bExt[1]) {
                return false;
            }
        } else if (aExt[1] !== undefined) {
            if (bExt[1] === undefined || !matchStringsByMode(aExt[1], bExt[1], mode)) {
                return false;
            }
        }
    }

    return true;
}

export
function orAddressesMatch (a: ORAddress, b: ORAddress): boolean {
    if (a.isEmptyOrAddress() || b.isEmptyOrAddress()) {
        return false;
    }
    const aInfo: ORAddressInfo | null = orAddressToInfo(a);
    const bInfo: ORAddressInfo | null = orAddressToInfo(b);
    if (!aInfo || !bInfo) {
        return false;
    }
    return compareORAddressInfo(aInfo, bInfo, "exact");
}

export
function msStringToString (ms: MSString): string {
    if ("printable" in ms) {
        return ms.printable;
    } else if ("teletex" in ms) {
        return teletexToString(ms.teletex);
    } else if ("general" in ms) {
        return ms.general;
    } else if ("universal" in ms) {
        return ms.universal;
    } else if ("bmp" in ms) {
        return ms.bmp;
    } else {
        return "?";
    }
}

/**
 * Decode an `ASN1Element` representing an `MSString` assertion or any
 * attribute syntax matched by `mSString*` / `mSSubstringsMatch` rules
 * (including `UniversalOrBMPString` used by X.420 `ExtendedSubject`,
 * `ManualHandlingInstruction`, and `OriginatorsReference`, as well as
 * `NumericString`, `IA5String`, and `UTF8String`).
 */
export
function decodeMSStringElement (el: ASN1Element): string {
    if (el.tagClass !== ASN1TagClass.universal) {
        throw new ASN1ConstructionError(
            `Expected UNIVERSAL string or UniversalOrBMPString SET, got tag class ${el.tagClass}`,
            el,
        );
    }
    switch (el.tagNumber) {
        case ASN1UniversalType.printableString:
            return $._decodePrintableString(el);
        case ASN1UniversalType.teletexString:
            return teletexToString($._decodeTeletexString(el));
        case ASN1UniversalType.generalString:
            return $._decodeGeneralString(el);
        case ASN1UniversalType.universalString:
            return $._decodeUniversalString(el);
        case ASN1UniversalType.bmpString:
            return $._decodeBMPString(el);
        case ASN1UniversalType.set:
            return _decode_UniversalOrBMPString(el).toString();
        case ASN1UniversalType.numericString:
            return $._decodeNumericString(el);
        case ASN1UniversalType.ia5String:
            return $._decodeIA5String(el);
        case ASN1UniversalType.utf8String:
            return $._decodeUTF8String(el);
        default:
            throw new ASN1ConstructionError(
                `Unsupported MSString element tag [UNIVERSAL ${el.tagNumber}]`,
                el,
            );
    }
}

export function recursivelyNormalize (value: string): string;
export function recursivelyNormalize<T> (value: readonly T[]): T[];
export function recursivelyNormalize<K, V> (value: ReadonlyMap<K, V>): Map<K, V>;
export function recursivelyNormalize<T> (value: ReadonlySet<T>): Set<T>;
export function recursivelyNormalize<T extends Record<string, unknown>> (value: T): T;
export function recursivelyNormalize<T extends number | bigint | boolean | symbol | null | undefined> (value: T): T;
export function recursivelyNormalize (value: unknown): unknown {
    if (typeof value === "string") {
        return normalizeMSString(value);
    }
    if (Array.isArray(value)) {
        if (value.length === 0) {
            return value;
        }
        return value.map((item) => recursivelyNormalize(item));
    }
    if (value instanceof Map) {
        const out = new Map<unknown, unknown>();
        for (const [ k, v ] of value) {
            out.set(recursivelyNormalize(k), recursivelyNormalize(v));
        }
        return out;
    }
    if (value instanceof Set) {
        const out = new Set<unknown>();
        for (const item of value) {
            out.add(recursivelyNormalize(item));
        }
        return out;
    }
    if (typeof value === "object" && value !== null) {
        const out: Record<string, unknown> = {};
        for (const [ key, val ] of Object.entries(value)) {
            out[key] = recursivelyNormalize(val);
        }
        return out;
    }
    return value;
}
