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
import {
    ID,
    _decode_ID,
    _encode_ID,
} from '../MHSProtocolObjectIdentifiers/ID.ta.mjs';
import { id_ac } from '../MHSProtocolObjectIdentifiers/id-ac.va.mjs';
/* START_OF_SYMBOL_DEFINITION id_ac_ms_access_88 */
/**
 * @summary id_ac_ms_access_88
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ac-ms-access-88 ID ::= {id-ac  4}
 * ```
 *
 * @constant
 */
export const id_ac_ms_access_88: ID = new _OID([4], id_ac);
/* END_OF_SYMBOL_DEFINITION id_ac_ms_access_88 */

/* eslint-enable */
