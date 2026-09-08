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
import { BioCert, _decode_BioCert, _encode_BioCert } from "../TAI/BioCert.ta.mjs";
// export { BioCert, _decode_BioCert, _encode_BioCert } from "../TAI/BioCert.ta.mjs";
import { id_tai_ce_bioCert } from "../TAI/id-tai-ce-bioCert.va.mjs";
// export { id_tai_ce_bioCert } from "../TAI/id-tai-ce-bioCert.va.mjs";
import { type EXTENSION } from "../AuthenticationFramework/EXTENSION.oca.mjs";


/**
 * @summary bioCert
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * bioCert EXTENSION ::= {SYNTAX         BioCert
 *                        IDENTIFIED BY  id-tai-ce-bioCert
 * }
 * ```
 * 
 * @constant
 * @type {EXTENSION<BioCert>}
 * @implements {EXTENSION<BioCert>}
 */
export
const bioCert: EXTENSION<BioCert> = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtnType": _decode_BioCert,
    },
    encoderFor: {
        "&ExtnType": _encode_BioCert,
    },
    "&id": id_tai_ce_bioCert /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ExtnType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
