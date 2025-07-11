import type { Code } from "../modules/CommonProtocolSpecification/Code.ta.mjs";
import { id_opcode_administerPassword } from "../modules/CommonProtocolSpecification/id-opcode-administerPassword.va.mjs";
import { id_opcode_addEntry } from "../modules/CommonProtocolSpecification/id-opcode-addEntry.va.mjs";
import { id_opcode_changePassword } from "../modules/CommonProtocolSpecification/id-opcode-changePassword.va.mjs";
import { id_opcode_modifyDN } from "../modules/CommonProtocolSpecification/id-opcode-modifyDN.va.mjs";
import { id_opcode_modifyEntry } from "../modules/CommonProtocolSpecification/id-opcode-modifyEntry.va.mjs";
import { id_opcode_removeEntry } from "../modules/CommonProtocolSpecification/id-opcode-removeEntry.va.mjs";
import compareCode from "../utils/compareCode.mjs";

/**
 * @summary Determine whether an operation is a modification operation
 * @description
 * 
 * Determine whether an operation is a modification operation as opposed to an
 * operation that only reads values. (In some cases, these reads can have
 * auxiliary effects like changing some operational attributes, but they should
 * not have an effect on user attributes.)
 * 
 * @param {Code} operationType The operation code of the operation
 * @returns {Boolean} `true` if the operation is a modification operation
 * @function
 */
export
function isModificationOperation (operationType: Code): boolean {
    return (
        compareCode(id_opcode_administerPassword, operationType)
        || compareCode(id_opcode_addEntry, operationType)
        || compareCode(id_opcode_changePassword, operationType)
        || compareCode(id_opcode_modifyDN, operationType)
        || compareCode(id_opcode_modifyEntry, operationType)
        || compareCode(id_opcode_removeEntry, operationType)
    );
}

export default isModificationOperation;
