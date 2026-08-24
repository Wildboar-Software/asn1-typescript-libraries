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
 * Information object `ms_cancel_deferred_delivery`. When the MS-user invokes the
 * MS-cancel-deferred-delivery abstract-operation, the MS performs the following actions:
 * a) The MS verifies that the supplied arguments are valid for an
 * MS-cancel-deferred-delivery abstract-operation. For details see 8.2.1.3.1 of
 * abstract-association cannot be established, a remote-bind-error is returned to the
 * MS-user and the procedure terminates. See ITU-T X.413 (1999), §16.2.3.
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
