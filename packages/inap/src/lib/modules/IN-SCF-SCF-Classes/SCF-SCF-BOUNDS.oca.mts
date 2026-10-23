/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SCF_SCF_BOUNDS
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SCF-SCF-BOUNDS ::= CLASS {
 *   &maxAmount                   INTEGER OPTIONAL,
 *   &maxUnitsPerInterval         INTEGER OPTIONAL,
 *   &maxTimePerInterval          INTEGER OPTIONAL,
 *   &maxScalingFactor            INTEGER OPTIONAL,
 *   &maxInitialUnitIncrement     INTEGER OPTIONAL,
 *   &maxUnitsPerDataInterval     INTEGER OPTIONAL,
 *   &maxSegmentsPerDataInterval  INTEGER OPTIONAL,
 *   &maxInitialTimeInterval      INTEGER OPTIONAL,
 *   &ub-nbCall                   INTEGER OPTIONAL,
 *   &minReceivedInfo             INTEGER,
 *   &maxReceivedInfo             INTEGER,
 *   &minScfAddress               INTEGER OPTIONAL,
 *   &maxScfAddress               INTEGER OPTIONAL,
 *   &minSSIInfoLength            INTEGER,
 *   &maxSSIInfoLength            INTEGER,
 *   &maxFreeContainer            INTEGER
 * }
 * WITH SYNTAX {
 *   [MAX-AMOUNT &maxAmount]
 *   [MAX-UNITS-PER-INTERVAL &maxUnitsPerInterval]
 *   [MAX-TIME-PER-INTERVAL &maxTimePerInterval]
 *   [MAX-SCALING-FACTOR &maxScalingFactor]
 *   [MAX-INITIAL-UNIT-INCREMENT &maxInitialUnitIncrement]
 *   [MAX-UNITS-PER-DATA-INTERVAL &maxUnitsPerDataInterval]
 *   [MAX-SEGMENTS-PER-INTERVAL &maxSegmentsPerDataInterval]
 *   [MAX-INITIAL-TIME-INTERVAL &maxInitialTimeInterval]
 *   [UB-NB-CALL &ub-nbCall]
 *   MIN-RECEIVED-INFO &minReceivedInfo
 *   MAX-RECEIVED-INFO &maxReceivedInfo
 *   [MIN-SCF-ADDRESS &minScfAddress]
 *   [MAX-SCF-ADDRESS &maxScfAddress]
 *   MIN-FOR-SSI-INFORMATION &minSSIInfoLength
 *   MAX-FOR-SSI-INFORMATION &maxSSIInfoLength
 *   MAX-FREE-CONTAINER &maxFreeContainer
 * }
 * ```
 * 
 * @interface
 */
export
interface SCF_SCF_BOUNDS {
    /**
     * @summary A fixed string that can be used for external programs to determine the object class of this object.
     */
    readonly class: "SCF-SCF-BOUNDS";
    /**
     * @summary A map of type fields to their corresponding decoders.
     */
    readonly decoderFor: Partial<{ // For decoding types supplied in type fields
        [_K in keyof SCF_SCF_BOUNDS]: $.ASN1Decoder<SCF_SCF_BOUNDS[_K]>;
    }>;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    readonly encoderFor: Partial<{ // For encoding types supplied in type fields
        [_K in keyof SCF_SCF_BOUNDS]: $.ASN1Encoder<SCF_SCF_BOUNDS[_K]>;
    }>;
    /**
     * @summary &maxAmount
     */
    readonly "&maxAmount"?: INTEGER;
    /**
     * @summary &maxUnitsPerInterval
     */
    readonly "&maxUnitsPerInterval"?: INTEGER;
    /**
     * @summary &maxTimePerInterval
     */
    readonly "&maxTimePerInterval"?: INTEGER;
    /**
     * @summary &maxScalingFactor
     */
    readonly "&maxScalingFactor"?: INTEGER;
    /**
     * @summary &maxInitialUnitIncrement
     */
    readonly "&maxInitialUnitIncrement"?: INTEGER;
    /**
     * @summary &maxUnitsPerDataInterval
     */
    readonly "&maxUnitsPerDataInterval"?: INTEGER;
    /**
     * @summary &maxSegmentsPerDataInterval
     */
    readonly "&maxSegmentsPerDataInterval"?: INTEGER;
    /**
     * @summary &maxInitialTimeInterval
     */
    readonly "&maxInitialTimeInterval"?: INTEGER;
    /**
     * @summary &ub-nbCall
     */
    readonly "&ub-nbCall"?: INTEGER;
    /**
     * @summary &minReceivedInfo
     */
    readonly "&minReceivedInfo"?: INTEGER;
    /**
     * @summary &maxReceivedInfo
     */
    readonly "&maxReceivedInfo"?: INTEGER;
    /**
     * @summary &minScfAddress
     */
    readonly "&minScfAddress"?: INTEGER;
    /**
     * @summary &maxScfAddress
     */
    readonly "&maxScfAddress"?: INTEGER;
    /**
     * @summary &minSSIInfoLength
     */
    readonly "&minSSIInfoLength"?: INTEGER;
    /**
     * @summary &maxSSIInfoLength
     */
    readonly "&maxSSIInfoLength"?: INTEGER;
    /**
     * @summary &maxFreeContainer
     */
    readonly "&maxFreeContainer"?: INTEGER;
};

/* eslint-enable */
