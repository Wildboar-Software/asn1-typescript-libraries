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
import { assistRequestInstructions } from "../CAP-gsmSSF-gsmSCF-ops-args/assistRequestInstructions.oa.mjs";
import { cancel } from "../CAP-gsmSSF-gsmSCF-ops-args/cancel.oa.mjs";
import { playAnnouncement } from "../CAP-gsmSCF-gsmSRF-ops-args/playAnnouncement.oa.mjs";
import { promptAndCollectUserInformation } from "../CAP-gsmSCF-gsmSRF-ops-args/promptAndCollectUserInformation.oa.mjs";
import { OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { activityTest } from "../CAP-gsmSSF-gsmSCF-ops-args/activityTest.oa.mjs";
// export { activityTest } from "../CAP-gsmSSF-gsmSCF-ops-args/activityTest.oa.mjs";
// export { cAPSpecificBoundSet } from "../CAP-classes/cAPSpecificBoundSet.oa.mjs";


/**
 * @summary GsmSRFgsmSCFReturnable
 * @description
 * 
 * Operations that may be returned in the gsmSRF-to-gsmSCF `TCMessage`:
 * `activityTest`, `assistRequestInstructions`, `cancel`, `playAnnouncement`,
 * `promptAndCollectUserInformation`. Bound set `cAPSpecificBoundSet`. Rel-6
 * imports version8(7) operations from CAP-gsmSSF-gsmSCF-ops-args and
 * CAP-gsmSCF-gsmSRF-ops-args. (3GPP TS 29.078 V19.0.0 clause 6.2.2).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GsmSRFgsmSCFReturnable OPERATION ::= {
 *     activityTest |
 *     assistRequestInstructions {cAPSpecificBoundSet} |
 *     cancel {cAPSpecificBoundSet} |
 *     playAnnouncement {cAPSpecificBoundSet} |
 *     promptAndCollectUserInformation {cAPSpecificBoundSet}
 *     }
 * ```
 * 
 * @constant
 * @type {OPERATION[]}
 * 
 */
export
const GsmSRFgsmSCFReturnable: (OPERATION)[] = [ activityTest, assistRequestInstructions, cancel, playAnnouncement, promptAndCollectUserInformation, ];

/* eslint-enable */
