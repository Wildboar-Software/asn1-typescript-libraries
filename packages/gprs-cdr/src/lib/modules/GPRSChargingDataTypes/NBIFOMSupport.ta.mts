/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary NBIFOMSupport
 * @description
 *
 * This field indicates that NBIFOM was requested by the UE, supported and
 * accepted by the network for the IP-CAN session or if NBIFOM is not
 * supported for the IP-CAN session as defined in TS 29.212 [220].
 *
 * 3GPP TS 32.298 V20.1.0 clause 5.1.2.2.29C.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NBIFOMSupport  ::=  ENUMERATED {
 *    nBIFOMNotSupported    ( 0 ),
 *    nBIFOMSupported       ( 1 ) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_NBIFOMSupport {
    nBIFOMNotSupported = 0,
    nBIFOMSupported = 1,
}

/**
 * @summary NBIFOMSupport
 * @description
 *
 * This field indicates that NBIFOM was requested by the UE, supported and
 * accepted by the network for the IP-CAN session or if NBIFOM is not
 * supported for the IP-CAN session as defined in TS 29.212 [220].
 *
 * 3GPP TS 32.298 V20.1.0 clause 5.1.2.2.29C.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NBIFOMSupport  ::=  ENUMERATED {
 *    nBIFOMNotSupported    ( 0 ),
 *    nBIFOMSupported       ( 1 ) }
 * ```
 * 
 * @enum {number}
 */
export
type NBIFOMSupport = _enum_for_NBIFOMSupport;

/**
 * @summary NBIFOMSupport
 * @description
 *
 * This field indicates that NBIFOM was requested by the UE, supported and
 * accepted by the network for the IP-CAN session or if NBIFOM is not
 * supported for the IP-CAN session as defined in TS 29.212 [220].
 *
 * 3GPP TS 32.298 V20.1.0 clause 5.1.2.2.29C.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NBIFOMSupport  ::=  ENUMERATED {
 *    nBIFOMNotSupported    ( 0 ),
 *    nBIFOMSupported       ( 1 ) }
 * ```
 * 
 * @enum {number}
 */
export
const NBIFOMSupport = _enum_for_NBIFOMSupport;

/**
 * @summary NBIFOMSupport_nBIFOMNotSupported
 * @constant
 * @type {number}
 */
export
const NBIFOMSupport_nBIFOMNotSupported: NBIFOMSupport = NBIFOMSupport.nBIFOMNotSupported; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary nBIFOMNotSupported
 * @constant
 * @type {number}
 */
export
const nBIFOMNotSupported: NBIFOMSupport = NBIFOMSupport.nBIFOMNotSupported; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NBIFOMSupport_nBIFOMSupported
 * @constant
 * @type {number}
 */
export
const NBIFOMSupport_nBIFOMSupported: NBIFOMSupport = NBIFOMSupport.nBIFOMSupported; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary nBIFOMSupported
 * @constant
 * @type {number}
 */
export
const nBIFOMSupported: NBIFOMSupport = NBIFOMSupport.nBIFOMSupported; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_NBIFOMSupport: $.ASN1Decoder<NBIFOMSupport> = $._decodeEnumerated;

export
const _encode_NBIFOMSupport: $.ASN1Encoder<NBIFOMSupport> = $._encodeEnumerated;

/* eslint-enable */
