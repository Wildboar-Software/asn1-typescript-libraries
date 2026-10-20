/* eslint-disable */
import { dispConnectionPackage } from "../DirectoryInformationShadowProtocol/dispConnectionPackage.oa.mjs";
// export { dispConnectionPackage } from "../DirectoryInformationShadowProtocol/dispConnectionPackage.oa.mjs";
import { shadowConsumerPackage } from "../DirectoryInformationShadowProtocol/shadowConsumerPackage.oa.mjs";
// export { shadowConsumerPackage } from "../DirectoryInformationShadowProtocol/shadowConsumerPackage.oa.mjs";
import { id_contract_shadowConsumer } from "../ProtocolObjectIdentifiers/id-contract-shadowConsumer.va.mjs";
// export { id_contract_shadowConsumer } from "../ProtocolObjectIdentifiers/id-contract-shadowConsumer.va.mjs";
import { type CONTRACT } from "../Remote-Operations-Information-Objects/CONTRACT.oca.mjs";


/**
 * @summary shadowConsumerContract
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * shadowConsumerContract CONTRACT ::= {
 *   CONNECTION             dispConnectionPackage
 *   INITIATOR CONSUMER OF  {shadowConsumerPackage}
 *   ID                     id-contract-shadowConsumer
 * }
 * ```
 * 
 * @constant
 * @type {CONTRACT}
 * @implements {CONTRACT}
 */
export
const shadowConsumerContract: CONTRACT = {
    class: "CONTRACT",
    decoderFor: {
    },
    encoderFor: {
    },
    "&connection": dispConnectionPackage /* OBJECT_FIELD_SETTING */,
    "&InitiatorConsumerOf": [ shadowConsumerPackage, ] /* OBJECT_FIELD_SETTING */,
    "&id": id_contract_shadowConsumer /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
