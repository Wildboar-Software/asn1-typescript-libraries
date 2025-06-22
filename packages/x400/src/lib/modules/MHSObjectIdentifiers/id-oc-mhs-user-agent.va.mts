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
import { id_oc } from '../MHSObjectIdentifiers/id-oc.va.mjs';
/**
 * @summary id_oc_mhs_user_agent
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-oc-mhs-user-agent ID ::= {id-oc  4}
 * ```
 *
 * @constant
 */
export const id_oc_mhs_user_agent: ID = _OID.fromParts([4], id_oc);

/* eslint-enable */
