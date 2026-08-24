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
    _decode_Priority,
    _encode_Priority,
} from '@wildboar/rose';
import {
    _decode_Code,
    _encode_Code,
} from '@wildboar/rose';
import {
    Report,
    _decode_Report,
    _encode_Report,
} from '../MTAAbstractService/Report.ta.mjs';
import { type ABSTRACT_OPERATION } from '../MTSAbstractService/ABSTRACT-OPERATION.oca.mjs';
/**
 * @summary report_transfer
 * @description
 *
 * Information object `report_transfer`. The Report-transfer abstract-operation enables
 * an MTA to transfer a report to another MTA. Table 31 – Probe-transfer Arguments
 * Argument Presence Clause Relaying Arguments Probe-identifier M 12.2.1.2.1.1
 * Per-domain-bilateral-information C 12.2.1.1.1.2 Trace-information M 12.2.1.1.1.3
 * Internal-trace-information C 12.2.1.1.1.4 Originator Argument Originator-name M
 * 8.2.1.1.1.1 Recipient Arguments Recipient-name M… See ITU-T X.411 (1999), §12.2.1.3.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * report-transfer ABSTRACT-OPERATION ::= {ARGUMENT  Report
 * }
 * ```
 *
 * @constant
 * @type {ABSTRACT_OPERATION<Report>}
 * @implements {ABSTRACT_OPERATION<Report>}
 */
export const report_transfer: ABSTRACT_OPERATION<Report> = {
    class: 'OPERATION',
    decoderFor: {
        '&ArgumentType': _decode_Report,
        '&ResultType': undefined,
    },
    encoderFor: {
        '&ArgumentType': _encode_Report,
        '&ResultType': undefined,
    },
    '&ArgumentType': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    '&ResultType': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    '&InvokePriority': 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    '&ResultPriority': 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    '&returnResult': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    '&synchronous': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    '&idempotent': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    '&alwaysReturns': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
