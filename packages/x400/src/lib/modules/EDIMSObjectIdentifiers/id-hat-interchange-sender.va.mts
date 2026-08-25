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
 * @summary id_hat_interchange_sender
 * @description
 *
 * Indicates the sender of the EDI Interchange. This is semantically identical to the
 * "Interchange sender" of the EDIFACT UNB segment. See ITU-T X.435 (1999), §8.2.16.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-hat-interchange-sender ID ::= {id-hat  17}
 * ```
 *
 * @constant
 */
export const id_hat_interchange_sender: ID = _OID.fromParts([17], id_hat);

/* eslint-enable */
