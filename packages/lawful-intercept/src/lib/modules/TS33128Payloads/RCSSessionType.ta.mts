/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RCSSessionType
 * @description
 * 
 * The RCSSessionType shall be set to indicate the type of RCS Session being
 * reported.
 *
 * 3GPP TS 33.128, clause 7.13.3.4.5.1.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RCSSessionType  ::=  ENUMERATED
 * {
 *     largeMessageStandalone(1),
 *     oneTo1Chat(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_RCSSessionType {
    /**
     * @description
     *
     * Shall be selected if the session being reported is related to a Large
     * Message Mode CPM Standalone Message.
     *
     * 3GPP TS 33.128, clause 7.13.3.4.5.1.
     */
    largeMessageStandalone = 1,
    /**
     * @description
     *
     * Shall be selected if the session being reported is a one-to-one chat
     * session (see GSMA RCC.07 [78] clause 3.2.3).
     *
     * 3GPP TS 33.128, clause 7.13.3.4.5.1.
     */
    oneTo1Chat = 2,
}

/**
 * @summary RCSSessionType
 * @description
 * 
 * The RCSSessionType shall be set to indicate the type of RCS Session being
 * reported.
 *
 * 3GPP TS 33.128, clause 7.13.3.4.5.1.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RCSSessionType  ::=  ENUMERATED
 * {
 *     largeMessageStandalone(1),
 *     oneTo1Chat(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type RCSSessionType = _enum_for_RCSSessionType;

/**
 * @summary RCSSessionType
 * @description
 * 
 * The RCSSessionType shall be set to indicate the type of RCS Session being
 * reported.
 *
 * 3GPP TS 33.128, clause 7.13.3.4.5.1.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RCSSessionType  ::=  ENUMERATED
 * {
 *     largeMessageStandalone(1),
 *     oneTo1Chat(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const RCSSessionType: typeof _enum_for_RCSSessionType = _enum_for_RCSSessionType;

/**
 * @summary RCSSessionType_largeMessageStandalone
 * @description
 *
 * Shall be selected if the session being reported is related to a Large Message
 * Mode CPM Standalone Message.
 *
 * 3GPP TS 33.128, clause 7.13.3.4.5.1.
 *
 * @constant
 * @type {number}
 */
export
const RCSSessionType_largeMessageStandalone: _enum_for_RCSSessionType.largeMessageStandalone = RCSSessionType.largeMessageStandalone; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary largeMessageStandalone
 * @description
 *
 * Shall be selected if the session being reported is related to a Large Message
 * Mode CPM Standalone Message.
 *
 * 3GPP TS 33.128, clause 7.13.3.4.5.1.
 *
 * @constant
 * @type {number}
 */
export
const largeMessageStandalone: _enum_for_RCSSessionType.largeMessageStandalone = RCSSessionType.largeMessageStandalone; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RCSSessionType_oneTo1Chat
 * @description
 *
 * Shall be selected if the session being reported is a one-to-one chat session
 * (see GSMA RCC.07 [78] clause 3.2.3).
 *
 * 3GPP TS 33.128, clause 7.13.3.4.5.1.
 *
 * @constant
 * @type {number}
 */
export
const RCSSessionType_oneTo1Chat: _enum_for_RCSSessionType.oneTo1Chat = RCSSessionType.oneTo1Chat; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary oneTo1Chat
 * @description
 *
 * Shall be selected if the session being reported is a one-to-one chat session
 * (see GSMA RCC.07 [78] clause 3.2.3).
 *
 * 3GPP TS 33.128, clause 7.13.3.4.5.1.
 *
 * @constant
 * @type {number}
 */
export
const oneTo1Chat: _enum_for_RCSSessionType.oneTo1Chat = RCSSessionType.oneTo1Chat; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_RCSSessionType: $.ASN1Decoder<RCSSessionType> = $._decodeEnumerated;
export const _encode_RCSSessionType: $.ASN1Encoder<RCSSessionType> = $._encodeEnumerated;


/* eslint-enable */
