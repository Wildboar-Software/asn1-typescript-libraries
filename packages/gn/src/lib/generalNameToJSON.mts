import {
    DERElement,
    External,
    ObjectIdentifier,
    type ASN1Element,
} from "@wildboar/asn1";
import {
    nameFromJSON,
    nameToJER,
    nameToJSON,
    type NameJER,
    type NameJSON,
} from "@wildboar/dn";
import {
    BuiltInDomainDefinedAttribute,
    BuiltInStandardAttributes,
    ORAddress,
    type ORAddressJSON,
} from "@wildboar/or-address";
import {
    EDIPartyName,
    type EDIPartyNameJSON,
} from "./EDIPartyName.ta.mjs";
import type { GeneralName } from "./GeneralName.ta.mjs";
import { bytesToHex, hexToBytes } from "./hex.mjs";

/**
 * @summary Reversible JSON for a `GeneralName`
 * @description
 *
 * One key, the CHOICE alternative. `generalNameFromJSON` reverses it, with
 * one exception noted on `x400Address`.
 */
export type GeneralNameJSON =
    | { otherName: { "type-id": string; value: string } }
    | { rfc822Name: string }
    | { dNSName: string }
    | { x400Address: ORAddressJSON }
    | { directoryName: NameJSON }
    | { ediPartyName: EDIPartyNameJSON }
    | { uniformResourceIdentifier: string }
    | { iPAddress: string }
    | { registeredID: string }
    | { _unrecognized: string };

/**
 * @summary Irreversible JSON Encoding Rules form of a `GeneralName`
 * @description
 *
 * Like {@link GeneralNameJSON}, except `otherName`'s value is whatever the
 * value element's `toJSON()` returns, and `directoryName` uses JER. Neither
 * can be turned back into a `GeneralName`. `x400Address` is the same object
 * `ORAddress.toJSON()` returns in both forms.
 */
export type GeneralNameJER =
    | { otherName: { "type-id": string; value: unknown } }
    | { rfc822Name: string }
    | { dNSName: string }
    | { x400Address: ORAddressJSON }
    | { directoryName: NameJER }
    | { ediPartyName: EDIPartyNameJSON }
    | { uniformResourceIdentifier: string }
    | { iPAddress: string }
    | { registeredID: string }
    | { _unrecognized: string };

/**
 * @summary Convert a `GeneralName` to reversible JSON
 * @description
 *
 * `otherName` keeps the type-id and `#` plus the hexadecimal BER encoding of
 * the value element. `iPAddress` is lowercase hex of the raw octets.
 * `x400Address` is `ORAddress.toJSON()`. `directoryName` is
 * {@link nameToJSON}. An unrecognized alternative is `{ "_unrecognized":
 * "#hex" }`; an identifier cannot start with `_`, so this cannot collide
 * with a real alternative.
 *
 * @param gn The general name
 * @returns A single-key object
 * @function
 */
export function generalNameToJSON(gn: GeneralName): GeneralNameJSON {
    if ("otherName" in gn) {
        return {
            otherName: {
                "type-id": gn.otherName.directReference?.toString() ?? "",
                value: `#${bytesToHex(valueElementBytes(gn.otherName))}`,
            },
        };
    }
    if ("rfc822Name" in gn) {
        return { rfc822Name: gn.rfc822Name };
    }
    if ("dNSName" in gn) {
        return { dNSName: gn.dNSName };
    }
    if ("x400Address" in gn) {
        return { x400Address: gn.x400Address.toJSON() };
    }
    if ("directoryName" in gn) {
        return { directoryName: nameToJSON(gn.directoryName) };
    }
    if ("ediPartyName" in gn) {
        return { ediPartyName: gn.ediPartyName.toJSON() };
    }
    if ("uniformResourceIdentifier" in gn) {
        return { uniformResourceIdentifier: gn.uniformResourceIdentifier };
    }
    if ("iPAddress" in gn) {
        return { iPAddress: bytesToHex(gn.iPAddress) };
    }
    if ("registeredID" in gn) {
        return { registeredID: gn.registeredID.toString() };
    }
    return { _unrecognized: `#${bytesToHex((gn as ASN1Element).toBytes())}` };
}

/**
 * @summary Convert a `GeneralName` to irreversible JER
 * @description
 *
 * `otherName`'s value is the value element's `toJSON()`, or hex when the
 * encoding is raw octets. `directoryName` uses {@link nameToJER}.
 * `x400Address` is still `ORAddress.toJSON()`, the same as
 * {@link generalNameToJSON}.
 *
 * @param gn The general name
 * @returns A single-key object
 * @function
 */
export function generalNameToJER(gn: GeneralName): GeneralNameJER {
    if ("otherName" in gn) {
        const encoding = gn.otherName.encoding;
        return {
            otherName: {
                "type-id": gn.otherName.directReference?.toString() ?? "",
                value: (encoding instanceof Uint8Array || encoding instanceof Uint8ClampedArray)
                    ? bytesToHex(encoding)
                    : encoding.toJSON(),
            },
        };
    }
    if ("directoryName" in gn) {
        return { directoryName: nameToJER(gn.directoryName) };
    }
    return generalNameToJSON(gn);
}

