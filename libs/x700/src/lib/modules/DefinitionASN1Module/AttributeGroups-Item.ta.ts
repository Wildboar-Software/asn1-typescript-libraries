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
    TemplateLabel,
    _decode_TemplateLabel,
    _encode_TemplateLabel,
} from '../DefinitionASN1Module/TemplateLabel.ta';
export {
    TemplateLabel,
    _decode_TemplateLabel,
    _encode_TemplateLabel,
} from '../DefinitionASN1Module/TemplateLabel.ta';
import {
    TemplateList,
    _decode_TemplateList,
    _encode_TemplateList,
} from '../DefinitionASN1Module/TemplateList.ta';
export {
    TemplateList,
    _decode_TemplateList,
    _encode_TemplateList,
} from '../DefinitionASN1Module/TemplateList.ta';

/* START_OF_SYMBOL_DEFINITION AttributeGroups_Item */
/**
 * @summary AttributeGroups_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AttributeGroups-Item ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class AttributeGroups_Item {
    constructor(
        /**
         * @summary `group`.
         * @public
         * @readonly
         */
        readonly group: TemplateLabel,
        /**
         * @summary `attributes`.
         * @public
         * @readonly
         */
        readonly attributes: OPTIONAL<TemplateList>
    ) {}

    /**
     * @summary Restructures an object into a AttributeGroups_Item
     * @description
     *
     * This takes an `object` and converts it to a `AttributeGroups_Item`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AttributeGroups_Item`.
     * @returns {AttributeGroups_Item}
     */
    public static _from_object(
        _o: { [_K in keyof AttributeGroups_Item]: AttributeGroups_Item[_K] }
    ): AttributeGroups_Item {
        return new AttributeGroups_Item(_o.group, _o.attributes);
    }
}
/* END_OF_SYMBOL_DEFINITION AttributeGroups_Item */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_AttributeGroups_Item */
/**
 * @summary The Leading Root Component Types of AttributeGroups_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_AttributeGroups_Item: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'group',
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'attributes',
        true,
        $.hasTag(_TagClass.universal, 17),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_AttributeGroups_Item */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_AttributeGroups_Item */
/**
 * @summary The Trailing Root Component Types of AttributeGroups_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AttributeGroups_Item: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_AttributeGroups_Item */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_AttributeGroups_Item */
/**
 * @summary The Extension Addition Component Types of AttributeGroups_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AttributeGroups_Item: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_AttributeGroups_Item */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AttributeGroups_Item */
let _cached_decoder_for_AttributeGroups_Item: $.ASN1Decoder<AttributeGroups_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AttributeGroups_Item */

/* START_OF_SYMBOL_DEFINITION _decode_AttributeGroups_Item */
/**
 * @summary Decodes an ASN.1 element into a(n) AttributeGroups_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AttributeGroups_Item} The decoded data structure.
 */
export function _decode_AttributeGroups_Item(el: _Element) {
    if (!_cached_decoder_for_AttributeGroups_Item) {
        _cached_decoder_for_AttributeGroups_Item = function (
            el: _Element
        ): AttributeGroups_Item {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let group!: TemplateLabel;
            let attributes: OPTIONAL<TemplateList>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                group: (_el: _Element): void => {
                    group = _decode_TemplateLabel(_el);
                },
                attributes: (_el: _Element): void => {
                    attributes = _decode_TemplateList(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_AttributeGroups_Item,
                _extension_additions_list_spec_for_AttributeGroups_Item,
                _root_component_type_list_2_spec_for_AttributeGroups_Item,
                undefined
            );
            return new AttributeGroups_Item /* SEQUENCE_CONSTRUCTOR_CALL */(
                group,
                attributes
            );
        };
    }
    return _cached_decoder_for_AttributeGroups_Item(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AttributeGroups_Item */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AttributeGroups_Item */
let _cached_encoder_for_AttributeGroups_Item: $.ASN1Encoder<AttributeGroups_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AttributeGroups_Item */

/* START_OF_SYMBOL_DEFINITION _encode_AttributeGroups_Item */
/**
 * @summary Encodes a(n) AttributeGroups_Item into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttributeGroups_Item, encoded as an ASN.1 Element.
 */
export function _encode_AttributeGroups_Item(
    value: AttributeGroups_Item,
    elGetter: $.ASN1Encoder<AttributeGroups_Item>
) {
    if (!_cached_encoder_for_AttributeGroups_Item) {
        _cached_encoder_for_AttributeGroups_Item = function (
            value: AttributeGroups_Item,
            elGetter: $.ASN1Encoder<AttributeGroups_Item>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_TemplateLabel(
                            value.group,
                            $.BER
                        ),
                        /* IF_ABSENT  */ value.attributes === undefined
                            ? undefined
                            : _encode_TemplateList(value.attributes, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_AttributeGroups_Item(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AttributeGroups_Item */

/* eslint-enable */
