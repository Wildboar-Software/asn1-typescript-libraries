/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary LocationReportArea
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LocationReportArea  ::=  ENUMERATED
 * {
 *     cell(1)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_LocationReportArea {
    cell = 1,
}

/**
 * @summary LocationReportArea
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LocationReportArea  ::=  ENUMERATED
 * {
 *     cell(1)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type LocationReportArea = _enum_for_LocationReportArea;

/**
 * @summary LocationReportArea
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LocationReportArea  ::=  ENUMERATED
 * {
 *     cell(1)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const LocationReportArea = _enum_for_LocationReportArea;

/**
 * @summary LocationReportArea_cell
 * @constant
 * @type {number}
 */
export
const LocationReportArea_cell: LocationReportArea = LocationReportArea.cell; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cell
 * @constant
 * @type {number}
 */
export
const cell: LocationReportArea = LocationReportArea.cell; /* SHORT_NAMED_ENUMERATED_VALUE */

export const _decode_LocationReportArea: $.ASN1Decoder<LocationReportArea> = $._decodeEnumerated;

export const _encode_LocationReportArea: $.ASN1Encoder<LocationReportArea> = $._encodeEnumerated;


/* eslint-enable */
