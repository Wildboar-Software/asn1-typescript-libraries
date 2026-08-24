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
 * @summary id_hat_expiry_time
 * @description
 *
 * OBJECT IDENTIFIER `id_hat_expiry_time`. The Expiry Time heading field (O) identifies
 * when the authorizing users consider the IPM to lose its validity. It comprises a date
 * and time. See ITU-T X.420 (1999), §7.2.11.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-hat-expiry-time ID ::= {id-hat  5}
 * ```
 *
 * @constant
 */
export const id_hat_expiry_time: ID = _OID.fromParts([5], id_hat);

/* eslint-enable */
