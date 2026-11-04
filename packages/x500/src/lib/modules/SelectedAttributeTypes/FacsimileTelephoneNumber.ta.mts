/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    type OPTIONAL,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    type G3FacsimileNonBasicParameters,
    two_dimensional,
    fine_resolution,
    unlimited_length,
    b4_length,
    a3_width,
    b4_width,
    uncompressed,
    _decode_G3FacsimileNonBasicParameters,
    _encode_G3FacsimileNonBasicParameters,
} from "../PkiPmiExternalDataTypes/G3FacsimileNonBasicParameters.ta.mjs";
import {
    type TelephoneNumber,
    _decode_TelephoneNumber,
    _encode_TelephoneNumber,
} from "../SelectedAttributeTypes/TelephoneNumber.ta.mjs";
import { bitStringToJSON, type BitStringJSON } from "../../json.mjs";

/**
 * JSON Encoding Rules encoding of {@link FacsimileTelephoneNumber}.
 */
export type FacsimileTelephoneNumberJSON = {
    telephoneNumber: string;
    parameters?: BitStringJSON;
};

const RFC_4517_FAX_PARAMETERS: ReadonlyArray<[number, string]> = [
    [ two_dimensional, "twoDimensional" ],
    [ fine_resolution, "fineResolution" ],
    [ unlimited_length, "unlimitedLength" ],
    [ b4_length, "b4Length" ],
    [ a3_width, "a3Width" ],
    [ b4_width, "b4Width" ],
    [ uncompressed, "uncompressed" ],
];
/**
 * @summary FacsimileTelephoneNumber
 * @description
 *
 * Equality and substrings compare `telephoneNumber` only; `parameters` are
 * ignored. Assertion syntax is TelephoneNumber, not this SEQUENCE.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * FacsimileTelephoneNumber ::= SEQUENCE {
 *   telephoneNumber  TelephoneNumber,
 *   parameters       G3FacsimileNonBasicParameters OPTIONAL,
 *   ... }
 * ```
 *
 */
export class FacsimileTelephoneNumber {
    /**
     * @summary `telephoneNumber`.
     * @description
     *
     * E.123 telephone number. The only component used by
     * facsimileNumberMatch / facsimileNumberSubstringsMatch.
     *
     * @public
     * @readonly
     */
    public readonly telephoneNumber: TelephoneNumber;
    /**
     * @summary `parameters`.
     * @description
     *
     * Optional G3NonBasicParameters (T.30). Ignored by equality and
     * substring matching.
     *
     * @public
     * @readonly
     */
    public readonly parameters?: OPTIONAL<G3FacsimileNonBasicParameters>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    public readonly _unrecognizedExtensionsList: _Element[];

