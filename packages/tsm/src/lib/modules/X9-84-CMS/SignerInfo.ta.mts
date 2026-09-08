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
import { CMSVersion, CMSVersion_v84 /* IMPORTED_LONG_NAMED_INTEGER */, v84 /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_CMSVersion, _encode_CMSVersion } from "../X9-84-CMS/CMSVersion.ta.mjs";
// export { CMSVersion, CMSVersion_v84 /* IMPORTED_LONG_NAMED_INTEGER */, v84 /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_CMSVersion, _encode_CMSVersion } from "../X9-84-CMS/CMSVersion.ta.mjs";
import { SignerIdentifier, _decode_SignerIdentifier, _encode_SignerIdentifier } from "../X9-84-CMS/SignerIdentifier.ta.mjs";
// export { SignerIdentifier, _decode_SignerIdentifier, _encode_SignerIdentifier } from "../X9-84-CMS/SignerIdentifier.ta.mjs";
import { DigestAlgorithmIdentifier, _decode_DigestAlgorithmIdentifier, _encode_DigestAlgorithmIdentifier } from "../X9-84-CMS/DigestAlgorithmIdentifier.ta.mjs";
// export { DigestAlgorithmIdentifier, _decode_DigestAlgorithmIdentifier, _encode_DigestAlgorithmIdentifier } from "../X9-84-CMS/DigestAlgorithmIdentifier.ta.mjs";
import { SignatureAlgorithmIdentifier, _decode_SignatureAlgorithmIdentifier, _encode_SignatureAlgorithmIdentifier } from "../X9-84-CMS/SignatureAlgorithmIdentifier.ta.mjs";
// export { SignatureAlgorithmIdentifier, _decode_SignatureAlgorithmIdentifier, _encode_SignatureAlgorithmIdentifier } from "../X9-84-CMS/SignatureAlgorithmIdentifier.ta.mjs";
import { SignatureValue, _decode_SignatureValue, _encode_SignatureValue } from "../X9-84-CMS/SignatureValue.ta.mjs";
// export { SignatureValue, _decode_SignatureValue, _encode_SignatureValue } from "../X9-84-CMS/SignatureValue.ta.mjs";


/**
 * @summary SignerInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SignerInfo ::= SEQUENCE {
 *    version             CMSVersion,
 *    sid                 SignerIdentifier,
 *    digestAlgorithm     DigestAlgorithmIdentifier,
 *    signatureAlgorithm  SignatureAlgorithmIdentifier,
 *    signature           SignatureValue
 * }
 * ```
 * 
 * @class
 */
export
class SignerInfo {
    constructor (
        /**
         * @summary `version`.
         * @public
         * @readonly
         */
        readonly version: CMSVersion,
        /**
         * @summary `sid`.
         * @public
         * @readonly
         */
        readonly sid: SignerIdentifier,
        /**
         * @summary `digestAlgorithm`.
         * @public
         * @readonly
         */
        readonly digestAlgorithm: DigestAlgorithmIdentifier,
        /**
         * @summary `signatureAlgorithm`.
         * @public
         * @readonly
         */
        readonly signatureAlgorithm: SignatureAlgorithmIdentifier,
        /**
         * @summary `signature`.
         * @public
         * @readonly
         */
        readonly signature: SignatureValue
    ) {}

    /**
     * @summary Restructures an object into a SignerInfo
     * @description
     * 
     * This takes an `object` and converts it to a `SignerInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SignerInfo`.
     * @returns {SignerInfo}
     */
    public static _from_object (_o: { [_K in keyof (SignerInfo)]: (SignerInfo)[_K] }): SignerInfo {
        return new SignerInfo(_o.version, _o.sid, _o.digestAlgorithm, _o.signatureAlgorithm, _o.signature);
    }


}

/**
 * @summary The Leading Root Component Types of SignerInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SignerInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("version", false, $.hasTag(_TagClass.universal, 2), undefined, undefined),
    new $.ComponentSpec("sid", false, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec("digestAlgorithm", false, $.hasTag(_TagClass.universal, 16), undefined, undefined),
    new $.ComponentSpec("signatureAlgorithm", false, $.hasTag(_TagClass.universal, 16), undefined, undefined),
    new $.ComponentSpec("signature", false, $.hasTag(_TagClass.universal, 4), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of SignerInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SignerInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SignerInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SignerInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SignerInfo: $.ASN1Decoder<SignerInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SignerInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SignerInfo (el: _Element): SignerInfo {
    if (!_cached_decoder_for_SignerInfo) { _cached_decoder_for_SignerInfo = function (el: _Element): SignerInfo {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 5) {
        throw new _ConstructionError("SignerInfo contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "version";
    sequence[1].name = "sid";
    sequence[2].name = "digestAlgorithm";
    sequence[3].name = "signatureAlgorithm";
    sequence[4].name = "signature";
    let version!: CMSVersion;
    let sid!: SignerIdentifier;
    let digestAlgorithm!: DigestAlgorithmIdentifier;
    let signatureAlgorithm!: SignatureAlgorithmIdentifier;
    let signature!: SignatureValue;
    version = _decode_CMSVersion(sequence[0]);
    sid = _decode_SignerIdentifier(sequence[1]);
    digestAlgorithm = _decode_DigestAlgorithmIdentifier(sequence[2]);
    signatureAlgorithm = _decode_SignatureAlgorithmIdentifier(sequence[3]);
    signature = _decode_SignatureValue(sequence[4]);
    return new SignerInfo(
        version,
        sid,
        digestAlgorithm,
        signatureAlgorithm,
        signature,

    );
}; }
    return _cached_decoder_for_SignerInfo(el);
}

let _cached_encoder_for_SignerInfo: $.ASN1Encoder<SignerInfo> | null = null;

/**
 * @summary Encodes a(n) SignerInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SignerInfo, encoded as an ASN.1 Element.
 */
export
function _encode_SignerInfo (value: SignerInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SignerInfo) { _cached_encoder_for_SignerInfo = function (value: SignerInfo, elGetter: $.ASN1Encoder<SignerInfo>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_CMSVersion(value.version, $.BER),
            /* REQUIRED   */ _encode_SignerIdentifier(value.sid, $.BER),
            /* REQUIRED   */ _encode_DigestAlgorithmIdentifier(value.digestAlgorithm, $.BER),
            /* REQUIRED   */ _encode_SignatureAlgorithmIdentifier(value.signatureAlgorithm, $.BER),
            /* REQUIRED   */ _encode_SignatureValue(value.signature, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_SignerInfo(value, elGetter);
}


/* eslint-enable */
