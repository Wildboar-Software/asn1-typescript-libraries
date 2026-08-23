/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    AdministrationDomainName,
    _decode_AdministrationDomainName,
    _encode_AdministrationDomainName,
} from "../PkiPmiExternalDataTypes/AdministrationDomainName.ta.mjs";
import {
    CountryName,
    _decode_CountryName,
    _encode_CountryName,
} from "../PkiPmiExternalDataTypes/CountryName.ta.mjs";
import {
    NetworkAddress,
    _decode_NetworkAddress,
    _encode_NetworkAddress,
} from "../PkiPmiExternalDataTypes/NetworkAddress.ta.mjs";
import {
    NumericUserIdentifier,
    _decode_NumericUserIdentifier,
    _encode_NumericUserIdentifier,
} from "../PkiPmiExternalDataTypes/NumericUserIdentifier.ta.mjs";
import {
    OrganizationalUnitNames,
    _decode_OrganizationalUnitNames,
    _encode_OrganizationalUnitNames,
} from "../PkiPmiExternalDataTypes/OrganizationalUnitNames.ta.mjs";
import {
    OrganizationName,
    _decode_OrganizationName,
    _encode_OrganizationName,
} from "../PkiPmiExternalDataTypes/OrganizationName.ta.mjs";
import {
    PersonalName,
    _decode_PersonalName,
    _encode_PersonalName,
} from "../PkiPmiExternalDataTypes/PersonalName.ta.mjs";
import {
    PrivateDomainName,
    _decode_PrivateDomainName,
    _encode_PrivateDomainName,
} from "../PkiPmiExternalDataTypes/PrivateDomainName.ta.mjs";
import {
    TerminalIdentifier,
    _decode_TerminalIdentifier,
    _encode_TerminalIdentifier,
} from "../PkiPmiExternalDataTypes/TerminalIdentifier.ta.mjs";
import {
    displayCountryName,
    displayDomainNameValue,
    displayRFC2156ORAddressComponents,
    formatRFC2156Address,
} from "../../display.mjs";
import { escape_oraddress_attribute_value, isPrintableString } from "../../utils.mjs";
import { builtInStandardAttributesFromString } from "../../parse.mjs";
import { type BuiltInStandardAttributesJSON } from "../../types.mjs";
import { ORAddress } from "./ORAddress.ta.mjs";
import { x121_dcc_country_code_to_iso_3166 } from "../../country.mjs";
import { ub_organization_name_length } from "./ub-organization-name-length.va.mjs";
import { ub_domain_name_length } from "./ub-domain-name-length.va.mjs";
import { ub_terminal_id_length } from "./ub-terminal-id-length.va.mjs";
import { ub_x121_address_length } from "./ub-x121-address-length.va.mjs";
import { ub_numeric_user_id_length } from "./ub-numeric-user-id-length.va.mjs";
import { ub_organizational_unit_name_length } from "./ub-organizational-unit-name-length.va.mjs";
import { ub_organizational_units } from "./ub-organizational-units.va.mjs";

const DELIMITER = ';'.charCodeAt(0);

/**
 * @summary BuiltInStandardAttributes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BuiltInStandardAttributes ::= SEQUENCE {
 *   country-name                CountryName OPTIONAL,
 *   administration-domain-name  AdministrationDomainName OPTIONAL,
 *   network-address             [0]  NetworkAddress OPTIONAL,
 *   -- see also extended-network-address
 *   terminal-identifier         [1]  TerminalIdentifier OPTIONAL,
 *   private-domain-name         [2]  PrivateDomainName OPTIONAL,
 *   organization-name           [3]  OrganizationName OPTIONAL,
 *   -- see also teletex-organization-name
 *   numeric-user-identifier     [4]  NumericUserIdentifier OPTIONAL,
 *   personal-name               [5]  PersonalName OPTIONAL,
 *   -- see also teletex-personal-name
 *   organizational-unit-names   [6]  OrganizationalUnitNames OPTIONAL
 *   -- see also teletex-organizational-unit-names --}
 * ```
 *
 */
