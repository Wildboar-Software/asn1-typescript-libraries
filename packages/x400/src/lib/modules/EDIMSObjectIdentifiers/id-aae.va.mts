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
import { id_edims } from '../EDIMSObjectIdentifiers/id-edims.va.mjs';
/**
 * @summary id_aae
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-aae ID ::= {id-edims  18}
 * ```
 *
 * @constant
 */
export const id_aae: ID = _OID.fromParts([18], id_edims);

/* eslint-enable */
