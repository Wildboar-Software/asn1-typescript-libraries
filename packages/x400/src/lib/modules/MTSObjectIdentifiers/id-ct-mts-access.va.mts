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
import { id_ct } from '../MTSObjectIdentifiers/id-ct.va.mjs';
/* START_OF_SYMBOL_DEFINITION id_ct_mts_access */
/**
 * @summary id_ct_mts_access
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ct-mts-access ID ::= {id-ct  0}
 * ```
 *
 * @constant
 */
export const id_ct_mts_access: ID = new _OID([0], id_ct);
/* END_OF_SYMBOL_DEFINITION id_ct_mts_access */

/* eslint-enable */
