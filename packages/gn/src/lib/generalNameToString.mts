import type { ASN1Element } from "@wildboar/asn1";
import { rdnSequenceToString } from "@wildboar/dn";
import type { GeneralName } from "./GeneralName.ta.mjs";
import { bytesToHex } from "./hex.mjs";
import { ipAddressToString } from "./ipAddress.mjs";
import { otherNameToString } from "./otherNameToString.mjs";

/**
 * @summary Print a `GeneralName`
 * @description
 *
 * The result is the CHOICE alternative, a colon, and a value. It is meant to
 * be read by a person. It is not an exact encoding of the name:
 * `generalNameFromString` accepts the text-like alternatives, the string
 * `otherName` forms, and `HardwareModuleName`. It refuses `ediPartyName`,
 * `PermanentIdentifier`, and `SIM`.
 *
 * `directoryName` uses the RFC 4514 form of the RDN sequence (leaf first),
 * without a `rdnSequence:` prefix. `x400Address` uses the RFC 1685 form from
 * `ORAddress.toString()`. `iPAddress` uses dotted IPv4, RFC 5952 IPv6, or a
 * CIDR range (`192.0.2.0/24`) for the 8- and 32-octet name-constraint form.
 * An alternative this package does not recognize is `#` and the hexadecimal
 * encoding of the element.
 *
 * @param gn The general name
 * @returns `alternative:value`
 * @function
 */
export function generalNameToString(gn: GeneralName): string {
    if ("otherName" in gn) {
        return `otherName:${otherNameToString(gn.otherName)}`;
    }
    if ("rfc822Name" in gn) {
        return `rfc822Name:${gn.rfc822Name}`;
    }
    if ("dNSName" in gn) {
        return `dNSName:${gn.dNSName}`;
    }
    if ("x400Address" in gn) {
        return `x400Address:${gn.x400Address.toString()}`;
    }
    if ("directoryName" in gn) {
        if (!("rdnSequence" in gn.directoryName)) {
            throw new TypeError("Unsupported Name alternative");
        }
        return `directoryName:${rdnSequenceToString(gn.directoryName.rdnSequence)}`;
    }
    if ("ediPartyName" in gn) {
        return `ediPartyName:${gn.ediPartyName.toString()}`;
    }
    if ("uniformResourceIdentifier" in gn) {
        return `uniformResourceIdentifier:${gn.uniformResourceIdentifier}`;
    }
    if ("iPAddress" in gn) {
        return `iPAddress:${ipAddressToString(gn.iPAddress)}`;
    }
    if ("registeredID" in gn) {
        return `registeredID:${gn.registeredID.toString()}`;
    }
    return `#${bytesToHex((gn as ASN1Element).toBytes())}`;
}

export default generalNameToString;
