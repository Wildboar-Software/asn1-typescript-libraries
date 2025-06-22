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
import { id_parameter } from '../MhsAcctObjectIdentifiers/id-parameter.va.mjs';
/**
 * @summary id_parameter_deleteError
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-parameter-deleteError ID ::= {id-parameter  2}
 * ```
 *
 * @constant
 */
export const id_parameter_deleteError: ID = _OID.fromParts([2], id_parameter);

/* eslint-enable */
