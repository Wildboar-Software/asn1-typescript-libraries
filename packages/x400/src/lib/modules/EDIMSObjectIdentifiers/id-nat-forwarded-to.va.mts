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
/* START_OF_SYMBOL_DEFINITION id_nat_forwarded_to */
/**
 * @summary id_nat_forwarded_to
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-nat-forwarded-to ID ::= {id-nat  12}
 * ```
 *
 * @constant
 */
export const id_nat_forwarded_to: ID = new _OID([12], id_nat);
/* END_OF_SYMBOL_DEFINITION id_nat_forwarded_to */

/* eslint-enable */
