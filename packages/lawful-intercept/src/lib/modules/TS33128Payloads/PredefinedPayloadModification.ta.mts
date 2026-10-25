/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PredefinedPayloadModification
 * @description
 * 
 * The PredefinedPayloadModification shall be set to indicate which predefined
 * payload modification profile was used on the reported modified payload.
 *
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PredefinedPayloadModification  ::=  ENUMERATED
 * {
 *     pANILocationRemoval(1),
 *     cNILocationRemoval(2),
 *     sIPGeolocationInfoRemoval(3),
 *     presenceInformationLocationRemoval(4),
 *     tS33128SMSTPDURedaction(5),
 *     tS33128TruncatedSMSTPDU(6),
 *     iMSTextContentRemoval(7),
 *     iMSSubjectContentRemoval(8),
 *     rCSPresenceLocationRemoval(9),
 *     rCSCPIMLocationRemoval(10),
 *     rCSTextContentRemoval(11),
 *     rCSSubjectContentRemoval(12),
 *     rCSGeolocationPUSHContentRemoval(13),
 *     rCSFileURLContentRemoval(14),
 *     threeGPP2SMSUserDataRedaction(15)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_PredefinedPayloadModification {
    /**
     * @description
     *
     * Shall be selected if location information was redacted from an
     * encapsulated P-Access-Network-Info header using the process described in
     * clause 7.12.9.2.2.
     */
    pANILocationRemoval = 1,
    /**
     * @description
     *
     * Shall be selected if location information was redacted from an
     * encapsulated Cellular-Network-Info header using the process described in
     * clause 7.12.9.2.3.
     */
    cNILocationRemoval = 2,
    /**
     * @description
     *
     * Shall be selected if location information was redacted due to the
     * presence of a Geolocation header using the process described in clause
     * 7.12.9.2.4.
     */
    sIPGeolocationInfoRemoval = 3,
    /**
     * @description
     *
     * Shall be selected if location information was redacted from the geopriv
     * element of an encapsulated presence information document using the
     * process described in clause 7.12.9.2.5.
     */
    presenceInformationLocationRemoval = 4,
    /**
     * @description
     *
     * Shall be selected if content is redacted from an encapsulated SMS TPDU
     * using the process described in clause 7.4.5.2.
     */
    tS33128SMSTPDURedaction = 5,
    /**
     * @description
     *
     * Shall be selected if content is removed from an encapsulated SMS TPDU
     * using the process described in clause 6.2.5.3.
     */
    tS33128TruncatedSMSTPDU = 6,
    /**
     * @description
     *
     * Shall be selected if content is redacted from an encapsulated SIP message
     * using the process described in clause 7.12.9.3.3.
     */
    iMSTextContentRemoval = 7,
    /**
     * @description
     *
     * Sall be selected if content is redacted from an encapsulated SIP message
     * using the process described in clause 7.12.9.3.4.
     */
    iMSSubjectContentRemoval = 8,
    /**
     * @description
     *
     * Shall be selected if location is redacted from the geopriv element of an
     * encapsulated presence information document using the process described in
     * clause 7.13.5.2.2.
     */
    rCSPresenceLocationRemoval = 9,
    /**
     * @description
     *
     * Shall be selected if location in the form of a P-Access-Network-Info
     * header is redacted from application specific CPIM headers using the
     * process described in clause 7.13.5.2.3.
     */
    rCSCPIMLocationRemoval = 10,
    /**
     * @description
     *
     * Shall be selected if text content is removed from the an RCS message.
     */
    rCSTextContentRemoval = 11,
    /**
     * @description
     *
     * Shall be selected if content is removed from the Subject header of a
     * layer of an RCS Message using the process described in clause 7.13.5.3.3.
     */
    rCSSubjectContentRemoval = 12,
    /**
     * @description
     *
     * Shall be selected if content is removed from an RCS Geolocation PUSH
     * message using the process described in clause 7.13.5.3.4.
     */
    rCSGeolocationPUSHContentRemoval = 13,
    rCSFileURLContentRemoval = 14,
    threeGPP2SMSUserDataRedaction = 15,
}

/**
 * @summary PredefinedPayloadModification
 * @description
 * 
 * The PredefinedPayloadModification shall be set to indicate which predefined
 * payload modification profile was used on the reported modified payload.
 *
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PredefinedPayloadModification  ::=  ENUMERATED
 * {
 *     pANILocationRemoval(1),
 *     cNILocationRemoval(2),
 *     sIPGeolocationInfoRemoval(3),
 *     presenceInformationLocationRemoval(4),
 *     tS33128SMSTPDURedaction(5),
 *     tS33128TruncatedSMSTPDU(6),
 *     iMSTextContentRemoval(7),
 *     iMSSubjectContentRemoval(8),
 *     rCSPresenceLocationRemoval(9),
 *     rCSCPIMLocationRemoval(10),
 *     rCSTextContentRemoval(11),
 *     rCSSubjectContentRemoval(12),
 *     rCSGeolocationPUSHContentRemoval(13),
 *     rCSFileURLContentRemoval(14),
 *     threeGPP2SMSUserDataRedaction(15)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type PredefinedPayloadModification = _enum_for_PredefinedPayloadModification;

/**
 * @summary PredefinedPayloadModification
 * @description
 * 
 * The PredefinedPayloadModification shall be set to indicate which predefined
 * payload modification profile was used on the reported modified payload.
 *
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PredefinedPayloadModification  ::=  ENUMERATED
 * {
 *     pANILocationRemoval(1),
 *     cNILocationRemoval(2),
 *     sIPGeolocationInfoRemoval(3),
 *     presenceInformationLocationRemoval(4),
 *     tS33128SMSTPDURedaction(5),
 *     tS33128TruncatedSMSTPDU(6),
 *     iMSTextContentRemoval(7),
 *     iMSSubjectContentRemoval(8),
 *     rCSPresenceLocationRemoval(9),
 *     rCSCPIMLocationRemoval(10),
 *     rCSTextContentRemoval(11),
 *     rCSSubjectContentRemoval(12),
 *     rCSGeolocationPUSHContentRemoval(13),
 *     rCSFileURLContentRemoval(14),
 *     threeGPP2SMSUserDataRedaction(15)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const PredefinedPayloadModification = _enum_for_PredefinedPayloadModification;

/**
 * @summary PredefinedPayloadModification_pANILocationRemoval
 * @description
 *
 * Shall be selected if location information was redacted from an encapsulated
 * P-Access-Network-Info header using the process described in clause
 * 7.12.9.2.2.
 *
 * @constant
 * @type {number}
 */
export
const PredefinedPayloadModification_pANILocationRemoval = PredefinedPayloadModification.pANILocationRemoval; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pANILocationRemoval
 * @description
 *
 * Shall be selected if location information was redacted from an encapsulated
 * P-Access-Network-Info header using the process described in clause
 * 7.12.9.2.2.
 *
 * @constant
 * @type {number}
 */
export
const pANILocationRemoval = PredefinedPayloadModification.pANILocationRemoval; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PredefinedPayloadModification_cNILocationRemoval
 * @description
 *
 * Shall be selected if location information was redacted from an encapsulated
 * Cellular-Network-Info header using the process described in clause
 * 7.12.9.2.3.
 *
 * @constant
 * @type {number}
 */
export
const PredefinedPayloadModification_cNILocationRemoval = PredefinedPayloadModification.cNILocationRemoval; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cNILocationRemoval
 * @description
 *
 * Shall be selected if location information was redacted from an encapsulated
 * Cellular-Network-Info header using the process described in clause
 * 7.12.9.2.3.
 *
 * @constant
 * @type {number}
 */
export
const cNILocationRemoval = PredefinedPayloadModification.cNILocationRemoval; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PredefinedPayloadModification_sIPGeolocationInfoRemoval
 * @description
 *
 * Shall be selected if location information was redacted due to the presence of
 * a Geolocation header using the process described in clause 7.12.9.2.4.
 *
 * @constant
 * @type {number}
 */
export
const PredefinedPayloadModification_sIPGeolocationInfoRemoval = PredefinedPayloadModification.sIPGeolocationInfoRemoval; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sIPGeolocationInfoRemoval
 * @description
 *
 * Shall be selected if location information was redacted due to the presence of
 * a Geolocation header using the process described in clause 7.12.9.2.4.
 *
 * @constant
 * @type {number}
 */
export
const sIPGeolocationInfoRemoval = PredefinedPayloadModification.sIPGeolocationInfoRemoval; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PredefinedPayloadModification_presenceInformationLocationRemoval
 * @description
 *
 * Shall be selected if location information was redacted from the geopriv
 * element of an encapsulated presence information document using the process
 * described in clause 7.12.9.2.5.
 *
 * @constant
 * @type {number}
 */
export
const PredefinedPayloadModification_presenceInformationLocationRemoval = PredefinedPayloadModification.presenceInformationLocationRemoval; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary presenceInformationLocationRemoval
 * @description
 *
 * Shall be selected if location information was redacted from the geopriv
 * element of an encapsulated presence information document using the process
 * described in clause 7.12.9.2.5.
 *
 * @constant
 * @type {number}
 */
export
const presenceInformationLocationRemoval = PredefinedPayloadModification.presenceInformationLocationRemoval; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PredefinedPayloadModification_tS33128SMSTPDURedaction
 * @description
 *
 * Shall be selected if content is redacted from an encapsulated SMS TPDU using
 * the process described in clause 7.4.5.2.
 *
 * @constant
 * @type {number}
 */
export
const PredefinedPayloadModification_tS33128SMSTPDURedaction = PredefinedPayloadModification.tS33128SMSTPDURedaction; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tS33128SMSTPDURedaction
 * @description
 *
 * Shall be selected if content is redacted from an encapsulated SMS TPDU using
 * the process described in clause 7.4.5.2.
 *
 * @constant
 * @type {number}
 */
export
const tS33128SMSTPDURedaction = PredefinedPayloadModification.tS33128SMSTPDURedaction; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PredefinedPayloadModification_tS33128TruncatedSMSTPDU
 * @description
 *
 * Shall be selected if content is removed from an encapsulated SMS TPDU using
 * the process described in clause 6.2.5.3.
 *
 * @constant
 * @type {number}
 */
export
const PredefinedPayloadModification_tS33128TruncatedSMSTPDU = PredefinedPayloadModification.tS33128TruncatedSMSTPDU; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tS33128TruncatedSMSTPDU
 * @description
 *
 * Shall be selected if content is removed from an encapsulated SMS TPDU using
 * the process described in clause 6.2.5.3.
 *
 * @constant
 * @type {number}
 */
export
const tS33128TruncatedSMSTPDU = PredefinedPayloadModification.tS33128TruncatedSMSTPDU; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PredefinedPayloadModification_iMSTextContentRemoval
 * @description
 *
 * Shall be selected if content is redacted from an encapsulated SIP message
 * using the process described in clause 7.12.9.3.3.
 *
 * @constant
 * @type {number}
 */
export
const PredefinedPayloadModification_iMSTextContentRemoval = PredefinedPayloadModification.iMSTextContentRemoval; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary iMSTextContentRemoval
 * @description
 *
 * Shall be selected if content is redacted from an encapsulated SIP message
 * using the process described in clause 7.12.9.3.3.
 *
 * @constant
 * @type {number}
 */
export
const iMSTextContentRemoval = PredefinedPayloadModification.iMSTextContentRemoval; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PredefinedPayloadModification_iMSSubjectContentRemoval
 * @description
 *
 * Sall be selected if content is redacted from an encapsulated SIP message
 * using the process described in clause 7.12.9.3.4.
 *
 * @constant
 * @type {number}
 */
export
const PredefinedPayloadModification_iMSSubjectContentRemoval = PredefinedPayloadModification.iMSSubjectContentRemoval; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary iMSSubjectContentRemoval
 * @description
 *
 * Sall be selected if content is redacted from an encapsulated SIP message
 * using the process described in clause 7.12.9.3.4.
 *
 * @constant
 * @type {number}
 */
export
const iMSSubjectContentRemoval = PredefinedPayloadModification.iMSSubjectContentRemoval; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PredefinedPayloadModification_rCSPresenceLocationRemoval
 * @description
 *
 * Shall be selected if location is redacted from the geopriv element of an
 * encapsulated presence information document using the process described in
 * clause 7.13.5.2.2.
 *
 * @constant
 * @type {number}
 */
export
const PredefinedPayloadModification_rCSPresenceLocationRemoval = PredefinedPayloadModification.rCSPresenceLocationRemoval; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary rCSPresenceLocationRemoval
 * @description
 *
 * Shall be selected if location is redacted from the geopriv element of an
 * encapsulated presence information document using the process described in
 * clause 7.13.5.2.2.
 *
 * @constant
 * @type {number}
 */
export
const rCSPresenceLocationRemoval = PredefinedPayloadModification.rCSPresenceLocationRemoval; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PredefinedPayloadModification_rCSCPIMLocationRemoval
 * @description
 *
 * Shall be selected if location in the form of a P-Access-Network-Info header
 * is redacted from application specific CPIM headers using the process
 * described in clause 7.13.5.2.3.
 *
 * @constant
 * @type {number}
 */
export
const PredefinedPayloadModification_rCSCPIMLocationRemoval = PredefinedPayloadModification.rCSCPIMLocationRemoval; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary rCSCPIMLocationRemoval
 * @description
 *
 * Shall be selected if location in the form of a P-Access-Network-Info header
 * is redacted from application specific CPIM headers using the process
 * described in clause 7.13.5.2.3.
 *
 * @constant
 * @type {number}
 */
export
const rCSCPIMLocationRemoval = PredefinedPayloadModification.rCSCPIMLocationRemoval; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PredefinedPayloadModification_rCSTextContentRemoval
 * @description
 *
 * Shall be selected if text content is removed from the an RCS message.
 *
 * @constant
 * @type {number}
 */
export
const PredefinedPayloadModification_rCSTextContentRemoval = PredefinedPayloadModification.rCSTextContentRemoval; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary rCSTextContentRemoval
 * @description
 *
 * Shall be selected if text content is removed from the an RCS message.
 *
 * @constant
 * @type {number}
 */
export
const rCSTextContentRemoval = PredefinedPayloadModification.rCSTextContentRemoval; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PredefinedPayloadModification_rCSSubjectContentRemoval
 * @description
 *
 * Shall be selected if content is removed from the Subject header of a layer of
 * an RCS Message using the process described in clause 7.13.5.3.3.
 *
 * @constant
 * @type {number}
 */
export
const PredefinedPayloadModification_rCSSubjectContentRemoval = PredefinedPayloadModification.rCSSubjectContentRemoval; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary rCSSubjectContentRemoval
 * @description
 *
 * Shall be selected if content is removed from the Subject header of a layer of
 * an RCS Message using the process described in clause 7.13.5.3.3.
 *
 * @constant
 * @type {number}
 */
export
const rCSSubjectContentRemoval = PredefinedPayloadModification.rCSSubjectContentRemoval; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PredefinedPayloadModification_rCSGeolocationPUSHContentRemoval
 * @description
 *
 * Shall be selected if content is removed from an RCS Geolocation PUSH message
 * using the process described in clause 7.13.5.3.4.
 *
 * @constant
 * @type {number}
 */
export
const PredefinedPayloadModification_rCSGeolocationPUSHContentRemoval = PredefinedPayloadModification.rCSGeolocationPUSHContentRemoval; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary rCSGeolocationPUSHContentRemoval
 * @description
 *
 * Shall be selected if content is removed from an RCS Geolocation PUSH message
 * using the process described in clause 7.13.5.3.4.
 *
 * @constant
 * @type {number}
 */
export
const rCSGeolocationPUSHContentRemoval = PredefinedPayloadModification.rCSGeolocationPUSHContentRemoval; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PredefinedPayloadModification_rCSFileURLContentRemoval
 * @constant
 * @type {number}
 */
export
const PredefinedPayloadModification_rCSFileURLContentRemoval = PredefinedPayloadModification.rCSFileURLContentRemoval; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary rCSFileURLContentRemoval
 * @constant
 * @type {number}
 */
export
const rCSFileURLContentRemoval = PredefinedPayloadModification.rCSFileURLContentRemoval; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PredefinedPayloadModification_threeGPP2SMSUserDataRedaction
 * @constant
 * @type {number}
 */
export
const PredefinedPayloadModification_threeGPP2SMSUserDataRedaction = PredefinedPayloadModification.threeGPP2SMSUserDataRedaction; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary threeGPP2SMSUserDataRedaction
 * @constant
 * @type {number}
 */
export
const threeGPP2SMSUserDataRedaction = PredefinedPayloadModification.threeGPP2SMSUserDataRedaction; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_PredefinedPayloadModification: $.ASN1Decoder<PredefinedPayloadModification> = $._decodeEnumerated;
export const _encode_PredefinedPayloadModification: $.ASN1Encoder<PredefinedPayloadModification> = $._encodeEnumerated;


/* eslint-enable */
