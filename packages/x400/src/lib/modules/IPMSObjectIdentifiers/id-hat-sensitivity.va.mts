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
 * @summary id_hat_sensitivity
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-hat-sensitivity ID ::= {id-hat  8}
 * ```
 *
 * @constant
 */
export const id_hat_sensitivity: ID = _OID.fromParts([8], id_hat);

/* eslint-enable */
