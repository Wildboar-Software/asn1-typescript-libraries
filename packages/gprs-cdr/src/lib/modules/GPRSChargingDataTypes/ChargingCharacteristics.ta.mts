/* eslint-disable */
import {
    OCTET_STRING,
    ASN1Element as _Element,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ChargingCharacteristics
 * @description
 *
 * The Charging Characteristics field allows the operator to apply different
 * kind of charging methods in the CDRs. A subscriber may have Charging
 * Characteristics assigned to his subscription. These characteristics can be
 * supplied by the HLR/HSS according to the rules specified in Annex A of TS
 * 32.251 [11]. Charging Characteristics used by IP-Edge [PCEF] or TDF in
 * Convergent Fixed-Mobile Operator scenario are always configured in IP-Edge
 * [PCEF] or TDF respectively, as described in annex D of TS 32.251 [11].
 * This information can be used by the PCNs/ IP-Edge [PCEF] to activate
 * charging generation and e.g. control the closure of the CDR or the traffic
 * volume containers (see clause 5.1.2.2.25) and applied charging
 * characteristics is included in CDRs transmitted to nodes handling the CDRs
 * via the Ga reference point. It can also be used in nodes handling the CDRs
 * (e.g., the CGF or the billing system) to influence the CDR processing
 * priority and routing. These functions are accomplished by specifying the
 * charging characteristics as sets of charging profiles and the expected
 * behaviour associated with each profile. The interpretations of the
 * profiles and their associated behaviours can be different for each PLMN
 * operator and are not subject to standardisation. In the present document
 * only the charging characteristic formats and selection modes are
 * specified.
 *
 * Sixteen behaviour bits, each freely defined by the operator and
 * configured in the PCN (annex A). A bit set to 1 selects that behaviour.
 * The HLR/HSS/AAA supplies the value to the Gn/Gp SGSN, or the HSS
 * supplies it to the MME. On IP-CAN bearer activation it is forwarded to
 * the P-GW (via the S-GW when the MME is involved), and on TDF session
 * establishment the P-GW forwards it toward the TDF. The PCN may ignore
 * the supplied value and apply the home default (SGSN and S-GW in the
 * HPLMN), the roaming default (home-routed P-GW or TDF), or the visiting
 * default (local breakout). A behaviour can carry, per CDR type, whether
 * generation is active, the time limit, the volume limit, the maximum
 * number of charging-condition changes, and the tariff times, plus an
 * optional CGF address. In the home or visiting case the S-GW and the
 * Gn/Gp SGSN apply the CGF address received from the P-GW for the bearer
 * CDRs. In the roaming case, or if none is received, they use the address
 * from their own applied behaviour, or else the default CGF. FBC is always
 * active in the P-GW. A default charging method or CGF/OCS address from
 * the PCRF supersedes the behaviour. The same rule applies at the TDF for
 * charging information and the default charging method received from the
 * PCRF (clause A.1).
 * 
 *
 * 3GPP TS 32.251 V19.0.0.
 *
 * 3GPP TS 32.298 V20.1.0 clause 5.1.2.2.7.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ChargingCharacteristics  ::=  OCTET STRING ( SIZE( 2 ) )
 * ```
 */
export
type ChargingCharacteristics = OCTET_STRING; // OctetStringType

export const _decode_ChargingCharacteristics = (el: _Element): ChargingCharacteristics => {
    const value = $._decodeOctetString(el);
    if (value.length !== 2) {
        throw new ASN1SizeError("ChargingCharacteristics violates SIZE constraint");
    }
    return value;
};

export
const _encode_ChargingCharacteristics: $.ASN1Encoder<ChargingCharacteristics> = $._encodeOctetString;

/* eslint-enable */
