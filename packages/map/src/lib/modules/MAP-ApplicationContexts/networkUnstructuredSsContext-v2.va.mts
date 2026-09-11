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
import { map_ac } from "../MAP-ApplicationContexts/map-ac.va.mjs";


/**
 * @summary networkUnstructuredSsContext_v2
 * @description
 *
 * Stimuli-like (USSD) procedures between HLR and VLR, HLR and gsmSCF, and HLR
 * and HLR. Symmetric operations of `unstructuredSsPackage-v2`. Version 2; v1
 * equivalent is `networkFunctionalSs` version 1 (3GPP TS 29.002 V19.1.0 clause
 * 17.3.2.20).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * networkUnstructuredSsContext-v2  OBJECT IDENTIFIER ::= {map-ac networkUnstructuredSs(19) version2(2)}
 * ```
 * 
 * @constant
 */
export
const networkUnstructuredSsContext_v2: OBJECT_IDENTIFIER = _OID.fromParts([
    /* networkUnstructuredSs */ 19,
    /* version2 */ 2,
], map_ac);

/* eslint-enable */
