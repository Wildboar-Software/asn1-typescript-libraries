/* eslint-disable */
import {
    type ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @description
 *
 * Authentication method on authenticated SMTP. The module's comment gives
 * CRAM-MD5 and DIGEST-MD5 as examples of the hashing method. The enumeration is
 * extensible. `undefinedAuthMethod` is not defined further.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), annex D (`ASMTPAAAInformation`).
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223202/03.16.01_60/ts_10223202v031601p.pdf
 */
export
enum _enum_for_AAAauthMethod {
    /**
     * The method is not one of the named values. The module does not define
     * this item further.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), annex D (`AAAauthMethod`).
     */
    undefinedAuthMethod = 1,
    /**
     * CRAM-MD5, one of the hashing methods named in the module comment on
     * `authMethod`.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), annex D (`ASMTPAAAInformation`).
     */
    cramMD5 = 2,
    /**
     * DIGEST-MD5, one of the hashing methods named in the module comment on
     * `authMethod`.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), annex D (`ASMTPAAAInformation`).
     */
    digestMD5 = 3,
}

/**
 * @summary AAAauthMethod
 * @description
 *
 * Authentication method on authenticated SMTP. The module's comment gives
 * CRAM-MD5 and DIGEST-MD5 as examples of the hashing method. The enumeration is
 * extensible. `undefinedAuthMethod` is not defined further.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), annex D (`ASMTPAAAInformation`).
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223202/03.16.01_60/ts_10223202v031601p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AAAauthMethod  ::=  ENUMERATED
 * {
 *     undefinedAuthMethod(1),
 *     cramMD5(2),
 *     digestMD5(3),
 *     ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type AAAauthMethod = _enum_for_AAAauthMethod | ENUMERATED;

/**
 * @summary AAAauthMethod_undefinedAuthMethod
 * @description
 *
 * The method is not one of the named values. The module does not define this
 * item further.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), annex D (`AAAauthMethod`).
 *
 * @constant
 * @type {number}
 */
export
const AAAauthMethod_undefinedAuthMethod: _enum_for_AAAauthMethod.undefinedAuthMethod = _enum_for_AAAauthMethod.undefinedAuthMethod; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary undefinedAuthMethod
 * @description
 *
 * The method is not one of the named values. The module does not define this
 * item further.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), annex D (`AAAauthMethod`).
 *
 * @constant
 * @type {number}
 */
export
const undefinedAuthMethod: _enum_for_AAAauthMethod.undefinedAuthMethod = AAAauthMethod_undefinedAuthMethod; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AAAauthMethod_cramMD5
 * @description
 *
 * CRAM-MD5, one of the hashing methods named in the module comment on
 * `authMethod`.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), annex D (`ASMTPAAAInformation`).
 *
 * @constant
 * @type {number}
 */
export
const AAAauthMethod_cramMD5: _enum_for_AAAauthMethod.cramMD5 = _enum_for_AAAauthMethod.cramMD5; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cramMD5
 * @description
 *
 * CRAM-MD5, one of the hashing methods named in the module comment on
 * `authMethod`.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), annex D (`ASMTPAAAInformation`).
 *
 * @constant
 * @type {number}
 */
export
const cramMD5: _enum_for_AAAauthMethod.cramMD5 = AAAauthMethod_cramMD5; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AAAauthMethod_digestMD5
 * @description
 *
 * DIGEST-MD5, one of the hashing methods named in the module comment on
 * `authMethod`.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), annex D (`ASMTPAAAInformation`).
 *
 * @constant
 * @type {number}
 */
export
const AAAauthMethod_digestMD5: _enum_for_AAAauthMethod.digestMD5 = _enum_for_AAAauthMethod.digestMD5; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary digestMD5
 * @description
 *
 * DIGEST-MD5, one of the hashing methods named in the module comment on
 * `authMethod`.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), annex D (`ASMTPAAAInformation`).
 *
 * @constant
 * @type {number}
 */
export
const digestMD5: _enum_for_AAAauthMethod.digestMD5 = AAAauthMethod_digestMD5; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_AAAauthMethod: $.ASN1Decoder<AAAauthMethod> = $._decodeEnumerated;
export const _encode_AAAauthMethod: $.ASN1Encoder<AAAauthMethod> = $._encodeEnumerated;


/* eslint-enable */
