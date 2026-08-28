/* eslint-disable */
import {
    INTEGER,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';


/**
 * @summary Presentation_context_identifier
 * @description
 *
 * Identifies a presentation context on one connection; unique and known
 * to both PPMs. The default context has none (X.226 §3.5.7). Initiator
 * allocates odd integers, responder even (X.226 §6.2.2.7, §6.5.2.1).
 * Values must not be reused after deletion.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Presentation-context-identifier  ::=  INTEGER(1..127, ..., 128..MAX)
 * ```
 */
export type Presentation_context_identifier = INTEGER;




export const _decode_Presentation_context_identifier = $._decodeInteger;




export const _encode_Presentation_context_identifier = $._encodeInteger;


/* eslint-enable */
