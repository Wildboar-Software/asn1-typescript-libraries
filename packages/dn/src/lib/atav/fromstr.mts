import {
    ObjectIdentifier,
    isNumericString,
    isPrintableString,
    type ASN1Element,
    type OBJECT_IDENTIFIER,
} from "@wildboar/asn1";
import {
    BER,
    _encodeIA5String,
    _encodeInteger,
    _encodeNumericString,
    _encodeObjectIdentifier,
    _encodePrintableString,
    _encodeSequence,
    _encodeUTF8String,
} from "@wildboar/asn1/functional";
import { ParsedAttributeTypeAndValue } from "../ParsedAttributeTypeAndValue.mjs";
import { AttributeTypeAndValue } from "../AttributeTypeAndValue.ta.mjs";
import { unescapeDistinguishedValue } from "../unescapeDistinguishedValue.mjs";
import {
    id_at_commonName,
    id_at_countryCode3c,
    id_at_countryCode3n,
    id_at_countryName,
    id_at_dmdName,
    id_at_dnQualifier,
    id_at_dnsName,
    id_at_generationQualifier,
    id_at_givenName,
    id_at_houseIdentifier,
    id_at_initials,
    id_at_intEmail,
    id_at_jid,
    id_at_localityName,
    id_at_objectIdentifier,
    id_at_organizationIdentifier,
    id_at_organizationName,
    id_at_organizationalUnitName,
    id_at_postOfficeBox,
    id_at_postalAddress,
    id_at_postalCode,
    id_at_pseudonym,
    id_at_registeredAddress,
    id_at_serialNumber,
    id_at_stateOrProvinceName,
    id_at_streetAddress,
    id_at_surname,
    id_at_telephoneNumber,
    id_at_title,
    id_at_urnC,
    id_buildingName,
    id_dc,
    id_documentIdentifier,
    id_emailAddress,
    id_homePhone,
    id_mail,
    id_mobile,
    id_at_mhs_admd_name,
    id_at_mhs_common_name,
    id_at_mhs_country_name,
    id_at_mhs_extended_network_address,
    id_at_mhs_generation_qualifier,
    id_at_mhs_given_name,
    id_at_mhs_initials,
    id_at_mhs_network_address,
    id_at_mhs_numeric_user_identifier,
    id_at_mhs_organization_name,
    id_at_mhs_organizational_unit_name,
    id_at_mhs_pds_name_attribute,
    id_at_mhs_postal_code,
    id_at_mhs_prmd_name,
    id_at_mhs_surname,
    id_at_mhs_terminal_identifier,
    id_at_mhs_terminal_type,
    id_oidC,
    id_pager,
    id_roomNumber,
    id_uid,
    id_uniqueIdentifier,
} from "./distinguishedTypeToString.mjs";

type ValueEncoder = (value: string, attributeType: string) => ASN1Element;

/**
 * @summary Describe a value whose length is outside `min..max`.
 */
function lengthProblem(length: number, min: number, max: number): string {
    const expected = (min === max)
        ? String(min)
        : (max === Infinity)
            ? `at least ${min}`
            : `${min}..${max}`;
    return `length problem (value length ${length}, expected ${expected})`;
}

/**
 * @summary Reject a value whose length is outside `min..max`, then encode it.
 */
function withLength(min: number, max: number = Infinity) {
    return (encode: ValueEncoder): ValueEncoder => (value, attributeType) => {
        if ((value.length < min) || (value.length > max)) {
            throw new SyntaxError(
                `attribute type ${JSON.stringify(attributeType)}: ${lengthProblem(value.length, min, max)}`,
            );
        }
        return encode(value, attributeType);
    };
}

/**
 * @summary Encode an `UnboundedDirectoryString`.
 * @description
 *
 * ITU-T X.520 `UnboundedDirectoryString` is a CHOICE of TeletexString,
 * PrintableString, BMPString, UniversalString, and UTF8String, each
 * `SIZE (1..MAX)`. New values use PrintableString when every character is in
 * that repertoire, and UTF8String otherwise. TeletexString is deprecated.
 */
function encodeUnboundedDirectoryString(value: string): ASN1Element {
    if (isPrintableString(value)) {
        return _encodePrintableString(value, BER);
    }
    return _encodeUTF8String(value, BER);
}

/**
 * @summary Encode a `PrintableString`.
 */
function encodePrintableString(value: string, attributeType: string): ASN1Element {
    if (!isPrintableString(value)) {
        throw new SyntaxError(
            `attribute type ${JSON.stringify(attributeType)}: character problem (value contains a character outside PrintableString)`,
        );
    }
    return _encodePrintableString(value, BER);
}

/**
 * @summary Encode a `NumericString`.
 */
