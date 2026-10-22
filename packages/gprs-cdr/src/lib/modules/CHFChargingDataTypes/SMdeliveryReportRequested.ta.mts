/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SMdeliveryReportRequested
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SMdeliveryReportRequested  ::=  ENUMERATED {
 *    yes         ( 0 ),
 *    no          ( 1 ) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_SMdeliveryReportRequested {
    yes = 0,
    no = 1,
}

/**
 * @summary SMdeliveryReportRequested
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SMdeliveryReportRequested  ::=  ENUMERATED {
 *    yes         ( 0 ),
 *    no          ( 1 ) }
 * ```
 * 
 * @enum {number}
 */
export
type SMdeliveryReportRequested = _enum_for_SMdeliveryReportRequested;

/**
 * @summary SMdeliveryReportRequested
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SMdeliveryReportRequested  ::=  ENUMERATED {
 *    yes         ( 0 ),
 *    no          ( 1 ) }
 * ```
 * 
 * @enum {number}
 */
export
const SMdeliveryReportRequested = _enum_for_SMdeliveryReportRequested;

/**
 * @summary SMdeliveryReportRequested_yes
 * @constant
 * @type {number}
 */
export
const SMdeliveryReportRequested_yes: SMdeliveryReportRequested = SMdeliveryReportRequested.yes; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary yes
 * @constant
 * @type {number}
 */
export
const yes: SMdeliveryReportRequested = SMdeliveryReportRequested.yes; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SMdeliveryReportRequested_no
 * @constant
 * @type {number}
 */
export
const SMdeliveryReportRequested_no: SMdeliveryReportRequested = SMdeliveryReportRequested.no; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary no
 * @constant
 * @type {number}
 */
export
const no: SMdeliveryReportRequested = SMdeliveryReportRequested.no; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_SMdeliveryReportRequested: $.ASN1Decoder<SMdeliveryReportRequested> = $._decodeEnumerated;

export
const _encode_SMdeliveryReportRequested: $.ASN1Encoder<SMdeliveryReportRequested> = $._encodeEnumerated;

/* eslint-enable */
