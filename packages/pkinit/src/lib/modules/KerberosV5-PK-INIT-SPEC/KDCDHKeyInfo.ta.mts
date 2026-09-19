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
import { KerberosTime, _decode_KerberosTime, _encode_KerberosTime } from "../KerberosV5Spec2/KerberosTime.ta.mjs";
// export { KerberosTime, _decode_KerberosTime, _encode_KerberosTime } from "../KerberosV5Spec2/KerberosTime.ta.mjs";


/**
 * @summary KDCDHKeyInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * KDCDHKeyInfo ::= SEQUENCE {
 *     subjectPublicKey        [0] BIT STRING,
 *             -- The KDC's DH public key.
 *             -- The DH public key value is encoded as a BIT
 *             -- STRING according to [RFC3279].
 *     nonce                   [1] INTEGER (0..4294967295),
 *             -- Contains the nonce in the pkAuthenticator field
 *             -- in the request if the DH keys are NOT reused,
 *             -- 0 otherwise.
 *     dhKeyExpiration         [2] KerberosTime OPTIONAL,
 *             -- Expiration time for KDC's key pair,
 *             -- present if and only if the DH keys are reused.
 *             -- If present, the KDC's DH public key MUST not be
 *             -- used past the point of this expiration time.
 *             -- If this field is omitted then the serverDHNonce
 *             -- field MUST also be omitted.
 *     ...
 * }
 * ```
 * 
 * @class
 */
export
class KDCDHKeyInfo {
    constructor (
        /**
         * @summary `subjectPublicKey`.
         * @public
         * @readonly
         */
        readonly subjectPublicKey: BIT_STRING,
        /**
         * @summary `nonce`.
         * @public
         * @readonly
         */
        readonly nonce: INTEGER,
        /**
         * @summary `dhKeyExpiration`.
         * @public
         * @readonly
         */
        readonly dhKeyExpiration: OPTIONAL<KerberosTime>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a KDCDHKeyInfo
     * @description
     * 
     * This takes an `object` and converts it to a `KDCDHKeyInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `KDCDHKeyInfo`.
     * @returns {KDCDHKeyInfo}
     */
    public static _from_object (_o: { [_K in keyof (KDCDHKeyInfo)]: (KDCDHKeyInfo)[_K] }): KDCDHKeyInfo {
        return new KDCDHKeyInfo(_o.subjectPublicKey, _o.nonce, _o.dhKeyExpiration, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of KDCDHKeyInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_KDCDHKeyInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("subjectPublicKey", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("nonce", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("dhKeyExpiration", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of KDCDHKeyInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_KDCDHKeyInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of KDCDHKeyInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_KDCDHKeyInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_KDCDHKeyInfo: $.ASN1Decoder<KDCDHKeyInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) KDCDHKeyInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_KDCDHKeyInfo (el: _Element): KDCDHKeyInfo {
    if (!_cached_decoder_for_KDCDHKeyInfo) { _cached_decoder_for_KDCDHKeyInfo = function (el: _Element): KDCDHKeyInfo {
    let subjectPublicKey!: BIT_STRING;
    let nonce!: INTEGER;
    let dhKeyExpiration: OPTIONAL<KerberosTime>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "subjectPublicKey": (_el: _Element): void => { subjectPublicKey = $._decode_explicit<BIT_STRING>(() => $._decodeBitString)(_el); },
        "nonce": (_el: _Element): void => { nonce = $._decode_explicit<INTEGER>(() => $._decodeInteger)(_el); },
        "dhKeyExpiration": (_el: _Element): void => { dhKeyExpiration = $._decode_explicit<KerberosTime>(() => _decode_KerberosTime)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_KDCDHKeyInfo,
        _extension_additions_list_spec_for_KDCDHKeyInfo,
        _root_component_type_list_2_spec_for_KDCDHKeyInfo,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new KDCDHKeyInfo(
        subjectPublicKey,
        nonce,
        dhKeyExpiration,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_KDCDHKeyInfo(el);
}

let _cached_encoder_for_KDCDHKeyInfo: $.ASN1Encoder<KDCDHKeyInfo> | null = null;

/**
 * @summary Encodes a(n) KDCDHKeyInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The KDCDHKeyInfo, encoded as an ASN.1 Element.
 */
export
function _encode_KDCDHKeyInfo (value: KDCDHKeyInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_KDCDHKeyInfo) { _cached_encoder_for_KDCDHKeyInfo = function (value: KDCDHKeyInfo, elGetter: $.ASN1Encoder<KDCDHKeyInfo>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => $._encodeBitString, $.BER)(value.subjectPublicKey, $.BER),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => $._encodeInteger, $.BER)(value.nonce, $.BER),
            /* IF_ABSENT  */ ((value.dhKeyExpiration === undefined) ? undefined : $._encode_explicit(_TagClass.context, 2, () => _encode_KerberosTime, $.BER)(value.dhKeyExpiration, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_KDCDHKeyInfo(value, elGetter);
}


/* eslint-enable */
