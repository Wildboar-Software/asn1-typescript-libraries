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
import { EuiccSigned1, _decode_EuiccSigned1, _encode_EuiccSigned1 } from "../SGP32Definitions/EuiccSigned1.ta.mjs";
// export { EuiccSigned1, _decode_EuiccSigned1, _encode_EuiccSigned1 } from "../SGP32Definitions/EuiccSigned1.ta.mjs";
import { Certificate, _decode_Certificate, _encode_Certificate } from "../PKIX1Explicit88/Certificate.ta.mjs";
// export { Certificate, _decode_Certificate, _encode_Certificate } from "../PKIX1Explicit88/Certificate.ta.mjs";


/**
 * @summary AuthenticateResponseOk
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AuthenticateResponseOk ::= SEQUENCE {
 *     euiccSigned1 EuiccSigned1, -- Signed information
 *     euiccSignature1 [APPLICATION 55] OCTET STRING, --EUICC_Sign1, tag 5F37
 *     euiccCertificate Certificate, -- eUICC Certificate (CERT.EUICC.ECDSA) signed by the EUM
 *     eumCertificate Certificate -- EUM Certificate (CERT.EUM.ECDSA) signed by the requested CI
 * }
 * ```
 * 
 * @class
 */
export
class AuthenticateResponseOk {
    constructor (
        /**
         * @summary `euiccSigned1`.
         * @public
         * @readonly
         */
        readonly euiccSigned1: EuiccSigned1,
        /**
         * @summary `euiccSignature1`.
         * @public
         * @readonly
         */
        readonly euiccSignature1: OCTET_STRING,
        /**
         * @summary `euiccCertificate`.
         * @public
         * @readonly
         */
        readonly euiccCertificate: Certificate,
        /**
         * @summary `eumCertificate`.
         * @public
         * @readonly
         */
        readonly eumCertificate: Certificate
    ) {}

    /**
     * @summary Restructures an object into a AuthenticateResponseOk
     * @description
     * 
     * This takes an `object` and converts it to a `AuthenticateResponseOk`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AuthenticateResponseOk`.
     * @returns {AuthenticateResponseOk}
     */
    public static _from_object (_o: { [_K in keyof (AuthenticateResponseOk)]: (AuthenticateResponseOk)[_K] }): AuthenticateResponseOk {
        return new AuthenticateResponseOk(_o.euiccSigned1, _o.euiccSignature1, _o.euiccCertificate, _o.eumCertificate);
    }


}

/**
 * @summary The Leading Root Component Types of AuthenticateResponseOk
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AuthenticateResponseOk: $.ComponentSpec[] = [
    new $.ComponentSpec("euiccSigned1", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("euiccSignature1", false, $.hasTag(_TagClass.application, 55)),
    new $.ComponentSpec("euiccCertificate", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("eumCertificate", false, $.hasTag(_TagClass.universal, 16))
];

/**
 * @summary The Trailing Root Component Types of AuthenticateResponseOk
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AuthenticateResponseOk: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AuthenticateResponseOk
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AuthenticateResponseOk: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AuthenticateResponseOk: $.ASN1Decoder<AuthenticateResponseOk> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AuthenticateResponseOk
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AuthenticateResponseOk (el: _Element): AuthenticateResponseOk {
    if (!_cached_decoder_for_AuthenticateResponseOk) { _cached_decoder_for_AuthenticateResponseOk = function (el: _Element): AuthenticateResponseOk {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 4) {
        throw new _ConstructionError("AuthenticateResponseOk contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "euiccSigned1";
    sequence[1].name = "euiccSignature1";
    sequence[2].name = "euiccCertificate";
    sequence[3].name = "eumCertificate";
    let euiccSigned1!: EuiccSigned1;
    let euiccSignature1!: OCTET_STRING;
    let euiccCertificate!: Certificate;
    let eumCertificate!: Certificate;
    euiccSigned1 = _decode_EuiccSigned1(sequence[0]);
    euiccSignature1 = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(sequence[1]);
    euiccCertificate = _decode_Certificate(sequence[2]);
    eumCertificate = _decode_Certificate(sequence[3]);
    return new AuthenticateResponseOk(
        euiccSigned1,
        euiccSignature1,
        euiccCertificate,
        eumCertificate,

    );
}; }
    return _cached_decoder_for_AuthenticateResponseOk(el);
}

let _cached_encoder_for_AuthenticateResponseOk: $.ASN1Encoder<AuthenticateResponseOk> | null = null;

/**
 * @summary Encodes a(n) AuthenticateResponseOk into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AuthenticateResponseOk, encoded as an ASN.1 Element.
 */
export
function _encode_AuthenticateResponseOk (value: AuthenticateResponseOk, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AuthenticateResponseOk) { _cached_encoder_for_AuthenticateResponseOk = function (value: AuthenticateResponseOk, elGetter: $.ASN1Encoder<AuthenticateResponseOk>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_EuiccSigned1(value.euiccSigned1, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.application, 55, () => $._encodeOctetString, $.BER)(value.euiccSignature1, $.BER),
            /* REQUIRED   */ _encode_Certificate(value.euiccCertificate, $.BER),
            /* REQUIRED   */ _encode_Certificate(value.eumCertificate, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_AuthenticateResponseOk(value, elGetter);
}


/* eslint-enable */
