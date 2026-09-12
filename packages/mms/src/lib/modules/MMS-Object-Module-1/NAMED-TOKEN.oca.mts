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
import { Identifier, _decode_Identifier, _encode_Identifier } from "../ISO-9506-MMS-1/Identifier.ta.mjs";
// export { Identifier, _decode_Identifier, _encode_Identifier } from "../ISO-9506-MMS-1/Identifier.ta.mjs";


/**
 * @summary NAMED_TOKEN
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NAMED-TOKEN ::= CLASS {
 *     &name         Identifier,
 *     &state        ENUMERATED { free, owned }
 * }
 * ```
 * 
 * @interface
 */
export
interface NAMED_TOKEN {
    /**
     * @summary A fixed string that can be used for external programs to determine the object class of this object.
     */
    readonly class: "NAMED-TOKEN";
    /**
     * @summary A map of type fields to their corresponding decoders.
     */
    readonly decoderFor: Partial<{ // For decoding types supplied in type fields
        [_K in keyof NAMED_TOKEN]: $.ASN1Decoder<NAMED_TOKEN[_K]>;
    }>;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    readonly encoderFor: Partial<{ // For encoding types supplied in type fields
        [_K in keyof NAMED_TOKEN]: $.ASN1Encoder<NAMED_TOKEN[_K]>;
    }>;
    /**
     * @summary &name
     */
    readonly "&name"?: Identifier;
    /**
     * @summary &state
     */
    readonly "&state"?: NAMED_TOKEN_state;
}

/**
 * @summary NAMED_TOKEN_state
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NAMED-TOKEN.&state ::= ENUMERATED {
 *     free,
 *     owned }
 * ```
 *
 * @enum {number}
 */
export
enum _enum_for_NAMED_TOKEN_state {
    free = 0,
    owned = 1,
}

/**
 * @summary NAMED_TOKEN_state
 * @enum {number}
 */
export
type NAMED_TOKEN_state = _enum_for_NAMED_TOKEN_state;

/**
 * @summary NAMED_TOKEN_state
 * @enum {number}
 */
export
const NAMED_TOKEN_state = _enum_for_NAMED_TOKEN_state;

/**
 * @summary NAMED_TOKEN_state_free
 * @constant
 * @type {number}
 */
export
const NAMED_TOKEN_state_free: NAMED_TOKEN_state = NAMED_TOKEN_state.free; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary NAMED_TOKEN_state_owned
 * @constant
 * @type {number}
 */
export
const NAMED_TOKEN_state_owned: NAMED_TOKEN_state = NAMED_TOKEN_state.owned; /* LONG_NAMED_ENUMERATED_VALUE */

/* eslint-enable */
