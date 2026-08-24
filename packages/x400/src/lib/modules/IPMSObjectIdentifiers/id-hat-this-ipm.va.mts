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
 * @summary id_hat_this_ipm
 * @description
 *
 * OBJECT IDENTIFIER `id_hat_this_ipm`. The This IPM heading field (M) identifies the
 * IPM. It comprises an IPM identifier. See ITU-T X.420 (1999), §7.2.1.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-hat-this-ipm ID ::= {id-hat  1}
 * ```
 *
 * @constant
 */
export const id_hat_this_ipm: ID = _OID.fromParts([1], id_hat);

/* eslint-enable */
