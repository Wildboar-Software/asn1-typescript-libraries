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
 * @summary id_et_mixed_mode
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-et-mixed-mode ID ::= {id-et  8}
 * ```
 *
 * @constant
 */
export const id_et_mixed_mode: ID = _OID.fromParts([8], id_et);

/* eslint-enable */
