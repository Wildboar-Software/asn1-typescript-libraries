import { id_at_commonName } from "../modules/SelectedAttributeTypes/id-at-commonName.va.mjs";
import { id_at_countryName } from "../modules/SelectedAttributeTypes/id-at-countryName.va.mjs";
import { id_at_dnQualifier } from "../modules/SelectedAttributeTypes/id-at-dnQualifier.va.mjs";
import { id_at_generationQualifier } from "../modules/SelectedAttributeTypes/id-at-generationQualifier.va.mjs";
import { id_at_givenName } from "../modules/SelectedAttributeTypes/id-at-givenName.va.mjs";
import { id_at_initials } from "../modules/SelectedAttributeTypes/id-at-initials.va.mjs";
import { id_at_localityName } from "../modules/SelectedAttributeTypes/id-at-localityName.va.mjs";
import { id_at_organizationalUnitName } from "../modules/SelectedAttributeTypes/id-at-organizationalUnitName.va.mjs";
import { id_at_organizationName } from "../modules/SelectedAttributeTypes/id-at-organizationName.va.mjs";
import { id_at_pseudonym } from "../modules/SelectedAttributeTypes/id-at-pseudonym.va.mjs";
import { id_at_serialNumber } from "../modules/SelectedAttributeTypes/id-at-serialNumber.va.mjs";
import { id_at_stateOrProvinceName } from "../modules/SelectedAttributeTypes/id-at-stateOrProvinceName.va.mjs";
import { id_at_surname } from "../modules/SelectedAttributeTypes/id-at-surname.va.mjs";
import { id_at_title } from "../modules/SelectedAttributeTypes/id-at-title.va.mjs";

const ret: Record<string, string> = {};
// Recognized attributes sourced from https://tools.ietf.org/html/rfc5280#section-4.1.2.4.
ret[id_at_countryName.toString()] = "c";
ret[id_at_organizationName.toString()] = "o";
ret[id_at_organizationalUnitName.toString()] = "ou";
ret[id_at_dnQualifier.toString()] = "dnQualifier";
ret[id_at_stateOrProvinceName.toString()] = "st";
ret[id_at_commonName.toString()] = "cn";
ret[id_at_serialNumber.toString()] = "serialNumber";
ret[id_at_localityName.toString()] = "l";
ret[id_at_title.toString()] = "title";
ret[id_at_surname.toString()] = "sn";
ret[id_at_givenName.toString()] = "gn";
ret[id_at_initials.toString()] = "initials";
ret[id_at_pseudonym.toString()] = "pseudonym";
ret[id_at_generationQualifier.toString()] = "generationQualifier";

/**
 * @deprecated
 */
export default ret;
