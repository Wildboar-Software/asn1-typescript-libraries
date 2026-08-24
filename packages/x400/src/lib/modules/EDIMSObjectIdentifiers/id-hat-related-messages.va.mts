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
import { ID, _decode_ID, _encode_ID } from '../EDIMSObjectIdentifiers/ID.ta.mjs';
import { id_hat } from '../EDIMSObjectIdentifiers/id-hat.va.mjs';
/**
 * @summary id_hat_related_messages
 * @description
 *
 * OBJECT IDENTIFIER `id_hat_related_messages`. Identifies messages, EDIMs or other (for
 * example IPMs), that the originator of this EDIM considers related to it. It comprises
 * a sequence of one or more message references, one for each related message. See ITU-T
 * X.435 (1999), §8.2.9.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-hat-related-messages ID ::= {id-hat  9}
 * ```
 *
 * @constant
 */
export const id_hat_related_messages: ID = _OID.fromParts([9], id_hat);

/* eslint-enable */
