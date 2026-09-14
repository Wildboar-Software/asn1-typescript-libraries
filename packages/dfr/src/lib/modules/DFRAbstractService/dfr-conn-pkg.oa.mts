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
// export { emptyBind } from "../Remote-Operations-Useful-Definitions/emptyBind.oa.mjs";
import { emptyUnbind } from "../Remote-Operations-Useful-Definitions/emptyUnbind.oa.mjs";
// export { emptyUnbind } from "../Remote-Operations-Useful-Definitions/emptyUnbind.oa.mjs";
import { dfrBind } from "../DFRAbstractService/dfrBind.oa.mjs";
// export { dfrBind } from "../DFRAbstractService/dfrBind.oa.mjs";
import { type CONNECTION_PACKAGE } from "../Remote-Operations-Information-Objects/CONNECTION-PACKAGE.oca.mjs";


/**
 * @summary dfr_conn_pkg
 * @description
 *
 * Connection package for DfrBind / DfrUnbind. ISO/IEC 10166-1:1991 §7. ISO/IEC
 * 10166-2:1991 §5.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * dfr-conn-pkg CONNECTION-PACKAGE ::= {
 *     BIND                dfrBind
 *     -- Empty unbind
 * }
 * ```
 * 
 * @constant
 * @type {CONNECTION_PACKAGE}
 * @implements {CONNECTION_PACKAGE}
 */
export
const dfr_conn_pkg: CONNECTION_PACKAGE = {
    class: "CONNECTION-PACKAGE",
    decoderFor: {
    },
    encoderFor: {
    },
    "&bind": dfrBind /* OBJECT_FIELD_SETTING */,
    "&unbind": emptyUnbind /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&responderCanUnbind": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&unbindCanFail": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
