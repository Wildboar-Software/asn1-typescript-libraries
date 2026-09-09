import * as $ from "@wildboar/asn1/functional";
import {
    type ConnectionID,
    _encode_ConnectionID,
    _decode_ConnectionID,
} from "./lib/modules/CSTA-call-connection-identifiers/ConnectionID.ta.mjs";
import {
    ConnectionID_both,
    _encode_ConnectionID_both,
    _decode_ConnectionID_both,
} from "./lib/modules/CSTA-call-connection-identifiers/ConnectionID-both.ta.mjs";

describe("ConnectionID", () => {
    test("round-trips a callID alternative", () => {
        const original: ConnectionID = {
            callID: Uint8Array.from([0x01, 0x02, 0x03, 0x04]),
        };
        const decoded = _decode_ConnectionID(_encode_ConnectionID(original, $.BER));
        expect(decoded).toEqual(original);
        expect("callID" in decoded).toBe(true);
        if ("callID" in decoded) {
            expect(decoded.callID).toEqual(original.callID);
        }
    });

    test("round-trips the both alternative", () => {
        const both = new ConnectionID_both(
            Uint8Array.from([0xaa, 0xbb]),
            { dynamicID: Uint8Array.from([0x11, 0x22]) }
        );
        const nested = _decode_ConnectionID_both(
            _encode_ConnectionID_both(both, $.BER)
        );
        expect(nested.callID).toEqual(both.callID);
        expect(nested.deviceID).toEqual(both.deviceID);
        const original: ConnectionID = { both };
        const decoded = _decode_ConnectionID(_encode_ConnectionID(original, $.BER));
        expect("both" in decoded).toBe(true);
        if ("both" in decoded) {
            expect(decoded.both.callID).toEqual(both.callID);
            expect(decoded.both.deviceID).toEqual(both.deviceID);
        }
    });
});