export class BuiltInStandardAttributes {
    constructor(
        /**
         * @summary `country_name`.
         * @public
         * @readonly
         */
        readonly country_name?: OPTIONAL<CountryName>,
        /**
         * @summary `administration_domain_name`.
         * @public
         * @readonly
         */
        readonly administration_domain_name?: OPTIONAL<AdministrationDomainName>,
        /**
         * @summary `network_address`.
         * @public
         * @readonly
         */
        readonly network_address?: OPTIONAL<NetworkAddress>,
        /**
         * @summary `terminal_identifier`.
         * @public
         * @readonly
         */
        readonly terminal_identifier?: OPTIONAL<TerminalIdentifier>,
        /**
         * @summary `private_domain_name`.
         * @public
         * @readonly
         */
        readonly private_domain_name?: OPTIONAL<PrivateDomainName>,
        /**
         * @summary `organization_name`.
         * @public
         * @readonly
         */
        readonly organization_name?: OPTIONAL<OrganizationName>,
        /**
         * @summary `numeric_user_identifier`.
         * @public
         * @readonly
         */
        readonly numeric_user_identifier?: OPTIONAL<NumericUserIdentifier>,
        /**
         * @summary `personal_name`.
         * @public
         * @readonly
         */
        readonly personal_name?: OPTIONAL<PersonalName>,
        /**
         /**
          * @summary `organizational_unit_names`.
          *
          * @remarks
          * Order is significant—OU1 is the highest-level (most significant) organizational unit,
          * OU2 is the next most significant, and so on through OU4 (least significant).
          *
          * Note: The order of organizational unit names in the encoded data structure is [OU1, OU2, OU3, OU4]
          * (most significant to least significant).
          *
          * However, when writing the string representation for an O/R Address (see RFC 2156 and RFC 1685),
          * the attributes are listed in reverse order: OU4 (if present) first, down to OU1 last.
          * (See RFC 2156, Section 4.1.3: "The string representation reverses the order of the attributes—OU4, ..., OU1.")
          *
          * Always respect this order for both serialization and parsing to ensure interoperability.
          *
          * @public
          * @readonly
          */
   
        readonly organizational_unit_names?: OPTIONAL<OrganizationalUnitNames>
    ) {
        if (this.country_name) {
            if ("iso_3166_alpha2_code" in this.country_name) {
                if (!/^[A-Z]{2}$/.test(this.country_name.iso_3166_alpha2_code)) {
                    throw new Error("ISO 3166-1 alpha-2 code must be 2 uppercase letters");
                }
            } else if ("x121_dcc_code" in this.country_name) {
                if (!/^[0-9]{3}$/.test(this.country_name.x121_dcc_code)) {
                    throw new Error("X.121 DCC code must be three numeric digits");
                }
            }
        }
        if (this.administration_domain_name) {
            let s;
            if ("numeric" in this.administration_domain_name) {
                if (!/^[0-9 ]+$/.test(this.administration_domain_name.numeric)) {
                    throw new Error("Administration domain name must be numeric");
                }
                s = this.administration_domain_name.numeric;
            } else if ("printable" in this.administration_domain_name) {
                if (!isPrintableString(this.administration_domain_name.printable)) {
                    throw new Error("Administration domain name must be printable");
                }
                s = this.administration_domain_name.printable;
            }
            if (s && s.length > ub_domain_name_length) {
                throw new Error("Administration domain name must be 16 characters or less");
            }
        }
        if (this.network_address) {
            if (this.network_address.length > ub_x121_address_length) {
                throw new Error("Network address must be 16 characters or less");
            }
            if (!/^[0-9 ]+$/.test(this.network_address)) {
                throw new Error("Network address must be numeric");
            }
        }
        if (this.terminal_identifier) {
            if (this.terminal_identifier.length > ub_terminal_id_length) {
                throw new Error("Terminal identifier must be 16 characters or less");
            }
            if (!isPrintableString(this.terminal_identifier)) {
                throw new Error("Terminal identifier must be printable");
            }
        }
        if (this.private_domain_name) {
            let s;
            if ("numeric" in this.private_domain_name) {
                if (!/^[0-9 ]+$/.test(this.private_domain_name.numeric)) {
                    throw new Error("Private domain name must be numeric");
                }
                s = this.private_domain_name.numeric;
            } else if ("printable" in this.private_domain_name) {
                if (!isPrintableString(this.private_domain_name.printable)) {
                    throw new Error("Private domain name must be printable");
                }
                s = this.private_domain_name.printable;
            }
            if (s && s.length > ub_domain_name_length) {
                throw new Error("Private domain name must be 16 characters or less");
            }
        }
        if (this.organization_name) {
            if (this.organization_name.length > ub_organization_name_length) {
                throw new Error("Organization name must be 64 characters or less");
            }
            if (!isPrintableString(this.organization_name)) {
                throw new Error("Organization name must be printable");
            }
        }
        if (this.numeric_user_identifier) {
            if (this.numeric_user_identifier.length > ub_numeric_user_id_length) {
                throw new Error("Numeric user identifier must be 16 characters or less");
            }
            if (!/^[0-9 ]+$/.test(this.numeric_user_identifier)) {
                throw new Error("Numeric user identifier must be numeric");
            }
        }
        if (this.organizational_unit_names) {
            if (this.organizational_unit_names.length > ub_organizational_units) {
                throw new Error("There must be no more than 4 organizational unit names");
            }
            for (const ou of this.organizational_unit_names) {
                if (ou.length > ub_organizational_unit_name_length) {
                    throw new Error("Organizational unit name must be 16 characters or less");
                }
                if (!isPrintableString(ou)) {
                    throw new Error("Organizational unit name must be printable");
                }
            }
        }
    }

