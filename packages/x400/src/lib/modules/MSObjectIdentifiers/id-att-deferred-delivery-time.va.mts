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
import { ID, _decode_ID, _encode_ID } from '../MHSObjectIdentifiers/ID.ta.mjs';
import { id_att } from '../MSObjectIdentifiers/id-att.va.mjs';
/**
 * @summary id_att_deferred_delivery_time
 * @description
 *
 * OBJECT IDENTIFIER `id_att_deferred_delivery_time`. This general-attribute contains the
 * deferred-delivery-time argument of the Message-submission abstract-operation. It
 * indicates the time before which a submitted message shall not be delivered to its
 * recipient(s). See ITU-T X.413 (1999), §11.2.23.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-att-deferred-delivery-time ID ::= {id-att  51}
 * ```
 *
 * @constant
 */
export const id_att_deferred_delivery_time: ID = _OID.fromParts([51], id_att);

/* eslint-enable */
