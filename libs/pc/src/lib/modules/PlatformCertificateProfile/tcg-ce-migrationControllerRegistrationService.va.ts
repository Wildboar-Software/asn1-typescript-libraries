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
import * as $ from "asn1-ts/dist/node/functional";
import { tcg_ce } from "../PlatformCertificateProfile/tcg-ce.va";
export { tcg_ce } from "../PlatformCertificateProfile/tcg-ce.va";


/* START_OF_SYMBOL_DEFINITION tcg_ce_migrationControllerRegistrationService */
/**
 * @summary tcg_ce_migrationControllerRegistrationService
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tcg-ce-migrationControllerRegistrationService OBJECT IDENTIFIER ::= {tcg-ce 6}
 * ```
 * 
 * @constant
 */
export
const tcg_ce_migrationControllerRegistrationService: OBJECT_IDENTIFIER = new _OID([
    6,
], tcg_ce);
/* END_OF_SYMBOL_DEFINITION tcg_ce_migrationControllerRegistrationService */

/* eslint-enable */