function encodeNumericString(value: string, attributeType: string): ASN1Element {
    if (!isNumericString(value)) {
        throw new SyntaxError(
            `attribute type ${JSON.stringify(attributeType)}: character problem (value contains a character outside NumericString)`,
        );
    }
    return _encodeNumericString(value, BER);
}

/**
 * @summary Whether every character is in International Alphabet 5.
 */
function isIA5String(value: string): boolean {
    for (let i = 0; i < value.length; i++) {
        if (value.charCodeAt(i) > 0x7F) {
            return false;
        }
    }
    return true;
}

/**
 * @summary Encode an `IA5String`.
 */
function encodeIA5String(value: string, attributeType: string): ASN1Element {
    if (!isIA5String(value)) {
        throw new SyntaxError(
            `attribute type ${JSON.stringify(attributeType)}: character problem (value contains a character outside IA5String)`,
        );
    }
    return _encodeIA5String(value, BER);
}

/**
 * @summary Split an LDAP Postal Address into its lines.
 * @description
 *
 * [IETF RFC 4517](https://www.rfc-editor.org/rfc/rfc4517#section-3.3.28)
 * section 3.3.28 encodes `PostalAddress` as `line *( "$" line )`. A `\`
 * or `$` inside a line is written `\5C` or `\24`. Each line is an
 * `UnboundedDirectoryString` (`SIZE (1..MAX)`).
 */
function postalAddressLines(value: string, attributeType: string): string[] {
    const lines: string[] = [];
    let line = "";
    for (let i = 0; i < value.length; i++) {
        const code = value.charCodeAt(i);
        if (code === 0x24) {
            lines.push(line);
            line = "";
            continue;
        }
        if (code === 0x5C) {
            const hex = value.slice(i + 1, i + 3).toLowerCase();
            if ((hex !== "24") && (hex !== "5c")) {
                throw new SyntaxError(
                    `attribute type ${JSON.stringify(attributeType)}: malformed escape`,
                );
            }
            line += (hex === "24") ? "$" : "\\";
            i += 2;
            continue;
        }
        line += value.charAt(i);
    }
    lines.push(line);
    return lines;
}

/**
 * @summary Encode a `PostalAddress`.
 * @description
 *
 * ITU-T X.520 (2019) `PostalAddress` is a `SEQUENCE SIZE (1..MAX) OF`
 * `UnboundedDirectoryString`. `registeredAddress` uses the same syntax.
 */
function encodePostalAddress(value: string, attributeType: string): ASN1Element {
    const encodeLine = withLength(1)(encodeUnboundedDirectoryString);
    return _encodeSequence(
        postalAddressLines(value, attributeType).map((line) => encodeLine(line, attributeType)),
        BER,
    );
}

/**
 * @summary Encode an `INTEGER`.
 */
function encodeInteger(value: string, attributeType: string): ASN1Element {
    if (!/^-?\d+$/.test(value)) {
        throw new SyntaxError(
            `attribute type ${JSON.stringify(attributeType)}: character problem (value contains a character outside INTEGER)`,
        );
    }
    return _encodeInteger(BigInt(value), BER);
}

/**
 * @summary Encode an `OBJECT IDENTIFIER` written in dot-delimited notation.
 */
function encodeObjectIdentifier(value: string, attributeType: string): ASN1Element {
    for (let i = 0; i < value.length; i++) {
        const code = value.charCodeAt(i);
        const isDigit = (code >= 0x30) && (code <= 0x39);
        if (!isDigit && (code !== 0x2E)) {
            throw new SyntaxError(
                `attribute type ${JSON.stringify(attributeType)}: character problem (value contains a character outside OBJECT IDENTIFIER)`,
            );
        }
    }
    try {
        return _encodeObjectIdentifier(ObjectIdentifier.fromString(value), BER);
    } catch {
        throw new SyntaxError(
            `attribute type ${JSON.stringify(attributeType)}: value is not an object identifier`,
        );
    }
}

interface X520AttributeSyntax {
    readonly type: OBJECT_IDENTIFIER;
    readonly encode: (value: string, attributeType: string) => ASN1Element;
}

const directoryString = withLength(1)(encodeUnboundedDirectoryString);
const telephoneNumber = withLength(1, 32)(encodePrintableString);
const directoryString256 = withLength(1, 256)(encodeUnboundedDirectoryString);
const utf8String = (value: string): ASN1Element => _encodeUTF8String(value, BER);

