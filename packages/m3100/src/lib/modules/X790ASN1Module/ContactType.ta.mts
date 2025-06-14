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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';

/* START_OF_SYMBOL_DEFINITION ContactType */
/**
 * @summary ContactType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ContactType  ::=  BIT STRING {
 *   other(0), contacts-for-equipment-related-activities(1),
 *   contacts-for-location-related-activities(2),
 *   contacts-for-circuit-related-activities(3),
 *   contacts-for-provider-related-activities(4),
 *   contacts-for-service-related-activities(5),
 *   contacts-for-facility-related-activities(6),
 *   contacts-for-customer-related-activities(7),
 *   contacts-for-vendor-related-activities(8),
 *   contacts-for-manufacturer-related-activities(9),
 *   contacts-for-software-related-activities(10),
 *   contacts-for-function-related-activities(11)}
 * ```
 */
export type ContactType = BIT_STRING;
/* END_OF_SYMBOL_DEFINITION ContactType */

/* START_OF_SYMBOL_DEFINITION ContactType_other */
/**
 * @summary ContactType_other
 * @constant
 */
export const ContactType_other: number = 0; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION ContactType_other */

/* START_OF_SYMBOL_DEFINITION other */
/**
 * @summary other
 * @constant
 */
export const other: number = ContactType_other; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION other */

/* START_OF_SYMBOL_DEFINITION ContactType_contacts_for_equipment_related_activities */
/**
 * @summary ContactType_contacts_for_equipment_related_activities
 * @constant
 */
export const ContactType_contacts_for_equipment_related_activities: number = 1; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION ContactType_contacts_for_equipment_related_activities */

/* START_OF_SYMBOL_DEFINITION contacts_for_equipment_related_activities */
/**
 * @summary contacts_for_equipment_related_activities
 * @constant
 */
export const contacts_for_equipment_related_activities: number = ContactType_contacts_for_equipment_related_activities; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION contacts_for_equipment_related_activities */

/* START_OF_SYMBOL_DEFINITION ContactType_contacts_for_location_related_activities */
/**
 * @summary ContactType_contacts_for_location_related_activities
 * @constant
 */
export const ContactType_contacts_for_location_related_activities: number = 2; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION ContactType_contacts_for_location_related_activities */

/* START_OF_SYMBOL_DEFINITION contacts_for_location_related_activities */
/**
 * @summary contacts_for_location_related_activities
 * @constant
 */
export const contacts_for_location_related_activities: number = ContactType_contacts_for_location_related_activities; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION contacts_for_location_related_activities */

/* START_OF_SYMBOL_DEFINITION ContactType_contacts_for_circuit_related_activities */
/**
 * @summary ContactType_contacts_for_circuit_related_activities
 * @constant
 */
export const ContactType_contacts_for_circuit_related_activities: number = 3; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION ContactType_contacts_for_circuit_related_activities */

/* START_OF_SYMBOL_DEFINITION contacts_for_circuit_related_activities */
/**
 * @summary contacts_for_circuit_related_activities
 * @constant
 */
export const contacts_for_circuit_related_activities: number = ContactType_contacts_for_circuit_related_activities; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION contacts_for_circuit_related_activities */

/* START_OF_SYMBOL_DEFINITION ContactType_contacts_for_provider_related_activities */
/**
 * @summary ContactType_contacts_for_provider_related_activities
 * @constant
 */
export const ContactType_contacts_for_provider_related_activities: number = 4; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION ContactType_contacts_for_provider_related_activities */

/* START_OF_SYMBOL_DEFINITION contacts_for_provider_related_activities */
/**
 * @summary contacts_for_provider_related_activities
 * @constant
 */
export const contacts_for_provider_related_activities: number = ContactType_contacts_for_provider_related_activities; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION contacts_for_provider_related_activities */

/* START_OF_SYMBOL_DEFINITION ContactType_contacts_for_service_related_activities */
/**
 * @summary ContactType_contacts_for_service_related_activities
 * @constant
 */
export const ContactType_contacts_for_service_related_activities: number = 5; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION ContactType_contacts_for_service_related_activities */

/* START_OF_SYMBOL_DEFINITION contacts_for_service_related_activities */
/**
 * @summary contacts_for_service_related_activities
 * @constant
 */
export const contacts_for_service_related_activities: number = ContactType_contacts_for_service_related_activities; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION contacts_for_service_related_activities */

/* START_OF_SYMBOL_DEFINITION ContactType_contacts_for_facility_related_activities */
/**
 * @summary ContactType_contacts_for_facility_related_activities
 * @constant
 */
export const ContactType_contacts_for_facility_related_activities: number = 6; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION ContactType_contacts_for_facility_related_activities */

