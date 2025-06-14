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
} from '../MHSRoutingObjectIdentifiers/ID.ta.mjs';
import { id_at } from '../MHSRoutingObjectIdentifiers/id-at.va.mjs';
/* START_OF_SYMBOL_DEFINITION id_at_connection_type */
/**
 * @summary id_at_connection_type
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-at-connection-type ID ::= {id-at  2}
 * ```
 *
 * @constant
 */
export const id_at_connection_type: ID = new _OID([2], id_at);
/* END_OF_SYMBOL_DEFINITION id_at_connection_type */

/* eslint-enable */
