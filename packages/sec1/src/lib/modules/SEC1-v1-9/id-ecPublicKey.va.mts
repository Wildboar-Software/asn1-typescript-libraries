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
import { id_publicKeyType } from "../SEC1-v1-9/id-publicKeyType.va.mjs";
/**
 * @summary id_ecPublicKey
 * @description
 * 
 * Any elliptic-curve public key, regardless of designated use. ANSI X9.62
 * `id-ecPublicKey`. In PKCS #8, also the `privateKeyAlgorithm` for
 * `ECPrivateKey`. [SEC 1 v2](https://www.secg.org/sec1-v2.pdf) §C.3, §C.4.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-ecPublicKey OBJECT IDENTIFIER ::= { id-publicKeyType 1 }
 * ```
 * 
 * @constant
 */
export
const id_ecPublicKey: OBJECT_IDENTIFIER = _OID.fromParts([
    1,
], id_publicKeyType);

/* eslint-enable */
