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
import { CriticalityType, _enum_for_CriticalityType, CriticalityType_ignore /* IMPORTED_LONG_ENUMERATION_ITEM */, ignore /* IMPORTED_SHORT_ENUMERATION_ITEM */, CriticalityType_abort /* IMPORTED_LONG_ENUMERATION_ITEM */, abort /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_CriticalityType, _encode_CriticalityType } from "../IN-CS2-datatypes/CriticalityType.ta.mjs";
// export { CriticalityType, _enum_for_CriticalityType, CriticalityType_ignore /* IMPORTED_LONG_ENUMERATION_ITEM */, ignore /* IMPORTED_SHORT_ENUMERATION_ITEM */, CriticalityType_abort /* IMPORTED_LONG_ENUMERATION_ITEM */, abort /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_CriticalityType, _encode_CriticalityType } from "../IN-CS2-datatypes/CriticalityType.ta.mjs";
import { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { type EXTENSION } from "../CAP-classes/EXTENSION.oca.mjs";


/**
 * @summary firstExtension
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * firstExtension EXTENSION ::= {
 *     EXTENSION-SYNTAX    NULL
 *     CRITICALITY        ignore
 *     IDENTIFIED BY    global : {itu-t(0) identified-organization(4) organisation(0) gsm(1)
 *             capextension(2)}
 *     }
 * ```
 * 
 * @constant
 * @type {EXTENSION<NULL>}
 * @implements {EXTENSION<NULL>}
 */
export
const firstExtension: EXTENSION<NULL> = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtensionType": $._decodeNull,
    },
    encoderFor: {
        "&ExtensionType": $._encodeNull,
    },
    "&criticality": ignore /* OBJECT_FIELD_SETTING */,
    "&id": { global: new _OID([/* itu-t */ 0, /* identified-organization */ 4, /* organisation */ 0, /* gsm */ 1, /* capextension */ 2,]) } /* OBJECT_FIELD_SETTING */,
    "&ExtensionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
