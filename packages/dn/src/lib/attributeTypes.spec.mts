import { describe, expect, expectTypeOf, it } from "vitest";
import {
    commonNameOID,
    countryNameOID,
    domainComponentOID,
    givenNameOID,
    localityNameOID,
    oidC1OID,
    oidC2OID,
    oidCOID,
    organizationNameOID,
    organizationalUnitNameOID,
    stateOrProvinceNameOID,
    surnameOID,
    uidOID,
    urnCOID,
} from "./attributeTypes.mjs";
import type {
    CommonNameATAV,
    CommonNameRDN,
    CountryNameATAV,
    DomainComponentATAV,
    LocalityNameATAV,
    OidC1ATAV,
    OidC2ATAV,
    OidCATAV,
    OrganizationNameATAV,
    OrganizationalUnitNameATAV,
    StateOrProvinceNameATAV,
    UIDATAV,
    UrnCATAV,
} from "./attributeTypes.mjs";
import {
    id_at_commonName,
    id_at_countryName,
    id_at_givenName,
    id_at_localityName,
    id_at_organizationName,
    id_at_organizationalUnitName,
    id_at_stateOrProvinceName,
    id_at_surname,
    id_at_urnC,
    id_dc,
    id_oidC,
    id_uid,
} from "./atav/distinguishedTypeToString.mjs";
import type { AttributeTypeAndValueOf } from "./brands.mjs";

describe("attribute type constants", () => {
    it("match the object identifiers used for string conversion", () => {
        expect(commonNameOID).toBe(id_at_commonName.toString());
        expect(surnameOID).toBe(id_at_surname.toString());
        expect(countryNameOID).toBe(id_at_countryName.toString());
        expect(localityNameOID).toBe(id_at_localityName.toString());
        expect(stateOrProvinceNameOID).toBe(id_at_stateOrProvinceName.toString());
        expect(organizationNameOID).toBe(id_at_organizationName.toString());
        expect(organizationalUnitNameOID)
            .toBe(id_at_organizationalUnitName.toString());
        expect(givenNameOID).toBe(id_at_givenName.toString());
        expect(urnCOID).toBe(id_at_urnC.toString());
        expect(uidOID).toBe(id_uid.toString());
        expect(domainComponentOID).toBe(id_dc.toString());
        expect(oidCOID).toBe(id_oidC.toString());
    });

    it("has oidC1 and oidC2 as siblings of oidC", () => {
        expect(oidC1OID).toBe("2.17.1.2.0");
        expect(oidC2OID).toBe("2.17.1.2.1");
        expect(oidCOID).toBe("2.17.1.2.2");
    });

    it("are literal types", () => {
        expectTypeOf<typeof commonNameOID>().toEqualTypeOf<"2.5.4.3">();
        expectTypeOf<typeof uidOID>()
            .toEqualTypeOf<"0.9.2342.19200300.100.1.1">();
    });
});

describe("named ATAV types", () => {
    it("are aliases of AttributeTypeAndValueOf", () => {
        expectTypeOf<CommonNameATAV>()
            .toEqualTypeOf<AttributeTypeAndValueOf<"2.5.4.3">>();
        expectTypeOf<CommonNameRDN>()
            .toEqualTypeOf<[AttributeTypeAndValueOf<"2.5.4.3">]>();
    });

    it("are all mutually exclusive", () => {
        type All = [
            CommonNameATAV,
            CountryNameATAV,
            LocalityNameATAV,
            StateOrProvinceNameATAV,
            OrganizationNameATAV,
            OrganizationalUnitNameATAV,
            UrnCATAV,
            UIDATAV,
            DomainComponentATAV,
            OidC1ATAV,
            OidC2ATAV,
            OidCATAV,
        ];
        type Distinct<T extends unknown[]> = T extends [infer H, ...infer R]
            ? [R[number]] extends [never]
                ? true
                : [H & R[number]] extends [never]
                    ? Distinct<R>
                    : false
            : true;
        expectTypeOf<Distinct<All>>().toEqualTypeOf<true>();
    });
});
