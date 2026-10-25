/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CurrentLocationRetrieved
 * @description
 *
 * Flag on MME and SGSN location information. The only value is
 * `activeLocationRetrieval`. TS 32.278 does not define this
 * type. Whether a configuration request asks for the current
 * location or the last known location is `LocationType` on
 * `MECORecord`.
 *
 * 3GPP TS 32.278 V19.0.0 clauses 6.1.3.2 and 6.3.2.1.
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
 * Flag on MME and SGSN location information. The only value is
 * `activeLocationRetrieval`. TS 32.278 does not define this
 * type. Whether a configuration request asks for the current
 * location or the last known location is `LocationType` on
 * `MECORecord`.
 *
 * 3GPP TS 32.278 V19.0.0 clauses 6.1.3.2 and 6.3.2.1.
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
 * Flag on MME and SGSN location information. The only value is
 * `activeLocationRetrieval`. TS 32.278 does not define this
 * type. Whether a configuration request asks for the current
 * location or the last known location is `LocationType` on
 * `MECORecord`.
 *
 * 3GPP TS 32.278 V19.0.0 clauses 6.1.3.2 and 6.3.2.1.
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
const CurrentLocationRetrieved: typeof _enum_for_CurrentLocationRetrieved = _enum_for_CurrentLocationRetrieved;

/**
 * @summary CurrentLocationRetrieved_activeLocationRetrieval
 * @description
 *
 * The only enumerated value. TS 32.278 V19.0.0 does not define
 * what active location retrieval means.
 *
 * @constant
 * @type {number}
 */
export
const CurrentLocationRetrieved_activeLocationRetrieval: _enum_for_CurrentLocationRetrieved.activeLocationRetrieval = CurrentLocationRetrieved.activeLocationRetrieval; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary activeLocationRetrieval
 * @description
 *
 * See {@link CurrentLocationRetrieved_activeLocationRetrieval}.
 *
 * @constant
 * @type {number}
 */
export
const activeLocationRetrieval: _enum_for_CurrentLocationRetrieved.activeLocationRetrieval = CurrentLocationRetrieved.activeLocationRetrieval; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_CurrentLocationRetrieved: $.ASN1Decoder<CurrentLocationRetrieved> = $._decodeEnumerated;

export
const _encode_CurrentLocationRetrieved: $.ASN1Encoder<CurrentLocationRetrieved> = $._encodeEnumerated;

/* eslint-enable */
