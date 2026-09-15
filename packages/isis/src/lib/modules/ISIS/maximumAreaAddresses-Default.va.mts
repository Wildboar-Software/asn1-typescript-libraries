/* eslint-disable */
import {
  INTEGER,
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
 * @summary maximumAreaAddresses_Default
 * @description
 *
 * Default `maximumAreaAddresses`: 3 (the minimum every IS shall support). PDU
 * encoding 0 is treated as 3.
 *
 * (ISO/IEC 10589:2002 clauses 7.1.5, 9.5 and 11.3.2).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * maximumAreaAddresses-Default INTEGER ::= 3
 * ```
 *
 * @constant
 */
export const maximumAreaAddresses_Default: INTEGER = 3;

/* eslint-enable */
