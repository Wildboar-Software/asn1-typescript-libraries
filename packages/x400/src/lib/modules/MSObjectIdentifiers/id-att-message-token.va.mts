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
 * @summary id_att_message_token
 * @description
 *
 * OBJECT IDENTIFIER `id_att_message_token`. This general-attribute contains the
 * message-token argument of the Message-delivery abstract-operation or the originator-
 * token argument of the Message-submission abstract-operation. When present in a
 * submitted-message entry, this attribute contains an encrypted-data component that is
 * encrypted using the public key of the message originator rather than that of any
 * recipient. See ITU-T X.413 (1999), §11.2.44.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-att-message-token ID ::= {id-att  24}
 * ```
 *
 * @constant
 */
export const id_att_message_token: ID = _OID.fromParts([24], id_att);

/* eslint-enable */
