/* eslint-disable */
import {
    type ASN1Element as _Element,
    type ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_RequestingNodeType {
    vlr = 0,
    sgsn = 1,
    s_cscf = 2,
    bsf = 3,
    gan_aaa_server = 4,
    wlan_aaa_server = 5,
    mme = 16,
    mme_sgsn = 17,
}

/**
 * @summary RequestingNodeType
 * @description
 *
 * Type of node requesting authentication vectors. Values 2-5 (S-CSCF, BSF,
 * GAN/WLAN AAA) shall not be used on MAP-D or Gr. Received 6-15 treated as
 * `vlr`; greater than 17 treated as `sgsn`.
 *
 * (3GPP TS 29.002 V19.1.0 clauses 8.5.2.3 and 17.7.1).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RequestingNodeType  ::=  ENUMERATED {
 *     vlr  (0),
 *     sgsn  (1),
 *     ...,
 *     s-cscf  (2),
 *     bsf  (3),
 *     gan-aaa-server  (4),
 *     wlan-aaa-server  (5),
 *     mme    (16),
 *     mme-sgsn    (17)
 *     }
 * ```
 * 
 * @enum {number}
 */
export
type RequestingNodeType = _enum_for_RequestingNodeType | ENUMERATED;

/**
 * @summary RequestingNodeType_vlr
 * @constant
 * @type {number}
 */
export
const RequestingNodeType_vlr: _enum_for_RequestingNodeType.vlr = _enum_for_RequestingNodeType.vlr; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary vlr
 * @constant
 * @type {number}
 */
export
const vlr: _enum_for_RequestingNodeType.vlr = RequestingNodeType_vlr; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RequestingNodeType_sgsn
 * @constant
 * @type {number}
 */
export
const RequestingNodeType_sgsn: _enum_for_RequestingNodeType.sgsn = _enum_for_RequestingNodeType.sgsn; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sgsn
 * @constant
 * @type {number}
 */
export
const sgsn: _enum_for_RequestingNodeType.sgsn = RequestingNodeType_sgsn; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RequestingNodeType_s_cscf
 * @constant
 * @type {number}
 */
export
const RequestingNodeType_s_cscf: _enum_for_RequestingNodeType.s_cscf = _enum_for_RequestingNodeType.s_cscf; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary s_cscf
 * @constant
 * @type {number}
 */
export
const s_cscf: _enum_for_RequestingNodeType.s_cscf = RequestingNodeType_s_cscf; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RequestingNodeType_bsf
 * @constant
 * @type {number}
 */
export
const RequestingNodeType_bsf: _enum_for_RequestingNodeType.bsf = _enum_for_RequestingNodeType.bsf; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary bsf
 * @constant
 * @type {number}
 */
export
const bsf: _enum_for_RequestingNodeType.bsf = RequestingNodeType_bsf; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RequestingNodeType_gan_aaa_server
 * @constant
 * @type {number}
 */
export
const RequestingNodeType_gan_aaa_server: _enum_for_RequestingNodeType.gan_aaa_server = _enum_for_RequestingNodeType.gan_aaa_server; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary gan_aaa_server
 * @constant
 * @type {number}
 */
export
const gan_aaa_server: _enum_for_RequestingNodeType.gan_aaa_server = RequestingNodeType_gan_aaa_server; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RequestingNodeType_wlan_aaa_server
 * @constant
 * @type {number}
 */
export
const RequestingNodeType_wlan_aaa_server: _enum_for_RequestingNodeType.wlan_aaa_server = _enum_for_RequestingNodeType.wlan_aaa_server; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary wlan_aaa_server
 * @constant
 * @type {number}
 */
export
const wlan_aaa_server: _enum_for_RequestingNodeType.wlan_aaa_server = RequestingNodeType_wlan_aaa_server; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RequestingNodeType_mme
 * @constant
 * @type {number}
 */
export
const RequestingNodeType_mme: _enum_for_RequestingNodeType.mme = _enum_for_RequestingNodeType.mme; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mme
 * @constant
 * @type {number}
 */
export
const mme: _enum_for_RequestingNodeType.mme = RequestingNodeType_mme; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RequestingNodeType_mme_sgsn
 * @constant
 * @type {number}
 */
export
const RequestingNodeType_mme_sgsn: _enum_for_RequestingNodeType.mme_sgsn = _enum_for_RequestingNodeType.mme_sgsn; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mme_sgsn
 * @constant
 * @type {number}
 */
export
const mme_sgsn: _enum_for_RequestingNodeType.mme_sgsn = RequestingNodeType_mme_sgsn; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Decodes an ASN.1 element into a(n) RequestingNodeType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_RequestingNodeType: $.ASN1Decoder<number> = $._decodeEnumerated;

/**
 * @summary Encodes a(n) RequestingNodeType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RequestingNodeType, encoded as an ASN.1 Element.
 */
export const _encode_RequestingNodeType: $.ASN1Encoder<number> = $._encodeEnumerated;


/* eslint-enable */
