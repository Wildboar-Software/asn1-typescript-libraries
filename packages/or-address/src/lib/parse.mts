import {
    PresentationAddress,
} from "@wildboar/presentation-address";
import {
    ORAddress,
    CountryName,
    PersonalName,
    AdministrationDomainName,
    PrivateDomainName,
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
    PDSParameter,
    type PostalCode,
    BuiltInDomainDefinedAttribute,
    TeletexDomainDefinedAttribute,
    TeletexPersonalName,
    UniversalPersonalName,
    UniversalOrBMPString,
    UnformattedPostalAddress,
    UniversalDomainDefinedAttribute,
    NetworkAddress,
    TerminalIdentifier,
    OrganizationName,
    NumericUserIdentifier,
    OrganizationalUnitNames,
    BuiltInStandardAttributes,
    ExtendedNetworkAddress_e163_4_address,
    ExtensionAttribute,
    EXTENSION_ATTRIBUTE,
    UniversalPDSParameter,
} from "./modules/PkiPmiExternalDataTypes/index.mjs";
import { isPrintableCharacter } from "@wildboar/asn1";
import {
    findRFC1685LabelValueSeparator,
    isPrintableString,
    rfc1685LabelValuePairs,
    rfc2156LabelValuePairs,
    splitRFC1685AddressComponents,
    type AddressComponent,
} from "./utils.mjs";
import * as $ from "@wildboar/asn1/functional";
import { term_type_from_str } from "./display.mjs";
import { teletexToString } from "@wildboar/teletex";

// This should also work for PhysicalDeliveryCountryName.
export function countryNameFromString(s: string): CountryName {
    if (s.startsWith("C=")) {
        s = s.slice(2).trimStart();
    }
    if (s.length <= 3 && /^[0-9]+$/.test(s)) {
        return { x121_dcc_code: s };
    }
    if (s.length == 2 && /^[A-Za-z]{2}$/.test(s)) {
        return { iso_3166_alpha2_code: s.toUpperCase() };
    }
    throw new Error("invalid country name");
}

export function pdsParameterFromString(s: string): PDSParameter {
    if (Array.from(s).every((c) => isPrintableCharacter(c.charCodeAt(0)))) {
        return new PDSParameter(s);
    }
    // TODO: Validate that this is actually teletex.
    return new PDSParameter(undefined, new TextEncoder().encode(s));
}

export function postalCodeFromString(s: string): PostalCode | null {
    if (Array.from(s).every((c) => isPrintableCharacter(c.charCodeAt(0)))) {
        return { printable_code: s };
    }
    if (/^[0-9 ]+$/.test(s)) {
        return { numeric_code: s };
    }
    return null;
}

export interface NameComponents {
    givenName: string | undefined;
    initials: string | undefined;
    surname: string | undefined;
    generationQualifier: string | undefined;
}

function getNameComponents(components: string[]): NameComponents | null {
    let givenName: string | undefined;
    let initials: string | undefined;
    let surname: string | undefined;
    let generationQualifier: string | undefined;
    for (const component of components) {
        const eqIdx = findRFC1685LabelValueSeparator(component);
        if (eqIdx === -1) {
            return null;
        }
        const label = component.slice(0, eqIdx);
        const value = component.slice(eqIdx + 1);
        switch (label) {
            case "G":
                if (typeof givenName !== "undefined") {
                    return null;
                }
                givenName = value;
                break;
            case "I":
                if (typeof initials !== "undefined") {
                    return null;
                }
                initials = value;
                break;
            case "S":
                if (typeof surname !== "undefined") {
                    return null;
                }
                surname = value;
                break;
            case "Q":
                if (typeof generationQualifier !== "undefined") {
                    return null;
                }
                generationQualifier = value;
                break;
            default:
                return null;
        }
    }
    return { givenName, initials, surname, generationQualifier };
}

export function personalNameFromString(s: string): PersonalName | null {
    const delim = s.startsWith("/")
        ? "/".codePointAt(0)!
        : ";".codePointAt(0)!
        ;
    const components = Array.from(splitRFC1685AddressComponents(s, delim));
    const name = getNameComponents(components);
    if (!name) {
        return null;
    }
    const {
        givenName,
        initials,
        surname,
        generationQualifier,
    } = name;
    if (
        !surname
        || (givenName && !isPrintableString(givenName))
        || (initials && !isPrintableString(initials))
        || (surname && !isPrintableString(surname))
        || (generationQualifier && !isPrintableString(generationQualifier))
    ) {
        return null;
    }
    return new PersonalName(
        surname,
        givenName,
        initials,
        generationQualifier,
    );
}

export function builtInDomainDefinedAttributeFromString(s: string): BuiltInDomainDefinedAttribute | null {
    const eqIdx = findRFC1685LabelValueSeparator(s);
    if (eqIdx === -1) {
        return null;
    }
    let label = s.slice(0, eqIdx);
    const value = s.slice(eqIdx + 1);
    if (label.startsWith("DDA:")) {
        label = label.slice(4);
    }
    if (!isPrintableString(label) || !isPrintableString(value)) {
        return null;
    }
    return new BuiltInDomainDefinedAttribute(label, value);
}

