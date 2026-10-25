/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TransportProtocol
 * @description
 * 
 * The TransportProtocol indicates the transport protocol used to connect to the
 * 5GS. The TransportProtocol type is derived from the data present in the
 * TransportProtocol type defined in TS 29.571 [17] clause 5.4.4.10 and table
 * 5.4.3.38.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.33.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TransportProtocol  ::=  ENUMERATED
 * {
 *     uDP(1),
 *     tCP(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_TransportProtocol {
    /**
     * @description
     *
     * UDP is in use.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.33.
     */
    uDP = 1,
    /**
     * @description
     *
     * TCP is in use.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.33.
     */
    tCP = 2,
}

/**
 * @summary TransportProtocol
 * @description
 * 
 * The TransportProtocol indicates the transport protocol used to connect to the
 * 5GS. The TransportProtocol type is derived from the data present in the
 * TransportProtocol type defined in TS 29.571 [17] clause 5.4.4.10 and table
 * 5.4.3.38.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.33.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TransportProtocol  ::=  ENUMERATED
 * {
 *     uDP(1),
 *     tCP(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type TransportProtocol = _enum_for_TransportProtocol;

/**
 * @summary TransportProtocol
 * @description
 * 
 * The TransportProtocol indicates the transport protocol used to connect to the
 * 5GS. The TransportProtocol type is derived from the data present in the
 * TransportProtocol type defined in TS 29.571 [17] clause 5.4.4.10 and table
 * 5.4.3.38.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.33.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TransportProtocol  ::=  ENUMERATED
 * {
 *     uDP(1),
 *     tCP(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const TransportProtocol: typeof _enum_for_TransportProtocol = _enum_for_TransportProtocol;

/**
 * @summary TransportProtocol_uDP
 * @description
 *
 * UDP is in use.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.33.
 *
 * @constant
 * @type {number}
 */
export
const TransportProtocol_uDP: _enum_for_TransportProtocol.uDP = TransportProtocol.uDP; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary uDP
 * @description
 *
 * UDP is in use.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.33.
 *
 * @constant
 * @type {number}
 */
export
const uDP: _enum_for_TransportProtocol.uDP = TransportProtocol.uDP; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TransportProtocol_tCP
 * @description
 *
 * TCP is in use.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.33.
 *
 * @constant
 * @type {number}
 */
export
const TransportProtocol_tCP: _enum_for_TransportProtocol.tCP = TransportProtocol.tCP; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tCP
 * @description
 *
 * TCP is in use.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.33.
 *
 * @constant
 * @type {number}
 */
export
const tCP: _enum_for_TransportProtocol.tCP = TransportProtocol.tCP; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_TransportProtocol: $.ASN1Decoder<TransportProtocol> = $._decodeEnumerated;
export const _encode_TransportProtocol: $.ASN1Encoder<TransportProtocol> = $._encodeEnumerated;


/* eslint-enable */
