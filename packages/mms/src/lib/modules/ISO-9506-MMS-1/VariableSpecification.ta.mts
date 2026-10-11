/* eslint-disable */
import {
    NULL,
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
import { Address, _decode_Address, _encode_Address } from "../MMS-Object-Module-1/Address.ta.mjs";
import { VariableSpecification_variableDescription, _decode_VariableSpecification_variableDescription, _encode_VariableSpecification_variableDescription } from "../ISO-9506-MMS-1/VariableSpecification-variableDescription.ta.mjs";
import { ScatteredAccessDescription, _decode_ScatteredAccessDescription, _encode_ScatteredAccessDescription } from "../ISO-9506-MMS-1A/ScatteredAccessDescription.ta.mjs";


/**
 * @summary VariableSpecification
 * @description
 *
 * Access to a single MMS variable.
 * ISO 9506-1:2003 §14.5.2. ISO 9506-2:2003 §14.5.2.
 *
 * - `name`: Named Variable (`vnam` CBB).
 * - `address`: Unnamed Variable (`vadr` CBB).
 * - `variableDescription`: temporarily created Named
 *   Variable (SINGLE); deleted after the access (`vadr`).
 * - `scatteredAccessDescription`: annex E only (`vsca`).
 * - `invalidated`: attempted access to an invalidated
 *   variable; responses/confirms only.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * VariableSpecification  ::=  CHOICE {
 *    name                   [0] ObjectName,
 *    address             [1] Address,
 *    variableDescription [2] IMPLICIT SEQUENCE {
 *        address                Address,
 *        typeSpecification      TypeSpecification
 *        },
 *    -- the following element is only present to support the services
 *    -- defined in annex E
 *    scatteredAccessDescription    [3] IMPLICIT ScatteredAccessDescription,
 *    scatteredAccessDescription    [3] IMPLICIT NULL,
 *    invalidated                   [4] IMPLICIT NULL
 * }
 * ```
 */
export
type VariableSpecification =
    { name: ObjectName } /* CHOICE_ALT_ROOT */
    | { address: Address } /* CHOICE_ALT_ROOT */
    | { variableDescription: VariableSpecification_variableDescription } /* CHOICE_ALT_ROOT */
    | { scatteredAccessDescription: ScatteredAccessDescription } /* CHOICE_ALT_ROOT */
    | { scatteredAccessDescription: NULL } /* CHOICE_ALT_ROOT */
    | { invalidated: NULL } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_VariableSpecification: $.ASN1Decoder<VariableSpecification> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) VariableSpecification
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_VariableSpecification (el: _Element): VariableSpecification {
    if (!_cached_decoder_for_VariableSpecification) { _cached_decoder_for_VariableSpecification = $._decode_inextensible_choice<VariableSpecification>({
    "CONTEXT 0": [ "name", $._decode_explicit<ObjectName>(() => _decode_ObjectName) ],
    "CONTEXT 1": [ "address", $._decode_explicit<Address>(() => _decode_Address) ],
    "CONTEXT 2": [ "variableDescription", $._decode_implicit<VariableSpecification_variableDescription>(() => _decode_VariableSpecification_variableDescription) ],
    "CONTEXT 3": [ "scatteredAccessDescription", (el: _Element) => ((el.construction === _Construction.primitive && el.value.length === 0)
        ? $._decode_implicit<NULL>(() => $._decodeNull)(el)
        : $._decode_implicit<ScatteredAccessDescription>(() => _decode_ScatteredAccessDescription)(el)) ],
    "CONTEXT 4": [ "invalidated", $._decode_implicit<NULL>(() => $._decodeNull) ]
}); }
    return _cached_decoder_for_VariableSpecification(el);
}

let _cached_encoder_for_VariableSpecification: $.ASN1Encoder<VariableSpecification> | null = null;

/**
 * @summary Encodes a(n) VariableSpecification into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The VariableSpecification, encoded as an ASN.1 Element.
 */
export
function _encode_VariableSpecification (value: VariableSpecification, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_VariableSpecification) { _cached_encoder_for_VariableSpecification = $._encode_choice<VariableSpecification>({
    "name": $._encode_explicit(_TagClass.context, 0, () => _encode_ObjectName, $.BER),
    "address": $._encode_explicit(_TagClass.context, 1, () => _encode_Address, $.BER),
    "variableDescription": $._encode_implicit(_TagClass.context, 2, () => _encode_VariableSpecification_variableDescription, $.BER),
    "scatteredAccessDescription": (value: any, elGetter: $.ASN1Encoder<any>): _Element => (value === null
        ? $._encode_implicit(_TagClass.context, 3, () => $._encodeNull, $.BER)(value, elGetter)
        : $._encode_implicit(_TagClass.context, 3, () => _encode_ScatteredAccessDescription, $.BER)(value, elGetter)),
    "invalidated": $._encode_implicit(_TagClass.context, 4, () => $._encodeNull, $.BER),
}, $.BER); }
    return _cached_encoder_for_VariableSpecification(value, elGetter);
}


/* eslint-enable */
