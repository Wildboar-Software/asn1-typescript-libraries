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
 * @summary id_hat_extended_subject
 * @description
 *
 * OBJECT IDENTIFIER `id_hat_extended_subject`. The Subject heading field (O) identifies
 * the subject of the IPM. It comprises a Teletex String[ of from zero to a prescribed
 * number of characters (see annex L)|], chosen from the graphic subset of the Teletex
 * String character set. See ITU-T X.420 (1999), §7.2.10.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-hat-extended-subject ID ::= {id-hat  30}
 * ```
 *
 * @constant
 */
export const id_hat_extended_subject: ID = _OID.fromParts([30], id_hat);

/* eslint-enable */
