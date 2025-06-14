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
import { id_crt } from '../MSObjectIdentifiers/id-crt.va.mjs';
/* START_OF_SYMBOL_DEFINITION id_crt_ms_access_94 */
/**
 * @summary id_crt_ms_access_94
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-crt-ms-access-94 ID ::= {id-crt  1}
 * ```
 *
 * @constant
 */
export const id_crt_ms_access_94: ID = new _OID([1], id_crt);
/* END_OF_SYMBOL_DEFINITION id_crt_ms_access_94 */

/* eslint-enable */