    /**
     * @summary Restructures an object into a BuiltInStandardAttributes
     * @description
     *
     * This takes an `object` and converts it to a `BuiltInStandardAttributes`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `BuiltInStandardAttributes`.
     * @returns {BuiltInStandardAttributes}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof BuiltInStandardAttributes]: BuiltInStandardAttributes[_K];
            }
        >
    ): BuiltInStandardAttributes {
        return new BuiltInStandardAttributes(
            _o.country_name,
            _o.administration_domain_name,
            _o.network_address,
            _o.terminal_identifier,
            _o.private_domain_name,
            _o.organization_name,
            _o.numeric_user_identifier,
            _o.personal_name,
            _o.organizational_unit_names
        );
    }

    /**
     * Convert to a string representation based on
     * [IETF RFC 1685](https://www.rfc-editor.org/info/rfc1685/).
     * 
     * This assumes the semicolon (`;`) as the delimiter and escapes it
     * accordingly.
     * 
     * Example output:
     * 
     * ```
     * G=Jonathan;I=M;S=Wilbur;O=Wildboar Software;A=123;C=US
     * ```
     * 
     * @returns The IETF RFC 1685 string representation.
     * @public
     * @function
     */
    public toString(): string {
        const components: string[] = [];
        if (this.personal_name) {
            components.push(this.personal_name.toString());
        }
        if (this.numeric_user_identifier) {
            components.push("N-ID=" + this.numeric_user_identifier);
        }
        if (this.terminal_identifier) {
            if (!this.terminal_identifier.includes(';')) {
                components.push("T-ID=" + this.terminal_identifier);
            } else { // PrintableString is not allowed to contain a semicolon.
                components.push("T-ID=?");
            }
        }
        if (this.network_address) {
            components.push("X.121=" + this.network_address);
        }
        if (this.organization_name) {
            if (!this.organization_name.includes(';')) {
                components.push("O=" + this.organization_name);
            } else { // PrintableString is not allowed to contain a semicolon.
                components.push("O=?");
            }
        }
        if (this.organizational_unit_names) {
            for (const [i, ou] of this.organizational_unit_names.entries()) {
                if (ou.includes(';')) {
                    components.push(`OU${i + 1}=?`);
                    continue;
                }
                components.push(`OU${i + 1}=${escape_oraddress_attribute_value(ou, DELIMITER)}`);
            }
        }
        if (this.private_domain_name) {
            components.push("P=" + displayDomainNameValue(this.private_domain_name));
        }
        if (this.administration_domain_name) {
            components.push("A=" + displayDomainNameValue(this.administration_domain_name));
        }
        if (this.country_name) {
            components.push(displayCountryName(this.country_name));
        }
        return components.join(";");
    }

    /**
     * Convert to a string representation based on
     * [IETF RFC 2156](https://www.rfc-editor.org/rfc/rfc2156) section 4.1
     * (`std-or-address`).
     *
     * Only built-in standard attributes are included. Example output:
     *
     * ```
     * /G=Jonathan/I=M/S=Wilbur/O=Wildboar Software/ADMD=123/C=US/
     * ```
     *
     * @returns The IETF RFC 2156 string representation.
     * @public
     * @function
     */
    public toRFC2156String(): string {
        return formatRFC2156Address(
            displayRFC2156ORAddressComponents(new ORAddress(this)),
        );
    }

