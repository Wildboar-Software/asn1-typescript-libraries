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
 * @summary TLS13MasterSecretInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TLS13MasterSecretInfo ::= SEQUENCE
 * {
 *     masterSecretValue [1] OCTET STRING (SIZE(1..65535)),
 *     transcriptHashS   [2] OCTET STRING (SIZE(1..65535)),
 *     -- Hash(ClientHello..server Finished)
 *     transcriptHashC   [3] OCTET STRING (SIZE(1..65535))
 *     -- Hash(ClientHello..client Finished)
 * }
 * ```
 * 
 * @class
 */
export
class TLS13MasterSecretInfo {
    constructor (
        /**
         * @summary `masterSecretValue`.
         * @public
         * @readonly
         */
        readonly masterSecretValue: OCTET_STRING,
        /**
         * @summary `transcriptHashS`.
         * @public
         * @readonly
         */
        readonly transcriptHashS: OCTET_STRING,
        /**
         * @summary `transcriptHashC`.
         * @public
         * @readonly
         */
        readonly transcriptHashC: OCTET_STRING
    ) {}

    /**
     * @summary Restructures an object into a TLS13MasterSecretInfo
     * @description
     * 
     * This takes an `object` and converts it to a `TLS13MasterSecretInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TLS13MasterSecretInfo`.
     * @returns {TLS13MasterSecretInfo}
     */
    public static _from_object (_o: { [_K in keyof (TLS13MasterSecretInfo)]: (TLS13MasterSecretInfo)[_K] }): TLS13MasterSecretInfo {
        return new TLS13MasterSecretInfo(_o.masterSecretValue, _o.transcriptHashS, _o.transcriptHashC);
    }


}

/**
 * @summary The Leading Root Component Types of TLS13MasterSecretInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_TLS13MasterSecretInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("masterSecretValue", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("transcriptHashS", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("transcriptHashC", false, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of TLS13MasterSecretInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_TLS13MasterSecretInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of TLS13MasterSecretInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_TLS13MasterSecretInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_TLS13MasterSecretInfo: $.ASN1Decoder<TLS13MasterSecretInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TLS13MasterSecretInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TLS13MasterSecretInfo (el: _Element): TLS13MasterSecretInfo {
    if (!_cached_decoder_for_TLS13MasterSecretInfo) { _cached_decoder_for_TLS13MasterSecretInfo = function (el: _Element): TLS13MasterSecretInfo {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new _ConstructionError("TLS13MasterSecretInfo contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "masterSecretValue";
    sequence[1].name = "transcriptHashS";
    sequence[2].name = "transcriptHashC";
    let masterSecretValue!: OCTET_STRING;
    let transcriptHashS!: OCTET_STRING;
    let transcriptHashC!: OCTET_STRING;
    masterSecretValue = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(sequence[0]);
    transcriptHashS = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(sequence[1]);
    transcriptHashC = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(sequence[2]);
    return new TLS13MasterSecretInfo(
        masterSecretValue,
        transcriptHashS,
        transcriptHashC,

    );
}; }
    return _cached_decoder_for_TLS13MasterSecretInfo(el);
}

let _cached_encoder_for_TLS13MasterSecretInfo: $.ASN1Encoder<TLS13MasterSecretInfo> | null = null;

/**
 * @summary Encodes a(n) TLS13MasterSecretInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TLS13MasterSecretInfo, encoded as an ASN.1 Element.
 */
export
function _encode_TLS13MasterSecretInfo (value: TLS13MasterSecretInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TLS13MasterSecretInfo) { _cached_encoder_for_TLS13MasterSecretInfo = function (value: TLS13MasterSecretInfo, elGetter: $.ASN1Encoder<TLS13MasterSecretInfo>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER)(value.masterSecretValue, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER)(value.transcriptHashS, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => $._encodeOctetString, $.BER)(value.transcriptHashC, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_TLS13MasterSecretInfo(value, elGetter);
}


/* eslint-enable */
