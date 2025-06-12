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
import {
    Identifier,
    _decode_Identifier,
    _encode_Identifier,
} from '../DefinitionASN1Module/Identifier.ta.mjs';
export {
    Identifier,
    _decode_Identifier,
    _encode_Identifier,
} from '../DefinitionASN1Module/Identifier.ta.mjs';
import {
    TemplateLabel,
    _decode_TemplateLabel,
    _encode_TemplateLabel,
} from '../DefinitionASN1Module/TemplateLabel.ta.mjs';
export {
    TemplateLabel,
    _decode_TemplateLabel,
    _encode_TemplateLabel,
} from '../DefinitionASN1Module/TemplateLabel.ta.mjs';

/* START_OF_SYMBOL_DEFINITION AndAttributeIds_Item */
/**
 * @summary AndAttributeIds_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AndAttributeIds-Item ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class AndAttributeIds_Item {
    constructor(
        /**
         * @summary `fieldName`.
         * @public
         * @readonly
         */
        readonly fieldName: Identifier,
        /**
         * @summary `attribute`.
         * @public
         * @readonly
         */
        readonly attribute: TemplateLabel
    ) {}

    /**
     * @summary Restructures an object into a AndAttributeIds_Item
     * @description
     *
     * This takes an `object` and converts it to a `AndAttributeIds_Item`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AndAttributeIds_Item`.
     * @returns {AndAttributeIds_Item}
     */
    public static _from_object(
        _o: { [_K in keyof AndAttributeIds_Item]: AndAttributeIds_Item[_K] }
    ): AndAttributeIds_Item {
        return new AndAttributeIds_Item(_o.fieldName, _o.attribute);
    }
}
/* END_OF_SYMBOL_DEFINITION AndAttributeIds_Item */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_AndAttributeIds_Item */
/**
 * @summary The Leading Root Component Types of AndAttributeIds_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_AndAttributeIds_Item: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'fieldName',
        false,
        $.hasTag(_TagClass.universal, 19),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'attribute',
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_AndAttributeIds_Item */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_AndAttributeIds_Item */
/**
 * @summary The Trailing Root Component Types of AndAttributeIds_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AndAttributeIds_Item: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_AndAttributeIds_Item */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_AndAttributeIds_Item */
/**
 * @summary The Extension Addition Component Types of AndAttributeIds_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AndAttributeIds_Item: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_AndAttributeIds_Item */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AndAttributeIds_Item */
let _cached_decoder_for_AndAttributeIds_Item: $.ASN1Decoder<AndAttributeIds_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AndAttributeIds_Item */

/* START_OF_SYMBOL_DEFINITION _decode_AndAttributeIds_Item */
/**
 * @summary Decodes an ASN.1 element into a(n) AndAttributeIds_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AndAttributeIds_Item} The decoded data structure.
 */
export function _decode_AndAttributeIds_Item(el: _Element) {
    if (!_cached_decoder_for_AndAttributeIds_Item) {
        _cached_decoder_for_AndAttributeIds_Item = function (
            el: _Element
        ): AndAttributeIds_Item {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    'AndAttributeIds-Item contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'fieldName';
            sequence[1].name = 'attribute';
            let fieldName!: Identifier;
            let attribute!: TemplateLabel;
            fieldName = _decode_Identifier(sequence[0]);
            attribute = _decode_TemplateLabel(sequence[1]);
            return new AndAttributeIds_Item(fieldName, attribute);
        };
    }
    return _cached_decoder_for_AndAttributeIds_Item(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AndAttributeIds_Item */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AndAttributeIds_Item */
let _cached_encoder_for_AndAttributeIds_Item: $.ASN1Encoder<AndAttributeIds_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AndAttributeIds_Item */

/* START_OF_SYMBOL_DEFINITION _encode_AndAttributeIds_Item */
/**
 * @summary Encodes a(n) AndAttributeIds_Item into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AndAttributeIds_Item, encoded as an ASN.1 Element.
 */
export function _encode_AndAttributeIds_Item(
    value: AndAttributeIds_Item,
    elGetter: $.ASN1Encoder<AndAttributeIds_Item>
) {
    if (!_cached_encoder_for_AndAttributeIds_Item) {
        _cached_encoder_for_AndAttributeIds_Item = function (
            value: AndAttributeIds_Item,
            elGetter: $.ASN1Encoder<AndAttributeIds_Item>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_Identifier(
                            value.fieldName,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_TemplateLabel(
                            value.attribute,
                            $.BER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_AndAttributeIds_Item(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AndAttributeIds_Item */

/* eslint-enable */
