/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ScreeningIndicator
 * @description
 * 
 * Result of screening a party number.
 *
 * `userProvidedNotScreened`: a remote user terminal supplied the number, and a
 * network that is not the local public or local private network screened it.
 * `userProvidedVerifiedAndPassed`: a remote user terminal or a remote private
 * network supplied the number, and the local public or local private network
 * screened it. `userProvidedVerifiedAndFailed` is reserved and not used.
 * `networkProvided`: the local public or local private network supplied the
 * number.
 *
 * ITU-T Rec. Q.932 (05/1998) Annex C; ITU-T Rec. Q.932 (1998) Amd.1 (06/2000)
 * Table C-1 bis.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ScreeningIndicator  ::=  ENUMERATED {
 *   userProvidedNotScreened(0),
 *   --  number was provided by a remote user terminal
 *   --  equipment, and has been screened by a
 *   --  network that is not the local public or local
 *   --  private network.
 *   userProvidedVerifiedAndPassed(1),
 *   --  number was provided by a remote user terminal
 *   --  equipment (or by a remote private network), and
 *   --  has been screened by the local public or local
 *   --  private network.
 *   userProvidedVerifiedAndFailed(2),
 *   --  not used, value reserved
 *   networkProvided(3)}
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_ScreeningIndicator {
    userProvidedNotScreened = 0,
    userProvidedVerifiedAndPassed = 1,
    userProvidedVerifiedAndFailed = 2,
    networkProvided = 3,
}

/**
 * @summary ScreeningIndicator
 * @description
 * 
 * Result of screening a party number.
 *
 * `userProvidedNotScreened`: a remote user terminal supplied the number, and a
 * network that is not the local public or local private network screened it.
 * `userProvidedVerifiedAndPassed`: a remote user terminal or a remote private
 * network supplied the number, and the local public or local private network
 * screened it. `userProvidedVerifiedAndFailed` is reserved and not used.
 * `networkProvided`: the local public or local private network supplied the
 * number.
 *
 * ITU-T Rec. Q.932 (05/1998) Annex C; ITU-T Rec. Q.932 (1998) Amd.1 (06/2000)
 * Table C-1 bis.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ScreeningIndicator  ::=  ENUMERATED {
 *   userProvidedNotScreened(0),
 *   --  number was provided by a remote user terminal
 *   --  equipment, and has been screened by a
 *   --  network that is not the local public or local
 *   --  private network.
 *   userProvidedVerifiedAndPassed(1),
 *   --  number was provided by a remote user terminal
 *   --  equipment (or by a remote private network), and
 *   --  has been screened by the local public or local
 *   --  private network.
 *   userProvidedVerifiedAndFailed(2),
 *   --  not used, value reserved
 *   networkProvided(3)}
 * ```
 * 
 * @enum {number}
 */
export
type ScreeningIndicator = _enum_for_ScreeningIndicator;

/**
 * @summary ScreeningIndicator
 * @description
 * 
 * Result of screening a party number.
 *
 * `userProvidedNotScreened`: a remote user terminal supplied the number, and a
 * network that is not the local public or local private network screened it.
 * `userProvidedVerifiedAndPassed`: a remote user terminal or a remote private
 * network supplied the number, and the local public or local private network
 * screened it. `userProvidedVerifiedAndFailed` is reserved and not used.
 * `networkProvided`: the local public or local private network supplied the
 * number.
 *
 * ITU-T Rec. Q.932 (05/1998) Annex C; ITU-T Rec. Q.932 (1998) Amd.1 (06/2000)
 * Table C-1 bis.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ScreeningIndicator  ::=  ENUMERATED {
 *   userProvidedNotScreened(0),
 *   --  number was provided by a remote user terminal
 *   --  equipment, and has been screened by a
 *   --  network that is not the local public or local
 *   --  private network.
 *   userProvidedVerifiedAndPassed(1),
 *   --  number was provided by a remote user terminal
 *   --  equipment (or by a remote private network), and
 *   --  has been screened by the local public or local
 *   --  private network.
 *   userProvidedVerifiedAndFailed(2),
 *   --  not used, value reserved
 *   networkProvided(3)}
 * ```
 * 
 * @enum {number}
 */
export
const ScreeningIndicator = _enum_for_ScreeningIndicator;

/**
 * @summary ScreeningIndicator_userProvidedNotScreened
 * @description
 * 
 * A remote user terminal supplied the number. A network that is not the local
 * public or local private network screened it. ITU-T Rec. Q.932 (05/1998) Annex
 * C.
 * 
 * @constant
 * @type {number}
 */
export
const ScreeningIndicator_userProvidedNotScreened = ScreeningIndicator.userProvidedNotScreened; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary userProvidedNotScreened
 * @description
 * 
 * A remote user terminal supplied the number. A network that is not the local
 * public or local private network screened it. ITU-T Rec. Q.932 (05/1998) Annex
 * C.
 * 
 * @constant
 * @type {number}
 */
export
const userProvidedNotScreened = ScreeningIndicator.userProvidedNotScreened; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ScreeningIndicator_userProvidedVerifiedAndPassed
 * @description
 * 
 * A remote user terminal, or a remote private network, supplied the number. The
 * local public or local private network screened it. ITU-T Rec. Q.932 (05/1998)
 * Annex C.
 * 
 * @constant
 * @type {number}
 */
export
const ScreeningIndicator_userProvidedVerifiedAndPassed = ScreeningIndicator.userProvidedVerifiedAndPassed; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary userProvidedVerifiedAndPassed
 * @description
 * 
 * A remote user terminal, or a remote private network, supplied the number. The
 * local public or local private network screened it. ITU-T Rec. Q.932 (05/1998)
 * Annex C.
 * 
 * @constant
 * @type {number}
 */
export
const userProvidedVerifiedAndPassed = ScreeningIndicator.userProvidedVerifiedAndPassed; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ScreeningIndicator_userProvidedVerifiedAndFailed
 * @description
 * 
 * Reserved. Not used. ITU-T Rec. Q.932 (05/1998) Annex C; ITU-T Rec. Q.932
 * (1998) Amd.1 (06/2000) Table C-1 bis.
 * 
 * @constant
 * @type {number}
 */
export
const ScreeningIndicator_userProvidedVerifiedAndFailed = ScreeningIndicator.userProvidedVerifiedAndFailed; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary userProvidedVerifiedAndFailed
 * @description
 * 
 * Reserved. Not used. ITU-T Rec. Q.932 (05/1998) Annex C; ITU-T Rec. Q.932
 * (1998) Amd.1 (06/2000) Table C-1 bis.
 * 
 * @constant
 * @type {number}
 */
export
const userProvidedVerifiedAndFailed = ScreeningIndicator.userProvidedVerifiedAndFailed; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ScreeningIndicator_networkProvided
 * @description
 * 
 * The local public or local private network supplied the number. ITU-T Rec.
 * Q.932 (05/1998) Annex C.
 * 
 * @constant
 * @type {number}
 */
export
const ScreeningIndicator_networkProvided = ScreeningIndicator.networkProvided; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary networkProvided
 * @description
 * 
 * The local public or local private network supplied the number. ITU-T Rec.
 * Q.932 (05/1998) Annex C.
 * 
 * @constant
 * @type {number}
 */
export
const networkProvided = ScreeningIndicator.networkProvided; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_ScreeningIndicator: $.ASN1Decoder<ScreeningIndicator> = $._decodeEnumerated;
export const _encode_ScreeningIndicator: $.ASN1Encoder<ScreeningIndicator> = $._encodeEnumerated;


/* eslint-enable */
