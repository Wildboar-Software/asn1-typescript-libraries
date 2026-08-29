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
 * @summary xor_in_ecies
 * @description
 * 
 * XOR encryption in ECIES: ciphertext = key XOR message. Key length equals the
 * message. Adequate in ECIES because a fresh key is derived per message.
 * Optional v1.0-compatible EK/MK split (see §5.1.3 step 6). [SEC 1 v2](https://www.secg.org/sec1-v2.pdf) §3.8,
 * §C.5.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * xor-in-ecies OBJECT IDENTIFIER ::= {secg-scheme 18 }
 * ```
 * 
 * @constant
 */
export
const xor_in_ecies: OBJECT_IDENTIFIER = _OID.fromParts([
    18,
], secg_scheme);

/* eslint-enable */
