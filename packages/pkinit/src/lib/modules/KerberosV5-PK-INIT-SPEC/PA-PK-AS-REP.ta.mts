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
import { DHRepInfo, _decode_DHRepInfo, _encode_DHRepInfo } from "../KerberosV5-PK-INIT-SPEC/DHRepInfo.ta.mjs";
// export { DHRepInfo, _decode_DHRepInfo, _encode_DHRepInfo } from "../KerberosV5-PK-INIT-SPEC/DHRepInfo.ta.mjs";
import { ContentInfo, _decode_ContentInfo, _encode_ContentInfo } from "../CryptographicMessageSyntax/ContentInfo.ta.mjs";
// export { ContentInfo, _decode_ContentInfo, _encode_ContentInfo } from "../CryptographicMessageSyntax/ContentInfo.ta.mjs";


/**
 * @summary PA_PK_AS_REP
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PA-PK-AS-REP  ::=  CHOICE {
 *     dhInfo                  [0] DHRepInfo,
 *             -- Selected when Diffie-Hellman key exchange is
 *             -- used.
 *     encKeyPack              [1] ContentInfo, --IMPLICIT OCTET STRING,
 *             -- Selected when public key encryption is used.
 *             -- Contains a CMS type ContentInfo encoded
 *             -- according to [RFC3852].
 *             -- The contentType field of the type ContentInfo is
 *             -- id-envelopedData (1.2.840.113549.1.7.3).
 *             -- The content field is an EnvelopedData.
 *             -- The contentType field for the type EnvelopedData
 *             -- is id-signedData (1.2.840.113549.1.7.2).
 *             -- The eContentType field for the inner type
 *             -- SignedData (when unencrypted) is
 *             -- id-pkinit-rkeyData (1.3.6.1.5.2.3.3) and the
 *             -- eContent field contains the DER encoding of the
 *             -- type ReplyKeyPack.
 *             -- ReplyKeyPack is defined below.
 *     ...
 * }
 * ```
 */
export
type PA_PK_AS_REP =
    { dhInfo: DHRepInfo } /* CHOICE_ALT_ROOT */
    | { encKeyPack: ContentInfo } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_PA_PK_AS_REP: $.ASN1Decoder<PA_PK_AS_REP> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PA_PK_AS_REP
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PA_PK_AS_REP (el: _Element): PA_PK_AS_REP {
    if (!_cached_decoder_for_PA_PK_AS_REP) { _cached_decoder_for_PA_PK_AS_REP = $._decode_extensible_choice<PA_PK_AS_REP>({
    "CONTEXT 0": [ "dhInfo", $._decode_implicit<DHRepInfo>(() => _decode_DHRepInfo) ],
    "CONTEXT 1": [ "encKeyPack", $._decode_implicit<ContentInfo>(() => _decode_ContentInfo) ]
}); }
    return _cached_decoder_for_PA_PK_AS_REP(el);
}

let _cached_encoder_for_PA_PK_AS_REP: $.ASN1Encoder<PA_PK_AS_REP> | null = null;

/**
 * @summary Encodes a(n) PA_PK_AS_REP into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PA_PK_AS_REP, encoded as an ASN.1 Element.
 */
export
function _encode_PA_PK_AS_REP (value: PA_PK_AS_REP, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PA_PK_AS_REP) { _cached_encoder_for_PA_PK_AS_REP = $._encode_choice<PA_PK_AS_REP>({
    "dhInfo": $._encode_implicit(_TagClass.context, 0, () => _encode_DHRepInfo, $.BER),
    "encKeyPack": $._encode_implicit(_TagClass.context, 1, () => _encode_ContentInfo, $.BER),
}, $.BER); }
    return _cached_encoder_for_PA_PK_AS_REP(value, elGetter);
}


/* eslint-enable */
