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
import { SecurityParmIndex, _decode_SecurityParmIndex, _encode_SecurityParmIndex } from "../MEDIA-GATEWAY-CONTROL/SecurityParmIndex.ta.mjs";
// export { SecurityParmIndex, _decode_SecurityParmIndex, _encode_SecurityParmIndex } from "../MEDIA-GATEWAY-CONTROL/SecurityParmIndex.ta.mjs";
import { SequenceNum, _decode_SequenceNum, _encode_SequenceNum } from "../MEDIA-GATEWAY-CONTROL/SequenceNum.ta.mjs";
// export { SequenceNum, _decode_SequenceNum, _encode_SequenceNum } from "../MEDIA-GATEWAY-CONTROL/SequenceNum.ta.mjs";
import { AuthData, _decode_AuthData, _encode_AuthData } from "../MEDIA-GATEWAY-CONTROL/AuthData.ta.mjs";
// export { AuthData, _decode_AuthData, _encode_AuthData } from "../MEDIA-GATEWAY-CONTROL/AuthData.ta.mjs";


/**
 * @summary AuthenticationHeader
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AuthenticationHeader ::= SEQUENCE
 *     {
 *         secParmIndex    [0] SecurityParmIndex,
 *         seqNum            [1] SequenceNum,
 *         ad                [2] AuthData
 *     }
 * ```
 * 
 * @class
 */
export
class AuthenticationHeader {
    constructor (
        /**
         * @summary `secParmIndex`.
         * @public
         * @readonly
         */
        readonly secParmIndex: SecurityParmIndex,
        /**
         * @summary `seqNum`.
         * @public
         * @readonly
         */
        readonly seqNum: SequenceNum,
        /**
         * @summary `ad`.
         * @public
         * @readonly
         */
        readonly ad: AuthData
    ) {}

    /**
     * @summary Restructures an object into a AuthenticationHeader
     * @description
     * 
     * This takes an `object` and converts it to a `AuthenticationHeader`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AuthenticationHeader`.
     * @returns {AuthenticationHeader}
     */
    public static _from_object (_o: { [_K in keyof (AuthenticationHeader)]: (AuthenticationHeader)[_K] }): AuthenticationHeader {
        return new AuthenticationHeader(_o.secParmIndex, _o.seqNum, _o.ad);
    }


}

/**
 * @summary The Leading Root Component Types of AuthenticationHeader
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AuthenticationHeader: $.ComponentSpec[] = [
    new $.ComponentSpec("secParmIndex", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("seqNum", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("ad", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of AuthenticationHeader
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AuthenticationHeader: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AuthenticationHeader
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AuthenticationHeader: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AuthenticationHeader: $.ASN1Decoder<AuthenticationHeader> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AuthenticationHeader
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AuthenticationHeader (el: _Element): AuthenticationHeader {
    if (!_cached_decoder_for_AuthenticationHeader) { _cached_decoder_for_AuthenticationHeader = function (el: _Element): AuthenticationHeader {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new _ConstructionError("AuthenticationHeader contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "secParmIndex";
    sequence[1].name = "seqNum";
    sequence[2].name = "ad";
    let secParmIndex!: SecurityParmIndex;
    let seqNum!: SequenceNum;
    let ad!: AuthData;
    secParmIndex = $._decode_implicit<SecurityParmIndex>(() => _decode_SecurityParmIndex)(sequence[0]);
    seqNum = $._decode_implicit<SequenceNum>(() => _decode_SequenceNum)(sequence[1]);
    ad = $._decode_implicit<AuthData>(() => _decode_AuthData)(sequence[2]);
    return new AuthenticationHeader(
        secParmIndex,
        seqNum,
        ad,

    );
}; }
    return _cached_decoder_for_AuthenticationHeader(el);
}

let _cached_encoder_for_AuthenticationHeader: $.ASN1Encoder<AuthenticationHeader> | null = null;

/**
 * @summary Encodes a(n) AuthenticationHeader into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AuthenticationHeader, encoded as an ASN.1 Element.
 */
export
function _encode_AuthenticationHeader (value: AuthenticationHeader, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AuthenticationHeader) { _cached_encoder_for_AuthenticationHeader = function (value: AuthenticationHeader, elGetter: $.ASN1Encoder<AuthenticationHeader>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_SecurityParmIndex, $.BER)(value.secParmIndex, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_SequenceNum, $.BER)(value.seqNum, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_AuthData, $.BER)(value.ad, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_AuthenticationHeader(value, elGetter);
}


/* eslint-enable */
