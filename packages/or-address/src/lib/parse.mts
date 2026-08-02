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
import { findLabelValueSeparator, isPrintableString } from "./utils.mjs";
import * as $ from "@wildboar/asn1/functional";
import { term_type_from_str } from "./display.mjs";

// This should also work for PhysicalDeliveryCountryName.
export function countryNameFromString(s: string): CountryName {
    if (s.startsWith("C=")) {
        s = s.slice(2).trimStart();
    }
    if (s.length <= 3 && /^[0-9]+$/.test(s)) {
        return { x121_dcc_code: s };
    }
    if (s.length == 2 && /^[A-Z]{2}$/.test(s)) {
        return { iso_3166_alpha2_code: s };
    }
    throw new Error("Invalid country name");
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

function getNameComponents(components: string[]): NameComponents {
    let givenName: string | undefined;
    let initials: string | undefined;
    let surname: string | undefined;
    let generationQualifier: string | undefined;
    for (const component of components) {
        const eqIdx = findLabelValueSeparator(component);
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
    const delim = s.startsWith("/") ? "/" : ";";
    const components = s.split(delim);
    if (delim === "/") {
        components.shift();
    }
    const {
        givenName,
        initials,
        surname,
        generationQualifier,
    } = getNameComponents(components);
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
    const eqIdx = findLabelValueSeparator(s);
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
    const eqIdx = findLabelValueSeparator(s);
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
    const delim = s.startsWith("/") ? "/" : ";";
    const components = s.split(delim);
    if (delim === "/") {
        components.shift();
    }
    const {
        givenName,
        initials,
        surname,
        generationQualifier,
    } = getNameComponents(components);
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
    const delim = s.startsWith("/") ? "/" : ";";
    const components = s.split(delim);
    if (delim === "/") {
        components.shift();
    }
    const {
        givenName,
        initials,
        surname,
        generationQualifier,
    } = getNameComponents(components);
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
    const delim = s.startsWith("/") ? "/" : ";";
    const components = s.split(delim);
    if (delim === "/") {
        components.shift();
    }
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
        lines.push(value.replaceAll(delim.repeat(2), delim));
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
    const eqIdx = findLabelValueSeparator(s);
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

export function builtInStandardAttributesFromString(s: string): BuiltInStandardAttributes | null {
    const delim = s.startsWith("/") ? "/" : ";";
    const components = s.split(delim);
    if (delim === "/") {
        components.shift();
    }
    let givenName: string | undefined;
    let initials: string | undefined;
    let surname: string | undefined;
    let generationQualifier: string | undefined;
    let country_name: CountryName | undefined;
    let administration_domain_name: AdministrationDomainName | undefined;
    let network_address: NetworkAddress | undefined;
    let terminal_identifier: TerminalIdentifier | undefined;
    let private_domain_name: PrivateDomainName | undefined;
    let organization_name: OrganizationName | undefined;
    let numeric_user_identifier: NumericUserIdentifier | undefined;
    let organizational_unit_names: OrganizationalUnitNames | undefined;
    let ou1: string | undefined;
    let ou2: string | undefined;
    let ou3: string | undefined;
    let ou4: string | undefined;

    const usedLabels = new Set<string>();
    for (const component of components) {
        const eqIdx = findLabelValueSeparator(component);
        if (eqIdx === -1) {
            return null;
        }
        const label = component.slice(0, eqIdx);
        const value = component.slice(eqIdx + 1);
        if (usedLabels.has(label)) {
            return null;
        }
        usedLabels.add(label);
        if (label.startsWith("OU") && !isPrintableString(value)) {
            return null;
        }
        switch (label) {
            case "G":
                givenName = value;
                break;
            case "I":
                initials = value;
                break;
            case "S":
                surname = value;
                break;
            case "Q":
                generationQualifier = value;
                break;
            case "C":
                country_name = countryNameFromString(value);
                break;
            case "A":
                if (!isPrintableString(value)) {
                    return null;
                }
                administration_domain_name = /^[0-9 ]+$/.test(value)
                    ? { numeric: value }
                    : { printable: value }
                    ;
                break;
            case "X.121":
                if (!/^[0-9]+$/.test(value)) {
                    return null;
                }
                network_address = value;
                break;
            case "T-ID":
                if (!isPrintableString(value)) {
                    return null;
                }
                terminal_identifier = value;
                break;
            case "N-ID":
                if (!/^[0-9]+$/.test(value)) {
                    return null;
                }
                numeric_user_identifier = value;
                break;
            case "P":
                if (!isPrintableString(value)) {
                    return null;
                }
                private_domain_name = /^[0-9 ]+$/.test(value)
                    ? { numeric: value }
                    : { printable: value }
                    ;
                break;
            case "O":
                if (!isPrintableString(value)) {
                    return null;
                }
                organization_name = value;
                break;
            case "OU1":
                ou1 = value;
                break;
            case "OU2":
                ou2 = value;
                break;
            case "OU3":
                ou3 = value;
                break;
            case "OU4":
                ou4 = value;
                break;
            default:
                return null;
        }
    }
    return new BuiltInStandardAttributes(
        country_name,
        administration_domain_name,
        network_address,
        terminal_identifier,
        private_domain_name,
        organization_name,
        numeric_user_identifier,
        surname
            ? new PersonalName(surname, givenName, initials, generationQualifier)
            : undefined,
        organizational_unit_names,
    );
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

export function orAddressFromString(s: string): ORAddress | null {
    const delim = s.startsWith("/") ? "/" : ";";
    const components = s.split(delim);
    if (delim === "/") {
        components.shift();
    }
    let cn: string | undefined;
    let givenName: string | undefined;
    let initials: string | undefined;
    let surname: string | undefined;
    let generationQualifier: string | undefined;
    let country_name: CountryName | undefined;
    let administration_domain_name: AdministrationDomainName | 
    undefined;
    let network_address: NetworkAddress | undefined;
    let terminal_identifier: TerminalIdentifier | undefined;
    let private_domain_name: PrivateDomainName | undefined;
    let organization_name: OrganizationName | undefined;
    let numeric_user_identifier: NumericUserIdentifier | undefined;
    let ou1: string | undefined;
    let ou2: string | undefined;
    let ou3: string | undefined;
    let ou4: string | undefined;
    const bidda: BuiltInDomainDefinedAttribute[] = [];
    const universal_ddas: UniversalDomainDefinedAttribute[] = [];
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
    let pd_a1: string | undefined;
    let pd_a2: string | undefined;
    let pd_a3: string | undefined;
    let pd_a4: string | undefined;
    let pd_a5: string | undefined;
    let pd_a6: string | undefined;
    let expected_ous: number = 0;
    let expected_address_lines: number = 0;

    const usedLabels = new Set<string>();
    for (const component of components) {
        const eqIdx = findLabelValueSeparator(component);
        if (eqIdx === -1) {
            return null;
        }
        const label = component.slice(0, eqIdx);
        const value = component.slice(eqIdx + 1);
        if (usedLabels.has(label)) {
            return null;
        }
        usedLabels.add(label);
        switch (label) {
            case "G":
                givenName = value;
                break;
            case "I":
                initials = value;
                break;
            case "S":
                surname = value;
                break;
            case "Q":
                generationQualifier = value;
                break;
            case "CN": 
                cn = value;
                break;
            case "C":
                country_name = countryNameFromString(value);
                break;
            case "A":
                if (!isPrintableString(value)) {
                    return null;
                }
                administration_domain_name = /^[0-9 ]+$/.test(value)
                    ? { numeric: value }
                    : { printable: value }
                    ;
                break;
            case "X.121":
                if (!/^[0-9]+$/.test(value)) {
                    return null;
                }
                network_address = value;
                break;
            case "T-ID":
                if (!isPrintableString(value)) {
                    return null;
                }
                terminal_identifier = value;
                break;
            case "N-ID":
                if (!/^[0-9]+$/.test(value)) {
                    return null;
                }
                numeric_user_identifier = value;
                break;
            case "P":
                if (!isPrintableString(value)) {
                    return null;
                }
                private_domain_name = /^[0-9 ]+$/.test(value)
                    ? { numeric: value }
                    : { printable: value }
                    ;
                break;
            case "O":
                organization_name = value;
                break;
            case "OU1":
                ou1 = value;
                expected_ous = 1;
                break;
            case "OU2":
                ou2 = value;
                expected_ous = 2;
                break;
            case "OU3":
                ou3 = value;
                expected_ous = 3;
                break;
            case "OU4":
                ou4 = value;
                expected_ous = 4;
                break;
            case "ISDN":
                const isdn_parts = value.split("x");
                const [number, sub_address, ...rest] = isdn_parts;
                if (
                    rest.length > 0
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
                break;
            case "PSAP":
                const paddr = PresentationAddress.fromString(value);
                if (typeof paddr === "string") {
                    return null;
                }
                ext_attrs.push(new ExtensionAttribute(
                    extended_network_address["&id"],
                    extended_network_address.encoderFor["&Type"]({
                        psap_address: paddr,
                    }, $.DER),
                ));
                break;
            case "T-TY":
                const tty = term_type_from_str(value);
                if (typeof tty === "undefined") {
                    return null;
                }
                ext_attrs.push(new ExtensionAttribute(
                    terminal_type["&id"],
                    terminal_type.encoderFor["&Type"](tty, $.DER),
                ));
                break;
            case "PD-PN":
                pd_pn = value;
                break;
            case "PD-EA":
                pd_ea = value;
                break;
            case "PD-ED":
                pd_ed = value;
                break;
            case "PD-OFN":
                pd_ofn = value;
                break;
            case "PD-OF":
                pd_of = value;
                break;
            case "PD-O":
                pd_o = value;
                break;
            case "PD-S":
                pd_s = value;
                break;
            case "PD-A1":
                pd_a1 = value;
                expected_address_lines = 1;
                break;
            case "PD-A2":
                pd_a2 = value;
                expected_address_lines = 2;
                break;
            case "PD-A3":
                pd_a3 = value;
                expected_address_lines = 3;
                break;
            case "PD-A4":
                pd_a4 = value;
                expected_address_lines = 4;
                break;
            case "PD-A5":
                pd_a5 = value;
                expected_address_lines = 5;
                break;
            case "PD-A6":
                pd_a6 = value;
                expected_address_lines = 6;
                break;
            case "PD-U":
                pd_u = value;
                break;
            case "PD-L":
                pd_l = value;
                break;
            case "PD-R":
                pd_r = value;
                break;
            case "PD-B":
                pd_b = value;
                break;
            case "PD-PC":
                pd_pc = value;
                break;
            case "PD-SN":
                pd_sn = value;
                break;
            case "PD-C":
                pd_c = value;
                break;
            default:
                if (label.startsWith("DDA:")) {
                    if (isPrintableString(component)) {
                        bidda.push(builtInDomainDefinedAttributeFromString(component));
                    } else {
                        const universal_dda = universalDomainDefinedAttributeFromString(component);
                        if (typeof universal_dda === "undefined") {
                            return null;
                        }
                        universal_ddas.push(universal_dda);
                    }
                } else {
                    return null;
                }
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
            personal_name = new PersonalName(surname, givenName, initials, generationQualifier);
        } else {
            const upn = new UniversalPersonalName(
                new UniversalOrBMPString({ four_octets: surname }),
                givenName ? new UniversalOrBMPString({ four_octets: givenName }) : undefined,
                initials ? new UniversalOrBMPString({ four_octets: initials }) : undefined,
                generationQualifier ? new UniversalOrBMPString({ four_octets: generationQualifier }) : undefined,
            );
            const ext = new ExtensionAttribute(
                universal_personal_name["&id"],
                universal_personal_name.encoderFor["&Type"](upn, $.DER),
            );
            ext_attrs.push(ext);
        }
    }
    if (cn) {
        const ext = isPrintableString(cn)
            ? new ExtensionAttribute(
                common_name["&id"],
                common_name.encoderFor["&Type"](cn, $.DER),
            )
            : new ExtensionAttribute(
                universal_common_name["&id"],
                universal_common_name.encoderFor["&Type"](new UniversalOrBMPString({ four_octets: cn }), $.DER),
            );
        ext_attrs.push(ext);
    }
    if (organization_name && !isPrintableString(organization_name)) {
        const extvalue = new UniversalOrBMPString({ four_octets: organization_name });
        const ext = new ExtensionAttribute(
            universal_organization_name["&id"],
            universal_organization_name.encoderFor["&Type"](extvalue, $.DER),
        );
        ext_attrs.push(ext);
        organization_name = undefined;
    }
    const maybe_ous = [ou1, ou2, ou3, ou4];
    const ous = maybe_ous.slice(0, expected_ous);
    if (ous.some((ou) => typeof ou === "undefined")) {
        return null;
    }
    let organizational_unit_names: OrganizationalUnitNames | undefined;
    if (ous.some((ou) => !isPrintableString(ou))) {
        const extvalue = ous.map((ou) => new UniversalOrBMPString({ four_octets: ou }));
        const ext = new ExtensionAttribute(
            universal_organizational_unit_names["&id"],
            universal_organizational_unit_names.encoderFor["&Type"](extvalue, $.DER),
        );
        ext_attrs.push(ext);
    } else if (ous.length) {
        organizational_unit_names = ous;
    }
    const maybe_address_lines = [pd_a1, pd_a2, pd_a3, pd_a4, pd_a5, pd_a6];
    const address_lines = maybe_address_lines.slice(0, expected_address_lines);
    if (address_lines.some((address_line) => typeof address_line === "undefined")) {
        return null;
    }
    if (address_lines.some((address_line) => !isPrintableString(address_line))) {
        const extvalue = new UniversalOrBMPString({ four_octets: address_lines.join("\r\n") });
        const ext = new ExtensionAttribute(
            universal_unformatted_postal_address["&id"],
            universal_unformatted_postal_address.encoderFor["&Type"](extvalue, $.DER),
        );
        ext_attrs.push(ext);
    } else if (address_lines.length) {
        const extvalue = new UnformattedPostalAddress(address_lines);
        const ext = new ExtensionAttribute(
            unformatted_postal_address["&id"],
            unformatted_postal_address.encoderFor["&Type"](extvalue, $.DER),
        );
        ext_attrs.push(ext);
    }
    if (pd_sn) {
        const ext = new ExtensionAttribute(
            pds_name["&id"],
            pds_name.encoderFor["&Type"](pd_sn, $.DER),
        );
        ext_attrs.push(ext);
    }
    if (pd_c) {
        const extvalue = countryNameFromString(pd_c);
        if (!extvalue) {
            return null;
        }
        const ext = new ExtensionAttribute(
            physical_delivery_country_name["&id"],
            physical_delivery_country_name.encoderFor["&Type"](extvalue, $.DER),
        );
        ext_attrs.push(ext);
    }
    if (pd_pc) {
        const extvalue = postalCodeFromString(pd_pn);
        if (!extvalue) {
            return null;
        }
        const ext = new ExtensionAttribute(
            postal_code["&id"],
            postal_code.encoderFor["&Type"](extvalue, $.DER),
        );
        ext_attrs.push(ext);
    }
    if (pd_pn) {
        const ext = pdsParameterToExtension(
            physical_delivery_personal_name,
            universal_physical_delivery_personal_name,
            pd_pn,
        );
        ext_attrs.push(ext);
    }
    if (pd_ea) {
        const ext = pdsParameterToExtension(
            extension_OR_address_components,
            universal_extension_OR_address_components,
            pd_ea,
        );
        ext_attrs.push(ext);
    }
    if (pd_ed) {
        const ext = pdsParameterToExtension(
            extension_physical_delivery_address_components,
            universal_extension_physical_delivery_address_components,
            pd_ed,
        );
        ext_attrs.push(ext);
    }
    if (pd_ofn) {
        const ext = pdsParameterToExtension(
            physical_delivery_office_number,
            universal_physical_delivery_office_number,
            pd_ofn,
        );
        ext_attrs.push(ext);
    }
    if (pd_of) {
        const ext = pdsParameterToExtension(
            physical_delivery_office_name,
            universal_physical_delivery_office_name,
            pd_of,
        );
        ext_attrs.push(ext);
    }
    if (pd_o) {
        const ext = pdsParameterToExtension(
            physical_delivery_organization_name,
            universal_physical_delivery_organization_name,
            pd_o,
        );
        ext_attrs.push(ext);
    }
    if (pd_s) {
        const ext = pdsParameterToExtension(
            street_address,
            universal_street_address,
            pd_s,
        );
        ext_attrs.push(ext);
    }
    if (pd_u) {
        const ext = pdsParameterToExtension(
            unique_postal_name,
            universal_unique_postal_name,
            pd_u,
        );
        ext_attrs.push(ext);
    }
    if (pd_l) {
        const ext = pdsParameterToExtension(
            local_postal_attributes,
            universal_local_postal_attributes,
            pd_l,
        );
        ext_attrs.push(ext);
    }
    if (pd_r) {
        const ext = pdsParameterToExtension(
            poste_restante_address,
            universal_poste_restante_address,
            pd_r,
        );
        ext_attrs.push(ext);
    }
    if (pd_b) {
        const ext = pdsParameterToExtension(
            post_office_box_address,
            universal_post_office_box_address,
            pd_b,
        );
        ext_attrs.push(ext);
    }
    if (universal_ddas.length) {
        const ext = new ExtensionAttribute(
            universal_domain_defined_attributes["&id"],
            universal_domain_defined_attributes.encoderFor["&Type"](universal_ddas, $.DER),
        );
        ext_attrs.push(ext);
    }
    const bisa = new BuiltInStandardAttributes(
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
    return new ORAddress(
        bisa,
        bidda,
        ext_attrs,
    );
}
