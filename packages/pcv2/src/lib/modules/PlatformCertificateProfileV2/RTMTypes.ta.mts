/* eslint-disable */
import {
    type BIT_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RTMTypes
 * @description
 *
 * Which kinds of root of trust for measurement the platform has. The value does
 * not say which RTM is used when the platform boots. Carried by `rtmTrait`.
 * This profile gives only the general meaning of each bit; a platform profile
 * defines the platform-specific meaning.
 *
 * TCG Platform Certificate Profile, Version 2.1, §4.2.15.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RTMTypes  ::=  BIT STRING {
 *     static (0),
 *     dynamic (1),
 *     nonHost (2),
 *     virtual (3),
 *     hardwareStatic (4),
 *     bMC (5)
 * }
 * ```
 */
export
type RTMTypes = BIT_STRING;

/**
 * @summary RTMTypes_static_
 * @description
 *
 * The platform implements the RTM as part of the early platform firmware (a
 * static RTM, SRTM). The profile says a platform profile defines the
 * platform-specific meaning of this bit. This module spells the bit `static_`
 * because `static` is reserved in the language.
 *
 * TCG Platform Certificate Profile, Version 2.1, §4.2.15.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
 *
 * @constant
 */
export
const RTMTypes_static_: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary static_
 * @description
 *
 * The platform implements the RTM as part of the early platform firmware (a
 * static RTM, SRTM). The profile says a platform profile defines the
 * platform-specific meaning of this bit. This module spells the bit `static_`
 * because `static` is reserved in the language.
 *
 * TCG Platform Certificate Profile, Version 2.1, §4.2.15.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
 *
 * @constant
 */
export
const static_: number = RTMTypes_static_; /* SHORT_NAMED_BIT */

/**
 * @summary RTMTypes_dynamic
 * @description
 *
 * The platform implements the RTM after platform firmware has executed (a
 * dynamic RTM, DRTM). A platform profile defines the platform-specific meaning.
 *
 * TCG Platform Certificate Profile, Version 2.1, §4.2.15.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
 *
 * @constant
 */
export
const RTMTypes_dynamic: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary dynamic
 * @description
 *
 * The platform implements the RTM after platform firmware has executed (a
 * dynamic RTM, DRTM). A platform profile defines the platform-specific meaning.
 *
 * TCG Platform Certificate Profile, Version 2.1, §4.2.15.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
 *
 * @constant
 */
export
const dynamic: number = RTMTypes_dynamic; /* SHORT_NAMED_BIT */

/**
 * @summary RTMTypes_nonHost
 * @description
 *
 * The platform implements the RTM outside the CPU or SoC, such as in an
 * independent platform controller. A platform profile defines the
 * platform-specific meaning.
 *
 * TCG Platform Certificate Profile, Version 2.1, §4.2.15.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
 *
 * @constant
 */
export
const RTMTypes_nonHost: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary nonHost
 * @description
 *
 * The platform implements the RTM outside the CPU or SoC, such as in an
 * independent platform controller. A platform profile defines the
 * platform-specific meaning.
 *
 * TCG Platform Certificate Profile, Version 2.1, §4.2.15.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
 *
 * @constant
 */
export
const nonHost: number = RTMTypes_nonHost; /* SHORT_NAMED_BIT */

/**
 * @summary RTMTypes_virtual
 * @description
 *
 * The platform implements a virtualized RTM, for example in a virtual machine.
 * A platform profile defines the platform-specific meaning.
 *
 * TCG Platform Certificate Profile, Version 2.1, §4.2.15.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
 *
 * @constant
 */
export
const RTMTypes_virtual: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary virtual
 * @description
 *
 * The platform implements a virtualized RTM, for example in a virtual machine.
 * A platform profile defines the platform-specific meaning.
 *
 * TCG Platform Certificate Profile, Version 2.1, §4.2.15.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
 *
 * @constant
 */
export
const virtual: number = RTMTypes_virtual; /* SHORT_NAMED_BIT */

/**
 * @summary RTMTypes_hardwareStatic
 * @description
 *
 * The platform implements a hardware-based RTM. A platform profile defines the
 * platform-specific meaning.
 *
 * TCG Platform Certificate Profile, Version 2.1, §4.2.15.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
 *
 * @constant
 */
export
const RTMTypes_hardwareStatic: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary hardwareStatic
 * @description
 *
 * The platform implements a hardware-based RTM. A platform profile defines the
 * platform-specific meaning.
 *
 * TCG Platform Certificate Profile, Version 2.1, §4.2.15.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
 *
 * @constant
 */
export
const hardwareStatic: number = RTMTypes_hardwareStatic; /* SHORT_NAMED_BIT */

/**
 * @summary RTMTypes_bMC
 * @description
 *
 * The platform implements the RTM in the baseboard management controller. A
 * platform profile defines the platform-specific meaning.
 *
 * TCG Platform Certificate Profile, Version 2.1, §4.2.15.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
 *
 * @constant
 */
export
const RTMTypes_bMC: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary bMC
 * @description
 *
 * The platform implements the RTM in the baseboard management controller. A
 * platform profile defines the platform-specific meaning.
 *
 * TCG Platform Certificate Profile, Version 2.1, §4.2.15.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
 *
 * @constant
 */
export
const bMC: number = RTMTypes_bMC; /* SHORT_NAMED_BIT */

export
const _decode_RTMTypes: $.ASN1Decoder<RTMTypes> = $._decodeBitString;

export
const _encode_RTMTypes: $.ASN1Encoder<RTMTypes> = $._encodeBitString;

/* eslint-enable */
