/* eslint-disable */
import {
    OBJECT_IDENTIFIER,
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
import { Operator_Station_instance_definition_details, _decode_Operator_Station_instance_definition_details, _encode_Operator_Station_instance_definition_details } from "../MMS-SCI-Module-1/Operator-Station-instance-definition-details.ta.mjs";
// export { Operator_Station_instance_definition_details, _decode_Operator_Station_instance_definition_details, _encode_Operator_Station_instance_definition_details } from "../MMS-SCI-Module-1/Operator-Station-instance-definition-details.ta.mjs";


/**
 * @summary Operator_Station_instance_definition
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Operator-Station-instance-definition ::= CHOICE {
 *     reference [1] IMPLICIT OBJECT IDENTIFIER,
 *     details [2] IMPLICIT SEQUENCE {
 *         accessControl [3] IMPLICIT Access-Control-List-instance,
 *         stationType [4] IMPLICIT ENUMERATED {
 *             entry,
 *             display,
 *             entry-display
 *         }
 *     }
 * }
 * ```
 */
export
type Operator_Station_instance_definition =
    { reference: OBJECT_IDENTIFIER } /* CHOICE_ALT_ROOT */
    | { details: Operator_Station_instance_definition_details } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_Operator_Station_instance_definition: $.ASN1Decoder<Operator_Station_instance_definition> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Operator_Station_instance_definition
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Operator_Station_instance_definition (el: _Element): Operator_Station_instance_definition {
    if (!_cached_decoder_for_Operator_Station_instance_definition) { _cached_decoder_for_Operator_Station_instance_definition = $._decode_inextensible_choice<Operator_Station_instance_definition>({
    "CONTEXT 1": [ "reference", $._decode_implicit<OBJECT_IDENTIFIER>(() => $._decodeObjectIdentifier) ],
    "CONTEXT 2": [ "details", $._decode_implicit<Operator_Station_instance_definition_details>(() => _decode_Operator_Station_instance_definition_details) ]
}); }
    return _cached_decoder_for_Operator_Station_instance_definition(el);
}

let _cached_encoder_for_Operator_Station_instance_definition: $.ASN1Encoder<Operator_Station_instance_definition> | null = null;

/**
 * @summary Encodes a(n) Operator_Station_instance_definition into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Operator_Station_instance_definition, encoded as an ASN.1 Element.
 */
export
function _encode_Operator_Station_instance_definition (value: Operator_Station_instance_definition, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Operator_Station_instance_definition) { _cached_encoder_for_Operator_Station_instance_definition = $._encode_choice<Operator_Station_instance_definition>({
    "reference": $._encode_implicit(_TagClass.context, 1, () => $._encodeObjectIdentifier, $.BER),
    "details": $._encode_implicit(_TagClass.context, 2, () => _encode_Operator_Station_instance_definition_details, $.BER),
}, $.BER); }
    return _cached_encoder_for_Operator_Station_instance_definition(value, elGetter);
}


/* eslint-enable */
