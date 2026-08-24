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
 * @summary id_et_pkcs7
 * @description
 *
 * OBJECT IDENTIFIER `id_et_pkcs7`. A PKCS7 body part represents an information object
 * which has had some public key cryptographic service applied, typically encryption or
 * signature. It provides a mechanism for securing an information object without using an
 * encoding specific to any messaging system (e.g. See ITU-T X.420 (1999), §7.4.17.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-et-pkcs7 ID ::= {id-et  18}
 * ```
 *
 * @constant
 */
export const id_et_pkcs7: ID = _OID.fromParts([18], id_et);

/* eslint-enable */
