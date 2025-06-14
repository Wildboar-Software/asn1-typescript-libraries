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
    EventTypeId,
    _decode_EventTypeId,
    _encode_EventTypeId,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/EventTypeId.ta.mjs';
/* START_OF_SYMBOL_DEFINITION ms_bind */
/**
 * @summary ms_bind
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ms-bind EventTypeId ::= localForm:14
 * ```
 *
 * @constant
 */
export const ms_bind: EventTypeId = { localForm: 14 };
/* END_OF_SYMBOL_DEFINITION ms_bind */

/* eslint-enable */
