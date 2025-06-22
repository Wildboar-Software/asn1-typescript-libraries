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
} from 'asn1-ts';
import { ID, _decode_ID, _encode_ID } from '../IPMSObjectIdentifiers/ID.ta.mjs';
import { id_hat } from '../IPMSObjectIdentifiers/id-hat.va.mjs';
/**
 * @summary id_hat_manual_handling_instructions
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-hat-manual-handling-instructions ID ::= {id-hat  32}
 * ```
 *
 * @constant
 */
export const id_hat_manual_handling_instructions: ID = _OID.fromParts([32], id_hat);

/* eslint-enable */
