import { ObjectIdentifier as _OID } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { CCLink_State_callActive } from "./lib/modules/HI2Operations/CCLink-State.ta.mjs";
import { CallContentLinkCharacteristics } from "./lib/modules/HI2Operations/CallContentLinkCharacteristics.ta.mjs";
import { CommunicationIdentifier } from "./lib/modules/HI2Operations/CommunicationIdentifier.ta.mjs";
import {
    IRI_Parameters,
    _decode_IRI_Parameters,
    _encode_IRI_Parameters,
} from "./lib/modules/HI2Operations/IRI-Parameters.ta.mjs";
import { IRI_Parameters_callContentLinkInformation } from "./lib/modules/HI2Operations/IRI-Parameters-callContentLinkInformation.ta.mjs";
import { IRI_Parameters_iRIversion_lastVersion } from "./lib/modules/HI2Operations/IRI-Parameters-iRIversion.ta.mjs";
import { IRI_Parameters_intercepted_Call_Direct_originating_Target } from "./lib/modules/HI2Operations/IRI-Parameters-intercepted-Call-Direct.ta.mjs";
import { IRI_Parameters_nature_Of_The_intercepted_call_gSM_ISDN_PSTN_circuit_call } from "./lib/modules/HI2Operations/IRI-Parameters-nature-Of-The-intercepted-call.ta.mjs";
import { IPAddress } from "./lib/modules/HI2Operations/IPAddress.ta.mjs";
import { IPAddress_iP_assignment_dynamic } from "./lib/modules/HI2Operations/IPAddress-iP-assignment.ta.mjs";
import { IPAddress_iP_type_iPV4 } from "./lib/modules/HI2Operations/IPAddress-iP-type.ta.mjs";
import { Network_Identifier } from "./lib/modules/HI2Operations/Network-Identifier.ta.mjs";
import { PartyInformation } from "./lib/modules/HI2Operations/PartyInformation.ta.mjs";
import { PartyInformation_partyIdentity } from "./lib/modules/HI2Operations/PartyInformation-partyIdentity.ta.mjs";
import { PartyInformation_party_Qualifier_originating_Party } from "./lib/modules/HI2Operations/PartyInformation-party-Qualifier.ta.mjs";
import { lawfulInterceptDomainId } from "./lib/modules/HI2Operations/lawfulInterceptDomainId.va.mjs";

describe("HI2Operations IRI_Parameters", () => {
    test("round-trips a nested IRI with party, IP address, and an opaque monitor", () => {
        const observed = new Date(Date.UTC(2026, 9, 11, 13, 22, 0));
        const monitor = $._encodeInteger(7, $.BER);
        const original = new IRI_Parameters(
            _OID.fromParts([1], lawfulInterceptDomainId),
            IRI_Parameters_iRIversion_lastVersion,
            new Uint8Array([0x4c, 0x49, 0x49, 0x44, 0x01]),
            new CommunicationIdentifier(
                new Uint8Array([0x01, 0x02, 0x03, 0x04]),
                new Network_Identifier(
                    new Uint8Array([0x0a, 0x0b, 0x0c]),
                    {
                        iP_Address: new IPAddress(
                            IPAddress_iP_type_iPV4,
                            { iPBinaryAddress: new Uint8Array([192, 0, 2, 10]) },
                            IPAddress_iP_assignment_dynamic,
                            undefined,
                            new Uint8Array([255, 255, 255, 0]),
                        ),
                    },
                ),
            ),
            { utcTime: observed },
            IRI_Parameters_intercepted_Call_Direct_originating_Target,
            undefined,
            new Uint8Array([0x00, 0x00, 0x05]),
            undefined,
            undefined,
            [
                new PartyInformation(
                    PartyInformation_party_Qualifier_originating_Party,
                    new PartyInformation_partyIdentity(
                        new Uint8Array([0x11, 0x22, 0x33, 0x44, 0x55, 0x66, 0x77, 0x88]),
                        undefined,
                        new Uint8Array([0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x07, 0x08]),
                        undefined,
                        undefined,
                        new Uint8Array([0x31, 0x32, 0x33, 0x34, 0x35]),
                        undefined,
                        undefined,
                        undefined,
                        undefined,
                        "originating-party",
                    ),
                    undefined,
                    undefined,
                    undefined,
                ),
            ],
            new IRI_Parameters_callContentLinkInformation(
                new CallContentLinkCharacteristics(
                    CCLink_State_callActive,
                    { utcTime: observed },
                    new Uint8Array([0x00, 0x10]),
                    { iSUP_Format: new Uint8Array([0x21, 0x43]) },
                ),
                undefined,
            ),
            undefined,
            IRI_Parameters_nature_Of_The_intercepted_call_gSM_ISDN_PSTN_circuit_call,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            new Uint8Array([0x53, 0x49, 0x50]),
            undefined,
            undefined,
            monitor,
        );
        const decoded = _decode_IRI_Parameters(_encode_IRI_Parameters(original, $.BER));
        expect(decoded).toEqual(original);
        expect(decoded.tARGETACTIVITYMONITOR?.toBytes()).toEqual(monitor.toBytes());
        expect(decoded.iRIversion).toBe(IRI_Parameters_iRIversion_lastVersion);
        expect(decoded.partyInformation?.[0]?.partyIdentity.alphanumeric).toBe("originating-party");
    });
});
