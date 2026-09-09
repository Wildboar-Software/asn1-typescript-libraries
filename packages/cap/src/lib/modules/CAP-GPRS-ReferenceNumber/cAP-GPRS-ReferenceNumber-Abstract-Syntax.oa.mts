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
import { CAP_GPRS_ReferenceNumber, _decode_CAP_GPRS_ReferenceNumber, _encode_CAP_GPRS_ReferenceNumber } from "../CAP-GPRS-ReferenceNumber/CAP-GPRS-ReferenceNumber.ta.mjs";
// export { CAP_GPRS_ReferenceNumber, _decode_CAP_GPRS_ReferenceNumber, _encode_CAP_GPRS_ReferenceNumber } from "../CAP-GPRS-ReferenceNumber/CAP-GPRS-ReferenceNumber.ta.mjs";
import { id_CAP_GPRS_ReferenceNumber } from "../CAP-GPRS-ReferenceNumber/id-CAP-GPRS-ReferenceNumber.va.mjs";
// export { id_CAP_GPRS_ReferenceNumber } from "../CAP-GPRS-ReferenceNumber/id-CAP-GPRS-ReferenceNumber.va.mjs";


/**
 * @summary cAP_GPRS_ReferenceNumber_Abstract_Syntax
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * cAP-GPRS-ReferenceNumber-Abstract-Syntax ABSTRACT-SYNTAX ::= {CAP-GPRS-ReferenceNumber IDENTIFIED BY id-CAP-GPRS-ReferenceNumber}
 * ```
 * 
 * @constant
 * @type {ABSTRACT_SYNTAX<CAP_GPRS_ReferenceNumber>}
 * @implements {ABSTRACT_SYNTAX<CAP_GPRS_ReferenceNumber>}
 */
export
const cAP_GPRS_ReferenceNumber_Abstract_Syntax: ABSTRACT_SYNTAX<CAP_GPRS_ReferenceNumber> = {
    class: "ABSTRACT-SYNTAX",
    decoderFor: {
        "&Type": _decode_CAP_GPRS_ReferenceNumber,
    },
    encoderFor: {
        "&Type": _encode_CAP_GPRS_ReferenceNumber,
    },
    "&id": id_CAP_GPRS_ReferenceNumber /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&property": undefined,
};

/* eslint-enable */
