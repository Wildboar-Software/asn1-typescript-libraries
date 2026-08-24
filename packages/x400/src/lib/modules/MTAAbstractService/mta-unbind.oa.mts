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
 * @summary mta_unbind
 * @description
 *
 * Information object `mta_unbind`. The MTA-bind enables an MTA to establish an
 * association with another MTA. Abstract-operations other than MTA-bind can only be
 * invoked in the context of an established association. See ITU-T X.411 (1999), §11.1.
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
