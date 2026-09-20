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
import { Data, _decode_Data, _encode_Data } from "../ISO-9506-MMS-1/Data.ta.mjs";
import { Address, _decode_Address, _encode_Address } from "../MMS-Object-Module-1/Address.ta.mjs";


/**
 * @summary NAMED_VARIABLE
 * @description
 * 
 * Application name for a real (possibly
 * computed) variable. Scope may be VMD, Domain, or AA. Requires vnam.
 * May optionally expose a public address (vadr) and a semantic alias
 * (sem). ISO 9506-1:2003 §14.1.3.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NAMED-VARIABLE ::= CLASS {
 *     &name               ObjectName,
 *     -- shall be unique within its range of specification (VMD, Domain, AA)
 *     &accessControl      Identifier,
 *     &typeDescription    TypeDescription,
 *     &value              Data,
 *     &accessMethod       ENUMERATED {
 *         public,
 *         anythingElse,
 *         ... },
 *     &address              Address OPTIONAL,
 *     -- The presence of this field shall correspond to the
 *     -- field &access Method having a value equal to public.
 *     -- The absence of this field shall correspond to the
 *     -- field &accessMethod having a value equal to anything except public.
 *     -- The following field shall occur
 *     -- if and only if the sem CBB has been negotiated.
 *     &meaning              ObjectName OPTIONAL
 * }
 * ```
 * 
 * @interface
 */
export
interface NAMED_VARIABLE {
    /**
     * @summary A fixed string that can be used for external programs to determine the object class of this object.
     */
    readonly class: "NAMED-VARIABLE";
    /**
     * @summary A map of type fields to their corresponding decoders.
     */
    readonly decoderFor: Partial<{ // For decoding types supplied in type fields
        [_K in keyof NAMED_VARIABLE]: $.ASN1Decoder<NAMED_VARIABLE[_K]>;
    }>;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    readonly encoderFor: Partial<{ // For encoding types supplied in type fields
        [_K in keyof NAMED_VARIABLE]: $.ASN1Encoder<NAMED_VARIABLE[_K]>;
    }>;
    /**
     * @summary &name
     * @description
     *
     * ObjectName unique in its VMD/Domain/AA scope. ISO 9506-1:2003 §14.1.3.1.
     *
     */
    readonly "&name"?: ObjectName;
    /**
     * @summary &accessControl
     * @description
     *
     * ACL gating read, write, delete, and ACL change. ISO 9506-1:2003
     * §14.1.3.2.
     *
     */
    readonly "&accessControl"?: Identifier;
    /**
     * @summary &typeDescription
     * @description
     *
     * Type of this named variable. ISO 9506-1:2003 §14.1.3.3, §14.2.
     *
     */
    readonly "&typeDescription"?: TypeDescription;
    /**
     * @summary &value
     * @description
     *
     * Current value (Data). ISO 9506-1:2003 §14.1.3.
     *
     */
    readonly "&value"?: Data;
    /**
     * @summary &accessMethod
     * @description
     *
     * public (address visible), anythingElse, or extension. ISO 9506-1:2003
     * §14.1.3.
     *
     */
    readonly "&accessMethod"?: NAMED_VARIABLE_accessMethod;
    /**
     * @summary &address
     * @description
     *
     * Present iff &accessMethod is public (vadr). ISO 9506-1:2003 §14.1.3.
     *
     */
    readonly "&address"?: Address;
    /**
     * @summary &meaning
     * @description
     *
     * Optional semantic alias (sem CBB). ISO 9506-1:2003 §14.1.3.
     *
     */
    readonly "&meaning"?: ObjectName;
}

/**
 * @summary NAMED_VARIABLE_accessMethod
 * @description
 *
 * Application name for a real (possibly
 * computed) variable. Scope may be VMD, Domain, or AA. Requires vnam.
 * May optionally expose a public address (vadr) and a semantic alias
 * (sem). ISO 9506-1:2003 §14.1.3.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NAMED-VARIABLE.&accessMethod ::= ENUMERATED {
 *     public,
 *     anythingElse,
 *     ... }
 * ```
 *
 * @enum {number}
 */
export
enum _enum_for_NAMED_VARIABLE_accessMethod {
    public = 0,
    anythingElse = 1,
}

/**
 * @summary NAMED_VARIABLE_accessMethod
 * @enum {number}
 */
export
type NAMED_VARIABLE_accessMethod = _enum_for_NAMED_VARIABLE_accessMethod;

/**
 * @summary NAMED_VARIABLE_accessMethod
 * @enum {number}
 */
export
const NAMED_VARIABLE_accessMethod = _enum_for_NAMED_VARIABLE_accessMethod;

/**
 * @summary NAMED_VARIABLE_accessMethod_public
 * @constant
 * @type {number}
 */
export
const NAMED_VARIABLE_accessMethod_public: NAMED_VARIABLE_accessMethod = NAMED_VARIABLE_accessMethod.public; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary NAMED_VARIABLE_accessMethod_anythingElse
 * @constant
 * @type {number}
 */
export
const NAMED_VARIABLE_accessMethod_anythingElse: NAMED_VARIABLE_accessMethod = NAMED_VARIABLE_accessMethod.anythingElse; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary anythingElse
 * @constant
 * @type {number}
 */
export
const anythingElse: NAMED_VARIABLE_accessMethod = NAMED_VARIABLE_accessMethod.anythingElse; /* SHORT_NAMED_ENUMERATED_VALUE */

/* eslint-enable */
