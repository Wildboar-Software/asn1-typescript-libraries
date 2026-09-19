/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary UICCCapability
 * @description
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
 * @constant
 */
export
const UICCCapability_contactlessSupport: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary contactlessSupport
 * @constant
 */
export
const contactlessSupport: number = UICCCapability_contactlessSupport; /* SHORT_NAMED_BIT */

/**
 * @summary UICCCapability_usimSupport
 * @constant
 */
export
const UICCCapability_usimSupport: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary usimSupport
 * @constant
 */
export
const usimSupport: number = UICCCapability_usimSupport; /* SHORT_NAMED_BIT */

/**
 * @summary UICCCapability_isimSupport
 * @constant
 */
export
const UICCCapability_isimSupport: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary isimSupport
 * @constant
 */
export
const isimSupport: number = UICCCapability_isimSupport; /* SHORT_NAMED_BIT */

/**
 * @summary UICCCapability_csimSupport
 * @constant
 */
export
const UICCCapability_csimSupport: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary csimSupport
 * @constant
 */
export
const csimSupport: number = UICCCapability_csimSupport; /* SHORT_NAMED_BIT */

/**
 * @summary UICCCapability_akaMilenage
 * @constant
 */
export
const UICCCapability_akaMilenage: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary akaMilenage
 * @constant
 */
export
const akaMilenage: number = UICCCapability_akaMilenage; /* SHORT_NAMED_BIT */

/**
 * @summary UICCCapability_akaCave
 * @constant
 */
export
const UICCCapability_akaCave: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary akaCave
 * @constant
 */
export
const akaCave: number = UICCCapability_akaCave; /* SHORT_NAMED_BIT */

/**
 * @summary UICCCapability_akaTuak128
 * @constant
 */
export
const UICCCapability_akaTuak128: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary akaTuak128
 * @constant
 */
export
const akaTuak128: number = UICCCapability_akaTuak128; /* SHORT_NAMED_BIT */

/**
 * @summary UICCCapability_akaTuak256
 * @constant
 */
export
const UICCCapability_akaTuak256: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary akaTuak256
 * @constant
 */
export
const akaTuak256: number = UICCCapability_akaTuak256; /* SHORT_NAMED_BIT */

/**
 * @summary UICCCapability_usimTestAlgorithm
 * @constant
 */
export
const UICCCapability_usimTestAlgorithm: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary usimTestAlgorithm
 * @constant
 */
export
const usimTestAlgorithm: number = UICCCapability_usimTestAlgorithm; /* SHORT_NAMED_BIT */

/**
 * @summary UICCCapability_rfu2
 * @constant
 */
export
const UICCCapability_rfu2: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary rfu2
 * @constant
 */
export
const rfu2: number = UICCCapability_rfu2; /* SHORT_NAMED_BIT */

/**
 * @summary UICCCapability_gbaAuthenUsim
 * @constant
 */
export
const UICCCapability_gbaAuthenUsim: number = 10; /* LONG_NAMED_BIT */

/**
 * @summary gbaAuthenUsim
 * @constant
 */
export
const gbaAuthenUsim: number = UICCCapability_gbaAuthenUsim; /* SHORT_NAMED_BIT */

/**
 * @summary UICCCapability_gbaAuthenISim
 * @constant
 */
export
const UICCCapability_gbaAuthenISim: number = 11; /* LONG_NAMED_BIT */

/**
 * @summary gbaAuthenISim
 * @constant
 */
export
const gbaAuthenISim: number = UICCCapability_gbaAuthenISim; /* SHORT_NAMED_BIT */

/**
 * @summary UICCCapability_mbmsAuthenUsim
 * @constant
 */
export
const UICCCapability_mbmsAuthenUsim: number = 12; /* LONG_NAMED_BIT */

/**
 * @summary mbmsAuthenUsim
 * @constant
 */
export
const mbmsAuthenUsim: number = UICCCapability_mbmsAuthenUsim; /* SHORT_NAMED_BIT */

/**
 * @summary UICCCapability_eapClient
 * @constant
 */
export
const UICCCapability_eapClient: number = 13; /* LONG_NAMED_BIT */

/**
 * @summary eapClient
 * @constant
 */
export
const eapClient: number = UICCCapability_eapClient; /* SHORT_NAMED_BIT */

/**
 * @summary UICCCapability_javacard
 * @constant
 */
export
const UICCCapability_javacard: number = 14; /* LONG_NAMED_BIT */

/**
 * @summary javacard
 * @constant
 */
export
const javacard: number = UICCCapability_javacard; /* SHORT_NAMED_BIT */

/**
 * @summary UICCCapability_multos
 * @constant
 */
export
const UICCCapability_multos: number = 15; /* LONG_NAMED_BIT */

/**
 * @summary multos
 * @constant
 */
export
const multos: number = UICCCapability_multos; /* SHORT_NAMED_BIT */

/**
 * @summary UICCCapability_multipleUsimSupport
 * @constant
 */
export
const UICCCapability_multipleUsimSupport: number = 16; /* LONG_NAMED_BIT */

/**
 * @summary multipleUsimSupport
 * @constant
 */
export
const multipleUsimSupport: number = UICCCapability_multipleUsimSupport; /* SHORT_NAMED_BIT */

/**
 * @summary UICCCapability_multipleIsimSupport
 * @constant
 */
export
const UICCCapability_multipleIsimSupport: number = 17; /* LONG_NAMED_BIT */

/**
 * @summary multipleIsimSupport
 * @constant
 */
export
const multipleIsimSupport: number = UICCCapability_multipleIsimSupport; /* SHORT_NAMED_BIT */

/**
 * @summary UICCCapability_multipleCsimSupport
 * @constant
 */
