import { DER } from "@wildboar/asn1/functional";
import { PresentationAddress } from "@wildboar/presentation-address";
import { AttributeTypeAndValue } from "../modules/InformationFramework/AttributeTypeAndValue.ta.mjs";
import type { Name } from "../modules/InformationFramework/Name.ta.mjs";
import { MasterOrShadowAccessPoint } from "../modules/DistributedOperations/MasterOrShadowAccessPoint.ta.mjs";
import {
    MasterOrShadowAccessPoint_category_master,
    MasterOrShadowAccessPoint_category_shadow,
    type _enum_for_MasterOrShadowAccessPoint_category,
} from "../modules/DistributedOperations/MasterOrShadowAccessPoint-category.ta.mjs";
import { commonName } from "../modules/SelectedAttributeTypes/commonName.oa.mjs";
import { splitIntoMastersAndShadows } from "./splitIntoMastersAndShadows.mjs";

function point (
    label: string,
    category: _enum_for_MasterOrShadowAccessPoint_category,
): MasterOrShadowAccessPoint {
    const name: Name = {
        rdnSequence: [[
            new AttributeTypeAndValue(
                commonName["&id"],
                commonName.encoderFor["&Type"]!({ printableString: label }, DER),
            ),
        ]],
    };
    return new MasterOrShadowAccessPoint(
        name,
        new PresentationAddress(undefined, undefined, undefined, [new Uint8Array([1])]),
        undefined,
        category,
    );
}

describe("splitIntoMastersAndShadows", () => {
    it("groups an iterator into masters and shadows", () => {
        const master = point("master", MasterOrShadowAccessPoint_category_master);
        const shadow = point("shadow", MasterOrShadowAccessPoint_category_shadow);
        const [masters, shadows] = splitIntoMastersAndShadows([shadow, master].values());
        expect(masters).toEqual([master]);
        expect(shadows).toEqual([shadow]);
    });
});
