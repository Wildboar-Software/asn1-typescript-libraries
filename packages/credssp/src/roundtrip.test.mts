import * as $ from "@wildboar/asn1/functional";
import { NegoData_Item } from "./lib/modules/CredSSP/NegoData-Item.ta.mjs";
import {
    TSRequest,
    _decode_TSRequest,
    _encode_TSRequest,
} from "./lib/modules/CredSSP/TSRequest.ta.mjs";

describe("TSRequest", () => {
    test("round-trips a fully populated request", () => {
        const original = new TSRequest(
            6,
            [
                new NegoData_Item(new Uint8Array([0x60, 0x01])),
                new NegoData_Item(new Uint8Array([0xa0, 0x03, 0x01, 0x01, 0xff])),
            ],
            new Uint8Array([0x01, 0x02, 0x03, 0x04]),
            new Uint8Array([0xaa, 0xbb, 0xcc]),
            0,
            new Uint8Array([
                0x10, 0x11, 0x12, 0x13,
                0x14, 0x15, 0x16, 0x17,
            ]),
        );
        const encoded = _encode_TSRequest(original, $.BER);
        const decoded = _decode_TSRequest(encoded);
        expect(decoded).toEqual(original);
    });

    test("round-trips a request that omits every optional field", () => {
        const original = new TSRequest(
            2,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
        );
        const encoded = _encode_TSRequest(original, $.BER);
        const decoded = _decode_TSRequest(encoded);
        expect(decoded).toEqual(original);
        expect(decoded.version).toBe(2);
        expect(decoded.negoTokens).toBeUndefined();
        expect(decoded.authInfo).toBeUndefined();
        expect(decoded.pubKeyAuth).toBeUndefined();
        expect(decoded.errorCode).toBeUndefined();
        expect(decoded.clientNonce).toBeUndefined();
    });
});
