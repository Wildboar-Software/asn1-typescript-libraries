/* eslint-disable */
import {
  ASN1Element as _Element,
  ASN1TagClass as _TagClass,
  ASN1Construction as _Construction,
  ASN1UniversalType as _UniversalType,
  ObjectIdentifier as _OID,
  External as _External,
  EmbeddedPDV as _PDV,
  ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';
import {
  SNPAAddress,
  _decode_SNPAAddress,
  _encode_SNPAAddress,
} from "@wildboar/nlm";
import {
    sNPADTEAddress,
} from "@wildboar/nlm";

/**
 * @summary neighbourSNPAAddress_Default
 * @description
 *
 * Default neighbour SNPA on a static circuit: DTE-address type with empty
 * address octets.
 *
 * (ISO/IEC 10589:2002 clauses 11.2.5.5 and 11.3.2).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * neighbourSNPAAddress-Default SNPAAddress ::= {type NLM.sNPADTEAddress, address ''H}
 * ```
 *
 * @constant
 */
export const neighbourSNPAAddress_Default: SNPAAddress = SNPAAddress._from_object(
  { type_: sNPADTEAddress, address: new Uint8Array(0) }
);

/* eslint-enable */
