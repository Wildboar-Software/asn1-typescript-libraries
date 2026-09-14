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
import { CIO_ALGORITHM } from "../CryptographicInformationFramework/CIO-ALGORITHM.oca.mjs";
// export { CIO_ALGORITHM } from "../CryptographicInformationFramework/CIO-ALGORITHM.oca.mjs";
import { cia_alg_null } from "../CryptographicInformationFramework/cia-alg-null.oa.mjs";
// export { cia_alg_null } from "../CryptographicInformationFramework/cia-alg-null.oa.mjs";


/**
 * @summary AlgorithmSet
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AlgorithmSet CIO-ALGORITHM ::= {
 *     cia-alg-null,
 *     ... -- See PKCS #11 for possible values for the &id component (and parameters)
 * }
 * ```
 * 
 * @constant
 * @type {CIO_ALGORITHM[]}
 * 
 */
export
const AlgorithmSet: (CIO_ALGORITHM)[] = [ cia_alg_null, ];

/* eslint-enable */
