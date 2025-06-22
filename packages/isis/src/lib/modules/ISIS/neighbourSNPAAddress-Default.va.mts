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
} from "@wildboar/nlm/src/lib/modules/NLM/SNPAAddress.ta.mjs";
import {
    sNPADTEAddress,
} from "@wildboar/nlm/src/lib/modules/NLM/sNPADTEAddress.va.mjs";

/**
 * @summary neighbourSNPAAddress_Default
 * @description
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
