/* eslint-disable */
import { OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { doNotDisturbActivateQ } from "../Do-Not-Disturb-Operations-asn1-97/doNotDisturbActivateQ.oa.mjs";
import { doNotDisturbDeactivateQ } from "../Do-Not-Disturb-Operations-asn1-97/doNotDisturbDeactivateQ.oa.mjs";
import { doNotDisturbInterrogateQ } from "../Do-Not-Disturb-Operations-asn1-97/doNotDisturbInterrogateQ.oa.mjs";
import { doNotDisturbOverrideQ } from "../Do-Not-Disturb-Operations-asn1-97/doNotDisturbOverrideQ.oa.mjs";
import { doNotDisturbOvrExecuteQ } from "../Do-Not-Disturb-Operations-asn1-97/doNotDisturbOvrExecuteQ.oa.mjs";
import { pathRetain } from "../Do-Not-Disturb-Operations-asn1-97/pathRetain.oa.mjs";
import { serviceAvailable } from "../Do-Not-Disturb-Operations-asn1-97/serviceAvailable.oa.mjs";

/**
 * @summary Do_Not_Disturb_Operations
 * @description
 *
 * Operations of module `Do-Not-Disturb-Operations-asn1-97`
 * (ECMA-194 §6.3.1, Table 1): remote activation, deactivation, and
 * interrogation of SS-DND; immediate and path-retention SS-DNDO;
 * and the generic path-retention pair.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-194/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Do-Not-Disturb-Operations OPERATION ::= {
 *     doNotDisturbActivateQ
 *     | doNotDisturbDeactivateQ
 *     | doNotDisturbInterrogateQ
 *     | doNotDisturbOverrideQ
 *     | doNotDisturbOvrExecuteQ
 *     | pathRetain
 *     | serviceAvailable
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION[]}
 * 
 */
export
const Do_Not_Disturb_Operations: (OPERATION)[] = [ doNotDisturbActivateQ, doNotDisturbDeactivateQ, doNotDisturbInterrogateQ, doNotDisturbOverrideQ, doNotDisturbOvrExecuteQ, pathRetain, serviceAvailable, ];

/* eslint-enable */
