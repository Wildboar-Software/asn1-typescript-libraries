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
 * @summary id_att_latest_delivery_time
 * @description
 *
 * OBJECT IDENTIFIER `id_att_latest_delivery_time`. This general-attribute contains the
 * latest-delivery-time argument of the Message-submission abstract-operation; it
 * indicates the time after which a message shall not be delivered to its recipient(s).
 * See 8.2.1.1.1.13 of X.411 |  See ITU-T X.413 (1999), §11.2.32.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-att-latest-delivery-time ID ::= {id-att  55}
 * ```
 *
 * @constant
 */
export const id_att_latest_delivery_time: ID = _OID.fromParts([55], id_att);

/* eslint-enable */
