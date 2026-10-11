import type { ASN1Element } from "@wildboar/asn1";
import { DER } from "@wildboar/asn1/functional";
import { nameToASN1String } from "@wildboar/dn";
import { _encode_ORAddress } from "@wildboar/or-address";
import type { GeneralName } from "./GeneralName.ta.mjs";
import { bytesToHex } from "./hex.mjs";

/**
 * @summary Textual ASN.1 value notation for a `GeneralName`
 * @description
 *
 * The result is the CHOICE alternative, ` : `, and a value. Character strings
 * are quoted, and a quotation mark inside a string is doubled. `iPAddress`
 * is an `hstring` of the raw octets. `directoryName` and `ediPartyName` use
 * their own value notation.
 *
 * `otherName` prints the type-id and the value element's own `toString()`.
 * `x400Address`, and an alternative this package does not recognize, use the
 * encoded element's `toString()`. As with the directory-name notation this
 * is built on, that is a readable approximation: it is not guaranteed to be
 * valid ASN.1 value notation, and it is not parsed back.
 *
 * @param gn The general name
 * @returns `alternative : value`
 * @function
 */
export function generalNameToASN1String(gn: GeneralName): string {
    if ("otherName" in gn) {
        const typeId: string = gn.otherName.directReference?.toString() ?? "";
        const encoding = gn.otherName.encoding;
        const value: string = encoding instanceof Uint8Array
            ? `'${bytesToHex(encoding).toUpperCase()}'H`
            : encoding.toString();
        return `otherName : { type-id ${typeId}, value ${value} }`;
    }
    if ("rfc822Name" in gn) {
        return `rfc822Name : ${quote(gn.rfc822Name)}`;
    }
    if ("dNSName" in gn) {
        return `dNSName : ${quote(gn.dNSName)}`;
    }
    if ("x400Address" in gn) {
        return `x400Address : ${_encode_ORAddress(gn.x400Address, DER).toString()}`;
    }
    if ("directoryName" in gn) {
        return `directoryName : ${nameToASN1String(gn.directoryName)}`;
    }
    if ("ediPartyName" in gn) {
        return `ediPartyName : ${gn.ediPartyName.toASN1String()}`;
    }
    if ("uniformResourceIdentifier" in gn) {
        return `uniformResourceIdentifier : ${quote(gn.uniformResourceIdentifier)}`;
    }
    if ("iPAddress" in gn) {
        return `iPAddress : '${bytesToHex(gn.iPAddress).toUpperCase()}'H`;
    }
    if ("registeredID" in gn) {
        return `registeredID : ${gn.registeredID.asn1Notation}`;
    }
    return (gn as ASN1Element).toString();
}

function quote(s: string): string {
    return `"${s.replaceAll('"', '""')}"`;
}

export default generalNameToASN1String;
