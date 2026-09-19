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
import { AreaOfInterest, _decode_AreaOfInterest, _encode_AreaOfInterest } from "../TS33128Payloads/AreaOfInterest.ta.mjs";
// export { AreaOfInterest, _decode_AreaOfInterest, _encode_AreaOfInterest } from "../TS33128Payloads/AreaOfInterest.ta.mjs";


/**
 * @summary AreaOfInterestItem
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AreaOfInterestItem ::= SEQUENCE
 * {
 *     areaOfInterest  [1] AreaOfInterest
 * }
 * ```
 * 
 * @class
 */
export
class AreaOfInterestItem {
    constructor (
        /**
         * @summary `areaOfInterest`.
         * @public
         * @readonly
         */
        readonly areaOfInterest: AreaOfInterest
    ) {}

    /**
     * @summary Restructures an object into a AreaOfInterestItem
     * @description
     * 
     * This takes an `object` and converts it to a `AreaOfInterestItem`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AreaOfInterestItem`.
     * @returns {AreaOfInterestItem}
     */
    public static _from_object (_o: { [_K in keyof (AreaOfInterestItem)]: (AreaOfInterestItem)[_K] }): AreaOfInterestItem {
        return new AreaOfInterestItem(_o.areaOfInterest);
    }


}

/**
 * @summary The Leading Root Component Types of AreaOfInterestItem
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AreaOfInterestItem: $.ComponentSpec[] = [
    new $.ComponentSpec("areaOfInterest", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of AreaOfInterestItem
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AreaOfInterestItem: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AreaOfInterestItem
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AreaOfInterestItem: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AreaOfInterestItem: $.ASN1Decoder<AreaOfInterestItem> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AreaOfInterestItem
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AreaOfInterestItem (el: _Element): AreaOfInterestItem {
    if (!_cached_decoder_for_AreaOfInterestItem) { _cached_decoder_for_AreaOfInterestItem = function (el: _Element): AreaOfInterestItem {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 1) {
        throw new _ConstructionError("AreaOfInterestItem contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "areaOfInterest";
    let areaOfInterest!: AreaOfInterest;
    areaOfInterest = $._decode_implicit<AreaOfInterest>(() => _decode_AreaOfInterest)(sequence[0]);
    return new AreaOfInterestItem(
        areaOfInterest,

    );
}; }
    return _cached_decoder_for_AreaOfInterestItem(el);
}

let _cached_encoder_for_AreaOfInterestItem: $.ASN1Encoder<AreaOfInterestItem> | null = null;

/**
 * @summary Encodes a(n) AreaOfInterestItem into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AreaOfInterestItem, encoded as an ASN.1 Element.
 */
export
function _encode_AreaOfInterestItem (value: AreaOfInterestItem, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AreaOfInterestItem) { _cached_encoder_for_AreaOfInterestItem = function (value: AreaOfInterestItem, elGetter: $.ASN1Encoder<AreaOfInterestItem>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_AreaOfInterest, $.BER)(value.areaOfInterest, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_AreaOfInterestItem(value, elGetter);
}


/* eslint-enable */
