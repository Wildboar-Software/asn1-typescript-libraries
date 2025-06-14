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
import { id_oc } from '../MHSRoutingObjectIdentifiers/id-oc.va.mjs';
/* START_OF_SYMBOL_DEFINITION id_oc_mhs_terminal_type */
/**
 * @summary id_oc_mhs_terminal_type
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-oc-mhs-terminal-type ID ::= {id-oc  19}
 * ```
 *
 * @constant
 */
export const id_oc_mhs_terminal_type: ID = new _OID([19], id_oc);
/* END_OF_SYMBOL_DEFINITION id_oc_mhs_terminal_type */

/* eslint-enable */
