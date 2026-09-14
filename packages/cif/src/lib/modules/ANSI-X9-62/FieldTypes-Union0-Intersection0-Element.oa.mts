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
import { Prime_p, _decode_Prime_p, _encode_Prime_p } from "../ANSI-X9-62/Prime-p.ta.mjs";
// export { Prime_p, _decode_Prime_p, _encode_Prime_p } from "../ANSI-X9-62/Prime-p.ta.mjs";
import { prime_field } from "../ANSI-X9-62/prime-field.va.mjs";
// export { prime_field } from "../ANSI-X9-62/prime-field.va.mjs";
import { type FIELD_ID } from "../ANSI-X9-62/FIELD-ID.oca.mjs";


/**
 * @summary FieldTypes_Union0_Intersection0_Element
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FieldTypes-Union0-Intersection0-Element ::= {} -- REMOVED_FROM_UNNESTING --
 * ```
 * 
 * @constant
 * @type {FIELD_ID<Prime_p>}
 * @implements {FIELD_ID<Prime_p>}
 */
export
const FieldTypes_Union0_Intersection0_Element: FIELD_ID<Prime_p> = {
    class: "TYPE-IDENTIFIER",
    decoderFor: {
        "&Type": _decode_Prime_p,
    },
    encoderFor: {
        "&Type": _encode_Prime_p,
    },
    "&id": prime_field /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
