/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Error
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type ParameterName, _decode_ParameterName, _encode_ParameterName,
    ParameterName_vcMuxControl
} from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/ParameterName.ta.mjs";
import { type MuxControl, _decode_MuxControl, _encode_MuxControl } from "../CCSDS-SLE-TRANSFER-SERVICE-FSP-STRUCTURES/MuxControl.ta.mjs";



/**
 * @summary FspGetParameter_parVcMuxControl
 * @description
 * 
 * vc-multiplexing-control: the VC priority list or the VC polling vector. When
 * the VC multiplexing scheme is FIFO, the value is null. Service management
 * sets it.
 * 
 * Annex A2.5 `MuxControl`: FIFO is null; absolute priority is 1 to 64 entries,
 * with priority 1 highest and 64 lowest; a polling vector is 1 to 192 VC
 * identifiers. Annex B4 selects the next TC frame by this scheme.
 * 
 * CCSDS 912.3-B-3, table 3-11, annex A2.5, and annex B4.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FspGetParameter-parVcMuxControl ::= SEQUENCE
 *    {  parameterName     ParameterName (vcMuxControl)
 *    ,  parameterValue    MuxControl
 *    }
 * ```
 * 
 * @class
 */
export
class FspGetParameter_parVcMuxControl {
    /**
     * @summary `parameterName`.
     * @description
     * Fixed to `vcMuxControl`, selecting vc-multiplexing-control in table 3-11.
     * CCSDS 912.3-B-3, section 3.10.2.5.
     * @public
     * @readonly
     */
    readonly parameterName: ParameterName;
    /**
     * @summary `parameterValue`.
     * @description
     * VC priority list or VC polling vector. Null when the scheme is FIFO. A
     * priority list has 1 to 64 entries (1 highest, 64 lowest). A polling
     * vector has 1 to 192 VC identifiers. CCSDS 912.3-B-3, table 3-11 and annex
     * A2.5.
     * @public
     * @readonly
     */
    readonly parameterValue: MuxControl;

    constructor (
        parameterName: ParameterName,
        parameterValue: MuxControl
    ) {
        if (parameterName !== ParameterName_vcMuxControl) {
            throw new ASN1Error("FspGetParameter_parVcMuxControl.parameterName violates ParameterName (vcMuxControl)");
        }
        this.parameterName = parameterName;
        this.parameterValue = parameterValue;
    }

    /**
     * @summary Restructures an object into a FspGetParameter_parVcMuxControl
     * @description
     * 
     * This takes an `object` and converts it to a `FspGetParameter_parVcMuxControl`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `FspGetParameter_parVcMuxControl`.
     * @returns {FspGetParameter_parVcMuxControl}
     */
    public static _from_object (_o: { [_K in keyof (FspGetParameter_parVcMuxControl)]: (FspGetParameter_parVcMuxControl)[_K] }): FspGetParameter_parVcMuxControl {
        return new FspGetParameter_parVcMuxControl(_o.parameterName, _o.parameterValue);
    }


}

/**
 * @summary The Leading Root Component Types of FspGetParameter_parVcMuxControl
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_FspGetParameter_parVcMuxControl: $.ComponentSpec[] = [
    new $.ComponentSpec("parameterName", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("parameterValue", false, $.hasAnyTag)
];

/**
 * @summary The Trailing Root Component Types of FspGetParameter_parVcMuxControl
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_FspGetParameter_parVcMuxControl: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of FspGetParameter_parVcMuxControl
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_FspGetParameter_parVcMuxControl: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_FspGetParameter_parVcMuxControl: $.ASN1Decoder<FspGetParameter_parVcMuxControl> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FspGetParameter_parVcMuxControl
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FspGetParameter_parVcMuxControl (el: _Element): FspGetParameter_parVcMuxControl {
    if (!_cached_decoder_for_FspGetParameter_parVcMuxControl) { _cached_decoder_for_FspGetParameter_parVcMuxControl = function (el: _Element): FspGetParameter_parVcMuxControl {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("FspGetParameter-parVcMuxControl contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "parameterName";
    sequence[1].name = "parameterValue";
    let parameterName!: ParameterName;
    let parameterValue!: MuxControl;
    parameterName = _decode_ParameterName(sequence[0]);
    parameterValue = _decode_MuxControl(sequence[1]);
    return new FspGetParameter_parVcMuxControl(
        parameterName,
        parameterValue,

    );
}; }
    return _cached_decoder_for_FspGetParameter_parVcMuxControl(el);
}

let _cached_encoder_for_FspGetParameter_parVcMuxControl: $.ASN1Encoder<FspGetParameter_parVcMuxControl> | null = null;

/**
 * @summary Encodes a(n) FspGetParameter_parVcMuxControl into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FspGetParameter_parVcMuxControl, encoded as an ASN.1 Element.
 */
export
function _encode_FspGetParameter_parVcMuxControl (value: FspGetParameter_parVcMuxControl, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FspGetParameter_parVcMuxControl) { _cached_encoder_for_FspGetParameter_parVcMuxControl = function (value: FspGetParameter_parVcMuxControl, _elGetter: $.ASN1Encoder<FspGetParameter_parVcMuxControl>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ _encode_ParameterName(value.parameterName, $.BER),
        /* REQUIRED   */ _encode_MuxControl(value.parameterValue, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_FspGetParameter_parVcMuxControl(value, elGetter);
}


/* eslint-enable */
