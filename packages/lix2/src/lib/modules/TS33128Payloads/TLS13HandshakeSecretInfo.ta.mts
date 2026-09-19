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
 * @summary TLS13HandshakeSecretInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TLS13HandshakeSecretInfo ::= SEQUENCE
 * {
 *     handshakeSecretValue [1] OCTET STRING (SIZE(1..65535)),
 *     transcriptHash       [2] OCTET STRING (SIZE(1..65535))
 *     -- Hash(ClientHello..ServerHello)
 * }
 * ```
 * 
 * @class
 */
export
class TLS13HandshakeSecretInfo {
    constructor (
        /**
         * @summary `handshakeSecretValue`.
         * @public
         * @readonly
         */
        readonly handshakeSecretValue: OCTET_STRING,
        /**
         * @summary `transcriptHash`.
         * @public
         * @readonly
         */
        readonly transcriptHash: OCTET_STRING
    ) {}

    /**
     * @summary Restructures an object into a TLS13HandshakeSecretInfo
     * @description
     * 
     * This takes an `object` and converts it to a `TLS13HandshakeSecretInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TLS13HandshakeSecretInfo`.
     * @returns {TLS13HandshakeSecretInfo}
     */
    public static _from_object (_o: { [_K in keyof (TLS13HandshakeSecretInfo)]: (TLS13HandshakeSecretInfo)[_K] }): TLS13HandshakeSecretInfo {
        return new TLS13HandshakeSecretInfo(_o.handshakeSecretValue, _o.transcriptHash);
    }


}

/**
 * @summary The Leading Root Component Types of TLS13HandshakeSecretInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_TLS13HandshakeSecretInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("handshakeSecretValue", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("transcriptHash", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of TLS13HandshakeSecretInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_TLS13HandshakeSecretInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of TLS13HandshakeSecretInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_TLS13HandshakeSecretInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_TLS13HandshakeSecretInfo: $.ASN1Decoder<TLS13HandshakeSecretInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TLS13HandshakeSecretInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TLS13HandshakeSecretInfo (el: _Element): TLS13HandshakeSecretInfo {
    if (!_cached_decoder_for_TLS13HandshakeSecretInfo) { _cached_decoder_for_TLS13HandshakeSecretInfo = function (el: _Element): TLS13HandshakeSecretInfo {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("TLS13HandshakeSecretInfo contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "handshakeSecretValue";
    sequence[1].name = "transcriptHash";
    let handshakeSecretValue!: OCTET_STRING;
    let transcriptHash!: OCTET_STRING;
    handshakeSecretValue = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(sequence[0]);
    transcriptHash = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(sequence[1]);
    return new TLS13HandshakeSecretInfo(
        handshakeSecretValue,
        transcriptHash,

    );
}; }
    return _cached_decoder_for_TLS13HandshakeSecretInfo(el);
}

let _cached_encoder_for_TLS13HandshakeSecretInfo: $.ASN1Encoder<TLS13HandshakeSecretInfo> | null = null;

/**
 * @summary Encodes a(n) TLS13HandshakeSecretInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TLS13HandshakeSecretInfo, encoded as an ASN.1 Element.
 */
export
function _encode_TLS13HandshakeSecretInfo (value: TLS13HandshakeSecretInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TLS13HandshakeSecretInfo) { _cached_encoder_for_TLS13HandshakeSecretInfo = function (value: TLS13HandshakeSecretInfo, elGetter: $.ASN1Encoder<TLS13HandshakeSecretInfo>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER)(value.handshakeSecretValue, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER)(value.transcriptHash, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_TLS13HandshakeSecretInfo(value, elGetter);
}


/* eslint-enable */
