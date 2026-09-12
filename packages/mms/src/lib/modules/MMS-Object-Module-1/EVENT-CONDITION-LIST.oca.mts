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
import * as $ from "@wildboar/asn1/functional";
import { ObjectName, _decode_ObjectName, _encode_ObjectName } from "../ISO-9506-MMS-1/ObjectName.ta.mjs";
// export { ObjectName, _decode_ObjectName, _encode_ObjectName } from "../ISO-9506-MMS-1/ObjectName.ta.mjs";
import { Identifier, _decode_Identifier, _encode_Identifier } from "../ISO-9506-MMS-1/Identifier.ta.mjs";
// export { Identifier, _decode_Identifier, _encode_Identifier } from "../ISO-9506-MMS-1/Identifier.ta.mjs";


/**
 * @summary EVENT_CONDITION_LIST
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EVENT-CONDITION-LIST ::= CLASS {
 *     &name                           ObjectName,
 *     -- shall be unique within its range of specification (VMD, Domain, AA)
 *     &accessControl                  Identifier,
 *     &EventConditions                ObjectName,
 *     &EventConditionLists            ObjectName OPTIONAL,
 *     &ReferencingEventConditionLists ObjectName OPTIONAL
 * }
 * ```
 * 
 * @interface
 */
export
interface EVENT_CONDITION_LIST {
    /**
     * @summary A fixed string that can be used for external programs to determine the object class of this object.
     */
    readonly class: "EVENT-CONDITION-LIST";
    /**
     * @summary A map of type fields to their corresponding decoders.
     */
    readonly decoderFor: Partial<{ // For decoding types supplied in type fields
        [_K in keyof EVENT_CONDITION_LIST]: $.ASN1Decoder<EVENT_CONDITION_LIST[_K]>;
    }>;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    readonly encoderFor: Partial<{ // For encoding types supplied in type fields
        [_K in keyof EVENT_CONDITION_LIST]: $.ASN1Encoder<EVENT_CONDITION_LIST[_K]>;
    }>;
    /**
     * @summary &name
     */
    readonly "&name"?: ObjectName;
    /**
     * @summary &accessControl
     */
    readonly "&accessControl"?: Identifier;
    /**
     * @summary &EventConditions
     */
    readonly "&EventConditions"?: ObjectName;
    /**
     * @summary &EventConditionLists
     */
    readonly "&EventConditionLists"?: ObjectName;
    /**
     * @summary &ReferencingEventConditionLists
     */
    readonly "&ReferencingEventConditionLists"?: ObjectName;
};

/* eslint-enable */
