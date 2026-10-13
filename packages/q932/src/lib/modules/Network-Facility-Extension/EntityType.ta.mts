/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EntityType
 * @description
 * 
 * Role of a PINX named by a network facility extension. `endPINX` is an end
 * PINX. `anyTypeOfPINX` is any PINX. Q.932 does not add procedures for these
 * two values beyond the ISO/IEC 11582 extract. A node that does not terminate
 * GFT-Control forwards the Facility information element regardless of the
 * destination entity type.
 *
 * ITU-T Rec. Q.932 (05/1998) Annex D, D.3.6.2.1 and D.4.3.1.2.
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
enum _enum_for_EntityType {
    endPINX = 0,
    anyTypeOfPINX = 1,
}

/**
 * @summary EntityType
 * @description
 * 
 * Role of a PINX named by a network facility extension. `endPINX` is an end
 * PINX. `anyTypeOfPINX` is any PINX. Q.932 does not add procedures for these
 * two values beyond the ISO/IEC 11582 extract. A node that does not terminate
 * GFT-Control forwards the Facility information element regardless of the
 * destination entity type.
 *
 * ITU-T Rec. Q.932 (05/1998) Annex D, D.3.6.2.1 and D.4.3.1.2.
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
 * Role of a PINX named by a network facility extension. `endPINX` is an end
 * PINX. `anyTypeOfPINX` is any PINX. Q.932 does not add procedures for these
 * two values beyond the ISO/IEC 11582 extract. A node that does not terminate
 * GFT-Control forwards the Facility information element regardless of the
 * destination entity type.
 *
 * ITU-T Rec. Q.932 (05/1998) Annex D, D.3.6.2.1 and D.4.3.1.2.
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
 * @description
 * 
 * The entity is an end PINX. ITU-T Rec. Q.932 (05/1998) Annex D, Figure D.1.
 * 
 * @constant
 * @type {number}
 */
export
const EntityType_endPINX: EntityType = EntityType.endPINX; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary endPINX
 * @description
 * 
 * The entity is an end PINX. ITU-T Rec. Q.932 (05/1998) Annex D, Figure D.1.
 * 
 * @constant
 * @type {number}
 */
export
const endPINX: EntityType = EntityType.endPINX; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EntityType_anyTypeOfPINX
 * @description
 * 
 * The entity may be any type of PINX. A node that does not terminate
 * GFT-Control forwards the Facility information element regardless of this
 * value. ITU-T Rec. Q.932 (05/1998) Annex D, D.3.6.2.1 and D.4.3.1.2.
 * 
 * @constant
 * @type {number}
 */
export
const EntityType_anyTypeOfPINX: EntityType = EntityType.anyTypeOfPINX; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary anyTypeOfPINX
 * @description
 * 
 * The entity may be any type of PINX. A node that does not terminate
 * GFT-Control forwards the Facility information element regardless of this
 * value. ITU-T Rec. Q.932 (05/1998) Annex D, D.3.6.2.1 and D.4.3.1.2.
 * 
 * @constant
 * @type {number}
 */
export
const anyTypeOfPINX: EntityType = EntityType.anyTypeOfPINX; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_EntityType: $.ASN1Decoder<EntityType> = $._decodeEnumerated;
export const _encode_EntityType: $.ASN1Encoder<EntityType> = $._encodeEnumerated;


/* eslint-enable */
