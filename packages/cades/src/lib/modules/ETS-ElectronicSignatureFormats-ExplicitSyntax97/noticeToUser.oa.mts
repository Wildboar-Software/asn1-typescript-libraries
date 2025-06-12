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
import { id_spq_ets_unotice } from "../ETS-ElectronicSignatureFormats-ExplicitSyntax97/id-spq-ets-unotice.va.mjs";
export { id_spq_ets_unotice } from "../ETS-ElectronicSignatureFormats-ExplicitSyntax97/id-spq-ets-unotice.va.mjs";
import { SPUserNotice, _decode_SPUserNotice, _encode_SPUserNotice } from "../ETS-ElectronicSignatureFormats-ExplicitSyntax97/SPUserNotice.ta.mjs";
export { SPUserNotice, _decode_SPUserNotice, _encode_SPUserNotice } from "../ETS-ElectronicSignatureFormats-ExplicitSyntax97/SPUserNotice.ta.mjs";
import { SIG_POLICY_QUALIFIER } from "../ETS-ElectronicSignatureFormats-ExplicitSyntax97/SIG-POLICY-QUALIFIER.oca.mjs";
export { SIG_POLICY_QUALIFIER } from "../ETS-ElectronicSignatureFormats-ExplicitSyntax97/SIG-POLICY-QUALIFIER.oca.mjs";


/* START_OF_SYMBOL_DEFINITION noticeToUser */
/**
 * @summary noticeToUser
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * noticeToUser SIG-POLICY-QUALIFIER ::= {
 *     SIG-POLICY-QUALIFIER-ID     id-spq-ets-unotice
 *     SIG-QUALIFIER-TYPE          SPUserNotice }
 * ```
 * 
 * @constant
 * @type {SIG_POLICY_QUALIFIER<SPUserNotice>}
 * @implements {SIG_POLICY_QUALIFIER<SPUserNotice>}
 */
export
const noticeToUser: SIG_POLICY_QUALIFIER<SPUserNotice> = {
    class: "SIG-POLICY-QUALIFIER",
    decoderFor: {
        "&Qualifier": _decode_SPUserNotice,
    },
    encoderFor: {
        "&Qualifier": _encode_SPUserNotice,
    },
    "&id": id_spq_ets_unotice /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Qualifier": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION noticeToUser */

/* eslint-enable */
