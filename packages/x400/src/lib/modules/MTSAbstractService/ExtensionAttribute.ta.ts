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
import { EXTENSION_ATTRIBUTE } from '../MTSAbstractService/EXTENSION-ATTRIBUTE.oca.js';
export { EXTENSION_ATTRIBUTE } from '../MTSAbstractService/EXTENSION-ATTRIBUTE.oca.js';
import { ExtensionAttributeTable } from '../MTSAbstractService/ExtensionAttributeTable.osa.js';
export { ExtensionAttributeTable } from '../MTSAbstractService/ExtensionAttributeTable.osa.js';

/* START_OF_SYMBOL_DEFINITION ExtensionAttribute */
/**
 * @summary ExtensionAttribute
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ExtensionAttribute ::= SEQUENCE {
 *   extension-attribute-type
 *     [0]  EXTENSION-ATTRIBUTE.&id({ExtensionAttributeTable}),
 *   extension-attribute-value
 *     [1]  EXTENSION-ATTRIBUTE.&Type
 *            ({ExtensionAttributeTable}{@extension-attribute-type})
 * }
 * ```
 *
 * @class
 */
export class ExtensionAttribute {
    constructor(
        /**
         * @summary `extension_attribute_type`.
         * @public
         * @readonly
         */
        readonly extension_attribute_type: INTEGER,
        /**
         * @summary `extension_attribute_value`.
         * @public
         * @readonly
         */
        readonly extension_attribute_value: _Element
    ) {}

    /**
     * @summary Restructures an object into a ExtensionAttribute
     * @description
     *
     * This takes an `object` and converts it to a `ExtensionAttribute`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ExtensionAttribute`.
     * @returns {ExtensionAttribute}
     */
    public static _from_object(
        _o: { [_K in keyof ExtensionAttribute]: ExtensionAttribute[_K] }
    ): ExtensionAttribute {
        return new ExtensionAttribute(
            _o.extension_attribute_type,
            _o.extension_attribute_value
        );
    }
}
/* END_OF_SYMBOL_DEFINITION ExtensionAttribute */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ExtensionAttribute */
/**
 * @summary The Leading Root Component Types of ExtensionAttribute
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ExtensionAttribute: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'extension-attribute-type',
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'extension-attribute-value',
        false,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ExtensionAttribute */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ExtensionAttribute */
/**
 * @summary The Trailing Root Component Types of ExtensionAttribute
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ExtensionAttribute: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ExtensionAttribute */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ExtensionAttribute */
/**
 * @summary The Extension Addition Component Types of ExtensionAttribute
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ExtensionAttribute: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ExtensionAttribute */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ExtensionAttribute */
let _cached_decoder_for_ExtensionAttribute: $.ASN1Decoder<ExtensionAttribute> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ExtensionAttribute */

/* START_OF_SYMBOL_DEFINITION _decode_ExtensionAttribute */
/**
 * @summary Decodes an ASN.1 element into a(n) ExtensionAttribute
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ExtensionAttribute} The decoded data structure.
 */
export function _decode_ExtensionAttribute(el: _Element) {
    if (!_cached_decoder_for_ExtensionAttribute) {
        _cached_decoder_for_ExtensionAttribute = function (
            el: _Element
        ): ExtensionAttribute {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    'ExtensionAttribute contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'extension-attribute-type';
            sequence[1].name = 'extension-attribute-value';
            let extension_attribute_type!: INTEGER;
            let extension_attribute_value!: _Element;
            extension_attribute_type = $._decode_implicit<INTEGER>(
                () => $._decodeInteger
            )(sequence[0]);
            extension_attribute_value = $._decode_implicit<_Element>(
                () => $._decodeAny
            )(sequence[1]);
            return new ExtensionAttribute(
                extension_attribute_type,
                extension_attribute_value
            );
        };
    }
    return _cached_decoder_for_ExtensionAttribute(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ExtensionAttribute */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ExtensionAttribute */
let _cached_encoder_for_ExtensionAttribute: $.ASN1Encoder<ExtensionAttribute> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ExtensionAttribute */

/* START_OF_SYMBOL_DEFINITION _encode_ExtensionAttribute */
/**
 * @summary Encodes a(n) ExtensionAttribute into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ExtensionAttribute, encoded as an ASN.1 Element.
 */
export function _encode_ExtensionAttribute(
    value: ExtensionAttribute,
    elGetter: $.ASN1Encoder<ExtensionAttribute>
) {
    if (!_cached_encoder_for_ExtensionAttribute) {
        _cached_encoder_for_ExtensionAttribute = function (
            value: ExtensionAttribute,
            elGetter: $.ASN1Encoder<ExtensionAttribute>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            0,
                            () => $._encodeInteger,
                            $.BER
                        )(value.extension_attribute_type, $.BER),
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            1,
                            () => $._encodeAny,
                            $.BER
                        )(value.extension_attribute_value, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_ExtensionAttribute(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ExtensionAttribute */

/* eslint-enable */
