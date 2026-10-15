/* eslint-disable */
import {
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


export
enum _enum_for_InternetAccessType {
    /**
     * The ASN.1 assigns no comment. Annex A does not define this value.
     *
     * ETSI TS 102 232-4 V3.8.1 (2025-08), clause 8.1.
     * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223204/03.08.01_60/ts_10223204v030801p.pdf
     */
    undefined = 0,
    /**
     * Internet access by dial-up. Annex B.1.1 uses the PSTN number of the NAS
     * the user dialled as an example of how a RADIUS proxy chooses the IAP.
     *
     * ETSI TS 102 232-4 V3.8.1 (2025-08), annex B.1.1.
     * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223204/03.08.01_60/ts_10223204v030801p.pdf
     */
    dialUp = 1,
    /**
     * Internet access by DSL. Annex A.1.0: when the same company is both
     * access provider and IAP, and the user's PPP session terminates in a
     * gateway to the Internet, the intercepted data may instead be layer 3,
     * as specified in ETSI TS 102 232-3. When the two roles are split, the
     * access provider has only layer 2 information.
     *
     * ETSI TS 102 232-4 V3.8.1 (2025-08), annex A.1.0.
     * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223204/03.08.01_60/ts_10223204v030801p.pdf
     */
    xDSL = 2,
    /**
     * Internet access by cable. Annex A.2 applies the xDSL tunnel scenarios.
     * When the access provider and the IAP are different companies, a layer 2
     * tunnel may be used, and the access provider typically can provide only
     * layer 2 datagrams. Further detail on digital broadband cable
     * interception is in ETSI TS 101 909-20-1 and ETSI TS 101 909-20-2.
     *
     * ETSI TS 102 232-4 V3.8.1 (2025-08), annex A.2.
     * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223204/03.08.01_60/ts_10223204v030801p.pdf
     */
    cableModem = 3,
    /**
     * Internet access by LAN.
     *
     * ETSI TS 102 232-4 V3.8.1 (2025-08), clause 8.1.
     * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223204/03.08.01_60/ts_10223204v030801p.pdf
     */
    lAN = 4,
    /**
     * Internet access by wireless LAN. This value is an extension addition.
     * Annex A.3 says layer 2 interception in the WLAN is for further study.
     *
     * ETSI TS 102 232-4 V3.8.1 (2025-08), annex A.3.
     * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223204/03.08.01_60/ts_10223204v030801p.pdf
     */
    wirelessLAN = 5,
    /**
     * Internet access by fibre. This value is an extension addition.
     *
     * ETSI TS 102 232-4 V3.8.1 (2025-08), clause 8.1.
     * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223204/03.08.01_60/ts_10223204v030801p.pdf
     */
    fTTx = 6,
    /**
     * Internet access by fixed WiMAX/HIPERMAN. This value is an extension
     * addition. The ASN.1 name is `wIMAX-HIPERMAN`.
     *
     * ETSI TS 102 232-4 V3.8.1 (2025-08), clause 8.1.
     * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223204/03.08.01_60/ts_10223204v030801p.pdf
     */
    wIMAX_HIPERMAN = 7,
    /**
     * Internet access by satellite, when that access is not covered by any
     * 3GPP or ETSI mobile lawful-interception specification. This value is an
     * extension addition. Clause 1 note 2 separately says layer 2 interception
     * does not apply to the GSM/UMTS packet-switched domain (3GPP TS 23.060).
     *
     * ETSI TS 102 232-4 V3.8.1 (2025-08), clause 1, clause 8.1.
     * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223204/03.08.01_60/ts_10223204v030801p.pdf
     */
    satellite = 8,
}

/**
 * @summary InternetAccessType
 * @description
 *
 * How the target reaches the Internet Access Service.
 * `L2IRIContents.internetAccessType` carries it. It is conditional on every
 * annex A.1 record when the provider can access it. Those tables name
 * Ethernet, ADSL, cable modem, and LAN as examples.
 *
 * Values from `wirelessLAN` onward are extension additions. Annex A.3 leaves
 * WLAN interception for further study; that does not remove `wirelessLAN`
 * from the enumeration.
 *
 * The short name `undefined` is not re-exported from the module index,
 * because `EndReason` and `L2ProtocolInformation` use the same short name.
 *
 * ETSI TS 102 232-4 V3.8.1 (2025-08), annex A.
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223204/03.08.01_60/ts_10223204v030801p.pdf
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * InternetAccessType ::= ENUMERATED
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
 *     satellite(8)
 *         -- IAS via Satellite access
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
 * The ASN.1 assigns no comment. Annex A does not define this value.
 *
 * ETSI TS 102 232-4 V3.8.1 (2025-08), clause 8.1.
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223204/03.08.01_60/ts_10223204v030801p.pdf
 *
 * @constant
 * @type {number}
 */
export
const InternetAccessType_undefined: InternetAccessType = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary undefined
 * @description
 *
 * The ASN.1 assigns no comment. Annex A does not define this value. Not
 * re-exported from the module index: `EndReason` and
 * `L2ProtocolInformation` use the same short name.
 *
 * ETSI TS 102 232-4 V3.8.1 (2025-08), clause 8.1.
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223204/03.08.01_60/ts_10223204v030801p.pdf
 *
 * @constant
 * @type {number}
 */
export
const undefined: InternetAccessType = InternetAccessType_undefined; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary InternetAccessType_dialUp
 * @description
 *
 * Internet access by dial-up. Annex B.1.1 uses the PSTN number of the NAS
 * the user dialled as an example of how a RADIUS proxy chooses the IAP.
 *
 * ETSI TS 102 232-4 V3.8.1 (2025-08), annex B.1.1.
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223204/03.08.01_60/ts_10223204v030801p.pdf
 *
 * @constant
 * @type {number}
 */
export
const InternetAccessType_dialUp: InternetAccessType = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary dialUp
 * @description
 *
 * Internet access by dial-up. Annex B.1.1 uses the PSTN number of the NAS
 * the user dialled as an example of how a RADIUS proxy chooses the IAP.
 *
 * ETSI TS 102 232-4 V3.8.1 (2025-08), annex B.1.1.
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223204/03.08.01_60/ts_10223204v030801p.pdf
 *
 * @constant
 * @type {number}
 */
export
const dialUp: InternetAccessType = InternetAccessType_dialUp; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary InternetAccessType_xDSL
 * @description
 *
 * Internet access by DSL. Annex A.1.0: when the same company is both access
 * provider and IAP, and the user's PPP session terminates in a gateway to
 * the Internet, the intercepted data may instead be layer 3, as specified in
 * ETSI TS 102 232-3. When the two roles are split, the access provider has
 * only layer 2 information.
 *
 * ETSI TS 102 232-4 V3.8.1 (2025-08), annex A.1.0.
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223204/03.08.01_60/ts_10223204v030801p.pdf
 *
 * @constant
 * @type {number}
 */
export
const InternetAccessType_xDSL: InternetAccessType = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary xDSL
 * @description
 *
 * Internet access by DSL. Annex A.1.0: when the same company is both access
 * provider and IAP, and the user's PPP session terminates in a gateway to
 * the Internet, the intercepted data may instead be layer 3, as specified in
 * ETSI TS 102 232-3. When the two roles are split, the access provider has
 * only layer 2 information.
 *
 * ETSI TS 102 232-4 V3.8.1 (2025-08), annex A.1.0.
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223204/03.08.01_60/ts_10223204v030801p.pdf
 *
 * @constant
 * @type {number}
 */
export
const xDSL: InternetAccessType = InternetAccessType_xDSL; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary InternetAccessType_cableModem
 * @description
 *
 * Internet access by cable. Annex A.2 applies the xDSL tunnel scenarios.
 * When the access provider and the IAP are different companies, a layer 2
 * tunnel may be used, and the access provider typically can provide only
 * layer 2 datagrams. Further detail on digital broadband cable interception
 * is in ETSI TS 101 909-20-1 and ETSI TS 101 909-20-2.
 *
 * ETSI TS 102 232-4 V3.8.1 (2025-08), annex A.2.
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223204/03.08.01_60/ts_10223204v030801p.pdf
 *
 * @constant
 * @type {number}
 */
export
const InternetAccessType_cableModem: InternetAccessType = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cableModem
 * @description
 *
 * Internet access by cable. Annex A.2 applies the xDSL tunnel scenarios.
 * When the access provider and the IAP are different companies, a layer 2
 * tunnel may be used, and the access provider typically can provide only
 * layer 2 datagrams. Further detail on digital broadband cable interception
 * is in ETSI TS 101 909-20-1 and ETSI TS 101 909-20-2.
 *
 * ETSI TS 102 232-4 V3.8.1 (2025-08), annex A.2.
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223204/03.08.01_60/ts_10223204v030801p.pdf
 *
 * @constant
 * @type {number}
 */
export
const cableModem: InternetAccessType = InternetAccessType_cableModem; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary InternetAccessType_lAN
 * @description
 *
 * Internet access by LAN.
 *
 * ETSI TS 102 232-4 V3.8.1 (2025-08), clause 8.1.
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223204/03.08.01_60/ts_10223204v030801p.pdf
 *
 * @constant
 * @type {number}
 */
export
const InternetAccessType_lAN: InternetAccessType = 4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary lAN
 * @description
 *
 * Internet access by LAN.
 *
 * ETSI TS 102 232-4 V3.8.1 (2025-08), clause 8.1.
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223204/03.08.01_60/ts_10223204v030801p.pdf
 *
 * @constant
 * @type {number}
 */
export
const lAN: InternetAccessType = InternetAccessType_lAN; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary InternetAccessType_wirelessLAN
 * @description
 *
 * Internet access by wireless LAN. This value is an extension addition.
 * Annex A.3 says layer 2 interception in the WLAN is for further study.
 *
 * ETSI TS 102 232-4 V3.8.1 (2025-08), annex A.3.
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223204/03.08.01_60/ts_10223204v030801p.pdf
 *
 * @constant
 * @type {number}
 */
export
const InternetAccessType_wirelessLAN: InternetAccessType = 5; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary wirelessLAN
 * @description
 *
 * Internet access by wireless LAN. This value is an extension addition.
 * Annex A.3 says layer 2 interception in the WLAN is for further study.
 *
 * ETSI TS 102 232-4 V3.8.1 (2025-08), annex A.3.
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223204/03.08.01_60/ts_10223204v030801p.pdf
 *
 * @constant
 * @type {number}
 */
export
const wirelessLAN: InternetAccessType = InternetAccessType_wirelessLAN; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary InternetAccessType_fTTx
 * @description
 *
 * Internet access by fibre. This value is an extension addition.
 *
 * ETSI TS 102 232-4 V3.8.1 (2025-08), clause 8.1.
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223204/03.08.01_60/ts_10223204v030801p.pdf
 *
 * @constant
 * @type {number}
 */
export
const InternetAccessType_fTTx: InternetAccessType = 6; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary fTTx
 * @description
 *
 * Internet access by fibre. This value is an extension addition.
 *
 * ETSI TS 102 232-4 V3.8.1 (2025-08), clause 8.1.
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223204/03.08.01_60/ts_10223204v030801p.pdf
 *
 * @constant
 * @type {number}
 */
export
const fTTx: InternetAccessType = InternetAccessType_fTTx; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary InternetAccessType_wIMAX_HIPERMAN
 * @description
 *
 * Internet access by fixed WiMAX/HIPERMAN. This value is an extension
 * addition. The ASN.1 name is `wIMAX-HIPERMAN`.
 *
 * ETSI TS 102 232-4 V3.8.1 (2025-08), clause 8.1.
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223204/03.08.01_60/ts_10223204v030801p.pdf
 *
 * @constant
 * @type {number}
 */
export
const InternetAccessType_wIMAX_HIPERMAN: InternetAccessType = 7; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary wIMAX_HIPERMAN
 * @description
 *
 * Internet access by fixed WiMAX/HIPERMAN. This value is an extension
 * addition. The ASN.1 name is `wIMAX-HIPERMAN`.
 *
 * ETSI TS 102 232-4 V3.8.1 (2025-08), clause 8.1.
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223204/03.08.01_60/ts_10223204v030801p.pdf
 *
 * @constant
 * @type {number}
 */
export
const wIMAX_HIPERMAN: InternetAccessType = InternetAccessType_wIMAX_HIPERMAN; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary InternetAccessType_satellite
 * @description
 *
 * Internet access by satellite, when that access is not covered by any 3GPP
 * or ETSI mobile lawful-interception specification. This value is an
 * extension addition. Clause 1 note 2 separately says layer 2 interception
 * does not apply to the GSM/UMTS packet-switched domain (3GPP TS 23.060).
 *
 * ETSI TS 102 232-4 V3.8.1 (2025-08), clause 1, clause 8.1.
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223204/03.08.01_60/ts_10223204v030801p.pdf
 *
 * @constant
 * @type {number}
 */
export
const InternetAccessType_satellite: InternetAccessType = 8; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary satellite
 * @description
 *
 * Internet access by satellite, when that access is not covered by any 3GPP
 * or ETSI mobile lawful-interception specification. This value is an
 * extension addition. Clause 1 note 2 separately says layer 2 interception
 * does not apply to the GSM/UMTS packet-switched domain (3GPP TS 23.060).
 *
 * ETSI TS 102 232-4 V3.8.1 (2025-08), clause 1, clause 8.1.
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223204/03.08.01_60/ts_10223204v030801p.pdf
 *
 * @constant
 * @type {number}
 */
export
const satellite: InternetAccessType = InternetAccessType_satellite; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_InternetAccessType: $.ASN1Decoder<InternetAccessType> = $._decodeEnumerated;
export const _encode_InternetAccessType: $.ASN1Encoder<InternetAccessType> = $._encodeEnumerated;


/* eslint-enable */
