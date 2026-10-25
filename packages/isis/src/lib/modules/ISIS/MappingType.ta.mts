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
import * as $ from '@wildboar/asn1/functional';

/**
 * @summary MappingType
 * @description
 *
 * How the next-hop SNPA for a reachable address prefix is derived at a domain
 * boundary. Selects the `explicitSNPA-P` or `extractDSP-P` conditional package.
 *
 * (ISO/IEC 10589:2002 clauses 8.1, 11.2.12 and 11.3.1).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MappingType  ::=  ENUMERATED {none(0), explicit(1), extractIDI(2), extractDSP(3)}
 * ```
 *
 * @enum {number}
 */
export enum _enum_for_MappingType {
  none = 0,
  explicit = 1,
  extractIDI = 2,
  extractDSP = 3,
}

/**
 * @summary MappingType
 * @description
 *
 * How the next-hop SNPA for a reachable address prefix is derived at a domain
 * boundary. Selects the `explicitSNPA-P` or `extractDSP-P` conditional package.
 *
 * (ISO/IEC 10589:2002 clauses 8.1, 11.2.12 and 11.3.1).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MappingType  ::=  ENUMERATED {none(0), explicit(1), extractIDI(2), extractDSP(3)}
 * ```
 *
 * @enum {number}
 */
export type MappingType = _enum_for_MappingType;

/**
 * @summary MappingType
 * @description
 *
 * How the next-hop SNPA for a reachable address prefix is derived at a domain
 * boundary. Selects the `explicitSNPA-P` or `extractDSP-P` conditional package.
 *
 * (ISO/IEC 10589:2002 clauses 8.1, 11.2.12 and 11.3.1).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MappingType  ::=  ENUMERATED {none(0), explicit(1), extractIDI(2), extractDSP(3)}
 * ```
 *
 * @enum {number}
 */
export const MappingType = _enum_for_MappingType;

/**
 * @summary MappingType_none
 * @description
 *
 * No SNPA mapping.
 *
 * (ISO/IEC 10589:2002 clause 11.3.1).
 *
 * @constant
 * @type {number}
 */
export const MappingType_none =
  MappingType.none; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary none
 * @constant
 * @type {number}
 */
export const none =
  MappingType.none; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MappingType_explicit
 * @description
 *
 * SNPA address or set of addresses is pre-configured on the reachable address
 * (`sNPAAddresses`).
 *
 * (ISO/IEC 10589:2002 clause 8.1).
 *
 * @constant
 * @type {number}
 */
export const MappingType_explicit =
  MappingType.explicit; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary explicit
 * @constant
 * @type {number}
 */
export const explicit =
  MappingType.explicit; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MappingType_extractIDI
 * @description
 *
 * SNPA is embedded in the IDI of the destination NSAP (ISO 8348 encoding).
 * Usable with X.121, F.69, E.163 and E.164 IDIs.
 *
 * (ISO/IEC 10589:2002 clause 8.1).
 *
 * @constant
 * @type {number}
 */
export const MappingType_extractIDI =
  MappingType.extractIDI; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary extractIDI
 * @constant
 * @type {number}
 */
export const extractIDI =
  MappingType.extractIDI; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MappingType_extractDSP
 * @description
 *
 * All or a suffix of the SNPA is taken from the DSP using `sNPAMask` and then
 * prefixed with `sNPAPrefix`.
 *
 * (ISO/IEC 10589:2002 clause 8.1).
 *
 * @constant
 * @type {number}
 */
export const MappingType_extractDSP =
  MappingType.extractDSP; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary extractDSP
 * @constant
 * @type {number}
 */
export const extractDSP =
  MappingType.extractDSP; /* SHORT_NAMED_ENUMERATED_VALUE */


export function _decode_MappingType(el: _Element): MappingType {
  const enumerated = $._decodeEnumerated(el);
  switch (enumerated) {
    case MappingType.none: return MappingType.none;
    case MappingType.explicit: return MappingType.explicit;
    case MappingType.extractIDI: return MappingType.extractIDI;
    case MappingType.extractDSP: return MappingType.extractDSP;
    default:
      throw new _ConstructionError(
        'Invalid ENUMERATED value ' + enumerated + ' for MappingType.',
        el,
      );
  }
}


export const _encode_MappingType: $.ASN1Encoder<MappingType> = $._encodeEnumerated as $.ASN1Encoder<MappingType>;


/* eslint-enable */
