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
import { id_rex } from '../IPMSObjectIdentifiers/id-rex.va.mjs';
/**
 * @summary id_rex_circulation_list_indicator
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-rex-circulation-list-indicator ID ::= {id-rex  0}
 * ```
 *
 * @constant
 */
export const id_rex_circulation_list_indicator: ID = _OID.fromParts([0], id_rex);

/* eslint-enable */
