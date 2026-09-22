import { DERElement, ASN1TagClass, ASN1Construction, ASN1UniversalType } from "@wildboar/asn1";
import { DER } from "@wildboar/asn1/functional";
import {
    ProtocolInformation,
    _encode_ProtocolInformation,
} from "../../modules/SelectedAttributeTypes/ProtocolInformation.ta.mjs";
import protocolInformationMatch from "./protocolInformationMatch.mjs";

function octetString (bytes: number[]): DERElement {
    return new DERElement(
        ASN1TagClass.universal,
        ASN1Construction.primitive,
        ASN1UniversalType.octetString,
        new Uint8Array(bytes),
    );
}

describe("protocolInformationMatch()", () => {
    it("matches an OCTET STRING assertion against stored nAddress", () => {
        const nAddress = new Uint8Array([ 1, 2, 3, 4 ]);
        const stored = _encode_ProtocolInformation(new ProtocolInformation(nAddress, []), DER);
        expect(protocolInformationMatch(octetString([ 1, 2, 3, 4 ]), stored)).toBe(true);
        expect(protocolInformationMatch(octetString([ 1, 2, 3, 5 ]), stored)).toBe(false);
    });

    it("still accepts a ProtocolInformation assertion by using its nAddress", () => {
        const stored = _encode_ProtocolInformation(
            new ProtocolInformation(new Uint8Array([ 9, 9 ]), []),
            DER,
        );
        const assertion = _encode_ProtocolInformation(
            new ProtocolInformation(new Uint8Array([ 9, 9 ]), []),
            DER,
        );
        expect(protocolInformationMatch(assertion, stored)).toBe(true);
    });
});
