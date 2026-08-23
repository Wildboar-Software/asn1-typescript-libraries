/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
    PrintableString,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { escape_oraddress_attribute_value, isPrintableString } from "../../utils.mjs";
import { personalNameFieldsToRFC2156String } from "../../display.mjs";
import { type PersonalNameJSON } from "../../types.mjs";
import { ub_generation_qualifier_length } from "./ub-generation-qualifier-length.va.mjs";
import { ub_initials_length } from "./ub-initials-length.va.mjs";
import { ub_given_name_length } from "./ub-given-name-length.va.mjs";
import { ub_surname_length } from "./ub-surname-length.va.mjs";
import { personalNameFromString } from "../../parse.mjs";

const DELIMITER = ';'.charCodeAt(0);
const FULL_STOP = ".".charCodeAt(0);

function isAlpha(c: number): boolean {
    return (
        ((c >= 0x41) && (c <= 0x5A))
        || ((c >= 0x61) && (c <= 0x7A))
    );
}

/**
 * @summary PersonalName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PersonalName ::= SET {
 *   surname               [0]  PrintableString(SIZE (1..ub-surname-length)),
 *   given-name
 *     [1]  PrintableString(SIZE (1..ub-given-name-length)) OPTIONAL,
 *   initials
 *     [2]  PrintableString(SIZE (1..ub-initials-length)) OPTIONAL,
 *   generation-qualifier
 *     [3]  PrintableString(SIZE (1..ub-generation-qualifier-length)) OPTIONAL }
 * ```
 *
 */
export class PersonalName {
    constructor(
        /**
         * @summary `surname`.
         * @public
         * @readonly
         */
        readonly surname: PrintableString,
        /**
         * @summary `given_name`.
         * @public
         * @readonly
         */
        readonly given_name?: OPTIONAL<PrintableString>,
        /**
         * @summary `initials`.
         * @public
         * @readonly
         */
        readonly initials?: OPTIONAL<PrintableString>,
        /**
         * @summary `generation_qualifier`.
         * @public
         * @readonly
         */
        readonly generation_qualifier?: OPTIONAL<PrintableString>
    ) {
        if (surname.length > ub_surname_length) {
            throw new Error("PersonalName.surname must be 40 characters or less");
        }
        if (given_name && given_name.length > ub_given_name_length) {
            throw new Error("PersonalName.given_name must be 16 characters or less");
        }
        if (initials && initials.length > ub_initials_length) {
            throw new Error("PersonalName.initials must be 5 characters or less");
        }
        if (generation_qualifier && generation_qualifier.length > ub_generation_qualifier_length) {
            throw new Error("PersonalName.generation_qualifier must be 3 characters or less");
        }
        if (!isPrintableString(surname)) {
            throw new Error("Invalid PersonalName.surname");
        }
        if (given_name && !isPrintableString(given_name)) {
            throw new Error("Invalid PersonalName.given_name");
        }
        if (initials && !isPrintableString(initials)) {
            throw new Error("Invalid PersonalName.initials");
        }
        if (generation_qualifier && !isPrintableString(generation_qualifier)) {
            throw new Error("Invalid PersonalName.generation_qualifier");
        }
    }

    /**
     * @summary Restructures an object into a PersonalName
     * @description
     *
     * This takes an `object` and converts it to a `PersonalName`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PersonalName`.
     * @returns {PersonalName}
     */
    public static _from_object(
        _o: { [_K in keyof PersonalName]: PersonalName[_K] }
    ): PersonalName {
        return new PersonalName(
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
            components.push(`G=${escape_oraddress_attribute_value(this.given_name, DELIMITER)}`);
        }
        if (this.initials) {
            components.push(`I=${escape_oraddress_attribute_value(this.initials, DELIMITER)}`);
        }
        if (this.surname) {
            components.push(`S=${escape_oraddress_attribute_value(this.surname, DELIMITER)}`);
        }
        if (this.generation_qualifier) {
            components.push(`Q=${escape_oraddress_attribute_value(this.generation_qualifier, DELIMITER)}`);
        }
        return components.join(";");
    }

