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
import { ID, _decode_ID, _encode_ID } from '../MhsAcctObjectIdentifiers/ID.ta.mjs';
import { id_accounting } from '../MhsAcctObjectIdentifiers/id-accounting.va.mjs';
/**
 * @summary id_parameter
 * @description
 *
 * OBJECT IDENTIFIER `id_parameter`. This clause defines a number of common parameter
 * types of the MTA Abstract Service. 12.3.1 Trace-information and
 * internal-trace-information Trace-information documents the actions taken on a message,
 * probe or report by each MD through which it passes as it is transferred through the
 * MTS. See ITU-T X.411 (1999), §12.3.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-parameter ID ::= {id-accounting  6}
 * ```
 *
 * @constant
 */
export const id_parameter: ID = _OID.fromParts([6], id_accounting);

/* eslint-enable */
