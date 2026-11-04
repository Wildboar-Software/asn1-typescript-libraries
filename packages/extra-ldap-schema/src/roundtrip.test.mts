import {
    ASN1OverflowError,
    ASN1SizeError,
    ObjectIdentifier as _OID,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_AbsoluteFilePath, _encode_AbsoluteFilePath } from "./lib/modules/NIS/AbsoluteFilePath.ta.mjs";
import { maxUint8 } from "./lib/modules/NIS/maxUint8.va.mjs";
import { _decode_Uint8, _encode_Uint8 } from "./lib/modules/NIS/Uint8.ta.mjs";
import { AttributeQuality_attribute_completeness_full, AttributeQuality_attribute_completeness_selected } from "./lib/modules/Thorn/AttributeQuality-attribute-completeness.ta.mjs";
import { AttributeQuality_maintenance_level_system_maintained, AttributeQuality_maintenance_level_user_supplied } from "./lib/modules/Thorn/AttributeQuality-maintenance-level.ta.mjs";
import { AttributeQuality } from "./lib/modules/Thorn/AttributeQuality.ta.mjs";
import { DataQualitySyntax_attributeQuality_Item } from "./lib/modules/Thorn/DataQualitySyntax-attributeQuality-Item.ta.mjs";
import { DataQualitySyntax_namespace_completeness_full } from "./lib/modules/Thorn/DataQualitySyntax-namespace-completeness.ta.mjs";
import {
    DataQualitySyntax,
    _decode_DataQualitySyntax,
    _encode_DataQualitySyntax,
} from "./lib/modules/Thorn/DataQualitySyntax.ta.mjs";

describe("DataQualitySyntax", () => {
    test("round-trips a Thorn data quality value with per-attribute overrides", () => {
        const original = new DataQualitySyntax(
            DataQualitySyntax_namespace_completeness_full,
            new AttributeQuality(
                AttributeQuality_maintenance_level_system_maintained,
                AttributeQuality_attribute_completeness_selected,
            ),
            [
                new DataQualitySyntax_attributeQuality_Item(
                    _OID.fromParts([2, 5, 4, 3]),
                    new AttributeQuality(
                        AttributeQuality_maintenance_level_user_supplied,
                        AttributeQuality_attribute_completeness_full,
                    ),
                ),
            ],
            "sampled subtree",
        );
        const decoded = _decode_DataQualitySyntax(_encode_DataQualitySyntax(original, $.BER));
        expect(decoded.namespace_completeness).toBe(original.namespace_completeness);
        expect(decoded.defaultAttributeQuality.maintenance_level).toBe(
            original.defaultAttributeQuality.maintenance_level,
        );
        expect(decoded.defaultAttributeQuality.attribute_completeness).toBe(
            original.defaultAttributeQuality.attribute_completeness,
        );
        expect(decoded.attributeQuality).toHaveLength(1);
        expect(decoded.attributeQuality[0].type_.toString()).toBe("2.5.4.3");
        expect(decoded.attributeQuality[0].quality.maintenance_level).toBe(
            AttributeQuality_maintenance_level_user_supplied,
        );
        expect(decoded.attributeQuality[0].quality.attribute_completeness).toBe(
            AttributeQuality_attribute_completeness_full,
        );
        expect(decoded.description).toBe("sampled subtree");
    });
});

describe("NIS constraints", () => {
    test("round-trips a Uint8 within 0..maxUint8", () => {
        expect(_decode_Uint8(_encode_Uint8(0, $.BER))).toBe(0);
        expect(_decode_Uint8(_encode_Uint8(maxUint8, $.BER))).toBe(maxUint8);
    });

    test("rejects a Uint8 outside 0..maxUint8", () => {
        expect(() => _decode_Uint8(_encode_Uint8(maxUint8 + 1, $.BER))).toThrow(ASN1OverflowError);
        expect(() => _decode_Uint8(_encode_Uint8(-1, $.BER))).toThrow(ASN1OverflowError);
    });

    test("rejects an AbsoluteFilePath that violates SIZE (1..4096)", () => {
        expect(() => _decode_AbsoluteFilePath(_encode_AbsoluteFilePath("", $.BER))).toThrow(ASN1SizeError);
    });
});
