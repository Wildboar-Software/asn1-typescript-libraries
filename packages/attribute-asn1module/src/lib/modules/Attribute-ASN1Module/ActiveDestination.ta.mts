/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Destination, _decode_Destination, _encode_Destination } from "../Attribute-ASN1Module/Destination.ta.mjs";
/**
 * @summary ActiveDestination
 * @description
 * 
 * `Destination` constrained to a single AE-title (the destination currently in
 * use by an event-forwarding discriminator). MATCHES FOR EQUALITY.
 * `{smi2AttributeID 49}`. ITU-T Rec. X.721 (02/92) §10.7.4.1; ITU-T Rec. X.734
 * | ISO/IEC 10164-5.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ActiveDestination  ::= 
 *   Destination(WITH COMPONENTS {
 *                 single    PRESENT,
 *                 multiple  ABSENT
 *               })
 * ```
 */
export
type ActiveDestination = Destination; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) ActiveDestination
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ActiveDestination} The decoded data structure.
 */
export const _decode_ActiveDestination: $.ASN1Decoder<ActiveDestination> = _decode_Destination;

/**
 * @summary Encodes a(n) ActiveDestination into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ActiveDestination, encoded as an ASN.1 Element.
 */
export const _encode_ActiveDestination: $.ASN1Encoder<ActiveDestination> = _encode_Destination;


/* eslint-enable */
