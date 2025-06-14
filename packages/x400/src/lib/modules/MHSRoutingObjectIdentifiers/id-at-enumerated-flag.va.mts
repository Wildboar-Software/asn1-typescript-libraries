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
import {
    ID,
    _decode_ID,
    _encode_ID,
} from '../MHSRoutingObjectIdentifiers/ID.ta.mjs';
import { id_at } from '../MHSRoutingObjectIdentifiers/id-at.va.mjs';
/* START_OF_SYMBOL_DEFINITION id_at_enumerated_flag */
/**
 * @summary id_at_enumerated_flag
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-at-enumerated-flag ID ::= {id-at  4}
 * ```
 *
 * @constant
 */
export const id_at_enumerated_flag: ID = new _OID([4], id_at);
/* END_OF_SYMBOL_DEFINITION id_at_enumerated_flag */

/* eslint-enable */
