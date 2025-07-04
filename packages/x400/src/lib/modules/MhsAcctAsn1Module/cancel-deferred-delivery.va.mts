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
 * @summary cancel_deferred_delivery
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * cancel-deferred-delivery EventTypeId ::= localForm:3
 * ```
 *
 * @constant
 */
export const cancel_deferred_delivery: EventTypeId = { localForm: 3 };

/* eslint-enable */
