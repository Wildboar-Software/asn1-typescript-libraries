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
import { ID, _decode_ID, _encode_ID } from '../MTSObjectIdentifiers/ID.ta.mjs';
import { id_cp } from '../MTSObjectIdentifiers/id-cp.va.mjs';
/**
 * @summary id_cp_mta_connect
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-cp-mta-connect ID ::= {id-cp  1}
 * ```
 *
 * @constant
 */
export const id_cp_mta_connect: ID = _OID.fromParts([1], id_cp);

/* eslint-enable */
