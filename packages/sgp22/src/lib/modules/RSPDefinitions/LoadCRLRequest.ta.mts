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
import { CertificateList, _decode_CertificateList, _encode_CertificateList } from "../PKIX1Explicit88/CertificateList.ta.mjs";
// export { CertificateList, _decode_CertificateList, _encode_CertificateList } from "../PKIX1Explicit88/CertificateList.ta.mjs";


/**
 * @summary LoadCRLRequest
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LoadCRLRequest ::= [53] SEQUENCE {  -- Tag 'BF35'
 *     -- A CRL
 *     crl CertificateList
 * }
 * ```
 * 
 * @class
 */
export
class LoadCRLRequest {
    constructor (
        /**
         * @summary `crl`.
         * @public
         * @readonly
         */
        readonly crl: CertificateList
    ) {}

    /**
     * @summary Restructures an object into a LoadCRLRequest
     * @description
     * 
     * This takes an `object` and converts it to a `LoadCRLRequest`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `LoadCRLRequest`.
     * @returns {LoadCRLRequest}
     */
    public static _from_object (_o: { [_K in keyof (LoadCRLRequest)]: (LoadCRLRequest)[_K] }): LoadCRLRequest {
        return new LoadCRLRequest(_o.crl);
    }


}

/**
 * @summary The Leading Root Component Types of LoadCRLRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_LoadCRLRequest: $.ComponentSpec[] = [
    new $.ComponentSpec("crl", false, $.hasTag(_TagClass.context, 0))
];

/**
 * @summary The Trailing Root Component Types of LoadCRLRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_LoadCRLRequest: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of LoadCRLRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_LoadCRLRequest: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_LoadCRLRequest: $.ASN1Decoder<LoadCRLRequest> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LoadCRLRequest
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LoadCRLRequest (el: _Element): LoadCRLRequest {
    if (!_cached_decoder_for_LoadCRLRequest) { _cached_decoder_for_LoadCRLRequest = $._decode_implicit<LoadCRLRequest>(() => function (el: _Element): LoadCRLRequest {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 1) {
        throw new _ConstructionError("LoadCRLRequest contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "crl";
    let crl!: CertificateList;
    crl = _decode_CertificateList(sequence[0]);
    return new LoadCRLRequest(
        crl,

    );
}); }
    return _cached_decoder_for_LoadCRLRequest(el);
}

let _cached_encoder_for_LoadCRLRequest: $.ASN1Encoder<LoadCRLRequest> | null = null;

/**
 * @summary Encodes a(n) LoadCRLRequest into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LoadCRLRequest, encoded as an ASN.1 Element.
 */
export
function _encode_LoadCRLRequest (value: LoadCRLRequest, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LoadCRLRequest) { _cached_encoder_for_LoadCRLRequest = $._encode_implicit(_TagClass.context, 53, () => function (value: LoadCRLRequest, elGetter: $.ASN1Encoder<LoadCRLRequest>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_CertificateList(value.crl, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}, $.BER); }
    return _cached_encoder_for_LoadCRLRequest(value, elGetter);
}


/* eslint-enable */
