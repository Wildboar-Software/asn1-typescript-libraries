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
import { id_wf } from '../MHSRoutingObjectIdentifiers/id-wf.va.mjs';
/**
 * @summary id_wf_integer
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-wf-integer ID ::= {id-wf  0}
 * ```
 *
 * @constant
 */
export const id_wf_integer: ID = new _OID([0], id_wf);

/* eslint-enable */
