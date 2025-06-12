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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';
import { EXTENSION_ATTRIBUTE } from '../MTSAbstractService/EXTENSION-ATTRIBUTE.oca.js';
export { EXTENSION_ATTRIBUTE } from '../MTSAbstractService/EXTENSION-ATTRIBUTE.oca.js';
import { common_name } from '../MTSAbstractService/common-name.oa.js';
export { common_name } from '../MTSAbstractService/common-name.oa.js';
import { teletex_common_name } from '../MTSAbstractService/teletex-common-name.oa.js';
export { teletex_common_name } from '../MTSAbstractService/teletex-common-name.oa.js';
import { universal_common_name } from '../MTSAbstractService/universal-common-name.oa.js';
export { universal_common_name } from '../MTSAbstractService/universal-common-name.oa.js';
import { teletex_organization_name } from '../MTSAbstractService/teletex-organization-name.oa.js';
export { teletex_organization_name } from '../MTSAbstractService/teletex-organization-name.oa.js';
import { universal_organization_name } from '../MTSAbstractService/universal-organization-name.oa.js';
export { universal_organization_name } from '../MTSAbstractService/universal-organization-name.oa.js';
import { teletex_personal_name } from '../MTSAbstractService/teletex-personal-name.oa.js';
export { teletex_personal_name } from '../MTSAbstractService/teletex-personal-name.oa.js';
import { universal_personal_name } from '../MTSAbstractService/universal-personal-name.oa.js';
export { universal_personal_name } from '../MTSAbstractService/universal-personal-name.oa.js';
import { teletex_organizational_unit_names } from '../MTSAbstractService/teletex-organizational-unit-names.oa.js';
export { teletex_organizational_unit_names } from '../MTSAbstractService/teletex-organizational-unit-names.oa.js';
import { universal_organizational_unit_names } from '../MTSAbstractService/universal-organizational-unit-names.oa.js';
export { universal_organizational_unit_names } from '../MTSAbstractService/universal-organizational-unit-names.oa.js';
import { teletex_domain_defined_attributes } from '../MTSAbstractService/teletex-domain-defined-attributes.oa.js';
export { teletex_domain_defined_attributes } from '../MTSAbstractService/teletex-domain-defined-attributes.oa.js';
import { universal_domain_defined_attributes } from '../MTSAbstractService/universal-domain-defined-attributes.oa.js';
export { universal_domain_defined_attributes } from '../MTSAbstractService/universal-domain-defined-attributes.oa.js';
import { pds_name } from '../MTSAbstractService/pds-name.oa.js';
export { pds_name } from '../MTSAbstractService/pds-name.oa.js';
import { physical_delivery_country_name } from '../MTSAbstractService/physical-delivery-country-name.oa.js';
export { physical_delivery_country_name } from '../MTSAbstractService/physical-delivery-country-name.oa.js';
import { postal_code } from '../MTSAbstractService/postal-code.oa.js';
export { postal_code } from '../MTSAbstractService/postal-code.oa.js';
import { physical_delivery_office_name } from '../MTSAbstractService/physical-delivery-office-name.oa.js';
export { physical_delivery_office_name } from '../MTSAbstractService/physical-delivery-office-name.oa.js';
import { universal_physical_delivery_office_name } from '../MTSAbstractService/universal-physical-delivery-office-name.oa.js';
export { universal_physical_delivery_office_name } from '../MTSAbstractService/universal-physical-delivery-office-name.oa.js';
import { physical_delivery_office_number } from '../MTSAbstractService/physical-delivery-office-number.oa.js';
export { physical_delivery_office_number } from '../MTSAbstractService/physical-delivery-office-number.oa.js';
import { universal_physical_delivery_office_number } from '../MTSAbstractService/universal-physical-delivery-office-number.oa.js';
export { universal_physical_delivery_office_number } from '../MTSAbstractService/universal-physical-delivery-office-number.oa.js';
import { extension_OR_address_components } from '../MTSAbstractService/extension-OR-address-components.oa.js';
export { extension_OR_address_components } from '../MTSAbstractService/extension-OR-address-components.oa.js';
import { universal_extension_OR_address_components } from '../MTSAbstractService/universal-extension-OR-address-components.oa.js';
export { universal_extension_OR_address_components } from '../MTSAbstractService/universal-extension-OR-address-components.oa.js';
import { physical_delivery_personal_name } from '../MTSAbstractService/physical-delivery-personal-name.oa.js';
export { physical_delivery_personal_name } from '../MTSAbstractService/physical-delivery-personal-name.oa.js';
import { universal_physical_delivery_personal_name } from '../MTSAbstractService/universal-physical-delivery-personal-name.oa.js';
export { universal_physical_delivery_personal_name } from '../MTSAbstractService/universal-physical-delivery-personal-name.oa.js';
import { physical_delivery_organization_name } from '../MTSAbstractService/physical-delivery-organization-name.oa.js';
export { physical_delivery_organization_name } from '../MTSAbstractService/physical-delivery-organization-name.oa.js';
import { universal_physical_delivery_organization_name } from '../MTSAbstractService/universal-physical-delivery-organization-name.oa.js';
export { universal_physical_delivery_organization_name } from '../MTSAbstractService/universal-physical-delivery-organization-name.oa.js';
import { extension_physical_delivery_address_components } from '../MTSAbstractService/extension-physical-delivery-address-components.oa.js';
export { extension_physical_delivery_address_components } from '../MTSAbstractService/extension-physical-delivery-address-components.oa.js';
import { universal_extension_physical_delivery_address_components } from '../MTSAbstractService/universal-extension-physical-delivery-address-components.oa.js';
export { universal_extension_physical_delivery_address_components } from '../MTSAbstractService/universal-extension-physical-delivery-address-components.oa.js';
import { unformatted_postal_address } from '../MTSAbstractService/unformatted-postal-address.oa.js';
export { unformatted_postal_address } from '../MTSAbstractService/unformatted-postal-address.oa.js';
import { universal_unformatted_postal_address } from '../MTSAbstractService/universal-unformatted-postal-address.oa.js';
export { universal_unformatted_postal_address } from '../MTSAbstractService/universal-unformatted-postal-address.oa.js';
import { street_address } from '../MTSAbstractService/street-address.oa.js';
export { street_address } from '../MTSAbstractService/street-address.oa.js';
import { universal_street_address } from '../MTSAbstractService/universal-street-address.oa.js';
export { universal_street_address } from '../MTSAbstractService/universal-street-address.oa.js';
import { post_office_box_address } from '../MTSAbstractService/post-office-box-address.oa.js';
export { post_office_box_address } from '../MTSAbstractService/post-office-box-address.oa.js';
import { universal_post_office_box_address } from '../MTSAbstractService/universal-post-office-box-address.oa.js';
export { universal_post_office_box_address } from '../MTSAbstractService/universal-post-office-box-address.oa.js';
import { poste_restante_address } from '../MTSAbstractService/poste-restante-address.oa.js';
export { poste_restante_address } from '../MTSAbstractService/poste-restante-address.oa.js';
import { universal_poste_restante_address } from '../MTSAbstractService/universal-poste-restante-address.oa.js';
export { universal_poste_restante_address } from '../MTSAbstractService/universal-poste-restante-address.oa.js';
import { unique_postal_name } from '../MTSAbstractService/unique-postal-name.oa.js';
export { unique_postal_name } from '../MTSAbstractService/unique-postal-name.oa.js';
import { universal_unique_postal_name } from '../MTSAbstractService/universal-unique-postal-name.oa.js';
export { universal_unique_postal_name } from '../MTSAbstractService/universal-unique-postal-name.oa.js';
import { local_postal_attributes } from '../MTSAbstractService/local-postal-attributes.oa.js';
export { local_postal_attributes } from '../MTSAbstractService/local-postal-attributes.oa.js';
import { universal_local_postal_attributes } from '../MTSAbstractService/universal-local-postal-attributes.oa.js';
export { universal_local_postal_attributes } from '../MTSAbstractService/universal-local-postal-attributes.oa.js';
import { extended_network_address } from '../MTSAbstractService/extended-network-address.oa.js';
export { extended_network_address } from '../MTSAbstractService/extended-network-address.oa.js';
import { terminal_type } from '../MTSAbstractService/terminal-type.oa.js';
export { terminal_type } from '../MTSAbstractService/terminal-type.oa.js';

