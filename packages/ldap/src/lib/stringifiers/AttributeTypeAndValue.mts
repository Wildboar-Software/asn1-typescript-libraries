import type StringEncoderGetter from "../types/StringEncoderGetter.mjs";
import { ASN1Element, BERElement, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import type AttributeTypeAndValue from "../types/AttributeTypeAndValue.mjs";

export
const backslashable = new Set([
    // " ",
    "\"",
    // "#",
    "+",
    ",",
    ";",
    "<",
    "=", // Technically does not have to be escaped, but we will escape it.
    ">",
    "\\",
]);

export
const hexable = new Set([
    "\x00",
]);

export
function escapeATAV (str: string): string {
    let ret: string = "";
    let i: number = 0;
    if (str.startsWith("#")) {
        ret += "\\#";
        i++;
    }
    if (str.startsWith(" ")) {
        ret += "\\ ";
    }
    while (i < str.length) {
        const char = str[i];
        if (backslashable.has(char)) {
            ret += `\\${char}`;
        } else if (hexable.has(char)) {
            ret += `\\${char.charCodeAt(0).toString(16).padStart(2, "0")}`;
        } else if ((i === (str.length - 1)) && (char === " ")) {
            ret += "\\ "; // Trailing space must be escaped.
        } else {
            ret += char;
        }
        i++;
    }
    return ret;
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

/**
 * @summary Stringify an attribute type and value according to RFC 4514.
 * @description
 * 
 * This function stringifies an attribute type and value according to
 * [IETF RFC 4514](https://www.rfc-editor.org/rfc/rfc4514).
 * 
 * @param atav The attribute type and value to stringify.
 * @param getEncoder A function that can be used to get a string encoder.
 * @param typeNameGetter A function that can be used to get an attribute type name.
 * @returns The stringified attribute type and value.
 * @function
 */
export
function stringifyAttributeTypeAndValue (
    atav: AttributeTypeAndValue,
    getEncoder: StringEncoderGetter,
    typeNameGetter: (type: OBJECT_IDENTIFIER) => string | undefined,
): string {
    const encoder = getEncoder(atav[0]);
    const type_ = typeNameGetter(atav[0]) ?? atav[0].toString();
    const value = encoder
        ? escapeATAV(encoder(atav[1]))
        : defaultValueEncoder(atav[1]);
    return `${type_}=${value}`;
}

export default stringifyAttributeTypeAndValue;
