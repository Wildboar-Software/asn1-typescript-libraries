/* eslint-disable */
import {
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary UnbindReason
 * @description
 * 
 * Why UNBIND is being invoked. Each number has a meaning when the user is the
 * initiator and a meaning when the provider is the initiator.
 * `versionNotSupported` is used only when UNBIND is the first operation after
 * BIND.
 * 
 * CCSDS 911.1-B-5, section 3.3.2.4.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UnbindReason         ::=    INTEGER
 * { end                  (0)
 * , suspend              (1)
 * , versionNotSupported (2)
 * , other                (127)
 * }
 * ```
 */
export
type UnbindReason = INTEGER;

/**
 * @summary UnbindReason_end
 * @description
 * 
 * Normal release. Invoked by the user, the user has the frames that are needed
 * or expected; the provider may delete the service instance and release its
 * resources, and a later BIND fails even if the provision period has not
 * expired. In complete online delivery the online frame buffer is discarded.
 * Invoked by the provider, all available frames have been transferred and the
 * provider shall not re-bind for this service instance.
 * 
 * CCSDS 911.1-B-5, sections 3.3.2.4 and 3.1.9.2.13.
 * @constant
 * @type {number}
 */
export
const UnbindReason_end: UnbindReason = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary UnbindReason_end
 * @description
 * 
 * Normal release; the provider may delete the service instance (CCSDS
 * 911.1-B-5, section 3.3.2.4).
 * @constant
 * @type {number}
 */
export
const end: UnbindReason = UnbindReason_end; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary UnbindReason_suspend
 * @description
 * 
 * The association is suspended for an unspecified period and may be bound again
 * before the provision period ends. Invoked by the user, the user is suspending
 * use of this instance. Invoked by the provider, the provider is suspending
 * provision and may attempt to re-bind.
 * 
 * CCSDS 911.1-B-5, section 3.3.2.4.
 * @constant
 * @type {number}
 */
export
const UnbindReason_suspend: UnbindReason = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary UnbindReason_suspend
 * @description
 * 
 * Usage or provision is suspended and may be bound again (CCSDS 911.1-B-5,
 * section 3.3.2.4).
 * @constant
 * @type {number}
 */
export
const suspend: UnbindReason = UnbindReason_suspend; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary UnbindReason_versionNotSupported
 * @description
 * 
 * The UNBIND initiator does not support the version proposed in the BIND
 * return. Used only when UNBIND is the first operation after BIND. Invoked by
 * the user, the user rejects the provider's proposed version. Invoked by the
 * provider, the provider rejects the version the user proposed in the BIND
 * return.
 * 
 * CCSDS 911.1-B-5, sections 3.3.2.4 and 3.2.2.8.6.
 * @constant
 * @type {number}
 */
export
const UnbindReason_versionNotSupported: UnbindReason = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary UnbindReason_versionNotSupported
 * @description
 * 
 * The BIND-return version is unsupported; first operation after BIND (CCSDS
 * 911.1-B-5, section 3.3.2.4).
 * @constant
 * @type {number}
 */
export
const versionNotSupported: UnbindReason = UnbindReason_versionNotSupported; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary UnbindReason_other
 * @description
 * 
 * The reason for the release has to be found by other means.
 * 
 * CCSDS 911.1-B-5, section 3.3.2.4.
 * @constant
 * @type {number}
 */
export
const UnbindReason_other: UnbindReason = 127; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary UnbindReason_other
 * @description
 * 
 * The release reason has to be found by other means (CCSDS 911.1-B-5, section
 * 3.3.2.4).
 * @constant
 * @type {number}
 */
export
const other: UnbindReason = UnbindReason_other; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_UnbindReason: $.ASN1Decoder<UnbindReason> = $._decodeInteger;
export const _encode_UnbindReason: $.ASN1Encoder<UnbindReason> = $._encodeInteger;


/* eslint-enable */
