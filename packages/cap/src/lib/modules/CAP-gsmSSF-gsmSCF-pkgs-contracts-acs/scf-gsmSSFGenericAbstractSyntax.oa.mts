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
import { GenericSCF_gsmSSF_PDUs, _decode_GenericSCF_gsmSSF_PDUs, _encode_GenericSCF_gsmSSF_PDUs } from "../CAP-gsmSSF-gsmSCF-pkgs-contracts-acs/GenericSCF-gsmSSF-PDUs.ta.mjs";
// export { GenericSCF_gsmSSF_PDUs, _decode_GenericSCF_gsmSSF_PDUs, _encode_GenericSCF_gsmSSF_PDUs } from "../CAP-gsmSSF-gsmSCF-pkgs-contracts-acs/GenericSCF-gsmSSF-PDUs.ta.mjs";
import { id_as_scf_gsmSSFGenericAS } from "../CAP-object-identifiers/id-as-scf-gsmSSFGenericAS.va.mjs";
// export { id_as_scf_gsmSSFGenericAS } from "../CAP-object-identifiers/id-as-scf-gsmSSFGenericAS.va.mjs";


/**
 * @summary scf_gsmSSFGenericAbstractSyntax
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * scf-gsmSSFGenericAbstractSyntax    ABSTRACT-SYNTAX ::= {
 *     GenericSCF-gsmSSF-PDUs
 *     IDENTIFIED BY    id-as-scf-gsmSSFGenericAS}
 * ```
 * 
 * @constant
 * @type {ABSTRACT_SYNTAX<GenericSCF_gsmSSF_PDUs>}
 * @implements {ABSTRACT_SYNTAX<GenericSCF_gsmSSF_PDUs>}
 */
export
const scf_gsmSSFGenericAbstractSyntax: ABSTRACT_SYNTAX<GenericSCF_gsmSSF_PDUs> = {
    class: "ABSTRACT-SYNTAX",
    decoderFor: {
        "&Type": _decode_GenericSCF_gsmSSF_PDUs,
    },
    encoderFor: {
        "&Type": _encode_GenericSCF_gsmSSF_PDUs,
    },
    "&id": id_as_scf_gsmSSFGenericAS /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&property": undefined,
};

/* eslint-enable */