/**
 * Short names from {@link distinguishedTypeToString}, plus the X.520
 * LDAP-NAME `givenName` (this module stringifies that type as `gn`).
 *
 * Syntaxes are from ITU-T X.520 (2019) `SelectedAttributeTypes`,
 * IETF RFC 4524, IETF RFC 4519, and PKCS #9 `emailAddress`:
 * `UnboundedDirectoryString` (some COSINE attributes are bounded to 256
 * characters), `PostalAddress` (a `SEQUENCE` of `UnboundedDirectoryString`,
 * written as in IETF RFC 4517 section 3.3.28), `PrintableString`,
 * `TelephoneNumber` (`PrintableString` of size 1..32), `IA5String`,
 * `CountryName` / `CountryCode3c` (`PrintableString` of a fixed size), and
 * `CountryCode3n` (`NumericString` of size 3).
 *
 * ITU-T X.412 (1999) OR-address-subtree name forms use `DirectoryString`
 * bounded by the MTS upper bound named in each attribute's `WITH SYNTAX`.
 */
const x520AttributeSyntaxes: ReadonlyMap<string, X520AttributeSyntax> = new Map([
    ["c", { type: id_at_countryName, encode: withLength(2, 2)(encodePrintableString) }],
    ["o", { type: id_at_organizationName, encode: directoryString }],
    ["ou", { type: id_at_organizationalUnitName, encode: directoryString }],
    ["dnqualifier", { type: id_at_dnQualifier, encode: encodePrintableString }],
    ["st", { type: id_at_stateOrProvinceName, encode: directoryString }],
    ["cn", { type: id_at_commonName, encode: directoryString }],
    ["serialnumber", { type: id_at_serialNumber, encode: withLength(1)(encodePrintableString) }],
    ["l", { type: id_at_localityName, encode: directoryString }],
    ["title", { type: id_at_title, encode: directoryString }],
    ["sn", { type: id_at_surname, encode: directoryString }],
    ["gn", { type: id_at_givenName, encode: directoryString }],
    ["givenname", { type: id_at_givenName, encode: directoryString }],
    ["initials", { type: id_at_initials, encode: directoryString }],
    ["pseudonym", { type: id_at_pseudonym, encode: directoryString }],
    ["generationqualifier", { type: id_at_generationQualifier, encode: directoryString }],
    ["c3", { type: id_at_countryCode3c, encode: withLength(3, 3)(encodePrintableString) }],
    ["n3", { type: id_at_countryCode3n, encode: withLength(3, 3)(encodeNumericString) }],
    ["street", { type: id_at_streetAddress, encode: directoryString }],
    ["streetaddress", { type: id_at_streetAddress, encode: directoryString }],
    ["postalcode", { type: id_at_postalCode, encode: directoryString }],
    ["postaladdress", { type: id_at_postalAddress, encode: encodePostalAddress }],
    ["registeredaddress", { type: id_at_registeredAddress, encode: encodePostalAddress }],
    ["telephonenumber", { type: id_at_telephoneNumber, encode: telephoneNumber }],
    ["dc", { type: id_dc, encode: encodeIA5String }],
    // IETF RFC 4519 section 2.39: `uid` is a `DirectoryString` of size 1..256
    // (`ub-user-identifier`). `userid` is the name used by IETF RFC 1274.
    ["uid", { type: id_uid, encode: directoryString256 }],
    ["userid", { type: id_uid, encode: directoryString256 }],
    ["documentidentifier", { type: id_documentIdentifier, encode: directoryString256 }],
    ["emailaddress", { type: id_emailAddress, encode: withLength(1, 255)(encodeIA5String) }],
    ["buildingname", { type: id_buildingName, encode: directoryString256 }],
    ["homephone", { type: id_homePhone, encode: telephoneNumber }],
    ["hometelephonenumber", { type: id_homePhone, encode: telephoneNumber }],
    ["roomnumber", { type: id_roomNumber, encode: directoryString256 }],
    ["mobile", { type: id_mobile, encode: telephoneNumber }],
    ["mobiletelephonenumber", { type: id_mobile, encode: telephoneNumber }],
    ["mail", { type: id_mail, encode: withLength(0, 256)(encodeIA5String) }],
    ["rfc822mailbox", { type: id_mail, encode: withLength(0, 256)(encodeIA5String) }],
    ["uniqueidentifier", { type: id_uniqueIdentifier, encode: directoryString256 }],
    ["pager", { type: id_pager, encode: telephoneNumber }],
    ["pagertelephonenumber", { type: id_pager, encode: telephoneNumber }],
    ["dmdname", { type: id_at_dmdName, encode: directoryString }],
    ["oidc", { type: id_oidC, encode: withLength(1)(encodeInteger) }],
    ["urnc", { type: id_at_urnC, encode: encodePrintableString }],
    ["houseidentifier", { type: id_at_houseIdentifier, encode: directoryString }],
    ["postofficebox", { type: id_at_postOfficeBox, encode: directoryString }],
    ["jid", { type: id_at_jid, encode: utf8String }],
    ["jabber identifier", { type: id_at_jid, encode: utf8String }],
    ["objectidentifier", { type: id_at_objectIdentifier, encode: withLength(1)(encodeObjectIdentifier) }],
    ["object identifier", { type: id_at_objectIdentifier, encode: withLength(1)(encodeObjectIdentifier) }],
    ["intemail", { type: id_at_intEmail, encode: utf8String }],
    ["internationalized email", { type: id_at_intEmail, encode: utf8String }],
    ["dnsname", { type: id_at_dnsName, encode: utf8String }],
    ["dns name", { type: id_at_dnsName, encode: utf8String }],
    ["organizationidentifier", { type: id_at_organizationIdentifier, encode: directoryString }],
    ["mhsadmdname", { type: id_at_mhs_admd_name, encode: withLength(1, 16)(encodeUnboundedDirectoryString) }],
    ["mhscommonnameattribute", { type: id_at_mhs_common_name, encode: withLength(1, 64)(encodeUnboundedDirectoryString) }],
    ["mhscountryname", { type: id_at_mhs_country_name, encode: withLength(1, 3)(encodeUnboundedDirectoryString) }],
    ["mhsextendednetworkaddressattribute", { type: id_at_mhs_extended_network_address, encode: withLength(1, 256)(encodeUnboundedDirectoryString) }],
    ["mhsgenerationqualifierattribute", { type: id_at_mhs_generation_qualifier, encode: withLength(1, 3)(encodeUnboundedDirectoryString) }],
    ["mhsgivennameattribute", { type: id_at_mhs_given_name, encode: withLength(1, 16)(encodeUnboundedDirectoryString) }],
    ["mhsinitialsattribute", { type: id_at_mhs_initials, encode: withLength(1, 5)(encodeUnboundedDirectoryString) }],
    ["mhsnetworkaddressattribute", { type: id_at_mhs_network_address, encode: withLength(1, 16)(encodeUnboundedDirectoryString) }],
    ["mhsnumericuseridentifierattribute", { type: id_at_mhs_numeric_user_identifier, encode: withLength(1, 32)(encodeUnboundedDirectoryString) }],
    ["mhsorganizationname", { type: id_at_mhs_organization_name, encode: withLength(1, 64)(encodeUnboundedDirectoryString) }],
    ["mhsorganizationalunitname", { type: id_at_mhs_organizational_unit_name, encode: withLength(1, 32)(encodeUnboundedDirectoryString) }],
    ["mhspdsnameattribute", { type: id_at_mhs_pds_name_attribute, encode: withLength(1, 16)(encodeUnboundedDirectoryString) }],
    ["mhspostalcodeattribute", { type: id_at_mhs_postal_code, encode: withLength(1, 16)(encodeUnboundedDirectoryString) }],
    ["mhsprmdname", { type: id_at_mhs_prmd_name, encode: withLength(1, 16)(encodeUnboundedDirectoryString) }],
    ["mhssurnameattribute", { type: id_at_mhs_surname, encode: withLength(1, 40)(encodeUnboundedDirectoryString) }],
    ["mhsterminalidentifierattribute", { type: id_at_mhs_terminal_identifier, encode: withLength(1, 24)(encodeUnboundedDirectoryString) }],
    ["mhsterminaltypeattribute", { type: id_at_mhs_terminal_type, encode: withLength(1, 5)(encodeUnboundedDirectoryString) }],
]);

/**
 * @summary Parse a recognized attribute type and value.
 * @description
 *
 * `strings.value` is the unescaped character value. The returned `value` is
 * a BER element of the attribute's directory syntax.
 *
 * @param strings The attribute type name and unescaped value.
 * @returns The attribute type OID and BER-encoded value.
 */
export function atavFromStringX520(strings: ParsedAttributeTypeAndValue): AttributeTypeAndValue {
    const syntax = x520AttributeSyntaxes.get(strings.type.toLowerCase());
    if (!syntax) {
        throw new SyntaxError(`unrecognized attribute type ${JSON.stringify(strings.type)}`);
    }
    return new AttributeTypeAndValue(
        syntax.type,
        syntax.encode(strings.value, strings.type),
    );
}

export function atavFromString(str: string): ParsedAttributeTypeAndValue {
    const equalsIndex = str.indexOf("=");
    if (equalsIndex === -1) {
        throw new SyntaxError("malformed attribute type and value");
    }
    return new ParsedAttributeTypeAndValue(
        str.slice(0, equalsIndex),
        unescapeDistinguishedValue(str.slice(equalsIndex + 1)),
    );
}

export default atavFromString;
