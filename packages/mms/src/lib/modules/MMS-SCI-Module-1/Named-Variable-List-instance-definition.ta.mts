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
import { Named_Variable_List_instance_definition_details, _decode_Named_Variable_List_instance_definition_details, _encode_Named_Variable_List_instance_definition_details } from "../MMS-SCI-Module-1/Named-Variable-List-instance-definition-details.ta.mjs";
// export { Named_Variable_List_instance_definition_details, _decode_Named_Variable_List_instance_definition_details, _encode_Named_Variable_List_instance_definition_details } from "../MMS-SCI-Module-1/Named-Variable-List-instance-definition-details.ta.mjs";


/**
 * @summary Named_Variable_List_instance_definition
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Named-Variable-List-instance-definition ::= CHOICE {
 *     reference [1] IMPLICIT OBJECT IDENTIFIER,
 *     details [2] IMPLICIT SEQUENCE {
 *         accessControl [3] IMPLICIT Access-Control-List-instance,
 *         listOfVariables [4] IMPLICIT SEQUENCE OF Variable-List-Item-instance
 *     }
 * }
 * ```
 */
export
type Named_Variable_List_instance_definition =
    { reference: OBJECT_IDENTIFIER } /* CHOICE_ALT_ROOT */
    | { details: Named_Variable_List_instance_definition_details } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_Named_Variable_List_instance_definition: $.ASN1Decoder<Named_Variable_List_instance_definition> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Named_Variable_List_instance_definition
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Named_Variable_List_instance_definition (el: _Element): Named_Variable_List_instance_definition {
    if (!_cached_decoder_for_Named_Variable_List_instance_definition) { _cached_decoder_for_Named_Variable_List_instance_definition = $._decode_inextensible_choice<Named_Variable_List_instance_definition>({
    "CONTEXT 1": [ "reference", $._decode_implicit<OBJECT_IDENTIFIER>(() => $._decodeObjectIdentifier) ],
    "CONTEXT 2": [ "details", $._decode_implicit<Named_Variable_List_instance_definition_details>(() => _decode_Named_Variable_List_instance_definition_details) ]
}); }
    return _cached_decoder_for_Named_Variable_List_instance_definition(el);
}

let _cached_encoder_for_Named_Variable_List_instance_definition: $.ASN1Encoder<Named_Variable_List_instance_definition> | null = null;

/**
 * @summary Encodes a(n) Named_Variable_List_instance_definition into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Named_Variable_List_instance_definition, encoded as an ASN.1 Element.
 */
export
function _encode_Named_Variable_List_instance_definition (value: Named_Variable_List_instance_definition, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Named_Variable_List_instance_definition) { _cached_encoder_for_Named_Variable_List_instance_definition = $._encode_choice<Named_Variable_List_instance_definition>({
    "reference": $._encode_implicit(_TagClass.context, 1, () => $._encodeObjectIdentifier, $.BER),
    "details": $._encode_implicit(_TagClass.context, 2, () => _encode_Named_Variable_List_instance_definition_details, $.BER),
}, $.BER); }
    return _cached_encoder_for_Named_Variable_List_instance_definition(value, elGetter);
}


/* eslint-enable */
