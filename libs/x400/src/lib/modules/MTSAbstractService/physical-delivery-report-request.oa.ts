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
import * as $ from 'asn1-ts/dist/node/functional';
import {
    ExtensionType,
    _decode_ExtensionType,
    _encode_ExtensionType,
} from '../MTSAbstractService/ExtensionType.ta';
export {
    ExtensionType,
    _decode_ExtensionType,
    _encode_ExtensionType,
} from '../MTSAbstractService/ExtensionType.ta';
import {
    Criticality,
    Criticality_for_submission /* IMPORTED_LONG_NAMED_BIT */,
    for_submission /* IMPORTED_SHORT_NAMED_BIT */,
    Criticality_for_transfer /* IMPORTED_LONG_NAMED_BIT */,
    for_transfer /* IMPORTED_SHORT_NAMED_BIT */,
    Criticality_for_delivery /* IMPORTED_LONG_NAMED_BIT */,
    for_delivery /* IMPORTED_SHORT_NAMED_BIT */,
    _decode_Criticality,
    _encode_Criticality,
} from '../MTSAbstractService/Criticality.ta';
export {
    Criticality,
    Criticality_for_submission /* IMPORTED_LONG_NAMED_BIT */,
    for_submission /* IMPORTED_SHORT_NAMED_BIT */,
    Criticality_for_transfer /* IMPORTED_LONG_NAMED_BIT */,
    for_transfer /* IMPORTED_SHORT_NAMED_BIT */,
    Criticality_for_delivery /* IMPORTED_LONG_NAMED_BIT */,
    for_delivery /* IMPORTED_SHORT_NAMED_BIT */,
    _decode_Criticality,
    _encode_Criticality,
} from '../MTSAbstractService/Criticality.ta';
import {
    PhysicalDeliveryReportRequest,
    PhysicalDeliveryReportRequest_return_of_undeliverable_mail_by_PDS /* IMPORTED_LONG_NAMED_INTEGER */,
    return_of_undeliverable_mail_by_PDS /* IMPORTED_SHORT_NAMED_INTEGER */,
    PhysicalDeliveryReportRequest_return_of_notification_by_PDS /* IMPORTED_LONG_NAMED_INTEGER */,
    return_of_notification_by_PDS /* IMPORTED_SHORT_NAMED_INTEGER */,
    PhysicalDeliveryReportRequest_return_of_notification_by_MHS /* IMPORTED_LONG_NAMED_INTEGER */,
    return_of_notification_by_MHS /* IMPORTED_SHORT_NAMED_INTEGER */,
    PhysicalDeliveryReportRequest_return_of_notification_by_MHS_and_PDS /* IMPORTED_LONG_NAMED_INTEGER */,
    return_of_notification_by_MHS_and_PDS /* IMPORTED_SHORT_NAMED_INTEGER */,
    _decode_PhysicalDeliveryReportRequest,
    _encode_PhysicalDeliveryReportRequest,
} from '../MTSAbstractService/PhysicalDeliveryReportRequest.ta';
export {
    PhysicalDeliveryReportRequest,
    PhysicalDeliveryReportRequest_return_of_undeliverable_mail_by_PDS /* IMPORTED_LONG_NAMED_INTEGER */,
    return_of_undeliverable_mail_by_PDS /* IMPORTED_SHORT_NAMED_INTEGER */,
    PhysicalDeliveryReportRequest_return_of_notification_by_PDS /* IMPORTED_LONG_NAMED_INTEGER */,
    return_of_notification_by_PDS /* IMPORTED_SHORT_NAMED_INTEGER */,
    PhysicalDeliveryReportRequest_return_of_notification_by_MHS /* IMPORTED_LONG_NAMED_INTEGER */,
    return_of_notification_by_MHS /* IMPORTED_SHORT_NAMED_INTEGER */,
    PhysicalDeliveryReportRequest_return_of_notification_by_MHS_and_PDS /* IMPORTED_LONG_NAMED_INTEGER */,
    return_of_notification_by_MHS_and_PDS /* IMPORTED_SHORT_NAMED_INTEGER */,
    _decode_PhysicalDeliveryReportRequest,
    _encode_PhysicalDeliveryReportRequest,
} from '../MTSAbstractService/PhysicalDeliveryReportRequest.ta';
import { EXTENSION } from '../MTSAbstractService/EXTENSION.oca';
export { EXTENSION } from '../MTSAbstractService/EXTENSION.oca';

/* START_OF_SYMBOL_DEFINITION physical_delivery_report_request */
/**
 * @summary physical_delivery_report_request
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * physical-delivery-report-request EXTENSION ::= {
 *   PhysicalDeliveryReportRequest
 *   IF ABSENT                return-of-undeliverable-mail-by-PDS,
 *   RECOMMENDED CRITICALITY  {for-delivery},
 *   IDENTIFIED BY            standard-extension:14
 * }
 * ```
 *
 * @constant
 * @type {EXTENSION<PhysicalDeliveryReportRequest>}
 * @implements {EXTENSION<PhysicalDeliveryReportRequest>}
 */
export const physical_delivery_report_request: EXTENSION<PhysicalDeliveryReportRequest> = {
    class: 'EXTENSION',
    decoderFor: {
        '&Type': _decode_PhysicalDeliveryReportRequest,
    },
    encoderFor: {
        '&Type': _encode_PhysicalDeliveryReportRequest,
    },
    '&absent': return_of_undeliverable_mail_by_PDS /* OBJECT_FIELD_SETTING */,
    '&recommended': (() => {
        const _ret = new Uint8ClampedArray(Math.max(0, 1, 2));
        _ret[Criticality_for_delivery] = TRUE_BIT;
        return _ret;
    })() /* OBJECT_FIELD_SETTING */,
    '&id': {
        standard_extension: 14,
    } /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION physical_delivery_report_request */

/* eslint-enable */
