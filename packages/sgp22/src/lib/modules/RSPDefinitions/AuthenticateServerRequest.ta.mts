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
import { ServerSigned1, _decode_ServerSigned1, _encode_ServerSigned1 } from "../RSPDefinitions/ServerSigned1.ta.mjs";
// export { ServerSigned1, _decode_ServerSigned1, _encode_ServerSigned1 } from "../RSPDefinitions/ServerSigned1.ta.mjs";
import { SubjectKeyIdentifier, _decode_SubjectKeyIdentifier, _encode_SubjectKeyIdentifier } from "../PKIX1Implicit88/SubjectKeyIdentifier.ta.mjs";
// export { SubjectKeyIdentifier, _decode_SubjectKeyIdentifier, _encode_SubjectKeyIdentifier } from "../PKIX1Implicit88/SubjectKeyIdentifier.ta.mjs";
import { Certificate, _decode_Certificate, _encode_Certificate } from "../PKIX1Explicit88/Certificate.ta.mjs";
// export { Certificate, _decode_Certificate, _encode_Certificate } from "../PKIX1Explicit88/Certificate.ta.mjs";
import { CtxParams1, _decode_CtxParams1, _encode_CtxParams1 } from "../RSPDefinitions/CtxParams1.ta.mjs";
// export { CtxParams1, _decode_CtxParams1, _encode_CtxParams1 } from "../RSPDefinitions/CtxParams1.ta.mjs";


/**
 * @summary AuthenticateServerRequest
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AuthenticateServerRequest ::= [56] SEQUENCE { -- Tag 'BF38'
 *     serverSigned1 ServerSigned1,                 -- Signed information
 *     serverSignature1 [APPLICATION 55] OCTET STRING,     -- tag ‘5F37’
 *     euiccCiPKIdToBeUsed SubjectKeyIdentifier,         -- CI Public Key Identifier to be used
 *     serverCertificate Certificate, -- RSP Server Certificate CERT.XXauth.ECDSA
 *     ctxParams1 CtxParams1
 * }
 * ```
 * 
 * @class
 */
export
class AuthenticateServerRequest {
    constructor (
        /**
         * @summary `serverSigned1`.
         * @public
         * @readonly
         */
        readonly serverSigned1: ServerSigned1,
        /**
         * @summary `serverSignature1`.
         * @public
         * @readonly
         */
        readonly serverSignature1: OCTET_STRING,
        /**
         * @summary `euiccCiPKIdToBeUsed`.
         * @public
         * @readonly
         */
        readonly euiccCiPKIdToBeUsed: SubjectKeyIdentifier,
        /**
         * @summary `serverCertificate`.
         * @public
         * @readonly
         */
        readonly serverCertificate: Certificate,
        /**
         * @summary `ctxParams1`.
         * @public
         * @readonly
         */
        readonly ctxParams1: CtxParams1
    ) {}

    /**
     * @summary Restructures an object into a AuthenticateServerRequest
     * @description
     * 
     * This takes an `object` and converts it to a `AuthenticateServerRequest`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AuthenticateServerRequest`.
     * @returns {AuthenticateServerRequest}
     */
    public static _from_object (_o: { [_K in keyof (AuthenticateServerRequest)]: (AuthenticateServerRequest)[_K] }): AuthenticateServerRequest {
        return new AuthenticateServerRequest(_o.serverSigned1, _o.serverSignature1, _o.euiccCiPKIdToBeUsed, _o.serverCertificate, _o.ctxParams1);
    }


}

/**
 * @summary The Leading Root Component Types of AuthenticateServerRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AuthenticateServerRequest: $.ComponentSpec[] = [
    new $.ComponentSpec("serverSigned1", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("serverSignature1", false, $.hasTag(_TagClass.application, 55)),
    new $.ComponentSpec("euiccCiPKIdToBeUsed", false, $.hasTag(_TagClass.universal, 4)),
    new $.ComponentSpec("serverCertificate", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("ctxParams1", false, $.hasAnyTag)
];

/**
 * @summary The Trailing Root Component Types of AuthenticateServerRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AuthenticateServerRequest: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AuthenticateServerRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AuthenticateServerRequest: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AuthenticateServerRequest: $.ASN1Decoder<AuthenticateServerRequest> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AuthenticateServerRequest
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AuthenticateServerRequest (el: _Element): AuthenticateServerRequest {
    if (!_cached_decoder_for_AuthenticateServerRequest) { _cached_decoder_for_AuthenticateServerRequest = $._decode_implicit<AuthenticateServerRequest>(() => function (el: _Element): AuthenticateServerRequest {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 5) {
        throw new _ConstructionError("AuthenticateServerRequest contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "serverSigned1";
    sequence[1].name = "serverSignature1";
    sequence[2].name = "euiccCiPKIdToBeUsed";
    sequence[3].name = "serverCertificate";
    sequence[4].name = "ctxParams1";
    let serverSigned1!: ServerSigned1;
    let serverSignature1!: OCTET_STRING;
    let euiccCiPKIdToBeUsed!: SubjectKeyIdentifier;
    let serverCertificate!: Certificate;
    let ctxParams1!: CtxParams1;
    serverSigned1 = _decode_ServerSigned1(sequence[0]);
    serverSignature1 = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(sequence[1]);
    euiccCiPKIdToBeUsed = _decode_SubjectKeyIdentifier(sequence[2]);
    serverCertificate = _decode_Certificate(sequence[3]);
    ctxParams1 = _decode_CtxParams1(sequence[4]);
    return new AuthenticateServerRequest(
        serverSigned1,
        serverSignature1,
        euiccCiPKIdToBeUsed,
        serverCertificate,
        ctxParams1,

    );
}); }
    return _cached_decoder_for_AuthenticateServerRequest(el);
}

let _cached_encoder_for_AuthenticateServerRequest: $.ASN1Encoder<AuthenticateServerRequest> | null = null;

/**
 * @summary Encodes a(n) AuthenticateServerRequest into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AuthenticateServerRequest, encoded as an ASN.1 Element.
 */
export
function _encode_AuthenticateServerRequest (value: AuthenticateServerRequest, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AuthenticateServerRequest) { _cached_encoder_for_AuthenticateServerRequest = $._encode_implicit(_TagClass.context, 56, () => function (value: AuthenticateServerRequest, elGetter: $.ASN1Encoder<AuthenticateServerRequest>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_ServerSigned1(value.serverSigned1, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.application, 55, () => $._encodeOctetString, $.BER)(value.serverSignature1, $.BER),
            /* REQUIRED   */ _encode_SubjectKeyIdentifier(value.euiccCiPKIdToBeUsed, $.BER),
            /* REQUIRED   */ _encode_Certificate(value.serverCertificate, $.BER),
            /* REQUIRED   */ _encode_CtxParams1(value.ctxParams1, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}, $.BER); }
    return _cached_encoder_for_AuthenticateServerRequest(value, elGetter);
}


/* eslint-enable */
