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
import { KeyUsage, KeyUsage_digitalSignature /* IMPORTED_LONG_NAMED_BIT */, digitalSignature /* IMPORTED_SHORT_NAMED_BIT */, KeyUsage_contentCommitment /* IMPORTED_LONG_NAMED_BIT */, contentCommitment /* IMPORTED_SHORT_NAMED_BIT */, KeyUsage_keyEncipherment /* IMPORTED_LONG_NAMED_BIT */, keyEncipherment /* IMPORTED_SHORT_NAMED_BIT */, KeyUsage_dataEncipherment /* IMPORTED_LONG_NAMED_BIT */, dataEncipherment /* IMPORTED_SHORT_NAMED_BIT */, KeyUsage_keyAgreement /* IMPORTED_LONG_NAMED_BIT */, keyAgreement /* IMPORTED_SHORT_NAMED_BIT */, KeyUsage_keyCertSign /* IMPORTED_LONG_NAMED_BIT */, keyCertSign /* IMPORTED_SHORT_NAMED_BIT */, KeyUsage_cRLSign /* IMPORTED_LONG_NAMED_BIT */, cRLSign /* IMPORTED_SHORT_NAMED_BIT */, KeyUsage_encipherOnly /* IMPORTED_LONG_NAMED_BIT */, encipherOnly /* IMPORTED_SHORT_NAMED_BIT */, KeyUsage_decipherOnly /* IMPORTED_LONG_NAMED_BIT */, decipherOnly /* IMPORTED_SHORT_NAMED_BIT */, _decode_KeyUsage, _encode_KeyUsage } from "../CertificateExtensions/KeyUsage.ta.mjs";
// export { KeyUsage, KeyUsage_digitalSignature /* IMPORTED_LONG_NAMED_BIT */, digitalSignature /* IMPORTED_SHORT_NAMED_BIT */, KeyUsage_contentCommitment /* IMPORTED_LONG_NAMED_BIT */, contentCommitment /* IMPORTED_SHORT_NAMED_BIT */, KeyUsage_keyEncipherment /* IMPORTED_LONG_NAMED_BIT */, keyEncipherment /* IMPORTED_SHORT_NAMED_BIT */, KeyUsage_dataEncipherment /* IMPORTED_LONG_NAMED_BIT */, dataEncipherment /* IMPORTED_SHORT_NAMED_BIT */, KeyUsage_keyAgreement /* IMPORTED_LONG_NAMED_BIT */, keyAgreement /* IMPORTED_SHORT_NAMED_BIT */, KeyUsage_keyCertSign /* IMPORTED_LONG_NAMED_BIT */, keyCertSign /* IMPORTED_SHORT_NAMED_BIT */, KeyUsage_cRLSign /* IMPORTED_LONG_NAMED_BIT */, cRLSign /* IMPORTED_SHORT_NAMED_BIT */, KeyUsage_encipherOnly /* IMPORTED_LONG_NAMED_BIT */, encipherOnly /* IMPORTED_SHORT_NAMED_BIT */, KeyUsage_decipherOnly /* IMPORTED_LONG_NAMED_BIT */, decipherOnly /* IMPORTED_SHORT_NAMED_BIT */, _decode_KeyUsage, _encode_KeyUsage } from "../CertificateExtensions/KeyUsage.ta.mjs";
import { id_ce_keyUsage } from "../CertificateExtensions/id-ce-keyUsage.va.mjs";
// export { id_ce_keyUsage } from "../CertificateExtensions/id-ce-keyUsage.va.mjs";
import { type EXTENSION } from "../AuthenticationFramework/EXTENSION.oca.mjs";


/**
 * @summary keyUsage
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * keyUsage EXTENSION ::= {
 *   SYNTAX         KeyUsage
 *   IDENTIFIED BY  id-ce-keyUsage }
 * ```
 * 
 * @constant
 * @type {EXTENSION<KeyUsage>}
 * @implements {EXTENSION<KeyUsage>}
 */
export
const keyUsage: EXTENSION<KeyUsage> = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtnType": _decode_KeyUsage,
    },
    encoderFor: {
        "&ExtnType": _encode_KeyUsage,
    },
    "&id": id_ce_keyUsage /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ExtnType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
