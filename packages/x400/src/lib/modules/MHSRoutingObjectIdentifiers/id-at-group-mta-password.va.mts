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
/**
 * @summary id_at_group_mta_password
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-at-group-mta-password ID ::= {id-at  6}
 * ```
 *
 * @constant
 */
export const id_at_group_mta_password: ID = _OID.fromParts([6], id_at);

/* eslint-enable */
