/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary EntityType
 * @description
 *
 * Whether an NFE endpoint is an End PINX or any PINX (ECMA-165 §11.3.3.1,
 * §7.1.2.1 Table 10).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-165/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EntityType  ::=  ENUMERATED {
 *     endPINX(0),
 *     anyTypeOfPINX(1)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_EntityType {
    endPINX = 0,
    anyTypeOfPINX = 1,
}

/**
 * @summary EntityType
 * @description
 *
 * Whether an NFE endpoint is an End PINX or any PINX (ECMA-165 §11.3.3.1,
 * §7.1.2.1 Table 10).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-165/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EntityType  ::=  ENUMERATED {
 *     endPINX(0),
 *     anyTypeOfPINX(1)
 * }
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
 * Whether an NFE endpoint is an End PINX or any PINX (ECMA-165 §11.3.3.1,
 * §7.1.2.1 Table 10).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-165/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EntityType  ::=  ENUMERATED {
 *     endPINX(0),
 *     anyTypeOfPINX(1)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const EntityType = _enum_for_EntityType;

/**
 * @summary EntityType_endPINX
 * @description
 *
 * An Originating or Terminating PINX, or a Gateway PINX acting as an End PINX
 * (ECMA-165 §4.16, §4.17). In the NFE this selects the End PINX in the
 * direction of the Facility information element (§7.1.2, Table 10). Avoid it
 * when the sender might cease to be an End PINX before a response arrives
 * (§7.1.2.1).
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-165/
 */
export
const EntityType_endPINX: EntityType = EntityType.endPINX; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary endPINX
 * @description Alias of {@link EntityType_endPINX}.
 * @constant
 * @type {number}
 */
export
const endPINX: EntityType = EntityType.endPINX; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EntityType_anyTypeOfPINX
 * @description
 *
 * Any PINX, not identified merely as an end PINX. With an address, a specific
 * PINX; without an address, the next PINX that understands the contents
 * (ECMA-165 §7.1.2.1 Table 10, §7.1.2.2.2).
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-165/
 */
export
const EntityType_anyTypeOfPINX: EntityType = EntityType.anyTypeOfPINX; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary anyTypeOfPINX
 * @description Alias of {@link EntityType_anyTypeOfPINX}.
 * @constant
 * @type {number}
 */
export
const anyTypeOfPINX: EntityType = EntityType.anyTypeOfPINX; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_EntityType: $.ASN1Decoder<EntityType> = $._decodeEnumerated;

export
const _encode_EntityType: $.ASN1Encoder<EntityType> = $._encodeEnumerated;

/* eslint-enable */
