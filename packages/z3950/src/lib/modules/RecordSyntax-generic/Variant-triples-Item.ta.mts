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
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Variant_triples_Item_value, _decode_Variant_triples_Item_value, _encode_Variant_triples_Item_value } from "../RecordSyntax-generic/Variant-triples-Item-value.ta.mjs";
// export { Variant_triples_Item_value, _decode_Variant_triples_Item_value, _encode_Variant_triples_Item_value } from "../RecordSyntax-generic/Variant-triples-Item-value.ta.mjs";


/**
 * @summary Variant_triples_Item
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Variant-triples-Item ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @class
 */
export
class Variant_triples_Item {
    constructor (
        /**
         * @summary `variantSetId`.
         * @public
         * @readonly
         */
        readonly variantSetId: OPTIONAL<OBJECT_IDENTIFIER>,
        /**
         * @summary `class_`.
         * @public
         * @readonly
         */
        readonly class_: INTEGER,
        /**
         * @summary `type_`.
         * @public
         * @readonly
         */
        readonly type_: INTEGER,
        /**
         * @summary `value`.
         * @public
         * @readonly
         */
        readonly value: Variant_triples_Item_value
    ) {}

    /**
     * @summary Restructures an object into a Variant_triples_Item
     * @description
     * 
     * This takes an `object` and converts it to a `Variant_triples_Item`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Variant_triples_Item`.
     * @returns {Variant_triples_Item}
     */
    public static _from_object (_o: { [_K in keyof (Variant_triples_Item)]: (Variant_triples_Item)[_K] }): Variant_triples_Item {
        return new Variant_triples_Item(_o.variantSetId, _o.class_, _o.type_, _o.value);
    }


}

/**
 * @summary The Leading Root Component Types of Variant_triples_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Variant_triples_Item: $.ComponentSpec[] = [
    new $.ComponentSpec("variantSetId", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("class", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("type", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("value", false, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of Variant_triples_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Variant_triples_Item: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Variant_triples_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Variant_triples_Item: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Variant_triples_Item: $.ASN1Decoder<Variant_triples_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Variant_triples_Item
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Variant_triples_Item (el: _Element): Variant_triples_Item {
    if (!_cached_decoder_for_Variant_triples_Item) { _cached_decoder_for_Variant_triples_Item = function (el: _Element): Variant_triples_Item {
    let variantSetId: OPTIONAL<OBJECT_IDENTIFIER>;
    let class_!: INTEGER;
    let type_!: INTEGER;
    let value!: Variant_triples_Item_value;
    const callbacks: $.DecodingMap = {
        "variantSetId": (_el: _Element): void => { variantSetId = $._decode_implicit<OBJECT_IDENTIFIER>(() => $._decodeObjectIdentifier)(_el); },
        "class": (_el: _Element): void => { class_ = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "type": (_el: _Element): void => { type_ = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "value": (_el: _Element): void => { value = $._decode_explicit<Variant_triples_Item_value>(() => _decode_Variant_triples_Item_value)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_Variant_triples_Item,
        _extension_additions_list_spec_for_Variant_triples_Item,
        _root_component_type_list_2_spec_for_Variant_triples_Item,
        undefined,
    );
    return new Variant_triples_Item(
        variantSetId,
        class_,
        type_,
        value
    );
}; }
    return _cached_decoder_for_Variant_triples_Item(el);
}

let _cached_encoder_for_Variant_triples_Item: $.ASN1Encoder<Variant_triples_Item> | null = null;

/**
 * @summary Encodes a(n) Variant_triples_Item into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Variant_triples_Item, encoded as an ASN.1 Element.
 */
export
function _encode_Variant_triples_Item (value: Variant_triples_Item, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Variant_triples_Item) { _cached_encoder_for_Variant_triples_Item = function (value: Variant_triples_Item, elGetter: $.ASN1Encoder<Variant_triples_Item>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.variantSetId === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => $._encodeObjectIdentifier, $.BER)(value.variantSetId, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER)(value.class_, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeInteger, $.BER)(value.type_, $.BER),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 3, () => _encode_Variant_triples_Item_value, $.BER)(value.value, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_Variant_triples_Item(value, elGetter);
}


/* eslint-enable */
