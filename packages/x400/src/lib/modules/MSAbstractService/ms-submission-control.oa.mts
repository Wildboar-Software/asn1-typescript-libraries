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
import { submission_control } from '../MTSAbstractService/submission-control.oa.mjs';
import { ABSTRACT_OPERATION } from '../MTSAbstractService/ABSTRACT-OPERATION.oca.mjs';
/**
 * @summary ms_submission_control
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ms-submission-control ABSTRACT-OPERATION ::= submission-control
 * ```
 *
 * @constant
 * @type {ABSTRACT_OPERATION}
 * @implements {ABSTRACT_OPERATION}
 */
export const ms_submission_control: ABSTRACT_OPERATION = submission_control;

/* eslint-enable */
