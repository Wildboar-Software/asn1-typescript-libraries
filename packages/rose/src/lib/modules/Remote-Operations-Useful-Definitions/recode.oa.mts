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
} from '@wildboar/asn1';
import { OPERATION } from '../Remote-Operations-Information-Objects/OPERATION.oca.mjs';
import { Code } from '../Remote-Operations-Information-Objects/Code.ta.mjs';


/**
 * @summary recode
 * @description
 *
 * **This production was manually written in TypeScript.**
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * recode{OPERATION:operation, Code:code} OPERATION ::= {
 *     ARGUMENT         operation.&ArgumentType
 *     OPTIONAL         operation.&argumentTypeOptional
 *     RESULT           operation.&ResultType
 *     OPTIONAL         operation.&resultTypeOptional
 *     RETURN RESULT    operation.&returnResult
 *     ERRORS           {operation.&Errors}
 *     LINKED           {operation.&Linked}
 *     SYNCHRONOUS      operation.&synchronous
 *     ALWAYS RESPONDS  operation.&alwaysReturns
 *     INVOKE PRIORITY  {operation.&InvokePriority}
 *     RESULT-PRIORITY  {operation.&ResultPriority}
 *     CODE             code
 * }
 * ```
 */
export
function recode (operation: OPERATION, code: Code): OPERATION {
    return {
        ...operation,
        "&operationCode": code,
    };
}

/* eslint-enable */
