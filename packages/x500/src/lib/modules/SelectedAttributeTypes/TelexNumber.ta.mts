/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    PrintableString,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary TelexNumber
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TelexNumber ::= SEQUENCE {
 *   telexNumber  PrintableString(SIZE (1..ub-telex-number)),
 *   countryCode  PrintableString(SIZE (1..ub-country-code)),
 *   answerback   PrintableString(SIZE (1..ub-answerback)),
 *   ... }
 * ```
 *
 */
export class TelexNumber {
    constructor(
        /**
         * @summary `telexNumber`.
         * @public
         * @readonly
         */
        readonly telexNumber: PrintableString,
        /**
         * @summary `countryCode`.
         * @public
         * @readonly
         */
        readonly countryCode: PrintableString,
        /**
         * @summary `answerback`.
         * @public
         * @readonly
         */
        readonly answerback: PrintableString,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a TelexNumber
     * @description
     *
     * This takes an `object` and converts it to a `TelexNumber`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TelexNumber`.
     * @returns {TelexNumber}
     */
    public static _from_object(
        _o: { [_K in keyof TelexNumber]: TelexNumber[_K] }
    ): TelexNumber {
        return new TelexNumber(
            _o.telexNumber,
            _o.countryCode,
            _o.answerback,
            _o._unrecognizedExtensionsList
        );
    }
}

/**
 * @summary The Leading Root Component Types of TelexNumber
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_TelexNumber: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "telexNumber",
        false,
        $.hasTag(_TagClass.universal, 19)
    ),
    new $.ComponentSpec(
        "countryCode",
        false,
        $.hasTag(_TagClass.universal, 19)
    ),
    new $.ComponentSpec(
        "answerback",
        false,
        $.hasTag(_TagClass.universal, 19)
    ),
];

/**
 * @summary The Trailing Root Component Types of TelexNumber
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_TelexNumber: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of TelexNumber
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_TelexNumber: $.ComponentSpec[] = [];

let _cached_decoder_for_TelexNumber: $.ASN1Decoder<TelexNumber> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TelexNumber
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TelexNumber} The decoded data structure.
 */
export function _decode_TelexNumber(el: _Element): TelexNumber {
    if (!_cached_decoder_for_TelexNumber) {
        _cached_decoder_for_TelexNumber = function (el: _Element): TelexNumber {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 3) {
                throw new _ConstructionError(
                    "TelexNumber contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "telexNumber";
            sequence[1].name = "countryCode";
            sequence[2].name = "answerback";
            let telexNumber!: PrintableString;
            let countryCode!: PrintableString;
            let answerback!: PrintableString;
            telexNumber = $._decodePrintableString(sequence[0]);
            countryCode = $._decodePrintableString(sequence[1]);
            answerback = $._decodePrintableString(sequence[2]);
            return new TelexNumber(
                telexNumber,
                countryCode,
                answerback,
                sequence.slice(3)
            );
        };
    }
    return _cached_decoder_for_TelexNumber(el);
}

let _cached_encoder_for_TelexNumber: $.ASN1Encoder<TelexNumber> | null = null;

/**
 * @summary Encodes a(n) TelexNumber into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TelexNumber, encoded as an ASN.1 Element.
 */
export function _encode_TelexNumber(
    value: TelexNumber,
    elGetter: $.ASN1Encoder<TelexNumber>
): _Element {
    if (!_cached_encoder_for_TelexNumber) {
        _cached_encoder_for_TelexNumber = function (
            value: TelexNumber        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encodePrintableString(
                                value.telexNumber,
                                $.DER
                            ),
                            /* REQUIRED   */ $._encodePrintableString(
                                value.countryCode,
                                $.DER
                            ),
                            /* REQUIRED   */ $._encodePrintableString(
                                value.answerback,
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
    return _cached_encoder_for_TelexNumber(value, elGetter);
}


/* eslint-enable */
