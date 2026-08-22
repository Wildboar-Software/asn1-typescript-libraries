/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
    TeletexString,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { escape_oraddress_attribute_value } from "../../utils.mjs";
import { teletexToString } from "@wildboar/teletex";
import { teletexPersonalNameToRFC2156String } from "../../display.mjs";
import { type PersonalNameJSON } from "../../types.mjs";
import { ub_surname_length } from "./ub-surname-length.va.mjs";
import { ub_given_name_length } from "./ub-given-name-length.va.mjs";
import { ub_initials_length } from "./ub-initials-length.va.mjs";
import { ub_generation_qualifier_length } from "./ub-generation-qualifier-length.va.mjs";
import { teletexPersonalNameFromString } from "../../parse.mjs";
import { PersonalName } from "./PersonalName.ta.mjs";

const DELIMITER = ";".charCodeAt(0);

/**
 * @summary Whether two TeletexString values contain the same octets.
 *
 * @param a A TeletexString, or `undefined` if the field is absent.
 * @param b The other TeletexString, or `undefined` if the field is absent.
 * @returns `true` if both are absent or both have identical octets.
 */
function teletexStringsAreEqual(
    a: TeletexString | undefined,
    b: TeletexString | undefined,
): boolean {
    if (a === b) {
        return true;
    }
    if (
        (typeof a === "undefined")
        || (typeof b === "undefined")
        || (a.length !== b.length)
    ) {
        return false;
    }
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
            return false;
        }
    }
    return true;
}

/**
 * @summary TeletexPersonalName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TeletexPersonalName ::= SET {
 *   surname               [0]  TeletexString(SIZE (1..ub-surname-length)),
 *   given-name
 *     [1]  TeletexString(SIZE (1..ub-given-name-length)) OPTIONAL,
 *   initials
 *     [2]  TeletexString(SIZE (1..ub-initials-length)) OPTIONAL,
 *   generation-qualifier
 *     [3]  TeletexString(SIZE (1..ub-generation-qualifier-length)) OPTIONAL }
 * ```
 *
 */
export class TeletexPersonalName {
    constructor(
        /**
         * @summary `surname`.
         * @public
         * @readonly
         */
        readonly surname: TeletexString,
        /**
         * @summary `given_name`.
         * @public
         * @readonly
         */
        readonly given_name?: OPTIONAL<TeletexString>,
        /**
         * @summary `initials`.
         * @public
         * @readonly
         */
        readonly initials?: OPTIONAL<TeletexString>,
        /**
         * @summary `generation_qualifier`.
         * @public
         * @readonly
         */
        readonly generation_qualifier?: OPTIONAL<TeletexString>
    ) {
        if (surname.length > ub_surname_length) {
            throw new Error("TeletexPersonalName.surname must be 40 characters or less");
        }
        if (given_name && given_name.length > ub_given_name_length) {
            throw new Error("TeletexPersonalName.given_name must be 16 characters or less");
        }
        if (initials && initials.length > ub_initials_length) {
            throw new Error("TeletexPersonalName.initials must be 5 characters or less");
        }
        if (generation_qualifier && generation_qualifier.length > ub_generation_qualifier_length) {
            throw new Error("TeletexPersonalName.generation_qualifier must be 3 characters or less");
        }
    }

    /**
     * @summary Restructures an object into a TeletexPersonalName
     * @description
     *
     * This takes an `object` and converts it to a `TeletexPersonalName`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TeletexPersonalName`.
     * @returns {TeletexPersonalName}
     */
    public static _from_object(
        _o: { [_K in keyof TeletexPersonalName]: TeletexPersonalName[_K] }
    ): TeletexPersonalName {
        return new TeletexPersonalName(
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
            const s = teletexToString(this.given_name);
            components.push(`G=${escape_oraddress_attribute_value(s, DELIMITER)}`);
        }
        if (this.initials) {
            const s = teletexToString(this.initials);
            components.push(`I=${escape_oraddress_attribute_value(s, DELIMITER)}`);
        }
        if (this.surname) {
            const s = teletexToString(this.surname);
            components.push(`S=${escape_oraddress_attribute_value(s, DELIMITER)}`);
        }
        if (this.generation_qualifier) {
            const s = teletexToString(this.generation_qualifier);
            components.push(`Q=${escape_oraddress_attribute_value(s, DELIMITER)}`);
        }
        return components.join(";");
    }

    /**
     * Convert to a string representation based on
     * [IETF RFC 2156](https://www.rfc-editor.org/rfc/rfc2156) section 4.1.
     *
     * Printable T.61 components use `encoded-pn` when §4.1.2 allows it.
     * Otherwise each component is a `teletex-and-or-ps` `G=` / `I=` / `S=` /
     * `GQ=` value, including `{ddd}` quoting of non-ASCII octets.
     *
     * @returns The IETF RFC 2156 string representation.
     * @public
     * @function
     */
    public toRFC2156String(): string {
        return teletexPersonalNameToRFC2156String(this);
    }

    /**
     * Convert to a JSON representation.
     * @returns The JSON representation of this `TeletexPersonalName`.
     * @public
     * @function
     */
    public toJSON(): PersonalNameJSON {
        return {
            surname: teletexToString(this.surname),
            "given-name": this.given_name ? teletexToString(this.given_name) : undefined,
            initials: this.initials ? teletexToString(this.initials) : undefined,
            "generation-qualifier": this.generation_qualifier ? teletexToString(this.generation_qualifier) : undefined,
        };
    }

