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
import { AlgorithmIdentifier, _decode_AlgorithmIdentifier, _encode_AlgorithmIdentifier } from "../AuthenticationFramework/AlgorithmIdentifier.ta.mjs";
// export { AlgorithmIdentifier, _decode_AlgorithmIdentifier, _encode_AlgorithmIdentifier } from "../AuthenticationFramework/AlgorithmIdentifier.ta.mjs";


/**
 * @summary HASH
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * HASH{ToBeHashed} ::= SEQUENCE {
 *   algorithmIdentifier  AlgorithmIdentifier{{SupportedAlgorithms}},
 *   hashValue            BIT STRING (CONSTRAINED BY {
 *    -- shall be the result of applying a hashing procedure to the DER-encoded
 *    -- octets of a value of -- ToBeHashed } ),
 *   ... }
 * ```
 * 
 * @class
 */
export
class HASH<ToBeHashed> {
    constructor (
        /**
         * @summary `algorithmIdentifier`.
         * @public
         * @readonly
         */
        readonly algorithmIdentifier: AlgorithmIdentifier,
        /**
         * @summary `hashValue`.
         * @public
         * @readonly
         */
        readonly hashValue: BIT_STRING,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a HASH
     * @description
     * 
     * This takes an `object` and converts it to a `HASH`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `HASH`.
     * @returns {HASH}
     */
    public static _from_object (_o: { [_K in keyof (HASH<any>)]: (HASH<any>)[_K] }): HASH<any> {
        return new HASH(_o.algorithmIdentifier, _o.hashValue, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of HASH
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_HASH: $.ComponentSpec[] = [
    new $.ComponentSpec("algorithmIdentifier", false, $.hasTag(_TagClass.universal, 16), undefined, undefined),
    new $.ComponentSpec("hashValue", false, $.hasTag(_TagClass.universal, 3), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of HASH
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_HASH: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of HASH
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_HASH: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_HASH: $.ASN1Decoder<HASH<ToBeHashed>> | null = null;

/**
 * @summary Returns a function that will decode an ASN.1 element into a(n) HASH
 * @function
 * @returns A function that will decode an ASN.1 element.
 */
export
function _get_decoder_for_HASH<ToBeHashed>(_decode_ToBeHashed: $.ASN1Decoder<ToBeHashed>): $.ASN1Decoder<HASH<ToBeHashed>> {
    return function <ToBeHashed>(el: _Element): HASH<ToBeHashed> {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("HASH contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "algorithmIdentifier";
    sequence[1].name = "hashValue";
    let algorithmIdentifier!: AlgorithmIdentifier;
    let hashValue!: BIT_STRING;
    algorithmIdentifier = _decode_AlgorithmIdentifier(sequence[0]);
    hashValue = $._decodeBitString(sequence[1]);
    return new HASH<ToBeHashed>(
        algorithmIdentifier,
        hashValue,
        sequence.slice(2),
    );
};
}

let _cached_encoder_for_HASH: $.ASN1Encoder<HASH<ToBeHashed>> | null = null;

/**
 * @summary Returns a function that will encode a(n) HASH into an ASN.1 Element.
 * @function
 * @returns A function that will encode a(n) HASH as an ASN.1 element.
 */
export
function _get_encoder_for_HASH<ToBeHashed>(_encode_ToBeHashed: $.ASN1Encoder<ToBeHashed>): $.ASN1Encoder<HASH<ToBeHashed>> {
    return function (value: HASH<ToBeHashed>, elGetter: $.ASN1Encoder<HASH<ToBeHashed>>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_AlgorithmIdentifier(value.algorithmIdentifier, $.BER),
            /* REQUIRED   */ $._encodeBitString(value.hashValue, $.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
};
}

/* eslint-enable */
