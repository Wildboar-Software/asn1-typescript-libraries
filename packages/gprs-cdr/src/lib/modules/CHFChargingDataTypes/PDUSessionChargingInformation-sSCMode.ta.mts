/* eslint-disable */
import {
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PDUSessionChargingInformation_sSCMode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PDUSessionChargingInformation-sSCMode ::= INTEGER {
 *    sSCMode1    ( 1 ),
 *    sSCMode2    ( 2 ),
 *    sSCMode3    ( 3 )
 * }
 * ```
 */
export
type PDUSessionChargingInformation_sSCMode = INTEGER;

/**
 * @summary PDUSessionChargingInformation_sSCMode_sSCMode1
 * @constant
 * @type {number}
 */
export
const PDUSessionChargingInformation_sSCMode_sSCMode1 = 1 satisfies PDUSessionChargingInformation_sSCMode; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PDUSessionChargingInformation_sSCMode_sSCMode1
 * @constant
 * @type {number}
 */
export
const sSCMode1 = PDUSessionChargingInformation_sSCMode_sSCMode1; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary PDUSessionChargingInformation_sSCMode_sSCMode2
 * @constant
 * @type {number}
 */
export
const PDUSessionChargingInformation_sSCMode_sSCMode2 = 2 satisfies PDUSessionChargingInformation_sSCMode; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PDUSessionChargingInformation_sSCMode_sSCMode2
 * @constant
 * @type {number}
 */
export
const sSCMode2 = PDUSessionChargingInformation_sSCMode_sSCMode2; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary PDUSessionChargingInformation_sSCMode_sSCMode3
 * @constant
 * @type {number}
 */
export
const PDUSessionChargingInformation_sSCMode_sSCMode3 = 3 satisfies PDUSessionChargingInformation_sSCMode; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PDUSessionChargingInformation_sSCMode_sSCMode3
 * @constant
 * @type {number}
 */
export
const sSCMode3 = PDUSessionChargingInformation_sSCMode_sSCMode3; /* SHORT_NAMED_INTEGER_VALUE */

export
const _decode_PDUSessionChargingInformation_sSCMode: $.ASN1Decoder<PDUSessionChargingInformation_sSCMode> = $._decodeInteger;

export
const _encode_PDUSessionChargingInformation_sSCMode: $.ASN1Encoder<PDUSessionChargingInformation_sSCMode> = $._encodeInteger;

/* eslint-enable */
