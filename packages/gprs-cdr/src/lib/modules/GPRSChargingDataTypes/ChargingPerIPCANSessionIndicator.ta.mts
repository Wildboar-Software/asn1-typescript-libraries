/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ChargingPerIPCANSessionIndicator
 * @description
 * 
 * Whether charging per IP-CAN session is active in the P-GW (tables
 * 6.1.3.1 and 6.3.1.2.1). If the field is absent, charging per IP-CAN
 * session is not active. When it is active, one PGW-CDR covers the
 * session: List of Traffic Data Volumes for every bearer, and List of
 * Service Data for FBC. chargingID then holds the Charging Id of the EPS
 * default bearer and is the same as the PDN connection Charging Id.
 * 
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ChargingPerIPCANSessionIndicator  ::=  ENUMERATED {
 *    inactive    ( 0 ),
 *    active      ( 1 ) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_ChargingPerIPCANSessionIndicator {
    inactive = 0,
    active = 1,
}

/**
 * @summary ChargingPerIPCANSessionIndicator
 * @description
 * 
 * Whether charging per IP-CAN session is active in the P-GW (tables
 * 6.1.3.1 and 6.3.1.2.1). If the field is absent, charging per IP-CAN
 * session is not active. When it is active, one PGW-CDR covers the
 * session: List of Traffic Data Volumes for every bearer, and List of
 * Service Data for FBC. chargingID then holds the Charging Id of the EPS
 * default bearer and is the same as the PDN connection Charging Id.
 * 
 * 3GPP TS 32.251 V19.0.0.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ChargingPerIPCANSessionIndicator  ::=  ENUMERATED {
 *    inactive    ( 0 ),
 *    active      ( 1 ) }
 * ```
 * 
 * @enum {number}
 */
export
type ChargingPerIPCANSessionIndicator = _enum_for_ChargingPerIPCANSessionIndicator;

/**
 * @summary ChargingPerIPCANSessionIndicator
 * @description
 * 
 * Whether charging per IP-CAN session is active in the P-GW (tables
 * 6.1.3.1 and 6.3.1.2.1). If the field is absent, charging per IP-CAN
 * session is not active. When it is active, one PGW-CDR covers the
 * session: List of Traffic Data Volumes for every bearer, and List of
 * Service Data for FBC. chargingID then holds the Charging Id of the EPS
 * default bearer and is the same as the PDN connection Charging Id.
 * 
 * 3GPP TS 32.251 V19.0.0.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ChargingPerIPCANSessionIndicator  ::=  ENUMERATED {
 *    inactive    ( 0 ),
 *    active      ( 1 ) }
 * ```
 * 
 * @enum {number}
 */
export
const ChargingPerIPCANSessionIndicator = _enum_for_ChargingPerIPCANSessionIndicator;

/**
 * @summary ChargingPerIPCANSessionIndicator_inactive
 * @constant
 * @type {number}
 */
export
const ChargingPerIPCANSessionIndicator_inactive = ChargingPerIPCANSessionIndicator.inactive satisfies ChargingPerIPCANSessionIndicator; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary inactive
 * @constant
 * @type {number}
 */
export
const inactive = ChargingPerIPCANSessionIndicator.inactive satisfies ChargingPerIPCANSessionIndicator; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ChargingPerIPCANSessionIndicator_active
 * @constant
 * @type {number}
 */
export
const ChargingPerIPCANSessionIndicator_active = ChargingPerIPCANSessionIndicator.active satisfies ChargingPerIPCANSessionIndicator; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary active
 * @constant
 * @type {number}
 */
export
const active = ChargingPerIPCANSessionIndicator.active satisfies ChargingPerIPCANSessionIndicator; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_ChargingPerIPCANSessionIndicator: $.ASN1Decoder<ChargingPerIPCANSessionIndicator> = $._decodeEnumerated;

export
const _encode_ChargingPerIPCANSessionIndicator: $.ASN1Encoder<ChargingPerIPCANSessionIndicator> = $._encodeEnumerated;

/* eslint-enable */
