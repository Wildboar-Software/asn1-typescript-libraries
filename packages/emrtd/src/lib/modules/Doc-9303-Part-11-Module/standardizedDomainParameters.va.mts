/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { bsi_de } from "../Doc-9303-Part-11-Module/bsi-de.va.mjs";
// export { bsi_de } from "../Doc-9303-Part-11-Module/bsi-de.va.mjs";


/**
 * @summary standardizedDomainParameters
 * @description
 *
 * Names a standardized domain-parameter set inside
 * an `AlgorithmIdentifier`. The parameter is the
 * integer id from Table 12. Explicit domain
 * parameters must not use these ids.
 * `{bsi-de algorithms(1) 2}`.
 *
 * 0: 1024-bit MODP group, 160-bit subgroup (GFP), RFC 5114.
 * 1: 2048-bit MODP group, 224-bit subgroup (GFP), RFC 5114.
 * 2: 2048-bit MODP group, 256-bit subgroup (GFP), RFC 5114.
 * 3-7: reserved.
 * 8: NIST P-192 (secp192r1), RFC 5114 and FIPS 186-4.
 * 9: BrainpoolP192r1, RFC 5639.
 * 10: NIST P-224 (secp224r1). Not for Integrated Mapping.
 * 11: BrainpoolP224r1, RFC 5639.
 * 12: NIST P-256 (secp256r1), RFC 5114 and FIPS 186-4.
 * 13: BrainpoolP256r1, RFC 5639.
 * 14: BrainpoolP320r1, RFC 5639.
 * 15: NIST P-384 (secp384r1), RFC 5114 and FIPS 186-4.
 * 16: BrainpoolP384r1, RFC 5639.
 * 17: BrainpoolP512r1, RFC 5639.
 * 18: NIST P-521 (secp521r1), RFC 5114 and FIPS 186-4.
 * 19-31: reserved.
 *
 * Within `PACEInfo`, the same integer is carried
 * directly in `parameterId` rather than inside
 * this object identifier.
 *
 * Doc 9303-11, section 9.5.1.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * standardizedDomainParameters OBJECT IDENTIFIER ::= { bsi-de algorithms(1) 2 }
 * ```
 * 
 * @constant
 */
export
const standardizedDomainParameters: OBJECT_IDENTIFIER = _OID.fromParts([
    /* algorithms */ 1,
    2,
], bsi_de);

/* eslint-enable */
