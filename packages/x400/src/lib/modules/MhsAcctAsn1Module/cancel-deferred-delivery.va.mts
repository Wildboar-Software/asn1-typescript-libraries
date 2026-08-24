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
 * `cancel_deferred_delivery`. The Cancel-deferred-delivery abstract-operation enables an
 * MTS-user to abort the deferred-delivery of a message previously submitted by that user
 * via the Message-submission abstract-operation. The MTS-user identifies the message
 * whose delivery is to be cancelled by means of the message-submission-identifier
 * returned by the MTS as a result of the previous invocation of the Message-submission
 * abstract-operation. See ITU-T X.411 (1999), §8.2.1.3.
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
