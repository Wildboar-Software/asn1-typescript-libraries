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
import { ecwkt_specifiedParameters } from "../SEC1-v1-9/ecwkt-specifiedParameters.va";
export { ecwkt_specifiedParameters } from "../SEC1-v1-9/ecwkt-specifiedParameters.va";
import { ECWKTParameters, _decode_ECWKTParameters, _encode_ECWKTParameters } from "../SEC1-v1-9/ECWKTParameters.ta";
export { ECWKTParameters, _decode_ECWKTParameters, _encode_ECWKTParameters } from "../SEC1-v1-9/ECWKTParameters.ta";
import { ALGORITHM } from "../SEC1-v1-9/ALGORITHM.oca";
export { ALGORITHM } from "../SEC1-v1-9/ALGORITHM.oca";


/* START_OF_SYMBOL_DEFINITION ECWKTAlgorithmSet_Union1_Intersection0_Element */
/**
 * @summary ECWKTAlgorithmSet_Union1_Intersection0_Element
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ECWKTAlgorithmSet-Union1-Intersection0-Element ::= {} -- REMOVED_FROM_UNNESTING --
 * ```
 * 
 * @constant
 * @type {ALGORITHM<ECWKTParameters>}
 * @implements {ALGORITHM<ECWKTParameters>}
 */
export
const ECWKTAlgorithmSet_Union1_Intersection0_Element: ALGORITHM<ECWKTParameters> = {
    class: "ALGORITHM",
    decoderFor: {
        "&Type": _decode_ECWKTParameters,
    },
    encoderFor: {
        "&Type": _encode_ECWKTParameters,
    },
    "&id": ecwkt_specifiedParameters /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION ECWKTAlgorithmSet_Union1_Intersection0_Element */

/* eslint-enable */
