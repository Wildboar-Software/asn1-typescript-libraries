/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";

/**
 * @summary EntityType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EntityType  ::=  ENUMERATED {endPINX(0), anyTypeOfPINX(1)}
 * ```
 * 
 * @enum {number}
 */
export const _enum_for_EntityType = {
    endPINX: 0,
    anyTypeOfPINX: 1,
} as const;

export type _enum_for_EntityType = (typeof _enum_for_EntityType)[keyof typeof _enum_for_EntityType];

/**
 * @summary EntityType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EntityType  ::=  ENUMERATED {endPINX(0), anyTypeOfPINX(1)}
 * ```
 * 
 * @enum {number}
 */
export
type EntityType = _enum_for_EntityType;

/**
 * @summary EntityType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EntityType  ::=  ENUMERATED {endPINX(0), anyTypeOfPINX(1)}
 * ```
 * 
 * @enum {number}
 */
export
const EntityType = _enum_for_EntityType;

/**
 * @summary EntityType_endPINX
 * @constant
 * @type {number}
 */
export
const EntityType_endPINX: EntityType = EntityType.endPINX; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary endPINX
 * @constant
 * @type {number}
 */
export
const endPINX: EntityType = EntityType.endPINX; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EntityType_anyTypeOfPINX
 * @constant
 * @type {number}
 */
export
const EntityType_anyTypeOfPINX: EntityType = EntityType.anyTypeOfPINX; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary anyTypeOfPINX
 * @constant
 * @type {number}
 */
export
const anyTypeOfPINX: EntityType = EntityType.anyTypeOfPINX; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_EntityType: $.ASN1Decoder<EntityType> = $._decodeEnumerated as $.ASN1Decoder<EntityType>;
export const _encode_EntityType: $.ASN1Encoder<EntityType> = $._encodeEnumerated as $.ASN1Encoder<EntityType>;

/* eslint-enable */
