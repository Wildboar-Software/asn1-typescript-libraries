import { ASN1OverflowError, ASN1SizeError } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    AuthenticationHeader,
} from "./lib/modules/MEDIA-GATEWAY-CONTROL/AuthenticationHeader.ta.mjs";
import {
    IP4Address,
} from "./lib/modules/MEDIA-GATEWAY-CONTROL/IP4Address.ta.mjs";
import {
    MegacoMessage,
    _decode_MegacoMessage,
    _encode_MegacoMessage,
} from "./lib/modules/MEDIA-GATEWAY-CONTROL/MegacoMessage.ta.mjs";
import {
    Message,
} from "./lib/modules/MEDIA-GATEWAY-CONTROL/Message.ta.mjs";
import {
    ActionRequest,
} from "./lib/modules/MEDIA-GATEWAY-CONTROL/ActionRequest.ta.mjs";
import {
    AmmRequest,
} from "./lib/modules/MEDIA-GATEWAY-CONTROL/AmmRequest.ta.mjs";
import {
    CommandRequest,
} from "./lib/modules/MEDIA-GATEWAY-CONTROL/CommandRequest.ta.mjs";
import {
    TerminationID,
} from "./lib/modules/MEDIA-GATEWAY-CONTROL/TerminationID.ta.mjs";
import {
    TransactionRequest,
} from "./lib/modules/MEDIA-GATEWAY-CONTROL/TransactionRequest.ta.mjs";
import {
    _decode_SecurityParmIndex,
} from "./lib/modules/MEDIA-GATEWAY-CONTROL/SecurityParmIndex.ta.mjs";
import {
    _decode_TransactionId,
} from "./lib/modules/MEDIA-GATEWAY-CONTROL/TransactionId.ta.mjs";

describe("MegacoMessage", () => {
    test("round-trips an authenticated transaction request", () => {
        const termination = new TerminationID(
            [Uint8Array.from([0xff])],
            Uint8Array.from([0x01, 0x02, 0x03, 0x04]),
        );
        const add = new AmmRequest([termination], []);
        const command = new CommandRequest({ addReq: add }, undefined, undefined);
        const action = new ActionRequest(1, undefined, undefined, [command]);
        const request = new TransactionRequest(7, [action]);
        const original = new MegacoMessage(
            new AuthenticationHeader(
                Uint8Array.from([0x00, 0x00, 0x00, 0x01]),
                Uint8Array.from([0x00, 0x00, 0x00, 0x02]),
                Uint8Array.from(Array.from({ length: 12 }, (_, i) => i + 1)),
            ),
            new Message(
                3,
                { ip4Address: new IP4Address(Uint8Array.from([192, 0, 2, 10]), 2944) },
                { transactions: [{ transactionRequest: request }] },
            ),
        );

        const decoded = _decode_MegacoMessage(_encode_MegacoMessage(original, $.BER));

        expect(decoded.authHeader?.secParmIndex).toEqual(original.authHeader?.secParmIndex);
        expect(decoded.authHeader?.seqNum).toEqual(original.authHeader?.seqNum);
        expect(decoded.authHeader?.ad).toEqual(original.authHeader?.ad);
        expect(decoded.mess.version).toBe(3);
        expect(decoded.mess.mId).toEqual(original.mess.mId);
        expect(decoded.mess.messageBody).toEqual(original.mess.messageBody);
        expect(decoded).toEqual(original);
    });
});

describe("constraint checks", () => {
    test("rejects a security parameter index of the wrong size", () => {
        const encoded = $._encodeOctetString(Uint8Array.from([1, 2, 3]), $.BER);
        expect(() => _decode_SecurityParmIndex(encoded)).toThrow(ASN1SizeError);
    });

    test("rejects a transaction id outside the 32-bit range", () => {
        const encoded = $._encodeInteger(4294967296n, $.BER);
        expect(() => _decode_TransactionId(encoded)).toThrow(ASN1OverflowError);
    });
});
