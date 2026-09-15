/* eslint-disable */
import {
    BIT_STRING,
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
 * @summary CommunicationMode
 * @description
 * 
 * Physical interface for an access-control rule (ISO/IEC 7816-4 transport
 * type). If the IFD cannot provide the mode, the related `SecurityFileOrObject`
 * may be inaccessible. ISO/IEC 7816-15:2016 §8.2.8, §7.4.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CommunicationMode  ::=  BIT STRING {
 *     contact     (0),
 *     contactLess (1),
 *     usb         (2),
 *     nfc         (3),
 *     contactC6   (4)
 * }
 * ```
 */
export
type CommunicationMode = BIT_STRING;

/**
 * @summary CommunicationMode_contact
 * @description
 * Contacts (ISO/IEC 7816-3). ISO/IEC 7816-15:2016 §8.2.8.
 * @constant
 */
export
const CommunicationMode_contact: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary contact
 * @constant
 */
export
const contact: number = CommunicationMode_contact; /* SHORT_NAMED_BIT */

/**
 * @summary CommunicationMode_contactLess
 * @description
 * Proximity (ISO/IEC 14443). ISO/IEC 7816-15:2016 §8.2.8.
 * @constant
 */
export
const CommunicationMode_contactLess: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary contactLess
 * @constant
 */
export
const contactLess: number = CommunicationMode_contactLess; /* SHORT_NAMED_BIT */

/**
 * @summary CommunicationMode_usb
 * @description
 * USB (ISO/IEC 7816-12). ISO/IEC 7816-15:2016 §8.2.8.
 * @constant
 */
export
const CommunicationMode_usb: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary usb
 * @constant
 */
export
const usb: number = CommunicationMode_usb; /* SHORT_NAMED_BIT */

/**
 * @summary CommunicationMode_nfc
 * @description
 * NFC (ISO/IEC 18092). ISO/IEC 7816-15:2016 §8.2.8.
 * @constant
 */
export
const CommunicationMode_nfc: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary nfc
 * @constant
 */
export
const nfc: number = CommunicationMode_nfc; /* SHORT_NAMED_BIT */

/**
 * @summary CommunicationMode_contactC6
 * @description
 * Legacy contact C6 programming voltage (ISO/IEC 7816-3). ISO/IEC 7816-15:2016
 * §8.2.8.
 * @constant
 */
export
const CommunicationMode_contactC6: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary contactC6
 * @constant
 */
export
const contactC6: number = CommunicationMode_contactC6; /* SHORT_NAMED_BIT */
export const _decode_CommunicationMode = $._decodeBitString;
export const _encode_CommunicationMode = $._encodeBitString;


/* eslint-enable */
