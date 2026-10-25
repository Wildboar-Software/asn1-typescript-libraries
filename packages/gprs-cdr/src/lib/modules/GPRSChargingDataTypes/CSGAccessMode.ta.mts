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
const CSGAccessMode: typeof _enum_for_CSGAccessMode = _enum_for_CSGAccessMode;

/**
 * @summary CSGAccessMode_closedMode
 * @constant
 * @type {number}
 */
export
const CSGAccessMode_closedMode: _enum_for_CSGAccessMode.closedMode = CSGAccessMode.closedMode; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary closedMode
 * @constant
 * @type {number}
 */
export
const closedMode: _enum_for_CSGAccessMode.closedMode = CSGAccessMode.closedMode; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CSGAccessMode_hybridMode
 * @constant
 * @type {number}
 */
export
const CSGAccessMode_hybridMode: _enum_for_CSGAccessMode.hybridMode = CSGAccessMode.hybridMode; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary hybridMode
 * @constant
 * @type {number}
 */
export
const hybridMode: _enum_for_CSGAccessMode.hybridMode = CSGAccessMode.hybridMode; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_CSGAccessMode: $.ASN1Decoder<CSGAccessMode> = $._decodeEnumerated;

export
const _encode_CSGAccessMode: $.ASN1Encoder<CSGAccessMode> = $._encodeEnumerated;

/* eslint-enable */
