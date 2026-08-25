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
 * @summary id_nat_forwarded_to
 * @description
 *
 * The Forwarded To field indicates the new recipient of the (forwarded) subject EDIM. Its
 * value is an OR-name. See ITU-T X.435 (1999), §9.4.1.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-nat-forwarded-to ID ::= {id-nat  12}
 * ```
 *
 * @constant
 */
export const id_nat_forwarded_to: ID = _OID.fromParts([12], id_nat);

/* eslint-enable */
