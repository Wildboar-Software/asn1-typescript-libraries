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
import { SmdpSigned2, _decode_SmdpSigned2, _encode_SmdpSigned2 } from "../RSPDefinitions/SmdpSigned2.ta.mjs";
// export { SmdpSigned2, _decode_SmdpSigned2, _encode_SmdpSigned2 } from "../RSPDefinitions/SmdpSigned2.ta.mjs";
import { Octet32, _decode_Octet32, _encode_Octet32 } from "../RSPDefinitions/Octet32.ta.mjs";
// export { Octet32, _decode_Octet32, _encode_Octet32 } from "../RSPDefinitions/Octet32.ta.mjs";
import { Certificate, _decode_Certificate, _encode_Certificate } from "../PKIX1Explicit88/Certificate.ta.mjs";
// export { Certificate, _decode_Certificate, _encode_Certificate } from "../PKIX1Explicit88/Certificate.ta.mjs";


/**
 * @summary PrepareDownloadRequest
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PrepareDownloadRequest ::= [33] SEQUENCE { -- Tag 'BF21'
 *     smdpSigned2 SmdpSigned2,             -- Signed information
 *     smdpSignature2 [APPLICATION 55] OCTET STRING,     -- tag '5F37'
 *     hashCc Octet32 OPTIONAL, -- Hash of confirmation code
 *     smdpCertificate Certificate    -- CERT.DPpb.ECDSA
 * }
 * ```
 * 
 * @class
 */
export
class PrepareDownloadRequest {
    constructor (
        /**
         * @summary `smdpSigned2`.
         * @public
         * @readonly
         */
        readonly smdpSigned2: SmdpSigned2,
        /**
         * @summary `smdpSignature2`.
         * @public
         * @readonly
         */
        readonly smdpSignature2: OCTET_STRING,
        /**
         * @summary `hashCc`.
         * @public
         * @readonly
         */
        readonly hashCc: OPTIONAL<Octet32>,
        /**
         * @summary `smdpCertificate`.
         * @public
         * @readonly
         */
        readonly smdpCertificate: Certificate
    ) {}

    /**
     * @summary Restructures an object into a PrepareDownloadRequest
     * @description
     * 
     * This takes an `object` and converts it to a `PrepareDownloadRequest`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PrepareDownloadRequest`.
     * @returns {PrepareDownloadRequest}
     */
    public static _from_object (_o: { [_K in keyof (PrepareDownloadRequest)]: (PrepareDownloadRequest)[_K] }): PrepareDownloadRequest {
        return new PrepareDownloadRequest(_o.smdpSigned2, _o.smdpSignature2, _o.hashCc, _o.smdpCertificate);
    }


}

/**
 * @summary The Leading Root Component Types of PrepareDownloadRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PrepareDownloadRequest: $.ComponentSpec[] = [
    new $.ComponentSpec("smdpSigned2", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("smdpSignature2", false, $.hasTag(_TagClass.application, 55)),
    new $.ComponentSpec("hashCc", true, $.hasTag(_TagClass.universal, 4)),
    new $.ComponentSpec("smdpCertificate", false, $.hasTag(_TagClass.universal, 16))
];

/**
 * @summary The Trailing Root Component Types of PrepareDownloadRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PrepareDownloadRequest: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PrepareDownloadRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PrepareDownloadRequest: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PrepareDownloadRequest: $.ASN1Decoder<PrepareDownloadRequest> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PrepareDownloadRequest
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PrepareDownloadRequest (el: _Element): PrepareDownloadRequest {
    if (!_cached_decoder_for_PrepareDownloadRequest) { _cached_decoder_for_PrepareDownloadRequest = $._decode_implicit<PrepareDownloadRequest>(() => function (el: _Element): PrepareDownloadRequest {
    let smdpSigned2!: SmdpSigned2;
    let smdpSignature2!: OCTET_STRING;
    let hashCc: OPTIONAL<Octet32>;
    let smdpCertificate!: Certificate;
    const callbacks: $.DecodingMap = {
        "smdpSigned2": (_el: _Element): void => { smdpSigned2 = _decode_SmdpSigned2(_el); },
        "smdpSignature2": (_el: _Element): void => { smdpSignature2 = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "hashCc": (_el: _Element): void => { hashCc = _decode_Octet32(_el); },
        "smdpCertificate": (_el: _Element): void => { smdpCertificate = _decode_Certificate(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_PrepareDownloadRequest,
        _extension_additions_list_spec_for_PrepareDownloadRequest,
        _root_component_type_list_2_spec_for_PrepareDownloadRequest,
        undefined,
    );
    return new PrepareDownloadRequest(
        smdpSigned2,
        smdpSignature2,
        hashCc,
        smdpCertificate
    );
}); }
    return _cached_decoder_for_PrepareDownloadRequest(el);
}

let _cached_encoder_for_PrepareDownloadRequest: $.ASN1Encoder<PrepareDownloadRequest> | null = null;

/**
 * @summary Encodes a(n) PrepareDownloadRequest into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PrepareDownloadRequest, encoded as an ASN.1 Element.
 */
export
function _encode_PrepareDownloadRequest (value: PrepareDownloadRequest, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PrepareDownloadRequest) { _cached_encoder_for_PrepareDownloadRequest = $._encode_implicit(_TagClass.context, 33, () => function (value: PrepareDownloadRequest, elGetter: $.ASN1Encoder<PrepareDownloadRequest>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_SmdpSigned2(value.smdpSigned2, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.application, 55, () => $._encodeOctetString, $.BER)(value.smdpSignature2, $.BER),
            /* IF_ABSENT  */ ((value.hashCc === undefined) ? undefined : _encode_Octet32(value.hashCc, $.BER)),
            /* REQUIRED   */ _encode_Certificate(value.smdpCertificate, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}, $.BER); }
    return _cached_encoder_for_PrepareDownloadRequest(value, elGetter);
}


/* eslint-enable */
