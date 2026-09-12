/* eslint-disable */
import {
  BOOLEAN,
  ASN1Element as _Element,
  ASN1TagClass as _TagClass,
  ASN1Construction as _Construction,
  ASN1UniversalType as _UniversalType,
  ObjectIdentifier as _OID,
  External as _External,
  EmbeddedPDV as _PDV,
  ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';

/**
 * @summary externalDomain_Default
 * @description
 *
 * Default of `externalDomain`: TRUE, meaning intra-domain IS-IS PDUs are
 * neither transmitted nor interpreted on the circuit (typical for a
 * domain-boundary linkage that uses reachable addresses instead).
 *
 * (ISO/IEC 10589:2002 clauses 8.1, 11.2.5.9 and 11.3.2).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * externalDomain-Default BOOLEAN ::= TRUE
 * ```
 *
 * @constant
 */
export const externalDomain_Default: BOOLEAN = false;

/* eslint-enable */
