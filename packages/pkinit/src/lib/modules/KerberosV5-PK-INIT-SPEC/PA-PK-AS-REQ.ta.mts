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
import { ContentInfo, _decode_ContentInfo, _encode_ContentInfo } from "../CryptographicMessageSyntax/ContentInfo.ta.mjs";
// export { ContentInfo, _decode_ContentInfo, _encode_ContentInfo } from "../CryptographicMessageSyntax/ContentInfo.ta.mjs";
import { ExternalPrincipalIdentifier, _decode_ExternalPrincipalIdentifier, _encode_ExternalPrincipalIdentifier } from "../KerberosV5-PK-INIT-SPEC/ExternalPrincipalIdentifier.ta.mjs";
// export { ExternalPrincipalIdentifier, _decode_ExternalPrincipalIdentifier, _encode_ExternalPrincipalIdentifier } from "../KerberosV5-PK-INIT-SPEC/ExternalPrincipalIdentifier.ta.mjs";


/**
 * @summary PA_PK_AS_REQ
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PA-PK-AS-REQ ::= SEQUENCE {
 *     signedAuthPack          [0] ContentInfo, --IMPLICIT OCTET STRING,
 *             -- Contains a CMS type ContentInfo encoded
 *             -- according to [RFC3852].
 *             -- The contentType field of the type ContentInfo
 *             -- is id-signedData (1.2.840.113549.1.7.2),
 *             -- and the content field is a SignedData.
 *             -- The eContentType field for the type SignedData is
 *             -- id-pkinit-authData (1.3.6.1.5.2.3.1), and the
 *             -- eContent field contains the DER encoding of the
 *             -- type AuthPack.
 *             -- AuthPack is defined below.
 *     trustedCertifiers       [1] SEQUENCE OF
 *                 ExternalPrincipalIdentifier OPTIONAL,
 *             -- Contains a list of CAs, trusted by the client,
 *             -- that can be used to certify the KDC.
 *             -- Each ExternalPrincipalIdentifier identifies a CA
 *             -- or a CA certificate (thereby its public key).
 *             -- The information contained in the
 *             -- trustedCertifiers SHOULD be used by the KDC as
 *             -- hints to guide its selection of an appropriate
 *             -- certificate chain to return to the client.
 *     kdcPkId                 [2] IMPLICIT OCTET STRING
 *                                 OPTIONAL,
 *             -- Contains a CMS type SignerIdentifier encoded
 *             -- according to [RFC3852].
 *             -- Identifies, if present, a particular KDC
 *             -- public key that the client already has.
 *     ...
 * }
 * ```
 * 
 * @class
 */
export
class PA_PK_AS_REQ {
    constructor (
        /**
         * @summary `signedAuthPack`.
         * @public
         * @readonly
         */
        readonly signedAuthPack: ContentInfo,
        /**
         * @summary `trustedCertifiers`.
         * @public
         * @readonly
         */
        readonly trustedCertifiers: OPTIONAL<ExternalPrincipalIdentifier[]>,
        /**
         * @summary `kdcPkId`.
         * @public
         * @readonly
         */
        readonly kdcPkId: OPTIONAL<OCTET_STRING>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a PA_PK_AS_REQ
     * @description
     * 
     * This takes an `object` and converts it to a `PA_PK_AS_REQ`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PA_PK_AS_REQ`.
     * @returns {PA_PK_AS_REQ}
     */
    public static _from_object (_o: { [_K in keyof (PA_PK_AS_REQ)]: (PA_PK_AS_REQ)[_K] }): PA_PK_AS_REQ {
        return new PA_PK_AS_REQ(_o.signedAuthPack, _o.trustedCertifiers, _o.kdcPkId, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of PA_PK_AS_REQ
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PA_PK_AS_REQ: $.ComponentSpec[] = [
    new $.ComponentSpec("signedAuthPack", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("trustedCertifiers", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("kdcPkId", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of PA_PK_AS_REQ
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PA_PK_AS_REQ: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PA_PK_AS_REQ
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PA_PK_AS_REQ: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PA_PK_AS_REQ: $.ASN1Decoder<PA_PK_AS_REQ> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PA_PK_AS_REQ
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PA_PK_AS_REQ (el: _Element): PA_PK_AS_REQ {
    if (!_cached_decoder_for_PA_PK_AS_REQ) { _cached_decoder_for_PA_PK_AS_REQ = function (el: _Element): PA_PK_AS_REQ {
    let signedAuthPack!: ContentInfo;
    let trustedCertifiers: OPTIONAL<ExternalPrincipalIdentifier[]>;
    let kdcPkId: OPTIONAL<OCTET_STRING>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "signedAuthPack": (_el: _Element): void => { signedAuthPack = $._decode_explicit<ContentInfo>(() => _decode_ContentInfo)(_el); },
        "trustedCertifiers": (_el: _Element): void => { trustedCertifiers = $._decode_explicit<ExternalPrincipalIdentifier[]>(() => $._decodeSequenceOf<ExternalPrincipalIdentifier>(() => _decode_ExternalPrincipalIdentifier))(_el); },
        "kdcPkId": (_el: _Element): void => { kdcPkId = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_PA_PK_AS_REQ,
        _extension_additions_list_spec_for_PA_PK_AS_REQ,
        _root_component_type_list_2_spec_for_PA_PK_AS_REQ,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new PA_PK_AS_REQ(
        signedAuthPack,
        trustedCertifiers,
        kdcPkId,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_PA_PK_AS_REQ(el);
}

let _cached_encoder_for_PA_PK_AS_REQ: $.ASN1Encoder<PA_PK_AS_REQ> | null = null;

/**
 * @summary Encodes a(n) PA_PK_AS_REQ into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PA_PK_AS_REQ, encoded as an ASN.1 Element.
 */
export
function _encode_PA_PK_AS_REQ (value: PA_PK_AS_REQ, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PA_PK_AS_REQ) { _cached_encoder_for_PA_PK_AS_REQ = function (value: PA_PK_AS_REQ, elGetter: $.ASN1Encoder<PA_PK_AS_REQ>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_ContentInfo, $.BER)(value.signedAuthPack, $.BER),
            /* IF_ABSENT  */ ((value.trustedCertifiers === undefined) ? undefined : $._encode_explicit(_TagClass.context, 1, () => $._encodeSequenceOf<ExternalPrincipalIdentifier>(() => _encode_ExternalPrincipalIdentifier, $.BER), $.BER)(value.trustedCertifiers, $.BER)),
            /* IF_ABSENT  */ ((value.kdcPkId === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER)(value.kdcPkId, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_PA_PK_AS_REQ(value, elGetter);
}


/* eslint-enable */
