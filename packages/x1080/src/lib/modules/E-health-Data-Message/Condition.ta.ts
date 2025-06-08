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
import { CONDITION } from '../E-health-Data-Message/CONDITION.oca';
export { CONDITION } from '../E-health-Data-Message/CONDITION.oca';
import { Conditions } from '../E-health-Data-Message/Conditions.osa';
export { Conditions } from '../E-health-Data-Message/Conditions.osa';

/* START_OF_SYMBOL_DEFINITION Condition */
/**
 * @summary Condition
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Condition ::= SEQUENCE {
 *   id     CONDITION.&id({Conditions}),
 *   value  CONDITION.&Type({Conditions}{@id})
 * }
 * ```
 *
 * @class
 */
export class Condition {
    constructor(
        /**
         * @summary `id`.
         * @public
         * @readonly
         */
        readonly id: OBJECT_IDENTIFIER,
        /**
         * @summary `value`.
         * @public
         * @readonly
         */
        readonly value: _Element
    ) {}

    /**
     * @summary Restructures an object into a Condition
     * @description
     *
     * This takes an `object` and converts it to a `Condition`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Condition`.
     * @returns {Condition}
     */
    public static _from_object(
        _o: { [_K in keyof Condition]: Condition[_K] }
    ): Condition {
        return new Condition(_o.id, _o.value);
    }
}
/* END_OF_SYMBOL_DEFINITION Condition */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Condition */
/**
 * @summary The Leading Root Component Types of Condition
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Condition: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'id',
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'value',
        false,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Condition */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Condition */
/**
 * @summary The Trailing Root Component Types of Condition
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Condition: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Condition */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Condition */
/**
 * @summary The Extension Addition Component Types of Condition
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Condition: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Condition */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Condition */
let _cached_decoder_for_Condition: $.ASN1Decoder<Condition> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Condition */

/* START_OF_SYMBOL_DEFINITION _decode_Condition */
/**
 * @summary Decodes an ASN.1 element into a(n) Condition
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Condition} The decoded data structure.
 */
export function _decode_Condition(el: _Element) {
    if (!_cached_decoder_for_Condition) {
        _cached_decoder_for_Condition = function (el: _Element): Condition {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    'Condition contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'id';
            sequence[1].name = 'value';
            let id!: OBJECT_IDENTIFIER;
            let value!: _Element;
            id = $._decodeObjectIdentifier(sequence[0]);
            value = $._decodeAny(sequence[1]);
            return new Condition(id, value);
        };
    }
    return _cached_decoder_for_Condition(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Condition */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Condition */
let _cached_encoder_for_Condition: $.ASN1Encoder<Condition> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Condition */

/* START_OF_SYMBOL_DEFINITION _encode_Condition */
/**
 * @summary Encodes a(n) Condition into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Condition, encoded as an ASN.1 Element.
 */
export function _encode_Condition(
    value: Condition,
    elGetter: $.ASN1Encoder<Condition>
) {
    if (!_cached_encoder_for_Condition) {
        _cached_encoder_for_Condition = function (
            value: Condition,
            elGetter: $.ASN1Encoder<Condition>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encodeObjectIdentifier(
                            value.id,
                            $.BER
                        ),
                        /* REQUIRED   */ $._encodeAny(value.value, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_Condition(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Condition */

/* eslint-enable */
