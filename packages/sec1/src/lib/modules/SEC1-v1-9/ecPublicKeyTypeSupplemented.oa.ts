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
import { id_ecPublicKeyTypeSupplemented } from "../SEC1-v1-9/id-ecPublicKeyTypeSupplemented.va";
export { id_ecPublicKeyTypeSupplemented } from "../SEC1-v1-9/id-ecPublicKeyTypeSupplemented.va";
import { ECPKSupplements, _decode_ECPKSupplements, _encode_ECPKSupplements } from "../SEC1-v1-9/ECPKSupplements.ta";
export { ECPKSupplements, _decode_ECPKSupplements, _encode_ECPKSupplements } from "../SEC1-v1-9/ECPKSupplements.ta";
import { ALGORITHM } from "../SEC1-v1-9/ALGORITHM.oca";
export { ALGORITHM } from "../SEC1-v1-9/ALGORITHM.oca";


/* START_OF_SYMBOL_DEFINITION ecPublicKeyTypeSupplemented */
/**
 * @summary ecPublicKeyTypeSupplemented
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ecPublicKeyTypeSupplemented ALGORITHM ::= {
 *     OID id-ecPublicKeyTypeSupplemented PARMS ECPKSupplements
 * }
 * ```
 * 
 * @constant
 * @type {ALGORITHM<ECPKSupplements>}
 * @implements {ALGORITHM<ECPKSupplements>}
 */
export
const ecPublicKeyTypeSupplemented: ALGORITHM<ECPKSupplements> = {
    class: "ALGORITHM",
    decoderFor: {
        "&Type": _decode_ECPKSupplements,
    },
    encoderFor: {
        "&Type": _encode_ECPKSupplements,
    },
    "&id": id_ecPublicKeyTypeSupplemented /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION ecPublicKeyTypeSupplemented */

/* eslint-enable */
