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
import { id_fieldType } from "../SEC1-v1-9/id-fieldType.va.mjs";
/**
 * @summary prime_field
 * @description
 * 
 * Identifies a prime field. Parameters are `Prime-p` (the modulus). [SEC 1 v2](https://www.secg.org/sec1-v2.pdf)
 * §C.1.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * prime-field OBJECT IDENTIFIER ::= { id-fieldType 1 }
 * ```
 * 
 * @constant
 */
export
const prime_field: OBJECT_IDENTIFIER = _OID.fromParts([
    1,
], id_fieldType);

/* eslint-enable */
