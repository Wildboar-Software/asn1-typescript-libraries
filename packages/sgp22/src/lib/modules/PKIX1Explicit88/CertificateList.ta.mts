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
import { TBSCertList, _decode_TBSCertList, _encode_TBSCertList } from "../PKIX1Explicit88/TBSCertList.ta.mjs";
// export { TBSCertList, _decode_TBSCertList, _encode_TBSCertList } from "../PKIX1Explicit88/TBSCertList.ta.mjs";
import { AlgorithmIdentifier, _decode_AlgorithmIdentifier, _encode_AlgorithmIdentifier } from "../PKIX1Explicit88/AlgorithmIdentifier.ta.mjs";
// export { AlgorithmIdentifier, _decode_AlgorithmIdentifier, _encode_AlgorithmIdentifier } from "../PKIX1Explicit88/AlgorithmIdentifier.ta.mjs";


/**
 * @summary CertificateList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CertificateList ::= SEQUENCE  {
 *      tbsCertList          TBSCertList,
 *      signatureAlgorithm   AlgorithmIdentifier,
 *      signature            BIT STRING  }
 * ```
 * 
 * @class
 */
export
class CertificateList {
    constructor (
        /**
         * @summary `tbsCertList`.
         * @public
         * @readonly
         */
        readonly tbsCertList: TBSCertList,
        /**
         * @summary `signatureAlgorithm`.
         * @public
         * @readonly
         */
        readonly signatureAlgorithm: AlgorithmIdentifier,
        /**
         * @summary `signature`.
         * @public
         * @readonly
         */
        readonly signature: BIT_STRING
    ) {}

    /**
     * @summary Restructures an object into a CertificateList
     * @description
     * 
     * This takes an `object` and converts it to a `CertificateList`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CertificateList`.
     * @returns {CertificateList}
     */
    public static _from_object (_o: { [_K in keyof (CertificateList)]: (CertificateList)[_K] }): CertificateList {
        return new CertificateList(_o.tbsCertList, _o.signatureAlgorithm, _o.signature);
    }


}

/**
 * @summary The Leading Root Component Types of CertificateList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CertificateList: $.ComponentSpec[] = [
    new $.ComponentSpec("tbsCertList", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("signatureAlgorithm", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("signature", false, $.hasTag(_TagClass.universal, 3))
];

/**
 * @summary The Trailing Root Component Types of CertificateList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CertificateList: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CertificateList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CertificateList: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CertificateList: $.ASN1Decoder<CertificateList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CertificateList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CertificateList (el: _Element): CertificateList {
    if (!_cached_decoder_for_CertificateList) { _cached_decoder_for_CertificateList = function (el: _Element): CertificateList {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new _ConstructionError("CertificateList contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "tbsCertList";
    sequence[1].name = "signatureAlgorithm";
    sequence[2].name = "signature";
    let tbsCertList!: TBSCertList;
    let signatureAlgorithm!: AlgorithmIdentifier;
    let signature!: BIT_STRING;
    tbsCertList = _decode_TBSCertList(sequence[0]);
    signatureAlgorithm = _decode_AlgorithmIdentifier(sequence[1]);
    signature = $._decodeBitString(sequence[2]);
    return new CertificateList(
        tbsCertList,
        signatureAlgorithm,
        signature,

    );
}; }
    return _cached_decoder_for_CertificateList(el);
}

let _cached_encoder_for_CertificateList: $.ASN1Encoder<CertificateList> | null = null;

/**
 * @summary Encodes a(n) CertificateList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertificateList, encoded as an ASN.1 Element.
 */
export
function _encode_CertificateList (value: CertificateList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CertificateList) { _cached_encoder_for_CertificateList = function (value: CertificateList, elGetter: $.ASN1Encoder<CertificateList>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_TBSCertList(value.tbsCertList, $.BER),
            /* REQUIRED   */ _encode_AlgorithmIdentifier(value.signatureAlgorithm, $.BER),
            /* REQUIRED   */ $._encodeBitString(value.signature, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_CertificateList(value, elGetter);
}


/* eslint-enable */
