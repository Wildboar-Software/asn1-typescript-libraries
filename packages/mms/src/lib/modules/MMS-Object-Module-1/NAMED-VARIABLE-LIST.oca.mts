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
import { VARIABLE_LIST_ITEM } from "../MMS-Object-Module-1/VARIABLE-LIST-ITEM.oca.mjs";


/**
 * @summary NAMED_VARIABLE_LIST
 * @description
 * 
 * Named list of variable-list items
 * (named or unnamed, each with optional Alternate Access). Requires vnam
 * and vlis. Read/Write/InformationReport apply to every item.
 * ISO 9506-1:2003 §14.1.4.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NAMED-VARIABLE-LIST ::= CLASS {
 *     &name                   ObjectName,
 *     -- shall be unique within its range of specification (VMD, Domain, AA)
 *     &accessControl          Identifier,
 *     &listOfVariables        VARIABLE-LIST-ITEM
 * }
 * ```
 * 
 * @interface
 */
export
interface NAMED_VARIABLE_LIST {
    /**
     * @summary A fixed string that can be used for external programs to determine the object class of this object.
     */
    readonly class: "NAMED-VARIABLE-LIST";
    /**
     * @summary A map of type fields to their corresponding decoders.
     */
    readonly decoderFor: Partial<{ // For decoding types supplied in type fields
        [_K in keyof NAMED_VARIABLE_LIST]: $.ASN1Decoder<NAMED_VARIABLE_LIST[_K]>;
    }>;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    readonly encoderFor: Partial<{ // For encoding types supplied in type fields
        [_K in keyof NAMED_VARIABLE_LIST]: $.ASN1Encoder<NAMED_VARIABLE_LIST[_K]>;
    }>;
    /**
     * @summary &name
     * @description
     *
     * ObjectName unique in its VMD/Domain/AA scope. ISO 9506-1:2003 §14.1.4.1.
     *
     */
    readonly "&name"?: ObjectName;
    /**
     * @summary &accessControl
     * @description
     *
     * ACL gating read, write, delete, and ACL change. ISO 9506-1:2003
     * §14.1.4.2.
     *
     */
    readonly "&accessControl"?: Identifier;
    /**
     * @summary &listOfVariables
     * @description
     *
     * One or more VARIABLE-LIST-ITEM objects. ISO 9506-1:2003 §14.1.4.3.
     *
     */
    readonly "&listOfVariables"?: VARIABLE_LIST_ITEM;
};

/* eslint-enable */
