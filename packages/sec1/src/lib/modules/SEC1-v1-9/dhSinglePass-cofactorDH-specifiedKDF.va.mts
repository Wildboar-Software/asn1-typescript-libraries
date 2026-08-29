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
 * @summary dhSinglePass_cofactorDH_specifiedKDF
 * @description
 * 
 * 1-pass ECDH: U already holds V's public key authentically and sends its own
 * key in one pass. Uses the cofactor Diffie-Hellman primitive P = h d_U Q_V
 * (§3.3.2); partial validation of Q_V suffices and resists small-subgroup
 * attacks. KDF is given in the parameters (`KeyDerivationFunction`). [SEC 1 v2](https://www.secg.org/sec1-v2.pdf)
 * §6.1, §5.2, §C.5.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * dhSinglePass-cofactorDH-specifiedKDF OBJECT IDENTIFIER ::= {secg-scheme 2}
 * ```
 * 
 * @constant
 */
export
const dhSinglePass_cofactorDH_specifiedKDF: OBJECT_IDENTIFIER = _OID.fromParts([
    2,
], secg_scheme);

/* eslint-enable */
