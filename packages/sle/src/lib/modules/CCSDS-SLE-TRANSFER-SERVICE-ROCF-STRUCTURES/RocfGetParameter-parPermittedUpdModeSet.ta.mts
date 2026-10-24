/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Error
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type ParameterName, _decode_ParameterName, _encode_ParameterName,
    ParameterName_permittedUpdateModeSet
} from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/ParameterName.ta.mjs";
import { type UpdateMode, _decode_UpdateMode, _encode_UpdateMode } from "../CCSDS-SLE-TRANSFER-SERVICE-ROCF-STRUCTURES/UpdateMode.ta.mjs";



/**
 * @summary RocfGetParameter_parPermittedUpdModeSet
 * @description
 * 
 * Successful ROCF-GET-PARAMETER result for the permitted update-mode set.
 * Service management sets which of continuous and change-based this instance
 * may use. ROCF-START must select a member.
 *
 * CCSDS 911.5-B-4, section 3.4.2.10 and table 3-11.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RocfGetParameter-parPermittedUpdModeSet ::= SEQUENCE
 *    {  parameterName                 ParameterName (permittedUpdateModeSet)
 *    ,  parameterValue                SEQUENCE OF UpdateMode
 *    }
 * ```
 * 
 * @class
 */
export
class RocfGetParameter_parPermittedUpdModeSet {
    /**
     * @summary `parameterName`.
     * @description
     * 
     * Fixed to permittedUpdateModeSet. CCSDS 911.5-B-4, table 3-11.
     * @public
     * @readonly
     */
    readonly parameterName: ParameterName;
    /**
     * @summary `parameterValue`.
     * @description
     * 
     * Update modes the user may request. continuous delivers every matching
     * OCF. changeBased delivers an OCF when its contents differ from the
     * previous OCF with the same telecommand VC. A START mode outside this set
     * is rejected as an invalid update mode.
     *
     * CCSDS 911.5-B-4, sections 3.4.2.10 and 3.4.2.12 and table 3-11.
     * @public
     * @readonly
     */
    readonly parameterValue: UpdateMode[];

    constructor (
        parameterName: ParameterName,
        parameterValue: UpdateMode[]
    ) {
        if (parameterName !== ParameterName_permittedUpdateModeSet) {
            throw new ASN1Error("RocfGetParameter_parPermittedUpdModeSet.parameterName violates ParameterName (permittedUpdateModeSet)");
        }
        this.parameterName = parameterName;
        this.parameterValue = parameterValue;
    }

    /**
     * @summary Restructures an object into a RocfGetParameter_parPermittedUpdModeSet
     * @description
     * 
     * This takes an `object` and converts it to a `RocfGetParameter_parPermittedUpdModeSet`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RocfGetParameter_parPermittedUpdModeSet`.
     * @returns {RocfGetParameter_parPermittedUpdModeSet}
     */
    public static _from_object (_o: { [_K in keyof (RocfGetParameter_parPermittedUpdModeSet)]: (RocfGetParameter_parPermittedUpdModeSet)[_K] }): RocfGetParameter_parPermittedUpdModeSet {
        return new RocfGetParameter_parPermittedUpdModeSet(_o.parameterName, _o.parameterValue);
    }


}

/**
 * @summary The Leading Root Component Types of RocfGetParameter_parPermittedUpdModeSet
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RocfGetParameter_parPermittedUpdModeSet: $.ComponentSpec[] = [
    new $.ComponentSpec("parameterName", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("parameterValue", false, $.hasTag(_TagClass.universal, 16))
];

/**
 * @summary The Trailing Root Component Types of RocfGetParameter_parPermittedUpdModeSet
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RocfGetParameter_parPermittedUpdModeSet: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RocfGetParameter_parPermittedUpdModeSet
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RocfGetParameter_parPermittedUpdModeSet: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_RocfGetParameter_parPermittedUpdModeSet: $.ASN1Decoder<RocfGetParameter_parPermittedUpdModeSet> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RocfGetParameter_parPermittedUpdModeSet
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RocfGetParameter_parPermittedUpdModeSet (el: _Element): RocfGetParameter_parPermittedUpdModeSet {
    if (!_cached_decoder_for_RocfGetParameter_parPermittedUpdModeSet) { _cached_decoder_for_RocfGetParameter_parPermittedUpdModeSet = function (el: _Element): RocfGetParameter_parPermittedUpdModeSet {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("RocfGetParameter-parPermittedUpdModeSet contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "parameterName";
    sequence[1].name = "parameterValue";
    let parameterName!: ParameterName;
    let parameterValue!: UpdateMode[];
    parameterName = _decode_ParameterName(sequence[0]);
    parameterValue = $._decodeSequenceOf<UpdateMode>(() => _decode_UpdateMode)(sequence[1]);
    return new RocfGetParameter_parPermittedUpdModeSet(
        parameterName,
        parameterValue,

    );
}; }
    return _cached_decoder_for_RocfGetParameter_parPermittedUpdModeSet(el);
}

let _cached_encoder_for_RocfGetParameter_parPermittedUpdModeSet: $.ASN1Encoder<RocfGetParameter_parPermittedUpdModeSet> | null = null;

/**
 * @summary Encodes a(n) RocfGetParameter_parPermittedUpdModeSet into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RocfGetParameter_parPermittedUpdModeSet, encoded as an ASN.1 Element.
 */
export
function _encode_RocfGetParameter_parPermittedUpdModeSet (value: RocfGetParameter_parPermittedUpdModeSet, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RocfGetParameter_parPermittedUpdModeSet) { _cached_encoder_for_RocfGetParameter_parPermittedUpdModeSet = function (value: RocfGetParameter_parPermittedUpdModeSet, _elGetter: $.ASN1Encoder<RocfGetParameter_parPermittedUpdModeSet>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ _encode_ParameterName(value.parameterName, $.BER),
        /* REQUIRED   */ $._encodeSequenceOf<UpdateMode>(() => _encode_UpdateMode, $.BER)(value.parameterValue, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_RocfGetParameter_parPermittedUpdModeSet(value, elGetter);
}


/* eslint-enable */