/* START_OF_SYMBOL_DEFINITION ExtensionAttributeTable */
/**
 * @summary ExtensionAttributeTable
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ExtensionAttributeTable EXTENSION-ATTRIBUTE ::= {common-name | teletex-common-name | universal-common-name |
 *    teletex-organization-name | universal-organization-name |
 *    teletex-personal-name | universal-personal-name |
 *    teletex-organizational-unit-names | universal-organizational-unit-names |
 *    teletex-domain-defined-attributes | universal-domain-defined-attributes |
 *    pds-name | physical-delivery-country-name | postal-code |
 *    physical-delivery-office-name | universal-physical-delivery-office-name |
 *    physical-delivery-office-number | universal-physical-delivery-office-number
 *    | extension-OR-address-components |
 *    universal-extension-OR-address-components | physical-delivery-personal-name
 *    | universal-physical-delivery-personal-name |
 *    physical-delivery-organization-name |
 *    universal-physical-delivery-organization-name |
 *    extension-physical-delivery-address-components |
 *    universal-extension-physical-delivery-address-components |
 *    unformatted-postal-address | universal-unformatted-postal-address |
 *    street-address | universal-street-address | post-office-box-address |
 *    universal-post-office-box-address | poste-restante-address |
 *    universal-poste-restante-address | unique-postal-name |
 *    universal-unique-postal-name | local-postal-attributes |
 *    universal-local-postal-attributes | extended-network-address | terminal-type
 *   }
 * ```
 *
 * @constant
 * @type {EXTENSION_ATTRIBUTE[]}
 *
 */
export const ExtensionAttributeTable: EXTENSION_ATTRIBUTE[] = [
    common_name,
    teletex_common_name,
    universal_common_name,
    teletex_organization_name,
    universal_organization_name,
    teletex_personal_name,
    universal_personal_name,
    teletex_organizational_unit_names,
    universal_organizational_unit_names,
    teletex_domain_defined_attributes,
    universal_domain_defined_attributes,
    pds_name,
    physical_delivery_country_name,
    postal_code,
    physical_delivery_office_name,
    universal_physical_delivery_office_name,
    physical_delivery_office_number,
    universal_physical_delivery_office_number,
    extension_OR_address_components,
    universal_extension_OR_address_components,
    physical_delivery_personal_name,
    universal_physical_delivery_personal_name,
    physical_delivery_organization_name,
    universal_physical_delivery_organization_name,
    extension_physical_delivery_address_components,
    universal_extension_physical_delivery_address_components,
    unformatted_postal_address,
    universal_unformatted_postal_address,
    street_address,
    universal_street_address,
    post_office_box_address,
    universal_post_office_box_address,
    poste_restante_address,
    universal_poste_restante_address,
    unique_postal_name,
    universal_unique_postal_name,
    local_postal_attributes,
    universal_local_postal_attributes,
    extended_network_address,
    terminal_type,
];
/* END_OF_SYMBOL_DEFINITION ExtensionAttributeTable */

/* eslint-enable */
