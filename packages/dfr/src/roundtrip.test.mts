import {
    ObjectIdentifier,
    External,
    ASN1ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PresentationAddress } from "@wildboar/x500/SelectedAttributeTypes";
import {
    DOR,
    _encode_DOR,
    _decode_DOR,
} from "./lib/modules/DOR-definition/DOR.ta.mjs";
import { AE_Identifier } from "./lib/modules/DOR-definition/AE-Identifier.ta.mjs";
import { Locational_identifier } from "./lib/modules/DOR-definition/Locational-identifier.ta.mjs";
import { Local_reference } from "./lib/modules/DOR-definition/Local-reference.ta.mjs";
import { Quality_of_Service } from "./lib/modules/DOR-definition/Quality-of-Service.ta.mjs";
import {
    CreateArgument,
    _encode_CreateArgument,
    _decode_CreateArgument,
} from "./lib/modules/DFRAbstractService/CreateArgument.ta.mjs";
import {
    DfrObjectClass_dfr_document,
} from "./lib/modules/DFRAbstractService/DfrObjectClass.ta.mjs";
import {
    Priority_medium,
} from "./lib/modules/DFRAbstractService/Priority.ta.mjs";
import {
    SearchArgument,
    _encode_SearchArgument,
    _decode_SearchArgument,
} from "./lib/modules/DFRAbstractService/SearchArgument.ta.mjs";

describe("DFR encode/decode round-trips", () => {
    test("round-trips DOR with locational AE-Identifier, QoS, and token", () => {
        const original = new DOR(
            new AE_Identifier(
                new Locational_identifier(
                    new PresentationAddress(
                        new Uint8Array([0x01]),
                        new Uint8Array([0x02]),
                        new Uint8Array([0x03]),
                        [new Uint8Array([0x49, 0x00, 0x11])],
                    ),
                    undefined,
                    [new ObjectIdentifier([1, 3, 9999, 1])],
                ),
                undefined,
                undefined,
            ),
            new Local_reference(
                new Uint8Array([0xaa, 0xbb]),
                new Uint8Array([0x01, 0x02, 0x03]),
            ),
            new ObjectIdentifier([1, 0, 10166, 2]),
            new Quality_of_Service(
                Quality_of_Service._default_value_for_qoS_level,
                Quality_of_Service._default_value_for_usage_of_reference,
            ),
            { simpletoken: new Uint8Array([0xde, 0xad, 0xbe, 0xef]) },
        );
        const decoded = _decode_DOR(_encode_DOR(original, $.BER));
        expect(decoded.local_reference.application).toEqual(
            original.local_reference.application,
        );
        expect(decoded.local_reference.specific_reference).toEqual(
            original.local_reference.specific_reference,
        );
        expect(decoded.data_object_type.toString()).toBe(
            original.data_object_type.toString(),
        );
        expect(decoded.token).toEqual(original.token);
        expect(decoded.ae_identifier?.locational_identifier?.application_contexts.map((oid) => oid.toString())).toEqual(
            ["1.3.9999.1"],
        );
        expect(decoded.ae_identifier?.locational_identifier?.presentation_address.pSelector).toEqual(
            new Uint8Array([0x01]),
        );
        expect(decoded.quality_of_service?.qoS_level).toEqual({ level_1: null });
        expect(decoded.quality_of_service?.usage_of_reference).toBe(true);
    });

    test("round-trips CreateArgument with path-name destination and EXTERNAL content", () => {
        const original = new CreateArgument(
            DfrObjectClass_dfr_document,
            undefined,
            { path_name: [{ printableString: "Reports" }, { printableString: "Q1" }] },
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            {
                document_content: new External(
                    new ObjectIdentifier([1, 2, 840, 113549, 1, 7, 1]),
                    undefined,
                    undefined,
                    new Uint8Array([0x04, 0x02, 0x48, 0x69]),
                ),
            },
            undefined,
            undefined,
            { all_or_nothing: null },
            Priority_medium,
            undefined,
        );
        const decoded = _decode_CreateArgument(_encode_CreateArgument(original, $.BER));
        expect(decoded.object_class).toBe(DfrObjectClass_dfr_document);
        expect(decoded.destination).toEqual(original.destination);
        expect(decoded.entry).toBeUndefined();
        expect(decoded.reference_qos).toBeUndefined();
        expect("document_content" in (decoded.content ?? {})).toBe(true);
        if (decoded.content && "document_content" in decoded.content) {
            expect(decoded.content.document_content.directReference?.toString()).toBe(
                "1.2.840.113549.1.7.1",
            );
            expect(decoded.content.document_content.indirectReference).toBeUndefined();
            expect(decoded.content.document_content.encoding).toEqual(
                new Uint8Array([0x04, 0x02, 0x48, 0x69]),
            );
        }
        expect(decoded.error_handling).toEqual({ all_or_nothing: null });
        expect(decoded.priority).toBe(Priority_medium);
    });

    test("rejects CreateArgument values that violate WITH COMPONENTS", () => {
        expect(() => new CreateArgument(
            undefined,
            undefined,
            { upi: new Uint8Array([0x01]) },
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
        )).toThrow(ASN1ConstructionError);
        expect(() => new CreateArgument(
            DfrObjectClass_dfr_document,
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
        )).toThrow(ASN1ConstructionError);
        expect(() => new CreateArgument(
            DfrObjectClass_dfr_document,
            { local: { upi: new Uint8Array([0x01]) } },
            { upi: new Uint8Array([0x02]) },
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
        )).toThrow(ASN1ConstructionError);
    });

    test("round-trips SearchArgument non-stored-search", () => {
        const original = new SearchArgument(
            { non_stored_search: null },
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            { all_or_nothing: null },
            Priority_medium,
            undefined,
        );
        const decoded = _decode_SearchArgument(_encode_SearchArgument(original, $.BER));
        expect(decoded.search_mode).toEqual({ non_stored_search: null });
        expect(decoded.error_handling).toEqual({ all_or_nothing: null });
        expect(decoded.priority).toBe(Priority_medium);
    });
});
