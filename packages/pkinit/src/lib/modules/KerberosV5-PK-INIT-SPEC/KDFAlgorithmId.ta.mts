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
 * @summary KDFAlgorithmId
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * KDFAlgorithmId ::= SEQUENCE {
 *     kdf-id                  [0] OBJECT IDENTIFIER,
 *     ...
 * }
 * ```
 * 
 * @class
 */
export
class KDFAlgorithmId {
    constructor (
        /**
         * @summary `kdf_id`.
         * @public
         * @readonly
         */
        readonly kdf_id: OBJECT_IDENTIFIER,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a KDFAlgorithmId
     * @description
     * 
     * This takes an `object` and converts it to a `KDFAlgorithmId`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `KDFAlgorithmId`.
     * @returns {KDFAlgorithmId}
     */
    public static _from_object (_o: { [_K in keyof (KDFAlgorithmId)]: (KDFAlgorithmId)[_K] }): KDFAlgorithmId {
        return new KDFAlgorithmId(_o.kdf_id, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of KDFAlgorithmId
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_KDFAlgorithmId: $.ComponentSpec[] = [
    new $.ComponentSpec("kdf-id", false, $.hasTag(_TagClass.context, 0))
];

/**
 * @summary The Trailing Root Component Types of KDFAlgorithmId
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_KDFAlgorithmId: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of KDFAlgorithmId
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_KDFAlgorithmId: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_KDFAlgorithmId: $.ASN1Decoder<KDFAlgorithmId> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) KDFAlgorithmId
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_KDFAlgorithmId (el: _Element): KDFAlgorithmId {
    if (!_cached_decoder_for_KDFAlgorithmId) { _cached_decoder_for_KDFAlgorithmId = function (el: _Element): KDFAlgorithmId {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 1) {
        throw new _ConstructionError("KDFAlgorithmId contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "kdf-id";
    let kdf_id!: OBJECT_IDENTIFIER;
    kdf_id = $._decode_explicit<OBJECT_IDENTIFIER>(() => $._decodeObjectIdentifier)(sequence[0]);
    return new KDFAlgorithmId(
        kdf_id,
        sequence.slice(1),
    );
}; }
    return _cached_decoder_for_KDFAlgorithmId(el);
}

let _cached_encoder_for_KDFAlgorithmId: $.ASN1Encoder<KDFAlgorithmId> | null = null;

/**
 * @summary Encodes a(n) KDFAlgorithmId into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The KDFAlgorithmId, encoded as an ASN.1 Element.
 */
export
function _encode_KDFAlgorithmId (value: KDFAlgorithmId, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_KDFAlgorithmId) { _cached_encoder_for_KDFAlgorithmId = function (value: KDFAlgorithmId, elGetter: $.ASN1Encoder<KDFAlgorithmId>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => $._encodeObjectIdentifier, $.BER)(value.kdf_id, $.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_KDFAlgorithmId(value, elGetter);
}


/* eslint-enable */
