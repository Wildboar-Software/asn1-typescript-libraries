import {
    ASN1Construction,
    ASN1TagClass,
    ASN1UniversalType,
    DERElement,
    ObjectIdentifier,
    type ASN1Element,
} from "@wildboar/asn1";
import { DER } from "@wildboar/asn1/functional";
import { ipv4ToNSAP } from "../../distributed/ipv4.mjs";
import {
    ProtocolInformation,
    _encode_ProtocolInformation,
} from "../../modules/SelectedAttributeTypes/ProtocolInformation.ta.mjs";
import protocolInformationMatch from "./protocolInformationMatch.mjs";

const PROFILE_A = ObjectIdentifier.fromParts([1, 2, 3]);
const PROFILE_B = ObjectIdentifier.fromParts([1, 2, 4]);
const ADDRESS = new Uint8Array([0x01, 0x02, 0x03]);

function octets (bytes: Uint8Array): ASN1Element {
    return new DERElement(
        ASN1TagClass.universal,
        ASN1Construction.primitive,
        ASN1UniversalType.octetString,
        bytes,
    );
}

function protocolInformation (
    nAddress: Uint8Array,
    profiles: ObjectIdentifier[] = [PROFILE_A],
): ASN1Element {
    return _encode_ProtocolInformation(
        new ProtocolInformation(nAddress, profiles),
        DER,
    );
}

describe("protocolInformationMatch", () => {
    it("matches an OCTET STRING assertion to the stored nAddress", () => {
        expect(protocolInformationMatch(
            octets(ADDRESS),
            protocolInformation(ADDRESS, [PROFILE_A, PROFILE_B]),
        )).toBe(true);
        expect(protocolInformationMatch(
            octets(new Uint8Array()),
            protocolInformation(new Uint8Array(), []),
        )).toBe(true);
    });

    it("rejects an OCTET STRING that is not the stored nAddress", () => {
        expect(protocolInformationMatch(
            octets(new Uint8Array([0x01, 0x02])),
            protocolInformation(ADDRESS),
        )).toBe(false);
        expect(protocolInformationMatch(
            octets(new Uint8Array([0x01, 0x02, 0x04])),
            protocolInformation(ADDRESS),
        )).toBe(false);
    });

    it("tolerates a ProtocolInformation assertion and ignores profiles", () => {
        expect(protocolInformationMatch(
            protocolInformation(ADDRESS, [PROFILE_B]),
            protocolInformation(ADDRESS, [PROFILE_A]),
        )).toBe(true);
        expect(protocolInformationMatch(
            protocolInformation(ADDRESS, []),
            protocolInformation(ADDRESS, [PROFILE_A, PROFILE_B]),
        )).toBe(true);
        expect(protocolInformationMatch(
            protocolInformation(new Uint8Array([0x09]), [PROFILE_A]),
            protocolInformation(ADDRESS, [PROFILE_A]),
        )).toBe(false);
    });

    it("compares IPv4 NSAPs with the ITOT default port", () => {
        const host = new Uint8Array([192, 0, 2, 1]);
        const omitted = ipv4ToNSAP(0x03, host);
        const port102 = ipv4ToNSAP(0x03, host, 102);
        const port103 = ipv4ToNSAP(0x03, host, 103);
        expect(protocolInformationMatch(
            octets(omitted),
            protocolInformation(port102),
        )).toBe(true);
        expect(protocolInformationMatch(
            protocolInformation(omitted, [PROFILE_B]),
            protocolInformation(port102, [PROFILE_A]),
        )).toBe(true);
        expect(protocolInformationMatch(
            octets(port103),
            protocolInformation(port102),
        )).toBe(false);
    });
});
