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
import { ID, _decode_ID, _encode_ID } from '../IPMSObjectIdentifiers/ID.ta.mjs';
import { id_ot } from '../IPMSObjectIdentifiers/id-ot.va.mjs';
/**
 * @summary id_ot_ipms_user
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ot-ipms-user ID ::= {id-ot  1}
 * ```
 *
 * @constant
 */
export const id_ot_ipms_user: ID = _OID.fromParts([1], id_ot);

/* eslint-enable */
