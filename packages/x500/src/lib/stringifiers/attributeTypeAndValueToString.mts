import * as asn1 from "@wildboar/asn1";
import type { AttributeTypeAndValue } from "../modules/InformationFramework/AttributeTypeAndValue.ta.mjs";
import { _decode_DirectoryString } from "../modules/SelectedAttributeTypes/DirectoryString.ta.mjs";
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
import directoryStringToString from "./directoryStringToString.mjs";
import oidToAttributeName from "./oidToAttributeName.mjs";

type ElementStringifier = (el: asn1.ASN1Element) => string;

const stringifyDirectoryString = (el: asn1.ASN1Element): string => {
    return directoryStringToString(_decode_DirectoryString(el));
};

const stringifyPrintableString = (el: asn1.ASN1Element): string => {
    return el.printableString;
};

const stringifyIA5String = (el: asn1.ASN1Element): string => {
    return el.ia5String;
};

const whatToDo: Record<string, ElementStringifier> = {};
whatToDo[id_at_countryName.toString()] = stringifyPrintableString;
whatToDo[id_at_organizationName.toString()] = stringifyDirectoryString;
whatToDo[id_at_organizationalUnitName.toString()] = stringifyDirectoryString;
whatToDo[id_at_dnQualifier.toString()] = stringifyPrintableString;
whatToDo[id_at_stateOrProvinceName.toString()] = stringifyDirectoryString;
whatToDo[id_at_commonName.toString()] = stringifyDirectoryString;
whatToDo[id_at_serialNumber.toString()] = stringifyPrintableString;
whatToDo[id_at_localityName.toString()] = stringifyDirectoryString;
whatToDo[id_at_title.toString()] = stringifyDirectoryString;
whatToDo[id_at_surname.toString()] = stringifyDirectoryString;
whatToDo[id_at_givenName.toString()] = stringifyDirectoryString;
whatToDo[id_at_initials.toString()] = stringifyDirectoryString;
whatToDo[id_at_pseudonym.toString()] = stringifyDirectoryString;
whatToDo[id_at_generationQualifier.toString()] = stringifyDirectoryString;

const domainComponentID = "0.9.2342.19200300.100.1.25"; // Defined in https://tools.ietf.org/html/rfc4519#section-2.4.
whatToDo[domainComponentID] = stringifyIA5String;

/**
 * @deprecated
 */
export default function attributeTypeAndValueToString(
    atav: AttributeTypeAndValue
): string {
    const key: string =
        oidToAttributeName[atav.type_.toString()] ?? atav.type_.toString();
    const valueStringifier: ElementStringifier | undefined =
        whatToDo[atav.type_.toString()];
    const value: string = valueStringifier
        ? valueStringifier(atav.value)
        : "[Unable to display]";
    return `${key}=${value}`;
}