export function teletexDomainDefinedAttributeFromString(s: string): TeletexDomainDefinedAttribute | null {
    const eqIdx = findRFC1685LabelValueSeparator(s);
    if (eqIdx === -1) {
        return null;
    }
    const label = s.slice(0, eqIdx);
    const value = s.slice(eqIdx + 1);
    // TODO: Validate that this is actually teletex.
    return new TeletexDomainDefinedAttribute(
        new TextEncoder().encode(label),
        new TextEncoder().encode(value),
    );
}

export function teletexPersonalNameFromString(s: string): TeletexPersonalName | null {
    const delim = s.startsWith("/")
        ? "/".codePointAt(0)!
        : ";".codePointAt(0)!
        ;
    const components = Array.from(splitRFC1685AddressComponents(s, delim));
    const name = getNameComponents(components);
    if (!name) {
        return null;
    }
    const {
        givenName,
        initials,
        surname,
        generationQualifier,
    } = name;
    if (!surname) {
        return null;
    }
    // TODO: Validate that this is actually teletex.
    return new TeletexPersonalName(
        surname ? new TextEncoder().encode(surname) : undefined,
        givenName ? new TextEncoder().encode(givenName) : undefined,
        initials ? new TextEncoder().encode(initials) : undefined,
        generationQualifier ? new TextEncoder().encode(generationQualifier) : undefined,
    );
}

export function universalPersonalNameFromString(s: string): UniversalPersonalName | null {
    const delim = s.startsWith("/")
        ? "/".codePointAt(0)!
        : ";".codePointAt(0)!
        ;
    const components = Array.from(splitRFC1685AddressComponents(s, delim));
    const name = getNameComponents(components);
    if (!name) {
        return null;
    }
    const {
        givenName,
        initials,
        surname,
        generationQualifier,
    } = name;
    if (!surname) {
        return null;
    }
    return new UniversalPersonalName(
        new UniversalOrBMPString({ four_octets: surname }),
        givenName ? new UniversalOrBMPString({ four_octets: givenName }) : undefined,
        initials ? new UniversalOrBMPString({ four_octets: initials }) : undefined,
        generationQualifier ? new UniversalOrBMPString({ four_octets: generationQualifier }) : undefined,
    );
}

export function universalOrBMPStringFromString(s: string): UniversalOrBMPString | null {
    // We don't bother to check if the string can fit in two octets.
    return new UniversalOrBMPString({ four_octets: s });
}

export function unformattedPostalAddressFromString(s: string): UnformattedPostalAddress | null {
    const delim = s.startsWith("/")
        ? "/".codePointAt(0)!
        : ";".codePointAt(0)!
        ;
    const components = Array.from(splitRFC1685AddressComponents(s, delim));
    components.sort();
    let isPrintable = true;
    const lines: string[] = [];
    for (const component of components) {
        const eqIdx = component.indexOf("=");
        if (eqIdx === -1) {
            return null;
        }
        const label = component.slice(0, eqIdx);
        const value = component.slice(eqIdx + 1);
        if (
            !label.startsWith(`PD-A${lines.length + 1}`)
        ) {
            continue;
        }
        if (!isPrintableString(value)) {
            isPrintable = false;
        }
        if (lines.length >= 6) {
            return null; // Only 6 lines are allowed.
        }
        lines.push(value.replaceAll(String.fromCodePoint(delim).repeat(2), String.fromCodePoint(delim)));
    }
    if (!isPrintable) {
        return new UnformattedPostalAddress(
            undefined,
            new TextEncoder().encode(lines.join("\r\n")),
        );
    }
    return new UnformattedPostalAddress(lines);
}

export function universalDomainDefinedAttributeFromString(s: string): UniversalDomainDefinedAttribute | null {
    const eqIdx = findRFC1685LabelValueSeparator(s);
    if (eqIdx === -1) {
        return null;
    }
    let label = s.slice(0, eqIdx);
    const value = s.slice(eqIdx + 1);
    if (label.startsWith("DDA:")) {
        label = label.slice(4);
    }
    return new UniversalDomainDefinedAttribute(
        new UniversalOrBMPString({ four_octets: label }),
        new UniversalOrBMPString({ four_octets: value }),
    );
}


export type ORAddressStringSyntax = 1685 | 2156;

export interface ORAddressFromStringOptions {
    rfc?: ORAddressStringSyntax;
}

