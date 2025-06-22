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
 * @summary id_bp_untdi_ISO646
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-bp-untdi-ISO646 ID ::= {id-bp  7}
 * ```
 *
 * @constant
 */
export const id_bp_untdi_ISO646: ID = _OID.fromParts([7], id_bp);

/* eslint-enable */
