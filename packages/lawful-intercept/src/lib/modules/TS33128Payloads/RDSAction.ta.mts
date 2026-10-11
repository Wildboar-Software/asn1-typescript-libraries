/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RDSAction
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RDSAction  ::=  ENUMERATED
 * {
 *     reservePort(1),
 *     releasePort(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_RDSAction {
    reservePort = 1,
    releasePort = 2,
}

/**
 * @summary RDSAction
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RDSAction  ::=  ENUMERATED
 * {
 *     reservePort(1),
 *     releasePort(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type RDSAction = _enum_for_RDSAction;

/**
 * @summary RDSAction
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RDSAction  ::=  ENUMERATED
 * {
 *     reservePort(1),
 *     releasePort(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const RDSAction = _enum_for_RDSAction;

/**
 * @summary RDSAction_reservePort
 * @constant
 * @type {number}
 */
export
const RDSAction_reservePort: RDSAction = RDSAction.reservePort; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary reservePort
 * @constant
 * @type {number}
 */
export
const reservePort: RDSAction = RDSAction.reservePort; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RDSAction_releasePort
 * @constant
 * @type {number}
 */
export
const RDSAction_releasePort: RDSAction = RDSAction.releasePort; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary releasePort
 * @constant
 * @type {number}
 */
export
const releasePort: RDSAction = RDSAction.releasePort; /* SHORT_NAMED_ENUMERATED_VALUE */

export const _decode_RDSAction: $.ASN1Decoder<RDSAction> = $._decodeEnumerated;

export const _encode_RDSAction: $.ASN1Encoder<RDSAction> = $._encodeEnumerated;


/* eslint-enable */
