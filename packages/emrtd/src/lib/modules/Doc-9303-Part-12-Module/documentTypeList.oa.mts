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
import { DocumentTypeListSyntax, _decode_DocumentTypeListSyntax, _encode_DocumentTypeListSyntax } from "../Doc-9303-Part-12-Module/DocumentTypeListSyntax.ta.mjs";
// export { DocumentTypeListSyntax, _decode_DocumentTypeListSyntax, _encode_DocumentTypeListSyntax } from "../Doc-9303-Part-12-Module/DocumentTypeListSyntax.ta.mjs";
import { id_icao_mrtd_security_extensions_documentTypeList } from "../Doc-9303-Part-12-Module/id-icao-mrtd-security-extensions-documentTypeList.va.mjs";
// export { id_icao_mrtd_security_extensions_documentTypeList } from "../Doc-9303-Part-12-Module/id-icao-mrtd-security-extensions-documentTypeList.va.mjs";
import { type EXTENSION } from "../AuthenticationFramework/EXTENSION.oca.mjs";


/**
 * @summary documentTypeList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * documentTypeList EXTENSION ::= {
 *     SYNTAX DocumentTypeListSyntax
 *     IDENTIFIED BY id-icao-mrtd-security-extensions-documentTypeList
 * }
 * ```
 * 
 * @constant
 * @type {EXTENSION<DocumentTypeListSyntax>}
 * @implements {EXTENSION<DocumentTypeListSyntax>}
 */
export
const documentTypeList: EXTENSION<DocumentTypeListSyntax> = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtnType": _decode_DocumentTypeListSyntax,
    },
    encoderFor: {
        "&ExtnType": _encode_DocumentTypeListSyntax,
    },
    "&id": id_icao_mrtd_security_extensions_documentTypeList /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ExtnType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
