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
import { id_spq_ets_uri } from "../ETS-ElectronicSignatureFormats-ExplicitSyntax97/id-spq-ets-uri.va.mjs";
export { id_spq_ets_uri } from "../ETS-ElectronicSignatureFormats-ExplicitSyntax97/id-spq-ets-uri.va.mjs";
import { SPuri, _decode_SPuri, _encode_SPuri } from "../ETS-ElectronicSignatureFormats-ExplicitSyntax97/SPuri.ta.mjs";
export { SPuri, _decode_SPuri, _encode_SPuri } from "../ETS-ElectronicSignatureFormats-ExplicitSyntax97/SPuri.ta.mjs";
import { SIG_POLICY_QUALIFIER } from "../ETS-ElectronicSignatureFormats-ExplicitSyntax97/SIG-POLICY-QUALIFIER.oca.mjs";
export { SIG_POLICY_QUALIFIER } from "../ETS-ElectronicSignatureFormats-ExplicitSyntax97/SIG-POLICY-QUALIFIER.oca.mjs";


/* START_OF_SYMBOL_DEFINITION pointerToSigPolSpec */
/**
 * @summary pointerToSigPolSpec
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * pointerToSigPolSpec SIG-POLICY-QUALIFIER ::= {
 *     SIG-POLICY-QUALIFIER-ID     id-spq-ets-uri
 *     SIG-QUALIFIER-TYPE          SPuri }
 * ```
 * 
 * @constant
 * @type {SIG_POLICY_QUALIFIER<SPuri>}
 * @implements {SIG_POLICY_QUALIFIER<SPuri>}
 */
export
const pointerToSigPolSpec: SIG_POLICY_QUALIFIER<SPuri> = {
    class: "SIG-POLICY-QUALIFIER",
    decoderFor: {
        "&Qualifier": _decode_SPuri,
    },
    encoderFor: {
        "&Qualifier": _encode_SPuri,
    },
    "&id": id_spq_ets_uri /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Qualifier": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION pointerToSigPolSpec */

/* eslint-enable */
