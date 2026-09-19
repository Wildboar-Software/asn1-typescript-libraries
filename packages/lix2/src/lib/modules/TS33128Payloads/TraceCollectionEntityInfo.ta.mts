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
 * @summary TraceCollectionEntityInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TraceCollectionEntityInfo ::= SEQUENCE
 * {
 *     traceCollectionEntityIPAddress   [1] BIT STRING (SIZE(1..160, ...)),
 *     traceCollectionEntityURI         [2] UTF8String
 * }
 * ```
 * 
 * @class
 */
export
class TraceCollectionEntityInfo {
    constructor (
        /**
         * @summary `traceCollectionEntityIPAddress`.
         * @public
         * @readonly
         */
        readonly traceCollectionEntityIPAddress: BIT_STRING,
        /**
         * @summary `traceCollectionEntityURI`.
         * @public
         * @readonly
         */
        readonly traceCollectionEntityURI: UTF8String
    ) {}

    /**
     * @summary Restructures an object into a TraceCollectionEntityInfo
     * @description
     * 
     * This takes an `object` and converts it to a `TraceCollectionEntityInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TraceCollectionEntityInfo`.
     * @returns {TraceCollectionEntityInfo}
     */
    public static _from_object (_o: { [_K in keyof (TraceCollectionEntityInfo)]: (TraceCollectionEntityInfo)[_K] }): TraceCollectionEntityInfo {
        return new TraceCollectionEntityInfo(_o.traceCollectionEntityIPAddress, _o.traceCollectionEntityURI);
    }


}

/**
 * @summary The Leading Root Component Types of TraceCollectionEntityInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_TraceCollectionEntityInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("traceCollectionEntityIPAddress", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("traceCollectionEntityURI", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of TraceCollectionEntityInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_TraceCollectionEntityInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of TraceCollectionEntityInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_TraceCollectionEntityInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_TraceCollectionEntityInfo: $.ASN1Decoder<TraceCollectionEntityInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TraceCollectionEntityInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TraceCollectionEntityInfo (el: _Element): TraceCollectionEntityInfo {
    if (!_cached_decoder_for_TraceCollectionEntityInfo) { _cached_decoder_for_TraceCollectionEntityInfo = function (el: _Element): TraceCollectionEntityInfo {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("TraceCollectionEntityInfo contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "traceCollectionEntityIPAddress";
    sequence[1].name = "traceCollectionEntityURI";
    let traceCollectionEntityIPAddress!: BIT_STRING;
    let traceCollectionEntityURI!: UTF8String;
    traceCollectionEntityIPAddress = $._decode_implicit<BIT_STRING>(() => $._decodeBitString)(sequence[0]);
    traceCollectionEntityURI = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(sequence[1]);
    return new TraceCollectionEntityInfo(
        traceCollectionEntityIPAddress,
        traceCollectionEntityURI,

    );
}; }
    return _cached_decoder_for_TraceCollectionEntityInfo(el);
}

let _cached_encoder_for_TraceCollectionEntityInfo: $.ASN1Encoder<TraceCollectionEntityInfo> | null = null;

/**
 * @summary Encodes a(n) TraceCollectionEntityInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TraceCollectionEntityInfo, encoded as an ASN.1 Element.
 */
export
function _encode_TraceCollectionEntityInfo (value: TraceCollectionEntityInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TraceCollectionEntityInfo) { _cached_encoder_for_TraceCollectionEntityInfo = function (value: TraceCollectionEntityInfo, elGetter: $.ASN1Encoder<TraceCollectionEntityInfo>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeBitString, $.BER)(value.traceCollectionEntityIPAddress, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeUTF8String, $.BER)(value.traceCollectionEntityURI, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_TraceCollectionEntityInfo(value, elGetter);
}


/* eslint-enable */