    /**
     * @summary ISO 3166-1 alpha-2 country code for this address.
     * @description
     *
     * Returns the stored ISO 3166-1 alpha-2 code, or maps an X.121 data country
     * code to ISO 3166-1 when the country is stored in that form.
     *
     * @returns The two-letter country code, or `undefined` if country is absent
     * or the X.121 code has no mapping.
     * @public
     * @function
     */
    public getISO3166Country(): string | undefined {
        const c = this.country_name;
        if (!c) {
            return undefined;
        }
        if ("x121_dcc_code" in c) {
            const cnum = Number.parseInt(c.x121_dcc_code, 10);
            return x121_dcc_country_code_to_iso_3166(cnum);
        }
        return c.iso_3166_alpha2_code;
    }

    /**
     * @summary Administration domain name as a string.
     * @description
     *
     * Returns the numeric or printable ADMD value. A single space is the X.400
     * "any ADMD" value described in ITU-T Recommendation X.402 (1999),
     * section 18.3.1.
     *
     * @returns The ADMD string, or `undefined` if ADMD is absent.
     * @public
     * @function
     */
    public getADMDString(): string | undefined {
        const admd = this.administration_domain_name;
        if (typeof admd === "undefined") {
            return undefined;
        }
        if ("numeric" in admd) {
            return admd.numeric;
        }
        return admd.printable;
    }

    /**
     * @summary Private domain name as a string.
     *
     * @returns The numeric or printable PRMD value, or `undefined` if PRMD is
     * absent.
     * @public
     * @function
     */
    public getPRMDString(): string | undefined {
        const prmd = this.private_domain_name;
        if (typeof prmd === "undefined") {
            return undefined;
        }
        if ("numeric" in prmd) {
            return prmd.numeric;
        }
        return prmd.printable;
    }

    /**
     * @summary Whether two addresses name the same country.
     * @description
     *
     * Compares ISO 3166-1 alpha-2 codes, so an X.121 DCC and an ISO code for
     * the same country are treated as equal.
     *
     * @param other The other built-in standard attributes.
     * @returns `true` if both country values map to the same ISO code (including
     * both being absent).
     * @public
     * @function
     */
    public isEqualCountry(other: BuiltInStandardAttributes): boolean {
        const thisc = this.getISO3166Country();
        const otherc = other.getISO3166Country();
        return thisc === otherc;
    }

    /**
     * @summary Whether two addresses name the same administration domain.
     * @description
     *
     * A single-space ADMD is the X.400 "any ADMD" value. If either side has
     * that value, the ADMDs are treated as equal. See ITU-T Recommendation
     * X.402 (1999), section 18.3.1.
     *
     * @param other The other built-in standard attributes.
     * @returns `true` if the ADMDs match, or if either is the any-ADMD value.
     * @public
     * @function
     */
    public isEqualADMD(other: BuiltInStandardAttributes): boolean {
        const thisa = this.getADMDString();
        const othera = other.getADMDString();
        if (
            (thisa === " ")
            || (othera === " ")
        ) {
            return true;
        }
        return thisa === othera;
    }

    /**
     * @summary Convert from the IETF RFC 1685 string representation.
     * @description
     * 
     * This takes an IETF RFC 1685 string and converts it to a `BuiltInStandardAttributes`.
     * 
     * Example input:
     * 
     * ```
     * G=Jonathan;I=M;S=Wilbur;O=Wildboar Software;A=123;C=US
     * ```
     * 
     * This does not tolerate Unicode or even Teletex strings. In fact, every
     * string must be--at least--an ASN.1 `PrintableString`.
     * 
     * @param s The string representation of this `BuiltInStandardAttributes`.
     * @returns The `BuiltInStandardAttributes` represented by the string.
     * @public
     * @function
     */
    public static fromString(s: string): BuiltInStandardAttributes | null {
        return builtInStandardAttributesFromString(s);
    }

    /**
     * Convert to a JSON representation.
     * @returns The JSON representation of this `BuiltInStandardAttributes`.
     * @public
     * @function
     */
    public toJSON(): BuiltInStandardAttributesJSON {
        const c = this.country_name
            ? ("iso_3166_alpha2_code" in this.country_name
                ? this.country_name.iso_3166_alpha2_code
                : this.country_name.x121_dcc_code)
            : undefined;
            ;
        const a = this.administration_domain_name
            ? (("numeric" in this.administration_domain_name)
                ? this.administration_domain_name.numeric
                : this.administration_domain_name.printable)
            : undefined
            ;
        const p = this.private_domain_name
            ? (("numeric" in this.private_domain_name)
                ? this.private_domain_name.numeric
                : this.private_domain_name.printable)
            : undefined
            ;
        return {
            "country-name": c,
            "administration-domain-name": a,
            "network-address": this.network_address?.toString(),
            "terminal-identifier": this.terminal_identifier?.toString(),
            "private-domain-name": p,
            "organization-name": this.organization_name?.toString(),
            "numeric-user-identifier": this.numeric_user_identifier?.toString(),
            "personal-name": this.personal_name?.toJSON(),
            "organizational-unit-names": this.organizational_unit_names?.map((ou) => ou.toString()),
        };
    }

