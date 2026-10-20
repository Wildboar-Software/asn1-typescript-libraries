import { type CONTRACT, type CONNECTION_PACKAGE, type OPERATION, type OPERATION_PACKAGE, emptyUnbind } from "@wildboar/rose";
import {
    chainedAbandon,
    chainedAddEntry,
    chainedCompare,
    chainedList,
    chainedModifyDN,
    chainedModifyEntry,
    chainedRead,
    chainedRemoveEntry,
    chainedSearch,
    dSABind,
} from "@wildboar/x500/DistributedOperations";
import {
    id_contract_dsp,
    id_package_chainedModify,
    id_package_chainedRead,
    id_package_chainedSearch,
    id_package_dspConnection,
} from "@wildboar/x500/ProtocolObjectIdentifiers";

/**
 * @summary dspContract
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * dspContract CONTRACT ::= {
 *   CONNECTION     dspConnectionPackage
 *   OPERATIONS OF
 *     {chainedReadPackage | chainedSearchPackage | chainedModifyPackage}
 *   ID             id-contract-dsp
 * }
 * ```
 *
 * @constant
 * @type {CONTRACT}
 * @implements {CONTRACT}
 */
const dspConnectionPackage: CONNECTION_PACKAGE = {
    class: "CONNECTION-PACKAGE",
    decoderFor: {},
    encoderFor: {},
    // X.500's OPERATION class is not the 1997 ROSE OPERATION class.
    "&bind": dSABind as unknown as OPERATION,
    "&unbind": emptyUnbind,
    "&id": id_package_dspConnection,
    "&responderCanUnbind": false,
    "&unbindCanFail": false,
};

const chainedReadPackage: OPERATION_PACKAGE = {
    class: "OPERATION-PACKAGE",
    decoderFor: {},
    encoderFor: {},
    "&Both": [chainedRead, chainedCompare, chainedAbandon] as unknown as OPERATION[],
    "&id": id_package_chainedRead,
};

const chainedSearchPackage: OPERATION_PACKAGE = {
    class: "OPERATION-PACKAGE",
    decoderFor: {},
    encoderFor: {},
    "&Both": [chainedList, chainedSearch] as unknown as OPERATION[],
    "&id": id_package_chainedSearch,
};

const chainedModifyPackage: OPERATION_PACKAGE = {
    class: "OPERATION-PACKAGE",
    decoderFor: {},
    encoderFor: {},
    "&Both": [chainedAddEntry, chainedRemoveEntry, chainedModifyEntry, chainedModifyDN] as unknown as OPERATION[],
    "&id": id_package_chainedModify,
};

export const dspContract: CONTRACT = {
    class: "CONTRACT",
    decoderFor: {},
    encoderFor: {},
    "&connection": dspConnectionPackage,
    "&OperationsOf": [chainedReadPackage, chainedSearchPackage, chainedModifyPackage],
    "&id": id_contract_dsp,
};
