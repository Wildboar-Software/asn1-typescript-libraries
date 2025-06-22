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
} from '@wildboar/asn1';
import {
    ID,
    _decode_ID,
    _encode_ID,
} from '../MHSRoutingObjectIdentifiers/ID.ta.mjs';
import { id_at } from '../MHSRoutingObjectIdentifiers/id-at.va.mjs';
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
export const id_at_transit_exit_connection_group_name: ID = _OID.fromParts(
    [38],
    id_at
);

/* eslint-enable */
