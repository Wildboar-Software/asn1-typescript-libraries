/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    G3FacsimileNonBasicParameters,
    _decode_G3FacsimileNonBasicParameters,
    _encode_G3FacsimileNonBasicParameters,
} from "../PkiPmiExternalDataTypes/G3FacsimileNonBasicParameters.ta.mjs";
import {
    TelephoneNumber,
    _decode_TelephoneNumber,
    _encode_TelephoneNumber,
} from "../SelectedAttributeTypes/TelephoneNumber.ta.mjs";
/**
 * @summary FacsimileTelephoneNumber
 * @description
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
 * @class
 */
export class FacsimileTelephoneNumber {
    constructor(
        /**
         * @summary `telephoneNumber`.
         * @public
         * @readonly
         */
        readonly telephoneNumber: TelephoneNumber,
        /**
         * @summary `parameters`.
         * @public
         * @readonly
         */
        readonly parameters: OPTIONAL<G3FacsimileNonBasicParameters>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

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
        _o: Partial<
            {
                [_K in keyof FacsimileTelephoneNumber]: FacsimileTelephoneNumber[_K];
            }
        >
    ): FacsimileTelephoneNumber {
        return new FacsimileTelephoneNumber(
            _o.telephoneNumber,
            _o.parameters,
            _o._unrecognizedExtensionsList
        );
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
export function _decode_FacsimileTelephoneNumber(el: _Element) {
    if (!_cached_decoder_for_FacsimileTelephoneNumber) {
        _cached_decoder_for_FacsimileTelephoneNumber = function (
            el: _Element
        ): FacsimileTelephoneNumber {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let telephoneNumber!: TelephoneNumber;
            let parameters: OPTIONAL<G3FacsimileNonBasicParameters>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                telephoneNumber: (_el: _Element): void => {
                    telephoneNumber = _decode_TelephoneNumber(_el);
                },
                parameters: (_el: _Element): void => {
                    parameters = _decode_G3FacsimileNonBasicParameters(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
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
                /* SEQUENCE_CONSTRUCTOR_CALL */ telephoneNumber,
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
) {
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
