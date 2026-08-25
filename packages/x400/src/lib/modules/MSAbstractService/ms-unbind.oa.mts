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
import { emptyUnbind } from '@wildboar/rose';
import { type ABSTRACT_OPERATION } from '../MTSAbstractService/ABSTRACT-OPERATION.oca.mjs';
/**
 * @summary ms_unbind
 * @description
 *
 * The MS-unbind abstract-operation closes the abstract-association, and causes the
 * relaxation of any fetch-restrictions that were specified in the argument of the MS-bind
 * abstract-operation. There is no argument, result, or error associated with the MS-unbind
 * abstract-operation. See ITU-T X.413 (1999), §7.2.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ms-unbind ABSTRACT-OPERATION ::= emptyUnbind
 * ```
 *
 * @constant
 * @type {ABSTRACT_OPERATION}
 * @implements {ABSTRACT_OPERATION}
 */
export const ms_unbind: ABSTRACT_OPERATION = emptyUnbind;

/* eslint-enable */
