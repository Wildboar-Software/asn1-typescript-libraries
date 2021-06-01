/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/node/functional';
import { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca';
export { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca';
import { single_valued, multi_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta";
import { AttributeTable } from '../MSGeneralAttributeTypes/AttributeTable.osa';
export { AttributeTable } from '../MSGeneralAttributeTypes/AttributeTable.osa';
import {
    OrderedAttribute_attribute_values_Item,
    _decode_OrderedAttribute_attribute_values_Item,
    _encode_OrderedAttribute_attribute_values_Item,
} from '../MSAbstractService/OrderedAttribute-attribute-values-Item.ta';
export {
    OrderedAttribute_attribute_values_Item,
    _decode_OrderedAttribute_attribute_values_Item,
    _encode_OrderedAttribute_attribute_values_Item,
} from '../MSAbstractService/OrderedAttribute-attribute-values-Item.ta';
import {
    AttributeType,
    _decode_AttributeType,
    _encode_AttributeType,
} from "./AttributeType.ta";

/* START_OF_SYMBOL_DEFINITION OrderedAttribute */
/**
 * @summary OrderedAttribute
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OrderedAttribute ::= SEQUENCE {
 *   attribute-type    X413ATTRIBUTE.&id({AttributeTable}),
 *   attribute-values
 *     SEQUENCE SIZE (1..ub-attribute-values) OF
 *       SEQUENCE {-- at least one must be specified
 *                 value
 *                   [0]  X413ATTRIBUTE.&Type
 *                          ({AttributeTable}{@attribute-type}) OPTIONAL,
 *                 position  [1]  INTEGER(1..ub-attribute-values) OPTIONAL
 *       }
 * }
 * ```
 *
 * @class
 */
export class OrderedAttribute {
    constructor(
        /**
         * @summary `attribute_type`.
         * @public
         * @readonly
         */
        readonly attribute_type: AttributeType,
        /**
         * @summary `attribute_values`.
         * @public
         * @readonly
         */
        readonly attribute_values: OrderedAttribute_attribute_values_Item[]
    ) {}

    /**
     * @summary Restructures an object into a OrderedAttribute
     * @description
     *
     * This takes an `object` and converts it to a `OrderedAttribute`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `OrderedAttribute`.
     * @returns {OrderedAttribute}
     */
    public static _from_object(
        _o: { [_K in keyof OrderedAttribute]: OrderedAttribute[_K] }
    ): OrderedAttribute {
        return new OrderedAttribute(_o.attribute_type, _o.attribute_values);
    }
}
/* END_OF_SYMBOL_DEFINITION OrderedAttribute */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_OrderedAttribute */
/**
 * @summary The Leading Root Component Types of OrderedAttribute
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_OrderedAttribute: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'attribute-type',
        false,
        $.hasTag(_TagClass.universal, 6),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'attribute-values',
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_OrderedAttribute */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_OrderedAttribute */
/**
 * @summary The Trailing Root Component Types of OrderedAttribute
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_OrderedAttribute: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_OrderedAttribute */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_OrderedAttribute */
/**
 * @summary The Extension Addition Component Types of OrderedAttribute
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_OrderedAttribute: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_OrderedAttribute */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_OrderedAttribute */
let _cached_decoder_for_OrderedAttribute: $.ASN1Decoder<OrderedAttribute> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_OrderedAttribute */

/* START_OF_SYMBOL_DEFINITION _decode_OrderedAttribute */
/**
 * @summary Decodes an ASN.1 element into a(n) OrderedAttribute
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OrderedAttribute} The decoded data structure.
 */
export function _decode_OrderedAttribute(el: _Element) {
    if (!_cached_decoder_for_OrderedAttribute) {
        _cached_decoder_for_OrderedAttribute = function (
            el: _Element
        ): OrderedAttribute {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    'OrderedAttribute contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'attribute-type';
            sequence[1].name = 'attribute-values';
            let attribute_type!: AttributeType;
            let attribute_values!: OrderedAttribute_attribute_values_Item[];
            attribute_type = _decode_AttributeType(sequence[0]);
            attribute_values = $._decodeSequenceOf<OrderedAttribute_attribute_values_Item>(
                () => _decode_OrderedAttribute_attribute_values_Item
            )(sequence[1]);
            return new OrderedAttribute(attribute_type, attribute_values);
        };
    }
    return _cached_decoder_for_OrderedAttribute(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_OrderedAttribute */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_OrderedAttribute */
let _cached_encoder_for_OrderedAttribute: $.ASN1Encoder<OrderedAttribute> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_OrderedAttribute */

/* START_OF_SYMBOL_DEFINITION _encode_OrderedAttribute */
/**
 * @summary Encodes a(n) OrderedAttribute into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OrderedAttribute, encoded as an ASN.1 Element.
 */
export function _encode_OrderedAttribute(
    value: OrderedAttribute,
    elGetter: $.ASN1Encoder<OrderedAttribute>
) {
    if (!_cached_encoder_for_OrderedAttribute) {
        _cached_encoder_for_OrderedAttribute = function (
            value: OrderedAttribute,
            elGetter: $.ASN1Encoder<OrderedAttribute>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_AttributeType(
                            value.attribute_type,
                            $.BER
                        ),
                        /* REQUIRED   */ $._encodeSequenceOf<OrderedAttribute_attribute_values_Item>(
                            () =>
                                _encode_OrderedAttribute_attribute_values_Item,
                            $.BER
                        )(value.attribute_values, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_OrderedAttribute(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_OrderedAttribute */

/* eslint-enable */
