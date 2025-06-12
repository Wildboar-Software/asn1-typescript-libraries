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
import { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
export { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
import { single_valued, multi_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.mjs";
import { AttributeTable } from '../MSGeneralAttributeTypes/AttributeTable.osa.mjs';
export { AttributeTable } from '../MSGeneralAttributeTypes/AttributeTable.osa.mjs';
import {
    AttributeType,
    _decode_AttributeType,
    _encode_AttributeType,
} from "./AttributeType.ta.mjs";

/* START_OF_SYMBOL_DEFINITION AttributeValueCount */
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
 * @class
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
/* END_OF_SYMBOL_DEFINITION AttributeValueCount */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_AttributeValueCount */
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
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'total',
        false,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_AttributeValueCount */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_AttributeValueCount */
/**
 * @summary The Trailing Root Component Types of AttributeValueCount
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AttributeValueCount: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_AttributeValueCount */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_AttributeValueCount */
/**
 * @summary The Extension Addition Component Types of AttributeValueCount
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AttributeValueCount: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_AttributeValueCount */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AttributeValueCount */
let _cached_decoder_for_AttributeValueCount: $.ASN1Decoder<AttributeValueCount> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AttributeValueCount */

/* START_OF_SYMBOL_DEFINITION _decode_AttributeValueCount */
/**
 * @summary Decodes an ASN.1 element into a(n) AttributeValueCount
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AttributeValueCount} The decoded data structure.
 */
export function _decode_AttributeValueCount(el: _Element) {
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
/* END_OF_SYMBOL_DEFINITION _decode_AttributeValueCount */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AttributeValueCount */
let _cached_encoder_for_AttributeValueCount: $.ASN1Encoder<AttributeValueCount> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AttributeValueCount */

/* START_OF_SYMBOL_DEFINITION _encode_AttributeValueCount */
/**
 * @summary Encodes a(n) AttributeValueCount into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttributeValueCount, encoded as an ASN.1 Element.
 */
export function _encode_AttributeValueCount(
    value: AttributeValueCount,
    elGetter: $.ASN1Encoder<AttributeValueCount>
) {
    if (!_cached_encoder_for_AttributeValueCount) {
        _cached_encoder_for_AttributeValueCount = function (
            value: AttributeValueCount,
            elGetter: $.ASN1Encoder<AttributeValueCount>
        ): _Element {
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

/* END_OF_SYMBOL_DEFINITION _encode_AttributeValueCount */

/* eslint-enable */
