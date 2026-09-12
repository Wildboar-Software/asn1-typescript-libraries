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
import { ControlElement_beginDomainDef, _decode_ControlElement_beginDomainDef, _encode_ControlElement_beginDomainDef } from "../ISO-9506-MMS-1/ControlElement-beginDomainDef.ta.mjs";
// export { ControlElement_beginDomainDef, _decode_ControlElement_beginDomainDef, _encode_ControlElement_beginDomainDef } from "../ISO-9506-MMS-1/ControlElement-beginDomainDef.ta.mjs";
import { ControlElement_continueDomainDef, _decode_ControlElement_continueDomainDef, _encode_ControlElement_continueDomainDef } from "../ISO-9506-MMS-1/ControlElement-continueDomainDef.ta.mjs";
// export { ControlElement_continueDomainDef, _decode_ControlElement_continueDomainDef, _encode_ControlElement_continueDomainDef } from "../ISO-9506-MMS-1/ControlElement-continueDomainDef.ta.mjs";
import { Identifier, _decode_Identifier, _encode_Identifier } from "../ISO-9506-MMS-1/Identifier.ta.mjs";
// export { Identifier, _decode_Identifier, _encode_Identifier } from "../ISO-9506-MMS-1/Identifier.ta.mjs";
import { ControlElement_piDefinition, _decode_ControlElement_piDefinition, _encode_ControlElement_piDefinition } from "../ISO-9506-MMS-1/ControlElement-piDefinition.ta.mjs";
// export { ControlElement_piDefinition, _decode_ControlElement_piDefinition, _encode_ControlElement_piDefinition } from "../ISO-9506-MMS-1/ControlElement-piDefinition.ta.mjs";


/**
 * @summary ControlElement
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ControlElement  ::=  CHOICE {
 *     beginDomainDef         [0] SEQUENCE {
 *         domainName             [1] IMPLICIT Identifier,
 *         capabilities           [2] IMPLICIT SEQUENCE OF MMSString,
 *         sharable               [3] IMPLICIT BOOLEAN,
 *         loadData               [4] LoadData OPTIONAL
 *     },
 *     continueDomainDef      [1] SEQUENCE {
 *         domainName             [1] IMPLICIT Identifier,
 *         loadData               [3] LoadData
 *     },
 *     endDomainDef           [2] IMPLICIT Identifier,
 *     piDefinition           [3] IMPLICIT SEQUENCE {
 *         piName                 [0] IMPLICIT Identifier,
 *         listOfDomains          [1] IMPLICIT SEQUENCE OF Identifier,
 *         reusable               [2] IMPLICIT BOOLEAN DEFAULT TRUE,
 *         monitorType            [3] IMPLICIT BOOLEAN OPTIONAL,
 *         pIState                [4] IMPLICIT ProgramInvocationState OPTIONAL
 *     }
 * }
 * ```
 */
export
type ControlElement =
    { beginDomainDef: ControlElement_beginDomainDef } /* CHOICE_ALT_ROOT */
    | { continueDomainDef: ControlElement_continueDomainDef } /* CHOICE_ALT_ROOT */
    | { endDomainDef: Identifier } /* CHOICE_ALT_ROOT */
    | { piDefinition: ControlElement_piDefinition } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_ControlElement: $.ASN1Decoder<ControlElement> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ControlElement
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ControlElement (el: _Element): ControlElement {
    if (!_cached_decoder_for_ControlElement) { _cached_decoder_for_ControlElement = $._decode_inextensible_choice<ControlElement>({
    "CONTEXT 0": [ "beginDomainDef", $._decode_implicit<ControlElement_beginDomainDef>(() => _decode_ControlElement_beginDomainDef) ],
    "CONTEXT 1": [ "continueDomainDef", $._decode_implicit<ControlElement_continueDomainDef>(() => _decode_ControlElement_continueDomainDef) ],
    "CONTEXT 2": [ "endDomainDef", $._decode_explicit<Identifier>(() => _decode_Identifier) ],
    "CONTEXT 3": [ "piDefinition", $._decode_implicit<ControlElement_piDefinition>(() => _decode_ControlElement_piDefinition) ]
}); }
    return _cached_decoder_for_ControlElement(el);
}

let _cached_encoder_for_ControlElement: $.ASN1Encoder<ControlElement> | null = null;

/**
 * @summary Encodes a(n) ControlElement into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ControlElement, encoded as an ASN.1 Element.
 */
export
function _encode_ControlElement (value: ControlElement, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ControlElement) { _cached_encoder_for_ControlElement = $._encode_choice<ControlElement>({
    "beginDomainDef": $._encode_implicit(_TagClass.context, 0, () => _encode_ControlElement_beginDomainDef, $.BER),
    "continueDomainDef": $._encode_implicit(_TagClass.context, 1, () => _encode_ControlElement_continueDomainDef, $.BER),
    "endDomainDef": $._encode_explicit(_TagClass.context, 2, () => _encode_Identifier, $.BER),
    "piDefinition": $._encode_implicit(_TagClass.context, 3, () => _encode_ControlElement_piDefinition, $.BER),
}, $.BER); }
    return _cached_encoder_for_ControlElement(value, elGetter);
}


/* eslint-enable */
