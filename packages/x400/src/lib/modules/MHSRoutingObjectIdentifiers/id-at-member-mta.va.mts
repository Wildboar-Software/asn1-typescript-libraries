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
 * @summary id_at_member_mta
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-at-member-mta ID ::= {id-at  8}
 * ```
 *
 * @constant
 */
export const id_at_member_mta: ID = _OID.fromParts([8], id_at);

/* eslint-enable */
