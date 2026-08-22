/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    BuiltInDomainDefinedAttributes,
    _decode_BuiltInDomainDefinedAttributes,
    _encode_BuiltInDomainDefinedAttributes,
    BuiltInStandardAttributes,
    _decode_BuiltInStandardAttributes,
    _encode_BuiltInStandardAttributes,
    ExtensionAttributes,
    _decode_ExtensionAttributes,
    _encode_ExtensionAttributes,
    _decode_TeletexPersonalName,
    _decode_UniversalPersonalName,
    physical_delivery_country_name,
    unformatted_postal_address,
    universal_unformatted_postal_address,
    ub_domain_defined_attribute_type_length,
    ub_domain_defined_attributes,
    ub_extension_attributes,
} from "../PkiPmiExternalDataTypes/index.mjs";
import {
    displayORAddressComponents,
    displayRFC2156ORAddressComponents,
    formatRFC2156Address,
} from "../../display.mjs";
import type { NameForm, ORAddressAttributes, ORAddressJSON } from "../../types.mjs";
import { orAddressToAttributes } from "../../attrs.mjs";
import { x121_dcc_country_code_to_iso_3166 } from "../../country.mjs";
import {
    orAddressFromString,
    type ORAddressFromStringOptions,
} from "../../parse.mjs";

const DELIMITER = ';'.charCodeAt(0);

/**
 * @summary ORAddress
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ORAddress ::= SEQUENCE {
 *   built-in-standard-attributes        BuiltInStandardAttributes,
 *   built-in-domain-defined-attributes  BuiltInDomainDefinedAttributes OPTIONAL,
 *   -- see also teletex-domain-defined-attributes
 *   extension-attributes                ExtensionAttributes OPTIONAL }
 * ```
 *
 */
export class ORAddress {
    constructor(
        /**
         * @summary `built_in_standard_attributes`.
         * @public
         * @readonly
         */
        readonly built_in_standard_attributes: BuiltInStandardAttributes,
        /**
         * @summary `built_in_domain_defined_attributes`.
         * @public
         * @readonly
         */
        readonly built_in_domain_defined_attributes?: OPTIONAL<BuiltInDomainDefinedAttributes>,
        /**
         * @summary `extension_attributes`.
         * @public
         * @readonly
         */
        readonly extension_attributes?: OPTIONAL<ExtensionAttributes>
    ) {
        if (
            this.built_in_domain_defined_attributes
            && (this.built_in_domain_defined_attributes.length > ub_domain_defined_attributes)
        ) {
            throw new Error("There must be no more than 4 built-in domain defined attributes in an ORAddress");
        }
        if (
            this.extension_attributes
            && (this.extension_attributes.length > ub_extension_attributes)
        ) {
            throw new Error("There must be no more than 256 extension attributes in an ORAddress");
        }
    }

