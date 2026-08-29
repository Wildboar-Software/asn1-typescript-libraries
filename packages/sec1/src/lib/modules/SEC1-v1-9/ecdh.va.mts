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
 * @summary ecdh
 * @description
 * 
 * Generic ECDH; KDF, standard vs cofactor, and pass count are specified out of
 * band. [SEC 1 v2](https://www.secg.org/sec1-v2.pdf) §6.1, §C.5.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ecdh OBJECT IDENTIFIER ::= {secg-scheme 12}
 * ```
 * 
 * @constant
 */
export
const ecdh: OBJECT_IDENTIFIER = _OID.fromParts([
    12,
], secg_scheme);

/* eslint-enable */
