/* eslint-disable */
import {
    type ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_I_WLANEvent {
    i_WLANAccessInitiation = 1,
    i_WLANAccessTermination = 2,
    i_WLANTunnelEstablishment = 3,
    i_WLANTunnelDisconnect = 4,
    startOfInterceptionCommunicationActive = 5,
    packetDataHeaderInformation = 6,
}

/**
 * @summary I_WLANEvent
 * @description
 * 
 * I-WLAN event that caused the IRI record. Table 8.1 maps each event to a
 * Begin, End, or Report record. The events are those defined for HI2 delivery
 * from TS 33.107.
 * 
 * 3GPP TS 33.108, clause 8.5, table 8.1, and annex B.7.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * I-WLANEvent  ::=  ENUMERATED
 * {
 *     i-WLANAccessInitiation                     (1),
 *     i-WLANAccessTermination                    (2),
 *     i-WLANTunnelEstablishment                (3),
 *     i-WLANTunnelDisconnect                    (4),
 *     startOfInterceptionCommunicationActive    (5),
 *     ...,
 *     packetDataHeaderInformation                (6)
 * 
 * }
 * ```
 * 
 * @enum {number}
 */
export
type I_WLANEvent = _enum_for_I_WLANEvent | ENUMERATED;

/**
 * @summary I_WLANEvent_i_WLANAccessInitiation
 * @description
 * 
 * The target's WLAN UE attempted I-WLAN access initiation, successfully or not.
 * Sent as REPORT (table 8.1, table 8.3), from the AAA server. Clause 8.5.1.2
 * also triggers a REPORT for successful or unsuccessful re-authentication and
 * does not name a separate event for it.
 * @constant
 * @type {number}
 */
export
const I_WLANEvent_i_WLANAccessInitiation: _enum_for_I_WLANEvent.i_WLANAccessInitiation = _enum_for_I_WLANEvent.i_WLANAccessInitiation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary i_WLANAccessInitiation
 * @description
 * 
 * Access initiation REPORT (table 8.3). Re-authentication has no separate
 * event.
 * @constant
 * @type {number}
 */
export
const i_WLANAccessInitiation: _enum_for_I_WLANEvent.i_WLANAccessInitiation = I_WLANEvent_i_WLANAccessInitiation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary I_WLANEvent_i_WLANAccessTermination
 * @description
 * 
 * The target's WLAN UE performed I-WLAN access termination (detach),
 * successfully or not. Sent as REPORT from the AAA server (table 8.1, table
 * 8.4).
 * @constant
 * @type {number}
 */
export
const I_WLANEvent_i_WLANAccessTermination: _enum_for_I_WLANEvent.i_WLANAccessTermination = _enum_for_I_WLANEvent.i_WLANAccessTermination; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary i_WLANAccessTermination
 * @description
 * 
 * Access termination REPORT (table 8.4).
 * @constant
 * @type {number}
 */
export
const i_WLANAccessTermination: _enum_for_I_WLANEvent.i_WLANAccessTermination = I_WLANEvent_i_WLANAccessTermination; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary I_WLANEvent_i_WLANTunnelEstablishment
 * @description
 * 
 * I-WLAN tunnel establishment. Success is BEGIN, from the AAA server or the PDG
 * (table 8.1; table 8.8 PDG and table 8.9 AAA, both titled Tunnel Establishment
 * (successful) BEGIN). Failure is REPORT (table 8.5 PDG, table 8.6 AAA).
 * @constant
 * @type {number}
 */
export
const I_WLANEvent_i_WLANTunnelEstablishment: _enum_for_I_WLANEvent.i_WLANTunnelEstablishment = _enum_for_I_WLANEvent.i_WLANTunnelEstablishment; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary i_WLANTunnelEstablishment
 * @description
 * 
 * Tunnel establishment: BEGIN if successful, REPORT if not (table 8.1).
 * @constant
 * @type {number}
 */
export
const i_WLANTunnelEstablishment: _enum_for_I_WLANEvent.i_WLANTunnelEstablishment = I_WLANEvent_i_WLANTunnelEstablishment; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary I_WLANEvent_i_WLANTunnelDisconnect
 * @description
 * 
 * The I-WLAN tunnel disconnected. Sent as END from the AAA server or the PDG
 * (table 8.1, tables 8.12 and 8.13).
 * @constant
 * @type {number}
 */
export
const I_WLANEvent_i_WLANTunnelDisconnect: _enum_for_I_WLANEvent.i_WLANTunnelDisconnect = _enum_for_I_WLANEvent.i_WLANTunnelDisconnect; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary i_WLANTunnelDisconnect
 * @description
 * 
 * Tunnel disconnect END (tables 8.12 and 8.13).
 * @constant
 * @type {number}
 */
export
const i_WLANTunnelDisconnect: _enum_for_I_WLANEvent.i_WLANTunnelDisconnect = I_WLANEvent_i_WLANTunnelDisconnect; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary I_WLANEvent_startOfInterceptionCommunicationActive
 * @description
 * 
 * Interception started while I-WLAN communication was already active. REPORT
 * from the AAA server when access initiation has occurred and no tunnel is up
 * (table 8.7). BEGIN, one record per tunnel, when at least one tunnel is
 * already up (table 8.1; table 8.10 PDG and table 8.11 AAA).
 * @constant
 * @type {number}
 */
export
const I_WLANEvent_startOfInterceptionCommunicationActive: _enum_for_I_WLANEvent.startOfInterceptionCommunicationActive = _enum_for_I_WLANEvent.startOfInterceptionCommunicationActive; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary startOfInterceptionCommunicationActive
 * @description
 * 
 * Start of intercept: REPORT if no tunnel, else BEGIN per tunnel.
 * @constant
 * @type {number}
 */
export
const startOfInterceptionCommunicationActive: _enum_for_I_WLANEvent.startOfInterceptionCommunicationActive = I_WLANEvent_startOfInterceptionCommunicationActive; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary I_WLANEvent_packetDataHeaderInformation
 * @description
 * 
 * Packet-data header reporting for packets the target sent or received. Sent as
 * REPORT, either per packet or as a flow summary (table 8.1, table 8.8 Packet
 * Data Header Information REPORT Record).
 * @constant
 * @type {number}
 */
export
const I_WLANEvent_packetDataHeaderInformation: _enum_for_I_WLANEvent.packetDataHeaderInformation = _enum_for_I_WLANEvent.packetDataHeaderInformation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary packetDataHeaderInformation
 * @description
 * 
 * Packet-data header REPORT, per packet or summarized (table 8.8).
 * @constant
 * @type {number}
 */
export
const packetDataHeaderInformation: _enum_for_I_WLANEvent.packetDataHeaderInformation = I_WLANEvent_packetDataHeaderInformation; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_I_WLANEvent: $.ASN1Decoder<I_WLANEvent> = $._decodeEnumerated;
export const _encode_I_WLANEvent: $.ASN1Encoder<I_WLANEvent> = $._encodeEnumerated;


/* eslint-enable */
