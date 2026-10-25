/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    type INTEGER,
    ASN1Error,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_ParameterName, _encode_ParameterName, type ParameterName,
    ParameterName_fopSlidingWindow
} from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/ParameterName.ta.mjs";




import { integerInRange } from "../../constraints.mjs";

/**
 * @summary FspGetParameter_parFopSlidWindow
 * @description
 * 
 * fop-sliding-window: how many frames may be transmitted on this VC before an
 * acknowledgement is required. The value is an integer from 1 to 255 (annex
 * A2.5). Service management sets it. FSP-INVOKE-DIRECTIVE may also set it
 * (table 3-1).
 * 
 * When unacknowledged AD and BC frames reach this width, expedited Frame Data
 * Units are still passed to the FOP (annex B3.18).
 * 
 * CCSDS 912.3-B-3, table 3-11, annex A2.5, and annex B3.18.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FspGetParameter-parFopSlidWindow ::= SEQUENCE
 *    {  parameterName     ParameterName (fopSlidingWindow)
 *    ,  parameterValue    INTEGER (1 .. 255)
 *    }
 * ```
 * 
 * @class
 */
export
class FspGetParameter_parFopSlidWindow {
    /**
     * @summary `parameterName`.
     * @description
     * Fixed to `fopSlidingWindow`, selecting fop-sliding-window in table 3-11.
     * CCSDS 912.3-B-3, section 3.10.2.5.
     * @public
     * @readonly
     */
    readonly parameterName: ParameterName;
    /**
     * @summary `parameterValue`.
     * @description
     * Frames that may be sent on this VC before an acknowledgement is required.
     * Integer from 1 to 255. CCSDS 912.3-B-3, table 3-11 and annex A2.5.
     * @public
     * @readonly
     */
    readonly parameterValue: INTEGER;

    constructor (
        parameterName: ParameterName,
        parameterValue: INTEGER
    ) {
        if (parameterName !== ParameterName_fopSlidingWindow) {
            throw new ASN1Error("FspGetParameter_parFopSlidWindow.parameterName violates ParameterName (fopSlidingWindow)");
        }
        if (!integerInRange(parameterValue, 1, 255)) {
            throw new ASN1OverflowError("FspGetParameter_parFopSlidWindow.parameterValue violates INTEGER (1..255)");
        }
        this.parameterName = parameterName;
        this.parameterValue = parameterValue;
    }

    /**
     * @summary Restructures an object into a FspGetParameter_parFopSlidWindow
     * @description
     * 
     * This takes an `object` and converts it to a `FspGetParameter_parFopSlidWindow`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `FspGetParameter_parFopSlidWindow`.
     * @returns {FspGetParameter_parFopSlidWindow}
     */
    public static _from_object (_o: { [_K in keyof (FspGetParameter_parFopSlidWindow)]: (FspGetParameter_parFopSlidWindow)[_K] }): FspGetParameter_parFopSlidWindow {
        return new FspGetParameter_parFopSlidWindow(_o.parameterName, _o.parameterValue);
    }


}

/**
 * @summary The Leading Root Component Types of FspGetParameter_parFopSlidWindow
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_FspGetParameter_parFopSlidWindow: $.ComponentSpec[] = [
    new $.ComponentSpec("parameterName", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("parameterValue", false, $.hasTag(_TagClass.universal, 2))
];

/**
 * @summary The Trailing Root Component Types of FspGetParameter_parFopSlidWindow
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_FspGetParameter_parFopSlidWindow: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of FspGetParameter_parFopSlidWindow
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_FspGetParameter_parFopSlidWindow: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_FspGetParameter_parFopSlidWindow: $.ASN1Decoder<FspGetParameter_parFopSlidWindow> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FspGetParameter_parFopSlidWindow
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FspGetParameter_parFopSlidWindow (el: _Element): FspGetParameter_parFopSlidWindow {
    if (!_cached_decoder_for_FspGetParameter_parFopSlidWindow) { _cached_decoder_for_FspGetParameter_parFopSlidWindow = function (el: _Element): FspGetParameter_parFopSlidWindow {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("FspGetParameter-parFopSlidWindow contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "parameterName";
    sequence[1].name = "parameterValue";
    let parameterName!: ParameterName;
    let parameterValue!: INTEGER;
    parameterName = _decode_ParameterName(sequence[0]);
    parameterValue = $._decodeInteger(sequence[1]);
    return new FspGetParameter_parFopSlidWindow(
        parameterName,
        parameterValue,

    );
}; }
    return _cached_decoder_for_FspGetParameter_parFopSlidWindow(el);
}

let _cached_encoder_for_FspGetParameter_parFopSlidWindow: $.ASN1Encoder<FspGetParameter_parFopSlidWindow> | null = null;

/**
 * @summary Encodes a(n) FspGetParameter_parFopSlidWindow into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FspGetParameter_parFopSlidWindow, encoded as an ASN.1 Element.
 */
export
function _encode_FspGetParameter_parFopSlidWindow (value: FspGetParameter_parFopSlidWindow, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FspGetParameter_parFopSlidWindow) { _cached_encoder_for_FspGetParameter_parFopSlidWindow = function (value: FspGetParameter_parFopSlidWindow, _elGetter: $.ASN1Encoder<FspGetParameter_parFopSlidWindow>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ _encode_ParameterName(value.parameterName, $.BER),
        /* REQUIRED   */ $._encodeInteger(value.parameterValue, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_FspGetParameter_parFopSlidWindow(value, elGetter);
}


/* eslint-enable */
