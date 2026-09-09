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
import { CAP_U_ABORT_REASON, _enum_for_CAP_U_ABORT_REASON, CAP_U_ABORT_REASON_no_reason_given /* IMPORTED_LONG_ENUMERATION_ITEM */, no_reason_given /* IMPORTED_SHORT_ENUMERATION_ITEM */, CAP_U_ABORT_REASON_application_timer_expired /* IMPORTED_LONG_ENUMERATION_ITEM */, application_timer_expired /* IMPORTED_SHORT_ENUMERATION_ITEM */, CAP_U_ABORT_REASON_not_allowed_procedures /* IMPORTED_LONG_ENUMERATION_ITEM */, not_allowed_procedures /* IMPORTED_SHORT_ENUMERATION_ITEM */, CAP_U_ABORT_REASON_abnormal_processing /* IMPORTED_LONG_ENUMERATION_ITEM */, abnormal_processing /* IMPORTED_SHORT_ENUMERATION_ITEM */, CAP_U_ABORT_REASON_congestion /* IMPORTED_LONG_ENUMERATION_ITEM */, congestion /* IMPORTED_SHORT_ENUMERATION_ITEM */, CAP_U_ABORT_REASON_invalid_reference /* IMPORTED_LONG_ENUMERATION_ITEM */, invalid_reference /* IMPORTED_SHORT_ENUMERATION_ITEM */, CAP_U_ABORT_REASON_missing_reference /* IMPORTED_LONG_ENUMERATION_ITEM */, missing_reference /* IMPORTED_SHORT_ENUMERATION_ITEM */, CAP_U_ABORT_REASON_overlapping_dialogue /* IMPORTED_LONG_ENUMERATION_ITEM */, overlapping_dialogue /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_CAP_U_ABORT_REASON, _encode_CAP_U_ABORT_REASON } from "../CAP-U-ABORT-Data/CAP-U-ABORT-REASON.ta.mjs";
// export { CAP_U_ABORT_REASON, _enum_for_CAP_U_ABORT_REASON, CAP_U_ABORT_REASON_no_reason_given /* IMPORTED_LONG_ENUMERATION_ITEM */, no_reason_given /* IMPORTED_SHORT_ENUMERATION_ITEM */, CAP_U_ABORT_REASON_application_timer_expired /* IMPORTED_LONG_ENUMERATION_ITEM */, application_timer_expired /* IMPORTED_SHORT_ENUMERATION_ITEM */, CAP_U_ABORT_REASON_not_allowed_procedures /* IMPORTED_LONG_ENUMERATION_ITEM */, not_allowed_procedures /* IMPORTED_SHORT_ENUMERATION_ITEM */, CAP_U_ABORT_REASON_abnormal_processing /* IMPORTED_LONG_ENUMERATION_ITEM */, abnormal_processing /* IMPORTED_SHORT_ENUMERATION_ITEM */, CAP_U_ABORT_REASON_congestion /* IMPORTED_LONG_ENUMERATION_ITEM */, congestion /* IMPORTED_SHORT_ENUMERATION_ITEM */, CAP_U_ABORT_REASON_invalid_reference /* IMPORTED_LONG_ENUMERATION_ITEM */, invalid_reference /* IMPORTED_SHORT_ENUMERATION_ITEM */, CAP_U_ABORT_REASON_missing_reference /* IMPORTED_LONG_ENUMERATION_ITEM */, missing_reference /* IMPORTED_SHORT_ENUMERATION_ITEM */, CAP_U_ABORT_REASON_overlapping_dialogue /* IMPORTED_LONG_ENUMERATION_ITEM */, overlapping_dialogue /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_CAP_U_ABORT_REASON, _encode_CAP_U_ABORT_REASON } from "../CAP-U-ABORT-Data/CAP-U-ABORT-REASON.ta.mjs";
import { id_CAP_U_ABORT_Reason } from "../CAP-U-ABORT-Data/id-CAP-U-ABORT-Reason.va.mjs";
// export { id_CAP_U_ABORT_Reason } from "../CAP-U-ABORT-Data/id-CAP-U-ABORT-Reason.va.mjs";


/**
 * @summary cAP_U_ABORT_Reason_Abstract_Syntax
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * cAP-U-ABORT-Reason-Abstract-Syntax ABSTRACT-SYNTAX ::= {CAP-U-ABORT-REASON IDENTIFIED BY
 * id-CAP-U-ABORT-Reason}
 * ```
 * 
 * @constant
 * @type {ABSTRACT_SYNTAX<CAP_U_ABORT_REASON>}
 * @implements {ABSTRACT_SYNTAX<CAP_U_ABORT_REASON>}
 */
export
const cAP_U_ABORT_Reason_Abstract_Syntax: ABSTRACT_SYNTAX<CAP_U_ABORT_REASON> = {
    class: "ABSTRACT-SYNTAX",
    decoderFor: {
        "&Type": _decode_CAP_U_ABORT_REASON,
    },
    encoderFor: {
        "&Type": _encode_CAP_U_ABORT_REASON,
    },
    "&id": id_CAP_U_ABORT_Reason /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&property": undefined,
};

/* eslint-enable */
