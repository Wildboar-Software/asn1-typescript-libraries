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
import { ID, _decode_ID, _encode_ID } from '../EDIMSObjectIdentifiers/ID.ta.mjs';
import { id_nat } from '../EDIMSObjectIdentifiers/id-nat.va.mjs';
/**
 * @summary id_nat_nn_reason_code
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-nat-nn-reason-code ID ::= {id-nat  9}
 * ```
 *
 * @constant
 */
export const id_nat_nn_reason_code: ID = new _OID([9], id_nat);

/* eslint-enable */
