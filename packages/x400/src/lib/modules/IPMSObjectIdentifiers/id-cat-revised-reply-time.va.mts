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
import { id_cat } from '../IPMSObjectIdentifiers/id-cat.va.mjs';
/**
 * @summary id_cat_revised_reply_time
 * @description
 *
 * The Reply Time heading field (O) identifies by when the authorizing users request (but
 * do not demand) that any replies to the present IPM be originated. It comprises a date
 * and time. See ITU-T X.420 (1999), §7.2.12.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-cat-revised-reply-time ID ::= {id-cat  13}
 * ```
 *
 * @constant
 */
export const id_cat_revised_reply_time: ID = _OID.fromParts([13], id_cat);

/* eslint-enable */