export
const UICCCapability_multipleCsimSupport: number = 18; /* LONG_NAMED_BIT */

/**
 * @summary multipleCsimSupport
 * @constant
 */
export
const multipleCsimSupport: number = UICCCapability_multipleCsimSupport; /* SHORT_NAMED_BIT */

/**
 * @summary UICCCapability_berTlvFileSupport
 * @constant
 */
export
const UICCCapability_berTlvFileSupport: number = 19; /* LONG_NAMED_BIT */

/**
 * @summary berTlvFileSupport
 * @constant
 */
export
const berTlvFileSupport: number = UICCCapability_berTlvFileSupport; /* SHORT_NAMED_BIT */

/**
 * @summary UICCCapability_dfLinkSupport
 * @constant
 */
export
const UICCCapability_dfLinkSupport: number = 20; /* LONG_NAMED_BIT */

/**
 * @summary dfLinkSupport
 * @constant
 */
export
const dfLinkSupport: number = UICCCapability_dfLinkSupport; /* SHORT_NAMED_BIT */

/**
 * @summary UICCCapability_catTp
 * @constant
 */
export
const UICCCapability_catTp: number = 21; /* LONG_NAMED_BIT */

/**
 * @summary catTp
 * @constant
 */
export
const catTp: number = UICCCapability_catTp; /* SHORT_NAMED_BIT */

/**
 * @summary UICCCapability_getIdentity
 * @constant
 */
export
const UICCCapability_getIdentity: number = 22; /* LONG_NAMED_BIT */

/**
 * @summary getIdentity
 * @constant
 */
export
const getIdentity: number = UICCCapability_getIdentity; /* SHORT_NAMED_BIT */

/**
 * @summary UICCCapability_profile_a_x25519
 * @constant
 */
export
const UICCCapability_profile_a_x25519: number = 23; /* LONG_NAMED_BIT */

/**
 * @summary profile_a_x25519
 * @constant
 */
export
const profile_a_x25519: number = UICCCapability_profile_a_x25519; /* SHORT_NAMED_BIT */

/**
 * @summary UICCCapability_profile_b_p256
 * @constant
 */
export
const UICCCapability_profile_b_p256: number = 24; /* LONG_NAMED_BIT */

/**
 * @summary profile_b_p256
 * @constant
 */
export
const profile_b_p256: number = UICCCapability_profile_b_p256; /* SHORT_NAMED_BIT */

/**
 * @summary UICCCapability_suciCalculatorApi
 * @constant
 */
export
const UICCCapability_suciCalculatorApi: number = 25; /* LONG_NAMED_BIT */

/**
 * @summary suciCalculatorApi
 * @constant
 */
export
const suciCalculatorApi: number = UICCCapability_suciCalculatorApi; /* SHORT_NAMED_BIT */

/**
 * @summary UICCCapability_dns_resolution
 * @constant
 */
export
const UICCCapability_dns_resolution: number = 26; /* LONG_NAMED_BIT */

/**
 * @summary dns_resolution
 * @constant
 */
export
const dns_resolution: number = UICCCapability_dns_resolution; /* SHORT_NAMED_BIT */

/**
 * @summary UICCCapability_scp11ac
 * @constant
 */
export
const UICCCapability_scp11ac: number = 27; /* LONG_NAMED_BIT */

/**
 * @summary scp11ac
 * @constant
 */
export
const scp11ac: number = UICCCapability_scp11ac; /* SHORT_NAMED_BIT */

/**
 * @summary UICCCapability_scp11c_authorization_mechanism
 * @constant
 */
export
const UICCCapability_scp11c_authorization_mechanism: number = 28; /* LONG_NAMED_BIT */

/**
 * @summary scp11c_authorization_mechanism
 * @constant
 */
export
const scp11c_authorization_mechanism: number = UICCCapability_scp11c_authorization_mechanism; /* SHORT_NAMED_BIT */

/**
 * @summary UICCCapability_s16mode
 * @constant
 */
export
const UICCCapability_s16mode: number = 29; /* LONG_NAMED_BIT */

/**
 * @summary s16mode
 * @constant
 */
export
const s16mode: number = UICCCapability_s16mode; /* SHORT_NAMED_BIT */

/**
 * @summary UICCCapability_eaka
 * @constant
 */
export
const UICCCapability_eaka: number = 30; /* LONG_NAMED_BIT */

/**
 * @summary eaka
 * @constant
 */
export
const eaka: number = UICCCapability_eaka; /* SHORT_NAMED_BIT */

/**
 * @summary UICCCapability_iotminimal
 * @constant
 */
export
const UICCCapability_iotminimal: number = 31; /* LONG_NAMED_BIT */

/**
 * @summary iotminimal
 * @constant
 */
export
const iotminimal: number = UICCCapability_iotminimal; /* SHORT_NAMED_BIT */

let _cached_decoder_for_UICCCapability: $.ASN1Decoder<UICCCapability> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UICCCapability
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_UICCCapability (el: _Element): UICCCapability {
    if (!_cached_decoder_for_UICCCapability) { _cached_decoder_for_UICCCapability = $._decodeBitString; }
    return _cached_decoder_for_UICCCapability(el);
}

let _cached_encoder_for_UICCCapability: $.ASN1Encoder<UICCCapability> | null = null;

/**
 * @summary Encodes a(n) UICCCapability into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UICCCapability, encoded as an ASN.1 Element.
 */
export
function _encode_UICCCapability (value: UICCCapability, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_UICCCapability) { _cached_encoder_for_UICCCapability = $._encodeBitString; }
    return _cached_encoder_for_UICCCapability(value, elGetter);
}


/* eslint-enable */
