import * as $ from "@wildboar/asn1/functional";
import {
    SCPP_PDU,
    _encode_SCPP_PDU,
    _decode_SCPP_PDU,
} from "./lib/modules/SCPP-MESSAGES/SCPP-PDU.ta.mjs";
import { IGCS_Address_ipAddress } from "./lib/modules/SCPP-MESSAGES/IGCS-Address-ipAddress.ta.mjs";
import { PeerDiscoveryDEF } from "./lib/modules/SCPP-MESSAGES/PeerDiscoveryDEF.ta.mjs";
import { IGCS_Signature } from "./lib/modules/SCPP-MESSAGES/IGCS-Signature.ta.mjs";

function samplePdu(): SCPP_PDU {
    return new SCPP_PDU(
        {
            ipAddress: new IGCS_Address_ipAddress(
                Uint8Array.from([192, 0, 2, 1]),
                8080
            ),
        },
        { emailAddress: "dest@example.com" },
        {
            peerDiscovery: new PeerDiscoveryDEF(
                true,
                new IGCS_Signature(42, Uint8Array.from([0xde, 0xad, 0xbe, 0xef]))
            ),
        },
        Uint8Array.from([0x01, 0x02])
    );
}

describe("SCPP_PDU", () => {
    test("round-trips a peerDiscovery PDU", () => {
        const original = samplePdu();
        const el = _encode_SCPP_PDU(original, $.BER);
        const decoded = _decode_SCPP_PDU(el);
        expect(decoded).toEqual(original);
        expect("ipAddress" in decoded.sourceAddress).toBe(true);
        expect("emailAddress" in decoded.destAddress).toBe(true);
        expect("peerDiscovery" in decoded.igcs_message_body).toBe(true);
        if ("peerDiscovery" in decoded.igcs_message_body) {
            expect(decoded.igcs_message_body.peerDiscovery.setupRequest).toBe(true);
            expect(decoded.igcs_message_body.peerDiscovery.igcsSignature.igcsID).toBe(42);
        }
    });
});
