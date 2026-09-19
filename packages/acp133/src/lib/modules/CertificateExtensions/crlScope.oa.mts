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
import { CRLScopeSyntax, _decode_CRLScopeSyntax, _encode_CRLScopeSyntax } from "../CertificateExtensions/CRLScopeSyntax.ta.mjs";
// export { CRLScopeSyntax, _decode_CRLScopeSyntax, _encode_CRLScopeSyntax } from "../CertificateExtensions/CRLScopeSyntax.ta.mjs";
import { id_ce_cRLScope } from "../CertificateExtensions/id-ce-cRLScope.va.mjs";
// export { id_ce_cRLScope } from "../CertificateExtensions/id-ce-cRLScope.va.mjs";
import { type EXTENSION } from "../AuthenticationFramework/EXTENSION.oca.mjs";


/**
 * @summary crlScope
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * crlScope EXTENSION ::= {
 *   SYNTAX         CRLScopeSyntax
 *   IDENTIFIED BY  id-ce-cRLScope }
 * ```
 * 
 * @constant
 * @type {EXTENSION<CRLScopeSyntax>}
 * @implements {EXTENSION<CRLScopeSyntax>}
 */
export
const crlScope: EXTENSION<CRLScopeSyntax> = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtnType": _decode_CRLScopeSyntax,
    },
    encoderFor: {
        "&ExtnType": _encode_CRLScopeSyntax,
    },
    "&id": id_ce_cRLScope /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ExtnType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