    constructor(
        telephoneNumber: TelephoneNumber,
        parameters?: OPTIONAL<G3FacsimileNonBasicParameters>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.telephoneNumber = telephoneNumber;
        this.parameters = parameters;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a FacsimileTelephoneNumber
     * @description
     *
     * This takes an `object` and converts it to a `FacsimileTelephoneNumber`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `FacsimileTelephoneNumber`.
     * @returns {FacsimileTelephoneNumber}
     */
    public static _from_object(
        _o:
            {
                [_K in keyof FacsimileTelephoneNumber]: FacsimileTelephoneNumber[_K];
            }
    ): FacsimileTelephoneNumber {
        return new FacsimileTelephoneNumber(
            _o.telephoneNumber,
            _o.parameters,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary RFC 4517 Facsimile Telephone Number LDAP syntax
     * @description
     *
     * `telephoneNumber` plus `$`-separated fax parameters from
     * [IETF RFC 4517](https://www.rfc-editor.org/rfc/rfc4517) when
     * those bits are set. Other G3 bits and unrecognized extensions
     * are omitted.
     *
     * @returns The LDAP facsimile telephone number
     * @function
     * @public
     */
    public toString(): string {
        const parts: string[] = [ this.telephoneNumber ];
        if (this.parameters) {
            for (const [ bit, name ] of RFC_4517_FAX_PARAMETERS) {
                if (this.parameters[bit]) {
                    parts.push(name);
                }
            }
        }
        return parts.join("$");
    }

    /**
     * @summary Convert this value to a JSON encoding loosely following ITU-T X.697 (JER)
     * @description
     *
     * `parameters` is a `{ value, length }` bit string (X.697 clause
     * 24.3). Absent optional components are omitted. Unrecognized
     * extensions are not represented.
     *
     * @returns The JSON Encoding Rules encoding of this value
     * @function
     * @public
     */
    public toJSON(): FacsimileTelephoneNumberJSON {
        const json: FacsimileTelephoneNumberJSON = {
            telephoneNumber: this.telephoneNumber,
        };
        if (this.parameters !== undefined) {
            json.parameters = bitStringToJSON(this.parameters);
        }
        return json;
    }
}

/**
 * @summary The Leading Root Component Types of FacsimileTelephoneNumber
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_FacsimileTelephoneNumber: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "telephoneNumber",
        false,
        $.hasTag(_TagClass.universal, 19)
    ),
    new $.ComponentSpec(
        "parameters",
        true,
        $.hasTag(_TagClass.universal, 3)
    ),
];

/**
 * @summary The Trailing Root Component Types of FacsimileTelephoneNumber
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_FacsimileTelephoneNumber: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of FacsimileTelephoneNumber
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_FacsimileTelephoneNumber: $.ComponentSpec[] = [];

let _cached_decoder_for_FacsimileTelephoneNumber: $.ASN1Decoder<FacsimileTelephoneNumber> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FacsimileTelephoneNumber
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {FacsimileTelephoneNumber} The decoded data structure.
 */
export function _decode_FacsimileTelephoneNumber(el: _Element): FacsimileTelephoneNumber {
    if (!_cached_decoder_for_FacsimileTelephoneNumber) {
        _cached_decoder_for_FacsimileTelephoneNumber = function (
            el: _Element
        ): FacsimileTelephoneNumber {
            let telephoneNumber!: TelephoneNumber;
            let parameters: OPTIONAL<G3FacsimileNonBasicParameters>;
            let _unrecognizedExtensionsList: _Element[] = [];
            const callbacks: $.DecodingMap = {
                telephoneNumber: (_el: _Element): void => {
                    telephoneNumber = _decode_TelephoneNumber(_el);
                },
                parameters: (_el: _Element): void => {
                    parameters = _decode_G3FacsimileNonBasicParameters(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_FacsimileTelephoneNumber,
                _extension_additions_list_spec_for_FacsimileTelephoneNumber,
                _root_component_type_list_2_spec_for_FacsimileTelephoneNumber,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new FacsimileTelephoneNumber(
                telephoneNumber,
                parameters,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_FacsimileTelephoneNumber(el);
}

let _cached_encoder_for_FacsimileTelephoneNumber: $.ASN1Encoder<FacsimileTelephoneNumber> | null = null;

/**
 * @summary Encodes a(n) FacsimileTelephoneNumber into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FacsimileTelephoneNumber, encoded as an ASN.1 Element.
 */
export function _encode_FacsimileTelephoneNumber(
    value: FacsimileTelephoneNumber,
    elGetter: $.ASN1Encoder<FacsimileTelephoneNumber>
): _Element {
    if (!_cached_encoder_for_FacsimileTelephoneNumber) {
        _cached_encoder_for_FacsimileTelephoneNumber = function (
            value: FacsimileTelephoneNumber        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_TelephoneNumber(
                                value.telephoneNumber,
                                $.DER
                            ),
                            /* IF_ABSENT  */ value.parameters === undefined
                                ? undefined
                                : _encode_G3FacsimileNonBasicParameters(
                                      value.parameters,
                                      $.DER
                                  ),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : []
                    )
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.DER
            );
        };
    }
    return _cached_encoder_for_FacsimileTelephoneNumber(value, elGetter);
}


/* eslint-enable */