const KEYWORD_ALIASES: ReadonlyMap<string, string> = new Map([
    ["C", "C"],
    ["ADMD", "ADMD"],
    ["A", "ADMD"],
    ["PRMD", "PRMD"],
    ["P", "PRMD"],
    ["O", "O"],
    ["OU", "OU"],
    ["OU1", "OU1"],
    ["OU2", "OU2"],
    ["OU3", "OU3"],
    ["OU4", "OU4"],
    ["G", "G"],
    ["I", "I"],
    ["S", "S"],
    ["GQ", "GQ"],
    ["Q", "GQ"],
    ["PN", "PN"],
    ["CN", "CN"],
    ["X121", "X121"],
    ["X.121", "X121"],
    ["UA-ID", "UA-ID"],
    ["N-ID", "UA-ID"],
    ["T-ID", "T-ID"],
    ["T-TY", "T-TY"],
    ["PD-PN", "PD-PN"],
    ["PD-EA", "PD-EA"],
    ["PD-EXT-ADDRESS", "PD-EA"],
    ["PD-ED", "PD-ED"],
    ["PD-EXT-DELIVERY", "PD-ED"],
    ["PD-OFN", "PD-OFN"],
    ["PD-OFFICE-NUM", "PD-OFN"],
    ["PD-OFFICE NUMBER", "PD-OFN"],
    ["PD-OF", "PD-OF"],
    ["PD-OFFICE", "PD-OF"],
    ["PD-O", "PD-O"],
    ["PD-S", "PD-S"],
    ["PD-STREET", "PD-S"],
    ["PD-A1", "PD-A1"],
    ["PD-A2", "PD-A2"],
    ["PD-A3", "PD-A3"],
    ["PD-A4", "PD-A4"],
    ["PD-A5", "PD-A5"],
    ["PD-A6", "PD-A6"],
    ["PD-ADDRESS", "PD-ADDRESS"],
    ["PD-A", "PD-ADDRESS"],
    ["PD-U", "PD-U"],
    ["PD-UNIQUE", "PD-U"],
    ["PD-L", "PD-L"],
    ["PD-LOCAL", "PD-L"],
    ["PD-R", "PD-R"],
    ["PD-RESTANTE", "PD-R"],
    ["PD-B", "PD-B"],
    ["PD-BOX", "PD-B"],
    ["PD-PC", "PD-PC"],
    ["PD-CODE", "PD-PC"],
    ["PD-SN", "PD-SN"],
    ["PD-SERVICE", "PD-SN"],
    ["PD-C", "PD-C"],
    ["NET-NUM", "NET-NUM"],
    ["E.164", "NET-NUM"],
    ["NET-SUB", "NET-SUB"],
    ["NET-PSAP", "NET-PSAP"],
    ["PSAP", "NET-PSAP"],
    ["ISDN", "ISDN"],
    ["RFC-822", "RFC-822"],
]);

type DomainDefinedPair = {
    type: string;
    value: string;
};

type ClassifiedLabel =
    | { kind: "keyword"; canonical: string }
    | { kind: "dda-rfc1685"; type: string }
    | { kind: "dda-rfc2156"; type: string }
    | { kind: "dda-numbered"; index: number; type: string }
    | { kind: "unknown" };

function classifyLabel(label: string): ClassifiedLabel {
    const upper = label.toUpperCase();
    if (upper.startsWith("DDA:")) {
        return { kind: "dda-rfc1685", type: label.slice(4) };
    }
    const numbered = /^DD([1-4])[.:](.*)$/i.exec(label);
    if (numbered) {
        return {
            kind: "dda-numbered",
            index: Number.parseInt(numbered[1], 10),
            type: numbered[2],
        };
    }
    if (upper.startsWith("DD.")) {
        return { kind: "dda-rfc2156", type: label.slice(3) };
    }
    if (upper.startsWith("DD:")) {
        return { kind: "dda-rfc2156", type: label.slice(3) };
    }
    const canonical = KEYWORD_ALIASES.get(upper);
    if (canonical) {
        return { kind: "keyword", canonical };
    }
    return { kind: "unknown" };
}

function decodeT61EncodedString(teletex: string): string | null {
    const octets: number[] = [];
    let i = 0;
    while (i < teletex.length) {
        if (teletex[i] !== "{") {
            const codePoint = teletex.codePointAt(i)!;
            if (codePoint > 0xff) {
                return null;
            }
            octets.push(codePoint);
            i++;
            continue;
        }
        i++;
        if (
            (i >= teletex.length)
            || (teletex[i] === "}")
        ) {
            return null;
        }
        while (
            (i < teletex.length)
            && (teletex[i] !== "}")
        ) {
            const digits = teletex.slice(i, i + 3);
            if (!/^[0-9]{3}$/.test(digits)) {
                return null;
            }
            octets.push(Number.parseInt(digits, 10));
            i += 3;
        }
        if (teletex[i] !== "}") {
            return null;
        }
        i++;
    }
    return teletexToString(Buffer.from(octets));
}

function parseTeletexAndOrPs(s: string): string | null {
    const starIdx = s.indexOf("*");
    if (starIdx === -1) {
        return s;
    }
    const printable = s.slice(0, starIdx);
    const teletex = s.slice(starIdx + 1);
    if (teletex.length === 0) {
        return (printable.length > 0)
            ? printable
            : null
            ;
    }
    const decoded = decodeT61EncodedString(teletex);
    if (decoded === null) {
        return null;
    }
    if (printable.length === 0) {
        return decoded;
    }
    if (printable === decoded) {
        return printable;
    }
    return decoded;
}

function interpretAttributeValue(
    s: string,
    rfc: ORAddressStringSyntax,
): string | null {
    if (rfc !== 2156) {
        return s;
    }
    return parseTeletexAndOrPs(s);
}

function parseUpaString(s: string): string[] | null {
    const starIdx = s.indexOf("*");
    const printablePart = (starIdx === -1)
        ? s
        : s.slice(0, starIdx)
        ;
    const teletexPart = (starIdx === -1)
        ? undefined
        : s.slice(starIdx + 1)
        ;
    const lines = (printablePart.length === 0)
        ? []
        : printablePart.split("|")
        ;
    if (lines.length > 6) {
        return null;
    }
    if (lines.some((line) => line.length === 0)) {
        return null;
    }
    if (teletexPart !== undefined) {
        const decoded = decodeT61EncodedString(teletexPart);
        if (decoded === null) {
            return null;
        }
        if (lines.length === 0) {
            return decoded.split("\r\n");
        }
    }
    return lines;
}

