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
 * @summary delivery_control
 * @description
 *
 * The Delivery-control abstract-operation enables the MTS-user to temporarily limit the
 * delivery-port abstract-operations that the MTS may invoke, and the messages that the MTS
 * may deliver to the MTS-user via the Message-delivery abstract-operation. The MTS shall
 * hold until a later time, rather than abandon, abstract-operations and messages presently
 * forbidden. See ITU-T X.411 (1999), §8.3.1.3.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * delivery-control EventTypeId ::= localForm:6
 * ```
 *
 * @constant
 */
export const delivery_control: EventTypeId = { localForm: 6 };

/* eslint-enable */
