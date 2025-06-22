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
import { ID, _decode_ID, _encode_ID } from '../MHSObjectIdentifiers/ID.ta.mjs';
import { id_mr } from '../MSObjectIdentifiers/id-mr.va.mjs';
/**
 * @summary id_mr_oraddress_substring_elements_match
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mr-oraddress-substring-elements-match ID ::= {id-mr  15}
 * ```
 *
 * @constant
 */
export const id_mr_oraddress_substring_elements_match: ID = _OID.fromParts(
    [15],
    id_mr
);

/* eslint-enable */