    /**
     * @summary Compares this TeletexPersonalName to another, for equality.
     * @description
     * Compares all fields of the TeletexPersonalName. If `tolerateMissingInitials` is true,
     * then the initials are not compared; the rationale for this feature is that
     * initials are sometimes omitted from people's names in real life, and it does
     * not mean that the names do not refer to the same person. However, any other
     * field that is missing should probably not be assumed to match a present field.
     *
     * @param other The other TeletexPersonalName to compare against.
     * @param tolerateMissingInitials Whether to tolerate missing initials.
     * @returns `true` if and only if all relevant fields are equal.
     */
    public isEqualTo(other: TeletexPersonalName, tolerateMissingInitials: boolean = false): boolean {
        return (
            teletexStringsAreEqual(this.surname, other.surname)
            && teletexStringsAreEqual(this.given_name, other.given_name)
            && (tolerateMissingInitials ? true : teletexStringsAreEqual(this.initials, other.initials))
            && teletexStringsAreEqual(this.generation_qualifier, other.generation_qualifier)
        );
    }

    /**
     * @summary Convert from a string representation based on
     * [IETF RFC 1685](https://www.rfc-editor.org/info/rfc1685/).
     * @description
     * 
     * This takes an IETF RFC 1685 string and converts it to a `TeletexPersonalName`.
     * 
     * Example input:
     * 
     * ```
     * S=John;G=Doe;I=J;Q=JR
     * ```
     * 
     * @param s The string representation of this `TeletexPersonalName`.
     * @returns The `TeletexPersonalName` represented by the string.
     */
    public static fromString(s: string): TeletexPersonalName {
        return teletexPersonalNameFromString(s);
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
     * Each PrintableString component is stored as T.61 octets.
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
     * @returns The `TeletexPersonalName` represented by the string.
     * @public
     * @static
     * @function
     */
    public static fromRFC2156String(s: string): TeletexPersonalName {
        const name = PersonalName.fromRFC2156String(s);
        return new TeletexPersonalName(
            new TextEncoder().encode(name.surname),
            name.given_name
                ? new TextEncoder().encode(name.given_name)
                : undefined,
            name.initials
                ? new TextEncoder().encode(name.initials)
                : undefined,
        );
    }
}

/**
 * @summary The Leading Root Component Types of TeletexPersonalName
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_TeletexPersonalName: $.ComponentSpec[] = [
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
 * @summary The Trailing Root Component Types of TeletexPersonalName
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_TeletexPersonalName: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of TeletexPersonalName
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_TeletexPersonalName: $.ComponentSpec[] = [];

let _cached_decoder_for_TeletexPersonalName: $.ASN1Decoder<TeletexPersonalName> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TeletexPersonalName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TeletexPersonalName} The decoded data structure.
 */
export function _decode_TeletexPersonalName(el: _Element): TeletexPersonalName {
    if (!_cached_decoder_for_TeletexPersonalName) {
        _cached_decoder_for_TeletexPersonalName = function (
            el: _Element
        ): TeletexPersonalName {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let surname!: TeletexString;
            let given_name: OPTIONAL<TeletexString>;
            let initials: OPTIONAL<TeletexString>;
            let generation_qualifier: OPTIONAL<TeletexString>;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            const callbacks: $.DecodingMap = {
                surname: (_el: _Element): void => {
                    surname = $._decode_explicit<TeletexString>(
                        () => $._decodeTeletexString
                    )(_el);
                },
                "given-name": (_el: _Element): void => {
                    given_name = $._decode_explicit<TeletexString>(
                        () => $._decodeTeletexString
                    )(_el);
                },
                initials: (_el: _Element): void => {
                    initials = $._decode_explicit<TeletexString>(
                        () => $._decodeTeletexString
                    )(_el);
                },
                "generation-qualifier": (_el: _Element): void => {
                    generation_qualifier = $._decode_explicit<TeletexString>(
                        () => $._decodeTeletexString
                    )(_el);
                },
            };
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_TeletexPersonalName,
                _extension_additions_list_spec_for_TeletexPersonalName,
                _root_component_type_list_2_spec_for_TeletexPersonalName,
                undefined
            );
            return new TeletexPersonalName(
                /* SET_CONSTRUCTOR_CALL */ surname,
                given_name,
                initials,
                generation_qualifier
            );
        };
    }
    return _cached_decoder_for_TeletexPersonalName(el);
}

let _cached_encoder_for_TeletexPersonalName: $.ASN1Encoder<TeletexPersonalName> | null = null;

/**
 * @summary Encodes a(n) TeletexPersonalName into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TeletexPersonalName, encoded as an ASN.1 Element.
 */
export function _encode_TeletexPersonalName(
    value: TeletexPersonalName,
    elGetter: $.ASN1Encoder<TeletexPersonalName>
): _Element {
    if (!_cached_encoder_for_TeletexPersonalName) {
        _cached_encoder_for_TeletexPersonalName = function (
            value: TeletexPersonalName        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_explicit(
                            _TagClass.context,
                            0,
                            () => $._encodeTeletexString,
                            $.DER
                        )(value.surname, $.DER),
                        /* IF_ABSENT  */ value.given_name === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  1,
                                  () => $._encodeTeletexString,
                                  $.DER
                              )(value.given_name, $.DER),
                        /* IF_ABSENT  */ value.initials === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  2,
                                  () => $._encodeTeletexString,
                                  $.DER
                              )(value.initials, $.DER),
                        /* IF_ABSENT  */ value.generation_qualifier ===
                        undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  3,
                                  () => $._encodeTeletexString,
                                  $.DER
                              )(value.generation_qualifier, $.DER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.DER
            );
        };
    }
    return _cached_encoder_for_TeletexPersonalName(value, elGetter);
}


/* eslint-enable */
