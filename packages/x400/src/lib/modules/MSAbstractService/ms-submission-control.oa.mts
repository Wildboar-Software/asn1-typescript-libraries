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
import { type ABSTRACT_OPERATION } from '../MTSAbstractService/ABSTRACT-OPERATION.oca.mjs';
/**
 * @summary ms_submission_control
 * @description
 *
 * Information object `ms_submission_control`. The argument, result, and errors of the
 * MS-submission-control abstract-operation are identical with those of the
 * Submission-control abstract-operation defined in 8.2.1.4 of 9 Abstract-errors This
 * clause defines the following abstract-errors associated with using the
 * abstract-operations at the Retrieval Port and MS-submission Port: a) Attribute error;
 * b) Auto-action request error; c) Delete error; d) Fetch… See ITU-T X.413 (1999),
 * §8.3.4.
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
