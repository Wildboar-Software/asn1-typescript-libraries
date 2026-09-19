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
import { AuthorityKeyIdentifier, _decode_AuthorityKeyIdentifier, _encode_AuthorityKeyIdentifier } from "../CertificateExtensions/AuthorityKeyIdentifier.ta.mjs";
// export { AuthorityKeyIdentifier, _decode_AuthorityKeyIdentifier, _encode_AuthorityKeyIdentifier } from "../CertificateExtensions/AuthorityKeyIdentifier.ta.mjs";
import { id_ce_authorityKeyIdentifier } from "../CertificateExtensions/id-ce-authorityKeyIdentifier.va.mjs";
// export { id_ce_authorityKeyIdentifier } from "../CertificateExtensions/id-ce-authorityKeyIdentifier.va.mjs";
import { type EXTENSION } from "../AuthenticationFramework/EXTENSION.oca.mjs";


/**
 * @summary authorityKeyIdentifier
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * authorityKeyIdentifier EXTENSION ::= {
 *   SYNTAX         AuthorityKeyIdentifier
 *   IDENTIFIED BY  id-ce-authorityKeyIdentifier }
 * ```
 * 
 * @constant
 * @type {EXTENSION<AuthorityKeyIdentifier>}
 * @implements {EXTENSION<AuthorityKeyIdentifier>}
 */
export
const authorityKeyIdentifier: EXTENSION<AuthorityKeyIdentifier> = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtnType": _decode_AuthorityKeyIdentifier,
    },
    encoderFor: {
        "&ExtnType": _encode_AuthorityKeyIdentifier,
    },
    "&id": id_ce_authorityKeyIdentifier /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ExtnType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
