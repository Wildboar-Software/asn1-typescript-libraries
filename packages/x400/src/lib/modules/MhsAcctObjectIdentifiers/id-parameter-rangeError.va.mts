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
import { ID, _decode_ID, _encode_ID } from '../MhsAcctObjectIdentifiers/ID.ta.mjs';
import { id_parameter } from '../MhsAcctObjectIdentifiers/id-parameter.va.mjs';
/**
 * @summary id_parameter_rangeError
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-parameter-rangeError ID ::= {id-parameter  5}
 * ```
 *
 * @constant
 */
export const id_parameter_rangeError: ID = new _OID([5], id_parameter);

/* eslint-enable */
