/* eslint-disable */
import {
    BIT_STRING,
    ASN1Element as _Element,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary LocationType_deferredLocationEventType
 * @description
 *
 * Optional deferred-event indication inside `LocationType`.
 * TS 32.271 does not define this bit string or its named bits.
 * On an MT-LR, Location Type is the type of location information
 * being requested.
 *
 * 3GPP TS 32.271 V12.1.0 clauses 6.1.3.2.1, 6.1.3.2.2, 6.1.3.2.3,
 * and 6.3.1.2.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LocationType-deferredLocationEventType ::= BIT STRING {
 *    msAvailable  (0 ),
 *    enteringIntoArea  (1 ),
 *    leavingFromArea  (2 ),
 *    beingInsideArea  (3 ),
 *    periodicLDR  (4 )
 * } ( SIZE( 1 .. 16 ) )
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

export const _decode_LocationType_deferredLocationEventType = (el: _Element): LocationType_deferredLocationEventType => {
    const value = $._decodeBitString(el);
    if (value.length < 1 || value.length > 16) {
        throw new ASN1SizeError("LocationType_deferredLocationEventType violates SIZE constraint");
    }
    return value;
};

export
const _encode_LocationType_deferredLocationEventType: $.ASN1Encoder<LocationType_deferredLocationEventType> = $._encodeBitString;

/* eslint-enable */
