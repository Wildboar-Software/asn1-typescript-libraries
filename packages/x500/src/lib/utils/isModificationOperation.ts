import type { Code } from "../modules/CommonProtocolSpecification/Code.ta";
import { id_opcode_administerPassword } from "../modules/CommonProtocolSpecification/id-opcode-administerPassword.va";
import { id_opcode_addEntry } from "../modules/CommonProtocolSpecification/id-opcode-addEntry.va";
import { id_opcode_changePassword } from "../modules/CommonProtocolSpecification/id-opcode-changePassword.va";
import { id_opcode_modifyDN } from "../modules/CommonProtocolSpecification/id-opcode-modifyDN.va";
import { id_opcode_modifyEntry } from "../modules/CommonProtocolSpecification/id-opcode-modifyEntry.va";
import { id_opcode_removeEntry } from "../modules/CommonProtocolSpecification/id-opcode-removeEntry.va";
import compareCode from "../utils/compareCode";

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
