/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    TeletexString,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary TeletexDomainDefinedAttribute
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TeletexDomainDefinedAttribute ::= SEQUENCE {
 *   type   TeletexString(SIZE (1..ub-domain-defined-attribute-type-length)),
 *   value  TeletexString(SIZE (1..ub-domain-defined-attribute-value-length))
 * }
 * ```
 *
 */
export class TeletexDomainDefinedAttribute {
    constructor(
        /**
         * @summary `type_`.
         * @public
         * @readonly
         */
        readonly type_: TeletexString,
        /**
         * @summary `value`.
         * @public
         * @readonly
         */
        readonly value: TeletexString
    ) {}

    /**
     * @summary Restructures an object into a TeletexDomainDefinedAttribute
     * @description
     *
     * This takes an `object` and converts it to a `TeletexDomainDefinedAttribute`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TeletexDomainDefinedAttribute`.
     * @returns {TeletexDomainDefinedAttribute}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof TeletexDomainDefinedAttribute]: TeletexDomainDefinedAttribute[_K];
            }
        >
    ): TeletexDomainDefinedAttribute {
        return new TeletexDomainDefinedAttribute(_o.type_, _o.value);
    }
}

/**
 * @summary The Leading Root Component Types of TeletexDomainDefinedAttribute
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_TeletexDomainDefinedAttribute: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "type",
        false,
        $.hasTag(_TagClass.universal, 20)
    ),
    new $.ComponentSpec(
        "value",
        false,
        $.hasTag(_TagClass.universal, 20)
    ),
];

/**
 * @summary The Trailing Root Component Types of TeletexDomainDefinedAttribute
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_TeletexDomainDefinedAttribute: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of TeletexDomainDefinedAttribute
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_TeletexDomainDefinedAttribute: $.ComponentSpec[] = [];

let _cached_decoder_for_TeletexDomainDefinedAttribute: $.ASN1Decoder<TeletexDomainDefinedAttribute> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TeletexDomainDefinedAttribute
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TeletexDomainDefinedAttribute} The decoded data structure.
 */
export function _decode_TeletexDomainDefinedAttribute(el: _Element): TeletexDomainDefinedAttribute {
    if (!_cached_decoder_for_TeletexDomainDefinedAttribute) {
        _cached_decoder_for_TeletexDomainDefinedAttribute = function (
            el: _Element
        ): TeletexDomainDefinedAttribute {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "TeletexDomainDefinedAttribute contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "type";
            sequence[1].name = "value";
            let type_!: TeletexString;
            let value!: TeletexString;
            type_ = $._decodeTeletexString(sequence[0]);
            value = $._decodeTeletexString(sequence[1]);
            return new TeletexDomainDefinedAttribute(type_, value);
        };
    }
    return _cached_decoder_for_TeletexDomainDefinedAttribute(el);
}

let _cached_encoder_for_TeletexDomainDefinedAttribute: $.ASN1Encoder<TeletexDomainDefinedAttribute> | null = null;

/**
 * @summary Encodes a(n) TeletexDomainDefinedAttribute into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TeletexDomainDefinedAttribute, encoded as an ASN.1 Element.
 */
export function _encode_TeletexDomainDefinedAttribute(
    value: TeletexDomainDefinedAttribute,
    elGetter: $.ASN1Encoder<TeletexDomainDefinedAttribute>
): _Element {
    if (!_cached_encoder_for_TeletexDomainDefinedAttribute) {
        _cached_encoder_for_TeletexDomainDefinedAttribute = function (
            value: TeletexDomainDefinedAttribute        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encodeTeletexString(
                            value.type_,
                            $.DER
                        ),
                        /* REQUIRED   */ $._encodeTeletexString(
                            value.value,
                            $.DER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.DER
            );
        };
    }
    return _cached_encoder_for_TeletexDomainDefinedAttribute(value, elGetter);
}


/* eslint-enable */
