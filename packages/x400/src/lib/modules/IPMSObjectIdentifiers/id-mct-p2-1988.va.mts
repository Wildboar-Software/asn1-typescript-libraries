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
import { ID, _decode_ID, _encode_ID } from '../IPMSObjectIdentifiers/ID.ta.mjs';
import { id_mct } from '../IPMSObjectIdentifiers/id-mct.va.mjs';
/**
 * @summary id_mct_p2_1988
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mct-p2-1988 ID ::= {id-mct  1}
 * ```
 *
 * @constant
 */
export const id_mct_p2_1988: ID = _OID.fromParts([1], id_mct);

/* eslint-enable */
