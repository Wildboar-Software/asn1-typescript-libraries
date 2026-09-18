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



/**
 * @summary BKQcontent_stuser_Item
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BKQcontent-stuser-Item ::= SEQUENCE {
 *     utag INTEGER,
 *     uvalue OCTET STRING
 * }
 * ```
 * 
 * @class
 */
export
class BKQcontent_stuser_Item {
    constructor (
        /**
         * @summary `utag`.
         * @public
         * @readonly
         */
        readonly utag: INTEGER,
        /**
         * @summary `uvalue`.
         * @public
         * @readonly
         */
        readonly uvalue: OCTET_STRING
    ) {}

    /**
     * @summary Restructures an object into a BKQcontent_stuser_Item
     * @description
     * 
     * This takes an `object` and converts it to a `BKQcontent_stuser_Item`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `BKQcontent_stuser_Item`.
     * @returns {BKQcontent_stuser_Item}
     */
    public static _from_object (_o: { [_K in keyof (BKQcontent_stuser_Item)]: (BKQcontent_stuser_Item)[_K] }): BKQcontent_stuser_Item {
        return new BKQcontent_stuser_Item(_o.utag, _o.uvalue);
    }


}

/**
 * @summary The Leading Root Component Types of BKQcontent_stuser_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_BKQcontent_stuser_Item: $.ComponentSpec[] = [
    new $.ComponentSpec("utag", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("uvalue", false, $.hasTag(_TagClass.universal, 4))
];

/**
 * @summary The Trailing Root Component Types of BKQcontent_stuser_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_BKQcontent_stuser_Item: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of BKQcontent_stuser_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_BKQcontent_stuser_Item: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_BKQcontent_stuser_Item: $.ASN1Decoder<BKQcontent_stuser_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) BKQcontent_stuser_Item
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_BKQcontent_stuser_Item (el: _Element): BKQcontent_stuser_Item {
    if (!_cached_decoder_for_BKQcontent_stuser_Item) { _cached_decoder_for_BKQcontent_stuser_Item = function (el: _Element): BKQcontent_stuser_Item {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("BKQcontent-stuser-Item contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "utag";
    sequence[1].name = "uvalue";
    let utag!: INTEGER;
    let uvalue!: OCTET_STRING;
    utag = $._decodeInteger(sequence[0]);
    uvalue = $._decodeOctetString(sequence[1]);
    return new BKQcontent_stuser_Item(
        utag,
        uvalue,

    );
}; }
    return _cached_decoder_for_BKQcontent_stuser_Item(el);
}

let _cached_encoder_for_BKQcontent_stuser_Item: $.ASN1Encoder<BKQcontent_stuser_Item> | null = null;

/**
 * @summary Encodes a(n) BKQcontent_stuser_Item into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BKQcontent_stuser_Item, encoded as an ASN.1 Element.
 */
export
function _encode_BKQcontent_stuser_Item (value: BKQcontent_stuser_Item, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_BKQcontent_stuser_Item) { _cached_encoder_for_BKQcontent_stuser_Item = function (value: BKQcontent_stuser_Item, elGetter: $.ASN1Encoder<BKQcontent_stuser_Item>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodeInteger(value.utag, $.BER),
            /* REQUIRED   */ $._encodeOctetString(value.uvalue, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_BKQcontent_stuser_Item(value, elGetter);
}


/* eslint-enable */
