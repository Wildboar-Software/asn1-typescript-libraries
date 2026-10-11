import { ASN1SizeError, ObjectIdentifier } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AlgorithmIdentifier } from "./lib/modules/AuthenticationFramework/AlgorithmIdentifier.ta.mjs";
import {
    Deviation,
} from "./lib/modules/DeviationList/Deviation.ta.mjs";
import {
    DeviationDescription,
} from "./lib/modules/DeviationList/DeviationDescription.ta.mjs";
import {
    DeviationDocuments,
} from "./lib/modules/DeviationList/DeviationDocuments.ta.mjs";
import {
    DeviationList,
    _decode_DeviationList,
    _encode_DeviationList,
} from "./lib/modules/DeviationList/DeviationList.ta.mjs";
import {
    DeviationListVersion_v0,
} from "./lib/modules/DeviationList/DeviationListVersion.ta.mjs";
import {
    id_Deviation_MRZ_WrongData,
} from "./lib/modules/DeviationList/id-Deviation-MRZ-WrongData.va.mjs";
import {
    IssuancePeriod,
} from "./lib/modules/DeviationList/IssuancePeriod.ta.mjs";
import {
    DeviationList as DeviationListFromRoot,
    DeviationListVersion_v0 as DeviationListVersion_v0FromRoot,
    id_Deviation_MRZ_WrongData as id_Deviation_MRZ_WrongDataFromRoot,
} from "./index.mjs";

const sha256 = ObjectIdentifier.fromParts([2, 16, 840, 1, 101, 3, 4, 2, 1]);

function sampleDeviationList(): DeviationList {
    const parameters = $._encodePrintableString("name", $.BER);
    const nationalUse = $._encodeInteger(7, $.BER);
    return new DeviationList(
        DeviationListVersion_v0,
        new AlgorithmIdentifier(sha256),
        [
            new Deviation(
                new DeviationDocuments(
                    "PP",
                    { certificateDigest: new Uint8Array([1, 2, 3, 4, 5, 6, 7, 8]) },
                    new IssuancePeriod(
                        new Date(Date.UTC(2010, 0, 15)),
                        new Date(Date.UTC(2012, 5, 1)),
                    ),
                    ["L898902C3"],
                ),
                [
                    new DeviationDescription(
                        "MRZ name mismatch",
                        id_Deviation_MRZ_WrongData,
                        parameters,
                        nationalUse,
                    ),
                ],
            ),
        ],
    );
}

describe("eMRTD encode/decode round-trips", () => {
    test("round-trips DeviationList with a document signer digest and open parameters", () => {
        const original = sampleDeviationList();
        const decoded = _decode_DeviationList(
            _encode_DeviationList(original, $.BER),
        );
        expect(decoded.version).toBe(DeviationListVersion_v0);
        expect(decoded.digestAlgorithm?.algorithm?.isEqualTo(sha256)).toBe(true);
        expect(decoded.digestAlgorithm?.parameters).toBeUndefined();
        expect(decoded.deviations).toHaveLength(1);
        const documents = decoded.deviations[0].documents;
        expect(documents.documentType).toBe("PP");
        expect(documents.dscIdentifier && "certificateDigest" in documents.dscIdentifier).toBe(true);
        if (documents.dscIdentifier && "certificateDigest" in documents.dscIdentifier) {
            expect(Array.from(documents.dscIdentifier.certificateDigest)).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
        }
        expect(documents.issuingDate?.firstIssued?.getTime()).toBe(Date.UTC(2010, 0, 15));
        expect(documents.issuingDate?.lastIssued?.getTime()).toBe(Date.UTC(2012, 5, 1));
        expect(documents.documentNumbers).toEqual(["L898902C3"]);
        const description = decoded.deviations[0].descriptions[0];
        expect(description.description).toBe("MRZ name mismatch");
        expect(description.deviationType.isEqualTo(id_Deviation_MRZ_WrongData)).toBe(true);
        expect(description.parameters?.printableString).toBe("name");
        expect(description.nationalUse?.integer).toBe(7);
    });

    test("rejects a documentType that violates SIZE(2)", () => {
        expect(() => new DeviationDocuments("P", undefined, undefined, undefined)).toThrow(ASN1SizeError);
        expect(() => new DeviationDocuments("PPP", undefined, undefined, undefined)).toThrow(ASN1SizeError);
    });

    test("re-exports DeviationList symbols from the package root barrel", () => {
        expect(DeviationListFromRoot).toBe(DeviationList);
        expect(DeviationListVersion_v0FromRoot).toBe(DeviationListVersion_v0);
        expect(DeviationListVersion_v0FromRoot).toBe(0);
        expect(id_Deviation_MRZ_WrongDataFromRoot.isEqualTo(id_Deviation_MRZ_WrongData)).toBe(true);
    });
});
