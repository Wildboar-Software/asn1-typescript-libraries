/* eslint-disable */
import {
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_VoIPRoamingIndication {
    roamingLBO = 1,
    roamingS8HR = 2,
}

/**
 * @summary VoIPRoamingIndication
 * @description
 * 
 * VoLTE roaming architecture in the VPLMN: local breakout or S8 home routing
 * (clause 7 table 7.2). IMS events only. Table 7.3: provide it when the VPLMN
 * sends the SIP messages. The IRI parameter is roamingIndication. Annex B.9
 * carries the IMS IRI.
 * 
 * 3GPP TS 33.108 (https://www.3gpp.org/DynaReport/33108.htm).
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * VoIPRoamingIndication  ::=  ENUMERATED {
 *     roamingLBO            (1), -- used in IMS events sent by VPLMN with LBO as roaming
 *     roamingS8HR            (2), -- used in IMS events sent by VPLMN with S8HR as roaming
 *     ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type VoIPRoamingIndication = _enum_for_VoIPRoamingIndication | ENUMERATED;

/**
 * @summary VoIPRoamingIndication_roamingLBO
 * @description
 * 
 * Local breakout. IMS events the VPLMN sends for LBO roaming (module comment
 * and clause 7 table 7.2). Provide it when the VPLMN sends the SIP messages
 * (table 7.3). VoLTE only.
 * @constant
 * @type {number}
 */
export
const VoIPRoamingIndication_roamingLBO: VoIPRoamingIndication = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary roamingLBO
 * @description
 * 
 * VPLMN local-breakout VoLTE roaming (clause 7).
 * @constant
 * @type {number}
 */
export
const roamingLBO: VoIPRoamingIndication = VoIPRoamingIndication_roamingLBO; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary VoIPRoamingIndication_roamingS8HR
 * @description
 * 
 * S8 home-routed roaming. IMS events the VPLMN sends for S8HR (module comment
 * and clause 7 table 7.2). Provide it when the VPLMN sends the SIP messages
 * (table 7.3). VoLTE only.
 * @constant
 * @type {number}
 */
export
const VoIPRoamingIndication_roamingS8HR: VoIPRoamingIndication = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary roamingS8HR
 * @description
 * 
 * VPLMN S8 home-routed VoLTE roaming (clause 7).
 * @constant
 * @type {number}
 */
export
const roamingS8HR: VoIPRoamingIndication = VoIPRoamingIndication_roamingS8HR; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_VoIPRoamingIndication: $.ASN1Decoder<VoIPRoamingIndication> = $._decodeEnumerated;
export const _encode_VoIPRoamingIndication: $.ASN1Encoder<VoIPRoamingIndication> = $._encodeEnumerated;


/* eslint-enable */
