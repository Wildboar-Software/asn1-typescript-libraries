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
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import { CMIP_ATTRIBUTE } from "@wildboar/cmip/src/lib/modules/CMIP-1/CMIP-ATTRIBUTE.oca.js";
export { CMIP_ATTRIBUTE } from "@wildboar/cmip/src/lib/modules/CMIP-1/CMIP-ATTRIBUTE.oca.js";
import { AttributeSet } from "@wildboar/cmip/src/lib/modules/CMIP-1/AttributeSet.osa.js";
import { AttributeId, _decode_AttributeId, _encode_AttributeId } from "@wildboar/cmip/src/lib/modules/CMIP-1/AttributeId.ta.js";
export { AttributeSet } from "@wildboar/cmip/src/lib/modules/CMIP-1/AttributeSet.osa.js";


/* START_OF_SYMBOL_DEFINITION AttributeValueChangeDefinition_Item */
/**
 * @summary AttributeValueChangeDefinition_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AttributeValueChangeDefinition-Item ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export
class AttributeValueChangeDefinition_Item {
    constructor (
        /**
         * @summary `attributeId`.
         * @public
         * @readonly
         */
        readonly attributeId: AttributeId,
        /**
         * @summary `oldAttributeValue`.
         * @public
         * @readonly
         */
        readonly oldAttributeValue: OPTIONAL<_Element>,
        /**
         * @summary `newAttributeValue`.
         * @public
         * @readonly
         */
        readonly newAttributeValue: _Element
    ) {}

    /**
     * @summary Restructures an object into a AttributeValueChangeDefinition_Item
     * @description
     *
     * This takes an `object` and converts it to a `AttributeValueChangeDefinition_Item`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AttributeValueChangeDefinition_Item`.
     * @returns {AttributeValueChangeDefinition_Item}
     */
    public static _from_object (_o: { [_K in keyof (AttributeValueChangeDefinition_Item)]: (AttributeValueChangeDefinition_Item)[_K] }): AttributeValueChangeDefinition_Item {
        return new AttributeValueChangeDefinition_Item(_o.attributeId, _o.oldAttributeValue, _o.newAttributeValue);
    }


}
/* END_OF_SYMBOL_DEFINITION AttributeValueChangeDefinition_Item */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_AttributeValueChangeDefinition_Item */
/**
 * @summary The Leading Root Component Types of AttributeValueChangeDefinition_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AttributeValueChangeDefinition_Item: $.ComponentSpec[] = [
    new $.ComponentSpec("attributeId", false, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec("oldAttributeValue", true, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("newAttributeValue", false, $.hasTag(_TagClass.context, 2), undefined, undefined)
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_AttributeValueChangeDefinition_Item */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_AttributeValueChangeDefinition_Item */
/**
 * @summary The Trailing Root Component Types of AttributeValueChangeDefinition_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AttributeValueChangeDefinition_Item: $.ComponentSpec[] = [

];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_AttributeValueChangeDefinition_Item */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_AttributeValueChangeDefinition_Item */
/**
 * @summary The Extension Addition Component Types of AttributeValueChangeDefinition_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export
const _extension_additions_list_spec_for_AttributeValueChangeDefinition_Item: $.ComponentSpec[] = [

];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_AttributeValueChangeDefinition_Item */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AttributeValueChangeDefinition_Item */
let _cached_decoder_for_AttributeValueChangeDefinition_Item: $.ASN1Decoder<AttributeValueChangeDefinition_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AttributeValueChangeDefinition_Item */

/* START_OF_SYMBOL_DEFINITION _decode_AttributeValueChangeDefinition_Item */
/**
 * @summary Decodes an ASN.1 element into a(n) AttributeValueChangeDefinition_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AttributeValueChangeDefinition_Item} The decoded data structure.
 */
export
function _decode_AttributeValueChangeDefinition_Item (el: _Element) {
    if (!_cached_decoder_for_AttributeValueChangeDefinition_Item) { _cached_decoder_for_AttributeValueChangeDefinition_Item = function (el: _Element): AttributeValueChangeDefinition_Item {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let attributeId!: AttributeId;
    let oldAttributeValue: OPTIONAL<_Element>;
    let newAttributeValue!: _Element;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "attributeId": (_el: _Element): void => { attributeId = _decode_AttributeId(_el); },
        "oldAttributeValue": (_el: _Element): void => { oldAttributeValue = $._decode_implicit<_Element>(() => $._decodeAny)(_el); },
        "newAttributeValue": (_el: _Element): void => { newAttributeValue = $._decode_implicit<_Element>(() => $._decodeAny)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_AttributeValueChangeDefinition_Item,
        _extension_additions_list_spec_for_AttributeValueChangeDefinition_Item,
        _root_component_type_list_2_spec_for_AttributeValueChangeDefinition_Item,
        undefined,
    );
    return new AttributeValueChangeDefinition_Item( /* SEQUENCE_CONSTRUCTOR_CALL */
        attributeId,
        oldAttributeValue,
        newAttributeValue
    );
}; }
    return _cached_decoder_for_AttributeValueChangeDefinition_Item(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AttributeValueChangeDefinition_Item */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AttributeValueChangeDefinition_Item */
let _cached_encoder_for_AttributeValueChangeDefinition_Item: $.ASN1Encoder<AttributeValueChangeDefinition_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AttributeValueChangeDefinition_Item */

/* START_OF_SYMBOL_DEFINITION _encode_AttributeValueChangeDefinition_Item */
/**
 * @summary Encodes a(n) AttributeValueChangeDefinition_Item into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttributeValueChangeDefinition_Item, encoded as an ASN.1 Element.
 */
export
function _encode_AttributeValueChangeDefinition_Item (value: AttributeValueChangeDefinition_Item, elGetter: $.ASN1Encoder<AttributeValueChangeDefinition_Item>) {
    if (!_cached_encoder_for_AttributeValueChangeDefinition_Item) { _cached_encoder_for_AttributeValueChangeDefinition_Item = function (value: AttributeValueChangeDefinition_Item, elGetter: $.ASN1Encoder<AttributeValueChangeDefinition_Item>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_AttributeId(value.attributeId, $.BER),
            /* IF_ABSENT  */ ((value.oldAttributeValue === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeAny, $.BER)(value.oldAttributeValue, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeAny, $.BER)(value.newAttributeValue, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_AttributeValueChangeDefinition_Item(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AttributeValueChangeDefinition_Item */

/* eslint-enable */
