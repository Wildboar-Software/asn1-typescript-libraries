/* eslint-disable */
import {
    OBJECT_IDENTIFIER,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import { secg_scheme } from "../SEC1-v1-9/secg-scheme.va.mjs";
/**
 * @summary tdes_cbc_in_ecies
 * @description
 * 
 * 3-key TDES in CBC mode (ANS X9.52) inside ECIES. 24-octet key (three 8-octet
 * subkeys with parity). IV is 8 zero octets and is not transmitted. [SEC 1 v2](https://www.secg.org/sec1-v2.pdf)
 * §3.8, §C.5.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tdes-cbc-in-ecies OBJECT IDENTIFIER ::= {secg-scheme 19 }
 * ```
 * 
 * @constant
 */
export
const tdes_cbc_in_ecies: OBJECT_IDENTIFIER = _OID.fromParts([
    19,
], secg_scheme);

/* eslint-enable */
