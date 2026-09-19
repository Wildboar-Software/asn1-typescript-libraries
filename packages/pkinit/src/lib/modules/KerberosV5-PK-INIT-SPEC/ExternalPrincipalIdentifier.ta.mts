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
import { Name, _decode_Name, _encode_Name } from "../PKIX1Explicit88/Name.ta.mjs";
// export { Name, _decode_Name, _encode_Name } from "../PKIX1Explicit88/Name.ta.mjs";
import { IssuerAndSerialNumber, _decode_IssuerAndSerialNumber, _encode_IssuerAndSerialNumber } from "../CryptographicMessageSyntax/IssuerAndSerialNumber.ta.mjs";
// export { IssuerAndSerialNumber, _decode_IssuerAndSerialNumber, _encode_IssuerAndSerialNumber } from "../CryptographicMessageSyntax/IssuerAndSerialNumber.ta.mjs";


/**
 * @summary ExternalPrincipalIdentifier
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ExternalPrincipalIdentifier ::= SEQUENCE {
 *     subjectName            [0] Name, --IMPLICIT OCTET STRING OPTIONAL,
 *             -- Contains a PKIX type Name encoded according to
 *             -- [RFC3280].
 *             -- Identifies the certificate subject by the
 *             -- distinguished subject name.
 *             -- REQUIRED when there is a distinguished subject
 *             -- name present in the certificate.
 *     issuerAndSerialNumber   [1] IssuerAndSerialNumber, --IMPLICIT OCTET STRING OPTIONAL,
 *             -- Contains a CMS type IssuerAndSerialNumber encoded
 *             -- according to [RFC3852].
 *             -- Identifies a certificate of the subject.
 *             -- REQUIRED for TD-INVALID-CERTIFICATES and
 *             -- TD-TRUSTED-CERTIFIERS.
 *     subjectKeyIdentifier    [2] IMPLICIT OCTET STRING OPTIONAL,
 *             -- Identifies the subject's public key by a key
 *             -- identifier.  When an X.509 certificate is
 *             -- referenced, this key identifier matches the X.509
 *             -- subjectKeyIdentifier extension value.  When other
 *             -- certificate formats are referenced, the documents
 *             -- that specify the certificate format and their use
 *             -- with the CMS must include details on matching the
 *             -- key identifier to the appropriate certificate
 *             -- field.
 *             -- RECOMMENDED for TD-TRUSTED-CERTIFIERS.
 *     ...
 * }
 * ```
 * 
 * @class
 */
export
class ExternalPrincipalIdentifier {
    constructor (
        /**
         * @summary `subjectName`.
         * @public
         * @readonly
         */
        readonly subjectName: Name,
        /**
         * @summary `issuerAndSerialNumber`.
         * @public
         * @readonly
         */
        readonly issuerAndSerialNumber: IssuerAndSerialNumber,
        /**
         * @summary `subjectKeyIdentifier`.
         * @public
         * @readonly
         */
        readonly subjectKeyIdentifier: OPTIONAL<OCTET_STRING>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a ExternalPrincipalIdentifier
     * @description
     * 
     * This takes an `object` and converts it to a `ExternalPrincipalIdentifier`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ExternalPrincipalIdentifier`.
     * @returns {ExternalPrincipalIdentifier}
     */
    public static _from_object (_o: { [_K in keyof (ExternalPrincipalIdentifier)]: (ExternalPrincipalIdentifier)[_K] }): ExternalPrincipalIdentifier {
        return new ExternalPrincipalIdentifier(_o.subjectName, _o.issuerAndSerialNumber, _o.subjectKeyIdentifier, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of ExternalPrincipalIdentifier
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ExternalPrincipalIdentifier: $.ComponentSpec[] = [
    new $.ComponentSpec("subjectName", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("issuerAndSerialNumber", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("subjectKeyIdentifier", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of ExternalPrincipalIdentifier
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ExternalPrincipalIdentifier: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ExternalPrincipalIdentifier
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ExternalPrincipalIdentifier: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ExternalPrincipalIdentifier: $.ASN1Decoder<ExternalPrincipalIdentifier> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ExternalPrincipalIdentifier
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ExternalPrincipalIdentifier (el: _Element): ExternalPrincipalIdentifier {
    if (!_cached_decoder_for_ExternalPrincipalIdentifier) { _cached_decoder_for_ExternalPrincipalIdentifier = function (el: _Element): ExternalPrincipalIdentifier {
    let subjectName!: Name;
    let issuerAndSerialNumber!: IssuerAndSerialNumber;
    let subjectKeyIdentifier: OPTIONAL<OCTET_STRING>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "subjectName": (_el: _Element): void => { subjectName = $._decode_explicit<Name>(() => _decode_Name)(_el); },
        "issuerAndSerialNumber": (_el: _Element): void => { issuerAndSerialNumber = $._decode_explicit<IssuerAndSerialNumber>(() => _decode_IssuerAndSerialNumber)(_el); },
        "subjectKeyIdentifier": (_el: _Element): void => { subjectKeyIdentifier = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ExternalPrincipalIdentifier,
        _extension_additions_list_spec_for_ExternalPrincipalIdentifier,
        _root_component_type_list_2_spec_for_ExternalPrincipalIdentifier,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new ExternalPrincipalIdentifier(
        subjectName,
        issuerAndSerialNumber,
        subjectKeyIdentifier,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_ExternalPrincipalIdentifier(el);
}

let _cached_encoder_for_ExternalPrincipalIdentifier: $.ASN1Encoder<ExternalPrincipalIdentifier> | null = null;

/**
 * @summary Encodes a(n) ExternalPrincipalIdentifier into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ExternalPrincipalIdentifier, encoded as an ASN.1 Element.
 */
export
function _encode_ExternalPrincipalIdentifier (value: ExternalPrincipalIdentifier, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ExternalPrincipalIdentifier) { _cached_encoder_for_ExternalPrincipalIdentifier = function (value: ExternalPrincipalIdentifier, elGetter: $.ASN1Encoder<ExternalPrincipalIdentifier>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_Name, $.BER)(value.subjectName, $.BER),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_IssuerAndSerialNumber, $.BER)(value.issuerAndSerialNumber, $.BER),
            /* IF_ABSENT  */ ((value.subjectKeyIdentifier === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER)(value.subjectKeyIdentifier, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ExternalPrincipalIdentifier(value, elGetter);
}


/* eslint-enable */
