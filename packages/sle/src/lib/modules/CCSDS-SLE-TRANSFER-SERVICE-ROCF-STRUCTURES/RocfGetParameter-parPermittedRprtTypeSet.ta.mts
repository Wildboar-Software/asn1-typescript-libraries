/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Error
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type ParameterName, _decode_ParameterName, _encode_ParameterName,
    ParameterName_permittedControlWordTypeSet
} from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/ParameterName.ta.mjs";
import { type ControlWordTypeNumber, _decode_ControlWordTypeNumber, _encode_ControlWordTypeNumber } from "../CCSDS-SLE-TRANSFER-SERVICE-ROCF-STRUCTURES/ControlWordTypeNumber.ta.mjs";



/**
 * @summary RocfGetParameter_parPermittedRprtTypeSet
 * @description
 * 
 * Successful ROCF-GET-PARAMETER result for the permitted control-word-type
 * set. Service management sets which of all control words, CLCW, and control
 * word type 1 this instance may deliver. ROCF-START must select a member.
 *
 * CCSDS 911.5-B-4, section 3.4.2.8 and table 3-11.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RocfGetParameter-parPermittedRprtTypeSet ::= SEQUENCE
 *    {  parameterName                 ParameterName
 *                                        (permittedControlWordTypeSet)
 *    ,  parameterValue                SEQUENCE OF ControlWordTypeNumber
 *    }
 * ```
 * 
 * @class
 */
export
class RocfGetParameter_parPermittedRprtTypeSet {
    /**
     * @summary `parameterName`.
     * @description
     * 
     * Fixed to permittedControlWordTypeSet. CCSDS 911.5-B-4, table 3-11.
     * @public
     * @readonly
     */
    readonly parameterName: ParameterName;
    /**
     * @summary `parameterValue`.
     * @description
     * 
     * Control word types the user may request. Each element is all control
     * words, CLCW (control word type 0), or control word type 1, the setting
     * used to obtain Frame Security Reports.
     *
     * CCSDS 911.5-B-4, section 3.4.2.8 and table 3-11.
     * @public
     * @readonly
     */
    readonly parameterValue: ControlWordTypeNumber[];

    constructor (
        parameterName: ParameterName,
        parameterValue: ControlWordTypeNumber[]
    ) {
        if (parameterName !== ParameterName_permittedControlWordTypeSet) {
            throw new ASN1Error("RocfGetParameter_parPermittedRprtTypeSet.parameterName violates ParameterName (permittedControlWordTypeSet)");
        }
        this.parameterName = parameterName;
        this.parameterValue = parameterValue;
    }

    /**
     * @summary Restructures an object into a RocfGetParameter_parPermittedRprtTypeSet
     * @description
     * 
     * This takes an `object` and converts it to a `RocfGetParameter_parPermittedRprtTypeSet`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RocfGetParameter_parPermittedRprtTypeSet`.
     * @returns {RocfGetParameter_parPermittedRprtTypeSet}
     */
    public static _from_object (_o: { [_K in keyof (RocfGetParameter_parPermittedRprtTypeSet)]: (RocfGetParameter_parPermittedRprtTypeSet)[_K] }): RocfGetParameter_parPermittedRprtTypeSet {
        return new RocfGetParameter_parPermittedRprtTypeSet(_o.parameterName, _o.parameterValue);
    }


}

/**
 * @summary The Leading Root Component Types of RocfGetParameter_parPermittedRprtTypeSet
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RocfGetParameter_parPermittedRprtTypeSet: $.ComponentSpec[] = [
    new $.ComponentSpec("parameterName", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("parameterValue", false, $.hasTag(_TagClass.universal, 16))
];

/**
 * @summary The Trailing Root Component Types of RocfGetParameter_parPermittedRprtTypeSet
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RocfGetParameter_parPermittedRprtTypeSet: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RocfGetParameter_parPermittedRprtTypeSet
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RocfGetParameter_parPermittedRprtTypeSet: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_RocfGetParameter_parPermittedRprtTypeSet: $.ASN1Decoder<RocfGetParameter_parPermittedRprtTypeSet> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RocfGetParameter_parPermittedRprtTypeSet
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RocfGetParameter_parPermittedRprtTypeSet (el: _Element): RocfGetParameter_parPermittedRprtTypeSet {
    if (!_cached_decoder_for_RocfGetParameter_parPermittedRprtTypeSet) { _cached_decoder_for_RocfGetParameter_parPermittedRprtTypeSet = function (el: _Element): RocfGetParameter_parPermittedRprtTypeSet {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("RocfGetParameter-parPermittedRprtTypeSet contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "parameterName";
    sequence[1].name = "parameterValue";
    let parameterName!: ParameterName;
    let parameterValue!: ControlWordTypeNumber[];
    parameterName = _decode_ParameterName(sequence[0]);
    parameterValue = $._decodeSequenceOf<ControlWordTypeNumber>(() => _decode_ControlWordTypeNumber)(sequence[1]);
    return new RocfGetParameter_parPermittedRprtTypeSet(
        parameterName,
        parameterValue,

    );
}; }
    return _cached_decoder_for_RocfGetParameter_parPermittedRprtTypeSet(el);
}

let _cached_encoder_for_RocfGetParameter_parPermittedRprtTypeSet: $.ASN1Encoder<RocfGetParameter_parPermittedRprtTypeSet> | null = null;

/**
 * @summary Encodes a(n) RocfGetParameter_parPermittedRprtTypeSet into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RocfGetParameter_parPermittedRprtTypeSet, encoded as an ASN.1 Element.
 */
export
function _encode_RocfGetParameter_parPermittedRprtTypeSet (value: RocfGetParameter_parPermittedRprtTypeSet, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RocfGetParameter_parPermittedRprtTypeSet) { _cached_encoder_for_RocfGetParameter_parPermittedRprtTypeSet = function (value: RocfGetParameter_parPermittedRprtTypeSet, _elGetter: $.ASN1Encoder<RocfGetParameter_parPermittedRprtTypeSet>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ _encode_ParameterName(value.parameterName, $.BER),
        /* REQUIRED   */ $._encodeSequenceOf<ControlWordTypeNumber>(() => _encode_ControlWordTypeNumber, $.BER)(value.parameterValue, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_RocfGetParameter_parPermittedRprtTypeSet(value, elGetter);
}


/* eslint-enable */
