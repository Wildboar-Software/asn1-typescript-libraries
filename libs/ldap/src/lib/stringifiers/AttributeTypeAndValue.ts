import type StringEncoderGetter from "../types/StringEncoderGetter";
import { ASN1Element, BERElement, OBJECT_IDENTIFIER } from "asn1-ts";
import type AttributeTypeAndValue from "../types/AttributeTypeAndValue";

export
const backslashable = new Set([
    " ",
    "\"",
    "#",
    "+",
    ",",
    ";",
    "<",
    "=",
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
    while (i < str.length) {
        const char = str[i];
        if (backslashable.has(char)) {
            ret += `\\${char}`;
        } else if (hexable.has(char)) {
            ret += `\\${char.charCodeAt(0).toString(16).padStart(2, "0")}`;
        } else {
            ret += char;
        }
        i++;
    }
    return ret;
}

export
function defaultValueEncoder (value: ASN1Element): string {
    const el = new BERElement();
    el.fromBytes(value.toBytes());
    return "#" + Array.from(el.toBytes())
        .map((byte) => byte.toString(16).padStart(2, "0"))
        .join("");
}

export
function stringifyAttributeTypeAndValue (
    atav: AttributeTypeAndValue,
    getEncoder: StringEncoderGetter,
    typeNameGetter: (type: OBJECT_IDENTIFIER) => string,
): string {
    const encoder = getEncoder(atav[0]);
    const type_ = typeNameGetter(atav[0]) ?? atav[0].toString();
    const value = encoder
        ? escapeATAV(encoder(atav[1]))
        : defaultValueEncoder(atav[1]);
    return `${type_}=${value}`;
}

export default stringifyAttributeTypeAndValue;
