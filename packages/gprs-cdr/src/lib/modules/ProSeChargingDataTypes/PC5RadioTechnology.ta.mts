/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PC5RadioTechnology
 * @description
 *
 * PC5 radio technology the UE used for ProSe Direct Discovery: E-UTRA, WLAN, or
 * both. When the CDR field is absent, the technology is E-UTRA. Local PLMN
 * charging does not apply to WLAN-based ProSe Direct Discovery.
 *
 * Feature bit 0 of Feature-List-ID 1, named ProSe_WLAN_DD-CH, indicates that
 * the ProSe Function, CDF, or OCF supports PC5 radio technology for WLAN-based
 * Direct Discovery charging. The bit applies to both online and offline
 * charging.
 *
 * 3GPP TS 32.277 V19.2.0 clauses 5.1.1, 5.1.2.1, 6.1.3.2, and 6.3.1.3.
 *
 * 3GPP TS 32.298 V20.1.0 clause 5.1.4.7.14A.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PC5RadioTechnology  ::=  ENUMERATED {
 *    eUTRA               ( 0 ),
 *    wLAN                ( 1 ),
 *    bothEUTRAAndWLAN    ( 2 ) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_PC5RadioTechnology {
    eUTRA = 0,
    wLAN = 1,
    bothEUTRAAndWLAN = 2,
}

/**
 * @summary PC5RadioTechnology
 * @description
 *
 * PC5 radio technology the UE used for ProSe Direct Discovery: E-UTRA, WLAN, or
 * both. When the CDR field is absent, the technology is E-UTRA. Local PLMN
 * charging does not apply to WLAN-based ProSe Direct Discovery.
 *
 * Feature bit 0 of Feature-List-ID 1, named ProSe_WLAN_DD-CH, indicates that
 * the ProSe Function, CDF, or OCF supports PC5 radio technology for WLAN-based
 * Direct Discovery charging. The bit applies to both online and offline
 * charging.
 *
 * 3GPP TS 32.277 V19.2.0 clauses 5.1.1, 5.1.2.1, 6.1.3.2, and 6.3.1.3.
 *
 * 3GPP TS 32.298 V20.1.0 clause 5.1.4.7.14A.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PC5RadioTechnology  ::=  ENUMERATED {
 *    eUTRA               ( 0 ),
 *    wLAN                ( 1 ),
 *    bothEUTRAAndWLAN    ( 2 ) }
 * ```
 * 
 * @enum {number}
 */
export
type PC5RadioTechnology = _enum_for_PC5RadioTechnology;

/**
 * @summary PC5RadioTechnology
 * @description
 *
 * PC5 radio technology the UE used for ProSe Direct Discovery: E-UTRA, WLAN, or
 * both. When the CDR field is absent, the technology is E-UTRA. Local PLMN
 * charging does not apply to WLAN-based ProSe Direct Discovery.
 *
 * Feature bit 0 of Feature-List-ID 1, named ProSe_WLAN_DD-CH, indicates that
 * the ProSe Function, CDF, or OCF supports PC5 radio technology for WLAN-based
 * Direct Discovery charging. The bit applies to both online and offline
 * charging.
 *
 * 3GPP TS 32.277 V19.2.0 clauses 5.1.1, 5.1.2.1, 6.1.3.2, and 6.3.1.3.
 *
 * 3GPP TS 32.298 V20.1.0 clause 5.1.4.7.14A.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PC5RadioTechnology  ::=  ENUMERATED {
 *    eUTRA               ( 0 ),
 *    wLAN                ( 1 ),
 *    bothEUTRAAndWLAN    ( 2 ) }
 * ```
 * 
 * @enum {number}
 */
export
const PC5RadioTechnology: typeof _enum_for_PC5RadioTechnology = _enum_for_PC5RadioTechnology;

/**
 * @summary PC5RadioTechnology_eUTRA
 * @description
 *
 * E-UTRA. This is also the technology assumed when `pc5RadioTechnology` is
 * absent from the CDR.
 *
 * 3GPP TS 32.277 V19.2.0 clause 5.1.2.1.
 *
 * @constant
 * @type {number}
 */
export
const PC5RadioTechnology_eUTRA: _enum_for_PC5RadioTechnology.eUTRA = PC5RadioTechnology.eUTRA; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary eUTRA
 * @description
 *
 * E-UTRA. See `PC5RadioTechnology_eUTRA`.
 *
 * @constant
 * @type {number}
 */
export
const eUTRA: _enum_for_PC5RadioTechnology.eUTRA = PC5RadioTechnology.eUTRA; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PC5RadioTechnology_wLAN
 * @description
 *
 * WLAN. The ProSe Function does not collect charging information in a local
 * PLMN for WLAN-based ProSe Direct Discovery.
 *
 * 3GPP TS 32.277 V19.2.0 clauses 5.1.1 and 5.2.1.1.
 *
 * @constant
 * @type {number}
 */
export
const PC5RadioTechnology_wLAN: _enum_for_PC5RadioTechnology.wLAN = PC5RadioTechnology.wLAN; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary wLAN
 * @description
 *
 * WLAN. See `PC5RadioTechnology_wLAN`.
 *
 * @constant
 * @type {number}
 */
export
const wLAN: _enum_for_PC5RadioTechnology.wLAN = PC5RadioTechnology.wLAN; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PC5RadioTechnology_bothEUTRAAndWLAN
 * @description
 *
 * The UE uses both E-UTRA and WLAN for this Direct Discovery.
 *
 * 3GPP TS 32.277 V19.2.0 clause 5.1.2.1.
 *
 * @constant
 * @type {number}
 */
export
const PC5RadioTechnology_bothEUTRAAndWLAN: _enum_for_PC5RadioTechnology.bothEUTRAAndWLAN = PC5RadioTechnology.bothEUTRAAndWLAN; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary bothEUTRAAndWLAN
 * @description
 *
 * Both E-UTRA and WLAN. See `PC5RadioTechnology_bothEUTRAAndWLAN`.
 *
 * @constant
 * @type {number}
 */
export
const bothEUTRAAndWLAN: _enum_for_PC5RadioTechnology.bothEUTRAAndWLAN = PC5RadioTechnology.bothEUTRAAndWLAN; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_PC5RadioTechnology: $.ASN1Decoder<PC5RadioTechnology> = $._decodeEnumerated;

export
const _encode_PC5RadioTechnology: $.ASN1Encoder<PC5RadioTechnology> = $._encodeEnumerated;

/* eslint-enable */
