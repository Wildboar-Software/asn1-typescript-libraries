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
import { id_on } from '../IPMSObjectIdentifiers/id-on.va.mjs';
/**
 * @summary id_on_absence_advice
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-on-absence-advice ID ::= {id-on  0}
 * ```
 *
 * @constant
 */
export const id_on_absence_advice: ID = _OID.fromParts([0], id_on);

/* eslint-enable */
