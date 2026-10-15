/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Error
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ParameterName, _decode_ParameterName, _encode_ParameterName,
    ParameterName_timerInitial
} from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/ParameterName.ta.mjs";
import { IntPosLong, _decode_IntPosLong, _encode_IntPosLong } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/IntPosLong.ta.mjs";



/**
 * @summary FspGetParameter_parTimerInitial
 * @description
 * 
 * timer-initial: the initial countdown, in microseconds, used when an AD or BC
 * frame is transmitted. Service management sets it. FSP-INVOKE-DIRECTIVE may
 * also set it (table 3-1).
 * 
 * Annex A2.1 types the value as `IntPosLong` (1 to 4294967295). Section 3.10
 * states the unit and does not state a tighter range.
 * 
 * CCSDS 912.3-B-3, table 3-11, table 3-1, and annex A2.1.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FspGetParameter-parTimerInitial ::= SEQUENCE
 *    {  parameterName     ParameterName (timerInitial)
 *    ,  parameterValue    IntPosLong  -- in microseconds
 *    }
 * ```
 * 
 * @class
 */
export
class FspGetParameter_parTimerInitial {
    /**
     * @summary `parameterName`.
     * @description
     * Fixed to `timerInitial`, selecting timer-initial in table 3-11. CCSDS
     * 912.3-B-3, section 3.10.2.5.
     * @public
     * @readonly
     */
    readonly parameterName: ParameterName;
    /**
     * @summary `parameterValue`.
     * @description
     * Initial countdown in microseconds for an AD or BC frame, from 1 to
     * 4294967295. CCSDS 912.3-B-3, table 3-11 and annex A2.1.
     * @public
     * @readonly
     */
    readonly parameterValue: IntPosLong;

    constructor (
        parameterName: ParameterName,
        parameterValue: IntPosLong
    ) {
        if (parameterName !== ParameterName_timerInitial) {
            throw new ASN1Error("FspGetParameter_parTimerInitial.parameterName violates ParameterName (timerInitial)");
        }
        this.parameterName = parameterName;
        this.parameterValue = parameterValue;
    }

    /**
     * @summary Restructures an object into a FspGetParameter_parTimerInitial
     * @description
     * 
     * This takes an `object` and converts it to a `FspGetParameter_parTimerInitial`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `FspGetParameter_parTimerInitial`.
     * @returns {FspGetParameter_parTimerInitial}
     */
    public static _from_object (_o: { [_K in keyof (FspGetParameter_parTimerInitial)]: (FspGetParameter_parTimerInitial)[_K] }): FspGetParameter_parTimerInitial {
        return new FspGetParameter_parTimerInitial(_o.parameterName, _o.parameterValue);
    }


}

/**
 * @summary The Leading Root Component Types of FspGetParameter_parTimerInitial
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_FspGetParameter_parTimerInitial: $.ComponentSpec[] = [
    new $.ComponentSpec("parameterName", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("parameterValue", false, $.hasTag(_TagClass.universal, 2))
];

/**
 * @summary The Trailing Root Component Types of FspGetParameter_parTimerInitial
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_FspGetParameter_parTimerInitial: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of FspGetParameter_parTimerInitial
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_FspGetParameter_parTimerInitial: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_FspGetParameter_parTimerInitial: $.ASN1Decoder<FspGetParameter_parTimerInitial> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FspGetParameter_parTimerInitial
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FspGetParameter_parTimerInitial (el: _Element): FspGetParameter_parTimerInitial {
    if (!_cached_decoder_for_FspGetParameter_parTimerInitial) { _cached_decoder_for_FspGetParameter_parTimerInitial = function (el: _Element): FspGetParameter_parTimerInitial {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("FspGetParameter-parTimerInitial contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "parameterName";
    sequence[1].name = "parameterValue";
    let parameterName!: ParameterName;
    let parameterValue!: IntPosLong;
    parameterName = _decode_ParameterName(sequence[0]);
    parameterValue = _decode_IntPosLong(sequence[1]);
    return new FspGetParameter_parTimerInitial(
        parameterName,
        parameterValue,

    );
}; }
    return _cached_decoder_for_FspGetParameter_parTimerInitial(el);
}

let _cached_encoder_for_FspGetParameter_parTimerInitial: $.ASN1Encoder<FspGetParameter_parTimerInitial> | null = null;

/**
 * @summary Encodes a(n) FspGetParameter_parTimerInitial into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FspGetParameter_parTimerInitial, encoded as an ASN.1 Element.
 */
export
function _encode_FspGetParameter_parTimerInitial (value: FspGetParameter_parTimerInitial, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FspGetParameter_parTimerInitial) { _cached_encoder_for_FspGetParameter_parTimerInitial = function (value: FspGetParameter_parTimerInitial, _elGetter: $.ASN1Encoder<FspGetParameter_parTimerInitial>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ _encode_ParameterName(value.parameterName, $.BER),
        /* REQUIRED   */ _encode_IntPosLong(value.parameterValue, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_FspGetParameter_parTimerInitial(value, elGetter);
}


/* eslint-enable */
