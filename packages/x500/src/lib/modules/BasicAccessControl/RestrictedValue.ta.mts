/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import {
    AttributeType,
    _decode_AttributeType,
    _encode_AttributeType,
} from "../InformationFramework/AttributeType.ta.mjs";
/**
 * @summary RestrictedValue
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RestrictedValue ::= SEQUENCE {
 *   type      AttributeType,
 *   valuesIn  AttributeType,
 *   ... }
 * ```
 *
 * @class
 */
export class RestrictedValue {
    constructor(
        /**
         * @summary `type_`.
         * @public
         * @readonly
         */
        readonly type_: AttributeType,
        /**
         * @summary `valuesIn`.
         * @public
         * @readonly
         */
        readonly valuesIn: AttributeType,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a RestrictedValue
     * @description
     *
     * This takes an `object` and converts it to a `RestrictedValue`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RestrictedValue`.
     * @returns {RestrictedValue}
     */
    public static _from_object(
        _o: { [_K in keyof RestrictedValue]: RestrictedValue[_K] }
    ): RestrictedValue {
        return new RestrictedValue(
            _o.type_,
            _o.valuesIn,
            _o._unrecognizedExtensionsList
        );
    }
}

/**
 * @summary The Leading Root Component Types of RestrictedValue
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_RestrictedValue: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "type",
        false,
        $.hasTag(_TagClass.universal, 6)
    ),
    new $.ComponentSpec(
        "valuesIn",
        false,
        $.hasTag(_TagClass.universal, 6)
    ),
];

/**
 * @summary The Trailing Root Component Types of RestrictedValue
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_RestrictedValue: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of RestrictedValue
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_RestrictedValue: $.ComponentSpec[] = [];

let _cached_decoder_for_RestrictedValue: $.ASN1Decoder<RestrictedValue> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RestrictedValue
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RestrictedValue} The decoded data structure.
 */
export function _decode_RestrictedValue(el: _Element) {
    if (!_cached_decoder_for_RestrictedValue) {
        _cached_decoder_for_RestrictedValue = function (
            el: _Element
        ): RestrictedValue {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "RestrictedValue contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "type";
            sequence[1].name = "valuesIn";
            let type_!: AttributeType;
            let valuesIn!: AttributeType;
            type_ = _decode_AttributeType(sequence[0]);
            valuesIn = _decode_AttributeType(sequence[1]);
            return new RestrictedValue(type_, valuesIn, sequence.slice(2));
        };
    }
    return _cached_decoder_for_RestrictedValue(el);
}

let _cached_encoder_for_RestrictedValue: $.ASN1Encoder<RestrictedValue> | null = null;

/**
 * @summary Encodes a(n) RestrictedValue into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RestrictedValue, encoded as an ASN.1 Element.
 */
export function _encode_RestrictedValue(
    value: RestrictedValue,
    elGetter: $.ASN1Encoder<RestrictedValue>
) {
    if (!_cached_encoder_for_RestrictedValue) {
        _cached_encoder_for_RestrictedValue = function (
            value: RestrictedValue        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_AttributeType(
                                value.type_,
                                $.DER
                            ),
                            /* REQUIRED   */ _encode_AttributeType(
                                value.valuesIn,
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
    return _cached_encoder_for_RestrictedValue(value, elGetter);
}


/* eslint-enable */
