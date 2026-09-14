/* eslint-disable */
import {
    BOOLEAN,
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
import { TypeDescription, _decode_TypeDescription, _encode_TypeDescription } from "../MMS-Object-Module-1/TypeDescription.ta.mjs";
// export { TypeDescription, _decode_TypeDescription, _encode_TypeDescription } from "../MMS-Object-Module-1/TypeDescription.ta.mjs";


/**
 * @summary DATA_EXCHANGE
 * @description
 * 
 * Named handle that invokes a real
 * procedure (RPC/message block). Optional link to a running Program
 * Invocation. ExchangeData performs D-Exchange with typed request and
 * response lists. ISO 9506-1:2003 §15.1.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DATA-EXCHANGE ::= CLASS {
 *     &name                   Identifier,
 *     -- this field shall be unique among all Data Exchange objects within the VMD
 *     &inUse                  BOOLEAN,
 *     &accessControl          Identifier,
 *     &request                SEQUENCE OF TypeDescription,
 *     &response               SEQUENCE OF TypeDescription,
 *     &linked                 BOOLEAN,
 *     -- The following attribute shall appear if an only if
 *     -- the value of &linked is true.
 *     &programInvocation      Identifier
 * }
 * ```
 * 
 * @interface
 */
export
interface DATA_EXCHANGE {
    /**
     * @summary A fixed string that can be used for external programs to determine the object class of this object.
     */
    readonly class: "DATA-EXCHANGE";
    /**
     * @summary A map of type fields to their corresponding decoders.
     */
    readonly decoderFor: Partial<{ // For decoding types supplied in type fields
        [_K in keyof DATA_EXCHANGE]: $.ASN1Decoder<DATA_EXCHANGE[_K]>;
    }>;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    readonly encoderFor: Partial<{ // For encoding types supplied in type fields
        [_K in keyof DATA_EXCHANGE]: $.ASN1Encoder<DATA_EXCHANGE[_K]>;
    }>;
    /**
     * @summary &name
     * @description
     *
     * Unique Data Exchange name within the VMD. ISO 9506-1:2003 §15.1.2.1.
     *
     */
    readonly "&name"?: Identifier;
    /**
     * @summary &inUse
     * @description
     *
     * true while D-Exchange is running (true if any concurrent instance is
     * active). ISO 9506-1:2003 §15.1.2.2, §15.2.2.2.
     *
     */
    readonly "&inUse"?: BOOLEAN;
    /**
     * @summary &accessControl
     * @description
     *
     * ACL gating write (ExchangeData) and ACL change. ISO 9506-1:2003
     * §15.1.2.3.
     *
     */
    readonly "&accessControl"?: Identifier;
    /**
     * @summary &request
     * @description
     *
     * Input TypeDescriptions of the underlying procedure. ISO 9506-1:2003
     * §15.1.2.4.
     *
     */
    readonly "&request"?: TypeDescription[];
    /**
     * @summary &response
     * @description
     *
     * Output TypeDescriptions of the underlying procedure. ISO 9506-1:2003
     * §15.1.2.5.
     *
     */
    readonly "&response"?: TypeDescription[];
    /**
     * @summary &linked
     * @description
     *
     * Whether this object is linked to a Program Invocation. ISO 9506-1:2003
     * §15.1.2.6.
     *
     */
    readonly "&linked"?: BOOLEAN;
    /**
     * @summary &programInvocation
     * @description
     *
     * Present iff &linked: the linked PI (must be running for ExchangeData).
     * ISO 9506-1:2003 §15.1.2.7.
     *
     */
    readonly "&programInvocation"?: Identifier;
};

/* eslint-enable */
