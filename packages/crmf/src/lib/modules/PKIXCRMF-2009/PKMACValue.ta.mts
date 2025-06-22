/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    BIT_STRING,
} from "asn1-ts";
import * as $ from "@wildboar/asn1/functional";
import {
    AlgorithmIdentifier,
    _decode_AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
} from "@wildboar/x500/src/lib/modules/AuthenticationFramework/AlgorithmIdentifier.ta.mjs";


/**
 * @summary PKMACValue
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PKMACValue ::= SEQUENCE {
 *     algId  AlgorithmIdentifier{MAC-ALGORITHM,
 *                 {Password-MACAlgorithms}},
 *     value  BIT STRING }
 * ```
 *
 * @class
 */
export class PKMACValue {
    constructor(
        /**
         * @summary `algId`.
         * @public
         * @readonly
         */
        readonly algId: AlgorithmIdentifier,
        /**
         * @summary `value`.
         * @public
         * @readonly
         */
        readonly value: BIT_STRING
    ) {}

    /**
     * @summary Restructures an object into a PKMACValue
     * @description
     *
     * This takes an `object` and converts it to a `PKMACValue`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PKMACValue`.
     * @returns {PKMACValue}
     */
    public static _from_object(
        _o: { [_K in keyof PKMACValue]: PKMACValue[_K] }
    ): PKMACValue {
        return new PKMACValue(_o.algId, _o.value);
    }
}


/**
 * @summary The Leading Root Component Types of PKMACValue
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_PKMACValue: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "algId",
        false,
        $.hasTag(_TagClass.universal, 16)
    ),
    new $.ComponentSpec(
        "value",
        false,
        $.hasTag(_TagClass.universal, 3)
    ),
];


/**
 * @summary The Trailing Root Component Types of PKMACValue
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_PKMACValue: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of PKMACValue
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_PKMACValue: $.ComponentSpec[] = [];


let _cached_decoder_for_PKMACValue: $.ASN1Decoder<PKMACValue> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) PKMACValue
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PKMACValue} The decoded data structure.
 */
export function _decode_PKMACValue(el: _Element) {
    if (!_cached_decoder_for_PKMACValue) {
        _cached_decoder_for_PKMACValue = function (el: _Element): PKMACValue {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "PKMACValue contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "algId";
            sequence[1].name = "value";
            let algId!: AlgorithmIdentifier;
            let value!: BIT_STRING;
            algId = _decode_AlgorithmIdentifier(sequence[0]);
            value = $._decodeBitString(sequence[1]);
            return new PKMACValue(algId, value);
        };
    }
    return _cached_decoder_for_PKMACValue(el);
}


let _cached_encoder_for_PKMACValue: $.ASN1Encoder<PKMACValue> | null = null;


/**
 * @summary Encodes a(n) PKMACValue into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PKMACValue, encoded as an ASN.1 Element.
 */
export function _encode_PKMACValue(
    value: PKMACValue,
    elGetter: $.ASN1Encoder<PKMACValue>
) {
    if (!_cached_encoder_for_PKMACValue) {
        _cached_encoder_for_PKMACValue = function (
            value: PKMACValue        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_AlgorithmIdentifier(
                            value.algId,
                            $.DER
                        ),
                        /* REQUIRED   */ $._encodeBitString(value.value, $.DER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.DER
            );
        };
    }
    return _cached_encoder_for_PKMACValue(value, elGetter);
}


/* eslint-enable */
