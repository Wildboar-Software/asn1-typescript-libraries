/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import { dfr_conn_pkg } from "../DFRAbstractService/dfr-conn-pkg.oa.mjs";
// export { dfr_conn_pkg } from "../DFRAbstractService/dfr-conn-pkg.oa.mjs";
import { dfr } from "../DFRAbstractService/dfr.oa.mjs";
// export { dfr } from "../DFRAbstractService/dfr.oa.mjs";
import { type CONTRACT } from "../Remote-Operations-Information-Objects/CONTRACT.oca.mjs";


/**
 * @summary dfr_contract
 * @description
 *
 * Association contract: DFR connection package plus initiator as consumer of
 * the DFR port. ISO/IEC 10166-2:1991 §5–§6.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * dfr-contract CONTRACT ::= {
 *     CONNECTION              dfr-conn-pkg
 *     INITIATOR CONSUMER OF   {dfr}
 * }
 * ```
 * 
 * @constant
 * @type {CONTRACT}
 * @implements {CONTRACT}
 */
export
const dfr_contract: CONTRACT = {
    class: "CONTRACT",
    decoderFor: {
    },
    encoderFor: {
    },
    "&connection": dfr_conn_pkg /* OBJECT_FIELD_SETTING */,
    "&InitiatorConsumerOf": [ dfr, ] /* OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
