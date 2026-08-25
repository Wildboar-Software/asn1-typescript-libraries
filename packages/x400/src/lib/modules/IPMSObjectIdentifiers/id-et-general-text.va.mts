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
 * @summary id_et_general_text
 * @description
 *
 * A General Text extended body part represents character text of a general nature. It has
 * Parameters and Data components. See ITU-T X.420 (1999), §7.4.11.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-et-general-text ID ::= {id-et  11}
 * ```
 *
 * @constant
 */
export const id_et_general_text: ID = _OID.fromParts([11], id_et);

/* eslint-enable */
