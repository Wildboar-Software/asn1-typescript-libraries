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
import {
    MATCH_FLAG_ASSERTION_NORMALIZED,
    MATCH_FLAG_CONSTANT_TIME,
    MATCH_FLAG_VALUE_NORMALIZED,
    matchStringSubstrings,
} from "@wildboar/x500";
import { ctStringsEqual, stringsEqual } from "../constantTime.js";
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

export
function teletexBytesToString (ttex: Uint8Array): string {
    const filtered = ttex.includes(0xcc) ? ttex.filter((b) => b !== 0xcc) : ttex;
    return teletexToString(filtered);
}

/**
 * Normalize a string per ITU-T Rec. X.413 §12.2 / X.402 §18.4:
 * - Strip insignificant non-spacing underline and control characters
 * - Normalize to Unicode NFC so decomposed T.61 sequences and reordered
 *   combining marks match precomposed BMP/Universal strings
 * - Collapse whitespace runs and trim leading/trailing spaces, preserving a
 *   single `" "` when a non-empty input contained only spaces
 * - Fold to upper-case and re-normalize to NFC
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
    return caseFold
        ? spaceNormalized.toUpperCase().normalize("NFC")
        : spaceNormalized;
}

export
function prepareMSStringValue (
    raw: string,
    caseFold: boolean = true,
    flags: number = 0,
): string {
    return (flags & MATCH_FLAG_VALUE_NORMALIZED)
        ? raw
        : normalizeMSString(raw, caseFold);
}

export
function matchMSSubstring (
    stored: string,
    needle: string,
    flags: number = 0,
): boolean {
    if (needle.length === 0) {
        return stored.length === 0;
    }
    if (flags & MATCH_FLAG_CONSTANT_TIME) {
        return matchStringSubstrings(stored, [ { any_: needle } ], flags);
    }
    return stored.indexOf(needle) >= 0;
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
export
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

export
function normalizeNumericOnly (raw: string): string {
    if (raw.length === 0) {
        return "";
    }
    const stripped = raw.trim().replace(/\s+/g, "");
    return stripped.length === 0 ? " " : stripped;
}

export
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
        return (code.length === 0 || code === " ") ? null : code;
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

/**
 * PSAP addresses are `PresentationAddress` values. Do not use `instanceof`:
 * a second copy of the class (duplicate package versions) would fail it.
 * Numeric extended-network-address values are tuples and have no `nAddresses`.
 */
function isPsapAddress (
    value: NonNullable<ORAddressInfo["extendedNetworkAddress"]>,
): value is PresentationAddress {
    return Array.isArray((value as PresentationAddress).nAddresses);
}

function personalNameFromJSON (json: PersonalNameJSON, normalize: boolean): PersonalNameInfo | null {
    const norm = (s: string): string => (normalize ? normalizeMSString(s) : s);
    if (json.surname.length === 0) {
        return null;
    }
    const info: PersonalNameInfo = {
        surname: norm(json.surname),
    };
    if (json["given-name"] !== undefined) {
        if (json["given-name"].length === 0) {
            return null;
        }
        info.givenName = norm(json["given-name"]);
    }
    if (json.initials !== undefined) {
        if (json.initials.length === 0) {
            return null;
        }
        info.initials = norm(json.initials);
    }
    if (json["generation-qualifier"] !== undefined) {
        if (json["generation-qualifier"].length === 0) {
            return null;
        }
        info.generationQualifier = norm(json["generation-qualifier"]);
    }
    return info;
}

