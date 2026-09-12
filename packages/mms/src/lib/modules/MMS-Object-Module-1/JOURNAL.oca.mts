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
import { JOURNAL_ENTRY } from "../MMS-Object-Module-1/JOURNAL-ENTRY.oca.mjs";
// export { JOURNAL_ENTRY } from "../MMS-Object-Module-1/JOURNAL-ENTRY.oca.mjs";


/**
 * @summary JOURNAL
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * JOURNAL ::= CLASS {
 *     &name                   ObjectName,
 *     -- shall be unique within its range of specification (VMD, Domain, AA)
 *     &accessControl          Identifier,
 *     &Entries                JOURNAL-ENTRY OPTIONAL
 * }
 * ```
 * 
 * @interface
 */
export
interface JOURNAL {
    /**
     * @summary A fixed string that can be used for external programs to determine the object class of this object.
     */
    readonly class: "JOURNAL";
    /**
     * @summary A map of type fields to their corresponding decoders.
     */
    readonly decoderFor: Partial<{ // For decoding types supplied in type fields
        [_K in keyof JOURNAL]: $.ASN1Decoder<JOURNAL[_K]>;
    }>;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    readonly encoderFor: Partial<{ // For encoding types supplied in type fields
        [_K in keyof JOURNAL]: $.ASN1Encoder<JOURNAL[_K]>;
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
     * @summary &Entries
     */
    readonly "&Entries"?: JOURNAL_ENTRY[];
};

/* eslint-enable */
