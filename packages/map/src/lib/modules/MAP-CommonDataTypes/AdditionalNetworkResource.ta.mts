/* eslint-disable */
import {
    type ASN1Element as _Element,
    type ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_AdditionalNetworkResource {
    sgsn = 0,
    ggsn = 1,
    gmlc = 2,
    gsmSCF = 3,
    nplr = 4,
    auc = 5,
    ue = 6,
    mme = 7,
}

/**
 * @summary AdditionalNetworkResource
 * @description
 *
 * Further network-resource class: SGSN, GGSN, GMLC, gsmSCF, NPLR, AuC. The
 * ASN.1 also defines `ue` (6) and `mme` (7) after the extension marker. If an
 * unknown value is received it shall be ignored.
 *
 * (3GPP TS 29.002 V19.1.0 clauses 17.7.8 and 7.6.10.4).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AdditionalNetworkResource  ::=  ENUMERATED {
 *     sgsn (0),
 *     ggsn (1),
 *     gmlc (2),
 *     gsmSCF (3),
 *     nplr (4),
 *     auc (5),
 *     ... ,
 *     ue (6),
 *     mme (7)}
 * ```
 * 
 * @enum {number}
 */
export
type AdditionalNetworkResource = _enum_for_AdditionalNetworkResource | ENUMERATED;

/**
 * @summary AdditionalNetworkResource_sgsn
 * @description
 *
 * SGSN (value 0). (3GPP TS 29.002 V19.1.0 clause 7.6.10.4).
 *
 * @constant
 * @type {number}
 */
export
const AdditionalNetworkResource_sgsn = _enum_for_AdditionalNetworkResource.sgsn satisfies AdditionalNetworkResource; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sgsn
 * @description
 *
 * SGSN (value 0). (3GPP TS 29.002 V19.1.0 clause 7.6.10.4).
 *
 * @constant
 * @type {number}
 */
export
const sgsn = AdditionalNetworkResource_sgsn satisfies AdditionalNetworkResource; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AdditionalNetworkResource_ggsn
 * @description
 *
 * GGSN (value 1). (3GPP TS 29.002 V19.1.0 clause 7.6.10.4).
 *
 * @constant
 * @type {number}
 */
export
const AdditionalNetworkResource_ggsn = _enum_for_AdditionalNetworkResource.ggsn satisfies AdditionalNetworkResource; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary ggsn
 * @description
 *
 * GGSN (value 1). (3GPP TS 29.002 V19.1.0 clause 7.6.10.4).
 *
 * @constant
 * @type {number}
 */
export
const ggsn = AdditionalNetworkResource_ggsn satisfies AdditionalNetworkResource; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AdditionalNetworkResource_gmlc
 * @description
 *
 * GMLC (value 2). (3GPP TS 29.002 V19.1.0 clause 7.6.10.4).
 *
 * @constant
 * @type {number}
 */
export
const AdditionalNetworkResource_gmlc = _enum_for_AdditionalNetworkResource.gmlc satisfies AdditionalNetworkResource; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary gmlc
 * @description
 *
 * GMLC (value 2). (3GPP TS 29.002 V19.1.0 clause 7.6.10.4).
 *
 * @constant
 * @type {number}
 */
export
const gmlc = AdditionalNetworkResource_gmlc satisfies AdditionalNetworkResource; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AdditionalNetworkResource_gsmSCF
 * @description
 *
 * gsmSCF (value 3). (3GPP TS 29.002 V19.1.0 clause 7.6.10.4).
 *
 * @constant
 * @type {number}
 */
export
const AdditionalNetworkResource_gsmSCF = _enum_for_AdditionalNetworkResource.gsmSCF satisfies AdditionalNetworkResource; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary gsmSCF
 * @description
 *
 * gsmSCF (value 3). (3GPP TS 29.002 V19.1.0 clause 7.6.10.4).
 *
 * @constant
 * @type {number}
 */
export
const gsmSCF = AdditionalNetworkResource_gsmSCF satisfies AdditionalNetworkResource; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AdditionalNetworkResource_nplr
 * @description
 *
 * NPLR (value 4). (3GPP TS 29.002 V19.1.0 clause 7.6.10.4).
 *
 * @constant
 * @type {number}
 */
export
const AdditionalNetworkResource_nplr = _enum_for_AdditionalNetworkResource.nplr satisfies AdditionalNetworkResource; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary nplr
 * @description
 *
 * NPLR (value 4). (3GPP TS 29.002 V19.1.0 clause 7.6.10.4).
 *
 * @constant
 * @type {number}
 */
export
const nplr = AdditionalNetworkResource_nplr satisfies AdditionalNetworkResource; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AdditionalNetworkResource_auc
 * @description
 *
 * AuC (value 5). (3GPP TS 29.002 V19.1.0 clause 7.6.10.4).
 *
 * @constant
 * @type {number}
 */
export
const AdditionalNetworkResource_auc = _enum_for_AdditionalNetworkResource.auc satisfies AdditionalNetworkResource; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary auc
 * @description
 *
 * AuC (value 5). (3GPP TS 29.002 V19.1.0 clause 7.6.10.4).
 *
 * @constant
 * @type {number}
 */
export
const auc = AdditionalNetworkResource_auc satisfies AdditionalNetworkResource; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AdditionalNetworkResource_ue
 * @description
 *
 * UE (value 6). Unknown received values shall be ignored. (3GPP TS 29.002
 * V19.1.0 clause 17.7.8).
 *
 * @constant
 * @type {number}
 */
export
const AdditionalNetworkResource_ue = _enum_for_AdditionalNetworkResource.ue satisfies AdditionalNetworkResource; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary ue
 * @description
 *
 * UE (value 6). Unknown received values shall be ignored. (3GPP TS 29.002
 * V19.1.0 clause 17.7.8).
 *
 * @constant
 * @type {number}
 */
export
const ue = AdditionalNetworkResource_ue satisfies AdditionalNetworkResource; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AdditionalNetworkResource_mme
 * @description
 *
 * MME (value 7). Unknown received values shall be ignored. (3GPP TS 29.002
 * V19.1.0 clause 17.7.8).
 *
 * @constant
 * @type {number}
 */
export
const AdditionalNetworkResource_mme = _enum_for_AdditionalNetworkResource.mme satisfies AdditionalNetworkResource; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mme
 * @description
 *
 * MME (value 7). Unknown received values shall be ignored. (3GPP TS 29.002
 * V19.1.0 clause 17.7.8).
 *
 * @constant
 * @type {number}
 */
export
const mme = AdditionalNetworkResource_mme satisfies AdditionalNetworkResource; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Decodes an ASN.1 element into a(n) AdditionalNetworkResource
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_AdditionalNetworkResource = $._decodeEnumerated;

/**
 * @summary Encodes a(n) AdditionalNetworkResource into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AdditionalNetworkResource, encoded as an ASN.1 Element.
 */
export const _encode_AdditionalNetworkResource = $._encodeEnumerated;


/* eslint-enable */
