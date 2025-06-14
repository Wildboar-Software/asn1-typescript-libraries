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
import { ID, _decode_ID, _encode_ID } from '../IPMSObjectIdentifiers/ID.ta.mjs';
import { id_rex } from '../IPMSObjectIdentifiers/id-rex.va.mjs';
/* START_OF_SYMBOL_DEFINITION id_rex_circulation_list_indicator */
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
export const id_rex_circulation_list_indicator: ID = new _OID([0], id_rex);
/* END_OF_SYMBOL_DEFINITION id_rex_circulation_list_indicator */

/* eslint-enable */
