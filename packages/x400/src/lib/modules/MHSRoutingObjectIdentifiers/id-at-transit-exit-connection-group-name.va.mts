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
/* START_OF_SYMBOL_DEFINITION id_at_transit_exit_connection_group_name */
/**
 * @summary id_at_transit_exit_connection_group_name
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-at-transit-exit-connection-group-name ID ::= {id-at  38}
 * ```
 *
 * @constant
 */
export const id_at_transit_exit_connection_group_name: ID = new _OID(
    [38],
    id_at
);
/* END_OF_SYMBOL_DEFINITION id_at_transit_exit_connection_group_name */

/* eslint-enable */
