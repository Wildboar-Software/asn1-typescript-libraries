/* eslint-disable */
import {
    type ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_ProSeTargetType {
    pRoSeRemoteUE = 1,
    pRoSeUEtoNwRelay = 2,
}

/**
 * @summary ProSeTargetType
 * @description
 * 
 * Whether the target is a ProSe remote UE or a ProSe UE-to-network relay
 * (clause 13.3.1 table 13.3.1-2). Mandatory on the ProSe remote UE report
 * (table 13.3.2.2-1). Annex B.9 carries the ProSe remote-UE IRI (clause
 * 13.3.1).
 * 
 * 3GPP TS 33.108 (https://www.3gpp.org/DynaReport/33108.htm).
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ProSeTargetType  ::=  ENUMERATED
 * {
 *     pRoSeRemoteUE        (1),
 *     pRoSeUEtoNwRelay    (2),
 *     ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type ProSeTargetType = _enum_for_ProSeTargetType | ENUMERATED;

/**
 * @summary ProSeTargetType_pRoSeRemoteUE
 * @description
 * 
 * The target is a ProSe remote UE (clause 13.3.1 table 13.3.1-2). Mandatory on
 * the ProSe remote UE report.
 * @constant
 * @type {number}
 */
export
const ProSeTargetType_pRoSeRemoteUE: _enum_for_ProSeTargetType.pRoSeRemoteUE = _enum_for_ProSeTargetType.pRoSeRemoteUE; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pRoSeRemoteUE
 * @description
 * 
 * Target is a ProSe remote UE (clause 13.3.1).
 * @constant
 * @type {number}
 */
export
const pRoSeRemoteUE: _enum_for_ProSeTargetType.pRoSeRemoteUE = ProSeTargetType_pRoSeRemoteUE; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ProSeTargetType_pRoSeUEtoNwRelay
 * @description
 * 
 * The target is a ProSe UE-to-network relay (clause 13.3.1 table 13.3.1-2).
 * Connected and disconnected remote UEs are then reported for this target.
 * @constant
 * @type {number}
 */
export
const ProSeTargetType_pRoSeUEtoNwRelay: _enum_for_ProSeTargetType.pRoSeUEtoNwRelay = _enum_for_ProSeTargetType.pRoSeUEtoNwRelay; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pRoSeUEtoNwRelay
 * @description
 * 
 * Target is a ProSe UE-to-network relay (clause 13.3.1).
 * @constant
 * @type {number}
 */
export
const pRoSeUEtoNwRelay: _enum_for_ProSeTargetType.pRoSeUEtoNwRelay = ProSeTargetType_pRoSeUEtoNwRelay; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_ProSeTargetType: $.ASN1Decoder<ProSeTargetType> = $._decodeEnumerated;
export const _encode_ProSeTargetType: $.ASN1Encoder<ProSeTargetType> = $._encodeEnumerated;


/* eslint-enable */
