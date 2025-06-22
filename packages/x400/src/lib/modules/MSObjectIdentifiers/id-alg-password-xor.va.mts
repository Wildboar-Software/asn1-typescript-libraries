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
import { ID, _decode_ID, _encode_ID } from '../MHSObjectIdentifiers/ID.ta.mjs';
import { id_alg } from '../MSObjectIdentifiers/id-alg.va.mjs';
/**
 * @summary id_alg_password_xor
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-alg-password-xor ID ::= {id-alg  0}
 * ```
 *
 * @constant
 */
export const id_alg_password_xor: ID = _OID.fromParts([0], id_alg);

/* eslint-enable */
