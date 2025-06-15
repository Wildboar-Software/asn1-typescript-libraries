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
import { ID, _decode_ID, _encode_ID } from '../EDIMSObjectIdentifiers/ID.ta.mjs';
import { id_bp } from '../EDIMSObjectIdentifiers/id-bp.va.mjs';
/**
 * @summary id_bp_undefined_octet
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-bp-undefined-octet ID ::= {id-bp  11}
 * ```
 *
 * @constant
 */
export const id_bp_undefined_octet: ID = new _OID([11], id_bp);

/* eslint-enable */
