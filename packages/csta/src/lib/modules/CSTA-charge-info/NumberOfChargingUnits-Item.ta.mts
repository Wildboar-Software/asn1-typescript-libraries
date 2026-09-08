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



/**
 * @summary NumberOfChargingUnits_Item
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NumberOfChargingUnits-Item ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @class
 */
export
class NumberOfChargingUnits_Item {
    constructor (
        /**
         * @summary `chargingUnits`.
         * @public
         * @readonly
         */
        readonly chargingUnits: INTEGER,
        /**
         * @summary `typeOfUnits`.
         * @public
         * @readonly
         */
        readonly typeOfUnits: OPTIONAL<OCTET_STRING>
    ) {}

    /**
     * @summary Restructures an object into a NumberOfChargingUnits_Item
     * @description
     * 
     * This takes an `object` and converts it to a `NumberOfChargingUnits_Item`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `NumberOfChargingUnits_Item`.
     * @returns {NumberOfChargingUnits_Item}
     */
    public static _from_object (_o: { [_K in keyof (NumberOfChargingUnits_Item)]: (NumberOfChargingUnits_Item)[_K] }): NumberOfChargingUnits_Item {
        return new NumberOfChargingUnits_Item(_o.chargingUnits, _o.typeOfUnits);
    }


}

/**
 * @summary The Leading Root Component Types of NumberOfChargingUnits_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_NumberOfChargingUnits_Item: $.ComponentSpec[] = [
    new $.ComponentSpec("chargingUnits", false, $.hasTag(_TagClass.universal, 2), undefined, undefined),
    new $.ComponentSpec("typeOfUnits", true, $.hasTag(_TagClass.universal, 4), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of NumberOfChargingUnits_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_NumberOfChargingUnits_Item: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of NumberOfChargingUnits_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_NumberOfChargingUnits_Item: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_NumberOfChargingUnits_Item: $.ASN1Decoder<NumberOfChargingUnits_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NumberOfChargingUnits_Item
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NumberOfChargingUnits_Item (el: _Element): NumberOfChargingUnits_Item {
    if (!_cached_decoder_for_NumberOfChargingUnits_Item) { _cached_decoder_for_NumberOfChargingUnits_Item = function (el: _Element): NumberOfChargingUnits_Item {
    let chargingUnits!: INTEGER;
    let typeOfUnits: OPTIONAL<OCTET_STRING>;
    const callbacks: $.DecodingMap = {
        "chargingUnits": (_el: _Element): void => { chargingUnits = $._decodeInteger(_el); },
        "typeOfUnits": (_el: _Element): void => { typeOfUnits = $._decodeOctetString(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_NumberOfChargingUnits_Item,
        _extension_additions_list_spec_for_NumberOfChargingUnits_Item,
        _root_component_type_list_2_spec_for_NumberOfChargingUnits_Item,
        undefined,
    );
    return new NumberOfChargingUnits_Item(
        chargingUnits,
        typeOfUnits
    );
}; }
    return _cached_decoder_for_NumberOfChargingUnits_Item(el);
}

let _cached_encoder_for_NumberOfChargingUnits_Item: $.ASN1Encoder<NumberOfChargingUnits_Item> | null = null;

/**
 * @summary Encodes a(n) NumberOfChargingUnits_Item into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NumberOfChargingUnits_Item, encoded as an ASN.1 Element.
 */
export
function _encode_NumberOfChargingUnits_Item (value: NumberOfChargingUnits_Item, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NumberOfChargingUnits_Item) { _cached_encoder_for_NumberOfChargingUnits_Item = function (value: NumberOfChargingUnits_Item, elGetter: $.ASN1Encoder<NumberOfChargingUnits_Item>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodeInteger(value.chargingUnits, $.BER),
            /* IF_ABSENT  */ ((value.typeOfUnits === undefined) ? undefined : $._encodeOctetString(value.typeOfUnits, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_NumberOfChargingUnits_Item(value, elGetter);
}


/* eslint-enable */
