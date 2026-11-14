import { ObjectIdentifier } from "@wildboar/asn1";
import { groupByOID } from "./groupByOID.mjs";

describe("groupByOID", () => {
    it("groups an iterator by OID", () => {
        const cn = ObjectIdentifier.fromString("2.5.4.3");
        const sn = ObjectIdentifier.fromString("2.5.4.4");
        const grouped = groupByOID(
            [
                { type: cn, n: 1 },
                { type: sn, n: 2 },
                { type: cn, n: 3 },
            ].values(),
            (item) => item.type,
        );
        expect(grouped.get(cn.toString())?.map((item) => item.n)).toEqual([1, 3]);
        expect(grouped.get(sn.toString())?.map((item) => item.n)).toEqual([2]);
    });
});
