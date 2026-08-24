/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    UniversalOrBMPString,
    _decode_UniversalOrBMPString,
    _encode_UniversalOrBMPString,
} from "../PkiPmiExternalDataTypes/UniversalOrBMPString.ta.mjs";
import { escape_oraddress_attribute_value } from "../../utils.mjs";
import { universalPersonalNameToRFC2156String } from "../../display.mjs";
import { type PersonalNameJSON } from "../../types.mjs";
import { ub_universal_surname_length } from "./ub-universal-surname-length.va.mjs";
import { ub_universal_given_name_length } from "./ub-universal-given-name-length.va.mjs";
import { ub_universal_initials_length } from "./ub-universal-initials-length.va.mjs";
import { ub_universal_generation_qualifier_length } from "./ub-universal-generation-qualifier-length.va.mjs";
import { universalPersonalNameFromString } from "../../parse.mjs";
import { PersonalName } from "./PersonalName.ta.mjs";

const DELIMITER = ";".charCodeAt(0);

/**
 * @summary Whether two UniversalOrBMPString values represent the same text.
 *
 * @param a A UniversalOrBMPString, or `undefined` if the field is absent.
 * @param b The other UniversalOrBMPString, or `undefined` if the field is absent.
 * @returns `true` if both are absent, or both have the same text and language.
 */
function universalOrBMPStringsAreEqual(
    a: UniversalOrBMPString | undefined,
    b: UniversalOrBMPString | undefined,
): boolean {
    if (a === b) {
        return true;
    }
    if (
        (typeof a === "undefined")
        || (typeof b === "undefined")
    ) {
        return false;
    }
    return (a.toString() === b.toString());
}

/**
 * @summary UniversalPersonalName
 * @description
 *
 * Universal-string twin of `PersonalName`. Language codes are ignored in comparison
 * (ITU-T X.402 (1999), §18.2).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UniversalPersonalName ::= SET {
 *   surname
 *     [0]  UniversalOrBMPString{ub-universal-surname-length},
 *   -- If a language is specified within surname, then that language applies to each of the
 *   -- following optional components unless the component specifies another language.
 *   given-name
 *     [1]  UniversalOrBMPString{ub-universal-given-name-length} OPTIONAL,
 *   initials
 *     [2]  UniversalOrBMPString{ub-universal-initials-length} OPTIONAL,
 *   generation-qualifier
 *     [3]  UniversalOrBMPString{ub-universal-generation-qualifier-length} OPTIONAL }
 * ```
 *
 */
export class UniversalPersonalName {
    constructor(
        /**
         * @summary `surname`.
         * @public
         * @readonly
         */
        readonly surname: UniversalOrBMPString,
        /**
         * @summary `given_name`.
         * @public
         * @readonly
         */
        readonly given_name?: OPTIONAL<UniversalOrBMPString>,
        /**
         * @summary `initials`.
         * @public
         * @readonly
         */
        readonly initials?: OPTIONAL<UniversalOrBMPString>,
        /**
         * @summary `generation_qualifier`.
         * @public
         * @readonly
         */
        readonly generation_qualifier?: OPTIONAL<UniversalOrBMPString>
    ) {
        const s = this.surname.toString();
        if (s.length > ub_universal_surname_length) {
            throw new Error("UniversalPersonalName.surname must be 64 characters or less");
        }
        if (given_name && given_name.toString().length > ub_universal_given_name_length) {
            throw new Error("UniversalPersonalName.given_name must be 40 characters or less");
        }
        if (initials && initials.toString().length > ub_universal_initials_length) {
            throw new Error("UniversalPersonalName.initials must be 16 characters or less");
        }
        if (generation_qualifier && generation_qualifier.toString().length > ub_universal_generation_qualifier_length) {
            throw new Error("UniversalPersonalName.generation_qualifier must be 16 characters or less");
        }
    }

