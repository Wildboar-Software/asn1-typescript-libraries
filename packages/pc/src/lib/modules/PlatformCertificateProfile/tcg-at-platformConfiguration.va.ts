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
import { tcg_common } from "../PlatformCertificateProfile/tcg-common.va.js";
export { tcg_common } from "../PlatformCertificateProfile/tcg-common.va.js";


/* START_OF_SYMBOL_DEFINITION tcg_at_platformConfiguration */
/**
 * @summary tcg_at_platformConfiguration
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tcg-at-platformConfiguration OBJECT IDENTIFIER ::= {tcg-common 7}
 * ```
 * 
 * @constant
 */
export
const tcg_at_platformConfiguration: OBJECT_IDENTIFIER = new _OID([
    7,
], tcg_common);
/* END_OF_SYMBOL_DEFINITION tcg_at_platformConfiguration */

/* eslint-enable */
