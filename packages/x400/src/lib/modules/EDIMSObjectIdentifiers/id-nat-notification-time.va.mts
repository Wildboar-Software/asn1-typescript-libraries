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
import { id_nat } from '../EDIMSObjectIdentifiers/id-nat.va.mjs';
/**
 * @summary id_nat_notification_time
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-nat-notification-time ID ::= {id-nat  3}
 * ```
 *
 * @constant
 */
export const id_nat_notification_time: ID = _OID.fromParts([3], id_nat);

/* eslint-enable */
