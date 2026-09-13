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
import { create } from "../DFRAbstractService/create.oa.mjs";
// export { create } from "../DFRAbstractService/create.oa.mjs";
import { delete_ } from "../DFRAbstractService/delete.oa.mjs";
// export { delete_ } from "../DFRAbstractService/delete.oa.mjs";
import { copy } from "../DFRAbstractService/copy.oa.mjs";
// export { copy } from "../DFRAbstractService/copy.oa.mjs";
import { move } from "../DFRAbstractService/move.oa.mjs";
// export { move } from "../DFRAbstractService/move.oa.mjs";
import { read } from "../DFRAbstractService/read.oa.mjs";
// export { read } from "../DFRAbstractService/read.oa.mjs";
import { modify } from "../DFRAbstractService/modify.oa.mjs";
// export { modify } from "../DFRAbstractService/modify.oa.mjs";
import { list } from "../DFRAbstractService/list.oa.mjs";
// export { list } from "../DFRAbstractService/list.oa.mjs";
import { search } from "../DFRAbstractService/search.oa.mjs";
// export { search } from "../DFRAbstractService/search.oa.mjs";
import { reserve } from "../DFRAbstractService/reserve.oa.mjs";
// export { reserve } from "../DFRAbstractService/reserve.oa.mjs";
import { abandon } from "../DFRAbstractService/abandon.oa.mjs";
// export { abandon } from "../DFRAbstractService/abandon.oa.mjs";
import { id_pt_dfr } from "../DFRObjectIdentifiers/id-pt-dfr.va.mjs";
// export { id_pt_dfr } from "../DFRObjectIdentifiers/id-pt-dfr.va.mjs";
import { type OPERATION_PACKAGE } from "../Remote-Operations-Information-Objects/OPERATION-PACKAGE.oca.mjs";


/**
 * @summary dfr
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * dfr OPERATION-PACKAGE ::= {
 *     CONSUMER INVOKES {
 *         create
 *         | delete
 *         | copy
 *         | move
 *         | read
 *         | modify
 *         | list
 *         | search
 *         | reserve
 *         | abandon
 *     }
 *     SUPPLIER INVOKES { }
 *     ID id-pt-dfr
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION_PACKAGE}
 * @implements {OPERATION_PACKAGE}
 */
export
const dfr: OPERATION_PACKAGE = {
    class: "OPERATION-PACKAGE",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Supplier": [ create, delete_, copy, move, read, modify, list, search, reserve, abandon, ] /* OBJECT_FIELD_SETTING */,
    "&Consumer": [] /* OBJECT_FIELD_SETTING */,
    "&id": id_pt_dfr /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
