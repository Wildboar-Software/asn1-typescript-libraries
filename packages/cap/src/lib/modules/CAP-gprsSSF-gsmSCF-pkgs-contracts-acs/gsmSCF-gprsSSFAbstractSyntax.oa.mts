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
import { GenericGsmSCF_gprsSSF_PDUs, _decode_GenericGsmSCF_gprsSSF_PDUs, _encode_GenericGsmSCF_gprsSSF_PDUs } from "../CAP-gprsSSF-gsmSCF-pkgs-contracts-acs/GenericGsmSCF-gprsSSF-PDUs.ta.mjs";
// export { GenericGsmSCF_gprsSSF_PDUs, _decode_GenericGsmSCF_gprsSSF_PDUs, _encode_GenericGsmSCF_gprsSSF_PDUs } from "../CAP-gprsSSF-gsmSCF-pkgs-contracts-acs/GenericGsmSCF-gprsSSF-PDUs.ta.mjs";
import { id_as_gsmSCF_gprsSSF_AS } from "../CAP-object-identifiers/id-as-gsmSCF-gprsSSF-AS.va.mjs";
// export { id_as_gsmSCF_gprsSSF_AS } from "../CAP-object-identifiers/id-as-gsmSCF-gprsSSF-AS.va.mjs";


/**
 * @summary gsmSCF_gprsSSFAbstractSyntax
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * gsmSCF-gprsSSFAbstractSyntax ABSTRACT-SYNTAX ::= {
 *     GenericGsmSCF-gprsSSF-PDUs
 *     IDENTIFIED BY    id-as-gsmSCF-gprsSSF-AS}
 * ```
 * 
 * @constant
 * @type {ABSTRACT_SYNTAX<GenericGsmSCF_gprsSSF_PDUs>}
 * @implements {ABSTRACT_SYNTAX<GenericGsmSCF_gprsSSF_PDUs>}
 */
export
const gsmSCF_gprsSSFAbstractSyntax: ABSTRACT_SYNTAX<GenericGsmSCF_gprsSSF_PDUs> = {
    class: "ABSTRACT-SYNTAX",
    decoderFor: {
        "&Type": _decode_GenericGsmSCF_gprsSSF_PDUs,
    },
    encoderFor: {
        "&Type": _encode_GenericGsmSCF_gprsSSF_PDUs,
    },
    "&id": id_as_gsmSCF_gprsSSF_AS /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&property": undefined,
};

/* eslint-enable */
