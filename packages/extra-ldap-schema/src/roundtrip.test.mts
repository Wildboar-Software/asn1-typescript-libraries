import { ASN1OverflowError, ASN1SizeError, ObjectIdentifier } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_AbsoluteFilePath } from "./lib/modules/NIS/AbsoluteFilePath.ta.mjs";
import { _decode_Uint8, _encode_Uint8 } from "./lib/modules/NIS/Uint8.ta.mjs";
import { AttributeQuality_attribute_completeness_selected } from "./lib/modules/Thorn/AttributeQuality-attribute-completeness.ta.mjs";
import { AttributeQuality_maintenance_level_external, AttributeQuality_maintenance_level_user_supplied } from "./lib/modules/Thorn/AttributeQuality-maintenance-level.ta.mjs";
import { AttributeQuality } from "./lib/modules/Thorn/AttributeQuality.ta.mjs";
import { DataQualitySyntax_attributeQuality_Item } from "./lib/modules/Thorn/DataQualitySyntax-attributeQuality-Item.ta.mjs";
import { DataQualitySyntax_namespace_completeness_selected } from "./lib/modules/Thorn/DataQualitySyntax-namespace-completeness.ta.mjs";
import {
    DataQualitySyntax,
    _decode_DataQualitySyntax,
    _encode_DataQualitySyntax,
} from "./lib/modules/Thorn/DataQualitySyntax.ta.mjs";

describe("DataQualitySyntax", () => {
    test("round-trips namespace quality, per-attribute quality, and a description", () => {
        const commonName = ObjectIdentifier.fromParts([2, 5, 4, 3]);
        const original = new DataQualitySyntax(
            DataQualitySyntax_namespace_completeness_selected,
            new AttributeQuality(
                AttributeQuality_maintenance_level_user_supplied,
                AttributeQuality_attribute_completeness_selected,
            ),
            [
                new DataQualitySyntax_attributeQuality_Item(
                    commonName,
                    new AttributeQuality(
                        AttributeQuality_maintenance_level_external,
                        AttributeQuality_attribute_completeness_selected,
                    ),
                ),
            ],
            "pilot directory",
        );
        const decoded = _decode_DataQualitySyntax(_encode_DataQualitySyntax(original, $.BER));
        expect(decoded.namespace_completeness).toBe(original.namespace_completeness);
        expect(decoded.defaultAttributeQuality.maintenance_level).toBe(
            original.defaultAttributeQuality.maintenance_level,
        );
        expect(decoded.defaultAttributeQuality.attribute_completeness).toBe(
            original.defaultAttributeQuality.attribute_completeness,
        );
        expect(decoded.defaultAttributeQuality._unrecognizedExtensionsList).toEqual([]);
        expect(decoded.description).toBe("pilot directory");
        expect(decoded.attributeQuality).toHaveLength(1);
        const item = decoded.attributeQuality[0];
        expect(item).toBeDefined();
        expect(item!.type_.toString()).toBe(commonName.toString());
        expect(item!.quality.maintenance_level).toBe(AttributeQuality_maintenance_level_external);
        expect(item!.quality.attribute_completeness).toBe(AttributeQuality_attribute_completeness_selected);
        expect(item!.quality._unrecognizedExtensionsList).toEqual([]);
        expect(item!._unrecognizedExtensionsList).toEqual([]);
        expect(decoded._unrecognizedExtensionsList).toEqual([]);
    });
});

describe("constraint checks", () => {
    test("Uint8 accepts 0..maxUint8 and rejects values outside that range", () => {
        expect(_decode_Uint8(_encode_Uint8(0, $.BER))).toBe(0);
        expect(_decode_Uint8(_encode_Uint8(255, $.BER))).toBe(255);
        expect(() => _decode_Uint8(_encode_Uint8(256, $.BER))).toThrow(ASN1OverflowError);
        expect(() => _decode_Uint8(_encode_Uint8(-1, $.BER))).toThrow(ASN1OverflowError);
    });

    test("AbsoluteFilePath rejects an empty IA5String", () => {
        expect(_decode_AbsoluteFilePath($._encodeIA5String("/etc/passwd", $.BER))).toBe("/etc/passwd");
        expect(() => _decode_AbsoluteFilePath($._encodeIA5String("", $.BER))).toThrow(ASN1SizeError);
    });
});
