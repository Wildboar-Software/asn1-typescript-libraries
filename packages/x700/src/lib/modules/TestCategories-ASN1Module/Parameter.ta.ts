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
import { CMIP_ATTRIBUTE } from '@wildboar/cmip/src/lib/modules/CMIP-1/CMIP-ATTRIBUTE.oca.js';
export { CMIP_ATTRIBUTE } from '@wildboar/cmip/src/lib/modules/CMIP-1/CMIP-ATTRIBUTE.oca.js';
import { AttributeSet } from '@wildboar/cmip/src/lib/modules/CMIP-1/AttributeSet.osa.js';
export { AttributeSet } from '@wildboar/cmip/src/lib/modules/CMIP-1/AttributeSet.osa.js';
import { AttributeId, _decode_AttributeId, _encode_AttributeId } from '@wildboar/cmip/src/lib/modules/CMIP-1/AttributeId.ta.js';

/* START_OF_SYMBOL_DEFINITION Parameter */
/**
 * @summary Parameter
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Parameter ::= SEQUENCE {
 *   attributeType  CMIP-ATTRIBUTE.&id({AttributeSet}),
 *   value          CMIP-ATTRIBUTE.&Value({AttributeSet}{@.attributeType})
 * }
 * ```
 *
 * @class
 */
export class Parameter {
    constructor(
        /**
         * @summary `attributeType`.
         * @public
         * @readonly
         */
        readonly attributeType: AttributeId,
        /**
         * @summary `value`.
         * @public
         * @readonly
         */
        readonly value: _Element
    ) {}

    /**
     * @summary Restructures an object into a Parameter
     * @description
     *
     * This takes an `object` and converts it to a `Parameter`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Parameter`.
     * @returns {Parameter}
     */
    public static _from_object(
        _o: { [_K in keyof Parameter]: Parameter[_K] }
    ): Parameter {
        return new Parameter(_o.attributeType, _o.value);
    }
}
/* END_OF_SYMBOL_DEFINITION Parameter */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Parameter */
/**
 * @summary The Leading Root Component Types of Parameter
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Parameter: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'attributeType',
        false,
        $.hasAnyTag,
        undefined,
        undefined
    ),
    new $.ComponentSpec('value', false, $.hasAnyTag, undefined, undefined),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Parameter */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Parameter */
/**
 * @summary The Trailing Root Component Types of Parameter
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Parameter: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Parameter */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Parameter */
/**
 * @summary The Extension Addition Component Types of Parameter
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Parameter: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Parameter */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Parameter */
let _cached_decoder_for_Parameter: $.ASN1Decoder<Parameter> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Parameter */

/* START_OF_SYMBOL_DEFINITION _decode_Parameter */
/**
 * @summary Decodes an ASN.1 element into a(n) Parameter
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Parameter} The decoded data structure.
 */
export function _decode_Parameter(el: _Element) {
    if (!_cached_decoder_for_Parameter) {
        _cached_decoder_for_Parameter = function (el: _Element): Parameter {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    'Parameter contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'attributeType';
            sequence[1].name = 'value';
            let attributeType!: AttributeId;
            let value!: _Element;
            attributeType = _decode_AttributeId(sequence[0]);
            value = $._decodeAny(sequence[1]);
            return new Parameter(attributeType, value);
        };
    }
    return _cached_decoder_for_Parameter(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Parameter */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Parameter */
let _cached_encoder_for_Parameter: $.ASN1Encoder<Parameter> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Parameter */

/* START_OF_SYMBOL_DEFINITION _encode_Parameter */
/**
 * @summary Encodes a(n) Parameter into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Parameter, encoded as an ASN.1 Element.
 */
export function _encode_Parameter(
    value: Parameter,
    elGetter: $.ASN1Encoder<Parameter>
) {
    if (!_cached_encoder_for_Parameter) {
        _cached_encoder_for_Parameter = function (
            value: Parameter,
            elGetter: $.ASN1Encoder<Parameter>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_AttributeId(
                            value.attributeType,
                            $.BER
                        ),
                        /* REQUIRED   */ $._encodeAny(value.value, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_Parameter(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Parameter */

/* eslint-enable */
