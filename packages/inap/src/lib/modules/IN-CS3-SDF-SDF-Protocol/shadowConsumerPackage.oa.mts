import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
/* eslint-disable */
import { requestShadowUpdate } from "../DirectoryShadowAbstractService/requestShadowUpdate.oa.mjs";
// export { requestShadowUpdate } from "../DirectoryShadowAbstractService/requestShadowUpdate.oa.mjs";
import { updateShadow } from "../DirectoryShadowAbstractService/updateShadow.oa.mjs";
// export { updateShadow } from "../DirectoryShadowAbstractService/updateShadow.oa.mjs";
import { id_package_shadowConsumer } from "../IN-CS3-object-identifiers/id-package-shadowConsumer.va.mjs";
// export { id_package_shadowConsumer } from "../IN-CS3-object-identifiers/id-package-shadowConsumer.va.mjs";
import { type OPERATION_PACKAGE } from "../Remote-Operations-Information-Objects/OPERATION-PACKAGE.oca.mjs";


/**
 * @summary shadowConsumerPackage
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * shadowConsumerPackage OPERATION-PACKAGE ::= {
 *   CONSUMER INVOKES  {requestShadowUpdate}
 *   SUPPLIER INVOKES  {updateShadow}
 *   ID                id-package-shadowConsumer
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION_PACKAGE}
 * @implements {OPERATION_PACKAGE}
 */
export
const shadowConsumerPackage: OPERATION_PACKAGE = {
    class: "OPERATION-PACKAGE",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Supplier": [ requestShadowUpdate, ] as unknown as OPERATION[] /* OBJECT_FIELD_SETTING */,
    "&Consumer": [ updateShadow, ] as unknown as OPERATION[] /* OBJECT_FIELD_SETTING */,
    "&id": id_package_shadowConsumer /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
