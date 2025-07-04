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
import { ABSTRACT_OPERATION } from '../MTSAbstractService/ABSTRACT-OPERATION.oca.mjs';
/**
 * @summary mta_unbind
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * mta-unbind ABSTRACT-OPERATION ::= emptyUnbind
 * ```
 *
 * @constant
 * @type {ABSTRACT_OPERATION}
 * @implements {ABSTRACT_OPERATION}
 */
export const mta_unbind: ABSTRACT_OPERATION = emptyUnbind;

/* eslint-enable */
