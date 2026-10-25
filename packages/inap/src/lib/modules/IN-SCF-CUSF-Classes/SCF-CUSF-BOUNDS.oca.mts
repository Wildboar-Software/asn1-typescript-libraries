/* eslint-disable */
import {
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SCF_CUSF_BOUNDS
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SCF-CUSF-BOUNDS ::= CLASS {
 *   &minAssReleaseInfoLen    INTEGER OPTIONAL,
 *   &maxAssReleaseInfoLen    INTEGER OPTIONAL,
 *   &minCompReceivedInfoLen  INTEGER OPTIONAL,
 *   &maxCompReceivedInfoLen  INTEGER OPTIONAL,
 *   &numOfBCUSMEvents        INTEGER OPTIONAL
 * }
 * WITH SYNTAX {
 *   [MINIMUM-FOR-ASS-RELEASE-INFO-LENGTH &minAssReleaseInfoLen]
 *   [MAXIMUM-FOR-ASS-RELEASE-INFO-LENGTH &maxAssReleaseInfoLen]
 *   [MINIMUM-FOR-COMP-RECEIVED-INFO-LENGTH &minCompReceivedInfoLen]
 *   [MAXIMUM-FOR-COMP-RECEIVED-INFO-LENGTH &maxCompReceivedInfoLen]
 *   [NUM-OF-BCUSM-EVENTS &numOfBCUSMEvents]
 * }
 * ```
 * 
 * @interface
 */
export
interface SCF_CUSF_BOUNDS {
    /**
     * @summary A fixed string that can be used for external programs to determine the object class of this object.
     */
    readonly class: "SCF-CUSF-BOUNDS";
    /**
     * @summary A map of type fields to their corresponding decoders.
     */
    readonly decoderFor: Partial<{ // For decoding types supplied in type fields
        [_K in keyof SCF_CUSF_BOUNDS]: $.ASN1Decoder<SCF_CUSF_BOUNDS[_K]>;
    }>;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    readonly encoderFor: Partial<{ // For encoding types supplied in type fields
        [_K in keyof SCF_CUSF_BOUNDS]: $.ASN1Encoder<SCF_CUSF_BOUNDS[_K]>;
    }>;
    /**
     * @summary &minAssReleaseInfoLen
     */
    readonly "&minAssReleaseInfoLen"?: INTEGER;
    /**
     * @summary &maxAssReleaseInfoLen
     */
    readonly "&maxAssReleaseInfoLen"?: INTEGER;
    /**
     * @summary &minCompReceivedInfoLen
     */
    readonly "&minCompReceivedInfoLen"?: INTEGER;
    /**
     * @summary &maxCompReceivedInfoLen
     */
    readonly "&maxCompReceivedInfoLen"?: INTEGER;
    /**
     * @summary &numOfBCUSMEvents
     */
    readonly "&numOfBCUSMEvents"?: INTEGER;
};

/* eslint-enable */
