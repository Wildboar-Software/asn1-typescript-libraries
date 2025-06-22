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
import { id_et } from '../IPMSObjectIdentifiers/id-et.va.mjs';
/**
 * @summary id_et_ia5_text
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-et-ia5-text ID ::= {id-et  0}
 * ```
 *
 * @constant
 */
export const id_et_ia5_text: ID = _OID.fromParts([0], id_et);

/* eslint-enable */
