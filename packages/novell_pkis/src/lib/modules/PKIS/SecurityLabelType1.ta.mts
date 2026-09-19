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
import { Singletons, _decode_Singletons, _encode_Singletons } from "../PKIS/Singletons.ta.mjs";
// export { Singletons, _decode_Singletons, _encode_Singletons } from "../PKIS/Singletons.ta.mjs";


/**
 * @summary SecurityLabelType1
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SecurityLabelType1 ::= SEQUENCE {
 *  labelType1 INTEGER (0..255),
 *   -- The default should be 2, but DEFAULT implies OPTIONAL, which
 *   -- is not the intent. So the value has to be coded explicitly.
 *   -- Note that the label type for Version 1
 *   -- of Graded Authentication is 0 or 1.
 *   -- Byte sizes and reserved fields are omitted,
 *   -- because they are derivable from the ASN.1.
 *  secrecyLevel1 INTEGER (0..255),
 *   -- The default should be 0, but DEFAULT implies OPTIONAL, which
 *   -- is not the intent. So the value has to be coded explicitly.
 *   -- 0 = low secrecy, 255 = high secrecy
 *   -- It seems highly unlikely anyone would ever
 *   -- need more than 255 secrecy levels
 *  integrityLevel1      INTEGER (0..255),
 *   -- The default should be 0, but DEFAULT implies OPTIONAL, which
 *   -- is not the intent. So the value has to be coded explicitly.
 *   -- NOTE! 255 = low integrity, 0 = high integrity!
 *   -- It seems highly unlikely anyone would ever
 *   -- need more than 255 integrity levels
 *  secrecyCategories1   BIT STRING (SIZE(96)),
 *   -- The default should be FALSE, but DEFAULT implies OPTIONAL,
 *   -- which is not the intent. So the value has to be coded
 *   -- explicitly.
 *   -- 96 secrecy categories, 0 origin indexing
 *  integrityCategories1 BIT STRING (SIZE(64)),
 *   -- The default should be FALSE, but DEFAULT implies OPTIONAL,
 *   -- which is not the intent. So the value has to be coded
 *   -- explicitly.
 *   -- 64 integrity categories, 0 origin indexing
 *  secrecySingletons1 Singletons,
 *  integritySingletons1 Singletons
 * }
 * ```
 * 
 * @class
 */
export
class SecurityLabelType1 {
    constructor (
        /**
         * @summary `labelType1`.
         * @public
         * @readonly
         */
        readonly labelType1: INTEGER,
        /**
         * @summary `secrecyLevel1`.
         * @public
         * @readonly
         */
        readonly secrecyLevel1: INTEGER,
        /**
         * @summary `integrityLevel1`.
         * @public
         * @readonly
         */
        readonly integrityLevel1: INTEGER,
        /**
         * @summary `secrecyCategories1`.
         * @public
         * @readonly
         */
        readonly secrecyCategories1: BIT_STRING,
        /**
         * @summary `integrityCategories1`.
         * @public
         * @readonly
         */
        readonly integrityCategories1: BIT_STRING,
        /**
         * @summary `secrecySingletons1`.
         * @public
         * @readonly
         */
        readonly secrecySingletons1: Singletons,
        /**
         * @summary `integritySingletons1`.
         * @public
         * @readonly
         */
        readonly integritySingletons1: Singletons
    ) {}

    /**
     * @summary Restructures an object into a SecurityLabelType1
     * @description
     * 
     * This takes an `object` and converts it to a `SecurityLabelType1`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SecurityLabelType1`.
     * @returns {SecurityLabelType1}
     */
    public static _from_object (_o: { [_K in keyof (SecurityLabelType1)]: (SecurityLabelType1)[_K] }): SecurityLabelType1 {
        return new SecurityLabelType1(_o.labelType1, _o.secrecyLevel1, _o.integrityLevel1, _o.secrecyCategories1, _o.integrityCategories1, _o.secrecySingletons1, _o.integritySingletons1);
    }


}

/**
 * @summary The Leading Root Component Types of SecurityLabelType1
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SecurityLabelType1: $.ComponentSpec[] = [
    new $.ComponentSpec("labelType1", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("secrecyLevel1", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("integrityLevel1", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("secrecyCategories1", false, $.hasTag(_TagClass.universal, 3)),
    new $.ComponentSpec("integrityCategories1", false, $.hasTag(_TagClass.universal, 3)),
    new $.ComponentSpec("secrecySingletons1", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("integritySingletons1", false, $.hasTag(_TagClass.universal, 16))
];

/**
 * @summary The Trailing Root Component Types of SecurityLabelType1
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SecurityLabelType1: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SecurityLabelType1
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SecurityLabelType1: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SecurityLabelType1: $.ASN1Decoder<SecurityLabelType1> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SecurityLabelType1
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SecurityLabelType1 (el: _Element): SecurityLabelType1 {
    if (!_cached_decoder_for_SecurityLabelType1) { _cached_decoder_for_SecurityLabelType1 = function (el: _Element): SecurityLabelType1 {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 7) {
        throw new _ConstructionError("SecurityLabelType1 contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "labelType1";
    sequence[1].name = "secrecyLevel1";
    sequence[2].name = "integrityLevel1";
    sequence[3].name = "secrecyCategories1";
    sequence[4].name = "integrityCategories1";
    sequence[5].name = "secrecySingletons1";
    sequence[6].name = "integritySingletons1";
    let labelType1!: INTEGER;
    let secrecyLevel1!: INTEGER;
    let integrityLevel1!: INTEGER;
    let secrecyCategories1!: BIT_STRING;
    let integrityCategories1!: BIT_STRING;
    let secrecySingletons1!: Singletons;
    let integritySingletons1!: Singletons;
    labelType1 = $._decodeInteger(sequence[0]);
    secrecyLevel1 = $._decodeInteger(sequence[1]);
    integrityLevel1 = $._decodeInteger(sequence[2]);
    secrecyCategories1 = $._decodeBitString(sequence[3]);
    integrityCategories1 = $._decodeBitString(sequence[4]);
    secrecySingletons1 = _decode_Singletons(sequence[5]);
    integritySingletons1 = _decode_Singletons(sequence[6]);
    return new SecurityLabelType1(
        labelType1,
        secrecyLevel1,
        integrityLevel1,
        secrecyCategories1,
        integrityCategories1,
        secrecySingletons1,
        integritySingletons1,

    );
}; }
    return _cached_decoder_for_SecurityLabelType1(el);
}

let _cached_encoder_for_SecurityLabelType1: $.ASN1Encoder<SecurityLabelType1> | null = null;

/**
 * @summary Encodes a(n) SecurityLabelType1 into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SecurityLabelType1, encoded as an ASN.1 Element.
 */
export
function _encode_SecurityLabelType1 (value: SecurityLabelType1, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SecurityLabelType1) { _cached_encoder_for_SecurityLabelType1 = function (value: SecurityLabelType1, elGetter: $.ASN1Encoder<SecurityLabelType1>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodeInteger(value.labelType1, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.secrecyLevel1, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.integrityLevel1, $.BER),
            /* REQUIRED   */ $._encodeBitString(value.secrecyCategories1, $.BER),
            /* REQUIRED   */ $._encodeBitString(value.integrityCategories1, $.BER),
            /* REQUIRED   */ _encode_Singletons(value.secrecySingletons1, $.BER),
            /* REQUIRED   */ _encode_Singletons(value.integritySingletons1, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_SecurityLabelType1(value, elGetter);
}


/* eslint-enable */
