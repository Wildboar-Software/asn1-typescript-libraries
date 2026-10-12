import * as $ from "@wildboar/asn1/functional";
import {
    Invoke,
    _decode_Invoke,
    _encode_Invoke,
} from "./lib/modules/Facility-Information-Element-Components/Invoke.ta.mjs";

describe("Facility-Information-Element-Components encode/decode round-trips", () => {
    test("round-trips Invoke with a linked identifier and an argument", () => {
        const argument = $._encodeInteger(1, $.BER);
        const original = new Invoke(
            { present: 7 },
            { present: 3 },
            { local: 20 },
            argument,
        );
        const encoded = _encode_Invoke(original, $.BER);
        const decoded = _decode_Invoke(encoded);
        expect(decoded.invokeId).toEqual({ present: 7 });
        expect(decoded.linkedId).toEqual({ present: 3 });
        expect(decoded.opcode).toEqual({ local: 20 });
        const decodedArgument = decoded.argument;
        expect(decodedArgument).toBeDefined();
        if (!decodedArgument) {
            throw new Error("Invoke argument was not decoded");
        }
        expect(Array.from(decodedArgument.toBytes())).toEqual(Array.from(argument.toBytes()));
        expect(Array.from(_encode_Invoke(decoded, $.BER).toBytes())).toEqual(Array.from(encoded.toBytes()));
    });
});
