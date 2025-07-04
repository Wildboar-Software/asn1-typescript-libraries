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
    EventTypeId,
    _decode_EventTypeId,
    _encode_EventTypeId,
} from '@wildboar/cmip';
/**
 * @summary mta_bind
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * mta-bind EventTypeId ::= localForm:16
 * ```
 *
 * @constant
 */
export const mta_bind: EventTypeId = { localForm: 16 };

/* eslint-enable */