function buildDomainDefinedMap (
    ddas: readonly DomainDefinedAttributeJSON[],
    normalize: boolean,
): Map<string, string> | null {
    if (ddas.length === 0) {
        return null;
    }
    const dict = new Map<string, string>();
    for (const { type, value } of ddas) {
        if (type.length === 0 || value.length === 0) {
            return null;
        }
        const key = normalize ? normalizeMSString(type) : type;
        const val = normalize ? normalizeMSString(value) : value;
        const existing = dict.get(key);
        if (
            existing !== undefined
            && (normalizeMSString(existing) !== val)
        ) {
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

type ExtensionHandler = (
    info: ORAddressInfo,
    value: ASN1Element,
    normalize: boolean,
) => ORAddressInfo | null;

function makePDSHandler (
    field: PDSMultiField,
    decode: (el: ASN1Element) => { toJSON(): { "printable-string"?: string; "teletex-string"?: string } },
): ExtensionHandler {
    return (info: ORAddressInfo, value: ASN1Element, normalize: boolean): ORAddressInfo | null => {
        const json = decode(value).toJSON();
        const printableString = json["printable-string"];
        const teletexString = json["teletex-string"];
        const out: string[] = [];
        if (printableString !== undefined) {
            if (printableString.length === 0) {
                return null;
            }
            out.push(normalize ? normalizeMSString(printableString) : printableString);
        }
        if (teletexString !== undefined) {
            if (teletexString.length === 0) {
                return null;
            }
            out.push(normalize ? normalizeMSString(teletexString) : teletexString);
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
): ExtensionHandler {
    return (info: ORAddressInfo, value: ASN1Element, normalize: boolean): ORAddressInfo | null => {
        const raw = decode(value).toString();
        if (raw.length === 0) {
            return null;
        }
        info[field] = addStringCandidates(info[field], [ normalize ? normalizeMSString(raw) : raw ]);
        return info;
    };
}

function process_common_name_ext (info: ORAddressInfo, value: ASN1Element, normalize: boolean): ORAddressInfo | null {
    const raw = common_name.decoderFor["&Type"]!(value);
    if (raw.length === 0) {
        return null;
    }
    info.commonName = addStringCandidates(info.commonName, [ normalize ? normalizeMSString(raw) : raw ]);
    return info;
}

function process_teletex_common_name_ext (info: ORAddressInfo, value: ASN1Element, normalize: boolean): ORAddressInfo | null {
    const raw = teletex_common_name.decoderFor["&Type"]!(value);
    if (raw.length === 0) {
        return null;
    }
    const str = teletexBytesToString(raw);
    info.commonName = addStringCandidates(info.commonName, [ normalize ? normalizeMSString(str) : str ]);
    return info;
}

function process_universal_common_name_ext (info: ORAddressInfo, value: ASN1Element, normalize: boolean): ORAddressInfo | null {
    const raw = universal_common_name.decoderFor["&Type"]!(value).toString();
    if (raw.length === 0) {
        return null;
    }
    info.commonName = addStringCandidates(info.commonName, [ normalize ? normalizeMSString(raw) : raw ]);
    return info;
}

function process_teletex_organization_name_ext (info: ORAddressInfo, value: ASN1Element, normalize: boolean): ORAddressInfo | null {
    const raw = teletex_organization_name.decoderFor["&Type"]!(value);
    if (raw.length === 0) {
        return null;
    }
    const str = teletexBytesToString(raw);
    info.organizationName = addStringCandidates(info.organizationName, [ normalize ? normalizeMSString(str) : str ]);
    return info;
}

function process_universal_organization_name_ext (info: ORAddressInfo, value: ASN1Element, normalize: boolean): ORAddressInfo | null {
    const raw = universal_organization_name.decoderFor["&Type"]!(value).toString();
    if (raw.length === 0) {
        return null;
    }
    info.organizationName = addStringCandidates(info.organizationName, [ normalize ? normalizeMSString(raw) : raw ]);
    return info;
}

function process_teletex_personal_name_ext (info: ORAddressInfo, value: ASN1Element, normalize: boolean): ORAddressInfo | null {
    const parsed = personalNameFromJSON(teletex_personal_name.decoderFor["&Type"]!(value).toJSON(), normalize);
    if (!parsed) {
        return null;
    }
    info.personalName = appendCandidates(info.personalName, [ parsed ]);
    return info;
}

function process_universal_personal_name_ext (info: ORAddressInfo, value: ASN1Element, normalize: boolean): ORAddressInfo | null {
    const parsed = personalNameFromJSON(universal_personal_name.decoderFor["&Type"]!(value).toJSON(), normalize);
    if (!parsed) {
        return null;
    }
    info.personalName = appendCandidates(info.personalName, [ parsed ]);
    return info;
}

function process_teletex_organizational_unit_names_ext (info: ORAddressInfo, value: ASN1Element, normalize: boolean): ORAddressInfo | null {
    const ouns = teletex_organizational_unit_names.decoderFor["&Type"]!(value);
    if (ouns.length === 0) {
        return null;
    }
    const out: string[] = [];
    for (const ou of ouns) {
        if (ou.length === 0) {
            return null;
        }
        const str = teletexBytesToString(ou);
        out.push(normalize ? normalizeMSString(str) : str);
    }
    info.organizationalUnitNames = appendCandidates(info.organizationalUnitNames, [ out ]);
    return info;
}

function process_universal_organizational_unit_names_ext (info: ORAddressInfo, value: ASN1Element, normalize: boolean): ORAddressInfo | null {
    const ouns = universal_organizational_unit_names.decoderFor["&Type"]!(value);
    if (ouns.length === 0) {
        return null;
    }
    const out: string[] = [];
    for (const ou of ouns) {
        const raw = ou.toString();
        if (raw.length === 0) {
            return null;
        }
        out.push(normalize ? normalizeMSString(raw) : raw);
    }
    info.organizationalUnitNames = appendCandidates(info.organizationalUnitNames, [ out ]);
    return info;
}

function process_teletex_domain_defined_attributes_ext (info: ORAddressInfo, value: ASN1Element, normalize: boolean): ORAddressInfo | null {
    const attrs = teletex_domain_defined_attributes.decoderFor["&Type"]!(value);
    const dict = buildDomainDefinedMap(attrs.map((dda) => dda.toJSON()), normalize);
    if (!dict) {
        return null;
    }
    info.builtInDomainDefinedAttributes = appendCandidates(info.builtInDomainDefinedAttributes, [ dict ]);
    return info;
}

function process_universal_domain_defined_attributes_ext (info: ORAddressInfo, value: ASN1Element, normalize: boolean): ORAddressInfo | null {
    const attrs = universal_domain_defined_attributes.decoderFor["&Type"]!(value);
    const dict = buildDomainDefinedMap(attrs.map((dda) => dda.toJSON()), normalize);
    if (!dict) {
        return null;
    }
    info.builtInDomainDefinedAttributes = appendCandidates(info.builtInDomainDefinedAttributes, [ dict ]);
    return info;
}

function process_pds_name_ext (info: ORAddressInfo, value: ASN1Element, normalize: boolean): ORAddressInfo | null {
    const raw = pds_name.decoderFor["&Type"]!(value);
    if (raw.length === 0) {
        return null;
    }
    info.pdsName = normalize ? normalizeMSString(raw) : raw;
    return info;
}

function process_physical_delivery_country_name_ext (info: ORAddressInfo, value: ASN1Element, normalize: boolean): ORAddressInfo | null {
    const pdcn = physical_delivery_country_name.decoderFor["&Type"]!(value);
    if (!normalize) {
        const raw = ("x121_dcc_code" in pdcn) ? pdcn.x121_dcc_code : pdcn.iso_3166_alpha2_code;
        if (raw.trim().length === 0) {
            return null;
        }
        info.physicalDeliveryCountryName = raw;
        return info;
    }
    const normalized = normalizeCountryChoice(pdcn);
    if (!normalized) {
        return null;
    }
    info.physicalDeliveryCountryName = normalized;
    return info;
}

function process_postal_code_ext (info: ORAddressInfo, value: ASN1Element, normalize: boolean): ORAddressInfo | null {
    const pc = postal_code.decoderFor["&Type"]!(value);
    const raw = ("numeric_code" in pc) ? pc.numeric_code : pc.printable_code;
    if (raw.length === 0) {
        return null;
    }
    info.postalCode = normalize ? normalizeNumericOrPrintable(raw) : raw;
    return info;
}

function process_unformatted_postal_address_ext (info: ORAddressInfo, value: ASN1Element, normalize: boolean): ORAddressInfo | null {
    const json = unformatted_postal_address.decoderFor["&Type"]!(value).toJSON();
    const candidates: string[] = [];
    const lines = json["printable-address"];
    if (lines !== undefined) {
        if (lines.length === 0 || lines.some((line) => line.length === 0)) {
            return null;
        }
        const joined = lines.join("\r\n");
        candidates.push(normalize ? normalizeMSString(joined) : joined);
    }
    const ttex = json["teletex-string"];
    if (ttex !== undefined) {
        if (ttex.length === 0) {
            return null;
        }
        candidates.push(normalize ? normalizeMSString(ttex) : ttex);
    }
    if (candidates.length === 0) {
        return null;
    }
    info.unformattedPostalAddress = addStringCandidates(info.unformattedPostalAddress, candidates);
    return info;
}

function process_universal_unformatted_postal_address_ext (info: ORAddressInfo, value: ASN1Element, normalize: boolean): ORAddressInfo | null {
    const raw = universal_unformatted_postal_address.decoderFor["&Type"]!(value).toString();
    if (raw.length === 0) {
        return null;
    }
    info.unformattedPostalAddress = addStringCandidates(info.unformattedPostalAddress, [ normalize ? normalizeMSString(raw) : raw ]);
    return info;
}

function process_extended_network_address_ext (info: ORAddressInfo, value: ASN1Element, normalize: boolean): ORAddressInfo | null {
    // Use MTSAbstractService's ExtendedNetworkAddress decoder so `psap_address`
    // is a PresentationAddress (it has an `nAddresses` array). Do not identify
    // it with `instanceof`; another copy of the class would fail that check.
    const param = _decode_ExtendedNetworkAddress(value);
    if ("e163_4_address" in param) {
        if (param.e163_4_address.number_.length === 0) {
            return null;
        }
        const numberPart = normalize
            ? normalizeNumericOnly(param.e163_4_address.number_)
            : param.e163_4_address.number_;
        let subaddressPart: string | undefined;
        if (param.e163_4_address.sub_address !== undefined) {
            if (param.e163_4_address.sub_address.length === 0) {
                return null;
            }
            subaddressPart = normalize
                ? normalizeNumericOnly(param.e163_4_address.sub_address)
                : param.e163_4_address.sub_address;
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

const handlers: Map<number, ExtensionHandler> = new Map([
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
    return (orAddressesMatch(new ORAddress(a), new ORAddress(b)) === true)
        || (a.isEmpty() && b.isEmpty());
}

export
function orAddressToInfo (addr: ORAddress, normalize: boolean = true): ORAddressInfo | null {
    let ret: ORAddressInfo = {};
    const bisa = addr.built_in_standard_attributes;
    if (bisa.country_name) {
        if (!normalize) {
            const raw = ("x121_dcc_code" in bisa.country_name)
                ? bisa.country_name.x121_dcc_code
                : bisa.country_name.iso_3166_alpha2_code;
            if (raw.trim().length === 0) {
                return null;
            }
            ret.countryName = raw;
        } else {
            const c = bisa.getISO3166Country();
            const country = c !== undefined
                ? normalizeMSString(c)
                : normalizeCountryChoice(bisa.country_name);
            if (!country) {
                return null;
            }
            ret.countryName = country;
        }
    }
    const admd = bisa.getADMDString();
    if (admd !== undefined) {
        ret.administrationDomainName = normalize ? normalizeNumericOrPrintable(admd) : admd;
    }
    if (bisa.network_address !== undefined) {
        if (bisa.network_address.length === 0) {
            return null;
        }
        ret.networkAddress = normalize ? normalizeNumericOnly(bisa.network_address) : bisa.network_address;
    }
    if (bisa.terminal_identifier !== undefined) {
        if (bisa.terminal_identifier.length === 0) {
            return null;
        }
        ret.terminalIdentifier = normalize ? normalizeMSString(bisa.terminal_identifier) : bisa.terminal_identifier;
    }
    const prmd = bisa.getPRMDString();
    if (prmd !== undefined) {
        if (prmd.length === 0) {
            return null;
        }
        ret.privateDomainName = normalize ? normalizeNumericOrPrintable(prmd) : prmd;
    }
    if (bisa.organization_name !== undefined) {
        if (bisa.organization_name.length === 0) {
            return null;
        }
        ret.organizationName = new Set([ normalize ? normalizeMSString(bisa.organization_name) : bisa.organization_name ]);
    }
    if (bisa.numeric_user_identifier !== undefined) {
        if (bisa.numeric_user_identifier.length === 0) {
            return null;
        }
        ret.numericUserIdentifier = normalize ? normalizeNumericOnly(bisa.numeric_user_identifier) : bisa.numeric_user_identifier;
    }
    if (bisa.personal_name) {
        const json: PersonalNameJSON = bisa.personal_name.toJSON();
        const parsed = personalNameFromJSON(json, normalize);
        if (!parsed) {
            return null;
        }
        ret.personalName = [ parsed ];
    }
    if (bisa.organizational_unit_names !== undefined) {
        if (bisa.organizational_unit_names.length === 0) {
            return null;
        }
        const outOUs: string[] = [];
        for (const ou of bisa.organizational_unit_names) {
            if (ou.length === 0) {
                return null;
            }
            outOUs.push(normalize ? normalizeMSString(ou) : ou);
        }
        ret.organizationalUnitNames = [ outOUs ];
    }

    if (addr.built_in_domain_defined_attributes !== undefined) {
        const dict = buildDomainDefinedMap(
            addr.built_in_domain_defined_attributes.map((dda) => dda.toJSON()),
            normalize,
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
        const handlerResult = handler(ret, ext.extension_attribute_value, normalize);
        if (!handlerResult) {
            return null;
        }
        ret = handlerResult;
    }

    return ret;
}

function normalizeCountryString (raw: string): string | null {
    return DIGITS_AND_SPACES_ONLY.test(raw)
        ? normalizeCountryChoice({ x121_dcc_code: raw })
        : normalizeCountryChoice({ iso_3166_alpha2_code: raw });
}

export
function normalizeORAddressInfo (raw: ORAddressInfo): ORAddressInfo | null {
    const out: ORAddressInfo = {};
    if (raw.countryName !== undefined) {
        const c = normalizeCountryString(raw.countryName);
        if (!c) {
            return null;
        }
        out.countryName = c;
    }
    if (raw.administrationDomainName !== undefined) {
        out.administrationDomainName = normalizeNumericOrPrintable(raw.administrationDomainName);
    }
    if (raw.networkAddress !== undefined) {
        out.networkAddress = normalizeNumericOnly(raw.networkAddress);
    }
    if (raw.terminalIdentifier !== undefined) {
        out.terminalIdentifier = normalizeMSString(raw.terminalIdentifier);
    }
    if (raw.privateDomainName !== undefined) {
        out.privateDomainName = normalizeNumericOrPrintable(raw.privateDomainName);
    }
    if (raw.numericUserIdentifier !== undefined) {
        out.numericUserIdentifier = normalizeNumericOnly(raw.numericUserIdentifier);
    }
    if (raw.pdsName !== undefined) {
        out.pdsName = normalizeMSString(raw.pdsName);
    }
    if (raw.physicalDeliveryCountryName !== undefined) {
        const c = normalizeCountryString(raw.physicalDeliveryCountryName);
        if (!c) {
            return null;
        }
        out.physicalDeliveryCountryName = c;
    }
    if (raw.postalCode !== undefined) {
        out.postalCode = normalizeNumericOrPrintable(raw.postalCode);
    }
    for (const key of MULTI_STRING_KEYS) {
        const set = raw[key];
        if (set) {
            const normSet = new Set<string>();
            for (const s of set) {
                normSet.add(normalizeMSString(s));
            }
            out[key] = normSet;
        }
    }
    if (raw.personalName) {
        out.personalName = raw.personalName.map((pn) => ({
            surname: normalizeMSString(pn.surname),
            ...(pn.givenName !== undefined ? { givenName: normalizeMSString(pn.givenName) } : {}),
            ...(pn.initials !== undefined ? { initials: normalizeMSString(pn.initials) } : {}),
            ...(pn.generationQualifier !== undefined ? { generationQualifier: normalizeMSString(pn.generationQualifier) } : {}),
        }));
    }
    if (raw.organizationalUnitNames) {
        out.organizationalUnitNames = raw.organizationalUnitNames.map(
            (ous) => ous.map((ou) => normalizeMSString(ou)),
        );
    }
    if (raw.builtInDomainDefinedAttributes) {
        const maps: Map<string, string>[] = [];
        for (const rawMap of raw.builtInDomainDefinedAttributes) {
            const dict = new Map<string, string>();
            for (const [ k, v ] of rawMap) {
                const nk = normalizeMSString(k);
                const nv = normalizeMSString(v);
                const existing = dict.get(nk);
                if (existing !== undefined && existing !== nv) {
                    return null;
                }
                dict.set(nk, nv);
            }
            maps.push(dict);
        }
        out.builtInDomainDefinedAttributes = maps;
    }
    if (raw.terminalType !== undefined) {
        out.terminalType = raw.terminalType;
    }
    if (raw.extendedNetworkAddress !== undefined) {
        if (isPsapAddress(raw.extendedNetworkAddress)) {
            out.extendedNetworkAddress = raw.extendedNetworkAddress;
        } else {
            out.extendedNetworkAddress = [
                normalizeNumericOnly(raw.extendedNetworkAddress[0]),
                raw.extendedNetworkAddress[1] !== undefined
                    ? normalizeNumericOnly(raw.extendedNetworkAddress[1])
                    : undefined,
            ];
        }
    }
    return out;
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
    flags: number = 0,
): boolean {
    if (mode === "substrings") {
        return matchMSSubstring(stored, asserted, flags);
    }
    return stringsEqual(asserted, stored, flags & MATCH_FLAG_CONSTANT_TIME);
}

function matchPersonalNameFieldFast (
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

function personalNameMatchesFast (
    apn: PersonalNameInfo,
    bpn: PersonalNameInfo,
    mode: ORAddressCompareMode,
): boolean {
    return (
        matchStringsByMode(apn.surname, bpn.surname, mode)
        && matchPersonalNameFieldFast(apn.givenName, bpn.givenName, mode)
        && matchPersonalNameFieldFast(apn.initials, bpn.initials, mode)
        && matchPersonalNameFieldFast(apn.generationQualifier, bpn.generationQualifier, mode)
    );
}

function matchPersonalNameFieldConstantTime (
    asserted: string | undefined,
    stored: string | undefined,
    mode: ORAddressCompareMode,
    flags: number,
): boolean {
    if (mode !== "exact" && (asserted === undefined || asserted === "")) {
        return true;
    }
    const contentOk = matchStringsByMode(asserted ?? "", stored ?? "", mode, flags);
    const presenceOk = (asserted === undefined) === (stored === undefined);
    return presenceOk && contentOk;
}

function personalNameMatchesConstantTime (
    apn: PersonalNameInfo,
    bpn: PersonalNameInfo,
    mode: ORAddressCompareMode,
    flags: number,
): boolean {
    const sOk = matchStringsByMode(apn.surname, bpn.surname, mode, flags);
    const gOk = matchPersonalNameFieldConstantTime(apn.givenName, bpn.givenName, mode, flags);
    const iOk = matchPersonalNameFieldConstantTime(apn.initials, bpn.initials, mode, flags);
    const qOk = matchPersonalNameFieldConstantTime(apn.generationQualifier, bpn.generationQualifier, mode, flags);
    return sOk && gOk && iOk && qOk;
}

function orderedOUsMatchFast (
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

function orderedOUsMatchConstantTime (
    aOUs: readonly string[],
    bOUs: readonly string[],
    mode: ORAddressCompareMode,
    flags: number,
): boolean {
    if (mode === "exact") {
        let matched = aOUs.length === bOUs.length;
        const count = Math.max(aOUs.length, bOUs.length);
        for (let i = 0; i < count; i++) {
            if (!ctStringsEqual(aOUs[i] ?? "", bOUs[i] ?? "")) {
                matched = false;
            }
        }
        return matched;
    }
    let ai = 0;
    const count = Math.max(aOUs.length, bOUs.length);
    for (let i = 0; i < count; i++) {
        const aIdx = ai < aOUs.length ? ai : (aOUs.length > 0 ? aOUs.length - 1 : 0);
        const aItem = aOUs[aIdx] ?? "";
        const bItem = i < bOUs.length ? bOUs[i] : "";
        const hit = matchStringsByMode(aItem, bItem, mode, flags)
            && (i < bOUs.length)
            && (ai < aOUs.length);
        if (hit) {
            ai++;
        }
    }
    return aOUs.length <= bOUs.length && ai === aOUs.length;
}

const MAX_REPERTOIRE_FORMS = 3;

function stringCandidateSetsMatchFast (
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

function stringCandidateSetsMatchConstantTime (
    aForms: ReadonlySet<string>,
    bForms: ReadonlySet<string> | undefined,
    mode: ORAddressCompareMode,
    flags: number,
): boolean {
    let found = false;
    let ai = 0;
    for (const af of aForms) {
        if (++ai > MAX_REPERTOIRE_FORMS) {
            break;
        }
        if (!bForms || bForms.size === 0) {
            matchStringsByMode(af, "", mode, flags);
            continue;
        }
        let bi = 0;
        for (const bf of bForms) {
            if (++bi > MAX_REPERTOIRE_FORMS) {
                break;
            }
            if (matchStringsByMode(af, bf, mode, flags)) {
                found = true;
            }
        }
    }
    return !!bForms && found;
}

function candidateArraysMatchFast<T> (
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

function candidateArraysMatchConstantTime<T> (
    aForms: readonly T[],
    bForms: readonly T[],
    match: (a: T, b: T) => boolean,
): boolean {
    const aLimit = Math.min(aForms.length, MAX_REPERTOIRE_FORMS);
    const bLimit = Math.min(bForms.length, MAX_REPERTOIRE_FORMS);
    let found = false;
    for (let ai = 0; ai < aLimit; ai++) {
        for (let bi = 0; bi < bLimit; bi++) {
            if (match(aForms[ai], bForms[bi])) {
                found = true;
            }
        }
    }
    return found;
}

function ddaMapsMatchFast (
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

function ddaMapsMatchConstantTime (
    aMap: ReadonlyMap<string, string>,
    bMap: ReadonlyMap<string, string>,
    mode: ORAddressCompareMode,
    flags: number,
): boolean {
    let allMatched = (mode !== "exact") || (aMap.size === bMap.size);
    for (const [ ak, av ] of aMap) {
        if (bMap.size === 0) {
            ctStringsEqual(ak, "");
            matchStringsByMode(av, "", mode, flags);
            allMatched = false;
            continue;
        }
        let found = false;
        for (const [ bk, bv ] of bMap) {
            const keyOk = ctStringsEqual(ak, bk);
            const valOk = matchStringsByMode(av, bv, mode, flags);
            if (keyOk && valOk) {
                found = true;
            }
        }
        if (!found) {
            allMatched = false;
        }
    }
    return allMatched;
}

function compareORAddressInfoFast (
    aInfo: ORAddressInfo,
    bInfo: ORAddressInfo,
    mode: ORAddressCompareMode,
    flags: number,
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
            if (!bForms || !stringCandidateSetsMatchFast(aForms, bForms, mode)) {
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
            || !candidateArraysMatchFast(aInfo.personalName, bInfo.personalName, (apn, bpn) => personalNameMatchesFast(apn, bpn, mode))
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
            || !candidateArraysMatchFast(aInfo.organizationalUnitNames, bInfo.organizationalUnitNames, (aOUs, bOUs) => orderedOUsMatchFast(aOUs, bOUs, mode))
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
            || !candidateArraysMatchFast(aInfo.builtInDomainDefinedAttributes, bInfo.builtInDomainDefinedAttributes, (aMap, bMap) => ddaMapsMatchFast(aMap, bMap, mode))
        ) {
            return false;
        }
    }

    if (exact && ((aInfo.terminalType === undefined) !== (bInfo.terminalType === undefined))) {
        return false;
    }
    if (aInfo.terminalType !== undefined) {
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
        const aIsPsap = isPsapAddress(aExt);
        const bIsPsap = isPsapAddress(bExt);
        if (aIsPsap || bIsPsap) {
            if (!aIsPsap || !bIsPsap) {
                return false;
            }
            return presentationAddressMatchTyped(aExt, bExt, undefined, flags) === true;
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

const DUMMY_PERSONAL_NAMES: readonly PersonalNameInfo[] = [ { surname: "" } ];
const DUMMY_OU_LISTS: readonly (readonly string[])[] = [ [] ];
const DUMMY_DDA_MAPS: readonly ReadonlyMap<string, string>[] = [ new Map() ];
const DUMMY_PSAP = new PresentationAddress(undefined, undefined, undefined, []);

function compareORAddressInfoConstantTime (
    aInfo: ORAddressInfo,
    bInfo: ORAddressInfo,
    mode: ORAddressCompareMode,
    flags: number,
): boolean {
    const exact = mode === "exact";
    let matched = true;

    for (const key of SCALAR_STRING_KEYS) {
        const av = aInfo[key];
        const bv = bInfo[key];
        if (av !== undefined) {
            const contentOk = matchStringsByMode(av, bv ?? "", mode, flags);
            if (bv === undefined || !contentOk) {
                matched = false;
            }
        } else if (exact && bv !== undefined) {
            matched = false;
        }
    }

    for (const key of MULTI_STRING_KEYS) {
        const aForms = aInfo[key];
        const bForms = bInfo[key];
        if (aForms) {
            if (!stringCandidateSetsMatchConstantTime(aForms, bForms, mode, flags)) {
                matched = false;
            }
        } else if (exact && bForms) {
            matched = false;
        }
    }

    if (aInfo.personalName) {
        const bPNs = bInfo.personalName ?? DUMMY_PERSONAL_NAMES;
        const pnOk = candidateArraysMatchConstantTime(
            aInfo.personalName,
            bPNs,
            (apn, bpn) => personalNameMatchesConstantTime(apn, bpn, mode, flags),
        );
        if (!bInfo.personalName || !pnOk) {
            matched = false;
        }
    } else if (exact && bInfo.personalName) {
        matched = false;
    }

    if (aInfo.organizationalUnitNames) {
        const bOUs = bInfo.organizationalUnitNames ?? DUMMY_OU_LISTS;
        const ouOk = candidateArraysMatchConstantTime(
            aInfo.organizationalUnitNames,
            bOUs,
            (aList, bList) => orderedOUsMatchConstantTime(aList, bList, mode, flags),
        );
        if (!bInfo.organizationalUnitNames || !ouOk) {
            matched = false;
        }
    } else if (exact && bInfo.organizationalUnitNames) {
        matched = false;
    }

    if (aInfo.builtInDomainDefinedAttributes) {
        const bDDAs = bInfo.builtInDomainDefinedAttributes ?? DUMMY_DDA_MAPS;
        const ddaOk = candidateArraysMatchConstantTime(
            aInfo.builtInDomainDefinedAttributes,
            bDDAs,
            (aMap, bMap) => ddaMapsMatchConstantTime(aMap, bMap, mode, flags),
        );
        if (!bInfo.builtInDomainDefinedAttributes || !ddaOk) {
            matched = false;
        }
    } else if (exact && bInfo.builtInDomainDefinedAttributes) {
        matched = false;
    }

    if (aInfo.terminalType !== undefined) {
        if (bInfo.terminalType === undefined || aInfo.terminalType != bInfo.terminalType) {
            matched = false;
        }
    } else if (exact && bInfo.terminalType !== undefined) {
        matched = false;
    }

    const aExt = aInfo.extendedNetworkAddress;
    const bExt = bInfo.extendedNetworkAddress;
    if (aExt) {
        if (isPsapAddress(aExt)) {
            const bIsPsap = !!bExt && isPsapAddress(bExt);
            const bPsap = bIsPsap ? bExt : DUMMY_PSAP;
            const psapOk = presentationAddressMatchTyped(aExt, bPsap, undefined, flags) === true;
            if (!bIsPsap || !psapOk) {
                matched = false;
            }
        } else {
            const bTuple = (bExt && !isPsapAddress(bExt)) ? bExt : undefined;
            const numOk = matchStringsByMode(aExt[0], bTuple ? bTuple[0] : "", mode, flags);
            let subOk = true;
            if (aExt[1] !== undefined) {
                const subContentOk = matchStringsByMode(aExt[1], bTuple?.[1] ?? "", mode, flags);
                subOk = (bTuple?.[1] !== undefined) && subContentOk;
            } else if (exact && bTuple?.[1] !== undefined) {
                subOk = false;
            }
            if (!bTuple || !numOk || !subOk) {
                matched = false;
            }
        }
    } else if (exact && bExt) {
        matched = false;
    }

    return matched;
}

export
function compareORAddressInfo (
    aInfo: ORAddressInfo,
    bInfo: ORAddressInfo,
    mode: ORAddressCompareMode,
    flags: number = 0,
): boolean {
    return (flags & MATCH_FLAG_CONSTANT_TIME)
        ? compareORAddressInfoConstantTime(aInfo, bInfo, mode, flags)
        : compareORAddressInfoFast(aInfo, bInfo, mode, flags);
}

export
function orAddressesMatch (a: ORAddress, b: ORAddress, flags: number = 0): boolean | undefined {
    if (a.isEmptyOrAddress() || b.isEmptyOrAddress()) {
        return undefined;
    }
    const aInfo: ORAddressInfo | null = orAddressToInfo(a, !(flags & MATCH_FLAG_ASSERTION_NORMALIZED));
    const bInfo: ORAddressInfo | null = orAddressToInfo(b, !(flags & MATCH_FLAG_VALUE_NORMALIZED));
    if (!aInfo || !bInfo) {
        return undefined;
    }
    return compareORAddressInfo(aInfo, bInfo, "exact", flags);
}

export
function msStringToString (ms: MSString): string {
    if ("printable" in ms) {
        return ms.printable;
    } else if ("teletex" in ms) {
        return teletexBytesToString(ms.teletex);
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
            return teletexBytesToString($._decodeTeletexString(el));
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
