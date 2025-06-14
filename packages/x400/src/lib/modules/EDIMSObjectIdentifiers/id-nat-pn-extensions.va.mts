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
 * @summary id_nat_pn_extensions
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-nat-pn-extensions ID ::= {id-nat  8}
 * ```
 *
 * @constant
 */
export const id_nat_pn_extensions: ID = new _OID([8], id_nat);

/* eslint-enable */
