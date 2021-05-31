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
import { id_ecPublicKeyTypeRestricted } from "../SEC1-v1-9/id-ecPublicKeyTypeRestricted.va";
export { id_ecPublicKeyTypeRestricted } from "../SEC1-v1-9/id-ecPublicKeyTypeRestricted.va";
import { ECPKRestrictions, _decode_ECPKRestrictions, _encode_ECPKRestrictions } from "../SEC1-v1-9/ECPKRestrictions.ta";
export { ECPKRestrictions, _decode_ECPKRestrictions, _encode_ECPKRestrictions } from "../SEC1-v1-9/ECPKRestrictions.ta";
import { ALGORITHM } from "../SEC1-v1-9/ALGORITHM.oca";
export { ALGORITHM } from "../SEC1-v1-9/ALGORITHM.oca";


/* START_OF_SYMBOL_DEFINITION ecPublicKeyTypeRestricted */
/**
 * @summary ecPublicKeyTypeRestricted
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ecPublicKeyTypeRestricted ALGORITHM ::= {
 *     OID id-ecPublicKeyTypeRestricted PARMS ECPKRestrictions
 * }
 * ```
 * 
 * @constant
 * @type {ALGORITHM<ECPKRestrictions>}
 * @implements {ALGORITHM<ECPKRestrictions>}
 */
export
const ecPublicKeyTypeRestricted: ALGORITHM<ECPKRestrictions> = {
    class: "ALGORITHM",
    decoderFor: {
        "&Type": _decode_ECPKRestrictions,
    },
    encoderFor: {
        "&Type": _encode_ECPKRestrictions,
    },
    "&id": id_ecPublicKeyTypeRestricted /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION ecPublicKeyTypeRestricted */

/* eslint-enable */
