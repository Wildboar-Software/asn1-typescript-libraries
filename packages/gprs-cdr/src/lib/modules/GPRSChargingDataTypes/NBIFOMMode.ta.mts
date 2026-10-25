/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary NBIFOMMode
 * @description
 *
 * This field indicates the NBIFOM mode selected by PCRF for a multi-access
 * PDN connection, i.e. UE initiated or Network initiated as defined in TS
 * 29.212 [220].
 *
 * 3GPP TS 32.298 V20.1.0 clause 5.1.2.2.29B.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NBIFOMMode  ::=  ENUMERATED {
 *    uEINITIATED         ( 0 ),
 *    nETWORKINITIATED    ( 1 ) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_NBIFOMMode {
    uEINITIATED = 0,
    nETWORKINITIATED = 1,
}

/**
 * @summary NBIFOMMode
 * @description
 *
 * This field indicates the NBIFOM mode selected by PCRF for a multi-access
 * PDN connection, i.e. UE initiated or Network initiated as defined in TS
 * 29.212 [220].
 *
 * 3GPP TS 32.298 V20.1.0 clause 5.1.2.2.29B.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NBIFOMMode  ::=  ENUMERATED {
 *    uEINITIATED         ( 0 ),
 *    nETWORKINITIATED    ( 1 ) }
 * ```
 * 
 * @enum {number}
 */
export
type NBIFOMMode = _enum_for_NBIFOMMode;

/**
 * @summary NBIFOMMode
 * @description
 *
 * This field indicates the NBIFOM mode selected by PCRF for a multi-access
 * PDN connection, i.e. UE initiated or Network initiated as defined in TS
 * 29.212 [220].
 *
 * 3GPP TS 32.298 V20.1.0 clause 5.1.2.2.29B.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NBIFOMMode  ::=  ENUMERATED {
 *    uEINITIATED         ( 0 ),
 *    nETWORKINITIATED    ( 1 ) }
 * ```
 * 
 * @enum {number}
 */
export
const NBIFOMMode: typeof _enum_for_NBIFOMMode = _enum_for_NBIFOMMode;

/**
 * @summary NBIFOMMode_uEINITIATED
 * @constant
 * @type {number}
 */
export
const NBIFOMMode_uEINITIATED: _enum_for_NBIFOMMode.uEINITIATED = NBIFOMMode.uEINITIATED; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary uEINITIATED
 * @constant
 * @type {number}
 */
export
const uEINITIATED: _enum_for_NBIFOMMode.uEINITIATED = NBIFOMMode.uEINITIATED; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NBIFOMMode_nETWORKINITIATED
 * @constant
 * @type {number}
 */
export
const NBIFOMMode_nETWORKINITIATED: _enum_for_NBIFOMMode.nETWORKINITIATED = NBIFOMMode.nETWORKINITIATED; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary nETWORKINITIATED
 * @constant
 * @type {number}
 */
export
const nETWORKINITIATED: _enum_for_NBIFOMMode.nETWORKINITIATED = NBIFOMMode.nETWORKINITIATED; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_NBIFOMMode: $.ASN1Decoder<NBIFOMMode> = $._decodeEnumerated;

export
const _encode_NBIFOMMode: $.ASN1Encoder<NBIFOMMode> = $._encodeEnumerated;

/* eslint-enable */
