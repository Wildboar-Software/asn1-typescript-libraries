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
import { id_cp } from '../MSObjectIdentifiers/id-cp.va.mjs';
/* START_OF_SYMBOL_DEFINITION id_cp_ms_connection */
/**
 * @summary id_cp_ms_connection
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-cp-ms-connection ID ::= {id-cp  0}
 * ```
 *
 * @constant
 */
export const id_cp_ms_connection: ID = new _OID([0], id_cp);
/* END_OF_SYMBOL_DEFINITION id_cp_ms_connection */

/* eslint-enable */
