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
import { dhStatic } from "../ANSI-X9-42/dhStatic.va.mjs";
// export { dhStatic } from "../ANSI-X9-42/dhStatic.va.mjs";
import { SchemeParameters, _decode_SchemeParameters, _encode_SchemeParameters } from "../ANSI-X9-42/SchemeParameters.ta.mjs";
// export { SchemeParameters, _decode_SchemeParameters, _encode_SchemeParameters } from "../ANSI-X9-42/SchemeParameters.ta.mjs";
import { type KEY_AGREEMENT } from "../ANSI-X9-42/KEY-AGREEMENT.oca.mjs";


/**
 * @summary Schemes_Union0_Intersection0_Element
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Schemes-Union0-Intersection0-Element ::= {} -- REMOVED_FROM_UNNESTING --
 * ```
 * 
 * @constant
 * @type {KEY_AGREEMENT<SchemeParameters>}
 * @implements {KEY_AGREEMENT<SchemeParameters>}
 */
export
const Schemes_Union0_Intersection0_Element: KEY_AGREEMENT<SchemeParameters> = {
    class: "ALGORITHM-ID",
    decoderFor: {
        "&Type": _decode_SchemeParameters,
    },
    encoderFor: {
        "&Type": _encode_SchemeParameters,
    },
    "&id": dhStatic /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
