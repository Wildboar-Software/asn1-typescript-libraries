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
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
// export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { SupportedAttributes } from "../InformationFramework/SupportedAttributes.osa.mjs";
// export { SupportedAttributes } from "../InformationFramework/SupportedAttributes.osa.mjs";
import { Context, _decode_Context, _encode_Context } from "../InformationFramework/Context.ta.mjs";
// export { Context, _decode_Context, _encode_Context } from "../InformationFramework/Context.ta.mjs";


/**
 * @summary Attribute_valuesWithContext_Item
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Attribute-valuesWithContext-Item ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @class
 */
export
class Attribute_valuesWithContext_Item {
    constructor (
        /**
         * @summary `value`.
         * @public
         * @readonly
         */
        readonly value: _Element,
        /**
         * @summary `contextList`.
         * @public
         * @readonly
         */
        readonly contextList: Context[],
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a Attribute_valuesWithContext_Item
     * @description
     * 
     * This takes an `object` and converts it to a `Attribute_valuesWithContext_Item`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Attribute_valuesWithContext_Item`.
     * @returns {Attribute_valuesWithContext_Item}
     */
    public static _from_object (_o: { [_K in keyof (Attribute_valuesWithContext_Item)]: (Attribute_valuesWithContext_Item)[_K] }): Attribute_valuesWithContext_Item {
        return new Attribute_valuesWithContext_Item(_o.value, _o.contextList, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of Attribute_valuesWithContext_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Attribute_valuesWithContext_Item: $.ComponentSpec[] = [
    new $.ComponentSpec("value", false, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec("contextList", false, $.hasTag(_TagClass.universal, 17), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of Attribute_valuesWithContext_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Attribute_valuesWithContext_Item: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Attribute_valuesWithContext_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Attribute_valuesWithContext_Item: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Attribute_valuesWithContext_Item: $.ASN1Decoder<Attribute_valuesWithContext_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Attribute_valuesWithContext_Item
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Attribute_valuesWithContext_Item (el: _Element): Attribute_valuesWithContext_Item {
    if (!_cached_decoder_for_Attribute_valuesWithContext_Item) { _cached_decoder_for_Attribute_valuesWithContext_Item = function (el: _Element): Attribute_valuesWithContext_Item {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("Attribute-valuesWithContext-Item contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "value";
    sequence[1].name = "contextList";
    let value!: _Element;
    let contextList!: Context[];
    value = $._decodeAny(sequence[0]);
    contextList = $._decodeSetOf<Context>(() => _decode_Context)(sequence[1]);
    return new Attribute_valuesWithContext_Item(
        value,
        contextList,
        sequence.slice(2),
    );
}; }
    return _cached_decoder_for_Attribute_valuesWithContext_Item(el);
}

let _cached_encoder_for_Attribute_valuesWithContext_Item: $.ASN1Encoder<Attribute_valuesWithContext_Item> | null = null;

/**
 * @summary Encodes a(n) Attribute_valuesWithContext_Item into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Attribute_valuesWithContext_Item, encoded as an ASN.1 Element.
 */
export
function _encode_Attribute_valuesWithContext_Item (value: Attribute_valuesWithContext_Item, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Attribute_valuesWithContext_Item) { _cached_encoder_for_Attribute_valuesWithContext_Item = function (value: Attribute_valuesWithContext_Item, elGetter: $.ASN1Encoder<Attribute_valuesWithContext_Item>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodeAny(value.value, $.BER),
            /* REQUIRED   */ $._encodeSetOf<Context>(() => _encode_Context, $.BER)(value.contextList, $.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_Attribute_valuesWithContext_Item(value, elGetter);
}


/* eslint-enable */
