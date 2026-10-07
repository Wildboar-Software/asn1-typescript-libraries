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
import { Identifier, _decode_Identifier, _encode_Identifier } from "../ISO-9506-MMS-1/Identifier.ta.mjs";
import { TypeDescription, _decode_TypeDescription, _encode_TypeDescription } from "../MMS-Object-Module-1/TypeDescription.ta.mjs";


/**
 * @summary NAMED_TYPE
 * @description
 * 
 * A name bound to a TypeDescription. Requires
 * vnam (and vadr per §14.1.5). Optional &meaning (sem CBB) names another
 * Named Type that conveys semantics. ISO 9506-1:2003 §14.1.5.
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
     * @description
     *
     * ObjectName unique in its VMD/Domain/AA scope. ISO 9506-1:2003 §14.1.5.1.
     *
     */
    readonly "&name"?: ObjectName;
    /**
     * @summary &accessControl
     * @description
     *
     * ACL gating delete and ACL change. ISO 9506-1:2003 §14.1.5.2.
     *
     */
    readonly "&accessControl"?: Identifier;
    /**
     * @summary &typeDescription
     * @description
     *
     * The named TypeDescription. ISO 9506-1:2003 §14.1.5.3, §14.2.2.
     *
     */
    readonly "&typeDescription"?: TypeDescription;
    /**
     * @summary &meaning
     * @description
     *
     * Optional name of another Named Type conveying semantics (sem CBB). ISO
     * 9506-1:2003 §14.1.5.4.
     *
     */
    readonly "&meaning"?: ObjectName;
};

/* eslint-enable */
