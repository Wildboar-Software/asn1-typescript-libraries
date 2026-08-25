/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';
import {
    EventTypeId,
    _decode_EventTypeId,
    _encode_EventTypeId,
} from '@wildboar/cmip';
/**
 * @summary report_delivery
 * @description
 *
 * The Report-delivery abstract-operation enables the MTS to acknowledge to the MTS-user
 * one or more outcomes of a previous invocation of the Message-submission or
 * Probe-submission abstract-operations. For the Message-submission abstract-operation, the
 * Report-delivery abstract-operation indicates the delivery or non-delivery of the
 * submitted message to one or more recipients. See ITU-T X.411 (1999), §8.3.1.2.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * report-delivery EventTypeId ::= localForm:28
 * ```
 *
 * @constant
 */
export const report_delivery: EventTypeId = { localForm: 28 };

/* eslint-enable */
