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
} from '@wildboar/cmip/src/lib/modules/CMIP-1/EventTypeId.ta.mjs';
/**
 * @summary ms_unbind
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ms-unbind EventTypeId ::= localForm:15
 * ```
 *
 * @constant
 */
export const ms_unbind: EventTypeId = { localForm: 15 };

/* eslint-enable */