    /**
     * @summary Restructures an object into a ORAddress
     * @description
     *
     * This takes an `object` and converts it to a `ORAddress`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ORAddress`.
     * @returns {ORAddress}
     */
    public static _from_object(
        _o: { [_K in keyof ORAddress]: ORAddress[_K] }
    ): ORAddress {
        return new ORAddress(
            _o.built_in_standard_attributes,
            _o.built_in_domain_defined_attributes,
            _o.extension_attributes
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
        return displayORAddressComponents(this)
            .join(String.fromCharCode(DELIMITER))
            ;
    }

    /**
     * Convert to a string representation based on
     * [IETF RFC 2156](https://www.rfc-editor.org/rfc/rfc2156) section 4.1
     * (`std-or-address`).
     *
     * Example output:
     *
     * ```
     * /G=Andy/S=Wharol/O=MMNY/ADMD=ATT/C=US/
     * ```
     *
     * @returns The IETF RFC 2156 string representation.
     * @public
     * @function
     */
    public toRFC2156String(): string {
        return formatRFC2156Address(displayRFC2156ORAddressComponents(this));
    }

    /**
     * Convert to a JSON representation.
     * @returns The JSON representation of this `ORAddress`.
     * @public
     * @function
     */
    public toJSON(): ORAddressJSON {
        return {
            "built-in-standard-attributes": this.built_in_standard_attributes.toJSON(),
            "built-in-domain-defined-attributes": this.built_in_domain_defined_attributes
                ?.map((built_in_domain_defined_attribute) => built_in_domain_defined_attribute.toJSON()),
            "extension-attributes": this.extension_attributes
                ?.map((extension_attribute) => extension_attribute.toJSON()),
        };
    }

    /**
     * @summary Determine the name form of the O/R address
     * @description
     * 
     * This determines the name form of the O/R address according to the
     * procedure described in ITU-T Recommendation X.402, Section 18.5.5.
     * 
     * > The form of an OR-address shall be determined as follows:
     * > 
     * >   - if it contains a numeric-user-identifier, it is a numeric OR-address;
     * >   - if it contains a network-address, it is a terminal OR-address;
     * >   - if it contains a physical-delivery-country, it is a postal OR-address;
     * >   - any other OR-address is a mnemonic OR-address.
     * >
     * > If a postal OR-address contains an unformatted-postal-address it is an
     * > unformatted postal OR-address, otherwise it is a formatted postal
     * > OR-address.
     * 
     * @returns The name form of the O/R address: one of `mnem`, `numr`, `post_f`, `post_u`, or `term`.
     * @public
     * @function
     */
    public determineNameForm(): NameForm {
        if (this.built_in_standard_attributes.numeric_user_identifier) {
            return "numr";
        }
        if (this.built_in_standard_attributes.network_address) {
            return "term";
        }
        const has_pd_country = this.extension_attributes
            ?.some((ext) => ext.extension_attribute_type == physical_delivery_country_name["&id"])
            ;
        if (has_pd_country) {
            const has_unformatted = this.extension_attributes
                ?.some((ext) => (
                    (ext.extension_attribute_type == unformatted_postal_address["&id"])
                    || (ext.extension_attribute_type == universal_unformatted_postal_address["&id"])
                ))
                ;
            return has_unformatted ? "post_u" : "post_f";
        }
        return "mnem";
    }

    /**
     * @summary Returns an object of O/R address attributes.
     * @description
     *
     * Converts this O/R address instance into an {@link ORAddressAttributes} object,
     * mapping all available standard, domain-defined, and extension attributes into a plain structure
     * suitable for access or serialization. The returned object includes all available
     * address fields extracted from this instance, such as organization names, personal names,
     * organizational unit names, delivery information, and other address components.
     *
     * This method internally delegates to the `orAddressToAttributes` function,
     * ensuring attribute structure is consistent with the shape expected across the library.
     *
     * @returns {ORAddressAttributes} The attributes object representing this O/R address.
     * @public
     */
    public toAttributes(): ORAddressAttributes {
        return orAddressToAttributes(this);
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
        const c = this.built_in_standard_attributes.country_name;
        if (!c) {
            return undefined;
        }
        if ("x121_dcc_code" in c) {
            const cnum = Number.parseInt(c.x121_dcc_code, 10);
            return x121_dcc_country_code_to_iso_3166(cnum);
        } else {
            return c.iso_3166_alpha2_code;
        }
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
    public getADMDString(): string {
        const admd = this.built_in_standard_attributes.administration_domain_name;
        if ("numeric" in admd) {
            return admd.numeric;
        } else {
            return admd.printable;
        }
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
        const prmd = this.built_in_standard_attributes.private_domain_name;
        if ("numeric" in prmd) {
            return prmd.numeric;
        } else {
            return prmd.printable;
        }
    }

    /**
     * @summary Whether two addresses name the same country.
     * @description
     *
     * Compares ISO 3166-1 alpha-2 codes, so an X.121 DCC and an ISO code for
     * the same country are treated as equal.
     *
     * @param other The other O/R address.
     * @returns `true` if both country values map to the same ISO code (including
     * both being absent).
     * @public
     * @function
     */
    public isEqualCountry(other: ORAddress): boolean {
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
     * @param other The other O/R address.
     * @returns `true` if the ADMDs match, or if either is the any-ADMD value.
     * @public
     * @function
     */
    public isEqualADMD(other: ORAddress): boolean {
        const thisa = this.getADMDString();
        const othera = other.getADMDString();
        // This behavior is described in ITU-T Recommendation X.402 (1999), Section 18.3.1.
        if (thisa === " " || othera === " ") {
            return true;
        }
        return thisa === othera;
    }

    public isEqualPRMD(other: ORAddress): boolean {
        const thisa = this.getPRMDString();
        const othera = other.getPRMDString();
        return thisa === othera;
    }

    /**
     * @summary Convert from an IETF RFC 1685 or RFC 2156 string.
     * @description
     *
     * By default this parses [IETF RFC 1685](https://www.rfc-editor.org/rfc/rfc1685)
     * labelled form. Pass `{ rfc: 2156 }` to parse the MIXER
     * [IETF RFC 2156](https://www.rfc-editor.org/rfc/rfc2156) `std-or-address` form.
     *
     * Example input (RFC 1685):
     *
     * ```
     * G=Jonathan;I=M;S=Wilbur;O=Wildboar Software;A=123;C=US
     * ```
     *
     * Example input (RFC 2156):
     *
     * ```
     * /G=Andy/S=Wharol/O=MMNY/ADMD=ATT/C=US/
     * ```
     *
     * @param s The string representation of this `ORAddress`.
     * @param options Which RFC syntax to use.
     * @returns The `ORAddress` represented by the string, or `null` if parsing fails.
     * @public
     * @static
     * @function
     */
    public static fromString(
        s: string,
        options: ORAddressFromStringOptions = {},
    ): ORAddress | null {
        return orAddressFromString(s, options);
    }

}

/**
 * @summary The Leading Root Component Types of ORAddress
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ORAddress: $.ComponentSpec[] =
    [
        new $.ComponentSpec(
            "built-in-standard-attributes",
            false,
            $.hasTag(_TagClass.universal, 16)
        ),
        new $.ComponentSpec(
            "built-in-domain-defined-attributes",
            true,
            $.hasTag(_TagClass.universal, 16)
        ),
        new $.ComponentSpec(
            "extension-attributes",
            true,
            $.hasTag(_TagClass.universal, 17)
        ),
    ];

/**
 * @summary The Trailing Root Component Types of ORAddress
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ORAddress: $.ComponentSpec[] =
    [];

/**
 * @summary The Extension Addition Component Types of ORAddress
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ORAddress: $.ComponentSpec[] =
    [];

/**
 * @summary Decodes an ASN.1 element into a(n) ORAddress
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ORAddress} The decoded data structure.
 */
export function _decode_ORAddress(el: _Element): ORAddress {
    let built_in_standard_attributes!: BuiltInStandardAttributes;
    let built_in_domain_defined_attributes: OPTIONAL<BuiltInDomainDefinedAttributes>;
    let extension_attributes: OPTIONAL<ExtensionAttributes>;
    const callbacks: $.DecodingMap = {
        "built-in-standard-attributes": (_el: _Element): void => {
            built_in_standard_attributes =
                _decode_BuiltInStandardAttributes(_el);
        },
        "built-in-domain-defined-attributes": (_el: _Element): void => {
            built_in_domain_defined_attributes =
                _decode_BuiltInDomainDefinedAttributes(_el);
        },
        "extension-attributes": (_el: _Element): void => {
            extension_attributes = _decode_ExtensionAttributes(_el);
        },
    };
    $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_ORAddress,
        _extension_additions_list_spec_for_ORAddress,
        _root_component_type_list_2_spec_for_ORAddress,
        undefined
    );
    return new ORAddress(
        built_in_standard_attributes,
        built_in_domain_defined_attributes,
        extension_attributes
    );
}

/**
 * @summary Encodes a(n) ORAddress into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ORAddress, encoded as an ASN.1 Element.
 */
export function _encode_ORAddress(value: ORAddress,
    _elGetter: $.ASN1Encoder<ORAddress>): _Element {
    const components: _Element[] = [
        /* REQUIRED   */ _encode_BuiltInStandardAttributes(
            value.built_in_standard_attributes,
            $.BER
        ),
    ];
    if (value.built_in_domain_defined_attributes?.length) {
        const c = _encode_BuiltInDomainDefinedAttributes(
            value.built_in_domain_defined_attributes,
            $.BER
        );
        components.push(c);
    }
    if (value.extension_attributes?.length) {
        const c = _encode_ExtensionAttributes(
            value.extension_attributes,
            $.BER
        );
        components.push(c);
    }
    return $._encodeSequence(components, $.BER);
}


/* eslint-enable */
