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
import { EpcFormat_fields_Item_charField, _decode_EpcFormat_fields_Item_charField, _encode_EpcFormat_fields_Item_charField } from "../SelectedAttributeTypes/EpcFormat-fields-Item-charField.ta.mjs";
// export { EpcFormat_fields_Item_charField, _decode_EpcFormat_fields_Item_charField, _encode_EpcFormat_fields_Item_charField } from "../SelectedAttributeTypes/EpcFormat-fields-Item-charField.ta.mjs";
import { EpcFormat_fields_Item_result, _enum_for_EpcFormat_fields_Item_result, EpcFormat_fields_Item_result_numericPad /* IMPORTED_LONG_ENUMERATION_ITEM */, numericPad /* IMPORTED_SHORT_ENUMERATION_ITEM */, EpcFormat_fields_Item_result_numeric /* IMPORTED_LONG_ENUMERATION_ITEM */, numeric /* IMPORTED_SHORT_ENUMERATION_ITEM */, EpcFormat_fields_Item_result_alpha7bits /* IMPORTED_LONG_ENUMERATION_ITEM */, alpha7bits /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_EpcFormat_fields_Item_result, _encode_EpcFormat_fields_Item_result } from "../SelectedAttributeTypes/EpcFormat-fields-Item-result.ta.mjs";
// export { EpcFormat_fields_Item_result, _enum_for_EpcFormat_fields_Item_result, EpcFormat_fields_Item_result_numericPad /* IMPORTED_LONG_ENUMERATION_ITEM */, numericPad /* IMPORTED_SHORT_ENUMERATION_ITEM */, EpcFormat_fields_Item_result_numeric /* IMPORTED_LONG_ENUMERATION_ITEM */, numeric /* IMPORTED_SHORT_ENUMERATION_ITEM */, EpcFormat_fields_Item_result_alpha7bits /* IMPORTED_LONG_ENUMERATION_ITEM */, alpha7bits /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_EpcFormat_fields_Item_result, _encode_EpcFormat_fields_Item_result } from "../SelectedAttributeTypes/EpcFormat-fields-Item-result.ta.mjs";


/**
 * @summary EpcFormat_fields_Item
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EpcFormat-fields-Item ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @class
 */
export
class EpcFormat_fields_Item {
    constructor (
        /**
         * @summary `bits`.
         * @public
         * @readonly
         */
        readonly bits: INTEGER,
        /**
         * @summary `charField`.
         * @public
         * @readonly
         */
        readonly charField: EpcFormat_fields_Item_charField,
        /**
         * @summary `result`.
         * @public
         * @readonly
         */
        readonly result: OPTIONAL<EpcFormat_fields_Item_result>
    ) {}

    /**
     * @summary Restructures an object into a EpcFormat_fields_Item
     * @description
     * 
     * This takes an `object` and converts it to a `EpcFormat_fields_Item`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EpcFormat_fields_Item`.
     * @returns {EpcFormat_fields_Item}
     */
    public static _from_object (_o: { [_K in keyof (EpcFormat_fields_Item)]: (EpcFormat_fields_Item)[_K] }): EpcFormat_fields_Item {
        return new EpcFormat_fields_Item(_o.bits, _o.charField, _o.result);
    }

    /**
     * @summary Getter that returns the default value for `result`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_result () { return EpcFormat_fields_Item_result_numericPad; }        /**
         * @summary The enum used as the type of the component `result`
         * @public
         * @static
         */

    public static _enum_for_result = _enum_for_EpcFormat_fields_Item_result;
}

/**
 * @summary The Leading Root Component Types of EpcFormat_fields_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EpcFormat_fields_Item: $.ComponentSpec[] = [
    new $.ComponentSpec("bits", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("charField", false, $.hasAnyTag),
    new $.ComponentSpec("result", true, $.hasTag(_TagClass.universal, 10))
];

/**
 * @summary The Trailing Root Component Types of EpcFormat_fields_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EpcFormat_fields_Item: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EpcFormat_fields_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EpcFormat_fields_Item: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EpcFormat_fields_Item: $.ASN1Decoder<EpcFormat_fields_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EpcFormat_fields_Item
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EpcFormat_fields_Item (el: _Element): EpcFormat_fields_Item {
    if (!_cached_decoder_for_EpcFormat_fields_Item) { _cached_decoder_for_EpcFormat_fields_Item = function (el: _Element): EpcFormat_fields_Item {
    let bits!: INTEGER;
    let charField!: EpcFormat_fields_Item_charField;
    let result: OPTIONAL<EpcFormat_fields_Item_result> = EpcFormat_fields_Item._default_value_for_result;
    const callbacks: $.DecodingMap = {
        "bits": (_el: _Element): void => { bits = $._decodeInteger(_el); },
        "charField": (_el: _Element): void => { charField = _decode_EpcFormat_fields_Item_charField(_el); },
        "result": (_el: _Element): void => { result = _decode_EpcFormat_fields_Item_result(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_EpcFormat_fields_Item,
        _extension_additions_list_spec_for_EpcFormat_fields_Item,
        _root_component_type_list_2_spec_for_EpcFormat_fields_Item,
        undefined,
    );
    return new EpcFormat_fields_Item(
        bits,
        charField,
        result
    );
}; }
    return _cached_decoder_for_EpcFormat_fields_Item(el);
}

let _cached_encoder_for_EpcFormat_fields_Item: $.ASN1Encoder<EpcFormat_fields_Item> | null = null;

/**
 * @summary Encodes a(n) EpcFormat_fields_Item into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EpcFormat_fields_Item, encoded as an ASN.1 Element.
 */
export
function _encode_EpcFormat_fields_Item (value: EpcFormat_fields_Item, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EpcFormat_fields_Item) { _cached_encoder_for_EpcFormat_fields_Item = function (value: EpcFormat_fields_Item, elGetter: $.ASN1Encoder<EpcFormat_fields_Item>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodeInteger(value.bits, $.BER),
            /* REQUIRED   */ _encode_EpcFormat_fields_Item_charField(value.charField, $.BER),
            /* IF_DEFAULT */ (value.result === undefined || $.deepEq(value.result, EpcFormat_fields_Item._default_value_for_result) ? undefined : _encode_EpcFormat_fields_Item_result(value.result, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_EpcFormat_fields_Item(value, elGetter);
}


/* eslint-enable */
