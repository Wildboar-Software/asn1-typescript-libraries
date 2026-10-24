/* eslint-disable */
import {
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SCF_SRF_BOUNDS
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SCF-SRF-BOUNDS ::= CLASS {
 *   &minAttributesLength           INTEGER OPTIONAL,
 *   &maxAttributesLength           INTEGER OPTIONAL,
 *   &minMailBoxIDLength            INTEGER OPTIONAL,
 *   &maxMailBoxIDLength            INTEGER OPTIONAL,
 *   &minMessageContentLength       INTEGER OPTIONAL,
 *   &maxMessageContentLength       INTEGER OPTIONAL,
 *   &minReceivedInformationLength  INTEGER OPTIONAL,
 *   &maxReceivedInformationLength  INTEGER OPTIONAL,
 *   &maxRecordingTime              INTEGER OPTIONAL,
 *   &numOfMessageIDs               INTEGER OPTIONAL,
 *   &maxRecordedMessageUnits       INTEGER OPTIONAL,
 *   &maxVariableParts              INTEGER OPTIONAL
 * }
 * WITH SYNTAX {
 *   [MINIMUM-FOR-ATTRIBUTES &minAttributesLength]
 *   [MAXIMUM-FOR-ATTRIBUTES &maxAttributesLength]
 *   [MINIMUM-FOR-MAIL-BOX-ID &minMailBoxIDLength]
 *   [MAXIMUM-FOR-MAIL-BOX-ID &maxMailBoxIDLength]
 *   [MINIMUM-FOR-MESSAGE-CONTENT &minMessageContentLength]
 *   [MAXIMUM-FOR-MESSAGE-CONTENT &maxMessageContentLength]
 *   [MINIMUM-FOR-RECEIVED-INFORMATION &minReceivedInformationLength]
 *   [MAXIMUM-FOR-RECEIVED-INFORMATION &maxReceivedInformationLength]
 *   [MAXIMUM-FOR-RECORDING-TIME &maxRecordingTime]
 *   [NUM-OF-MESSAGE-IDS &numOfMessageIDs]
 *   [MAXIMUM-FOR-RECORDED-MESSAGE-UNITS &maxRecordedMessageUnits]
 *   [NUM-OF-VARIABLE-PARTS &maxVariableParts]
 * }
 * ```
 * 
 * @interface
 */
export
interface SCF_SRF_BOUNDS {
    /**
     * @summary A fixed string that can be used for external programs to determine the object class of this object.
     */
    readonly class: "SCF-SRF-BOUNDS";
    /**
     * @summary A map of type fields to their corresponding decoders.
     */
    readonly decoderFor: Partial<{ // For decoding types supplied in type fields
        [_K in keyof SCF_SRF_BOUNDS]: $.ASN1Decoder<SCF_SRF_BOUNDS[_K]>;
    }>;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    readonly encoderFor: Partial<{ // For encoding types supplied in type fields
        [_K in keyof SCF_SRF_BOUNDS]: $.ASN1Encoder<SCF_SRF_BOUNDS[_K]>;
    }>;
    /**
     * @summary &minAttributesLength
     */
    readonly "&minAttributesLength"?: INTEGER;
    /**
     * @summary &maxAttributesLength
     */
    readonly "&maxAttributesLength"?: INTEGER;
    /**
     * @summary &minMailBoxIDLength
     */
    readonly "&minMailBoxIDLength"?: INTEGER;
    /**
     * @summary &maxMailBoxIDLength
     */
    readonly "&maxMailBoxIDLength"?: INTEGER;
    /**
     * @summary &minMessageContentLength
     */
    readonly "&minMessageContentLength"?: INTEGER;
    /**
     * @summary &maxMessageContentLength
     */
    readonly "&maxMessageContentLength"?: INTEGER;
    /**
     * @summary &minReceivedInformationLength
     */
    readonly "&minReceivedInformationLength"?: INTEGER;
    /**
     * @summary &maxReceivedInformationLength
     */
    readonly "&maxReceivedInformationLength"?: INTEGER;
    /**
     * @summary &maxRecordingTime
     */
    readonly "&maxRecordingTime"?: INTEGER;
    /**
     * @summary &numOfMessageIDs
     */
    readonly "&numOfMessageIDs"?: INTEGER;
    /**
     * @summary &maxRecordedMessageUnits
     */
    readonly "&maxRecordedMessageUnits"?: INTEGER;
    /**
     * @summary &maxVariableParts
     */
    readonly "&maxVariableParts"?: INTEGER;
};

/* eslint-enable */
