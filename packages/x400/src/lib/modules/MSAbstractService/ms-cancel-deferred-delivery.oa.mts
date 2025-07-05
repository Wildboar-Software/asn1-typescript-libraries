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
import { cancel_deferred_delivery } from '../MTSAbstractService/cancel-deferred-delivery.oa.mjs';
import { type ABSTRACT_OPERATION } from '../MTSAbstractService/ABSTRACT-OPERATION.oca.mjs';
/**
 * @summary ms_cancel_deferred_delivery
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ms-cancel-deferred-delivery ABSTRACT-OPERATION ::= cancel-deferred-delivery
 * ```
 *
 * @constant
 * @type {ABSTRACT_OPERATION}
 * @implements {ABSTRACT_OPERATION}
 */
export const ms_cancel_deferred_delivery: ABSTRACT_OPERATION = cancel_deferred_delivery;

/* eslint-enable */
