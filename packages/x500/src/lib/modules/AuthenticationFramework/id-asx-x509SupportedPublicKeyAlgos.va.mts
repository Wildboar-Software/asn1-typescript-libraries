/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { id_asx } from "../UsefulDefinitions/id-asx.va.mjs";
/**
 * @summary id_asx_x509SupportedPublicKeyAlgos
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-asx-x509SupportedPublicKeyAlgos  OBJECT IDENTIFIER ::= {id-asx 10}
 * ```
 *
 * @constant
 */
export const id_asx_x509SupportedPublicKeyAlgos: OBJECT_IDENTIFIER = _OID.fromParts(
    [10],
    id_asx
);

/* eslint-enable */
