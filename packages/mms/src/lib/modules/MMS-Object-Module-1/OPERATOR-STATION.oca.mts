/* eslint-disable */
import {
    ENUMERATED,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Identifier, _decode_Identifier, _encode_Identifier } from "../ISO-9506-MMS-1/Identifier.ta.mjs";
// export { Identifier, _decode_Identifier, _encode_Identifier } from "../ISO-9506-MMS-1/Identifier.ta.mjs";
import { MMSString, _decode_MMSString, _encode_MMSString } from "../ISO-9506-MMS-1/MMSString.ta.mjs";
// export { MMSString, _decode_MMSString, _encode_MMSString } from "../ISO-9506-MMS-1/MMSString.ta.mjs";


/**
 * @summary OPERATOR_STATION
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * OPERATOR-STATION ::= CLASS {
 *     &name                   Identifier,
 *     -- shall be unique within its range of specification (VMD)
 *     &accessControl          Identifier,
 *     &stationType            ENUMERATED {
 *         entry,
 *         display,
 *         entry-display },
 *     -- The following field shall appear if stationType is entry or entry-display
 *     &inputBuffer            MMSString OPTIONAL,
 *     -- The following field shall appear if stationType is display or entry-display
 *     &outputBuffers          SEQUENCE OF MMSString OPTIONAL,
 *     &state                  ENUMERATED {
 *         idle,
 *         display-prompt-data,
 *         waiting-for-input,
 *         input-buffer-filled,
 *         output-buffers-filled }
 * }
 * ```
 * 
 * @interface
 */
export
interface OPERATOR_STATION {
    /**
     * @summary A fixed string that can be used for external programs to determine the object class of this object.
     */
    readonly class: "OPERATOR-STATION";
    /**
     * @summary A map of type fields to their corresponding decoders.
     */
    readonly decoderFor: Partial<{ // For decoding types supplied in type fields
        [_K in keyof OPERATOR_STATION]: $.ASN1Decoder<OPERATOR_STATION[_K]>;
    }>;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    readonly encoderFor: Partial<{ // For encoding types supplied in type fields
        [_K in keyof OPERATOR_STATION]: $.ASN1Encoder<OPERATOR_STATION[_K]>;
    }>;
    /**
     * @summary &name
     */
    readonly "&name"?: Identifier;
    /**
     * @summary &accessControl
     */
    readonly "&accessControl"?: Identifier;
    /**
     * @summary &stationType
     */
    readonly "&stationType"?: ENUMERATED;
    /**
     * @summary &inputBuffer
     */
    readonly "&inputBuffer"?: MMSString;
    /**
     * @summary &outputBuffers
     */
    readonly "&outputBuffers"?: MMSString[];
    /**
     * @summary &state
     */
    readonly "&state"?: ENUMERATED;
}

/* eslint-enable */
