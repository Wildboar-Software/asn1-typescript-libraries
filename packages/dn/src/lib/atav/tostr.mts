import { type ASN1Element, ASN1TagClass, ASN1UniversalType, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { domainToASCII } from "node:url";
import type { AttributeTypeAndValue } from "../AttributeTypeAndValue.ta.mjs";
import { distinguishedTypeToFriendlyString } from "./distinguishedTypeToString.mjs";
import teletexToString from "@wildboar/teletex";
import { escapeDistinguishedValue } from "../escapeDistinguishedValue.mjs";
import { id_at_postalAddress, id_at_registeredAddress } from "./distinguishedTypeToString.mjs";
import { prepString } from "../prepString.mjs";

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

const telephoneTypes: ReadonlySet<string> = new Set([
    "telephoneNumber",
    "homePhone",
    "mobile",
    "pager",
]);

const emailTypes: ReadonlySet<string> = new Set([
    "intEmail",
    "emailAddress",
    "mail",
]);

const looksLikeTelephoneNumber: RegExp = /^\+[0-9 -]*[0-9]$/;
const dnsLabel: RegExp = /^(?!-)[\p{L}\p{M}\p{N}_-]{1,63}(?<!-)$/u;
const topLevelDomainLabel: RegExp = /^\p{L}[\p{L}\p{M}\p{N}-]{0,62}(?<!-)$/u;
const looksLikeEmailAddress: RegExp = /^([^@\s]+)@([^@\s]+)$/;
const looksLikeJabberID: RegExp = /^[^@/\s]+@([^@/\s]+)\/\S/;

function caseIgnore (str: string): string {
    return prepString(str, { caseFold: true }) ?? str;
}

function looksLikeDomainName (str: string): boolean {
    const name = str.endsWith(".") ? str.slice(0, -1) : str;
    if (name.length > 253) {
        return false;
    }
    const labels = name.split(".");
    return (
        labels.length >= 2
        && labels.every((label) => dnsLabel.test(label))
        && topLevelDomainLabel.test(labels[labels.length - 1])
    );
}

/**
 * Normalizes to lowercase A-labels (punycode) without a trailing root dot.
 * Case folding is deliberately not applied before IDNA mapping, because
 * that would map "ß" to "ss", which IDNA 2008 does not do.
 */
function normalizeDomainName (str: string): string {
    const prepped = prepString(str) ?? str;
    const name = prepped.endsWith(".") ? prepped.slice(0, -1) : prepped;
    return domainToASCII(name) || caseIgnore(name);
}

function normalizeEmailAddress (str: string): string {
    const at = str.lastIndexOf("@");
    if (at <= 0) {
        return caseIgnore(str);
    }
    return `${caseIgnore(str.slice(0, at))}@${normalizeDomainName(str.slice(at + 1))}`;
}

/**
 * Roughly IETF RFC 7622: the localpart is case-folded, the domainpart is
 * normalized like a DNS name, and the resourcepart is case-sensitive.
 */
function normalizeJabberID (str: string): string {
    const slash = str.indexOf("/");
    const bare = (slash === -1) ? str : str.slice(0, slash);
    const resource = (slash === -1) ? "" : str.slice(slash).normalize("NFC");
    const at = bare.indexOf("@");
    const local = (at === -1) ? "" : `${caseIgnore(bare.slice(0, at))}@`;
    return local + normalizeDomainName(bare.slice(at + 1)) + resource;
}

function normalizeTelephoneNumber (str: string): string {
    return caseIgnore(str).replace(/[ -]/g, "");
}

function comparableString (
    type_: OBJECT_IDENTIFIER,
    tagNumber: number,
    str: string,
): string {
    const typeName: string | null = distinguishedTypeToFriendlyString(type_);
    const trimmed: string = str.trim();
    if (typeName === "serialNumber") {
        return prepString(str) ?? str;
    }
    if (telephoneTypes.has(typeName as string)) {
        return normalizeTelephoneNumber(str);
    }
    if (tagNumber === ASN1UniversalType.numericString) {
        return str.replaceAll(" ", "");
    }
    if (typeName === "dnsName") {
        return normalizeDomainName(str);
    }
    if (emailTypes.has(typeName as string)) {
        return normalizeEmailAddress(str);
    }
    if (typeName === "jid") {
        return normalizeJabberID(str);
    }
    if (typeName === null) {
        if (
            tagNumber === ASN1UniversalType.printableString
            && trimmed.length < 32
            && looksLikeTelephoneNumber.test(trimmed)
        ) {
            return normalizeTelephoneNumber(trimmed);
        }
        const jidMatch = (
            (tagNumber === ASN1UniversalType.utf8String)
            && looksLikeJabberID.exec(trimmed)
        );
        if (jidMatch && looksLikeDomainName(jidMatch[1])) {
            return normalizeJabberID(trimmed);
        }
        const emailMatch = looksLikeEmailAddress.exec(trimmed);
        if (emailMatch && looksLikeDomainName(emailMatch[2])) {
            return normalizeEmailAddress(trimmed);
        }
        if (looksLikeDomainName(trimmed)) {
            return normalizeDomainName(trimmed);
        }
    }
    return caseIgnore(str);
}

function stringListToString(type_: OBJECT_IDENTIFIER, value: ASN1Element, comparable: boolean): string | null {
    const els = value.sequence;
    const ret = new Array<string>(els.length);
    for (let i = 0; i < els.length; i++) {
        const el = els[i];
        const line = distinguishedValueToString(type_, el);
        if (line === null) {
            return null;
        }
        ret[i] = comparable ? caseIgnore(line) : line;
    }
    return ret.join("$");
}

function timeToString (time: Date, comparable: boolean): string {
    const iso = time.toISOString();
    return comparable ? iso.replace(/\.\d+Z$/, "Z") : iso;
}

/**
 * @summary Stringify a distinguished value
 * @description
 *
 * Stringifies the value of an attribute type and value, or returns `null` if
 * the value cannot be displayed as a string.
 *
 * If `comparable` is `true`, the value is normalized so that two values that
 * would match under the equality matching rule of the attribute type
 * (probably) produce identical strings. Since the matching rule of an
 * arbitrary attribute type is not known, this is heuristic:
 *
 * - Strings are prepared per ITU-T Recommendation X.520, Section 7, with case
 *   folding, except for `serialNumber`, which is case-sensitive.
 * - Telephone number attribute types, and `PrintableString`s of unrecognized
 *   types that look like international telephone numbers, have spaces and
 *   hyphens removed.
 * - `NumericString`s have spaces removed.
 * - DNS names (`dnsName`, or unrecognized types whose value looks like a DNS
 *   name) are converted to lowercase punycode (A-labels).
 * - Email addresses and Jabber IDs have their local parts case-folded and
 *   their domains normalized like DNS names.
 * - `UTCTime` and `GeneralizedTime` are truncated to seconds.
 * - Postal addresses have each line prepared with case folding.
 *
 * The output is not meant to be displayed.
 *
 * @param type_ The attribute type
 * @param value The attribute value
 * @param comparable Whether to normalize the output for byte-wise comparison
 * @returns The stringified value, or `null` if it cannot be stringified
 * @function
 */
export
function distinguishedValueToString(
    type_: OBJECT_IDENTIFIER,
    value: ASN1Element,
    comparable: boolean = false,
): string | null {
    if (value.tagClass !== ASN1TagClass.universal) {
        return null;
    }

    const s = (str: string): string => comparable
        ? comparableString(type_, value.tagNumber, str)
        : str;

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
        case (ASN1UniversalType.objectDescriptor): return s(value.objectDescriptor);
        case (ASN1UniversalType.realNumber): return value.real.toString();
        case (ASN1UniversalType.enumerated): return value.enumerated.toString();
        case (ASN1UniversalType.utf8String): return s(value.utf8String);
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
                return stringListToString(type_, value, comparable);
            }
            return null;
        }
        case (ASN1UniversalType.numericString): return s(value.numericString);
        case (ASN1UniversalType.printableString): return s(value.printableString);
        case (ASN1UniversalType.teletexString): return s(teletexToString(value.teletexString));
        case (ASN1UniversalType.ia5String): return s(value.ia5String);
        case (ASN1UniversalType.utcTime): return timeToString(value.utcTime, comparable);
        case (ASN1UniversalType.generalizedTime): return timeToString(value.generalizedTime, comparable);
        case (ASN1UniversalType.graphicString): return s(value.graphicString);
        case (ASN1UniversalType.visibleString): return s(value.visibleString);
        case (ASN1UniversalType.generalString): return s(value.generalString);
        case (ASN1UniversalType.universalString): return s(value.universalString);
        case (ASN1UniversalType.bmpString): return s(value.bmpString);
        case (ASN1UniversalType.date): return value.date.toISOString();
        case (ASN1UniversalType.timeOfDay): {
            const tod = value.timeOfDay;
            return `${tod.getUTCHours()}:${tod.getUTCMinutes()}:${tod.getUTCSeconds()}`;
        }
        case (ASN1UniversalType.dateTime): return value.dateTime.toISOString();
        case (ASN1UniversalType.duration): return value.duration.toString();
        case (ASN1UniversalType.oidIRI): return comparable
            ? value.oidIRI.toLowerCase()
            : value.oidIRI;
        case (ASN1UniversalType.roidIRI): return comparable
            ? value.relativeOIDIRI.toLowerCase()
            : value.relativeOIDIRI;
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
