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
import { ID, _decode_ID, _encode_ID } from '../MhsAcctObjectIdentifiers/ID.ta.mjs';
import { id_name_binding } from '../MhsAcctObjectIdentifiers/id-name-binding.va.mjs';
/* START_OF_SYMBOL_DEFINITION id_name_binding_settlementAcctLog_interworkingMD */
/**
 * @summary id_name_binding_settlementAcctLog_interworkingMD
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-name-binding-settlementAcctLog-interworkingMD ID ::= {id-name-binding  10}
 * ```
 *
 * @constant
 */
export const id_name_binding_settlementAcctLog_interworkingMD: ID = new _OID(
    [10],
    id_name_binding
);
/* END_OF_SYMBOL_DEFINITION id_name_binding_settlementAcctLog_interworkingMD */

/* eslint-enable */
