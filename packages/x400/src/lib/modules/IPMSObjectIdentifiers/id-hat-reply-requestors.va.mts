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
 * @summary id_hat_reply_requestors
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-hat-reply-requestors ID ::= {id-hat  21}
 * ```
 *
 * @constant
 */
export const id_hat_reply_requestors: ID = _OID.fromParts([21], id_hat);

/* eslint-enable */