function collectAddressComponents(
    pairs: Iterable<AddressComponent | null>,
): AddressComponent[] | null {
    const out: AddressComponent[] = [];
    for (const pair of pairs) {
        if (pair === null) {
            return null;
        }
        out.push(pair);
    }
    if (out.length === 0) {
        return null;
    }
    return out;
}

function tryCountryNameFromString(s: string): CountryName | null {
    try {
        return countryNameFromString(s);
    } catch {
        return null;
    }
}

function numericOrPrintableDomain(
    value: string,
): AdministrationDomainName | PrivateDomainName | null {
    if (!isPrintableString(value)) {
        return null;
    }
    return /^[0-9 ]+$/.test(value)
        ? { numeric: value }
        : { printable: value }
        ;
}

function takeContiguousSlots(
    slots: (string | undefined)[],
): string[] | null {
    let max = -1;
    for (let i = 0; i < slots.length; i++) {
        if (typeof slots[i] !== "undefined") {
            max = i;
        }
    }
    if (max < 0) {
        return [];
    }
    const out: string[] = [];
    for (let i = 0; i <= max; i++) {
        const value = slots[i];
        if (typeof value === "undefined") {
            return null;
        }
        out.push(value);
    }
    return out;
}

function markUsed(
    usedLabels: Set<string>,
    canonical: string,
): boolean {
    if (usedLabels.has(canonical)) {
        return false;
    }
    usedLabels.add(canonical);
    return true;
}

export function pdsParameterToExtension(
    non_universal_ext: EXTENSION_ATTRIBUTE<PDSParameter>,
    universal_ext: EXTENSION_ATTRIBUTE<UniversalPDSParameter>,
    s: string,
): ExtensionAttribute {
    return isPrintableString(s)
        ? new ExtensionAttribute(
            non_universal_ext["&id"],
            non_universal_ext.encoderFor["&Type"](
                pdsParameterFromString(s),
                $.DER,
            ),
        )
        : new ExtensionAttribute(
            universal_ext["&id"],
            universal_ext.encoderFor["&Type"](
                new UniversalOrBMPString({ four_octets: s }),
                $.DER,
            ),
        )
        ;
}

/**
 * @summary Build an `ORAddress` from abstract label/value pairs.
 * @description
 *
 * Accepts keywords from both IETF RFC 1685 and IETF RFC 2156. Compound RFC 2156
 * values such as `PN` and `PD-ADDRESS` are expanded here.
 *
 * @param components Abstract label/value pairs with quoting already undone.
 * @param options Which RFC's value encodings to apply. MIXER teletex-and-or-ps
 * and UPA encodings are used only when `rfc` is `2156`.
 * @returns The O/R address, or `null` if the components are invalid.
 */
