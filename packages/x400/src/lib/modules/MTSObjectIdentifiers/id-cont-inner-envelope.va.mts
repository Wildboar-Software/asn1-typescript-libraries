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
import { ID, _decode_ID, _encode_ID } from '../MTSObjectIdentifiers/ID.ta.mjs';
import { id_cont } from '../MTSObjectIdentifiers/id-cont.va.mjs';
/**
 * @summary id_cont_inner_envelope
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-cont-inner-envelope ID ::= {id-cont  1}
 * ```
 *
 * @constant
 */
export const id_cont_inner_envelope: ID = new _OID([1], id_cont);

/* eslint-enable */
