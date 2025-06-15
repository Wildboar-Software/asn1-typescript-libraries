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
import { ID, _decode_ID, _encode_ID } from '../MHSObjectIdentifiers/ID.ta.mjs';
import { id_ot } from '../MSObjectIdentifiers/id-ot.va.mjs';
/**
 * @summary id_ot_ms_user
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ot-ms-user ID ::= {id-ot  1}
 * ```
 *
 * @constant
 */
export const id_ot_ms_user: ID = new _OID([1], id_ot);

/* eslint-enable */