    /**
     * Convert from a JSON representation.
     * @param json The JSON representation of this `BuiltInStandardAttributes`.
     * @returns The `BuiltInStandardAttributes` represented by the JSON.
     * @public
     * @function
     */
    public static fromJSON(json: BuiltInStandardAttributesJSON): BuiltInStandardAttributes {
        let c;
        if (json["country-name"]) {
            if (/^[A-Z]{2}$/.test(json["country-name"])) {
                c = { iso_3166_alpha2_code: json["country-name"] };
            } else if (/^[0-9]+$/.test(json["country-name"])) {
                c = { x121_dcc_code: json["country-name"] };
            } else {
                throw new Error("Invalid country name");
            }
        }
        let a;
        if (json["administration-domain-name"]) {
            if (/^[0-9]+$/.test(json["administration-domain-name"])) {
                a = { numeric: json["administration-domain-name"] };
            } else {
                a = { printable: json["administration-domain-name"] };
            }
        }
        let p;
        if (json["private-domain-name"]) {
            if (/^[0-9]+$/.test(json["private-domain-name"])) {
                p = { numeric: json["private-domain-name"] };
            } else {
                p = { printable: json["private-domain-name"] };
            }
        }
        const pn = json["personal-name"]
            ? PersonalName.fromJSON(json["personal-name"])
            : undefined;
        return new BuiltInStandardAttributes(
            c,
            a,
            json["network-address"],
            json["terminal-identifier"],
            p,
            json["organization-name"],
            json["numeric-user-identifier"],
            pn,
            json["organizational-unit-names"],
        );
    }

}

/**
 * @summary The Leading Root Component Types of BuiltInStandardAttributes
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_BuiltInStandardAttributes: $.ComponentSpec[] =
    [
        new $.ComponentSpec(
            "country-name",
            true,
            $.hasTag(_TagClass.application, 1)
        ),
        new $.ComponentSpec(
            "administration-domain-name",
            true,
            $.hasTag(_TagClass.application, 2)
        ),
        new $.ComponentSpec(
            "network-address",
            true,
            $.hasTag(_TagClass.context, 0)
        ),
        new $.ComponentSpec(
            "terminal-identifier",
            true,
            $.hasTag(_TagClass.context, 1)
        ),
        new $.ComponentSpec(
            "private-domain-name",
            true,
            $.hasTag(_TagClass.context, 2)
        ),
        new $.ComponentSpec(
            "organization-name",
            true,
            $.hasTag(_TagClass.context, 3)
        ),
        new $.ComponentSpec(
            "numeric-user-identifier",
            true,
            $.hasTag(_TagClass.context, 4)
        ),
        new $.ComponentSpec(
            "personal-name",
            true,
            $.hasTag(_TagClass.context, 5)
        ),
        new $.ComponentSpec(
            "organizational-unit-names",
            true,
            $.hasTag(_TagClass.context, 6)
        ),
    ];

/**
 * @summary The Trailing Root Component Types of BuiltInStandardAttributes
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_BuiltInStandardAttributes: $.ComponentSpec[] =
    [];

/**
 * @summary The Extension Addition Component Types of BuiltInStandardAttributes
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_BuiltInStandardAttributes: $.ComponentSpec[] =
    [];

/**
 * @summary Decodes an ASN.1 element into a(n) BuiltInStandardAttributes
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BuiltInStandardAttributes} The decoded data structure.
 */
