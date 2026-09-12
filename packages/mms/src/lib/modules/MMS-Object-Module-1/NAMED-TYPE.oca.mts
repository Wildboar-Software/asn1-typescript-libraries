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
import { TypeDescription, _decode_TypeDescription, _encode_TypeDescription } from "../MMS-Object-Module-1/TypeDescription.ta.mjs";
// export { TypeDescription, _decode_TypeDescription, _encode_TypeDescription } from "../MMS-Object-Module-1/TypeDescription.ta.mjs";


/**
 * @summary NAMED_TYPE
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NAMED-TYPE ::= CLASS {
 *     &name               ObjectName,
 *     -- shall be unique within its range of specification (VMD, Domain, AA)
 *     &accessControl      Identifier,
 *     &typeDescription    TypeDescription,
 *     -- The following field shall occur
 *     -- if and only if the sem CBB has been negotiated.
 *     &meaning            ObjectName OPTIONAL
 * }
 * ```
 * 
 * @interface
 */
export
interface NAMED_TYPE {
    /**
     * @summary A fixed string that can be used for external programs to determine the object class of this object.
     */
    readonly class: "NAMED-TYPE";
    /**
     * @summary A map of type fields to their corresponding decoders.
     */
    readonly decoderFor: Partial<{ // For decoding types supplied in type fields
        [_K in keyof NAMED_TYPE]: $.ASN1Decoder<NAMED_TYPE[_K]>;
    }>;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    readonly encoderFor: Partial<{ // For encoding types supplied in type fields
        [_K in keyof NAMED_TYPE]: $.ASN1Encoder<NAMED_TYPE[_K]>;
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
     * @summary &typeDescription
     */
    readonly "&typeDescription"?: TypeDescription;
    /**
     * @summary &meaning
     */
    readonly "&meaning"?: ObjectName;
};

/* eslint-enable */
