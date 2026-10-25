/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary ServiceOption
 * @description
 *
 * Kind of PUM registration (ECMA-282 §6.1, §6.3.1). InCall, incoming calls, is
 * mandatory. OutCall, outgoing calls, and AllCall, both, are optional. If
 * `serviceOption` is omitted on `pumRegistr` or `pumDe-reg`, the Home PINX
 * assumes InCall (§6.5.3.1, §6.6.2.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-282/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ServiceOption  ::=  ENUMERATED {
 *     inCallRegistration(0),
 *     outCallRegistration(1),
 *     allCallRegistration(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_ServiceOption {
    inCallRegistration = 0,
    outCallRegistration = 1,
    allCallRegistration = 2,
}

/**
 * @summary ServiceOption
 * @description
 *
 * Kind of PUM registration (ECMA-282 §6.1, §6.3.1). InCall, incoming calls, is
 * mandatory. OutCall, outgoing calls, and AllCall, both, are optional. If
 * `serviceOption` is omitted on `pumRegistr` or `pumDe-reg`, the Home PINX
 * assumes InCall (§6.5.3.1, §6.6.2.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-282/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ServiceOption  ::=  ENUMERATED {
 *     inCallRegistration(0),
 *     outCallRegistration(1),
 *     allCallRegistration(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type ServiceOption = _enum_for_ServiceOption;

/**
 * @summary ServiceOption
 * @description
 *
 * Kind of PUM registration (ECMA-282 §6.1, §6.3.1). InCall, incoming calls, is
 * mandatory. OutCall, outgoing calls, and AllCall, both, are optional. If
 * `serviceOption` is omitted on `pumRegistr` or `pumDe-reg`, the Home PINX
 * assumes InCall (§6.5.3.1, §6.6.2.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-282/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ServiceOption  ::=  ENUMERATED {
 *     inCallRegistration(0),
 *     outCallRegistration(1),
 *     allCallRegistration(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const ServiceOption = _enum_for_ServiceOption;

/**
 * @summary ServiceOption_inCallRegistration
 * @description
 *
 * Incoming-call registration. Mandatory (ECMA-282 §6.1). Also the assumption
 * when `serviceOption` is omitted on registration or de-registration (§6.5.3.1,
 * §6.6.2.1). `hostingAddr` is omitted on an InCall `pumDe-reg` (§6.3.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-282/
 * @constant
 * @type {number}
 */
export
const ServiceOption_inCallRegistration = ServiceOption.inCallRegistration; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary inCallRegistration
 * @description Alias of {@link ServiceOption_inCallRegistration}.
 * @constant
 * @type {number}
 */
export
const inCallRegistration = ServiceOption.inCallRegistration; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ServiceOption_outCallRegistration
 * @description
 *
 * Outgoing-call registration. Optional (ECMA-282 §6.1). On `pumDe-reg`,
 * omitting `hostingAddr` clears every OutCall session of this PUM user
 * (§6.6.2.1). The Home PINX may leave existing OutCall sessions in place when a
 * new registration arrives (§6.5.3.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-282/
 * @constant
 * @type {number}
 */
export
const ServiceOption_outCallRegistration = ServiceOption.outCallRegistration; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary outCallRegistration
 * @description Alias of {@link ServiceOption_outCallRegistration}.
 * @constant
 * @type {number}
 */
export
const outCallRegistration = ServiceOption.outCallRegistration; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ServiceOption_allCallRegistration
 * @description
 *
 * Incoming and outgoing registration. Optional (ECMA-282 §6.1). A new AllCall
 * registration causes `pumDelReg` of the previous InCall or AllCall session
 * (§6.5.3.1). On `pumDe-reg`, omitting `hostingAddr` clears the AllCall session
 * and every OutCall session (§6.6.2.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-282/
 * @constant
 * @type {number}
 */
export
const ServiceOption_allCallRegistration = ServiceOption.allCallRegistration; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary allCallRegistration
 * @description Alias of {@link ServiceOption_allCallRegistration}.
 * @constant
 * @type {number}
 */
export
const allCallRegistration = ServiceOption.allCallRegistration; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_ServiceOption: $.ASN1Decoder<ServiceOption> = $._decodeEnumerated;

export
const _encode_ServiceOption: $.ASN1Encoder<ServiceOption> = $._encodeEnumerated;

/* eslint-enable */