    /**
     * @summary Restructures an object into a UniversalPersonalName
     * @description
     *
     * This takes an `object` and converts it to a `UniversalPersonalName`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `UniversalPersonalName`.
     * @returns {UniversalPersonalName}
     */
    public static _from_object(
        _o: { [_K in keyof UniversalPersonalName]: UniversalPersonalName[_K] }
    ): UniversalPersonalName {
        return new UniversalPersonalName(
            _o.surname,
            _o.given_name,
            _o.initials,
            _o.generation_qualifier
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
     * S=John;G=Doe;I=J;Q=JR
     * ```
     * 
     * @returns The IETF RFC 1685 string representation.
     * @public
     * @function
     */
    public toString(): string {
        const components: string[] = [];
        if (this.given_name) {
            const s =this.given_name.toString();
            components.push(`G=${escape_oraddress_attribute_value(s, DELIMITER)}`);
        }
        if (this.initials) {
            const s = this.initials.toString();
            components.push(`I=${escape_oraddress_attribute_value(s, DELIMITER)}`);
        }
        if (this.surname) {
            const s = this.surname.toString();
            components.push(`S=${escape_oraddress_attribute_value(s, DELIMITER)}`);
        }
        if (this.generation_qualifier) {
            const s = this.generation_qualifier.toString();
            components.push(`Q=${escape_oraddress_attribute_value(s, DELIMITER)}`);
        }
        return components.join(";");
    }

    /**
     * Convert to a string representation based on
     * [IETF RFC 2156](https://www.rfc-editor.org/rfc/rfc2156) section 4.1.
     *
     * UniversalString / BMPString code points are converted with `toString()`.
     * Printable names use `encoded-pn` when §4.1.2 allows it; otherwise `G=` /
     * `I=` / `S=` / `GQ=` pairs are returned.
     *
     * @returns The IETF RFC 2156 string representation.
     * @public
     * @function
     */
    public toRFC2156String(): string {
        return universalPersonalNameToRFC2156String(this);
    }

    /**
     * Convert to a JSON representation.
     * @returns The JSON representation of this `UniversalPersonalName`.
     * @public
     * @function
     */
    public toJSON(): PersonalNameJSON {
        return {
            surname: this.surname.toString(),
            "given-name": this.given_name?.toString(),
            initials: this.initials?.toString(),
            "generation-qualifier": this.generation_qualifier?.toString(),
        };
    }

    /**
     * Convert from a JSON representation.
     * @param json The JSON representation of this `UniversalPersonalName`.
     * @returns The `UniversalPersonalName` represented by the JSON.
     * @public
     * @static
     * @function
     */
    public static fromJSON(json: PersonalNameJSON): UniversalPersonalName {
        return new UniversalPersonalName(
            new UniversalOrBMPString({ four_octets: json.surname }),
            json["given-name"] ? new UniversalOrBMPString({ four_octets: json["given-name"] }) : undefined,
            json.initials ? new UniversalOrBMPString({ four_octets: json.initials }) : undefined,
            json["generation-qualifier"] ? new UniversalOrBMPString({ four_octets: json["generation-qualifier"] }) : undefined,
        );
    }

    /**
     * @summary Compares this UniversalPersonalName to another, for equality.
     * @description
     * Compares all fields of the UniversalPersonalName. If `tolerateMissingInitials` is true,
     * then the initials are not compared; the rationale for this feature is that
     * initials are sometimes omitted from people's names in real life, and it does
     * not mean that the names do not refer to the same person. However, any other
     * field that is missing should probably not be assumed to match a present field.
     *
     * @param other The other UniversalPersonalName to compare against.
     * @param tolerateMissingInitials Whether to tolerate missing initials.
     * @returns `true` if and only if all relevant fields are equal.
     */
    public isEqualTo(other: UniversalPersonalName, tolerateMissingInitials: boolean = false): boolean {
        return (
            universalOrBMPStringsAreEqual(this.surname, other.surname)
            && universalOrBMPStringsAreEqual(this.given_name, other.given_name)
            && (tolerateMissingInitials ? true : universalOrBMPStringsAreEqual(this.initials, other.initials))
            && universalOrBMPStringsAreEqual(this.generation_qualifier, other.generation_qualifier)
        );
    }

    /**
     * @summary Convert from a string representation based on
     * [IETF RFC 1685](https://www.rfc-editor.org/info/rfc1685/).
     * @description
     * 
     * This takes an IETF RFC 1685 string and converts it to a `UniversalPersonalName`.
     * 
     * Example input:
     * 
     * ```
     * S=John;G=Doe;I=J;Q=JR
     * ```
     * 
     * @param s The string representation of this `UniversalPersonalName`.
     * @returns The `UniversalPersonalName` represented by the string.
     */
    public static fromString(s: string): UniversalPersonalName | null {
        return universalPersonalNameFromString(s);
    }

    /**
     * Parse a dot-delimited personal name as defined by
     * [IETF RFC 2156](https://www.rfc-editor.org/rfc/rfc2156) section 4.1.2
     * (`encoded-pn`).
     *
     * ```
     * encoded-pn = [ given "." ] *( initial "." ) surname
     * given      = 2*<ps-char not including ".">
     * initial    = ALPHA
     * surname    = printablestring
     * ```
     *
     * Given name and surname are assigned directly. All `initial` tokens are
     * concatenated without intervening full stops to form the initials
     * component. This encoding does not represent a generation qualifier.
     * Each PrintableString component is stored as a UniversalString.
     *
     * Example inputs:
     *
     * ```
     * Marshall.Rose       → given-name=Marshall, surname=Rose
     * M.T.Rose            → initials=MT, surname=Rose
     * Marshall.M.T.Rose   → given-name=Marshall, initials=MT, surname=Rose
     * ```
     *
     * @param s The RFC 2156 encoded personal name.
     * @returns The `UniversalPersonalName` represented by the string.
     * @public
     * @static
     * @function
     */
    public static fromRFC2156String(s: string): UniversalPersonalName {
        const name = PersonalName.fromRFC2156String(s);
        return new UniversalPersonalName(
            new UniversalOrBMPString({ four_octets: name.surname }),
            name.given_name
                ? new UniversalOrBMPString({ four_octets: name.given_name })
                : undefined,
            name.initials
                ? new UniversalOrBMPString({ four_octets: name.initials })
                : undefined,
        );
    }

}

/**
 * @summary The Leading Root Component Types of UniversalPersonalName
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_UniversalPersonalName: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "surname",
        false,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        "given-name",
        true,
        $.hasTag(_TagClass.context, 1)
    ),
    new $.ComponentSpec(
        "initials",
        true,
        $.hasTag(_TagClass.context, 2)
    ),
    new $.ComponentSpec(
        "generation-qualifier",
        true,
        $.hasTag(_TagClass.context, 3)
    ),
];

/**
 * @summary The Trailing Root Component Types of UniversalPersonalName
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_UniversalPersonalName: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of UniversalPersonalName
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_UniversalPersonalName: $.ComponentSpec[] = [];

let _cached_decoder_for_UniversalPersonalName: $.ASN1Decoder<UniversalPersonalName> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UniversalPersonalName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UniversalPersonalName} The decoded data structure.
 */
export function _decode_UniversalPersonalName(el: _Element): UniversalPersonalName {
    if (!_cached_decoder_for_UniversalPersonalName) {
        _cached_decoder_for_UniversalPersonalName = function (
            el: _Element
        ): UniversalPersonalName {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let surname!: UniversalOrBMPString;
            let given_name: OPTIONAL<UniversalOrBMPString>;
            let initials: OPTIONAL<UniversalOrBMPString>;
            let generation_qualifier: OPTIONAL<UniversalOrBMPString>;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            const callbacks: $.DecodingMap = {
                surname: (_el: _Element): void => {
                    surname = $._decode_explicit<UniversalOrBMPString>(
                        () => _decode_UniversalOrBMPString
                    )(_el);
                },
                "given-name": (_el: _Element): void => {
                    given_name = $._decode_explicit<UniversalOrBMPString>(
                        () => _decode_UniversalOrBMPString
                    )(_el);
                },
                initials: (_el: _Element): void => {
                    initials = $._decode_explicit<UniversalOrBMPString>(
                        () => _decode_UniversalOrBMPString
                    )(_el);
                },
                "generation-qualifier": (_el: _Element): void => {
                    generation_qualifier = $._decode_explicit<UniversalOrBMPString>(
                        () => _decode_UniversalOrBMPString
                    )(_el);
                },
            };
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_UniversalPersonalName,
                _extension_additions_list_spec_for_UniversalPersonalName,
                _root_component_type_list_2_spec_for_UniversalPersonalName,
                undefined
            );
            return new UniversalPersonalName(
                /* SET_CONSTRUCTOR_CALL */ surname,
                given_name,
                initials,
                generation_qualifier
            );
        };
    }
    return _cached_decoder_for_UniversalPersonalName(el);
}

let _cached_encoder_for_UniversalPersonalName: $.ASN1Encoder<UniversalPersonalName> | null = null;

/**
 * @summary Encodes a(n) UniversalPersonalName into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UniversalPersonalName, encoded as an ASN.1 Element.
 */
export function _encode_UniversalPersonalName(
    value: UniversalPersonalName,
    elGetter: $.ASN1Encoder<UniversalPersonalName>
): _Element {
    if (!_cached_encoder_for_UniversalPersonalName) {
        _cached_encoder_for_UniversalPersonalName = function (
            value: UniversalPersonalName        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_explicit(
                            _TagClass.context,
                            0,
                            () => _encode_UniversalOrBMPString,
                            $.DER
                        )(value.surname, $.DER),
                        /* IF_ABSENT  */ value.given_name === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  1,
                                  () => _encode_UniversalOrBMPString,
                                  $.DER
                              )(value.given_name, $.DER),
                        /* IF_ABSENT  */ value.initials === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  2,
                                  () => _encode_UniversalOrBMPString,
                                  $.DER
                              )(value.initials, $.DER),
                        /* IF_ABSENT  */ value.generation_qualifier ===
                        undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  3,
                                  () => _encode_UniversalOrBMPString,
                                  $.DER
                              )(value.generation_qualifier, $.DER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.DER
            );
        };
    }
    return _cached_encoder_for_UniversalPersonalName(value, elGetter);
}


/* eslint-enable */
