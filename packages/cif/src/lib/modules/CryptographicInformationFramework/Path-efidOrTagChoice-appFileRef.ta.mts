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
 * @summary Path_efidOrTagChoice_appFileRef
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Path-efidOrTagChoice-appFileRef ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @class
 */
export
class Path_efidOrTagChoice_appFileRef {
    constructor (
        /**
         * @summary `aid`.
         * @public
         * @readonly
         */
        readonly aid: OCTET_STRING,
        /**
         * @summary `efidOrpath`.
         * @public
         * @readonly
         */
        readonly efidOrpath: OCTET_STRING
    ) {}

    /**
     * @summary Restructures an object into a Path_efidOrTagChoice_appFileRef
     * @description
     * 
     * This takes an `object` and converts it to a `Path_efidOrTagChoice_appFileRef`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Path_efidOrTagChoice_appFileRef`.
     * @returns {Path_efidOrTagChoice_appFileRef}
     */
    public static _from_object (_o: { [_K in keyof (Path_efidOrTagChoice_appFileRef)]: (Path_efidOrTagChoice_appFileRef)[_K] }): Path_efidOrTagChoice_appFileRef {
        return new Path_efidOrTagChoice_appFileRef(_o.aid, _o.efidOrpath);
    }


}

/**
 * @summary The Leading Root Component Types of Path_efidOrTagChoice_appFileRef
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Path_efidOrTagChoice_appFileRef: $.ComponentSpec[] = [
    new $.ComponentSpec("aid", false, $.hasTag(_TagClass.application, 15)),
    new $.ComponentSpec("efidOrpath", false, $.hasTag(_TagClass.universal, 4))
];

/**
 * @summary The Trailing Root Component Types of Path_efidOrTagChoice_appFileRef
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Path_efidOrTagChoice_appFileRef: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Path_efidOrTagChoice_appFileRef
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Path_efidOrTagChoice_appFileRef: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Path_efidOrTagChoice_appFileRef: $.ASN1Decoder<Path_efidOrTagChoice_appFileRef> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Path_efidOrTagChoice_appFileRef
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Path_efidOrTagChoice_appFileRef (el: _Element): Path_efidOrTagChoice_appFileRef {
    if (!_cached_decoder_for_Path_efidOrTagChoice_appFileRef) { _cached_decoder_for_Path_efidOrTagChoice_appFileRef = function (el: _Element): Path_efidOrTagChoice_appFileRef {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("Path-efidOrTagChoice-appFileRef contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "aid";
    sequence[1].name = "efidOrpath";
    let aid!: OCTET_STRING;
    let efidOrpath!: OCTET_STRING;
    aid = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(sequence[0]);
    efidOrpath = $._decodeOctetString(sequence[1]);
    return new Path_efidOrTagChoice_appFileRef(
        aid,
        efidOrpath,

    );
}; }
    return _cached_decoder_for_Path_efidOrTagChoice_appFileRef(el);
}

let _cached_encoder_for_Path_efidOrTagChoice_appFileRef: $.ASN1Encoder<Path_efidOrTagChoice_appFileRef> | null = null;

/**
 * @summary Encodes a(n) Path_efidOrTagChoice_appFileRef into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Path_efidOrTagChoice_appFileRef, encoded as an ASN.1 Element.
 */
export
function _encode_Path_efidOrTagChoice_appFileRef (value: Path_efidOrTagChoice_appFileRef, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Path_efidOrTagChoice_appFileRef) { _cached_encoder_for_Path_efidOrTagChoice_appFileRef = function (value: Path_efidOrTagChoice_appFileRef, elGetter: $.ASN1Encoder<Path_efidOrTagChoice_appFileRef>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.application, 15, () => $._encodeOctetString, $.BER)(value.aid, $.BER),
            /* REQUIRED   */ $._encodeOctetString(value.efidOrpath, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_Path_efidOrTagChoice_appFileRef(value, elGetter);
}


/* eslint-enable */
