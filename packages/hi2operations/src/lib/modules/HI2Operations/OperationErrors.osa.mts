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
import { ERROR } from "../Remote-Operations-Information-Objects/ERROR.oca.mjs";
// export { ERROR } from "../Remote-Operations-Information-Objects/ERROR.oca.mjs";
import { unknown_version } from "../HI2Operations/unknown-version.oa.mjs";
// export { unknown_version } from "../HI2Operations/unknown-version.oa.mjs";
import { missing_parameter } from "../HI2Operations/missing-parameter.oa.mjs";
// export { missing_parameter } from "../HI2Operations/missing-parameter.oa.mjs";
import { unknown_parameter_value } from "../HI2Operations/unknown-parameter-value.oa.mjs";
// export { unknown_parameter_value } from "../HI2Operations/unknown-parameter-value.oa.mjs";
import { unknown_parameter } from "../HI2Operations/unknown-parameter.oa.mjs";
// export { unknown_parameter } from "../HI2Operations/unknown-parameter.oa.mjs";


/**
 * @summary OperationErrors
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * OperationErrors ERROR ::= {
 *     unknown-version |
 *     missing-parameter |
 *     unknown-parameter-value |
 *     unknown-parameter
 * }
 * ```
 * 
 * @constant
 * @type {ERROR[]}
 * 
 */
export
const OperationErrors: (ERROR)[] = [ unknown_version, missing_parameter, unknown_parameter_value, unknown_parameter, ];

/* eslint-enable */
