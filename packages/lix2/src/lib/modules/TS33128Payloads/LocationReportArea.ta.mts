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

/**
 * @summary Decodes an ASN.1 element into a(n) LocationReportArea
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_LocationReportArea = $._decodeEnumerated;

/**
 * @summary Encodes a(n) LocationReportArea into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LocationReportArea, encoded as an ASN.1 Element.
 */
export const _encode_LocationReportArea = $._encodeEnumerated;


/* eslint-enable */
