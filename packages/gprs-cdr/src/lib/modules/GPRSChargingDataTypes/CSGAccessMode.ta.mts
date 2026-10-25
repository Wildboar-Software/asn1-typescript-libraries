/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CSGAccessMode
 * @description
 * 
 * Access mode of the CSG cell the UE is using, reported with the CSG ID
 * (clause 5.1.2). A hybrid cell also carries the CSG membership indication
 * (clause 5.2.3.3.1).
 * 
 * 3GPP TS 32.251 V19.0.0.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CSGAccessMode  ::=  ENUMERATED {
 *    closedMode    ( 0 ),
 *    hybridMode    ( 1 ) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_CSGAccessMode {
    closedMode = 0,
    hybridMode = 1,
}

/**
 * @summary CSGAccessMode
 * @description
 * 
 * Access mode of the CSG cell the UE is using, reported with the CSG ID
 * (clause 5.1.2). A hybrid cell also carries the CSG membership indication
 * (clause 5.2.3.3.1).
 * 
 * 3GPP TS 32.251 V19.0.0.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CSGAccessMode  ::=  ENUMERATED {
 *    closedMode    ( 0 ),
 *    hybridMode    ( 1 ) }
 * ```
 * 
 * @enum {number}
 */
export
type CSGAccessMode = _enum_for_CSGAccessMode;

/**
 * @summary CSGAccessMode
 * @description
 * 
 * Access mode of the CSG cell the UE is using, reported with the CSG ID
 * (clause 5.1.2). A hybrid cell also carries the CSG membership indication
 * (clause 5.2.3.3.1).
 * 
 * 3GPP TS 32.251 V19.0.0.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CSGAccessMode  ::=  ENUMERATED {
 *    closedMode    ( 0 ),
 *    hybridMode    ( 1 ) }
 * ```
 * 
 * @enum {number}
 */
export
const CSGAccessMode = _enum_for_CSGAccessMode;

/**
 * @summary CSGAccessMode_closedMode
 * @constant
 * @type {number}
 */
export
const CSGAccessMode_closedMode = CSGAccessMode.closedMode satisfies CSGAccessMode; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary closedMode
 * @constant
 * @type {number}
 */
export
const closedMode = CSGAccessMode.closedMode satisfies CSGAccessMode; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CSGAccessMode_hybridMode
 * @constant
 * @type {number}
 */
export
const CSGAccessMode_hybridMode = CSGAccessMode.hybridMode satisfies CSGAccessMode; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary hybridMode
 * @constant
 * @type {number}
 */
export
const hybridMode = CSGAccessMode.hybridMode satisfies CSGAccessMode; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_CSGAccessMode: $.ASN1Decoder<CSGAccessMode> = $._decodeEnumerated;

export
const _encode_CSGAccessMode: $.ASN1Encoder<CSGAccessMode> = $._encodeEnumerated;

/* eslint-enable */
