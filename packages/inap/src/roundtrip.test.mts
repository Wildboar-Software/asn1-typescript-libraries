import { ObjectIdentifier as _OID } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    AuthenticationLevel_basicLevels,
    AuthenticationLevel_basicLevels_level_simple,
} from "@wildboar/x500/BasicAccessControl";
import {
    AttributeTypeAndValue,
    type Name,
} from "@wildboar/x500/InformationFramework";
import {
    ACIItem,
    _decode_ACIItem,
    _encode_ACIItem,
} from "./lib/modules/IN-CS2-SDF-BasicAccessControl/ACIItem.ta.mjs";
import {
    ACIItem_itemOrUserFirst_userFirst,
} from "./lib/modules/IN-CS2-SDF-BasicAccessControl/ACIItem-itemOrUserFirst-userFirst.ta.mjs";
import {
    ProtectedItems,
} from "./lib/modules/IN-CS2-SDF-BasicAccessControl/ProtectedItems.ta.mjs";
import {
    UserClasses,
} from "./lib/modules/IN-CS2-SDF-BasicAccessControl/UserClasses.ta.mjs";
import {
    UserPermission,
} from "./lib/modules/IN-CS2-SDF-BasicAccessControl/UserPermission.ta.mjs";
import {
    GrantsAndDenials_grantExecuteMethod,
} from "./lib/modules/IN-CS2-SDF-BasicAccessControl/GrantsAndDenials.ta.mjs";
import {
    InitialDPArg,
    _decode_InitialDPArg,
    _encode_InitialDPArg,
} from "./lib/modules/IN-SSF-SCF-ops-args/InitialDPArg.ta.mjs";
import { EventTypeBCSM } from "./lib/modules/IN-SSF-SCF-datatypes/EventTypeBCSM.ta.mjs";
import {
    MiscCallInfo,
} from "./lib/modules/IN-SSF-SCF-datatypes/MiscCallInfo.ta.mjs";
import { MiscCallInfo_messageType } from "./lib/modules/IN-SSF-SCF-datatypes/MiscCallInfo-messageType.ta.mjs";
import { MiscCallInfo_dpAssignment } from "./lib/modules/IN-SSF-SCF-datatypes/MiscCallInfo-dpAssignment.ta.mjs";
import {
    ServiceInteractionIndicatorsTwo,
} from "./lib/modules/IN-SSF-SCF-datatypes/ServiceInteractionIndicatorsTwo.ta.mjs";
import { BothwayThroughConnectionInd } from "./lib/modules/IN-SSF-SCF-datatypes/BothwayThroughConnectionInd.ta.mjs";
import { ServiceInteractionIndicatorsTwo_redirectServiceTreatmentInd } from "./lib/modules/IN-SSF-SCF-datatypes/ServiceInteractionIndicatorsTwo-redirectServiceTreatmentInd.ta.mjs";
import {
    ExecuteArgument_Type,
    _decode_ExecuteArgument_Type,
    _encode_ExecuteArgument_Type,
} from "./lib/modules/IN-CS2-SCF-SDF-Operations/ExecuteArgument-Type.ta.mjs";
import {
    ExecuteArgument_Type_input_assertions_Item,
} from "./lib/modules/IN-CS2-SCF-SDF-Operations/ExecuteArgument-Type-input-assertions-Item.ta.mjs";
import {
    ExecuteArgument_Type_input_assertions_Item_valuesWithContext_Item,
} from "./lib/modules/IN-CS2-SCF-SDF-Operations/ExecuteArgument-Type-input-assertions-Item-valuesWithContext-Item.ta.mjs";
import { ChainingArguments } from "@wildboar/x500/DistributedOperations";
import { ChainingArgument } from "./lib/modules/IN-CS2-SCF-SCF-ops-args/ChainingArgument.ta.mjs";
import {
    scfChained_ArgumentType_Type,
    _get_decoder_for_scfChained_ArgumentType_Type,
    _get_encoder_for_scfChained_ArgumentType_Type,
} from "./lib/modules/IN-CS2-SCF-SCF-ops-args/scfChained-ArgumentType-Type.ta.mjs";
import {
    in_Chained_ArgumentType_Type,
    _get_decoder_for_in_Chained_ArgumentType_Type,
    _get_encoder_for_in_Chained_ArgumentType_Type,
} from "./lib/modules/IN-CS3-SDF-SDF-Operations/in-Chained-ArgumentType-Type.ta.mjs";

