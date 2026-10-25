/* eslint-disable */
import {
    type ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_InternetAccessType {
    undefined = 0,
    dialUp = 1,
    xDSL = 2,
    cableModem = 3,
    lAN = 4,
    wirelessLAN = 5,
    fTTx = 6,
    wIMAX_HIPERMAN = 7,
    satellite = 8,
    wireless_other = 9,
}

/**
 * @summary InternetAccessType
 * @description
 *
 * How the target reaches the Internet Access Service
 * (ETSI TS 102 232-3 V3.9.1, clauses 5.1 and 8). The interception
 * function supplies a fixed value for the service (tables A.4 and B.3).
 * Required on every IRI record when a value is available (table 2).
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * InternetAccessType  ::=  ENUMERATED
 * {
 *     undefined(0),
 *     dialUp(1),
 *         -- IAS via DialUp access
 *     xDSL(2),
 *         -- IAS via DSL access
 *     cableModem(3),
 *         -- IAS via Cable access
 *     lAN(4),
 *         -- IAS via LAN access
 *     ...,
 *     wirelessLAN(5),
 *         -- IAS via Wireless LAN access
 *     fTTx(6),
 *         -- IAS via Fiber access
 *     wIMAX-HIPERMAN(7),
 *         -- IAS via WIMAX/HIPERMAN (fixed access)
 *     satellite(8),
 *         -- IAS via Satellite access
 *         -- (when it is not covered by any 3GPP or ETSI mobile Lawful Interception specifications)
 *     wireless-other(9)
 *         -- IAS via other type of Wireless access
 *         -- (when it is not covered by any 3GPP or ETSI mobile Lawful Interception specifications)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type InternetAccessType = _enum_for_InternetAccessType | ENUMERATED;

/**
 * @summary InternetAccessType_undefined
 * @description
 *
 * No access type is known. Clause 8 gives no further meaning.
 *
 * @constant
 * @type {number}
 */
export
const InternetAccessType_undefined: _enum_for_InternetAccessType.undefined = _enum_for_InternetAccessType.undefined; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary undefined
 * @description
 *
 * No access type is known (clause 8).
 *
 * @constant
 * @type {number}
 */
export
const undefined: _enum_for_InternetAccessType.undefined = InternetAccessType_undefined; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary InternetAccessType_dialUp
 * @description
 *
 * IAS over a switched telephony network. The CPE dials a NAS and
 * typically runs PPP. A user may reach any NAS. The NAS asks RADIUS
 * to authenticate, or assigns an address from a local pool
 * (clause 5.1.1).
 *
 * @constant
 * @type {number}
 */
export
const InternetAccessType_dialUp: _enum_for_InternetAccessType.dialUp = _enum_for_InternetAccessType.dialUp; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary dialUp
 * @description
 *
 * IAS over the PSTN or ISDN (clause 5.1.1).
 *
 * @constant
 * @type {number}
 */
export
const dialUp: _enum_for_InternetAccessType.dialUp = InternetAccessType_dialUp; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary InternetAccessType_xDSL
 * @description
 *
 * IAS over the local loop, commonly PPPoA or PPPoE, with RADIUS and
 * sometimes DHCP at the gateway router (clause 5.1.2). A PPPoA CPE
 * router may hold the session while the computer is off, so address
 * assignment is rare. A static address may be taken from IAP
 * administration instead of from the network.
 *
 * @constant
 * @type {number}
 */
export
const InternetAccessType_xDSL: _enum_for_InternetAccessType.xDSL = _enum_for_InternetAccessType.xDSL; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary xDSL
 * @description
 *
 * IAS over DSL (clause 5.1.2).
 *
 * @constant
 * @type {number}
 */
export
const xDSL: _enum_for_InternetAccessType.xDSL = InternetAccessType_xDSL; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary InternetAccessType_cableModem
 * @description
 *
 * IAS over the cable network. Addresses are usually assigned by DHCP
 * from the cable-modem or computer MAC. The IAP may also authenticate
 * with RADIUS or a proprietary AAA protocol (clause 5.1.3). Some
 * networks use PPPoE, as for xDSL.
 *
 * @constant
 * @type {number}
 */
export
const InternetAccessType_cableModem: _enum_for_InternetAccessType.cableModem = _enum_for_InternetAccessType.cableModem; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cableModem
 * @description
 *
 * IAS over a cable modem (clause 5.1.3).
 *
 * @constant
 * @type {number}
 */
export
const cableModem: _enum_for_InternetAccessType.cableModem = InternetAccessType_cableModem; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary InternetAccessType_lAN
 * @description
 *
 * IAS via LAN. Annex B describes DHCP on Ethernet or Token Ring LANs
 * attached to the DHCP server or reached through a relay agent.
 *
 * @constant
 * @type {number}
 */
export
const InternetAccessType_lAN: _enum_for_InternetAccessType.lAN = _enum_for_InternetAccessType.lAN; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary lAN
 * @description
 *
 * IAS via LAN (clause 8).
 *
 * @constant
 * @type {number}
 */
export
const lAN: _enum_for_InternetAccessType.lAN = InternetAccessType_lAN; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary InternetAccessType_wirelessLAN
 * @description
 *
 * IEEE 802.11 access using the Wi-Fi interworking profile
 * (clause 5.1.4). Authentication is often RADIUS. An access point on
 * a consumer broadband line may hide many stations behind one address,
 * so intercept before that translation, or tunnel the traffic to a
 * central point. `targetLocation` should identify the access point
 * inside the service-provider domain.
 *
 * @constant
 * @type {number}
 */
export
const InternetAccessType_wirelessLAN: _enum_for_InternetAccessType.wirelessLAN = _enum_for_InternetAccessType.wirelessLAN; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary wirelessLAN
 * @description
 *
 * IAS via IEEE 802.11 wireless LAN (clause 5.1.4).
 *
 * @constant
 * @type {number}
 */
export
const wirelessLAN: _enum_for_InternetAccessType.wirelessLAN = InternetAccessType_wirelessLAN; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary InternetAccessType_fTTx
 * @description
 *
 * IAS via fibre. V3.9.1 gives no topology beyond the clause 8
 * comment.
 *
 * @constant
 * @type {number}
 */
export
const InternetAccessType_fTTx: _enum_for_InternetAccessType.fTTx = _enum_for_InternetAccessType.fTTx; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary fTTx
 * @description
 *
 * IAS via fibre (clause 8).
 *
 * @constant
 * @type {number}
 */
export
const fTTx: _enum_for_InternetAccessType.fTTx = InternetAccessType_fTTx; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary InternetAccessType_wIMAX_HIPERMAN
 * @description
 *
 * Fixed WiMAX or HIPERMAN access. V3.9.1 gives no topology beyond
 * the clause 8 comment.
 *
 * @constant
 * @type {number}
 */
export
const InternetAccessType_wIMAX_HIPERMAN: _enum_for_InternetAccessType.wIMAX_HIPERMAN = _enum_for_InternetAccessType.wIMAX_HIPERMAN; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary wIMAX_HIPERMAN
 * @description
 *
 * IAS via fixed WiMAX or HIPERMAN (clause 8).
 *
 * @constant
 * @type {number}
 */
export
const wIMAX_HIPERMAN: _enum_for_InternetAccessType.wIMAX_HIPERMAN = InternetAccessType_wIMAX_HIPERMAN; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary InternetAccessType_satellite
 * @description
 *
 * Satellite access, and only when no 3GPP or ETSI mobile LI
 * specification already covers that access (clause 8).
 *
 * @constant
 * @type {number}
 */
export
const InternetAccessType_satellite: _enum_for_InternetAccessType.satellite = _enum_for_InternetAccessType.satellite; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary satellite
 * @description
 *
 * Satellite access outside 3GPP and ETSI mobile LI specifications
 * (clause 8).
 *
 * @constant
 * @type {number}
 */
export
const satellite: _enum_for_InternetAccessType.satellite = InternetAccessType_satellite; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary InternetAccessType_wireless_other
 * @description
 *
 * Another wireless access, and only when no 3GPP or ETSI mobile LI
 * specification already covers it (clause 8).
 *
 * @constant
 * @type {number}
 */
export
const InternetAccessType_wireless_other: _enum_for_InternetAccessType.wireless_other = _enum_for_InternetAccessType.wireless_other; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary wireless_other
 * @description
 *
 * Other wireless access outside 3GPP and ETSI mobile LI
 * specifications (clause 8).
 *
 * @constant
 * @type {number}
 */
export
const wireless_other: _enum_for_InternetAccessType.wireless_other = InternetAccessType_wireless_other; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_InternetAccessType: $.ASN1Decoder<InternetAccessType> = $._decodeEnumerated;
export const _encode_InternetAccessType: $.ASN1Encoder<InternetAccessType> = $._encodeEnumerated;


/* eslint-enable */
