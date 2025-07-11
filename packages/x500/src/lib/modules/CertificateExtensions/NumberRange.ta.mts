/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OCTET_STRING,
    OPTIONAL,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary NumberRange
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NumberRange ::= SEQUENCE {
 *   startingNumber  [0]  INTEGER OPTIONAL,
 *   endingNumber    [1]  INTEGER OPTIONAL,
 *   modulus              INTEGER OPTIONAL,
 *   ... }
 * ```
 *
 */
export class NumberRange {
    constructor(
        /**
         * @summary `startingNumber`.
         * @public
         * @readonly
         */
        readonly startingNumber: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `endingNumber`.
         * @public
         * @readonly
         */
        readonly endingNumber: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `modulus`.
         * @public
         * @readonly
         */
        readonly modulus: OPTIONAL<OCTET_STRING>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a NumberRange
     * @description
     *
     * This takes an `object` and converts it to a `NumberRange`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `NumberRange`.
     * @returns {NumberRange}
     */
    public static _from_object(
        _o: { [_K in keyof NumberRange]: NumberRange[_K] }
    ): NumberRange {
        return new NumberRange(
            _o.startingNumber,
            _o.endingNumber,
            _o.modulus,
            _o._unrecognizedExtensionsList
        );
    }
}

/**
 * @summary The Leading Root Component Types of NumberRange
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_NumberRange: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "startingNumber",
        true,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        "endingNumber",
        true,
        $.hasTag(_TagClass.context, 1)
    ),
    new $.ComponentSpec(
        "modulus",
        true,
        $.hasTag(_TagClass.universal, 2)
    ),
];

/**
 * @summary The Trailing Root Component Types of NumberRange
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_NumberRange: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of NumberRange
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_NumberRange: $.ComponentSpec[] = [];

let _cached_decoder_for_NumberRange: $.ASN1Decoder<NumberRange> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NumberRange
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {NumberRange} The decoded data structure.
 */
export function _decode_NumberRange(el: _Element): NumberRange {
    if (!_cached_decoder_for_NumberRange) {
        _cached_decoder_for_NumberRange = function (el: _Element): NumberRange {
            let startingNumber: OPTIONAL<OCTET_STRING>;
            let endingNumber: OPTIONAL<OCTET_STRING>;
            let modulus: OPTIONAL<OCTET_STRING>;
            let _unrecognizedExtensionsList: _Element[] = [];
            const callbacks: $.DecodingMap = {
                startingNumber: (_el: _Element): void => {
                    startingNumber = $._decode_implicit<OCTET_STRING>(
                        () => $._decodeBigInt
                    )(_el);
                },
                endingNumber: (_el: _Element): void => {
                    endingNumber = $._decode_implicit<OCTET_STRING>(
                        () => $._decodeBigInt
                    )(_el);
                },
                modulus: (_el: _Element): void => {
                    modulus = $._decodeBigInt(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_NumberRange,
                _extension_additions_list_spec_for_NumberRange,
                _root_component_type_list_2_spec_for_NumberRange,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new NumberRange(
                startingNumber,
                endingNumber,
                modulus,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_NumberRange(el);
}

let _cached_encoder_for_NumberRange: $.ASN1Encoder<NumberRange> | null = null;

/**
 * @summary Encodes a(n) NumberRange into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NumberRange, encoded as an ASN.1 Element.
 */
export function _encode_NumberRange(
    value: NumberRange,
    elGetter: $.ASN1Encoder<NumberRange>
): _Element {
    if (!_cached_encoder_for_NumberRange) {
        _cached_encoder_for_NumberRange = function (
            value: NumberRange        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_ABSENT  */ value.startingNumber === undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      0,
                                      () => $._encodeBigInt,
                                      $.DER
                                  )(value.startingNumber, $.DER),
                            /* IF_ABSENT  */ value.endingNumber === undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      1,
                                      () => $._encodeBigInt,
                                      $.DER
                                  )(value.endingNumber, $.DER),
                            /* IF_ABSENT  */ value.modulus === undefined
                                ? undefined
                                : $._encodeBigInt(value.modulus, $.DER),
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
    return _cached_encoder_for_NumberRange(value, elGetter);
}


/* eslint-enable */
