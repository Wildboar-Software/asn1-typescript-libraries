/* eslint-disable */
import {
  OCTET_STRING,
  ASN1Element as _Element,
  ASN1TagClass as _TagClass,
  ASN1Construction as _Construction,
  ASN1UniversalType as _UniversalType,
  ObjectIdentifier as _OID,
  External as _External,
  EmbeddedPDV as _PDV,
  ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';

/**
 * @summary CircuitID
 * @description
 *
 * Circuit identifier: concatenation of a system ID and the one-octet Local
 * Circuit ID assigned when the circuit is created. On a LAN this is the LAN ID
 * allocated by the Designated IS (or the value this IS would propose if it is
 * not in the election). On a point-to-point circuit it is negotiated from the
 * two Source IDs during initialisation.
 *
 * (ISO/IEC 10589:2002 clauses 8.2.4, 9.5, 11.2.5.9 and 11.3.1).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CircuitID  ::=  OCTET STRING(SIZE (2..9))
 * ```
 */
export type CircuitID = OCTET_STRING; // OctetStringType


export const _decode_CircuitID = $._decodeOctetString;


export const _encode_CircuitID = $._encodeOctetString;


/* eslint-enable */