/**
 * @summary Convert {@link generalNameToJSON} output back into a `GeneralName`
 * @description
 *
 * `x400Address` is rebuilt from `BuiltInStandardAttributes.fromJSON` and
 * `BuiltInDomainDefinedAttribute.fromJSON`. That works only when
 * `extension-attributes` is absent or empty: `ORAddress.toJSON()` writes each
 * extension value with the element's lossy `toJSON()`, and those values
 * cannot be rebuilt. This throws `SyntaxError` in that case rather than
 * returning an address with the extensions missing. A complete
 * `ORAddress.fromJSON` belongs in `@wildboar/or-address`.
 *
 * @param json A single-key object from {@link generalNameToJSON}
 * @returns The general name
 * @throws {SyntaxError} If `json` is malformed, or an X.400 address has extension attributes
 * @function
 */
export function generalNameFromJSON(json: GeneralNameJSON): GeneralName {
    if ((typeof json !== "object") || (json === null)) {
        throw new SyntaxError("GeneralName JSON must be an object");
    }
    if ("otherName" in json) {
        return { otherName: otherNameFromJSON(json.otherName) };
    }
    if ("rfc822Name" in json) {
        return { rfc822Name: requireString(json.rfc822Name, "rfc822Name") };
    }
    if ("dNSName" in json) {
        return { dNSName: requireString(json.dNSName, "dNSName") };
    }
    if ("x400Address" in json) {
        return { x400Address: orAddressFromJSON(json.x400Address) };
    }
    if ("directoryName" in json) {
        return { directoryName: nameFromJSON(json.directoryName) };
    }
    if ("ediPartyName" in json) {
        return { ediPartyName: EDIPartyName.fromJSON(json.ediPartyName) };
    }
    if ("uniformResourceIdentifier" in json) {
        return {
            uniformResourceIdentifier: requireString(
                json.uniformResourceIdentifier,
                "uniformResourceIdentifier",
            ),
        };
    }
    if ("iPAddress" in json) {
        return { iPAddress: hexToBytes(requireString(json.iPAddress, "iPAddress")) };
    }
    if ("registeredID" in json) {
        return { registeredID: ObjectIdentifier.fromString(requireString(json.registeredID, "registeredID")) };
    }
    if ("_unrecognized" in json) {
        return elementFromHex(requireString(json._unrecognized, "_unrecognized"));
    }
    throw new SyntaxError("GeneralName JSON must contain one alternative");
}

function requireString(value: unknown, alternative: string): string {
    if (typeof value !== "string") {
        throw new SyntaxError(`${alternative} JSON must be a string`);
    }
    return value;
}

function elementFromHex(hex: string): ASN1Element {
    if (!hex.startsWith("#")) {
        throw new SyntaxError("encoded element JSON must start with #");
    }
    const el: DERElement = new DERElement();
    el.fromBytes(hexToBytes(hex.slice(1)));
    return el;
}

function valueElementBytes(otherName: External): Uint8Array {
    const encoding = otherName.encoding;
    if (encoding instanceof Uint8ClampedArray) {
        return Uint8Array.from(encoding);
    }
    if (encoding instanceof Uint8Array) {
        return encoding;
    }
    return encoding.toBytes();
}

function otherNameFromJSON(json: { "type-id": string; value: string }): External {
    if (
        (typeof json !== "object")
        || (json === null)
        || typeof json["type-id"] !== "string"
        || typeof json.value !== "string"
    ) {
        throw new SyntaxError("otherName JSON must have a type-id and a #hex value");
    }
    return new External(
        json["type-id"].length === 0
            ? undefined
            : ObjectIdentifier.fromString(json["type-id"]),
        undefined,
        undefined,
        elementFromHex(json.value),
    );
}

function orAddressFromJSON(json: ORAddressJSON): ORAddress {
    if ((typeof json !== "object") || (json === null)) {
        throw new SyntaxError("x400Address JSON must be an object");
    }
    const extensions = json["extension-attributes"];
    if (extensions && extensions.length > 0) {
        throw new SyntaxError(
            "x400Address JSON with extension-attributes cannot be reversed",
        );
    }
    const builtIn = json["built-in-standard-attributes"];
    if (!builtIn) {
        throw new SyntaxError("x400Address JSON is missing built-in-standard-attributes");
    }
    const attributes = BuiltInStandardAttributes.fromJSON(builtIn);
    const domainDefined = json["built-in-domain-defined-attributes"];
    if (domainDefined && domainDefined.length > 0) {
        return new ORAddress(
            attributes,
            domainDefined.map((attribute) => BuiltInDomainDefinedAttribute.fromJSON(attribute)),
        );
    }
    return new ORAddress(attributes);
}

export default generalNameToJSON;
