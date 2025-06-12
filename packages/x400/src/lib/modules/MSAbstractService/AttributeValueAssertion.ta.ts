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
import * as $ from 'asn1-ts/dist/functional.mjs';
import { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.js';
export { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.js';
import { single_valued, multi_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.js";
import { AttributeTable } from '../MSGeneralAttributeTypes/AttributeTable.osa.js';
export { AttributeTable } from '../MSGeneralAttributeTypes/AttributeTable.osa.js';
import {
    AttributeType,
    _decode_AttributeType,
    _encode_AttributeType,
} from "./AttributeType.ta.js";

/* START_OF_SYMBOL_DEFINITION AttributeValueAssertion */
/**
 * @summary AttributeValueAssertion
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AttributeValueAssertion ::= SEQUENCE {
 *   attribute-type   X413ATTRIBUTE.&id({AttributeTable}),
 *   attribute-value  X413ATTRIBUTE.&Type({AttributeTable}{@attribute-type})
 * }
 * ```
 *
 * @class
 */
export class AttributeValueAssertion {
    constructor(
        /**
         * @summary `attribute_type`.
         * @public
         * @readonly
         */
        readonly attribute_type: AttributeType,
        /**
         * @summary `attribute_value`.
         * @public
         * @readonly
         */
        readonly attribute_value: _Element
    ) {}

    /**
     * @summary Restructures an object into a AttributeValueAssertion
     * @description
     *
     * This takes an `object` and converts it to a `AttributeValueAssertion`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AttributeValueAssertion`.
     * @returns {AttributeValueAssertion}
     */
    public static _from_object(
        _o: {
            [_K in keyof AttributeValueAssertion]: AttributeValueAssertion[_K];
        }
    ): AttributeValueAssertion {
        return new AttributeValueAssertion(
            _o.attribute_type,
            _o.attribute_value
        );
    }
}
/* END_OF_SYMBOL_DEFINITION AttributeValueAssertion */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_AttributeValueAssertion */
/**
 * @summary The Leading Root Component Types of AttributeValueAssertion
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_AttributeValueAssertion: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'attribute-type',
        false,
        $.hasTag(_TagClass.universal, 6),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'attribute-value',
        false,
        $.hasAnyTag,
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_AttributeValueAssertion */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_AttributeValueAssertion */
/**
 * @summary The Trailing Root Component Types of AttributeValueAssertion
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AttributeValueAssertion: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_AttributeValueAssertion */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_AttributeValueAssertion */
/**
 * @summary The Extension Addition Component Types of AttributeValueAssertion
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AttributeValueAssertion: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_AttributeValueAssertion */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AttributeValueAssertion */
let _cached_decoder_for_AttributeValueAssertion: $.ASN1Decoder<AttributeValueAssertion> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AttributeValueAssertion */

/* START_OF_SYMBOL_DEFINITION _decode_AttributeValueAssertion */
/**
 * @summary Decodes an ASN.1 element into a(n) AttributeValueAssertion
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AttributeValueAssertion} The decoded data structure.
 */
export function _decode_AttributeValueAssertion(el: _Element) {
    if (!_cached_decoder_for_AttributeValueAssertion) {
        _cached_decoder_for_AttributeValueAssertion = function (
            el: _Element
        ): AttributeValueAssertion {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    'AttributeValueAssertion contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'attribute-type';
            sequence[1].name = 'attribute-value';
            let attribute_type!: AttributeType;
            let attribute_value!: _Element;
            attribute_type = _decode_AttributeType(sequence[0]);
            attribute_value = $._decodeAny(sequence[1]);
            return new AttributeValueAssertion(attribute_type, attribute_value);
        };
    }
    return _cached_decoder_for_AttributeValueAssertion(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AttributeValueAssertion */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AttributeValueAssertion */
let _cached_encoder_for_AttributeValueAssertion: $.ASN1Encoder<AttributeValueAssertion> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AttributeValueAssertion */

/* START_OF_SYMBOL_DEFINITION _encode_AttributeValueAssertion */
/**
 * @summary Encodes a(n) AttributeValueAssertion into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttributeValueAssertion, encoded as an ASN.1 Element.
 */
export function _encode_AttributeValueAssertion(
    value: AttributeValueAssertion,
    elGetter: $.ASN1Encoder<AttributeValueAssertion>
) {
    if (!_cached_encoder_for_AttributeValueAssertion) {
        _cached_encoder_for_AttributeValueAssertion = function (
            value: AttributeValueAssertion,
            elGetter: $.ASN1Encoder<AttributeValueAssertion>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_AttributeType(
                            value.attribute_type,
                            $.BER
                        ),
                        /* REQUIRED   */ $._encodeAny(
                            value.attribute_value,
                            $.BER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_AttributeValueAssertion(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AttributeValueAssertion */

/* eslint-enable */