describe("InitialDPArg", () => {
    test("round-trips a CS-4 initial DP with nested call and service-interaction data", () => {
        const serviceInteractionIndicatorsTwo = new ServiceInteractionIndicatorsTwo(
            undefined,
            undefined,
            BothwayThroughConnectionInd.bothwayPathRequired,
            undefined,
            undefined,
            true,
            undefined,
            undefined,
            false,
            true,
            false,
            undefined,
            new ServiceInteractionIndicatorsTwo_redirectServiceTreatmentInd(
                new Uint8Array([0x03]),
            ),
            null,
        );
        const original = new InitialDPArg(
            7,
            undefined,
            new Uint8Array([0x83, 0x10, 0x32, 0x54]),
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            new MiscCallInfo(
                MiscCallInfo_messageType.request,
                MiscCallInfo_dpAssignment.individualBased,
            ),
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            new Uint8Array([0x20, 0x01]),
            undefined,
            EventTypeBCSM.collectedInfo,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            serviceInteractionIndicatorsTwo,
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
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
        );
        const decoded = _decode_InitialDPArg(_encode_InitialDPArg(original, $.BER));
        expect(decoded.serviceKey).toBe(7);
        expect(decoded.calledPartyNumber).toEqual(new Uint8Array([0x83, 0x10, 0x32, 0x54]));
        expect(decoded.miscCallInfo?.messageType).toBe(MiscCallInfo_messageType.request);
        expect(decoded.miscCallInfo?.dpAssignment).toBe(MiscCallInfo_dpAssignment.individualBased);
        expect(decoded.forwardCallIndicators).toEqual(new Uint8Array([0x20, 0x01]));
        expect(decoded.eventTypeBCSM).toBe(EventTypeBCSM.collectedInfo);
        expect(decoded.serviceInteractionIndicatorsTwo?.bothwayThroughConnectionInd)
            .toBe(BothwayThroughConnectionInd.bothwayPathRequired);
        expect(decoded.serviceInteractionIndicatorsTwo?.suppressCallDiversionNotification).toBe(true);
        expect(decoded.serviceInteractionIndicatorsTwo?.userDialogueDurationInd).toBe(false);
        expect(decoded.serviceInteractionIndicatorsTwo?.overrideLineRestrictions).toBe(true);
        expect(decoded.serviceInteractionIndicatorsTwo?.redirectServiceTreatmentInd?.redirectReason)
            .toEqual(new Uint8Array([0x03]));
        expect(decoded.serviceInteractionIndicatorsTwo?.nonCUGCall).toBeNull();
        expect(decoded).toEqual(original);
    });
});

describe("ACIItem", () => {
    test("round-trips an IN access-control item, including entryMethods", () => {
        const methodId = _OID.fromParts([1, 2, 3]);
        const grants = new Uint8ClampedArray(GrantsAndDenials_grantExecuteMethod + 1);
        grants[GrantsAndDenials_grantExecuteMethod] = 1;
        const protectedItems = new ProtectedItems(
            null,
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
            [methodId],
        );
        const original = new ACIItem(
            { printableString: "aci-1" },
            10,
            {
                basicLevels: new AuthenticationLevel_basicLevels(
                    AuthenticationLevel_basicLevels_level_simple,
                    undefined,
                    false,
                ),
            },
            {
                userFirst: new ACIItem_itemOrUserFirst_userFirst(
                    new UserClasses(null),
                    [new UserPermission(undefined, protectedItems, grants)],
                ),
            },
        );
        const encoded = _encode_ACIItem(original, $.BER);
        const decoded = _decode_ACIItem(encoded);
        expect(decoded.identificationTag).toEqual({ printableString: "aci-1" });
        expect(decoded.precedence).toBe(10);
        if (!("userFirst" in decoded.itemOrUserFirst)) {
            throw new Error("expected userFirst");
        }
        expect(decoded.itemOrUserFirst.userFirst.userPermissions[0]?.protectedItems.entryMethods)
            .toEqual([methodId]);
        expect(decoded.itemOrUserFirst.userFirst.userPermissions[0]?.grantsAndDenials)
            .toEqual(grants);
        expect(decoded).toEqual(original);
    });
});

