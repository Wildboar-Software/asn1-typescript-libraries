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
import { Certificate, _decode_Certificate, _encode_Certificate } from "../AuthenticationFramework/Certificate.ta.mjs";
// export { Certificate, _decode_Certificate, _encode_Certificate } from "../AuthenticationFramework/Certificate.ta.mjs";
import { CertificatePair, _decode_CertificatePair, _encode_CertificatePair } from "../AuthenticationFramework/CertificatePair.ta.mjs";
// export { CertificatePair, _decode_CertificatePair, _encode_CertificatePair } from "../AuthenticationFramework/CertificatePair.ta.mjs";


/**
 * @summary CertificationPath
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CertificationPath ::= SEQUENCE {
 *   userCertificate    Certificate,
 *   theCACertificates  SEQUENCE SIZE (1..MAX) OF CertificatePair OPTIONAL,
 *   ... }
 * ```
 * 
 * @class
 */
export
class CertificationPath {
    constructor (
        /**
         * @summary `userCertificate`.
         * @public
         * @readonly
         */
        readonly userCertificate: Certificate,
        /**
         * @summary `theCACertificates`.
         * @public
         * @readonly
         */
        readonly theCACertificates: OPTIONAL<CertificatePair[]>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a CertificationPath
     * @description
     * 
     * This takes an `object` and converts it to a `CertificationPath`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CertificationPath`.
     * @returns {CertificationPath}
     */
    public static _from_object (_o: { [_K in keyof (CertificationPath)]: (CertificationPath)[_K] }): CertificationPath {
        return new CertificationPath(_o.userCertificate, _o.theCACertificates, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of CertificationPath
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CertificationPath: $.ComponentSpec[] = [
    new $.ComponentSpec("userCertificate", false, $.hasTag(_TagClass.universal, 16), undefined, undefined),
    new $.ComponentSpec("theCACertificates", true, $.hasTag(_TagClass.universal, 16), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of CertificationPath
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CertificationPath: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CertificationPath
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CertificationPath: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CertificationPath: $.ASN1Decoder<CertificationPath> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CertificationPath
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CertificationPath (el: _Element): CertificationPath {
    if (!_cached_decoder_for_CertificationPath) { _cached_decoder_for_CertificationPath = function (el: _Element): CertificationPath {
    let userCertificate!: Certificate;
    let theCACertificates: OPTIONAL<CertificatePair[]>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "userCertificate": (_el: _Element): void => { userCertificate = _decode_Certificate(_el); },
        "theCACertificates": (_el: _Element): void => { theCACertificates = $._decodeSequenceOf<CertificatePair>(() => _decode_CertificatePair)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CertificationPath,
        _extension_additions_list_spec_for_CertificationPath,
        _root_component_type_list_2_spec_for_CertificationPath,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new CertificationPath(
        userCertificate,
        theCACertificates,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_CertificationPath(el);
}

let _cached_encoder_for_CertificationPath: $.ASN1Encoder<CertificationPath> | null = null;

/**
 * @summary Encodes a(n) CertificationPath into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertificationPath, encoded as an ASN.1 Element.
 */
export
function _encode_CertificationPath (value: CertificationPath, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CertificationPath) { _cached_encoder_for_CertificationPath = function (value: CertificationPath, elGetter: $.ASN1Encoder<CertificationPath>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_Certificate(value.userCertificate, $.BER),
            /* IF_ABSENT  */ ((value.theCACertificates === undefined) ? undefined : $._encodeSequenceOf<CertificatePair>(() => _encode_CertificatePair, $.BER)(value.theCACertificates, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_CertificationPath(value, elGetter);
}


/* eslint-enable */
