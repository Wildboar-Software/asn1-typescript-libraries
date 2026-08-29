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
import { id_characteristic_two_basis } from "../SEC1-v1-9/id-characteristic-two-basis.va.mjs";
/**
 * @summary ppBasis
 * @description
 * 
 * Pentanomial polynomial basis. Parameter is `Pentanomial` `(k1, k2, k3)`.
 * [SEC 1 v2](https://www.secg.org/sec1-v2.pdf) §C.1.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ppBasis OBJECT IDENTIFIER ::= { id-characteristic-two-basis 3 }
 * ```
 * 
 * @constant
 */
export
const ppBasis: OBJECT_IDENTIFIER = _OID.fromParts([
    3,
], id_characteristic_two_basis);

/* eslint-enable */