export function parseAddressComponents(
    components: Iterable<AddressComponent>,
    options: ORAddressFromStringOptions = {},
): ORAddress | null {
    const { rfc = 1685 } = options;
    let cn: string | undefined;
    let givenName: string | undefined;
    let initials: string | undefined;
    let surname: string | undefined;
    let generationQualifier: string | undefined;
    let sawPn = false;
    let country_name: CountryName | undefined;
    let administration_domain_name: AdministrationDomainName | undefined;
    let network_address: NetworkAddress | undefined;
    let terminal_identifier: TerminalIdentifier | undefined;
    let private_domain_name: PrivateDomainName | undefined;
    let organization_name: OrganizationName | undefined;
    let numeric_user_identifier: NumericUserIdentifier | undefined;
    const bareOus: string[] = [];
    const numberedOus: (string | undefined)[] = [undefined, undefined, undefined, undefined];
    let sawBareOu = false;
    let sawNumberedOu = false;
    const rfc1685Ddas: DomainDefinedPair[] = [];
    const rfc2156Ddas: DomainDefinedPair[] = [];
    const numberedDdas: (DomainDefinedPair | undefined)[] = [
        undefined,
        undefined,
        undefined,
        undefined,
    ];
    let sawNumberedDda = false;
    let sawUnnumberedDda = false;
    const ext_attrs: ExtensionAttribute[] = [];
    let pd_sn: string | undefined;
    let pd_c: string | undefined;
    let pd_pc: string | undefined;
    let pd_pn: string | undefined;
    let pd_ea: string | undefined;
    let pd_ed: string | undefined;
    let pd_ofn: string | undefined;
    let pd_of: string | undefined;
    let pd_o: string | undefined;
    let pd_s: string | undefined;
    let pd_u: string | undefined;
    let pd_l: string | undefined;
    let pd_r: string | undefined;
    let pd_b: string | undefined;
    let pdAddressLines: string[] | undefined;
    const numberedPdLines: (string | undefined)[] = [
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
    ];
    let sawPdAddress = false;
    let sawPdALines = false;
    let netNum: string | undefined;
    let netSub: string | undefined;
    let isdn: string | undefined;
    let psap: string | undefined;
    let tty: string | undefined;

    const usedLabels = new Set<string>();
    for (const [rawLabel, rawValue] of components) {
        if (
            (rawLabel.length === 0)
            || (rawValue.length === 0)
        ) {
            return null;
        }
        const classified = classifyLabel(rawLabel);
        if (classified.kind === "unknown") {
            return null;
        }
        if (classified.kind === "dda-rfc1685") {
            if (
                (classified.type.length === 0)
                || sawNumberedDda
            ) {
                return null;
            }
            sawUnnumberedDda = true;
            rfc1685Ddas.push({ type: classified.type, value: rawValue });
            continue;
        }
        if (classified.kind === "dda-rfc2156") {
            if (
                (classified.type.length === 0)
                || sawNumberedDda
            ) {
                return null;
            }
            sawUnnumberedDda = true;
            const value = interpretAttributeValue(rawValue, rfc);
            if (value === null) {
                return null;
            }
            rfc2156Ddas.push({ type: classified.type, value });
            continue;
        }
        if (classified.kind === "dda-numbered") {
            if (
                (classified.type.length === 0)
                || sawUnnumberedDda
            ) {
                return null;
            }
            sawNumberedDda = true;
            const slot = classified.index - 1;
            if (typeof numberedDdas[slot] !== "undefined") {
                return null;
            }
            const value = interpretAttributeValue(rawValue, rfc);
            if (value === null) {
                return null;
            }
            numberedDdas[slot] = { type: classified.type, value };
            continue;
        }
        const { canonical } = classified;
        if (
            (canonical !== "OU")
            && (canonical !== "RFC-822")
            && !markUsed(usedLabels, canonical)
        ) {
            return null;
        }
        switch (canonical) {
            case "G": {
                if (sawPn) {
                    return null;
                }
                const value = interpretAttributeValue(rawValue, rfc);
                if (value === null) {
                    return null;
                }
                givenName = value;
                break;
            }
            case "I": {
                if (sawPn) {
                    return null;
                }
                const value = interpretAttributeValue(rawValue, rfc);
                if (value === null) {
                    return null;
                }
                initials = value;
                break;
            }
            case "S": {
                if (sawPn) {
                    return null;
                }
                const value = interpretAttributeValue(rawValue, rfc);
                if (value === null) {
                    return null;
                }
                surname = value;
                break;
            }
            case "GQ": {
                const value = interpretAttributeValue(rawValue, rfc);
                if (value === null) {
                    return null;
                }
                generationQualifier = value;
                break;
            }
            case "PN": {
                if (
                    (typeof givenName !== "undefined")
                    || (typeof initials !== "undefined")
                    || (typeof surname !== "undefined")
                ) {
                    return null;
                }
                if (
                    rawValue.startsWith(".")
                    || rawValue.endsWith(".")
                    || rawValue.includes("..")
                ) {
                    return null;
                }
                const value = interpretAttributeValue(rawValue, rfc);
                if (value === null) {
                    return null;
                }
                try {
                    const pn = PersonalName.fromRFC2156String(value);
                    surname = pn.surname;
                    givenName = pn.given_name;
                    initials = pn.initials;
                } catch {
                    return null;
                }
                sawPn = true;
                break;
            }
            case "CN": {
                const value = interpretAttributeValue(rawValue, rfc);
                if (value === null) {
                    return null;
                }
                cn = value;
                break;
            }
            case "C": {
                const parsed = tryCountryNameFromString(rawValue);
                if (!parsed) {
                    return null;
                }
                country_name = parsed;
                break;
            }
            case "ADMD": {
                const parsed = numericOrPrintableDomain(rawValue);
                if (!parsed) {
                    return null;
                }
                administration_domain_name = parsed;
                break;
            }
            case "X121": {
                if (!/^[0-9 ]+$/.test(rawValue)) {
                    return null;
                }
                network_address = rawValue;
                break;
            }
            case "T-ID": {
                if (!isPrintableString(rawValue)) {
                    return null;
                }
                terminal_identifier = rawValue;
                break;
            }
            case "UA-ID": {
                if (!/^[0-9 ]+$/.test(rawValue)) {
                    return null;
                }
                numeric_user_identifier = rawValue;
                break;
            }
            case "PRMD": {
                const parsed = numericOrPrintableDomain(rawValue);
                if (!parsed) {
                    return null;
                }
                private_domain_name = parsed;
                break;
            }
            case "O": {
                const value = interpretAttributeValue(rawValue, rfc);
                if (value === null) {
                    return null;
                }
                organization_name = value;
                break;
            }
            case "OU": {
                if (sawNumberedOu) {
                    return null;
                }
                sawBareOu = true;
                const value = interpretAttributeValue(rawValue, rfc);
                if (value === null) {
                    return null;
                }
                bareOus.push(value);
                break;
            }
            case "OU1":
            case "OU2":
            case "OU3":
            case "OU4": {
                if (sawBareOu) {
                    return null;
                }
                sawNumberedOu = true;
                const value = interpretAttributeValue(rawValue, rfc);
                if (value === null) {
                    return null;
                }
                const slot = Number.parseInt(canonical.slice(2), 10) - 1;
                if (typeof numberedOus[slot] !== "undefined") {
                    return null;
                }
                numberedOus[slot] = value;
                break;
            }
            case "ISDN": {
                if (
                    (typeof netNum !== "undefined")
                    || (typeof netSub !== "undefined")
                    || (typeof psap !== "undefined")
                ) {
                    return null;
                }
                isdn = rawValue;
                break;
            }
            case "NET-NUM": {
                if (
                    (typeof isdn !== "undefined")
                    || (typeof psap !== "undefined")
                ) {
                    return null;
                }
                if (!/^[0-9 ]+$/.test(rawValue)) {
                    return null;
                }
                netNum = rawValue;
                break;
            }
            case "NET-SUB": {
                if (
                    (typeof isdn !== "undefined")
                    || (typeof psap !== "undefined")
                ) {
                    return null;
                }
                if (!/^[0-9 ]+$/.test(rawValue)) {
                    return null;
                }
                netSub = rawValue;
                break;
            }
            case "NET-PSAP": {
                if (
                    (typeof isdn !== "undefined")
                    || (typeof netNum !== "undefined")
                    || (typeof netSub !== "undefined")
                ) {
                    return null;
                }
                psap = rawValue;
                break;
            }
            case "T-TY": {
                tty = rawValue;
                break;
            }
            case "PD-PN": {
                pd_pn = interpretAttributeValue(rawValue, rfc) ?? undefined;
                if (typeof pd_pn === "undefined") {
                    return null;
                }
                break;
            }
            case "PD-EA": {
                pd_ea = interpretAttributeValue(rawValue, rfc) ?? undefined;
                if (typeof pd_ea === "undefined") {
                    return null;
                }
                break;
            }
            case "PD-ED": {
                pd_ed = interpretAttributeValue(rawValue, rfc) ?? undefined;
                if (typeof pd_ed === "undefined") {
                    return null;
                }
                break;
            }
            case "PD-OFN": {
                pd_ofn = interpretAttributeValue(rawValue, rfc) ?? undefined;
                if (typeof pd_ofn === "undefined") {
                    return null;
                }
                break;
            }
            case "PD-OF": {
                pd_of = interpretAttributeValue(rawValue, rfc) ?? undefined;
                if (typeof pd_of === "undefined") {
                    return null;
                }
                break;
            }
            case "PD-O": {
                pd_o = interpretAttributeValue(rawValue, rfc) ?? undefined;
                if (typeof pd_o === "undefined") {
                    return null;
                }
                break;
            }
            case "PD-S": {
                pd_s = interpretAttributeValue(rawValue, rfc) ?? undefined;
                if (typeof pd_s === "undefined") {
                    return null;
                }
                break;
            }
            case "PD-A1":
            case "PD-A2":
            case "PD-A3":
            case "PD-A4":
            case "PD-A5":
            case "PD-A6": {
                if (sawPdAddress) {
                    return null;
                }
                sawPdALines = true;
                const slot = Number.parseInt(canonical.slice(4), 10) - 1;
                numberedPdLines[slot] = rawValue;
                break;
            }
            case "PD-ADDRESS": {
                if (sawPdALines) {
                    return null;
                }
                sawPdAddress = true;
                const lines = parseUpaString(rawValue);
                if (lines === null) {
                    return null;
                }
                pdAddressLines = lines;
                break;
            }
            case "PD-U": {
                pd_u = interpretAttributeValue(rawValue, rfc) ?? undefined;
                if (typeof pd_u === "undefined") {
                    return null;
                }
                break;
            }
            case "PD-L": {
                pd_l = interpretAttributeValue(rawValue, rfc) ?? undefined;
                if (typeof pd_l === "undefined") {
                    return null;
                }
                break;
            }
            case "PD-R": {
                pd_r = interpretAttributeValue(rawValue, rfc) ?? undefined;
                if (typeof pd_r === "undefined") {
                    return null;
                }
                break;
            }
            case "PD-B": {
                pd_b = interpretAttributeValue(rawValue, rfc) ?? undefined;
                if (typeof pd_b === "undefined") {
                    return null;
                }
                break;
            }
            case "PD-PC": {
                pd_pc = rawValue;
                break;
            }
            case "PD-SN": {
                if (!isPrintableString(rawValue)) {
                    return null;
                }
                pd_sn = rawValue;
                break;
            }
            case "PD-C": {
                pd_c = rawValue;
                break;
            }
            case "RFC-822": {
                if (sawNumberedDda) {
                    return null;
                }
                sawUnnumberedDda = true;
                rfc2156Ddas.push({ type: "RFC-822", value: rawValue });
                break;
            }
            default:
                return null;
        }
    }

    let personal_name: PersonalName | undefined;
    if (surname) {
        if (
            isPrintableString(surname)
            && (!givenName || isPrintableString(givenName))
            && (!initials || isPrintableString(initials))
            && (!generationQualifier || isPrintableString(generationQualifier))
        ) {
            try {
                personal_name = new PersonalName(
                    surname,
                    givenName,
                    initials,
                    generationQualifier,
                );
            } catch {
                return null;
            }
        } else {
            const upn = new UniversalPersonalName(
                new UniversalOrBMPString({ four_octets: surname }),
                givenName
                    ? new UniversalOrBMPString({ four_octets: givenName })
                    : undefined,
                initials
                    ? new UniversalOrBMPString({ four_octets: initials })
                    : undefined,
                generationQualifier
                    ? new UniversalOrBMPString({ four_octets: generationQualifier })
                    : undefined,
            );
            ext_attrs.push(new ExtensionAttribute(
                universal_personal_name["&id"],
                universal_personal_name.encoderFor["&Type"](upn, $.DER),
            ));
        }
    }
    if (cn) {
        ext_attrs.push(
            isPrintableString(cn)
                ? new ExtensionAttribute(
                    common_name["&id"],
                    common_name.encoderFor["&Type"](cn, $.DER),
                )
                : new ExtensionAttribute(
                    universal_common_name["&id"],
                    universal_common_name.encoderFor["&Type"](
                        new UniversalOrBMPString({ four_octets: cn }),
                        $.DER,
                    ),
                ),
        );
    }
    if (organization_name && !isPrintableString(organization_name)) {
        ext_attrs.push(new ExtensionAttribute(
            universal_organization_name["&id"],
            universal_organization_name.encoderFor["&Type"](
                new UniversalOrBMPString({ four_octets: organization_name }),
                $.DER,
            ),
        ));
        organization_name = undefined;
    }
    let ous: string[] = [];
    if (sawBareOu) {
        ous = bareOus.slice().reverse();
    } else {
        const numbered = takeContiguousSlots(numberedOus);
        if (numbered === null) {
            return null;
        }
        ous = numbered;
    }
    let organizational_unit_names: OrganizationalUnitNames | undefined;
    if (ous.some((ou) => !isPrintableString(ou))) {
        ext_attrs.push(new ExtensionAttribute(
            universal_organizational_unit_names["&id"],
            universal_organizational_unit_names.encoderFor["&Type"](
                ous.map((ou) => new UniversalOrBMPString({ four_octets: ou })),
                $.DER,
            ),
        ));
    } else if (ous.length) {
        organizational_unit_names = ous;
    }

    let address_lines: string[] = [];
    if (sawPdAddress) {
        address_lines = pdAddressLines ?? [];
    } else {
        const numbered = takeContiguousSlots(numberedPdLines);
        if (numbered === null) {
            return null;
        }
        address_lines = numbered;
    }
    if (address_lines.some((address_line) => !isPrintableString(address_line))) {
        ext_attrs.push(new ExtensionAttribute(
            universal_unformatted_postal_address["&id"],
            universal_unformatted_postal_address.encoderFor["&Type"](
                new UniversalOrBMPString({ four_octets: address_lines.join("\r\n") }),
                $.DER,
            ),
        ));
    } else if (address_lines.length) {
        ext_attrs.push(new ExtensionAttribute(
            unformatted_postal_address["&id"],
            unformatted_postal_address.encoderFor["&Type"](
                new UnformattedPostalAddress(address_lines),
                $.DER,
            ),
        ));
    }

    const networkConflict = (
        (
            (typeof isdn !== "undefined")
            && (
                (typeof netNum !== "undefined")
                || (typeof psap !== "undefined")
            )
        )
        || (
            (typeof netNum !== "undefined")
            && (typeof psap !== "undefined")
        )
        || (
            (typeof netSub !== "undefined")
            && (typeof netNum === "undefined")
            && (typeof isdn === "undefined")
        )
    );
    if (networkConflict) {
        return null;
    }
    if (typeof isdn !== "undefined") {
        const isdn_parts = isdn.split("x");
        const [number, sub_address, ...rest] = isdn_parts;
        if (
            (rest.length > 0)
            || !/^[0-9 ]+$/.test(number)
            || (sub_address && !/^[0-9 ]+$/.test(sub_address))
        ) {
            return null;
        }
        ext_attrs.push(new ExtensionAttribute(
            extended_network_address["&id"],
            extended_network_address.encoderFor["&Type"]({
                e163_4_address: new ExtendedNetworkAddress_e163_4_address(
                    number,
                    sub_address,
                ),
            }, $.DER),
        ));
    } else if (typeof netNum !== "undefined") {
        ext_attrs.push(new ExtensionAttribute(
            extended_network_address["&id"],
            extended_network_address.encoderFor["&Type"]({
                e163_4_address: new ExtendedNetworkAddress_e163_4_address(
                    netNum,
                    netSub,
                ),
            }, $.DER),
        ));
    } else if (typeof psap !== "undefined") {
        const paddr = PresentationAddress.fromString(psap);
        if (typeof paddr === "string") {
            return null;
        }
        ext_attrs.push(new ExtensionAttribute(
            extended_network_address["&id"],
            extended_network_address.encoderFor["&Type"]({
                psap_address: paddr,
            }, $.DER),
        ));
    }
    if (typeof tty !== "undefined") {
        const parsedTty = term_type_from_str(tty.toLowerCase());
        if (typeof parsedTty === "undefined") {
            return null;
        }
        ext_attrs.push(new ExtensionAttribute(
            terminal_type["&id"],
            terminal_type.encoderFor["&Type"](parsedTty, $.DER),
        ));
    }
    if (pd_sn) {
        ext_attrs.push(new ExtensionAttribute(
            pds_name["&id"],
            pds_name.encoderFor["&Type"](pd_sn, $.DER),
        ));
    }
    if (pd_c) {
        const extvalue = tryCountryNameFromString(pd_c);
        if (!extvalue) {
            return null;
        }
        ext_attrs.push(new ExtensionAttribute(
            physical_delivery_country_name["&id"],
            physical_delivery_country_name.encoderFor["&Type"](extvalue, $.DER),
        ));
    }
    if (pd_pc) {
        const extvalue = postalCodeFromString(pd_pc);
        if (!extvalue) {
            return null;
        }
        ext_attrs.push(new ExtensionAttribute(
            postal_code["&id"],
            postal_code.encoderFor["&Type"](extvalue, $.DER),
        ));
    }
    if (pd_pn) {
        ext_attrs.push(pdsParameterToExtension(
            physical_delivery_personal_name,
            universal_physical_delivery_personal_name,
            pd_pn,
        ));
    }
    if (pd_ea) {
        ext_attrs.push(pdsParameterToExtension(
            extension_OR_address_components,
            universal_extension_OR_address_components,
            pd_ea,
        ));
    }
    if (pd_ed) {
        ext_attrs.push(pdsParameterToExtension(
            extension_physical_delivery_address_components,
            universal_extension_physical_delivery_address_components,
            pd_ed,
        ));
    }
    if (pd_ofn) {
        ext_attrs.push(pdsParameterToExtension(
            physical_delivery_office_number,
            universal_physical_delivery_office_number,
            pd_ofn,
        ));
    }
    if (pd_of) {
        ext_attrs.push(pdsParameterToExtension(
            physical_delivery_office_name,
            universal_physical_delivery_office_name,
            pd_of,
        ));
    }
    if (pd_o) {
        ext_attrs.push(pdsParameterToExtension(
            physical_delivery_organization_name,
            universal_physical_delivery_organization_name,
            pd_o,
        ));
    }
    if (pd_s) {
        ext_attrs.push(pdsParameterToExtension(
            street_address,
            universal_street_address,
            pd_s,
        ));
    }
    if (pd_u) {
        ext_attrs.push(pdsParameterToExtension(
            unique_postal_name,
            universal_unique_postal_name,
            pd_u,
        ));
    }
    if (pd_l) {
        ext_attrs.push(pdsParameterToExtension(
            local_postal_attributes,
            universal_local_postal_attributes,
            pd_l,
        ));
    }
    if (pd_r) {
        ext_attrs.push(pdsParameterToExtension(
            poste_restante_address,
            universal_poste_restante_address,
            pd_r,
        ));
    }
    if (pd_b) {
        ext_attrs.push(pdsParameterToExtension(
            post_office_box_address,
            universal_post_office_box_address,
            pd_b,
        ));
    }

    const orderedDdas: DomainDefinedPair[] = [];
    if (sawNumberedDda) {
        const numbered = takeContiguousSlots(
            numberedDdas.map((d) => d?.type),
        );
        if (numbered === null) {
            return null;
        }
        for (const dda of numberedDdas) {
            if (dda) {
                orderedDdas.push(dda);
            }
        }
    } else {
        orderedDdas.push(...rfc2156Ddas.slice().reverse());
        orderedDdas.push(...rfc1685Ddas);
    }
    const bidda: BuiltInDomainDefinedAttribute[] = [];
    const universal_ddas: UniversalDomainDefinedAttribute[] = [];
    for (const dda of orderedDdas) {
        if (
            isPrintableString(dda.type)
            && isPrintableString(dda.value)
        ) {
            try {
                bidda.push(new BuiltInDomainDefinedAttribute(dda.type, dda.value));
            } catch {
                return null;
            }
        } else {
            universal_ddas.push(new UniversalDomainDefinedAttribute(
                new UniversalOrBMPString({ four_octets: dda.type }),
                new UniversalOrBMPString({ four_octets: dda.value }),
            ));
        }
    }
    if (universal_ddas.length) {
        ext_attrs.push(new ExtensionAttribute(
            universal_domain_defined_attributes["&id"],
            universal_domain_defined_attributes.encoderFor["&Type"](universal_ddas, $.DER),
        ));
    }

    let bisa: BuiltInStandardAttributes;
    try {
        bisa = new BuiltInStandardAttributes(
            country_name,
            administration_domain_name,
            network_address,
            terminal_identifier,
            private_domain_name,
            organization_name,
            numeric_user_identifier,
            personal_name,
            organizational_unit_names,
        );
    } catch {
        return null;
    }
    try {
        return new ORAddress(
            bisa,
            bidda,
            ext_attrs,
        );
    } catch {
        return null;
    }
}

