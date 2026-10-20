/* eslint-disable */
import { BasicService, _decode_BasicService, _encode_BasicService } from "../IN-SCF-SDF-datatypes/BasicService.ta.mjs";
// export { BasicService, BasicService_telephony /* IMPORTED_LONG_NAMED_INTEGER */, telephony /* IMPORTED_SHORT_NAMED_INTEGER */, BasicService_faxGroup2_3 /* IMPORTED_LONG_NAMED_INTEGER */, faxGroup2_3 /* IMPORTED_SHORT_NAMED_INTEGER */, BasicService_faxGroup4 /* IMPORTED_LONG_NAMED_INTEGER */, faxGroup4 /* IMPORTED_SHORT_NAMED_INTEGER */, BasicService_teletexBasicAndMixed /* IMPORTED_LONG_NAMED_INTEGER */, teletexBasicAndMixed /* IMPORTED_SHORT_NAMED_INTEGER */, BasicService_teletexBazicAndProcessable /* IMPORTED_LONG_NAMED_INTEGER */, teletexBazicAndProcessable /* IMPORTED_SHORT_NAMED_INTEGER */, BasicService_teletexBasic /* IMPORTED_LONG_NAMED_INTEGER */, teletexBasic /* IMPORTED_SHORT_NAMED_INTEGER */, BasicService_syntaxBasedVideotex /* IMPORTED_LONG_NAMED_INTEGER */, syntaxBasedVideotex /* IMPORTED_SHORT_NAMED_INTEGER */, BasicService_internationalVideotex /* IMPORTED_LONG_NAMED_INTEGER */, internationalVideotex /* IMPORTED_SHORT_NAMED_INTEGER */, BasicService_telex /* IMPORTED_LONG_NAMED_INTEGER */, telex /* IMPORTED_SHORT_NAMED_INTEGER */, BasicService_messageHandlingSystems /* IMPORTED_LONG_NAMED_INTEGER */, messageHandlingSystems /* IMPORTED_SHORT_NAMED_INTEGER */, BasicService_osiApplication /* IMPORTED_LONG_NAMED_INTEGER */, osiApplication /* IMPORTED_SHORT_NAMED_INTEGER */, BasicService_audioVisual /* IMPORTED_LONG_NAMED_INTEGER */, audioVisual /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_BasicService, _encode_BasicService } from "../IN-SCF-SDF-datatypes/BasicService.ta.mjs";
import { id_avc_basicService } from "../IN-object-identifiers/id-avc-basicService.va.mjs";
// export { id_avc_basicService } from "../IN-object-identifiers/id-avc-basicService.va.mjs";
import { type CONTEXT } from "../InformationFramework/CONTEXT.oca.mjs";


/**
 * @summary basicServiceContext
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * basicServiceContext CONTEXT ::= {
 *   WITH SYNTAX  BasicService
 *   ID           id-avc-basicService
 * }
 * ```
 * 
 * @constant
 * @type {CONTEXT<BasicService>}
 * @implements {CONTEXT<BasicService>}
 */
export
const basicServiceContext: CONTEXT<BasicService> = {
    class: "CONTEXT",
    decoderFor: {
        "&Type": _decode_BasicService,
        "&Assertion": undefined,
    },
    encoderFor: {
        "&Type": _encode_BasicService,
        "&Assertion": undefined,
    },
    "&id": id_avc_basicService /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&Assertion": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
