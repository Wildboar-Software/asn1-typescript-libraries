/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CurrentLocationRetrieved
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CurrentLocationRetrieved  ::=  ENUMERATED {
 *    activeLocationRetrieval    ( 0 ) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_CurrentLocationRetrieved {
    activeLocationRetrieval = 0,
}

/**
 * @summary CurrentLocationRetrieved
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CurrentLocationRetrieved  ::=  ENUMERATED {
 *    activeLocationRetrieval    ( 0 ) }
 * ```
 * 
 * @enum {number}
 */
export
type CurrentLocationRetrieved = _enum_for_CurrentLocationRetrieved;

/**
 * @summary CurrentLocationRetrieved
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CurrentLocationRetrieved  ::=  ENUMERATED {
 *    activeLocationRetrieval    ( 0 ) }
 * ```
 * 
 * @enum {number}
 */
export
const CurrentLocationRetrieved = _enum_for_CurrentLocationRetrieved;

/**
 * @summary CurrentLocationRetrieved_activeLocationRetrieval
 * @constant
 * @type {number}
 */
export
const CurrentLocationRetrieved_activeLocationRetrieval: CurrentLocationRetrieved = CurrentLocationRetrieved.activeLocationRetrieval; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary activeLocationRetrieval
 * @constant
 * @type {number}
 */
export
const activeLocationRetrieval: CurrentLocationRetrieved = CurrentLocationRetrieved.activeLocationRetrieval; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_CurrentLocationRetrieved: $.ASN1Decoder<CurrentLocationRetrieved> = $._decodeEnumerated;

export
const _encode_CurrentLocationRetrieved: $.ASN1Encoder<CurrentLocationRetrieved> = $._encodeEnumerated;

/* eslint-enable */
