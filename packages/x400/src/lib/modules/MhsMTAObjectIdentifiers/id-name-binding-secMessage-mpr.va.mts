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
import { ID, _decode_ID, _encode_ID } from '../MhsMTAObjectIdentifiers/ID.ta.mjs';
import { id_name_binding } from '../MhsMTAObjectIdentifiers/id-name-binding.va.mjs';
/* START_OF_SYMBOL_DEFINITION id_name_binding_secMessage_mpr */
/**
 * @summary id_name_binding_secMessage_mpr
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-name-binding-secMessage-mpr ID ::= {id-name-binding  24}
 * ```
 *
 * @constant
 */
export const id_name_binding_secMessage_mpr: ID = new _OID(
    [24],
    id_name_binding
);
/* END_OF_SYMBOL_DEFINITION id_name_binding_secMessage_mpr */

/* eslint-enable */
