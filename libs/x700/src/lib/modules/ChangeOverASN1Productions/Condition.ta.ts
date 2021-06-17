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
import {
    ObjectInstance,
    _decode_ObjectInstance,
    _encode_ObjectInstance,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/ObjectInstance.ta';
export {
    ObjectInstance,
    _decode_ObjectInstance,
    _encode_ObjectInstance,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/ObjectInstance.ta';
import {
    Attribute,
    _decode_Attribute,
    _encode_Attribute,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/Attribute.ta';
export {
    Attribute,
    _decode_Attribute,
    _encode_Attribute,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/Attribute.ta';

/* START_OF_SYMBOL_DEFINITION Condition */
/**
 * @summary Condition
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Condition ::= SEQUENCE {object   ObjectInstance,
 *                         details  SET OF Attribute
 * }
 * ```
 *
 * @class
 */
export class Condition {
    constructor(
        /**
         * @summary `object`.
         * @public
         * @readonly
         */
        readonly object: ObjectInstance,
        /**
         * @summary `details`.
         * @public
         * @readonly
         */
        readonly details: Attribute[]
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
        return new Condition(_o.object, _o.details);
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
    new $.ComponentSpec('object', false, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec(
        'details',
        false,
        $.hasTag(_TagClass.universal, 17),
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
            sequence[0].name = 'object';
            sequence[1].name = 'details';
            let object!: ObjectInstance;
            let details!: Attribute[];
            object = _decode_ObjectInstance(sequence[0]);
            details = $._decodeSetOf<Attribute>(() => _decode_Attribute)(
                sequence[1]
            );
            return new Condition(object, details);
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
                        /* REQUIRED   */ _encode_ObjectInstance(
                            value.object,
                            $.BER
                        ),
                        /* REQUIRED   */ $._encodeSetOf<Attribute>(
                            () => _encode_Attribute,
                            $.BER
                        )(value.details, $.BER),
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
