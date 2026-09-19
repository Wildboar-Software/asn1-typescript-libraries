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
import { Certificate, _decode_Certificate, _encode_Certificate } from "../PKIX1Explicit88/Certificate.ta.mjs";
// export { Certificate, _decode_Certificate, _encode_Certificate } from "../PKIX1Explicit88/Certificate.ta.mjs";


/**
 * @summary GetCertsResponse_certs
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GetCertsResponse-certs ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @class
 */
export
class GetCertsResponse_certs {
    constructor (
        /**
         * @summary `eumCertificate`.
         * @public
         * @readonly
         */
        readonly eumCertificate: Certificate,
        /**
         * @summary `euiccCertificate`.
         * @public
         * @readonly
         */
        readonly euiccCertificate: Certificate
    ) {}

    /**
     * @summary Restructures an object into a GetCertsResponse_certs
     * @description
     * 
     * This takes an `object` and converts it to a `GetCertsResponse_certs`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `GetCertsResponse_certs`.
     * @returns {GetCertsResponse_certs}
     */
    public static _from_object (_o: { [_K in keyof (GetCertsResponse_certs)]: (GetCertsResponse_certs)[_K] }): GetCertsResponse_certs {
        return new GetCertsResponse_certs(_o.eumCertificate, _o.euiccCertificate);
    }


}

/**
 * @summary The Leading Root Component Types of GetCertsResponse_certs
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_GetCertsResponse_certs: $.ComponentSpec[] = [
    new $.ComponentSpec("eumCertificate", false, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("euiccCertificate", false, $.hasTag(_TagClass.context, 6))
];

/**
 * @summary The Trailing Root Component Types of GetCertsResponse_certs
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_GetCertsResponse_certs: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of GetCertsResponse_certs
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_GetCertsResponse_certs: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_GetCertsResponse_certs: $.ASN1Decoder<GetCertsResponse_certs> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GetCertsResponse_certs
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GetCertsResponse_certs (el: _Element): GetCertsResponse_certs {
    if (!_cached_decoder_for_GetCertsResponse_certs) { _cached_decoder_for_GetCertsResponse_certs = function (el: _Element): GetCertsResponse_certs {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("GetCertsResponse-certs contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "eumCertificate";
    sequence[1].name = "euiccCertificate";
    let eumCertificate!: Certificate;
    let euiccCertificate!: Certificate;
    eumCertificate = $._decode_implicit<Certificate>(() => _decode_Certificate)(sequence[0]);
    euiccCertificate = $._decode_implicit<Certificate>(() => _decode_Certificate)(sequence[1]);
    return new GetCertsResponse_certs(
        eumCertificate,
        euiccCertificate,

    );
}; }
    return _cached_decoder_for_GetCertsResponse_certs(el);
}

let _cached_encoder_for_GetCertsResponse_certs: $.ASN1Encoder<GetCertsResponse_certs> | null = null;

/**
 * @summary Encodes a(n) GetCertsResponse_certs into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GetCertsResponse_certs, encoded as an ASN.1 Element.
 */
export
function _encode_GetCertsResponse_certs (value: GetCertsResponse_certs, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GetCertsResponse_certs) { _cached_encoder_for_GetCertsResponse_certs = function (value: GetCertsResponse_certs, elGetter: $.ASN1Encoder<GetCertsResponse_certs>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 5, () => _encode_Certificate, $.BER)(value.eumCertificate, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 6, () => _encode_Certificate, $.BER)(value.euiccCertificate, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_GetCertsResponse_certs(value, elGetter);
}


/* eslint-enable */
