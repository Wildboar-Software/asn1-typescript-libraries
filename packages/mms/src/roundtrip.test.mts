import { ObjectIdentifier as _OID, ASN1OverflowError } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    type Identifier,
    _encode_Identifier,
    _decode_Identifier,
} from "./lib/modules/ISO-9506-MMS-1/Identifier.ta.mjs";
import {
    Integer32,
    _encode_Integer32,
    _decode_Integer32,
} from "./lib/modules/ISO-9506-MMS-1/Integer32.ta.mjs";
import {
    ObjectName_domain_specific,
} from "./lib/modules/ISO-9506-MMS-1/ObjectName-domain-specific.ta.mjs";
import {
    type ObjectName,
    _encode_ObjectName,
    _decode_ObjectName,
} from "./lib/modules/ISO-9506-MMS-1/ObjectName.ta.mjs";
import {
    type TypeSpecification,
} from "./lib/modules/ISO-9506-MMS-1/TypeSpecification.ta.mjs";
import {
    TypeDescription_array,
} from "./lib/modules/MMS-Object-Module-1/TypeDescription-array.ta.mjs";
import {
    type TypeDescription,
    _encode_TypeDescription,
    _decode_TypeDescription,
} from "./lib/modules/MMS-Object-Module-1/TypeDescription.ta.mjs";
import {
    ApplicationReference,
    _encode_ApplicationReference,
    _decode_ApplicationReference,
} from "./lib/modules/MMS-Environment-1/ApplicationReference.ta.mjs";
import {
    type AlternateAccessSelection_selectAccess,
    _encode_AlternateAccessSelection_selectAccess,
    _decode_AlternateAccessSelection_selectAccess,
} from "./lib/modules/ISO-9506-MMS-1/AlternateAccessSelection-selectAccess.ta.mjs";
import {
    type ServiceError_errorClass,
    _encode_ServiceError_errorClass,
    _decode_ServiceError_errorClass,
} from "./lib/modules/ISO-9506-MMS-1/ServiceError-errorClass.ta.mjs";

describe("ISO-9506 MMS types", () => {
    test("round-trips an Identifier", () => {
        const original: Identifier = { notChar: "tank_1" };
        const decoded = _decode_Identifier(_encode_Identifier(original, $.BER));
        expect(decoded).toEqual(original);
    });

    test("round-trips Integer32 and rejects an out-of-range value", () => {
        const original: Integer32 = -2147483648;
        expect(_decode_Integer32(_encode_Integer32(original, $.BER))).toBe(
            original
        );
        const tooBig = _encode_Integer32(2147483648 as Integer32, $.BER);
        expect(() => _decode_Integer32(tooBig)).toThrow(ASN1OverflowError);
    });

    test("round-trips a nested TypeDescription array", () => {
        const domainID: Identifier = { notChar: "Plant1" };
        const itemID: Identifier = { notChar: "Level" };
        const typeName: ObjectName = {
            domain_specific: new ObjectName_domain_specific(domainID, itemID),
        };
        expect(_decode_ObjectName(_encode_ObjectName(typeName, $.BER))).toEqual(
            typeName
        );
        const elementType: TypeSpecification = { typeName };
        const original: TypeDescription = {
            array: new TypeDescription_array(false, 10, elementType),
        };
        const decoded = _decode_TypeDescription(
            _encode_TypeDescription(original, $.BER)
        );
        expect(decoded).toEqual(original);
        expect("array" in decoded).toBe(true);
        if ("array" in decoded) {
            expect(decoded.array.numberOfElements).toBe(10);
            expect(decoded.array.packed).toBe(false);
            expect(decoded.array.elementType).toEqual(elementType);
        }
    });

    test("round-trips ApplicationReference with an ACSE AP-title", () => {
        const original = new ApplicationReference(
            { ap_title_form2: new _OID([1, 3, 9999, 1]) },
            7,
            undefined,
            undefined
        );
        const decoded = _decode_ApplicationReference(
            _encode_ApplicationReference(original, $.BER)
        );
        expect(decoded.ap_invocation_id).toBe(7);
        expect(decoded.ap_title).toEqual(original.ap_title);
    });

    test("round-trips AlternateAccessSelection-selectAccess Identifier and NULL", () => {
        const named: AlternateAccessSelection_selectAccess = {
            component: { notChar: "slotA" },
        };
        expect(
            _decode_AlternateAccessSelection_selectAccess(
                _encode_AlternateAccessSelection_selectAccess(named, $.BER)
            )
        ).toEqual(named);
        const empty: AlternateAccessSelection_selectAccess = {
            component: null,
        };
        expect(
            _decode_AlternateAccessSelection_selectAccess(
                _encode_AlternateAccessSelection_selectAccess(empty, $.BER)
            )
        ).toEqual(empty);
    });

    test("round-trips ServiceError-errorClass cancel INTEGER and NULL", () => {
        const coded: ServiceError_errorClass = { cancel: 1 };
        expect(
            _decode_ServiceError_errorClass(
                _encode_ServiceError_errorClass(coded, $.BER)
            )
        ).toEqual(coded);
        const absent: ServiceError_errorClass = { cancel: null };
        expect(
            _decode_ServiceError_errorClass(
                _encode_ServiceError_errorClass(absent, $.BER)
            )
        ).toEqual(absent);
    });
});
