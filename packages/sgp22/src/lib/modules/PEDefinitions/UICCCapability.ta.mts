/* eslint-disable */
import {
    ASN1Element as _Element,
    BIT_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary UICCCapability
 * @description
 * 
 * UICC features the eUICC reports in `EUICCInfo2`, for the SM-DP+ eligibility
 * check (SGP.22 v3.1 §4.3 and Annex F). The bit assignments come from
 * PEDefinitions, which SGP.22 Annex H imports. Bits the eUICC does not set are
 * capabilities the Profile must not require.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UICCCapability  ::=  BIT STRING {
 *     contactlessSupport(0),     -- Contactless (SWP, HCI and associated APIs)
 *     usimSupport(1),         -- USIM as defined by 3GPP
 *     isimSupport(2),         -- ISIM as defined by 3GPP
 *     csimSupport(3),         -- CSIM as defined by 3GPP2
 * 
 *     akaMilenage(4),         -- Milenage as AKA algorithm
 *     akaCave(5),                -- CAVE as authentication algorithm
 *     akaTuak128(6),             -- TUAK as AKA algorithm with 128 bit key length
 *     akaTuak256(7),             -- TUAK as AKA algorithm with 256 bit key length
 *     usimTestAlgorithm(8),     -- USIM test algorithm
 *     rfu2(9),                     -- reserved for further algorithms
 * 
 *     gbaAuthenUsim(10),    -- GBA authentication in the context of USIM
 *     gbaAuthenISim(11),     -- GBA authentication in the context of ISIM
 *     mbmsAuthenUsim(12),     -- MBMS authentication in the context of USIM
 *     eapClient(13),             -- EAP client
 * 
 *     javacard(14),                -- Java Card(TM) support
 *     multos(15),                -- Multos support
 * 
 *     multipleUsimSupport(16),    -- Multiple USIM applications are supported within the same Profile
 *     multipleIsimSupport(17),    -- Multiple ISIM applications are supported within the same Profile
 *     multipleCsimSupport(18),    -- Multiple CSIM applications are supported within the same Profile
 * 
 *     berTlvFileSupport(19),    -- BER TLV files
 *     dfLinkSupport(20),    -- Linked Directory Files
 *     catTp(21),                    -- Support of CAT TP
 *     getIdentity(22),        -- Support of the GET IDENTITY command as defined in ETSI TS 102 221
 *     profile-a-x25519(23),    -- Support of ECIES Profile A as defined in 3GPP TS 33.501 [87]
 *     profile-b-p256(24),    -- Support of ECIES Profile B as defined in 3GPP TS 33.501 [87]
 *     suciCalculatorApi(25),    -- Support of the associated API for SUCI derivation as defined in 3GPP 31.130 [31.130]
 *     dns-resolution(26),    -- Support of DNS Resolution as defined by GP Amd B
 *     scp11ac(27),            -- Support of GP Amd F SCP11 variants a and c
 *     scp11c-authorization-mechanism(28),    -- Support of SCP11c authorization mechanism (Tag 'BF20')
 *     s16mode(29),            -- Support of S16 mode as defined in GP Amd D and Amd F
 *     eaka(30),                    -- Support of enhanced AKA algorithm as defined in 3GPP TS [33.102]
 *     iotminimal(31)            -- Support of IoT Minimal Profile as described in section 7.5
 * }
 * ```
 */
export
type UICCCapability = BIT_STRING;

/**
 * @summary UICCCapability_contactlessSupport
 * @description
 * 
 * Contactless support: SWP, HCI, and the associated APIs. PEDefinitions,
 * imported by SGP.22 v3.1 Annex H.
 * 
 * @constant
 */
export
const UICCCapability_contactlessSupport: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary contactlessSupport
 * @description
 * 
 * Contactless support: SWP, HCI, and the associated APIs. PEDefinitions,
 * imported by SGP.22 v3.1 Annex H.
 * 
 * @constant
 */
export
const contactlessSupport: number = UICCCapability_contactlessSupport; /* SHORT_NAMED_BIT */

/**
 * @summary UICCCapability_usimSupport
 * @description
 * 
 * USIM as defined by 3GPP. PEDefinitions, imported by SGP.22 v3.1.
 * 
 * @constant
 */
export
const UICCCapability_usimSupport: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary usimSupport
 * @description
 * 
 * USIM as defined by 3GPP. PEDefinitions, imported by SGP.22 v3.1.
 * 
 * @constant
 */
export
const usimSupport: number = UICCCapability_usimSupport; /* SHORT_NAMED_BIT */

/**
 * @summary UICCCapability_isimSupport
 * @description
 * 
 * ISIM as defined by 3GPP. PEDefinitions, imported by SGP.22 v3.1.
 * 
 * @constant
 */
export
const UICCCapability_isimSupport: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary isimSupport
 * @description
 * 
 * ISIM as defined by 3GPP. PEDefinitions, imported by SGP.22 v3.1.
 * 
 * @constant
 */
export
const isimSupport: number = UICCCapability_isimSupport; /* SHORT_NAMED_BIT */

/**
 * @summary UICCCapability_csimSupport
 * @description
 * 
 * CSIM as defined by 3GPP2. PEDefinitions, imported by SGP.22 v3.1.
 * 
 * @constant
 */
export
const UICCCapability_csimSupport: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary csimSupport
 * @description
 * 
 * CSIM as defined by 3GPP2. PEDefinitions, imported by SGP.22 v3.1.
 * 
 * @constant
 */
export
const csimSupport: number = UICCCapability_csimSupport; /* SHORT_NAMED_BIT */

/**
 * @summary UICCCapability_akaMilenage
 * @description
 * 
 * Milenage as an AKA algorithm. PEDefinitions, imported by SGP.22 v3.1.
 * 
 * @constant
 */
export
const UICCCapability_akaMilenage: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary akaMilenage
 * @description
 * 
 * Milenage as an AKA algorithm. PEDefinitions, imported by SGP.22 v3.1.
 * 
 * @constant
 */
export
const akaMilenage: number = UICCCapability_akaMilenage; /* SHORT_NAMED_BIT */

/**
 * @summary UICCCapability_akaCave
 * @description
 * 
 * CAVE as an authentication algorithm. PEDefinitions, imported by SGP.22 v3.1.
 * 
 * @constant
 */
export
const UICCCapability_akaCave: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary akaCave
 * @description
 * 
 * CAVE as an authentication algorithm. PEDefinitions, imported by SGP.22 v3.1.
 * 
 * @constant
 */
export
const akaCave: number = UICCCapability_akaCave; /* SHORT_NAMED_BIT */

/**
 * @summary UICCCapability_akaTuak128
 * @description
 * 
 * TUAK as an AKA algorithm with a 128-bit key. PEDefinitions, imported by
 * SGP.22 v3.1.
 * 
 * @constant
 */
export
const UICCCapability_akaTuak128: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary akaTuak128
 * @description
 * 
 * TUAK as an AKA algorithm with a 128-bit key. PEDefinitions, imported by
 * SGP.22 v3.1.
 * 
 * @constant
 */
export
const akaTuak128: number = UICCCapability_akaTuak128; /* SHORT_NAMED_BIT */

/**
 * @summary UICCCapability_akaTuak256
 * @description
 * 
 * TUAK as an AKA algorithm with a 256-bit key. PEDefinitions, imported by
 * SGP.22 v3.1.
 * 
 * @constant
 */
export
const UICCCapability_akaTuak256: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary akaTuak256
 * @description
 * 
 * TUAK as an AKA algorithm with a 256-bit key. PEDefinitions, imported by
 * SGP.22 v3.1.
 * 
 * @constant
 */
export
const akaTuak256: number = UICCCapability_akaTuak256; /* SHORT_NAMED_BIT */

/**
 * @summary UICCCapability_usimTestAlgorithm
 * @description
 * 
 * USIM test algorithm. PEDefinitions, imported by SGP.22 v3.1.
 * 
 * @constant
 */
export
const UICCCapability_usimTestAlgorithm: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary usimTestAlgorithm
 * @description
 * 
 * USIM test algorithm. PEDefinitions, imported by SGP.22 v3.1.
 * 
 * @constant
 */
export
const usimTestAlgorithm: number = UICCCapability_usimTestAlgorithm; /* SHORT_NAMED_BIT */

/**
 * @summary UICCCapability_rfu2
 * @description
 * 
 * Reserved for a further algorithm. PEDefinitions, imported by SGP.22 v3.1.
 * 
 * @constant
 */
export
const UICCCapability_rfu2: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary rfu2
 * @description
 * 
 * Reserved for a further algorithm. PEDefinitions, imported by SGP.22 v3.1.
 * 
 * @constant
 */
export
const rfu2: number = UICCCapability_rfu2; /* SHORT_NAMED_BIT */

/**
 * @summary UICCCapability_gbaAuthenUsim
 * @description
 * 
 * GBA authentication in a USIM. PEDefinitions, imported by SGP.22 v3.1.
 * 
 * @constant
 */
export
const UICCCapability_gbaAuthenUsim: number = 10; /* LONG_NAMED_BIT */

/**
 * @summary gbaAuthenUsim
 * @description
 * 
 * GBA authentication in a USIM. PEDefinitions, imported by SGP.22 v3.1.
 * 
 * @constant
 */
export
const gbaAuthenUsim: number = UICCCapability_gbaAuthenUsim; /* SHORT_NAMED_BIT */

/**
 * @summary UICCCapability_gbaAuthenISim
 * @description
 * 
 * GBA authentication in an ISIM. PEDefinitions, imported by SGP.22 v3.1.
 * 
 * @constant
 */
export
const UICCCapability_gbaAuthenISim: number = 11; /* LONG_NAMED_BIT */

/**
 * @summary gbaAuthenISim
 * @description
 * 
 * GBA authentication in an ISIM. PEDefinitions, imported by SGP.22 v3.1.
 * 
 * @constant
 */
export
const gbaAuthenISim: number = UICCCapability_gbaAuthenISim; /* SHORT_NAMED_BIT */

/**
 * @summary UICCCapability_mbmsAuthenUsim
 * @description
 * 
 * MBMS authentication in a USIM. PEDefinitions, imported by SGP.22 v3.1.
 * 
 * @constant
 */
export
const UICCCapability_mbmsAuthenUsim: number = 12; /* LONG_NAMED_BIT */

/**
 * @summary mbmsAuthenUsim
 * @description
 * 
 * MBMS authentication in a USIM. PEDefinitions, imported by SGP.22 v3.1.
 * 
 * @constant
 */
export
const mbmsAuthenUsim: number = UICCCapability_mbmsAuthenUsim; /* SHORT_NAMED_BIT */

/**
 * @summary UICCCapability_eapClient
 * @description
 * 
 * EAP client. PEDefinitions, imported by SGP.22 v3.1.
 * 
 * @constant
 */
export
const UICCCapability_eapClient: number = 13; /* LONG_NAMED_BIT */

/**
 * @summary eapClient
 * @description
 * 
 * EAP client. PEDefinitions, imported by SGP.22 v3.1.
 * 
 * @constant
 */
export
const eapClient: number = UICCCapability_eapClient; /* SHORT_NAMED_BIT */

/**
 * @summary UICCCapability_javacard
 * @description
 * 
 * Java Card support. PEDefinitions, imported by SGP.22 v3.1.
 * 
 * @constant
 */
export
const UICCCapability_javacard: number = 14; /* LONG_NAMED_BIT */

/**
 * @summary javacard
 * @description
 * 
 * Java Card support. PEDefinitions, imported by SGP.22 v3.1.
 * 
 * @constant
 */
export
const javacard: number = UICCCapability_javacard; /* SHORT_NAMED_BIT */

/**
 * @summary UICCCapability_multos
 * @description
 * 
 * Multos support. PEDefinitions, imported by SGP.22 v3.1.
 * 
 * @constant
 */
export
const UICCCapability_multos: number = 15; /* LONG_NAMED_BIT */

/**
 * @summary multos
 * @description
 * 
 * Multos support. PEDefinitions, imported by SGP.22 v3.1.
 * 
 * @constant
 */
export
const multos: number = UICCCapability_multos; /* SHORT_NAMED_BIT */

/**
 * @summary UICCCapability_multipleUsimSupport
 * @description
 * 
 * More than one USIM application in the same Profile. PEDefinitions, imported
 * by SGP.22 v3.1.
 * 
 * @constant
 */
export
const UICCCapability_multipleUsimSupport: number = 16; /* LONG_NAMED_BIT */

/**
 * @summary multipleUsimSupport
 * @description
 * 
 * More than one USIM application in the same Profile. PEDefinitions, imported
 * by SGP.22 v3.1.
 * 
 * @constant
 */
export
const multipleUsimSupport: number = UICCCapability_multipleUsimSupport; /* SHORT_NAMED_BIT */

/**
 * @summary UICCCapability_multipleIsimSupport
 * @description
 * 
 * More than one ISIM application in the same Profile. PEDefinitions, imported
 * by SGP.22 v3.1.
 * 
 * @constant
 */
export
const UICCCapability_multipleIsimSupport: number = 17; /* LONG_NAMED_BIT */

/**
 * @summary multipleIsimSupport
 * @description
 * 
 * More than one ISIM application in the same Profile. PEDefinitions, imported
 * by SGP.22 v3.1.
 * 
 * @constant
 */
export
const multipleIsimSupport: number = UICCCapability_multipleIsimSupport; /* SHORT_NAMED_BIT */

/**
 * @summary UICCCapability_multipleCsimSupport
 * @description
 * 
 * More than one CSIM application in the same Profile. PEDefinitions, imported
 * by SGP.22 v3.1.
 * 
 * @constant
 */
export
const UICCCapability_multipleCsimSupport: number = 18; /* LONG_NAMED_BIT */

/**
 * @summary multipleCsimSupport
 * @description
 * 
 * More than one CSIM application in the same Profile. PEDefinitions, imported
 * by SGP.22 v3.1.
 * 
 * @constant
 */
export
const multipleCsimSupport: number = UICCCapability_multipleCsimSupport; /* SHORT_NAMED_BIT */

/**
 * @summary UICCCapability_berTlvFileSupport
 * @description
 * 
 * BER-TLV files. PEDefinitions, imported by SGP.22 v3.1.
 * 
 * @constant
 */
export
const UICCCapability_berTlvFileSupport: number = 19; /* LONG_NAMED_BIT */

/**
 * @summary berTlvFileSupport
 * @description
 * 
 * BER-TLV files. PEDefinitions, imported by SGP.22 v3.1.
 * 
 * @constant
 */
export
const berTlvFileSupport: number = UICCCapability_berTlvFileSupport; /* SHORT_NAMED_BIT */

/**
 * @summary UICCCapability_dfLinkSupport
 * @description
 * 
 * Linked directory files. PEDefinitions, imported by SGP.22 v3.1.
 * 
 * @constant
 */
export
const UICCCapability_dfLinkSupport: number = 20; /* LONG_NAMED_BIT */

/**
 * @summary dfLinkSupport
 * @description
 * 
 * Linked directory files. PEDefinitions, imported by SGP.22 v3.1.
 * 
 * @constant
 */
export
const dfLinkSupport: number = UICCCapability_dfLinkSupport; /* SHORT_NAMED_BIT */

/**
 * @summary UICCCapability_catTp
 * @description
 * 
 * CAT Transport Protocol. PEDefinitions, imported by SGP.22 v3.1.
 * 
 * @constant
 */
export
const UICCCapability_catTp: number = 21; /* LONG_NAMED_BIT */

/**
 * @summary catTp
 * @description
 * 
 * CAT Transport Protocol. PEDefinitions, imported by SGP.22 v3.1.
 * 
 * @constant
 */
export
const catTp: number = UICCCapability_catTp; /* SHORT_NAMED_BIT */

/**
 * @summary UICCCapability_getIdentity
 * @description
 * 
 * GET IDENTITY as defined in ETSI TS 102 221. PEDefinitions, imported by SGP.22
 * v3.1.
 * 
 * @constant
 */
export
const UICCCapability_getIdentity: number = 22; /* LONG_NAMED_BIT */

/**
 * @summary getIdentity
 * @description
 * 
 * GET IDENTITY as defined in ETSI TS 102 221. PEDefinitions, imported by SGP.22
 * v3.1.
 * 
 * @constant
 */
export
const getIdentity: number = UICCCapability_getIdentity; /* SHORT_NAMED_BIT */

/**
 * @summary UICCCapability_profile_a_x25519
 * @description
 * 
 * ECIES Profile A (X25519) as defined in 3GPP TS 33.501. PEDefinitions,
 * imported by SGP.22 v3.1.
 * 
 * @constant
 */
export
const UICCCapability_profile_a_x25519: number = 23; /* LONG_NAMED_BIT */

/**
 * @summary profile_a_x25519
 * @description
 * 
 * ECIES Profile A (X25519) as defined in 3GPP TS 33.501. PEDefinitions,
 * imported by SGP.22 v3.1.
 * 
 * @constant
 */
export
const profile_a_x25519: number = UICCCapability_profile_a_x25519; /* SHORT_NAMED_BIT */

/**
 * @summary UICCCapability_profile_b_p256
 * @description
 * 
 * ECIES Profile B (P-256) as defined in 3GPP TS 33.501. PEDefinitions, imported
 * by SGP.22 v3.1.
 * 
 * @constant
 */
export
const UICCCapability_profile_b_p256: number = 24; /* LONG_NAMED_BIT */

/**
 * @summary profile_b_p256
 * @description
 * 
 * ECIES Profile B (P-256) as defined in 3GPP TS 33.501. PEDefinitions, imported
 * by SGP.22 v3.1.
 * 
 * @constant
 */
export
const profile_b_p256: number = UICCCapability_profile_b_p256; /* SHORT_NAMED_BIT */

/**
 * @summary UICCCapability_suciCalculatorApi
 * @description
 * 
 * API for SUCI derivation as defined in 3GPP TS 31.130. PEDefinitions, imported
 * by SGP.22 v3.1.
 * 
 * @constant
 */
export
const UICCCapability_suciCalculatorApi: number = 25; /* LONG_NAMED_BIT */

/**
 * @summary suciCalculatorApi
 * @description
 * 
 * API for SUCI derivation as defined in 3GPP TS 31.130. PEDefinitions, imported
 * by SGP.22 v3.1.
 * 
 * @constant
 */
export
const suciCalculatorApi: number = UICCCapability_suciCalculatorApi; /* SHORT_NAMED_BIT */

/**
 * @summary UICCCapability_dns_resolution
 * @description
 * 
 * DNS resolution as defined by GlobalPlatform Amendment B. PEDefinitions,
 * imported by SGP.22 v3.1.
 * 
 * @constant
 */
export
const UICCCapability_dns_resolution: number = 26; /* LONG_NAMED_BIT */

/**
 * @summary dns_resolution
 * @description
 * 
 * DNS resolution as defined by GlobalPlatform Amendment B. PEDefinitions,
 * imported by SGP.22 v3.1.
 * 
 * @constant
 */
export
const dns_resolution: number = UICCCapability_dns_resolution; /* SHORT_NAMED_BIT */

/**
 * @summary UICCCapability_scp11ac
 * @description
 * 
 * GlobalPlatform Amendment F SCP11 variants a and c. PEDefinitions, imported by
 * SGP.22 v3.1.
 * 
 * @constant
 */
export
const UICCCapability_scp11ac: number = 27; /* LONG_NAMED_BIT */

/**
 * @summary scp11ac
 * @description
 * 
 * GlobalPlatform Amendment F SCP11 variants a and c. PEDefinitions, imported by
 * SGP.22 v3.1.
 * 
 * @constant
 */
export
const scp11ac: number = UICCCapability_scp11ac; /* SHORT_NAMED_BIT */

/**
 * @summary UICCCapability_scp11c_authorization_mechanism
 * @description
 * 
 * SCP11c authorisation mechanism, tag `'BF20'`. PEDefinitions, imported by
 * SGP.22 v3.1.
 * 
 * @constant
 */
export
const UICCCapability_scp11c_authorization_mechanism: number = 28; /* LONG_NAMED_BIT */

/**
 * @summary scp11c_authorization_mechanism
 * @description
 * 
 * SCP11c authorisation mechanism, tag `'BF20'`. PEDefinitions, imported by
 * SGP.22 v3.1.
 * 
 * @constant
 */
export
const scp11c_authorization_mechanism: number = UICCCapability_scp11c_authorization_mechanism; /* SHORT_NAMED_BIT */

/**
 * @summary UICCCapability_s16mode
 * @description
 * 
 * S16 mode as defined in GlobalPlatform Amendments D and F. PEDefinitions,
 * imported by SGP.22 v3.1.
 * 
 * @constant
 */
export
const UICCCapability_s16mode: number = 29; /* LONG_NAMED_BIT */

/**
 * @summary s16mode
 * @description
 * 
 * S16 mode as defined in GlobalPlatform Amendments D and F. PEDefinitions,
 * imported by SGP.22 v3.1.
 * 
 * @constant
 */
export
const s16mode: number = UICCCapability_s16mode; /* SHORT_NAMED_BIT */

/**
 * @summary UICCCapability_eaka
 * @description
 * 
 * Enhanced AKA as defined in 3GPP TS 33.102. PEDefinitions, imported by SGP.22
 * v3.1.
 * 
 * @constant
 */
export
const UICCCapability_eaka: number = 30; /* LONG_NAMED_BIT */

/**
 * @summary eaka
 * @description
 * 
 * Enhanced AKA as defined in 3GPP TS 33.102. PEDefinitions, imported by SGP.22
 * v3.1.
 * 
 * @constant
 */
export
const eaka: number = UICCCapability_eaka; /* SHORT_NAMED_BIT */

/**
 * @summary UICCCapability_iotminimal
 * @description
 * 
 * IoT minimal Profile. The PEDefinitions comment points at section 7.5 of the
 * eUICC Profile Package specification. SGP.22 v3.1 imports the bit and does not
 * define that section.
 * 
 * @constant
 */
export
const UICCCapability_iotminimal: number = 31; /* LONG_NAMED_BIT */

/**
 * @summary iotminimal
 * @description
 * 
 * IoT minimal Profile. The PEDefinitions comment points at section 7.5 of the
 * eUICC Profile Package specification. SGP.22 v3.1 imports the bit and does not
 * define that section.
 * 
 * @constant
 */
export
const iotminimal: number = UICCCapability_iotminimal; /* SHORT_NAMED_BIT */
export const _decode_UICCCapability = $._decodeBitString;
export const _encode_UICCCapability = $._encodeBitString;


/* eslint-enable */
