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
import { Access_Control_List_instance_definition_details, _decode_Access_Control_List_instance_definition_details, _encode_Access_Control_List_instance_definition_details } from "../MMS-SCI-Module-1/Access-Control-List-instance-definition-details.ta.mjs";
// export { Access_Control_List_instance_definition_details, _decode_Access_Control_List_instance_definition_details, _encode_Access_Control_List_instance_definition_details } from "../MMS-SCI-Module-1/Access-Control-List-instance-definition-details.ta.mjs";


/**
 * @summary Access_Control_List_instance_definition
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Access-Control-List-instance-definition ::= CHOICE {
 *     reference [1] IMPLICIT OBJECT IDENTIFIER,
 *     details [2] IMPLICIT SEQUENCE {
 *         accessControl [3] IMPLICIT Access-Control-List-instance,
 *         readAccessCondition [4] AccessCondition OPTIONAL,
 *         storeAccessCondition [5] AccessCondition OPTIONAL,
 *         writeAccessCondition [6] AccessCondition OPTIONAL,
 *         loadAccessCondition [7] AccessCondition OPTIONAL,
 *         executeAccessCondition [8] AccessCondition OPTIONAL,
 *         deleteAccessCondition [9] AccessCondition OPTIONAL,
 *         editAccessCondition [10] AccessCondition OPTIONAL,
 *         --
 *         -- The following fields are used to record lists of objects placed
 *         -- under the control of this ACCESS-CONTROL-LIST object.
 *         -- They will be referred to collectively as the Controlled Object Lists
 *         --
 *         accessControlLists [11] IMPLICIT SEQUENCE OF Access-Control-List-instance,
 *         domains [12] IMPLICIT SEQUENCE OF Domain-instance,
 *         programInvocations [13] IMPLICIT SEQUENCE OF Program-Invocation-instance,
 *         unitControls [14] IMPLICIT SEQUENCE OF Unit-Control-instance,
 *         unnamedVariables [15] IMPLICIT SEQUENCE OF Unnamed-Variable-instance,
 *         unnamedVariables [15] IMPLICIT NULL,
 *         namedVariables [16] IMPLICIT SEQUENCE OF Named-Variable-instance,
 *         namedVariableLists [17] IMPLICIT SEQUENCE OF Named-Variable-List-instance,
 *         namedVariableLists [17] IMPLICIT NULL,
 *         namedTypes [18] IMPLICIT SEQUENCE OF Named-Type-instance,
 *         namedVariables [16] IMPLICIT NULL,
 *         namedVariableLists [17] IMPLICIT NULL,
 *         namedTypes [18] IMPLICIT NULL,
 *         dataExchanges [19] IMPLICIT SEQUENCE OF Data-Exchange-instance,
 *         semaphores [20] IMPLICIT SEQUENCE OF Semaphore-instance,
 *         operatorStations [21] IMPLICIT SEQUENCE OF Operator-Station-instance,
 *         eventConditions [22] IMPLICIT SEQUENCE OF Event-Condition-instance,
 *         eventActions [23] IMPLICIT SEQUENCE OF Event-Action-instance,
 *         eventEnrollments [24] IMPLICIT SEQUENCE OF Event-Enrollment-instance,
 *         journals [25] IMPLICIT SEQUENCE OF Journal-instance,
 *         ...,
 *         eventConditionLists [26] IMPLICIT SEQUENCE OF Event-Condition-List-instance
 *     }
 * }
 * ```
 */
export
type Access_Control_List_instance_definition =
    { reference: OBJECT_IDENTIFIER } /* CHOICE_ALT_ROOT */
    | { details: Access_Control_List_instance_definition_details } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_Access_Control_List_instance_definition: $.ASN1Decoder<Access_Control_List_instance_definition> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Access_Control_List_instance_definition
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Access_Control_List_instance_definition (el: _Element): Access_Control_List_instance_definition {
    if (!_cached_decoder_for_Access_Control_List_instance_definition) { _cached_decoder_for_Access_Control_List_instance_definition = $._decode_inextensible_choice<Access_Control_List_instance_definition>({
    "CONTEXT 1": [ "reference", $._decode_implicit<OBJECT_IDENTIFIER>(() => $._decodeObjectIdentifier) ],
    "CONTEXT 2": [ "details", $._decode_implicit<Access_Control_List_instance_definition_details>(() => _decode_Access_Control_List_instance_definition_details) ]
}); }
    return _cached_decoder_for_Access_Control_List_instance_definition(el);
}

let _cached_encoder_for_Access_Control_List_instance_definition: $.ASN1Encoder<Access_Control_List_instance_definition> | null = null;

/**
 * @summary Encodes a(n) Access_Control_List_instance_definition into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Access_Control_List_instance_definition, encoded as an ASN.1 Element.
 */
export
function _encode_Access_Control_List_instance_definition (value: Access_Control_List_instance_definition, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Access_Control_List_instance_definition) { _cached_encoder_for_Access_Control_List_instance_definition = $._encode_choice<Access_Control_List_instance_definition>({
    "reference": $._encode_implicit(_TagClass.context, 1, () => $._encodeObjectIdentifier, $.BER),
    "details": $._encode_implicit(_TagClass.context, 2, () => _encode_Access_Control_List_instance_definition_details, $.BER),
}, $.BER); }
    return _cached_encoder_for_Access_Control_List_instance_definition(value, elGetter);
}


/* eslint-enable */
