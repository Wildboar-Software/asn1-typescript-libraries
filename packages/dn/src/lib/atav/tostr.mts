import { type ASN1Element, ASN1TagClass, ASN1UniversalType } from "@wildboar/asn1";
import type { AttributeTypeAndValue } from "../AttributeTypeAndValue.ta.mjs";
import { distinguishedTypeToString } from "./distinguishedTypeToString.mjs";
import teletexToString from "@wildboar/teletex";
import { escapeDistinguishedValue } from "../escapeDistinguishedValue.mjs";

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
    return "#" + Array.from(value.toBytes())
        .map((byte) => byte.toString(16).padStart(2, "0"))
        .join("");
}

export
function distinguishedValueToString(value: ASN1Element): string {
    if (value.tagClass !== ASN1TagClass.universal) {
        return defaultValueEncoder(value);
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
            // TODO: Handle PostalAddress
            return defaultValueEncoder(value);
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
            return defaultValueEncoder(value);
        }
    }
}

export function attributeTypeAndValueToString(
    atav: AttributeTypeAndValue,
    escape: boolean = false,
): string {
    const key: string = distinguishedTypeToString(atav.type_);
    let value: string = distinguishedValueToString(atav.value);
    if (escape) {
        value = escapeDistinguishedValue(value);
    }
    return `${key}=${value}`;
}

export default attributeTypeAndValueToString;
