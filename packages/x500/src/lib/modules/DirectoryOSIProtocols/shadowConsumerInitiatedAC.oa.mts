/* eslint-disable */
import { type APPLICATION_CONTEXT } from "../DirectoryOSIProtocols/APPLICATION-CONTEXT.oca.mjs";
import { id_ac_shadowConsumerInitiatedAC } from "../DirectoryOSIProtocols/id-ac-shadowConsumerInitiatedAC.va.mjs";
import { dSAShadowBind } from "../DirectoryShadowAbstractService/dSAShadowBind.oa.mjs";
import { requestShadowUpdate } from "../DirectoryShadowAbstractService/requestShadowUpdate.oa.mjs";
import { updateShadow } from "../DirectoryShadowAbstractService/updateShadow.oa.mjs";
/**
 * @summary shadowConsumerInitiatedAC
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * shadowConsumerInitiatedAC APPLICATION-CONTEXT ::= {
 *   BIND-OPERATION            dSAShadowBind
 *   OPERATIONS                {requestShadowUpdate |
 *                              updateShadow}
 *   APPLICATION CONTEXT NAME  id-ac-shadowConsumerInitiatedAC }
 * ```
 *
 * @constant
 * @type {APPLICATION_CONTEXT}
 * @implements {APPLICATION_CONTEXT}
 */
export const shadowConsumerInitiatedAC: APPLICATION_CONTEXT = {
    class: "APPLICATION-CONTEXT",
    decoderFor: {},
    encoderFor: {},
    "&bind-operation": dSAShadowBind /* OBJECT_FIELD_SETTING */,
    "&Operations": [
        requestShadowUpdate,
        updateShadow,
    ] /* OBJECT_FIELD_SETTING */,
    "&applicationContextName": id_ac_shadowConsumerInitiatedAC /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
