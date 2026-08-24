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
import { id_nat } from '../IPMSObjectIdentifiers/id-nat.va.mjs';
/**
 * @summary id_nat_auto_forward_comment
 * @description
 *
 * OBJECT IDENTIFIER `id_nat_auto_forward_comment`. The Auto-forward Comment non-receipt
 * field (C) is information pre-supplied for this purpose by the NRN's originator. It
 * comprises a Printable String[ of from zero to a prescribed number of characters (see
 * annex L), chosen from the Printable String character set|]. See ITU-T X.420 (1999),
 * §8.2.3.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-nat-auto-forward-comment ID ::= {id-nat  6}
 * ```
 *
 * @constant
 */
export const id_nat_auto_forward_comment: ID = _OID.fromParts([6], id_nat);

/* eslint-enable */
