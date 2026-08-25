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
 * @summary id_hat_copy_recipients
 * @description
 *
 * The Copy Recipients heading field (D no subfields (i.e., elements)) identifies the zero
 * or more users and DLs who are the "copy recipients" of the IPM. It also identifies the
 * responses the authorizing users ask of each of those users and of each member of those
 * DLs. See ITU-T X.420 (1999), §7.2.5.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-hat-copy-recipients ID ::= {id-hat  12}
 * ```
 *
 * @constant
 */
export const id_hat_copy_recipients: ID = _OID.fromParts([12], id_hat);

/* eslint-enable */
