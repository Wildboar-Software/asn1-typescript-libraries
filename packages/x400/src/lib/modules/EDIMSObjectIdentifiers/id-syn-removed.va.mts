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
import { ID, _decode_ID, _encode_ID } from '../EDIMSObjectIdentifiers/ID.ta.mjs';
import { id_syn } from '../EDIMSObjectIdentifiers/id-syn.va.mjs';
/**
 * @summary id_syn_removed
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-syn-removed ID ::= {id-syn  0}
 * ```
 *
 * @constant
 */
export const id_syn_removed: ID = _OID.fromParts([0], id_syn);

/* eslint-enable */