export function _decode_BuiltInStandardAttributes(el: _Element): BuiltInStandardAttributes {
    let country_name: OPTIONAL<CountryName>;
    let administration_domain_name: OPTIONAL<AdministrationDomainName>;
    let network_address: OPTIONAL<NetworkAddress>;
    let terminal_identifier: OPTIONAL<TerminalIdentifier>;
    let private_domain_name: OPTIONAL<PrivateDomainName>;
    let organization_name: OPTIONAL<OrganizationName>;
    let numeric_user_identifier: OPTIONAL<NumericUserIdentifier>;
    let personal_name: OPTIONAL<PersonalName>;
    let organizational_unit_names: OPTIONAL<OrganizationalUnitNames>;
    const callbacks: $.DecodingMap = {
        "country-name": (_el: _Element): void => {
            country_name = _decode_CountryName(_el);
        },
        "administration-domain-name": (_el: _Element): void => {
            administration_domain_name =
                _decode_AdministrationDomainName(_el);
        },
        "network-address": (_el: _Element): void => {
            network_address = $._decode_explicit<NetworkAddress>(
                () => _decode_NetworkAddress
            )(_el);
        },
        "terminal-identifier": (_el: _Element): void => {
            terminal_identifier =
                $._decode_explicit<TerminalIdentifier>(
                    () => _decode_TerminalIdentifier
                )(_el);
        },
        "private-domain-name": (_el: _Element): void => {
            private_domain_name = $._decode_explicit<PrivateDomainName>(
                () => _decode_PrivateDomainName
            )(_el);
        },
        "organization-name": (_el: _Element): void => {
            organization_name = $._decode_explicit<OrganizationName>(
                () => _decode_OrganizationName
            )(_el);
        },
        "numeric-user-identifier": (_el: _Element): void => {
            numeric_user_identifier =
                $._decode_explicit<NumericUserIdentifier>(
                    () => _decode_NumericUserIdentifier
                )(_el);
        },
        "personal-name": (_el: _Element): void => {
            personal_name = $._decode_explicit<PersonalName>(
                () => _decode_PersonalName
            )(_el);
        },
        "organizational-unit-names": (_el: _Element): void => {
            organizational_unit_names =
                $._decode_explicit<OrganizationalUnitNames>(
                    () => _decode_OrganizationalUnitNames
                )(_el);
        },
    };
    $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_BuiltInStandardAttributes,
        _extension_additions_list_spec_for_BuiltInStandardAttributes,
        _root_component_type_list_2_spec_for_BuiltInStandardAttributes,
        undefined
    );
    return new BuiltInStandardAttributes(
        country_name,
        administration_domain_name,
        network_address,
        terminal_identifier,
        private_domain_name,
        organization_name,
        numeric_user_identifier,
        personal_name,
        organizational_unit_names
    );
}

/**
 * @summary Encodes a(n) BuiltInStandardAttributes into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BuiltInStandardAttributes, encoded as an ASN.1 Element.
 */
export function _encode_BuiltInStandardAttributes(value: BuiltInStandardAttributes,
    _elGetter: $.ASN1Encoder<BuiltInStandardAttributes>): _Element {
    const components: _Element[] = [];
    if (value.country_name) {
        components.push(_encode_CountryName(value.country_name, $.BER));
    }
    if (value.administration_domain_name) {
        const c = _encode_AdministrationDomainName(
            value.administration_domain_name,
            $.BER
        );
        components.push(c);
    }
    if (value.network_address) {
        const c = $._encode_explicit(
            _TagClass.context,
            0,
            () => _encode_NetworkAddress,
            $.BER
        )(value.network_address, $.BER);
        components.push(c);
    }
    if (value.terminal_identifier) {
        const c = $._encode_explicit(
            _TagClass.context,
            1,
            () => _encode_TerminalIdentifier,
            $.BER
        )(value.terminal_identifier, $.BER);
        components.push(c);
    }
    if (value.private_domain_name) {
        const c = $._encode_explicit(
            _TagClass.context,
            2,
            () => _encode_PrivateDomainName,
            $.BER
        )(value.private_domain_name, $.BER);
        components.push(c);
    }
    if (value.organization_name) {
        const c = $._encode_explicit(
            _TagClass.context,
            3,
            () => _encode_OrganizationName,
            $.BER
        )(value.organization_name, $.BER);
        components.push(c);
    }
    if (value.numeric_user_identifier) {
        const c = $._encode_explicit(
            _TagClass.context,
            4,
            () => _encode_NumericUserIdentifier,
            $.BER
        )(value.numeric_user_identifier, $.BER);
        components.push(c);
    }
    if (value.personal_name) {
        const c = $._encode_explicit(
            _TagClass.context,
            5,
            () => _encode_PersonalName,
            $.BER
        )(value.personal_name, $.BER);
        components.push(c);
    }
    if (value.organizational_unit_names?.length) {
        const c = $._encode_explicit(
            _TagClass.context,
            6,
            () => _encode_OrganizationalUnitNames,
            $.BER
        )(value.organizational_unit_names, $.BER);
        components.push(c);
    }
    return $._encodeSequence(components, $.BER);
}


/* eslint-enable */
