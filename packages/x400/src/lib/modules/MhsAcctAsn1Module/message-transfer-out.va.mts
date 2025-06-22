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
 * @summary message_transfer_out
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * message-transfer-out EventTypeId ::= localForm:13
 * ```
 *
 * @constant
 */
export const message_transfer_out: EventTypeId = { localForm: 13 };

/* eslint-enable */