    /**
     * Convert to a string representation based on
     * [IETF RFC 2156](https://www.rfc-editor.org/rfc/rfc2156) section 4.1.2
     * (`encoded-pn`).
     *
     * When that compact form cannot represent the name (for example a
     * generation qualifier is present), `G=` / `I=` / `S=` / `GQ=` pairs are
     * returned instead.
     *
     * Example output:
     *
     * ```
     * Marshall.M.T.Rose
     * ```
     *
     * @returns The IETF RFC 2156 string representation.
     * @public
     * @function
     */
    public toRFC2156String(): string {
        return personalNameFieldsToRFC2156String(
            this.surname,
            this.given_name,
            this.initials,
            this.generation_qualifier,
        );
    }

    /**
     * Convert to a JSON representation.
     * @returns The JSON representation of this `PersonalName`.
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
     * @param json The JSON representation of this `PersonalName`.
     * @returns The `PersonalName` represented by the JSON.
     * @public
     * @static
     * @function
     */
    public static fromJSON(json: PersonalNameJSON): PersonalName {
        if (!isPrintableString(json.surname)) {
            throw new Error("Invalid PersonalName.surname");
        }
        if (json["given-name"] && !isPrintableString(json["given-name"])) {
            throw new Error("Invalid PersonalName.given-name");
        }
        if (json.initials && !isPrintableString(json.initials)) {
            throw new Error("Invalid PersonalName.initials");
        }
        if (json["generation-qualifier"] && !isPrintableString(json["generation-qualifier"])) {
            throw new Error("Invalid PersonalName.generation-qualifier");
        }
        return new PersonalName(
            json.surname,
            json["given-name"],
            json.initials,
            json["generation-qualifier"],
        );
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
     * @returns The `PersonalName` represented by the string.
     * @public
     * @static
     * @function
     */
    public static fromRFC2156String(s: string): PersonalName {
        if (
            (s.length === 0)
            || !isPrintableString(s)
        ) {
            throw new Error("invalid encoded personal name");
        }

        let offset = 0;
        let given_name: OPTIONAL<PrintableString>;
        const firstFullStopIndex = s.indexOf(".");
        if (
            (firstFullStopIndex >= 2)
            && ((firstFullStopIndex + 1) < s.length)
        ) {
            given_name = s.slice(0, firstFullStopIndex);
            offset = firstFullStopIndex + 1;
        }

        let initials = "";
        while (
            ((offset + 2) < s.length)
            && isAlpha(s.charCodeAt(offset))
            && (s.charCodeAt(offset + 1) === FULL_STOP)
        ) {
            initials += s.charAt(offset);
            offset += 2;
        }

        const surname = s.slice(offset);
        if (surname.length === 0) {
            throw new Error("invalid encoded personal name");
        }

        return new PersonalName(
            surname,
            given_name,
            (initials.length > 0)
                ? initials
                : undefined,
        );
    }

    /**
     * @summary Compares this PersonalName to another, for equality.
     * @description
     * Compares all fields of the PersonalName. If `tolerateMissingInitials` is true,
     * then the initials are not compared; the rationale for this feature is that
     * initials are sometimes omitted from people's names in real life, and it does
     * not mean that the names do not refer to the same person. However, any other
     * field that is missing should probably not be assumed to match a present field.
     * 
     * @param other The other PersonalName to compare against.
     * @param tolerateMissingInitials Whether to tolerate missing initials.
     * @returns `true` if and only if all relevant fields are equal.
     */
    public isEqualTo(other: PersonalName, tolerateMissingInitials: boolean = false): boolean {
        return (
            (this.surname === other.surname)
            && (this.given_name === other.given_name)
            && (tolerateMissingInitials ? true : this.initials === other.initials)
            && (this.generation_qualifier === other.generation_qualifier)
        );
    }

    /**
     * @summary Convert from a string representation based on
     * [IETF RFC 1685](https://www.rfc-editor.org/info/rfc1685/).
     * @description
     * 
     * This takes an IETF RFC 1685 string and converts it to a `PersonalName`.
     * 
     * Example input:
     * 
     * ```
     * S=John;G=Doe;I=J;Q=JR
     * ```
     * 
     * @param s The string representation of this `PersonalName`.
     * @returns The `PersonalName` represented by the string.
     */
    public static fromString(s: string): PersonalName | null {
        return personalNameFromString(s);
    }

}

/**
 * @summary The Leading Root Component Types of PersonalName
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_PersonalName: $.ComponentSpec[] =
    [
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
 * @summary The Trailing Root Component Types of PersonalName
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_PersonalName: $.ComponentSpec[] =
    [];

/**
 * @summary The Extension Addition Component Types of PersonalName
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_PersonalName: $.ComponentSpec[] =
    [];

let _cached_decoder_for_PersonalName: $.ASN1Decoder<PersonalName> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PersonalName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PersonalName} The decoded data structure.
 */
export function _decode_PersonalName(el: _Element): PersonalName {
    if (!_cached_decoder_for_PersonalName) {
        _cached_decoder_for_PersonalName = function (
            el: _Element
        ): PersonalName {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let surname!: PrintableString;
            let given_name: OPTIONAL<PrintableString>;
            let initials: OPTIONAL<PrintableString>;
            let generation_qualifier: OPTIONAL<PrintableString>;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            const callbacks: $.DecodingMap = {
                surname: (_el: _Element): void => {
                    surname = $._decode_explicit<PrintableString>(
                        () => $._decodePrintableString
                    )(_el);
                },
                "given-name": (_el: _Element): void => {
                    given_name = $._decode_explicit<PrintableString>(
                        () => $._decodePrintableString
                    )(_el);
                },
                initials: (_el: _Element): void => {
                    initials = $._decode_explicit<PrintableString>(
                        () => $._decodePrintableString
                    )(_el);
                },
                "generation-qualifier": (_el: _Element): void => {
                    generation_qualifier = $._decode_explicit<PrintableString>(
                        () => $._decodePrintableString
                    )(_el);
                },
            };
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_PersonalName,
                _extension_additions_list_spec_for_PersonalName,
                _root_component_type_list_2_spec_for_PersonalName,
                undefined
            );
            return new PersonalName(
                /* SET_CONSTRUCTOR_CALL */ surname,
                given_name,
                initials,
                generation_qualifier
            );
        };
    }
    return _cached_decoder_for_PersonalName(el);
}

let _cached_encoder_for_PersonalName: $.ASN1Encoder<PersonalName> | null = null;

/**
 * @summary Encodes a(n) PersonalName into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PersonalName, encoded as an ASN.1 Element.
 */
export function _encode_PersonalName(value: PersonalName, elGetter: $.ASN1Encoder<PersonalName>): _Element {
    if (!_cached_encoder_for_PersonalName) {
        _cached_encoder_for_PersonalName = function (
            value: PersonalName        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_explicit(
                            _TagClass.context,
                            0,
                            () => $._encodePrintableString,
                            $.BER
                        )(value.surname, $.BER),
                        /* IF_ABSENT  */ value.given_name === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  1,
                                  () => $._encodePrintableString,
                                  $.BER
                              )(value.given_name, $.BER),
                        /* IF_ABSENT  */ value.initials === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  2,
                                  () => $._encodePrintableString,
                                  $.BER
                              )(value.initials, $.BER),
                        /* IF_ABSENT  */ value.generation_qualifier ===
                        undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  3,
                                  () => $._encodePrintableString,
                                  $.BER
                              )(value.generation_qualifier, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_PersonalName(value, elGetter);
}


/* eslint-enable */
