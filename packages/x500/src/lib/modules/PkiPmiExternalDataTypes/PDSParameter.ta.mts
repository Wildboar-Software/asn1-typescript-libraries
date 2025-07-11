/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
    PrintableString,
    TeletexString,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary PDSParameter
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PDSParameter ::= SET {
 *   printable-string  PrintableString(SIZE (1..ub-pds-parameter-length)) OPTIONAL,
 *   teletex-string    TeletexString(SIZE (1..ub-pds-parameter-length)) OPTIONAL }
 * ```
 *
 */
export class PDSParameter {
    constructor(
        /**
         * @summary `printable_string`.
         * @public
         * @readonly
         */
        readonly printable_string: OPTIONAL<PrintableString>,
        /**
         * @summary `teletex_string`.
         * @public
         * @readonly
         */
        readonly teletex_string: OPTIONAL<TeletexString>
    ) {}

    /**
     * @summary Restructures an object into a PDSParameter
     * @description
     *
     * This takes an `object` and converts it to a `PDSParameter`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PDSParameter`.
     * @returns {PDSParameter}
     */
    public static _from_object(
        _o: { [_K in keyof PDSParameter]: PDSParameter[_K] }
    ): PDSParameter {
        return new PDSParameter(_o.printable_string, _o.teletex_string);
    }
}

/**
 * @summary The Leading Root Component Types of PDSParameter
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_PDSParameter: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "printable-string",
        true,
        $.hasTag(_TagClass.universal, 19)
    ),
    new $.ComponentSpec(
        "teletex-string",
        true,
        $.hasTag(_TagClass.universal, 20)
    ),
];

/**
 * @summary The Trailing Root Component Types of PDSParameter
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_PDSParameter: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of PDSParameter
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_PDSParameter: $.ComponentSpec[] = [];

let _cached_decoder_for_PDSParameter: $.ASN1Decoder<PDSParameter> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PDSParameter
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PDSParameter} The decoded data structure.
 */
export function _decode_PDSParameter(el: _Element): PDSParameter {
    if (!_cached_decoder_for_PDSParameter) {
        _cached_decoder_for_PDSParameter = function (
            el: _Element
        ): PDSParameter {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let printable_string: OPTIONAL<PrintableString>;
            let teletex_string: OPTIONAL<TeletexString>;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            const callbacks: $.DecodingMap = {
                "printable-string": (_el: _Element): void => {
                    printable_string = $._decodePrintableString(_el);
                },
                "teletex-string": (_el: _Element): void => {
                    teletex_string = $._decodeTeletexString(_el);
                },
            };
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_PDSParameter,
                _extension_additions_list_spec_for_PDSParameter,
                _root_component_type_list_2_spec_for_PDSParameter,
                undefined
            );
            return new PDSParameter(
                /* SET_CONSTRUCTOR_CALL */ printable_string,
                teletex_string
            );
        };
    }
    return _cached_decoder_for_PDSParameter(el);
}

let _cached_encoder_for_PDSParameter: $.ASN1Encoder<PDSParameter> | null = null;

/**
 * @summary Encodes a(n) PDSParameter into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PDSParameter, encoded as an ASN.1 Element.
 */
export function _encode_PDSParameter(
    value: PDSParameter,
    elGetter: $.ASN1Encoder<PDSParameter>
): _Element {
    if (!_cached_encoder_for_PDSParameter) {
        _cached_encoder_for_PDSParameter = function (
            value: PDSParameter        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.printable_string === undefined
                            ? undefined
                            : $._encodePrintableString(
                                  value.printable_string,
                                  $.DER
                              ),
                        /* IF_ABSENT  */ value.teletex_string === undefined
                            ? undefined
                            : $._encodeTeletexString(
                                  value.teletex_string,
                                  $.DER
                              ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.DER
            );
        };
    }
    return _cached_encoder_for_PDSParameter(value, elGetter);
}


/* eslint-enable */
