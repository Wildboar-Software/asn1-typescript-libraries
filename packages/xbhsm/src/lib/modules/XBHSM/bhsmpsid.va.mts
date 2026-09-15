/* eslint-disable */
import { OBJECT_IDENTIFIER, ObjectIdentifier as _OID } from "@wildboar/asn1";

/**
 * @summary bhsmpsid
 * @description
 *
 * Content-type OID
 * `{iso(1) standard(0) bhsm(17922) contentType(2) bhsmps(1)}`
 * (`1.0.17922.2.1`)
 * ([ITU-T X.1085](https://www.itu.int/rec/T-REC-X.1085-201610-I)
 * | ISO/IEC 17922 Annex A.3). Annex A.2 says a PKCS #10
 * `attributes` component can include an OID for
 * `EncryptedPsid`; this is the only content-type OID the
 * module defines for that purpose. `{bhsmpsid 3}` identifies
 * `bioRef`.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * bhsmpsid  OBJECT IDENTIFIER ::= {iso(1) standard(0) bhsm(17922) contentType(2) bhsmps(1)}
 * ```
 *
 * @constant
 */
export const bhsmpsid: OBJECT_IDENTIFIER = _OID.fromParts([
    /* iso */ 1,
    /* standard */ 0,
    /* bhsm */ 17922,
    /* contentType */ 2,
    /* bhsmps */ 1,
]);

/* eslint-enable */
