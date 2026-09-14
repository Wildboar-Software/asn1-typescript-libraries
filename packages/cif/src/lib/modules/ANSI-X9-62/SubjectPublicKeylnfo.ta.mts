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
import { Algorithmldentifier, _decode_Algorithmldentifier, _encode_Algorithmldentifier } from "../ANSI-X9-62/Algorithmldentifier.ta.mjs";
// export { Algorithmldentifier, _decode_Algorithmldentifier, _encode_Algorithmldentifier } from "../ANSI-X9-62/Algorithmldentifier.ta.mjs";


/**
 * @summary SubjectPublicKeylnfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SubjectPublicKeylnfo ::= SEQUENCE {
 *     algorithm           Algorithmldentifier {{ECPKAlgorithms}},
 *     subjectPublicKey    BIT STRING
 * }
 * ```
 * 
 * @class
 */
export
class SubjectPublicKeylnfo {
    constructor (
        /**
         * @summary `algorithm`.
         * @public
         * @readonly
         */
        readonly algorithm: Algorithmldentifier,
        /**
         * @summary `subjectPublicKey`.
         * @public
         * @readonly
         */
        readonly subjectPublicKey: BIT_STRING
    ) {}

    /**
     * @summary Restructures an object into a SubjectPublicKeylnfo
     * @description
     * 
     * This takes an `object` and converts it to a `SubjectPublicKeylnfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SubjectPublicKeylnfo`.
     * @returns {SubjectPublicKeylnfo}
     */
    public static _from_object (_o: { [_K in keyof (SubjectPublicKeylnfo)]: (SubjectPublicKeylnfo)[_K] }): SubjectPublicKeylnfo {
        return new SubjectPublicKeylnfo(_o.algorithm, _o.subjectPublicKey);
    }


}

/**
 * @summary The Leading Root Component Types of SubjectPublicKeylnfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SubjectPublicKeylnfo: $.ComponentSpec[] = [
    new $.ComponentSpec("algorithm", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("subjectPublicKey", false, $.hasTag(_TagClass.universal, 3))
];

/**
 * @summary The Trailing Root Component Types of SubjectPublicKeylnfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SubjectPublicKeylnfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SubjectPublicKeylnfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SubjectPublicKeylnfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SubjectPublicKeylnfo: $.ASN1Decoder<SubjectPublicKeylnfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SubjectPublicKeylnfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SubjectPublicKeylnfo (el: _Element): SubjectPublicKeylnfo {
    if (!_cached_decoder_for_SubjectPublicKeylnfo) { _cached_decoder_for_SubjectPublicKeylnfo = function (el: _Element): SubjectPublicKeylnfo {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("SubjectPublicKeylnfo contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "algorithm";
    sequence[1].name = "subjectPublicKey";
    let algorithm!: Algorithmldentifier;
    let subjectPublicKey!: BIT_STRING;
    algorithm = _decode_Algorithmldentifier(sequence[0]);
    subjectPublicKey = $._decodeBitString(sequence[1]);
    return new SubjectPublicKeylnfo(
        algorithm,
        subjectPublicKey,

    );
}; }
    return _cached_decoder_for_SubjectPublicKeylnfo(el);
}

let _cached_encoder_for_SubjectPublicKeylnfo: $.ASN1Encoder<SubjectPublicKeylnfo> | null = null;

/**
 * @summary Encodes a(n) SubjectPublicKeylnfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SubjectPublicKeylnfo, encoded as an ASN.1 Element.
 */
export
function _encode_SubjectPublicKeylnfo (value: SubjectPublicKeylnfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SubjectPublicKeylnfo) { _cached_encoder_for_SubjectPublicKeylnfo = function (value: SubjectPublicKeylnfo, elGetter: $.ASN1Encoder<SubjectPublicKeylnfo>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_Algorithmldentifier(value.algorithm, $.BER),
            /* REQUIRED   */ $._encodeBitString(value.subjectPublicKey, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_SubjectPublicKeylnfo(value, elGetter);
}


/* eslint-enable */
