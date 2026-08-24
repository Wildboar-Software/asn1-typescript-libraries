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
 * @summary id_et_nationally_defined
 * @description
 *
 * OBJECT IDENTIFIER `id_et_nationally_defined`. A Nationally Defined body part
 * represents an information object whose semantics and abstract syntax are nationally
 * defined by a country whose identity is bilaterally agreed by the IPM's originator and
 * all of its potential recipients. It comprises an Any. See ITU-T X.420 (1999), §7.4.10.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-et-nationally-defined ID ::= {id-et  10}
 * ```
 *
 * @constant
 */
export const id_et_nationally_defined: ID = _OID.fromParts([10], id_et);

/* eslint-enable */
