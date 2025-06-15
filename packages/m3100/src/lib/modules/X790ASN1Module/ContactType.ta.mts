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


/**
 * @summary ContactType_other
 * @constant
 */
export const ContactType_other: number = 0; /* LONG_NAMED_BIT */


/**
 * @summary other
 * @constant
 */
export const other: number = ContactType_other; /* SHORT_NAMED_BIT */


/**
 * @summary ContactType_contacts_for_equipment_related_activities
 * @constant
 */
export const ContactType_contacts_for_equipment_related_activities: number = 1; /* LONG_NAMED_BIT */


/**
 * @summary contacts_for_equipment_related_activities
 * @constant
 */
export const contacts_for_equipment_related_activities: number = ContactType_contacts_for_equipment_related_activities; /* SHORT_NAMED_BIT */


/**
 * @summary ContactType_contacts_for_location_related_activities
 * @constant
 */
export const ContactType_contacts_for_location_related_activities: number = 2; /* LONG_NAMED_BIT */


/**
 * @summary contacts_for_location_related_activities
 * @constant
 */
export const contacts_for_location_related_activities: number = ContactType_contacts_for_location_related_activities; /* SHORT_NAMED_BIT */


/**
 * @summary ContactType_contacts_for_circuit_related_activities
 * @constant
 */
export const ContactType_contacts_for_circuit_related_activities: number = 3; /* LONG_NAMED_BIT */


/**
 * @summary contacts_for_circuit_related_activities
 * @constant
 */
export const contacts_for_circuit_related_activities: number = ContactType_contacts_for_circuit_related_activities; /* SHORT_NAMED_BIT */


/**
 * @summary ContactType_contacts_for_provider_related_activities
 * @constant
 */
export const ContactType_contacts_for_provider_related_activities: number = 4; /* LONG_NAMED_BIT */


/**
 * @summary contacts_for_provider_related_activities
 * @constant
 */
export const contacts_for_provider_related_activities: number = ContactType_contacts_for_provider_related_activities; /* SHORT_NAMED_BIT */


/**
 * @summary ContactType_contacts_for_service_related_activities
 * @constant
 */
export const ContactType_contacts_for_service_related_activities: number = 5; /* LONG_NAMED_BIT */


/**
 * @summary contacts_for_service_related_activities
 * @constant
 */
export const contacts_for_service_related_activities: number = ContactType_contacts_for_service_related_activities; /* SHORT_NAMED_BIT */


/**
 * @summary ContactType_contacts_for_facility_related_activities
 * @constant
 */
export const ContactType_contacts_for_facility_related_activities: number = 6; /* LONG_NAMED_BIT */


/**
 * @summary contacts_for_facility_related_activities
 * @constant
 */
export const contacts_for_facility_related_activities: number = ContactType_contacts_for_facility_related_activities; /* SHORT_NAMED_BIT */


/**
 * @summary ContactType_contacts_for_customer_related_activities
 * @constant
 */
export const ContactType_contacts_for_customer_related_activities: number = 7; /* LONG_NAMED_BIT */


/**
 * @summary contacts_for_customer_related_activities
 * @constant
 */
export const contacts_for_customer_related_activities: number = ContactType_contacts_for_customer_related_activities; /* SHORT_NAMED_BIT */


/**
 * @summary ContactType_contacts_for_vendor_related_activities
 * @constant
 */
export const ContactType_contacts_for_vendor_related_activities: number = 8; /* LONG_NAMED_BIT */


/**
 * @summary contacts_for_vendor_related_activities
 * @constant
 */
export const contacts_for_vendor_related_activities: number = ContactType_contacts_for_vendor_related_activities; /* SHORT_NAMED_BIT */


/**
 * @summary ContactType_contacts_for_manufacturer_related_activities
 * @constant
 */
export const ContactType_contacts_for_manufacturer_related_activities: number = 9; /* LONG_NAMED_BIT */


/**
 * @summary contacts_for_manufacturer_related_activities
 * @constant
 */
export const contacts_for_manufacturer_related_activities: number = ContactType_contacts_for_manufacturer_related_activities; /* SHORT_NAMED_BIT */


/**
 * @summary ContactType_contacts_for_software_related_activities
 * @constant
 */
export const ContactType_contacts_for_software_related_activities: number = 10; /* LONG_NAMED_BIT */


/**
 * @summary contacts_for_software_related_activities
 * @constant
 */
export const contacts_for_software_related_activities: number = ContactType_contacts_for_software_related_activities; /* SHORT_NAMED_BIT */


/**
 * @summary ContactType_contacts_for_function_related_activities
 * @constant
 */
export const ContactType_contacts_for_function_related_activities: number = 11; /* LONG_NAMED_BIT */


/**
 * @summary contacts_for_function_related_activities
 * @constant
 */
export const contacts_for_function_related_activities: number = ContactType_contacts_for_function_related_activities; /* SHORT_NAMED_BIT */




export const _decode_ContactType = $._decodeBitString;




export const _encode_ContactType = $._encodeBitString;


/* eslint-enable */
