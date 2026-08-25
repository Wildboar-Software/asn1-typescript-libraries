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
 * @summary message_delivery
 * @description
 *
 * The Message-delivery abstract-operation enables the MTS to deliver a message to an
 * MTS-user. The MTS-user shall not refuse delivery of a message unless the delivery would
 * violate the Delivery-control restrictions then in force. See ITU-T X.411 (1999),
 * §8.3.1.1.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * message-delivery EventTypeId ::= localForm:9
 * ```
 *
 * @constant
 */
export const message_delivery: EventTypeId = { localForm: 9 };

/* eslint-enable */
