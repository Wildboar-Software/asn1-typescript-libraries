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
import { id_bp } from '../EDIMSObjectIdentifiers/id-bp.va.mjs';
/**
 * @summary id_bp_edifact_8859
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-bp-edifact-8859 ID ::= {id-bp  12}
 * ```
 *
 * @constant
 */
export const id_bp_edifact_8859: ID = _OID.fromParts([12], id_bp);

/* eslint-enable */
