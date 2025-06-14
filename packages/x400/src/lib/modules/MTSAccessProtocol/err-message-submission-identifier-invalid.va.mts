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
} from 'asn1-ts';
import {
    Code,
    _decode_Code,
    _encode_Code,
} from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/Code.ta.mjs';
/* START_OF_SYMBOL_DEFINITION err_message_submission_identifier_invalid */
/**
 * @summary err_message_submission_identifier_invalid
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * err-message-submission-identifier-invalid Code ::= local:7
 * ```
 *
 * @constant
 */
export const err_message_submission_identifier_invalid: Code = { local: 7 };
/* END_OF_SYMBOL_DEFINITION err_message_submission_identifier_invalid */

/* eslint-enable */
