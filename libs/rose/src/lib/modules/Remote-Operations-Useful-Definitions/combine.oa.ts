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
} from 'asn1-ts';
import { OPERATION_PACKAGE } from '../Remote-Operations-Information-Objects/OPERATION-PACKAGE.oca';

/* START_OF_SYMBOL_DEFINITION combine */
/**
 * @summary combine
 * @description
 *
 * **This production was manually written in TypeScript.**
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * combine{OPERATION-PACKAGE:ConsumerConsumes, OPERATION-PACKAGE:ConsumerSupplies,
 *         OPERATION-PACKAGE:base} OPERATION-PACKAGE ::= {
 *     OPERATIONS        {ConsumerConsumes.&Both | ConsumerSupplies.&Both}
 *     CONSUMER INVOKES
 *         {ConsumerConsumes.&Consumer | ConsumerSupplies.&Supplier}
 *     SUPPLIER INVOKES
 *         {ConsumerConsumes.&Supplier | ConsumerSupplies.&Consumer}
 *     ID                base.&id
 * }
 * ```
 */
export
function combine (
    ConsumerConsumes: OPERATION_PACKAGE,
    ConsumerSupplies: OPERATION_PACKAGE,
    base: OPERATION_PACKAGE,
): OPERATION_PACKAGE {
    return {
        class: "OPERATION-PACKAGE",
        decoderFor: {},
        encoderFor: {},
        "&Both": [
            ...ConsumerConsumes["&Both"],
            ...ConsumerSupplies["&Both"],
        ],
        "&Consumer": [
            ...ConsumerConsumes["&Consumer"],
            ...ConsumerSupplies["&Supplier"],
        ],
        "&Supplier": [
            ...ConsumerConsumes["&Supplier"],
            ...ConsumerSupplies["&Consumer"],
        ],
        "&id": base["&id"],
    };
}
/* END_OF_SYMBOL_DEFINITION combine */

/* eslint-enable */
