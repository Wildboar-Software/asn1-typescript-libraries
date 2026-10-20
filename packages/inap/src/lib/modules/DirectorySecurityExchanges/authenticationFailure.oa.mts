/* eslint-disable */
// export { Identifier, _decode_Identifier, _encode_Identifier } from "../Notation/Identifier.ta.mjs";
// export { SecurityProblem, SecurityProblem_inappropriateAuthentication /* IMPORTED_LONG_NAMED_INTEGER */, inappropriateAuthentication /* IMPORTED_SHORT_NAMED_INTEGER */, SecurityProblem_invalidCredentials /* IMPORTED_LONG_NAMED_INTEGER */, invalidCredentials /* IMPORTED_SHORT_NAMED_INTEGER */, SecurityProblem_insufficientAccessRights /* IMPORTED_LONG_NAMED_INTEGER */, insufficientAccessRights /* IMPORTED_SHORT_NAMED_INTEGER */, SecurityProblem_invalidSignature /* IMPORTED_LONG_NAMED_INTEGER */, invalidSignature /* IMPORTED_SHORT_NAMED_INTEGER */, SecurityProblem_protectionRequired /* IMPORTED_LONG_NAMED_INTEGER */, protectionRequired /* IMPORTED_SHORT_NAMED_INTEGER */, SecurityProblem_noInformation /* IMPORTED_LONG_NAMED_INTEGER */, noInformation /* IMPORTED_SHORT_NAMED_INTEGER */, SecurityProblem_blockedCredentials /* IMPORTED_LONG_NAMED_INTEGER */, blockedCredentials /* IMPORTED_SHORT_NAMED_INTEGER */, SecurityProblem_invalidQOPMatch /* IMPORTED_LONG_NAMED_INTEGER */, invalidQOPMatch /* IMPORTED_SHORT_NAMED_INTEGER */, SecurityProblem_spkmError /* IMPORTED_LONG_NAMED_INTEGER */, spkmError /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_SecurityProblem, _encode_SecurityProblem } from "../DirectoryAbstractService/SecurityProblem.ta.mjs";
import { type SE_ERROR } from "../Notation/SE-ERROR.oca.mjs";


/**
 * @summary authenticationFailure
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * authenticationFailure SE-ERROR ::= {
 *   PARAMETER   DirectoryAbstractService.SecurityProblem
 *   ERROR-CODE  local:1
 * }
 * ```
 * 
 * @constant
 * @type {SE_ERROR<DirectoryAbstractService.SecurityProblem>}
 * @implements {SE_ERROR<DirectoryAbstractService.SecurityProblem>}
 */
export
const authenticationFailure: SE_ERROR<DirectoryAbstractService.SecurityProblem> = {
    class: "SE-ERROR",
    decoderFor: {
        "&ParameterType": DirectoryAbstractService._decode_SecurityProblem,
    },
    encoderFor: {
        "&ParameterType": DirectoryAbstractService._encode_SecurityProblem,
    },
    "&errorCode": { local: 1 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ParameterType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
