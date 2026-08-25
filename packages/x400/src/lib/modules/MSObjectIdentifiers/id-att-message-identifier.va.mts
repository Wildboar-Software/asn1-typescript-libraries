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
 * @summary id_att_message_identifier
 * @description
 *
 * This general-attribute contains an MTS-identifier that distinguishes this message or
 * probe from all other submitted messages and probes, and delivered messages. It contains
 * the message-submission-identifier or probe-submission- identifier result of the
 * Message-submission or Probe-submission abstract-operation , or the
 * message-delivery-identifier argument of the Message-delivery abstract-operation. See
 * ITU-T X.413 (1999), §11.2.38.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-att-message-identifier ID ::= {id-att  19}
 * ```
 *
 * @constant
 */
export const id_att_message_identifier: ID = _OID.fromParts([19], id_att);

/* eslint-enable */
