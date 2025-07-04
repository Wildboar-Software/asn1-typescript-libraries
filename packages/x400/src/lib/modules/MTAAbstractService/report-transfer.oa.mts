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
import { ABSTRACT_OPERATION } from '../MTSAbstractService/ABSTRACT-OPERATION.oca.mjs';
/**
 * @summary report_transfer
 * @description
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