describe("ExecuteArgument_Type", () => {
    test("round-trips a CS-2 execute argument with nested assertions", () => {
        const methodId = _OID.fromParts([1, 2, 3]);
        const name: Name = {
            rdnSequence: [[
                new AttributeTypeAndValue(
                    _OID.fromParts([2, 5, 4, 3]),
                    $._encodeUTF8String("scf", $.BER),
                ),
            ]],
        };
        const withContext = new ExecuteArgument_Type_input_assertions_Item_valuesWithContext_Item(
            $._encodeInteger(7, $.BER),
            [],
        );
        const assertion = new ExecuteArgument_Type_input_assertions_Item(
            $._encodeObjectIdentifier(methodId, $.BER),
            [$._encodeInteger(1, $.BER)],
            [withContext],
        );
        const original = new ExecuteArgument_Type(
            name,
            methodId,
            [assertion],
            $._encodeNull(null, $.BER),
            ExecuteArgument_Type._default_value_for_serviceControls,
            undefined,
            undefined,
            ExecuteArgument_Type._default_value_for_operationProgress,
            undefined,
            undefined,
            undefined,
            ExecuteArgument_Type._default_value_for_entryOnly,
            ExecuteArgument_Type._default_value_for_nameResolveOnMaste,
            undefined,
            ExecuteArgument_Type._default_value_for_familyGrouping,
        );
        const encoded = _encode_ExecuteArgument_Type(original, $.BER);
        const decoded = _decode_ExecuteArgument_Type(encoded);
        expect(decoded.method_id.isEqualTo(methodId)).toBe(true);
        expect(decoded.object).toEqual(name);
        expect(decoded.input_assertions).toHaveLength(1);
        expect(decoded.input_assertions?.[0]?.valuesWithContext).toHaveLength(1);
        expect(decoded.specific_input?.tagClass).toBe(original.specific_input?.tagClass);
        expect(decoded).toEqual(original);
    });
});

describe("chained open types", () => {
    test("scfChained argument decodes operation.&ArgumentType with the supplied codec", () => {
        const chainedArgument = new ChainingArgument(
            new Uint8Array([0x01, 0x02]),
            undefined,
            [],
            undefined,
            undefined,
            undefined,
            undefined,
        );
        const original = new scfChained_ArgumentType_Type<number>(chainedArgument, 7);
        const encode = _get_encoder_for_scfChained_ArgumentType_Type<number>($._encodeInteger);
        const decode = _get_decoder_for_scfChained_ArgumentType_Type<number>($._decodeInteger);
        const decoded = decode(encode(original, $.BER));
        expect(decoded.argument).toBe(7);
        expect(decoded.chainedArgument.originatingSCF).toEqual(new Uint8Array([0x01, 0x02]));

        const absent = new scfChained_ArgumentType_Type<number>(chainedArgument, undefined);
        const decodedAbsent = decode(encode(absent, $.BER));
        expect(decodedAbsent.argument).toBeUndefined();
    });

    test("in-Chained argument decodes operation.&ArgumentType with the supplied codec", () => {
        const chained = new ChainingArguments(undefined, undefined, undefined, []);
        const original = new in_Chained_ArgumentType_Type<number>(chained, 9);
        const encode = _get_encoder_for_in_Chained_ArgumentType_Type<number>($._encodeInteger);
        const decode = _get_decoder_for_in_Chained_ArgumentType_Type<number>($._decodeInteger);
        const decoded = decode(encode(original, $.BER));
        expect(decoded.argument).toBe(9);
        expect(decoded.in_chainedArgument.traceInformation).toEqual([]);
    });
});