function hasCountry(components: AddressComponent[]): boolean {
    return components.some(([label]) => label.toUpperCase() === "C");
}

function hasAdmd(components: AddressComponent[]): boolean {
    return components.some(([label]) => {
        const upper = label.toUpperCase();
        return (
            (upper === "ADMD")
            || (upper === "A")
        );
    });
}

/**
 * @summary Parse an O/R address string.
 * @description
 *
 * By default this parses [IETF RFC 1685](https://www.rfc-editor.org/rfc/rfc1685)
 * labelled format. Pass `{ rfc: 2156 }` to parse the MIXER
 * [IETF RFC 2156](https://www.rfc-editor.org/rfc/rfc2156) `std-or-address` form.
 *
 * @param s The address string.
 * @param options Which RFC syntax to use.
 * @returns The O/R address, or `null` if parsing fails.
 */
export function orAddressFromString(
    s: string,
    options: ORAddressFromStringOptions = {},
): ORAddress | null {
    const trimmed = s.trim();
    const { rfc = 1685 } = options;
    const collected = collectAddressComponents(
        (rfc === 2156)
            ? rfc2156LabelValuePairs(trimmed)
            : rfc1685LabelValuePairs(trimmed),
    );
    if (!collected) {
        return null;
    }
    if (
        (rfc === 2156)
        && hasCountry(collected)
        && !hasAdmd(collected)
    ) {
        collected.push(["ADMD", " "]);
    }
    return parseAddressComponents(collected, options);
}

/**
 * @summary Parse built-in standard attributes from an O/R address string.
 * @param s The address string.
 * @param options Which RFC syntax to use.
 * @returns The built-in standard attributes, or `null` if parsing fails.
 */
export function builtInStandardAttributesFromString(
    s: string,
    options: ORAddressFromStringOptions = {},
): BuiltInStandardAttributes | null {
    return orAddressFromString(s, options)?.built_in_standard_attributes ?? null;
}
