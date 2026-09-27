import { type ASN1Element, ASN1TagClass, ASN1UniversalType, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import type { AttributeTypeAndValue } from "../AttributeTypeAndValue.ta.mjs";
import { distinguishedTypeToFriendlyString } from "./distinguishedTypeToString.mjs";
import teletexToString from "@wildboar/teletex";
import { escapeDistinguishedValue } from "../escapeDistinguishedValue.mjs";
import { id_at_postalAddress, id_at_registeredAddress } from "./distinguishedTypeToString.mjs";

/**
 * @internal
 */
function bytesToHex(bytes: Uint8Array): string {
    if (bytes instanceof Buffer) {
      return bytes.toString("hex");
    }
    return Buffer.from(
        bytes.buffer,
        bytes.byteOffset,
        bytes.byteLength,
    ).toString("hex");
}

/**
 * @summary String encode an LDAP value when the syntax is not known.
 * @description
 * 
 * This function encodes a default value.
 * 
 * @param value The value to encode.
 * @returns The encoded value.
 * @function
 */
export
function defaultValueEncoder (value: ASN1Element): string {
    return "#" + Buffer.from(
        value.toBytes().buffer,
        value.toBytes().byteOffset,
        value.toBytes().byteLength
    ).toString("hex");
}

const directoryStringTagNumbers = new Set([
    ASN1UniversalType.teletexString,
    ASN1UniversalType.printableString,
    ASN1UniversalType.utf8String,
    ASN1UniversalType.bmpString,
    ASN1UniversalType.universalString,
]);

function looksLikeStringList(value: ASN1Element): boolean {
    if (value.tagNumber !== ASN1UniversalType.sequence) {
        return false;
    }
    const els = value.sequence;
    if (els.length === 0) {
        return false;
    }
    for (let i = 0; i < els.length; i++) {
        if (!directoryStringTagNumbers.has(els[i].tagNumber)) {
            return false;
        }
    }
    return true;
}

function stringListToString(type_: OBJECT_IDENTIFIER, value: ASN1Element): string {
    return value.sequence.map((el) => distinguishedValueToString(type_, el)).join("$");
}

export
function distinguishedValueToString(type_: OBJECT_IDENTIFIER, value: ASN1Element): string | null {
    if (value.tagClass !== ASN1TagClass.universal) {
        return null;
    }

    switch (value.tagNumber) {
        case (ASN1UniversalType.boolean): return (value.boolean ? "TRUE" : "FALSE");
        case (ASN1UniversalType.integer): return value.integer.toString();
        case (ASN1UniversalType.bitString):
            return `'${Array
                .from(value.bitString)
                .map((num) => num.toString())
                .join("")
            }'B`;
        case (ASN1UniversalType.octetString):
            return `'${bytesToHex(value.octetString)}'H`;
        case (ASN1UniversalType.nill): return "NULL";
        case (ASN1UniversalType.objectIdentifier): return value.objectIdentifier.dotDelimitedNotation;
        case (ASN1UniversalType.objectDescriptor): return value.objectDescriptor;
        case (ASN1UniversalType.realNumber): return value.real.toString();
        case (ASN1UniversalType.enumerated): return value.enumerated.toString();
        case (ASN1UniversalType.utf8String): return value.utf8String;
        case (ASN1UniversalType.relativeOID): return value
            .relativeObjectIdentifier
            .map((arc) => arc.toString())
            .join(".");
        case (ASN1UniversalType.time): return value.time;
        case (ASN1UniversalType.sequence): {
            if (
                type_.isEqualTo(id_at_postalAddress)
                || type_.isEqualTo(id_at_registeredAddress)
                || looksLikeStringList(value)
            ) {
                return stringListToString(type_, value);
            }
            return null;
        }
        case (ASN1UniversalType.numericString): return value.numericString;
        case (ASN1UniversalType.printableString): return value.printableString;
        case (ASN1UniversalType.teletexString): return teletexToString(value.teletexString);
        case (ASN1UniversalType.ia5String): return value.ia5String;
        case (ASN1UniversalType.utcTime): return value.utcTime.toISOString();
        case (ASN1UniversalType.generalizedTime): return value.generalizedTime.toISOString();
        case (ASN1UniversalType.graphicString): return value.graphicString;
        case (ASN1UniversalType.visibleString): return value.visibleString;
        case (ASN1UniversalType.generalString): return value.generalString;
        case (ASN1UniversalType.universalString): return value.universalString;
        case (ASN1UniversalType.bmpString): return value.bmpString;
        case (ASN1UniversalType.date): return value.date.toISOString();
        case (ASN1UniversalType.timeOfDay): {
            const tod = value.timeOfDay;
            return `${tod.getUTCHours()}:${tod.getUTCMinutes()}:${tod.getUTCSeconds()}`;
        }
        case (ASN1UniversalType.dateTime): return value.dateTime.toISOString();
        case (ASN1UniversalType.duration): return value.duration.toString();
        case (ASN1UniversalType.oidIRI): return value.oidIRI;
        case (ASN1UniversalType.roidIRI): return value.relativeOIDIRI;
        default: {
            return null;
        }
    }
}

function unrecognizedToString(type_: OBJECT_IDENTIFIER, value: ASN1Element): string {
    return `${type_.toString()}=${defaultValueEncoder(value)}`;
}

export function attributeTypeAndValueToString(
    atav: AttributeTypeAndValue,
    escape: boolean = false,
    ldapStrict: boolean = false,
): string {
    const key: string | null = distinguishedTypeToFriendlyString(atav.type_, ldapStrict);
    if (key === null) {
        return unrecognizedToString(atav.type_, atav.value);
    }
    let value: string | null = distinguishedValueToString(atav.type_, atav.value);
    if (value === null) {
        return unrecognizedToString(atav.type_, atav.value);
    }
    if (escape) {
        value = escapeDistinguishedValue(value);
    }
    return `${key}=${value}`;
}

export default attributeTypeAndValueToString;
