/* eslint-disable */
import {
    BIT_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary LocationType_deferredLocationEventType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LocationType-deferredLocationEventType ::= BIT STRING { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type LocationType_deferredLocationEventType = BIT_STRING;

/**
 * @summary LocationType_deferredLocationEventType_msAvailable
 * @constant
 */
export
const LocationType_deferredLocationEventType_msAvailable: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary msAvailable
 * @constant
 */
export
const msAvailable: number = LocationType_deferredLocationEventType_msAvailable; /* SHORT_NAMED_BIT */

/**
 * @summary LocationType_deferredLocationEventType_enteringIntoArea
 * @constant
 */
export
const LocationType_deferredLocationEventType_enteringIntoArea: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary enteringIntoArea
 * @constant
 */
export
const enteringIntoArea: number = LocationType_deferredLocationEventType_enteringIntoArea; /* SHORT_NAMED_BIT */

/**
 * @summary LocationType_deferredLocationEventType_leavingFromArea
 * @constant
 */
export
const LocationType_deferredLocationEventType_leavingFromArea: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary leavingFromArea
 * @constant
 */
export
const leavingFromArea: number = LocationType_deferredLocationEventType_leavingFromArea; /* SHORT_NAMED_BIT */

/**
 * @summary LocationType_deferredLocationEventType_beingInsideArea
 * @constant
 */
export
const LocationType_deferredLocationEventType_beingInsideArea: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary beingInsideArea
 * @constant
 */
export
const beingInsideArea: number = LocationType_deferredLocationEventType_beingInsideArea; /* SHORT_NAMED_BIT */

/**
 * @summary LocationType_deferredLocationEventType_periodicLDR
 * @constant
 */
export
const LocationType_deferredLocationEventType_periodicLDR: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary periodicLDR
 * @constant
 */
export
const periodicLDR: number = LocationType_deferredLocationEventType_periodicLDR; /* SHORT_NAMED_BIT */

export
const _decode_LocationType_deferredLocationEventType: $.ASN1Decoder<LocationType_deferredLocationEventType> = $._decodeBitString;

export
const _encode_LocationType_deferredLocationEventType: $.ASN1Encoder<LocationType_deferredLocationEventType> = $._encodeBitString;

/* eslint-enable */