/* START_OF_SYMBOL_DEFINITION contacts_for_facility_related_activities */
/**
 * @summary contacts_for_facility_related_activities
 * @constant
 */
export const contacts_for_facility_related_activities: number = ContactType_contacts_for_facility_related_activities; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION contacts_for_facility_related_activities */

/* START_OF_SYMBOL_DEFINITION ContactType_contacts_for_customer_related_activities */
/**
 * @summary ContactType_contacts_for_customer_related_activities
 * @constant
 */
export const ContactType_contacts_for_customer_related_activities: number = 7; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION ContactType_contacts_for_customer_related_activities */

/* START_OF_SYMBOL_DEFINITION contacts_for_customer_related_activities */
/**
 * @summary contacts_for_customer_related_activities
 * @constant
 */
export const contacts_for_customer_related_activities: number = ContactType_contacts_for_customer_related_activities; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION contacts_for_customer_related_activities */

/* START_OF_SYMBOL_DEFINITION ContactType_contacts_for_vendor_related_activities */
/**
 * @summary ContactType_contacts_for_vendor_related_activities
 * @constant
 */
export const ContactType_contacts_for_vendor_related_activities: number = 8; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION ContactType_contacts_for_vendor_related_activities */

/* START_OF_SYMBOL_DEFINITION contacts_for_vendor_related_activities */
/**
 * @summary contacts_for_vendor_related_activities
 * @constant
 */
export const contacts_for_vendor_related_activities: number = ContactType_contacts_for_vendor_related_activities; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION contacts_for_vendor_related_activities */

/* START_OF_SYMBOL_DEFINITION ContactType_contacts_for_manufacturer_related_activities */
/**
 * @summary ContactType_contacts_for_manufacturer_related_activities
 * @constant
 */
export const ContactType_contacts_for_manufacturer_related_activities: number = 9; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION ContactType_contacts_for_manufacturer_related_activities */

/* START_OF_SYMBOL_DEFINITION contacts_for_manufacturer_related_activities */
/**
 * @summary contacts_for_manufacturer_related_activities
 * @constant
 */
export const contacts_for_manufacturer_related_activities: number = ContactType_contacts_for_manufacturer_related_activities; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION contacts_for_manufacturer_related_activities */

/* START_OF_SYMBOL_DEFINITION ContactType_contacts_for_software_related_activities */
/**
 * @summary ContactType_contacts_for_software_related_activities
 * @constant
 */
export const ContactType_contacts_for_software_related_activities: number = 10; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION ContactType_contacts_for_software_related_activities */

/* START_OF_SYMBOL_DEFINITION contacts_for_software_related_activities */
/**
 * @summary contacts_for_software_related_activities
 * @constant
 */
export const contacts_for_software_related_activities: number = ContactType_contacts_for_software_related_activities; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION contacts_for_software_related_activities */

/* START_OF_SYMBOL_DEFINITION ContactType_contacts_for_function_related_activities */
/**
 * @summary ContactType_contacts_for_function_related_activities
 * @constant
 */
export const ContactType_contacts_for_function_related_activities: number = 11; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION ContactType_contacts_for_function_related_activities */

/* START_OF_SYMBOL_DEFINITION contacts_for_function_related_activities */
/**
 * @summary contacts_for_function_related_activities
 * @constant
 */
export const contacts_for_function_related_activities: number = ContactType_contacts_for_function_related_activities; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION contacts_for_function_related_activities */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ContactType */
let _cached_decoder_for_ContactType: $.ASN1Decoder<ContactType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ContactType */

/* START_OF_SYMBOL_DEFINITION _decode_ContactType */
/**
 * @summary Decodes an ASN.1 element into a(n) ContactType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ContactType} The decoded data structure.
 */
export function _decode_ContactType(el: _Element) {
    if (!_cached_decoder_for_ContactType) {
        _cached_decoder_for_ContactType = $._decodeBitString;
    }
    return _cached_decoder_for_ContactType(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ContactType */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ContactType */
let _cached_encoder_for_ContactType: $.ASN1Encoder<ContactType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ContactType */

/* START_OF_SYMBOL_DEFINITION _encode_ContactType */
/**
 * @summary Encodes a(n) ContactType into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ContactType, encoded as an ASN.1 Element.
 */
export function _encode_ContactType(
    value: ContactType,
    elGetter: $.ASN1Encoder<ContactType>
) {
    if (!_cached_encoder_for_ContactType) {
        _cached_encoder_for_ContactType = $._encodeBitString;
    }
    return _cached_encoder_for_ContactType(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ContactType */

/* eslint-enable */
