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
import { ID, _decode_ID, _encode_ID } from '../IPMSObjectIdentifiers/ID.ta.mjs';
import { id_hat } from '../IPMSObjectIdentifiers/id-hat.va.mjs';
/**
 * @summary id_hat_reply_time
 * @description
 *
 * OBJECT IDENTIFIER `id_hat_reply_time`. The Reply Time heading field (O) identifies by
 * when the authorizing users request (but do not demand) that any replies to the present
 * IPM be originated. It comprises a date and time. See ITU-T X.420 (1999), §7.2.12.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-hat-reply-time ID ::= {id-hat  6}
 * ```
 *
 * @constant
 */
export const id_hat_reply_time: ID = _OID.fromParts([6], id_hat);

/* eslint-enable */
