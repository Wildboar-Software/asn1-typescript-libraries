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
import { connectToResource } from "../CAP-gsmSSF-gsmSCF-ops-args/connectToResource.oa.mjs";
import { playAnnouncement } from "../CAP-gsmSCF-gsmSRF-ops-args/playAnnouncement.oa.mjs";
import { promptAndCollectUserInformation } from "../CAP-gsmSCF-gsmSRF-ops-args/promptAndCollectUserInformation.oa.mjs";
import { resetTimer } from "../CAP-gsmSSF-gsmSCF-ops-args/resetTimer.oa.mjs";
import { OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { activityTest } from "../CAP-gsmSSF-gsmSCF-ops-args/activityTest.oa.mjs";
// export { activityTest } from "../CAP-gsmSSF-gsmSCF-ops-args/activityTest.oa.mjs";
// export { cAPSpecificBoundSet } from "../CAP-classes/cAPSpecificBoundSet.oa.mjs";
import { disconnectForwardConnection } from "../CAP-gsmSSF-gsmSCF-ops-args/disconnectForwardConnection.oa.mjs";
// export { disconnectForwardConnection } from "../CAP-gsmSSF-gsmSCF-ops-args/disconnectForwardConnection.oa.mjs";


/**
 * @summary AssistHandoffssfToScfReturnable
 * @description
 * 
 * Operations that may be returned in the assist-handoff gsmSSF-to-gsmSCF
 * `TCMessage`: `activityTest`, `assistRequestInstructions`, `cancel`,
 * `connectToResource`, `disconnectForwardConnection`, `playAnnouncement`,
 * `promptAndCollectUserInformation`, `resetTimer`. Bound set
 * `cAPSpecificBoundSet`. Rel-6 imports version8(7) operations from
 * CAP-gsmSSF-gsmSCF-ops-args and CAP-gsmSCF-gsmSRF-ops-args.
 * (3GPP TS 29.078 V19.0.0 clause 6.1.2).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AssistHandoffssfToScfReturnable OPERATION ::= {
 *     activityTest |
 *     assistRequestInstructions {cAPSpecificBoundSet} |
 *     cancel {cAPSpecificBoundSet} |
 *     connectToResource {cAPSpecificBoundSet} |
 *     disconnectForwardConnection |
 *     playAnnouncement {cAPSpecificBoundSet} |
 *     promptAndCollectUserInformation {cAPSpecificBoundSet} |
 *     resetTimer {cAPSpecificBoundSet}
 *     }
 * ```
 * 
 * @constant
 * @type {OPERATION[]}
 * 
 */
export
const AssistHandoffssfToScfReturnable: (OPERATION)[] = [ activityTest, assistRequestInstructions, cancel, connectToResource, disconnectForwardConnection, playAnnouncement, promptAndCollectUserInformation, resetTimer, ];

/* eslint-enable */
