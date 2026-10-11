import { ObjectIdentifier } from "@wildboar/asn1";
import { rdnSequenceFromStringX520 } from "@wildboar/dn";
import { ORAddress } from "@wildboar/or-address";
import type { GeneralName } from "./GeneralName.ta.mjs";
import { ipAddressFromString } from "./ipAddress.mjs";
import { otherNameFromString } from "./otherNameToString.mjs";

/**
 * @summary Best-effort parse of a string from {@link generalNameToString}
 * @description
 *
 * This is not an exact inverse. It accepts:
 *
 * - `rfc822Name`, `dNSName`, and `uniformResourceIdentifier`, when every
 *   character is IA5 (a code point below 128);
 * - `iPAddress`, including a CIDR range such as `iPAddress:192.0.2.0/24`,
 *   which becomes the 8-octet name-constraint form;
 * - `registeredID`;
 * - `directoryName`, as an RFC 4514 distinguished name (no `rdnSequence:` prefix);
 * - `x400Address`, in the RFC 1685 form that `ORAddress.fromString` accepts;
 * - `otherName:type:value` for the string forms `UPN`, `XMPPAddr`, `SRVName`,
 *   `NAIRealm`, `SmtpUTF8Mailbox`, `AcpNodeName`, and `BundleEID`, and for
 *   `HardwareModuleName:{ hwType:oid, hwSerialNum:hex }`.
 *
 * The alternative name is matched without regard to case, as is the
 * `otherName` type name (`srvname`, `upn`, and so on). `ediPartyName`,
 * `PermanentIdentifier`, `SIM`, an unknown alternative, and a malformed
 * value throw `SyntaxError`. A malformed `registeredID`, or a
 * `HardwareModuleName` `hwType` that is not a valid object identifier,
 * throws the `Error` raised by `ObjectIdentifier.fromString`.
 *
 * @param text `alternative:value`
 * @returns The general name
 * @throws {SyntaxError} If `text` cannot be parsed
 * @throws {Error} If a `registeredID` or `HardwareModuleName` `hwType` is not a valid object identifier
 * @function
 */
export function generalNameFromString(text: string): GeneralName {
    const colon: number = text.indexOf(":");
    if (colon <= 0) {
        throw new SyntaxError("GeneralName string must be alternative:value");
    }
    const alternative: string = text.slice(0, colon).toLowerCase();
    const value: string = text.slice(colon + 1);
    switch (alternative) {
        case "rfc822name":
        case "rfc822":
            return { rfc822Name: requireIa5(value, alternative) };
        case "dnsname":
        case "dns":
            return { dNSName: requireIa5(value, alternative) };
        case "uniformresourceidentifier":
        case "uri":
            return { uniformResourceIdentifier: requireIa5(value, alternative) };
        case "ipaddress":
        case "ip":
            return { iPAddress: ipAddressFromString(value) };
        case "registeredid":
        case "oid":
            return { registeredID: ObjectIdentifier.fromString(value) };
        case "directoryname":
        case "dn":
        case "x500":
            return { directoryName: { rdnSequence: rdnSequenceFromStringX520(value) } };
        case "x400":
        case "x400address": {
            const address: ORAddress | null = ORAddress.fromString(value);
            if (!address) {
                throw new SyntaxError("invalid x400Address string");
            }
            return { x400Address: address };
        }
        case "othername":
        case "other":
            return { otherName: otherNameFromString(value) };
        case "edipartyname":
        case "edi":
            throw new SyntaxError(`${alternative} cannot be parsed from a string`);
        default:
            throw new SyntaxError(`unknown GeneralName alternative: ${alternative}`);
    }
}

function requireIa5(value: string, alternative: string): string {
    for (let i: number = 0; i < value.length; i++) {
        if (value.charCodeAt(i) > 0x7F) {
            throw new SyntaxError(`${alternative} must be an IA5String`);
        }
    }
    return value;
}

export default generalNameFromString;
