/* eslint-disable */
import {
    INTEGER,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
import {
    AttributeType,
    _decode_AttributeType,
    _encode_AttributeType,
} from "./AttributeType.ta.mjs";

/**
 * @summary AttributeValueCount
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AttributeValueCount ::= SEQUENCE {
 *   type   [0]  X413ATTRIBUTE.&id({AttributeTable}),
 *   total  [1]  INTEGER
 * }
 * ```
 *
 */
export class AttributeValueCount {
    constructor(
        /**
         * @summary `type_`.
         * @public
         * @readonly
         */
        readonly type_: AttributeType,
        /**
         * @summary `total`.
         * @public
         * @readonly
         */
        readonly total: INTEGER
    ) {}

    /**
     * @summary Restructures an object into a AttributeValueCount
     * @description
     *
     * This takes an `object` and converts it to a `AttributeValueCount`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AttributeValueCount`.
     * @returns {AttributeValueCount}
     */
    public static _from_object(
        _o: { [_K in keyof AttributeValueCount]: AttributeValueCount[_K] }
    ): AttributeValueCount {
        return new AttributeValueCount(_o.type_, _o.total);
    }
}

/**
 * @summary The Leading Root Component Types of AttributeValueCount
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_AttributeValueCount: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'type',
        false,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        'total',
        false,
        $.hasTag(_TagClass.context, 1)
    ),
];

/**
 * @summary The Trailing Root Component Types of AttributeValueCount
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AttributeValueCount: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of AttributeValueCount
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AttributeValueCount: $.ComponentSpec[] = [];

let _cached_decoder_for_AttributeValueCount: $.ASN1Decoder<AttributeValueCount> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AttributeValueCount
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AttributeValueCount} The decoded data structure.
 */
export function _decode_AttributeValueCount(el: _Element): AttributeValueCount {
    if (!_cached_decoder_for_AttributeValueCount) {
        _cached_decoder_for_AttributeValueCount = function (
            el: _Element
        ): AttributeValueCount {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    'AttributeValueCount contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'type';
            sequence[1].name = 'total';
            let type_!: AttributeType;
            let total!: INTEGER;
            type_ = $._decode_explicit<AttributeType>(
                () => _decode_AttributeType
            )(sequence[0]);
            total = $._decode_explicit<INTEGER>(() => $._decodeInteger)(
                sequence[1]
            );
            return new AttributeValueCount(type_, total);
        };
    }
    return _cached_decoder_for_AttributeValueCount(el);
}

let _cached_encoder_for_AttributeValueCount: $.ASN1Encoder<AttributeValueCount> | null = null;

/**
 * @summary Encodes a(n) AttributeValueCount into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttributeValueCount, encoded as an ASN.1 Element.
 */
export function _encode_AttributeValueCount(
    value: AttributeValueCount,
    elGetter: $.ASN1Encoder<AttributeValueCount>
): _Element {
    if (!_cached_encoder_for_AttributeValueCount) {
        _cached_encoder_for_AttributeValueCount = function (
            value: AttributeValueCount        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_explicit(
                            _TagClass.context,
                            0,
                            () => _encode_AttributeType,
                            $.BER
                        )(value.type_, $.BER),
                        /* REQUIRED   */ $._encode_explicit(
                            _TagClass.context,
                            1,
                            () => $._encodeInteger,
                            $.BER
                        )(value.total, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_AttributeValueCount(value, elGetter);
}


/* eslint-enable */
