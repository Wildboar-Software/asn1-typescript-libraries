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
 * @summary EntityType_type
 * @description
 *
 * Role of an `Entity` on a notice. ITU-T Rec. X.1341
 * (09/2015) Annex B.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EntityType-type ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @enum {number}
 */
export const _enum_for_EntityType_type = {
  /** Originator (`MAIL FROM`). ASN.1 `from`. */
  from_: 0,
  /** Primary recipient (`RCPT TO`). */
  to: 1,
  /** Carbon-copy recipient. */
  cc: 2,
  /** Transit Cmail server (inter-server hop). */
  transit: 3,
} as const;

export type _enum_for_EntityType_type = (typeof _enum_for_EntityType_type)[keyof typeof _enum_for_EntityType_type];


/**
 * @summary EntityType_type
 * @description
 *
 * Role of an `Entity`: `from`, `to`, `cc`, or `transit`.
 * ITU-T Rec. X.1341 (09/2015) Annex B.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EntityType-type ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @enum {number}
 */
export type EntityType_type = _enum_for_EntityType_type;


/**
 * @summary EntityType_type
 * @description
 *
 * Role of an `Entity`: `from`, `to`, `cc`, or `transit`.
 * ITU-T Rec. X.1341 (09/2015) Annex B.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EntityType-type ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @enum {number}
 */
export const EntityType_type: typeof _enum_for_EntityType_type = _enum_for_EntityType_type;


/**
 * @summary EntityType_type_from_
 * @description Originator. ASN.1 `from`.
 * @constant
 * @type {number}
 */
export const EntityType_type_from_: 0 =
  EntityType_type.from_; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary from_
 * @description Originator. ASN.1 `from`.
 * @constant
 * @type {number}
 */
export const from_: 0 =
  EntityType_type.from_; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary EntityType_type_to
 * @description Primary recipient.
 * @constant
 * @type {number}
 */
export const EntityType_type_to: 1 =
  EntityType_type.to; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary to
 * @description Primary recipient.
 * @constant
 * @type {number}
 */
export const to: 1 =
  EntityType_type.to; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary EntityType_type_cc
 * @description Carbon-copy recipient.
 * @constant
 * @type {number}
 */
export const EntityType_type_cc: 2 =
  EntityType_type.cc; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary cc
 * @description Carbon-copy recipient.
 * @constant
 * @type {number}
 */
export const cc: 2 =
  EntityType_type.cc; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary EntityType_type_transit
 * @description Transit Cmail server.
 * @constant
 * @type {number}
 */
export const EntityType_type_transit: 3 =
  EntityType_type.transit; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary transit
 * @description Transit Cmail server.
 * @constant
 * @type {number}
 */
export const transit: 3 =
  EntityType_type.transit; /* SHORT_NAMED_ENUMERATED_VALUE */




export const _decode_EntityType_type: $.ASN1Decoder<EntityType_type> = $._decodeEnumerated as $.ASN1Decoder<EntityType_type>;




export const _encode_EntityType_type: $.ASN1Encoder<EntityType_type> = $._encodeEnumerated as $.ASN1Encoder<EntityType_type>;


/* eslint-enable */
