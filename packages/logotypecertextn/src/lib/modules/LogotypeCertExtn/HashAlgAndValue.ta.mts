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
import { AlgorithmIdentifier, _decode_AlgorithmIdentifier, _encode_AlgorithmIdentifier } from "../PKIX1Explicit88/AlgorithmIdentifier.ta.mjs";
// export { AlgorithmIdentifier, _decode_AlgorithmIdentifier, _encode_AlgorithmIdentifier } from "../PKIX1Explicit88/AlgorithmIdentifier.ta.mjs";


/**
 * @summary HashAlgAndValue
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * HashAlgAndValue ::= SEQUENCE {
 *    hashAlg         AlgorithmIdentifier,
 *    hashValue       OCTET STRING }
 * ```
 * 
 * @class
 */
export
class HashAlgAndValue {
    constructor (
        /**
         * @summary `hashAlg`.
         * @public
         * @readonly
         */
        readonly hashAlg: AlgorithmIdentifier,
        /**
         * @summary `hashValue`.
         * @public
         * @readonly
         */
        readonly hashValue: OCTET_STRING
    ) {}

    /**
     * @summary Restructures an object into a HashAlgAndValue
     * @description
     * 
     * This takes an `object` and converts it to a `HashAlgAndValue`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `HashAlgAndValue`.
     * @returns {HashAlgAndValue}
     */
    public static _from_object (_o: { [_K in keyof (HashAlgAndValue)]: (HashAlgAndValue)[_K] }): HashAlgAndValue {
        return new HashAlgAndValue(_o.hashAlg, _o.hashValue);
    }


}

/**
 * @summary The Leading Root Component Types of HashAlgAndValue
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_HashAlgAndValue: $.ComponentSpec[] = [
    new $.ComponentSpec("hashAlg", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("hashValue", false, $.hasTag(_TagClass.universal, 4))
];

/**
 * @summary The Trailing Root Component Types of HashAlgAndValue
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_HashAlgAndValue: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of HashAlgAndValue
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_HashAlgAndValue: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_HashAlgAndValue: $.ASN1Decoder<HashAlgAndValue> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) HashAlgAndValue
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_HashAlgAndValue (el: _Element): HashAlgAndValue {
    if (!_cached_decoder_for_HashAlgAndValue) { _cached_decoder_for_HashAlgAndValue = function (el: _Element): HashAlgAndValue {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("HashAlgAndValue contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "hashAlg";
    sequence[1].name = "hashValue";
    let hashAlg!: AlgorithmIdentifier;
    let hashValue!: OCTET_STRING;
    hashAlg = _decode_AlgorithmIdentifier(sequence[0]);
    hashValue = $._decodeOctetString(sequence[1]);
    return new HashAlgAndValue(
        hashAlg,
        hashValue,

    );
}; }
    return _cached_decoder_for_HashAlgAndValue(el);
}

let _cached_encoder_for_HashAlgAndValue: $.ASN1Encoder<HashAlgAndValue> | null = null;

/**
 * @summary Encodes a(n) HashAlgAndValue into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The HashAlgAndValue, encoded as an ASN.1 Element.
 */
export
function _encode_HashAlgAndValue (value: HashAlgAndValue, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_HashAlgAndValue) { _cached_encoder_for_HashAlgAndValue = function (value: HashAlgAndValue, elGetter: $.ASN1Encoder<HashAlgAndValue>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_AlgorithmIdentifier(value.hashAlg, $.BER),
            /* REQUIRED   */ $._encodeOctetString(value.hashValue, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_HashAlgAndValue(value, elGetter);
}


/* eslint-enable */
