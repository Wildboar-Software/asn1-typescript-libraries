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
import { Address, _decode_Address, _encode_Address } from "../MMS-Object-Module-1/Address.ta.mjs";
import { Identifier, _decode_Identifier, _encode_Identifier } from "../ISO-9506-MMS-1/Identifier.ta.mjs";
import { TypeDescription, _decode_TypeDescription, _encode_TypeDescription } from "../MMS-Object-Module-1/TypeDescription.ta.mjs";
import { Data, _decode_Data, _encode_Data } from "../ISO-9506-MMS-1/Data.ta.mjs";


/**
 * @summary UNNAMED_VARIABLE
 * @description
 * 
 * Maps a real variable at a known, fixed
 * VMD address. Exists with the VMD (never created/destroyed). Requires
 * the vadr CBB. Access method is always public. ISO 9506-1:2003 §14.1.2.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UNNAMED-VARIABLE ::= CLASS {
 *     &address            Address,
 *     &accessControl      Identifier,
 *     &typeDescription    TypeDescription,
 *     &value              Data,
 *     &accessMethod       ENUMERATED { public }
 *     -- The field '&accessMethod' shall have a value equal to public.
 * }
 * ```
 * 
 * @interface
 */
export
interface UNNAMED_VARIABLE {
    /**
     * @summary A fixed string that can be used for external programs to determine the object class of this object.
     */
    readonly class: "UNNAMED-VARIABLE";
    /**
     * @summary A map of type fields to their corresponding decoders.
     */
    readonly decoderFor: Partial<{ // For decoding types supplied in type fields
        [_K in keyof UNNAMED_VARIABLE]: $.ASN1Decoder<UNNAMED_VARIABLE[_K]>;
    }>;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    readonly encoderFor: Partial<{ // For encoding types supplied in type fields
        [_K in keyof UNNAMED_VARIABLE]: $.ASN1Encoder<UNNAMED_VARIABLE[_K]>;
    }>;
    /**
     * @summary &address
     * @description
     *
     * Location of the real variable. ISO 9506-1:2003 §14.1.2.1.
     *
     */
    readonly "&address"?: Address;
    /**
     * @summary &accessControl
     * @description
     *
     * ACL gating read/write of this unnamed variable. ISO 9506-1:2003
     * §14.1.2.2.
     *
     */
    readonly "&accessControl"?: Identifier;
    /**
     * @summary &typeDescription
     * @description
     *
     * TypeDescription of this address. ISO 9506-1:2003 §14.1.2.3, §14.2.2.
     *
     */
    readonly "&typeDescription"?: TypeDescription;
    /**
     * @summary &value
     * @description
     *
     * Current value; Data choice matches &typeDescription. ISO 9506-1:2003
     * §14.1.2.4.
     *
     */
    readonly "&value"?: Data;
    /**
     * @summary &accessMethod
     * @description
     *
     * Always public for Unnamed Variables. ISO 9506-1:2003 §14.1.2.5.
     *
     */
    readonly "&accessMethod"?: UNNAMED_VARIABLE_accessMethod;
}

/**
 * @summary UNNAMED_VARIABLE_accessMethod
 * @description
 *
 * Maps a real variable at a known, fixed
 * VMD address. Exists with the VMD (never created/destroyed). Requires
 * the vadr CBB. Access method is always public. ISO 9506-1:2003 §14.1.2.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UNNAMED-VARIABLE.&accessMethod ::= ENUMERATED {
 *     public }
 * ```
 *
 * @enum {number}
 */
export
enum _enum_for_UNNAMED_VARIABLE_accessMethod {
    public = 0,
}

/**
 * @summary UNNAMED_VARIABLE_accessMethod
 * @enum {number}
 */
export
type UNNAMED_VARIABLE_accessMethod = _enum_for_UNNAMED_VARIABLE_accessMethod;

/**
 * @summary UNNAMED_VARIABLE_accessMethod
 * @enum {number}
 */
export
const UNNAMED_VARIABLE_accessMethod = _enum_for_UNNAMED_VARIABLE_accessMethod;

/**
 * @summary UNNAMED_VARIABLE_accessMethod_public
 * @constant
 * @type {number}
 */
export
const UNNAMED_VARIABLE_accessMethod_public: UNNAMED_VARIABLE_accessMethod = UNNAMED_VARIABLE_accessMethod.public; /* LONG_NAMED_ENUMERATED_VALUE */

/* eslint-enable */
