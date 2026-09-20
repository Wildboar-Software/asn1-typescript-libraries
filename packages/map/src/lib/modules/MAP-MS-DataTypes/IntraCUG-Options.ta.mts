/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary IntraCUG_Options
 * @description
 *
 * Whether the subscriber may originate or receive calls within the CUG: no
 * restrictions, incoming barred, or outgoing barred. (3GPP TS 29.002 V19.1.0
 * clauses 7.6.3.28 and 17.7.1)
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IntraCUG-Options  ::=  ENUMERATED {
 *     noCUG-Restrictions  (0),
 *     cugIC-CallBarred  (1),
 *     cugOG-CallBarred  (2)}
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_IntraCUG_Options {
    noCUG_Restrictions = 0,
    cugIC_CallBarred = 1,
    cugOG_CallBarred = 2,
}

/**
 * @summary IntraCUG_Options
 * @description
 *
 * Whether the subscriber may originate or receive calls within the CUG: no
 * restrictions, incoming barred, or outgoing barred. (3GPP TS 29.002 V19.1.0
 * clauses 7.6.3.28 and 17.7.1)
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IntraCUG-Options  ::=  ENUMERATED {
 *     noCUG-Restrictions  (0),
 *     cugIC-CallBarred  (1),
 *     cugOG-CallBarred  (2)}
 * ```
 * 
 * @enum {number}
 */
export
type IntraCUG_Options = _enum_for_IntraCUG_Options;

/**
 * @summary IntraCUG_Options
 * @description
 *
 * Whether the subscriber may originate or receive calls within the CUG: no
 * restrictions, incoming barred, or outgoing barred. (3GPP TS 29.002 V19.1.0
 * clauses 7.6.3.28 and 17.7.1)
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IntraCUG-Options  ::=  ENUMERATED {
 *     noCUG-Restrictions  (0),
 *     cugIC-CallBarred  (1),
 *     cugOG-CallBarred  (2)}
 * ```
 * 
 * @enum {number}
 */
export
const IntraCUG_Options = _enum_for_IntraCUG_Options;

/**
 * @summary IntraCUG_Options_noCUG_Restrictions
 * @description
 *
 * No CUG restrictions. (3GPP TS 29.002 V19.1.0 clause 7.6.3.28)
 *
 * @constant
 * @type {number}
 */
export
const IntraCUG_Options_noCUG_Restrictions: IntraCUG_Options = IntraCUG_Options.noCUG_Restrictions; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary noCUG_Restrictions
 * @description
 *
 * No CUG restrictions. (3GPP TS 29.002 V19.1.0 clause 7.6.3.28)
 *
 * @constant
 * @type {number}
 */
export
const noCUG_Restrictions: IntraCUG_Options = IntraCUG_Options.noCUG_Restrictions; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IntraCUG_Options_cugIC_CallBarred
 * @description
 *
 * CUG incoming calls barred. (3GPP TS 29.002 V19.1.0 clause 7.6.3.28)
 *
 * @constant
 * @type {number}
 */
export
const IntraCUG_Options_cugIC_CallBarred: IntraCUG_Options = IntraCUG_Options.cugIC_CallBarred; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cugIC_CallBarred
 * @description
 *
 * CUG incoming calls barred. (3GPP TS 29.002 V19.1.0 clause 7.6.3.28)
 *
 * @constant
 * @type {number}
 */
export
const cugIC_CallBarred: IntraCUG_Options = IntraCUG_Options.cugIC_CallBarred; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IntraCUG_Options_cugOG_CallBarred
 * @description
 *
 * CUG outgoing calls barred. (3GPP TS 29.002 V19.1.0 clause 7.6.3.28)
 *
 * @constant
 * @type {number}
 */
export
const IntraCUG_Options_cugOG_CallBarred: IntraCUG_Options = IntraCUG_Options.cugOG_CallBarred; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cugOG_CallBarred
 * @description
 *
 * CUG outgoing calls barred. (3GPP TS 29.002 V19.1.0 clause 7.6.3.28)
 *
 * @constant
 * @type {number}
 */
export
const cugOG_CallBarred: IntraCUG_Options = IntraCUG_Options.cugOG_CallBarred; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Decodes an ASN.1 element into a(n) IntraCUG_Options
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_IntraCUG_Options = $._decodeEnumerated;

/**
 * @summary Encodes a(n) IntraCUG_Options into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IntraCUG_Options, encoded as an ASN.1 Element.
 */
export const _encode_IntraCUG_Options = $._encodeEnumerated;


/* eslint-enable */
