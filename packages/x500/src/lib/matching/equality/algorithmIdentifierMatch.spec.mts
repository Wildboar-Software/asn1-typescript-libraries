import { ObjectIdentifier } from "@wildboar/asn1";
import { DER } from "@wildboar/asn1/functional";
import {
    AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
} from "../../modules/AuthenticationFramework/AlgorithmIdentifier.ta.mjs";
import {
    SupportedAlgorithm,
    _encode_SupportedAlgorithm,
} from "../../modules/AuthenticationFramework/SupportedAlgorithm.ta.mjs";
import { MATCH_FLAG_USED_FOR_NAME } from "../../types/matching.mjs";
import algorithmIdentifierMatch_ from "./algorithmIdentifierMatch.mjs";
import { onStoredValue } from "./onStoredValue.spec.mjs";

const algorithmIdentifierMatch = onStoredValue(algorithmIdentifierMatch_);
const algorithm = new AlgorithmIdentifier(
    ObjectIdentifier.fromString("1.2.840.113549.1.1.11"),
);

describe("algorithmIdentifierMatch", () => {
    it("rejects heterogeneous syntaxes when used for name matching", () => {
        const assertion = _encode_AlgorithmIdentifier(algorithm, DER);
        const value = _encode_SupportedAlgorithm(
            new SupportedAlgorithm(algorithm),
            DER,
        );

        expect(algorithmIdentifierMatch(assertion, value)).toBe(true);
        expect(algorithmIdentifierMatch(
            assertion,
            value,
            MATCH_FLAG_USED_FOR_NAME,
        )).toBeUndefined();
    });
});
