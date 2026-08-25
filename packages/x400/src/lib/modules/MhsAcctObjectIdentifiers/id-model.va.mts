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
import { mhs_management } from '../MhsAcctObjectIdentifiers/mhs-management.va.mjs';
/**
 * @summary id_model
 * @description
 *
 * 14.1.1 Organization and Modelling Technique The description of procedures for a single
 * MTA is based on the model shown in Figures 5 through 11 and described below. It should
 * be noted that the model is included for descriptive purposes only and is not intended to
 * constrain in any way the implementation of an MTA. See ITU-T X.411 (1999), §14.1.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-model ID ::= {mhs-management  1}
 * ```
 *
 * @constant
 */
export const id_model: ID = _OID.fromParts([1], mhs_management);

/* eslint-enable */
