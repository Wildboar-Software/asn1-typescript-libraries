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
 * @summary MSRPPath
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MSRPPath ::= SEQUENCE
 * {
 *     path [1] UTF8String
 * }
 * ```
 * 
 * @class
 */
export
class MSRPPath {
    constructor (
        /**
         * @summary `path`.
         * @public
         * @readonly
         */
        readonly path: UTF8String
    ) {}

    /**
     * @summary Restructures an object into a MSRPPath
     * @description
     * 
     * This takes an `object` and converts it to a `MSRPPath`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MSRPPath`.
     * @returns {MSRPPath}
     */
    public static _from_object (_o: { [_K in keyof (MSRPPath)]: (MSRPPath)[_K] }): MSRPPath {
        return new MSRPPath(_o.path);
    }


}

/**
 * @summary The Leading Root Component Types of MSRPPath
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MSRPPath: $.ComponentSpec[] = [
    new $.ComponentSpec("path", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of MSRPPath
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MSRPPath: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MSRPPath
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MSRPPath: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MSRPPath: $.ASN1Decoder<MSRPPath> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MSRPPath
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MSRPPath (el: _Element): MSRPPath {
    if (!_cached_decoder_for_MSRPPath) { _cached_decoder_for_MSRPPath = function (el: _Element): MSRPPath {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 1) {
        throw new _ConstructionError("MSRPPath contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "path";
    let path!: UTF8String;
    path = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(sequence[0]);
    return new MSRPPath(
        path,

    );
}; }
    return _cached_decoder_for_MSRPPath(el);
}

let _cached_encoder_for_MSRPPath: $.ASN1Encoder<MSRPPath> | null = null;

/**
 * @summary Encodes a(n) MSRPPath into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MSRPPath, encoded as an ASN.1 Element.
 */
export
function _encode_MSRPPath (value: MSRPPath, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MSRPPath) { _cached_encoder_for_MSRPPath = function (value: MSRPPath, elGetter: $.ASN1Encoder<MSRPPath>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeUTF8String, $.BER)(value.path, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_MSRPPath(value, elGetter);
}


/* eslint-enable */
