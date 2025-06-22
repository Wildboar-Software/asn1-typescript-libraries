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
import { ID, _decode_ID, _encode_ID } from '../MHSObjectIdentifiers/ID.ta.mjs';
import { id_san } from '../MHSObjectIdentifiers/id-san.va.mjs';
/**
 * @summary id_san_mta_name
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-san-mta-name ID ::= {id-san  0}
 * ```
 *
 * @constant
 */
export const id_san_mta_name: ID = _OID.fromParts([0], id_san);

/* eslint-enable */
