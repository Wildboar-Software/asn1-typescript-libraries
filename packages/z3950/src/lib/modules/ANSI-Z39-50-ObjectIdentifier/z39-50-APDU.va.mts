/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { z39_50 } from "../ANSI-Z39-50-ObjectIdentifier/z39-50.va.mjs";


/**
 * @summary z39_50_APDU
 * @description
 * 
 * Object-class arc for abstract-syntax definitions of APDUs, `{Z39-50 2}`
 * (OID.2 value 2, ASN1.2). OID.3 assigns the APDU abstract syntax as
 * `{Z39-50-APDU 1}`. The same OID is used for 1992, 1995, and 2003 so the
 * versions can interwork (OID.4).
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * z39-50-APDU             OBJECT IDENTIFIER ::= {z39-50 2}
 * ```
 * 
 * @constant
 */
export
const z39_50_APDU: OBJECT_IDENTIFIER = _OID.fromParts([
    2,
], z39_50);

/* eslint-enable */
