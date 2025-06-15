/* eslint-disable */
import { common_name } from "../PkiPmiExternalDataTypes/common-name.oa.mjs";
import { extended_network_address } from "../PkiPmiExternalDataTypes/extended-network-address.oa.mjs";
import { EXTENSION_ATTRIBUTE } from "../PkiPmiExternalDataTypes/EXTENSION-ATTRIBUTE.oca.mjs";
import { extension_OR_address_components } from "../PkiPmiExternalDataTypes/extension-OR-address-components.oa.mjs";
import { extension_physical_delivery_address_components } from "../PkiPmiExternalDataTypes/extension-physical-delivery-address-components.oa.mjs";
import { local_postal_attributes } from "../PkiPmiExternalDataTypes/local-postal-attributes.oa.mjs";
import { pds_name } from "../PkiPmiExternalDataTypes/pds-name.oa.mjs";
import { physical_delivery_country_name } from "../PkiPmiExternalDataTypes/physical-delivery-country-name.oa.mjs";
import { physical_delivery_office_name } from "../PkiPmiExternalDataTypes/physical-delivery-office-name.oa.mjs";
import { physical_delivery_office_number } from "../PkiPmiExternalDataTypes/physical-delivery-office-number.oa.mjs";
import { physical_delivery_organization_name } from "../PkiPmiExternalDataTypes/physical-delivery-organization-name.oa.mjs";
import { physical_delivery_personal_name } from "../PkiPmiExternalDataTypes/physical-delivery-personal-name.oa.mjs";
import { post_office_box_address } from "../PkiPmiExternalDataTypes/post-office-box-address.oa.mjs";
import { postal_code } from "../PkiPmiExternalDataTypes/postal-code.oa.mjs";
import { poste_restante_address } from "../PkiPmiExternalDataTypes/poste-restante-address.oa.mjs";
import { street_address } from "../PkiPmiExternalDataTypes/street-address.oa.mjs";
import { teletex_common_name } from "../PkiPmiExternalDataTypes/teletex-common-name.oa.mjs";
import { teletex_domain_defined_attributes } from "../PkiPmiExternalDataTypes/teletex-domain-defined-attributes.oa.mjs";
import { teletex_organization_name } from "../PkiPmiExternalDataTypes/teletex-organization-name.oa.mjs";
import { teletex_organizational_unit_names } from "../PkiPmiExternalDataTypes/teletex-organizational-unit-names.oa.mjs";
import { teletex_personal_name } from "../PkiPmiExternalDataTypes/teletex-personal-name.oa.mjs";
import { terminal_type } from "../PkiPmiExternalDataTypes/terminal-type.oa.mjs";
import { unformatted_postal_address } from "../PkiPmiExternalDataTypes/unformatted-postal-address.oa.mjs";
import { unique_postal_name } from "../PkiPmiExternalDataTypes/unique-postal-name.oa.mjs";
import { universal_common_name } from "../PkiPmiExternalDataTypes/universal-common-name.oa.mjs";
import { universal_domain_defined_attributes } from "../PkiPmiExternalDataTypes/universal-domain-defined-attributes.oa.mjs";
import { universal_extension_OR_address_components } from "../PkiPmiExternalDataTypes/universal-extension-OR-address-components.oa.mjs";
import { universal_extension_physical_delivery_address_components } from "../PkiPmiExternalDataTypes/universal-extension-physical-delivery-address-components.oa.mjs";
import { universal_local_postal_attributes } from "../PkiPmiExternalDataTypes/universal-local-postal-attributes.oa.mjs";
import { universal_organization_name } from "../PkiPmiExternalDataTypes/universal-organization-name.oa.mjs";
import { universal_organizational_unit_names } from "../PkiPmiExternalDataTypes/universal-organizational-unit-names.oa.mjs";
import { universal_personal_name } from "../PkiPmiExternalDataTypes/universal-personal-name.oa.mjs";
import { universal_physical_delivery_office_name } from "../PkiPmiExternalDataTypes/universal-physical-delivery-office-name.oa.mjs";
import { universal_physical_delivery_office_number } from "../PkiPmiExternalDataTypes/universal-physical-delivery-office-number.oa.mjs";
import { universal_physical_delivery_organization_name } from "../PkiPmiExternalDataTypes/universal-physical-delivery-organization-name.oa.mjs";
import { universal_physical_delivery_personal_name } from "../PkiPmiExternalDataTypes/universal-physical-delivery-personal-name.oa.mjs";
import { universal_post_office_box_address } from "../PkiPmiExternalDataTypes/universal-post-office-box-address.oa.mjs";
import { universal_poste_restante_address } from "../PkiPmiExternalDataTypes/universal-poste-restante-address.oa.mjs";
import { universal_street_address } from "../PkiPmiExternalDataTypes/universal-street-address.oa.mjs";
import { universal_unformatted_postal_address } from "../PkiPmiExternalDataTypes/universal-unformatted-postal-address.oa.mjs";
import { universal_unique_postal_name } from "../PkiPmiExternalDataTypes/universal-unique-postal-name.oa.mjs";
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
 *    universal-local-postal-attributes | extended-network-address | terminal-type }
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

/* eslint-enable */
