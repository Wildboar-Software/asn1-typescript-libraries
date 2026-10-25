/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary flowControl_ArgumentType_controlReceiver
 * @description
 * 
 * Whether the VPN node will accept further FACILITY and NOTIFY messages that
 * require transport through the public network.
 *
 * ITU-T Rec. Q.932 (05/1998) Annex D, D.6.2; ITU-T Rec. Q.932 (1998) Amd.1
 * (06/2000) Figure D.4 bis.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * flowControl-ArgumentType-controlReceiver ::= ENUMERATED {
 *   receiverNotReady(0),
 *   receiverReady(1)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_flowControl_ArgumentType_controlReceiver {
    receiverNotReady = 0,
    receiverReady = 1,
}

/**
 * @summary flowControl_ArgumentType_controlReceiver
 * @description
 * 
 * Whether the VPN node will accept further FACILITY and NOTIFY messages that
 * require transport through the public network.
 *
 * ITU-T Rec. Q.932 (05/1998) Annex D, D.6.2; ITU-T Rec. Q.932 (1998) Amd.1
 * (06/2000) Figure D.4 bis.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * flowControl-ArgumentType-controlReceiver ::= ENUMERATED {
 *   receiverNotReady(0),
 *   receiverReady(1)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type flowControl_ArgumentType_controlReceiver = _enum_for_flowControl_ArgumentType_controlReceiver;

/**
 * @summary flowControl_ArgumentType_controlReceiver
 * @description
 * 
 * Whether the VPN node will accept further FACILITY and NOTIFY messages that
 * require transport through the public network.
 *
 * ITU-T Rec. Q.932 (05/1998) Annex D, D.6.2; ITU-T Rec. Q.932 (1998) Amd.1
 * (06/2000) Figure D.4 bis.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * flowControl-ArgumentType-controlReceiver ::= ENUMERATED {
 *   receiverNotReady(0),
 *   receiverReady(1)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const flowControl_ArgumentType_controlReceiver = _enum_for_flowControl_ArgumentType_controlReceiver;

/**
 * @summary flowControl_ArgumentType_controlReceiver_receiverNotReady
 * @description
 * 
 * The VPN node is not ready to receive more FACILITY and NOTIFY messages that
 * need transport through the public network. Later messages of that kind may be
 * discarded. FACILITY messages that do not need that transport are still
 * processed. ITU-T Rec. Q.932 (05/1998) Annex D, D.6.2.
 * 
 * @constant
 * @type {number}
 */
export
const flowControl_ArgumentType_controlReceiver_receiverNotReady = flowControl_ArgumentType_controlReceiver.receiverNotReady; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary receiverNotReady
 * @description
 * 
 * The VPN node is not ready to receive more FACILITY and NOTIFY messages that
 * need transport through the public network. Later messages of that kind may be
 * discarded. FACILITY messages that do not need that transport are still
 * processed. ITU-T Rec. Q.932 (05/1998) Annex D, D.6.2.
 * 
 * @constant
 * @type {number}
 */
export
const receiverNotReady = flowControl_ArgumentType_controlReceiver.receiverNotReady; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary flowControl_ArgumentType_controlReceiver_receiverReady
 * @description
 * 
 * The VPN node can accept further FACILITY and NOTIFY messages that need
 * transport through the public network. `maximumNumberOfMessages` and `timerT`
 * may be included with this value. ITU-T Rec. Q.932 (05/1998) Annex D, D.6.2
 * and Figure D.4.
 * 
 * @constant
 * @type {number}
 */
export
const flowControl_ArgumentType_controlReceiver_receiverReady = flowControl_ArgumentType_controlReceiver.receiverReady; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary receiverReady
 * @description
 * 
 * The VPN node can accept further FACILITY and NOTIFY messages that need
 * transport through the public network. `maximumNumberOfMessages` and `timerT`
 * may be included with this value. ITU-T Rec. Q.932 (05/1998) Annex D, D.6.2
 * and Figure D.4.
 * 
 * @constant
 * @type {number}
 */
export
const receiverReady = flowControl_ArgumentType_controlReceiver.receiverReady; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_flowControl_ArgumentType_controlReceiver: $.ASN1Decoder<flowControl_ArgumentType_controlReceiver> = $._decodeEnumerated;
export const _encode_flowControl_ArgumentType_controlReceiver: $.ASN1Encoder<flowControl_ArgumentType_controlReceiver> = $._encodeEnumerated;


/* eslint-enable */
