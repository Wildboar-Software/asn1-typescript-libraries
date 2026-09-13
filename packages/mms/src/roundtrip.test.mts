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
import {
    type MMSpdu,
    _encode_MMSpdu,
    _decode_MMSpdu,
} from "./lib/modules/ISO-9506-MMS-1/MMSpdu.ta.mjs";
import {
    type ConfirmedServiceRequest,
    _encode_ConfirmedServiceRequest,
    _decode_ConfirmedServiceRequest,
} from "./lib/modules/ISO-9506-MMS-1/ConfirmedServiceRequest.ta.mjs";
import {
    type AdditionalService_Request,
    _encode_AdditionalService_Request,
    _decode_AdditionalService_Request,
} from "./lib/modules/ISO-9506-MMS-1/AdditionalService-Request.ta.mjs";
import {
    type UnconfirmedService,
    _encode_UnconfirmedService,
    _decode_UnconfirmedService,
} from "./lib/modules/ISO-9506-MMS-1/UnconfirmedService.ta.mjs";
import {
    type Request_Detail,
    _encode_Request_Detail,
    _decode_Request_Detail,
} from "./lib/modules/ISO-9506-MMS-1/Request-Detail.ta.mjs";
import {
    type AdditionalService_Error,
    _encode_AdditionalService_Error,
    _decode_AdditionalService_Error,
} from "./lib/modules/ISO-9506-MMS-1/AdditionalService-Error.ta.mjs";
import {
    StartUnitControl_Error,
} from "./lib/modules/ISO-9506-MMS-1/StartUnitControl-Error.ta.mjs";
import {
    type VariableSpecification,
    _encode_VariableSpecification,
    _decode_VariableSpecification,
} from "./lib/modules/ISO-9506-MMS-1/VariableSpecification.ta.mjs";
import {
    type ConfirmedServiceResponse,
    _encode_ConfirmedServiceResponse,
    _decode_ConfirmedServiceResponse,
} from "./lib/modules/ISO-9506-MMS-1/ConfirmedServiceResponse.ta.mjs";
import {
    Identify_Response,
} from "./lib/modules/ISO-9506-MMS-1/Identify-Response.ta.mjs";
import {
    type AdditionalService_Response,
    _encode_AdditionalService_Response,
    _decode_AdditionalService_Response,
} from "./lib/modules/ISO-9506-MMS-1/AdditionalService-Response.ta.mjs";

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
            { ap_title_form2: _OID.fromParts([1, 3, 9999, 1]) },
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

    test("round-trips MMSpdu cancel-RequestPDU INTEGER and NULL", () => {
        const coded: MMSpdu = { cancel_RequestPDU: 7 };
        expect(_decode_MMSpdu(_encode_MMSpdu(coded, $.BER))).toEqual(coded);
        const absent: MMSpdu = { cancel_RequestPDU: null };
        expect(_decode_MMSpdu(_encode_MMSpdu(absent, $.BER))).toEqual(absent);
    });

    test("round-trips ConfirmedServiceRequest status BOOLEAN and NULL", () => {
        const coded: ConfirmedServiceRequest = { status: true };
        expect(
            _decode_ConfirmedServiceRequest(
                _encode_ConfirmedServiceRequest(coded, $.BER)
            )
        ).toEqual(coded);
        const absent: ConfirmedServiceRequest = { status: null };
        expect(
            _decode_ConfirmedServiceRequest(
                _encode_ConfirmedServiceRequest(absent, $.BER)
            )
        ).toEqual(absent);
    });

    test("round-trips AdditionalService-Request VMDReset BOOLEAN and NULL", () => {
        const coded: AdditionalService_Request = { vMDReset: false };
        expect(
            _decode_AdditionalService_Request(
                _encode_AdditionalService_Request(coded, $.BER)
            )
        ).toEqual(coded);
        const absent: AdditionalService_Request = { vMDReset: null };
        expect(
            _decode_AdditionalService_Request(
                _encode_AdditionalService_Request(absent, $.BER)
            )
        ).toEqual(absent);
    });

    test("round-trips UnconfirmedService informationReport NULL", () => {
        const absent: UnconfirmedService = { informationReport: null };
        expect(
            _decode_UnconfirmedService(
                _encode_UnconfirmedService(absent, $.BER)
            )
        ).toEqual(absent);
    });

    test("round-trips Request-Detail createProgramInvocation INTEGER and NULL", () => {
        const coded: Request_Detail = { createProgramInvocation: 1 };
        expect(
            _decode_Request_Detail(_encode_Request_Detail(coded, $.BER))
        ).toEqual(coded);
        const absent: Request_Detail = { createProgramInvocation: null };
        expect(
            _decode_Request_Detail(_encode_Request_Detail(absent, $.BER))
        ).toEqual(absent);
    });

    test("round-trips AdditionalService-Error startUC SEQUENCE and NULL", () => {
        const coded: AdditionalService_Error = {
            startUC: new StartUnitControl_Error(),
        };
        const decoded = _decode_AdditionalService_Error(
            _encode_AdditionalService_Error(coded, $.BER)
        );
        expect("startUC" in decoded).toBe(true);
        if ("startUC" in decoded && decoded.startUC !== null) {
            expect(decoded.startUC.programInvocationName).toBeUndefined();
            expect(decoded.startUC.programInvocationState).toBeUndefined();
        }
        const absent: AdditionalService_Error = { startUC: null };
        expect(
            _decode_AdditionalService_Error(
                _encode_AdditionalService_Error(absent, $.BER)
            )
        ).toEqual(absent);
    });

    test("round-trips VariableSpecification scatteredAccessDescription SEQUENCE OF and NULL", () => {
        const empty: VariableSpecification = { scatteredAccessDescription: [] };
        expect(
            _decode_VariableSpecification(
                _encode_VariableSpecification(empty, $.BER)
            )
        ).toEqual(empty);
        const absent: VariableSpecification = {
            scatteredAccessDescription: null,
        };
        expect(
            _decode_VariableSpecification(
                _encode_VariableSpecification(absent, $.BER)
            )
        ).toEqual(absent);
    });

    test("round-trips ConfirmedServiceResponse identify SEQUENCE and NULL", () => {
        const coded: ConfirmedServiceResponse = {
            identify: new Identify_Response(
                { notChar: "Wildboar" },
                { notChar: "MMS" },
                { notChar: "1.0" }
            ),
        };
        const decoded = _decode_ConfirmedServiceResponse(
            _encode_ConfirmedServiceResponse(coded, $.BER)
        );
        expect("identify" in decoded).toBe(true);
        if ("identify" in decoded && decoded.identify !== null) {
            expect(decoded.identify.vendorName).toEqual({ notChar: "Wildboar" });
            expect(decoded.identify.modelName).toEqual({ notChar: "MMS" });
            expect(decoded.identify.revision).toEqual({ notChar: "1.0" });
        }
        const absent: ConfirmedServiceResponse = { identify: null };
        expect(
            _decode_ConfirmedServiceResponse(
                _encode_ConfirmedServiceResponse(absent, $.BER)
            )
        ).toEqual(absent);
    });

    test("round-trips AdditionalService-Response vMDReset NULL and select NULL", () => {
        const absent: AdditionalService_Response = { vMDReset: null };
        expect(
            _decode_AdditionalService_Response(
                _encode_AdditionalService_Response(absent, $.BER)
            )
        ).toEqual(absent);
        const alsoAbsent: AdditionalService_Response = { select: null };
        expect(
            _decode_AdditionalService_Response(
                _encode_AdditionalService_Response(alsoAbsent, $.BER)
            )
        ).toEqual(alsoAbsent);
    });
});
